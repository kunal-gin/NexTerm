// ==========================================================================
// Nexterm — Command Intelligence (#8)
// A natural-language-ish launcher: type an intent, it translates to an
// explicit command. Read-only queries run and show output; actions are
// shown and require an explicit Run click (destructive ones confirm).
// Nothing runs silently.
// ==========================================================================

import { showModal, hideModal } from "../ui/modal.js";
import { showToast, escapeHtml } from "../ui/notifications.js";
import { runSSH, writeToActive, pickTargetTab } from "./sshExec.js";
import { showLogExplorer } from "./logExplorer.js";

// Each recipe: match -> { cmd, label, kind: 'read'|'action', destructive, run? }
const RECIPES = [
  { re: /(?:which\s+)?(?:process|pid).*port\s+(\d+)|port\s+(\d+).*(?:process|pid|use|using)|what.*(?:on|uses)\s+port\s+(\d+)/i,
    build: m => ({ cmd: `ss -tlnp 2>/dev/null | grep :${m[1] || m[2] || m[3]} || sudo ss -tlnp | grep :${m[1] || m[2] || m[3]}`, label: `Find what uses port ${m[1] || m[2] || m[3]}`, kind: "read" }) },
  { re: /(?:show|view|open|tail)\s+(.+?)\s+logs?|logs?\s+(?:of|for)\s+(.+)/i,
    build: m => { const svc = (m[1] || m[2] || "").trim(); return { cmd: `journalctl -u ${svc} -n 120 --no-pager 2>&1 || sudo journalctl -u ${svc} -n 120 --no-pager 2>&1`, label: `Show logs for ${svc}`, kind: "read" }; } },
  { re: /restart\s+(\S+)/i, build: m => ({ cmd: `sudo systemctl restart ${m[1]}`, label: `Restart ${m[1]}`, kind: "action", destructive: true }) },
  { re: /stop\s+(\S+)/i, build: m => ({ cmd: `sudo systemctl stop ${m[1]}`, label: `Stop ${m[1]}`, kind: "action", destructive: true }) },
  { re: /start\s+(\S+)/i, build: m => ({ cmd: `sudo systemctl start ${m[1]}`, label: `Start ${m[1]}`, kind: "action" }) },
  { re: /status\s+(?:of\s+)?(\S+)/i, build: m => ({ cmd: `systemctl status ${m[1]} --no-pager 2>&1 || sudo systemctl status ${m[1]} --no-pager 2>&1`, label: `Status of ${m[1]}`, kind: "read" }) },
  { re: /^(?:open|cd|go to)\s+(\/\S+)/i, build: m => ({ cmd: `cd ${m[1]}`, label: `cd to ${m[1]}`, kind: "action" }) },
  { re: /open\s+log\s*explorer|log\s*explorer/i, build: () => ({ special: "logexplorer", label: "Open Log Explorer", kind: "action" }) },
  { re: /disk|storage|df\b/i, build: () => ({ cmd: `df -h`, label: "Disk usage", kind: "read" }) },
  { re: /memory|ram|free\b/i, build: () => ({ cmd: `free -h`, label: "Memory usage", kind: "read" }) },
  { re: /who|logged|users\b/i, build: () => ({ cmd: `who`, label: "Logged-in users", kind: "read" }) },
  { re: /top\s+(?:cpu|process)|cpu\s+hog|heaviest/i, build: () => ({ cmd: `ps -eo pid,pcpu,pmem,comm --sort=-pcpu 2>/dev/null | head -12`, label: "Top CPU processes", kind: "read" }) },
  { re: /uptime|load/i, build: () => ({ cmd: `uptime`, label: "Uptime & load", kind: "read" }) },
  { re: /explain\s+(.+)/i, build: m => ({ explain: (m[1] || "").trim(), label: "Explain command", kind: "read" }) }
];

function match(text) {
  for (const r of RECIPES) {
    const m = text.match(r.re);
    if (m) return r.build(m);
  }
  return null;
}

export function showCommandIntel() {
  showModal(`<div id="ciRoot"></div>`, "modal-plain");
  render();
}

function render() {
  const root = document.getElementById("ciRoot");
  if (!root) return;
  root.innerHTML = `
    <div class="sx-card ci-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">✨</span> Command Intelligence</div>
        <button class="sx-x" id="ciClose">&times;</button>
      </div>
      <div class="ci-input-row">
        <input type="text" id="ciInput" class="sx-input" placeholder="Try: find which process uses port 8080 · restart nginx · show redis logs · disk usage" autocomplete="off" />
      </div>
      <div class="ci-hints">
        ${["find which process uses port 8080","restart nginx","show nginx logs","disk usage","top cpu","who"].map(h => `<button class="ci-chip" data-h="${escapeHtml(h)}">${escapeHtml(h)}</button>`).join("")}
      </div>
      <div class="ci-result" id="ciResult"></div>
    </div>`;
  root.querySelector("#ciClose").onclick = () => hideModal();
  const input = root.querySelector("#ciInput");
  input.onkeydown = (e) => { if (e.key === "Enter") interpret(input.value); };
  root.querySelectorAll(".ci-chip").forEach(b => b.onclick = () => { input.value = b.getAttribute("data-h"); interpret(input.value); });
  setTimeout(() => input.focus(), 30);
}

function interpret(text) {
  text = (text || "").trim();
  const res = document.getElementById("ciResult");
  if (!res) return;
  if (!text) { res.innerHTML = ""; return; }
  const r = match(text);
  if (!r) {
    res.innerHTML = `
      <div class="ci-card-plan">
        <div class="ci-plan-label">No preset matched. Run it as a raw command?</div>
        <pre class="ci-cmd">${escapeHtml(text)}</pre>
        <div class="sx-actions">
          <button class="sx-btn danger" id="ciRunRaw">Run on active terminal</button>
        </div>
      </div>`;
    res.querySelector("#ciRunRaw").onclick = () => runAction(text, true);
    return;
  }
  if (r.special === "logexplorer") { hideModal(); showLogExplorer(); return; }
  if (r.explain) {
    res.innerHTML = `<div class="ci-card-plan"><div class="ci-plan-label">${escapeHtml(r.label)}</div>
      <pre class="ci-cmd">${escapeHtml(r.explain)}</pre>
      <div class="ci-note">Offline explain isn't available in-app. Tip: run <span class="mono">man ${escapeHtml((r.explain.split(/\s+/)[0]) || "")}</span> or <span class="mono">${escapeHtml((r.explain.split(/\s+/)[0]) || "")} --help</span> on the server.</div></div>`;
    return;
  }
  const isRead = r.kind === "read";
  res.innerHTML = `
    <div class="ci-card-plan">
      <div class="ci-plan-label">${escapeHtml(r.label)}${r.destructive ? ' <span class="ci-danger">destructive</span>' : ''}</div>
      <pre class="ci-cmd">${escapeHtml(r.cmd)}</pre>
      <div class="sx-actions">
        <button class="sx-btn ${r.destructive ? 'danger' : 'primary'}" id="ciRun">${isRead ? "Run &amp; show output" : "Run on active terminal"}</button>
      </div>
      <div class="ci-out" id="ciOut"></div>
    </div>`;
  res.querySelector("#ciRun").onclick = () => {
    if (isRead) runRead(r.cmd);
    else runAction(r.cmd, r.destructive);
  };
}

async function runRead(cmd) {
  if (!pickTargetTab()) { showToast("Connect to and focus a server first", "warning"); return; }
  const out = document.getElementById("ciOut");
  if (out) out.innerHTML = `<div class="sched-empty">Running…</div>`;
  const res = await runSSH(cmd);
  if (out) out.innerHTML = res.ok
    ? `<pre class="ci-output">${escapeHtml(res.out || "(no output)")}</pre>`
    : `<div class="sched-empty">Failed (${escapeHtml(res.err || "error")}).</div>`;
}

function runAction(cmd, destructive) {
  if (destructive && !confirm(`Run this command on the active terminal?\n\n${cmd}`)) return;
  if (writeToActive(cmd)) { showToast("Sent to active terminal", "success"); hideModal(); }
  else showToast("Focus a terminal first", "warning");
}

// ==========================================================================
// Nexterm — shared SSH exec helper for the server-context tools
// (Process Explorer, Port Explorer, Log Explorer, Command Intelligence).
// Uses the existing backend App.RunSSHCommand(tabId, cmd) bridge.
// ==========================================================================

import { tabs, activeTabId } from "../state/tabState.js";

export function pickTargetTab() {
  const at = tabs[activeTabId];
  if (at && !at.isLocal && at.isConnected) return at.id || activeTabId;
  const e = Object.entries(tabs).find(([id, t]) => t && id !== "home" && !t.isLocal && t.isConnected);
  return e ? (e[1].id || e[0]) : null;
}

export function targetName() {
  const id = pickTargetTab();
  const t = id ? tabs[id] : null;
  return t ? (t.customTitle || (t.profile && (t.profile.name || t.profile.host)) || "Server") : "";
}

// Returns { ok, out, id } or { ok:false, err }
export async function runSSH(cmd) {
  const id = pickTargetTab();
  if (!id) return { ok: false, err: "no-target" };
  const App = window.go && window.go.main && window.go.main.App;
  if (!App || !App.RunSSHCommand) return { ok: false, err: "no-bridge" };
  try {
    const out = await App.RunSSHCommand(id, cmd);
    return { ok: true, out: out == null ? "" : String(out), id };
  } catch (e) {
    return { ok: false, err: String(e) };
  }
}

// Send text into the active terminal (for actions the user should see run live)
export function writeToActive(cmd) {
  const id = pickTargetTab();
  const App = window.go && window.go.main && window.go.main.App;
  if (!id || !App || !App.WriteToTerminal) return false;
  try { App.WriteToTerminal(id, cmd + "\r"); return true; } catch (_) { return false; }
}

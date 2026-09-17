// ==========================================================================
// Nexterm — Background Process Notifier
// Detects when commands/processes finish in background tabs and notifies
// the user with clean, clickable tab-switching alerts.
// ==========================================================================

import { getTabs, getActiveTabId, setTabNotification, clearTabNotification } from "../state/tabState.js";
import { showToast } from "../ui/notifications.js";

let switchTabFn = null;

export function registerSwitchTabHandler(fn) {
  switchTabFn = fn;
}

export function switchTabDirect(tabId) {
  if (typeof switchTabFn === "function") {
    switchTabFn(tabId);
  }
}

// Strip ANSI escape codes
function stripAnsi(str) {
  if (!str) return "";
  return str
    .replace(/\x1b\[[0-9;]*[a-zA-Z]/g, "")
    .replace(/\x1b\][^\x07\x1b]*(\x07|\x1b\\)/g, "");
}

// Check if terminal output chunk ends with a shell prompt
export function isPromptEnding(chunk) {
  if (!chunk) return false;
  const clean = stripAnsi(chunk).trimEnd();
  if (!clean) return false;

  // Common prompt endings:
  // 1. [user@host dir]$ or [user@host dir]#
  // 2. user@host:dir$ or user@host:dir#
  // 3. PowerShell: PS C:\dir> or CMD: C:\dir>
  // 4. Modern shells (starship, zsh, fish, bash): ending with $, #, %, >, or ❯
  return /(?:\[[^\]]+\]\s*[\$#]|[^@\s]+@[^:\s]+:[^\$#\r\n]*[\$#]|(?:PS\s+)?[A-Z]:\\[^\r\n>]*>|[\$#%>❯])\s*$/i.test(clean);
}

// Format duration into readable seconds/minutes
function formatDuration(ms) {
  const sec = Math.round(ms / 1000);
  if (sec < 60) return `${sec}s`;
  const min = Math.floor(sec / 60);
  const remSec = sec % 60;
  return `${min}m ${remSec}s`;
}

// Tab process state registry: tabId -> { command, startTime, lastDataTime, outputChunks, settleTimer, notified }
const runningProcesses = {};

export function notifyProcessStarted(tabId, command) {
  const cmd = (command || "").trim();
  if (!cmd) return;

  // Clear any existing notification badge on this tab
  clearTabNotification(tabId);

  const existing = runningProcesses[tabId];
  if (existing && existing.settleTimer) {
    clearTimeout(existing.settleTimer);
  }

  runningProcesses[tabId] = {
    command: cmd,
    startTime: Date.now(),
    lastDataTime: Date.now(),
    outputChunks: 0,
    settleTimer: null,
    notified: false
  };
}

export function notifyProcessOutput(tabId, chunk) {
  const proc = runningProcesses[tabId];
  if (!proc || proc.notified) return;

  proc.outputChunks++;
  proc.lastDataTime = Date.now();

  if (proc.settleTimer) {
    clearTimeout(proc.settleTimer);
    proc.settleTimer = null;
  }

  const promptDetected = isPromptEnding(chunk);
  // If prompt detected, output has likely finished; settle after 250ms
  // Otherwise wait 700ms for data stream to settle
  const waitMs = promptDetected ? 250 : 700;

  proc.settleTimer = setTimeout(() => {
    checkProcessCompletion(tabId, promptDetected);
  }, waitMs);
}

export function notifyPromptReturned(tabId) {
  const proc = runningProcesses[tabId];
  if (!proc || proc.notified) return;

  if (proc.settleTimer) {
    clearTimeout(proc.settleTimer);
    proc.settleTimer = null;
  }
  setTimeout(() => {
    checkProcessCompletion(tabId, true);
  }, 150);
}

function checkProcessCompletion(tabId, hadPrompt) {
  const proc = runningProcesses[tabId];
  if (!proc || proc.notified) return;

  const tabs = getTabs();
  const tab = tabs[tabId];
  if (!tab) {
    delete runningProcesses[tabId];
    return;
  }

  const elapsed = Date.now() - proc.startTime;
  proc.notified = true;

  const currentActiveTabId = getActiveTabId();
  const isBackgroundTab = (currentActiveTabId !== tabId);

  // If user is currently on ANOTHER tab, and the process ran for at least 500ms or produced output:
  if (isBackgroundTab && (elapsed >= 500 || proc.outputChunks > 1 || hadPrompt)) {
    fireProcessDoneAlert(tab, proc, elapsed);
  }

  delete runningProcesses[tabId];
}

function fireProcessDoneAlert(tab, proc, elapsed) {
  const tabId = tab.id;
  const tabName = tab.customTitle || tab.remoteHostname || tab.profile?.name || (tab.isLocal ? "Local Terminal" : (tab.profile?.host || "Terminal"));
  const serial = tab.serialNo ? `[${tab.serialNo}] ` : "";
  const tabLabel = `${serial}${tabName}`;

  const cmdSnippet = proc.command
    ? (proc.command.length > 28 ? proc.command.slice(0, 25) + "..." : proc.command)
    : "Process";

  const message = `✓ Process "${cmdSnippet}" completed on ${tabLabel}`;

  // Set visual completion badge on the tab in tab bar
  setTabNotification(tabId, {
    active: true,
    level: "success",
    type: "process-done",
    message: `Process "${cmdSnippet}" completed in ${formatDuration(elapsed)} (Click tab to view)`
  });

  // Show clickable toast & notification
  showToast(message, "success", {
    tabId: tabId,
    eventType: "process-done",
    isSystemEvent: true,
    durationMs: 5000,
    onClick: () => {
      switchTabDirect(tabId);
    }
  });
}

export function clearTabProcess(tabId) {
  const proc = runningProcesses[tabId];
  if (proc && proc.settleTimer) {
    clearTimeout(proc.settleTimer);
  }
  delete runningProcesses[tabId];
  clearTabNotification(tabId);
}

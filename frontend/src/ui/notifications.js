// ==========================================================================
// Nexterm — UI Notifications & Status Bar Subsystem
// Handles toast alerts, status bar updates, and HTML sanitization.
// ==========================================================================

import { getTabs, getActiveTabId, getStateLabel } from "../state/tabState.js";

let renderConnectedServersCallback = null;

export function registerRenderConnectedServers(cb) {
  renderConnectedServersCallback = cb;
}

export function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let notifTabSwitcher = null;

export function registerNotifTabSwitcher(fn) {
  notifTabSwitcher = fn;
}

export function isMinimalNotificationMode() {
  try {
    const raw = localStorage.getItem("nexterm_settings");
    if (raw) {
      const s = JSON.parse(raw);
      if (s && s.notificationLevel !== undefined) {
        return s.notificationLevel === "minimal";
      }
    }
  } catch (_) {}
  return true; // Default: Minimal notifications
}

function isEssentialNotification(msg, type, options = {}) {
  if (options.isSystemEvent || options.isEssential) return true;
  const evt = options.eventType;
  if (evt === "connect" || evt === "disconnect" || evt === "process-done") return true;
  if (type === "error" || type === "warning") return true;

  const m = String(msg).toLowerCase();
  if (m.startsWith("● connected") || m.startsWith("connected to") || m.includes("reconnected to")) return true;
  if (m.startsWith("● disconnected") || m.includes("connection lost") || m.includes("disconnected from")) return true;
  if (m.startsWith("✓ process") || m.includes("process completed") || m.includes("process finished")) return true;
  if (m.includes("failed") || m.includes("authentication error") || m.includes("host key")) return true;

  return false;
}

export function showToast(message, type = "info", options = {}) {
  const msg = String(message == null ? "" : message).trim();
  if (!msg) return;

  const isEssential = isEssentialNotification(msg, type, options);
  const isMinimal = isMinimalNotificationMode();

  // In minimal mode, suppress trivial notifications from popping up toasts
  if (isMinimal && !isEssential) {
    return;
  }

  // Record essential toasts into the notification center history
  try {
    pushNotification(msg, type, options);
  } catch (_) {}

  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  const isClickable = !!(options.onClick || options.tabId);
  toast.className = `toast-item toast-${type}${isClickable ? ' toast-clickable' : ''}`;

  if (isClickable) {
    toast.innerHTML = `
      <div class="toast-clickable-content">
        <div class="toast-msg-text">${escapeHtml(msg)}</div>
        <div class="toast-click-action">Switch to tab ➔</div>
      </div>
    `;
    toast.onclick = () => {
      if (typeof options.onClick === "function") {
        options.onClick();
      } else if (options.tabId && typeof notifTabSwitcher === "function") {
        notifTabSwitcher(options.tabId);
      }
      toast.remove();
    };
  } else {
    toast.textContent = msg;
  }

  container.appendChild(toast);
  const duration = options.durationMs || (isClickable ? 5000 : 3500);
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ==========================================================================
// Notification Center — persistent history + bell dropdown
// showToast() feeds this automatically, so every alert in the app is logged.
// ==========================================================================

const NOTIF_KEY = "nexterm_notifications";
const NOTIF_MAX = 60;
let notifications = null;      // lazy-loaded array of {id, message, type, tabId, ts, read}
let notifPanelOpen = false;
let notifOutsideHandler = null;

function loadNotifications() {
  if (notifications !== null) return;
  try {
    const raw = localStorage.getItem(NOTIF_KEY);
    notifications = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(notifications)) notifications = [];
  } catch (_) {
    notifications = [];
  }
}

function persistNotifications() {
  try {
    localStorage.setItem(NOTIF_KEY, JSON.stringify(notifications.slice(0, NOTIF_MAX)));
  } catch (_) {}
}

export function pushNotification(message, type = "info", options = {}) {
  loadNotifications();
  const msg = String(message == null ? "" : message).trim();
  if (!msg) return;

  const isEssential = isEssentialNotification(msg, type, options);
  const isMinimal = isMinimalNotificationMode();

  // In minimal mode, only record essential alerts in persistent notification center
  if (isMinimal && !isEssential) {
    return;
  }

  notifications.unshift({
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 7),
    message: msg,
    type,
    tabId: options.tabId || null,
    ts: Date.now(),
    read: false
  });
  notifications = notifications.slice(0, NOTIF_MAX);
  persistNotifications();
  updateNotifBadge();
  if (notifPanelOpen) renderNotifPanel();
}

function unreadCount() {
  loadNotifications();
  return notifications.filter(n => !n.read).length;
}

function updateNotifBadge() {
  const badge = document.getElementById("tbNotifBadge");
  if (!badge) return;
  const n = unreadCount();
  if (n > 0) {
    badge.textContent = n > 99 ? "99+" : String(n);
    badge.style.setProperty("display", "flex", "important");
    badge.classList.remove("hidden");
  } else {
    badge.textContent = "0";
    badge.style.setProperty("display", "none", "important");
    badge.classList.add("hidden");
  }
}

function relTime(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 5) return "just now";
  if (s < 60) return s + "s ago";
  const m = Math.floor(s / 60);
  if (m < 60) return m + "m ago";
  const h = Math.floor(m / 60);
  if (h < 24) return h + "h ago";
  const d = Math.floor(h / 24);
  return d + "d ago";
}

const NOTIF_ICONS = {
  success: "✓",
  error: "✕",
  warning: "!",
  info: "i"
};

function renderNotifPanel() {
  const panel = document.getElementById("notifPanel");
  if (!panel) return;
  loadNotifications();
  const listHtml = notifications.length === 0
    ? `<div class="notif-empty">No notifications yet</div>`
    : notifications.map(n => `
        <div class="notif-item ${n.read ? 'read' : 'unread'}${n.tabId ? ' notif-clickable' : ''}" data-tab-id="${n.tabId || ''}" title="${n.tabId ? 'Click to switch to this tab' : ''}">
          <span class="notif-dot notif-${escapeHtml(n.type)}">${NOTIF_ICONS[n.type] || "i"}</span>
          <div class="notif-body">
            <div class="notif-msg">${escapeHtml(n.message)}</div>
            <div class="notif-time">${relTime(n.ts)}${n.tabId ? ' • <span class="notif-jump-hint">Go to tab ➔</span>' : ''}</div>
          </div>
        </div>`).join("");

  panel.innerHTML = `
    <div class="notif-head">
      <span class="notif-title">Notifications <span class="notif-mode-tag">${isMinimalNotificationMode() ? 'Minimal' : 'All'}</span></span>
      <div class="notif-head-actions">
        <button type="button" id="notifMarkAll" class="notif-link">Mark all read</button>
        <button type="button" id="notifClearAll" class="notif-link">Clear</button>
      </div>
    </div>
    <div class="notif-list">${listHtml}</div>`;

  panel.querySelectorAll(".notif-item.notif-clickable").forEach(item => {
    item.addEventListener("click", () => {
      const tid = item.getAttribute("data-tab-id");
      if (tid && typeof notifTabSwitcher === "function") {
        notifTabSwitcher(tid);
        closeNotificationPanel();
      }
    });
  });

  const markBtn = panel.querySelector("#notifMarkAll");
  const clearBtn = panel.querySelector("#notifClearAll");
  if (markBtn) markBtn.onclick = () => {
    notifications.forEach(n => n.read = true);
    persistNotifications();
    updateNotifBadge();
    renderNotifPanel();
  };
  if (clearBtn) clearBtn.onclick = () => {
    notifications = [];
    persistNotifications();
    updateNotifBadge();
    renderNotifPanel();
  };
}

export function toggleNotificationPanel() {
  const panel = document.getElementById("notifPanel");
  if (!panel) return;
  if (notifPanelOpen) {
    closeNotificationPanel();
    return;
  }
  notifPanelOpen = true;
  panel.classList.add("open");
  // Opening the panel marks everything as read.
  loadNotifications();
  notifications.forEach(n => n.read = true);
  persistNotifications();
  updateNotifBadge();
  renderNotifPanel();
  // Close on outside click.
  notifOutsideHandler = (e) => {
    if (!panel.contains(e.target) && !e.target.closest("#tbNotifBtn")) {
      closeNotificationPanel();
    }
  };
  setTimeout(() => document.addEventListener("mousedown", notifOutsideHandler), 0);
}

function closeNotificationPanel() {
  const panel = document.getElementById("notifPanel");
  if (panel) panel.classList.remove("open");
  notifPanelOpen = false;
  if (notifOutsideHandler) {
    document.removeEventListener("mousedown", notifOutsideHandler);
    notifOutsideHandler = null;
  }
}

export function initNotificationCenter() {
  loadNotifications();
  updateNotifBadge();
}

export function updateStatus() {
  const tabs = getTabs();
  const activeTabId = getActiveTabId();
  const tabCount = Object.keys(tabs).length;

  const activeSessionsCountEl = document.getElementById("activeSessionsCount");
  const activeTargetTextEl = document.getElementById("activeTargetText");
  const statusMessageEl = document.getElementById("statusMessage");

  if (activeSessionsCountEl) {
    activeSessionsCountEl.textContent = `${tabCount} active tab${tabCount === 1 ? '' : 's'}`;
  }

  if (!activeTabId || activeTabId === "home") {
    if (activeTargetTextEl) activeTargetTextEl.textContent = "Home Dashboard";
    if (statusMessageEl) statusMessageEl.textContent = "Ready";
  } else {
    const t = tabs[activeTabId];
    if (t) {
      if (activeTargetTextEl) {
        activeTargetTextEl.textContent = t.isLocal ? "Local Terminal" : `SSH • ${t.profile?.username || 'user'}@${t.profile?.host || 'remote'}`;
      }
      if (statusMessageEl) {
        if (t.isLocal) {
          statusMessageEl.textContent = t.isConnected ? "Local Terminal Active" : "Local Terminal Closed";
        } else {
          const st = t.connectionState || (t.isConnected ? "Connected" : "Closed");
          if (st === "Connected") {
            statusMessageEl.textContent = `● Connected: ${t.profile?.name || 'Session'} (${t.profile?.host || ''})`;
          } else if (st === "Connecting") {
            statusMessageEl.textContent = `● Connecting to ${t.profile?.host}...`;
          } else if (st === "Authenticating") {
            statusMessageEl.textContent = `● Authenticating ${t.profile?.username}@${t.profile?.host}...`;
          } else if (st === "Reconnecting") {
            statusMessageEl.textContent = `● Reconnecting to ${t.profile?.host}...`;
          } else if (st === "Closing") {
            statusMessageEl.textContent = `● Closing connection to ${t.profile?.host}...`;
          } else if (st === "Failed") {
            if (t.errorInfo?.category === "Authentication failure") {
              statusMessageEl.textContent = `● Authentication failed for ${t.profile?.username}@${t.profile?.host}`;
            } else if (t.errorInfo?.category === "Server closed connection") {
              statusMessageEl.textContent = `● Connection lost: ${t.profile?.host}`;
            } else {
              statusMessageEl.textContent = `● Connection failed: ${t.errorInfo?.category || 'Failed'} (${t.errorInfo?.message || t.profile?.host})`;
            }
          } else if (st === "Closed") {
            if (t.errorInfo?.category === "Server closed connection" || (t.stateMessage && t.stateMessage.toLowerCase().includes("lost"))) {
              statusMessageEl.textContent = `● Connection lost: ${t.profile?.host}`;
            } else {
              statusMessageEl.textContent = `● Disconnected: ${t.profile?.name || ''}`;
            }
          } else {
            statusMessageEl.textContent = `● Disconnected: ${t.profile?.name || ''}`;
          }
        }
      }
    }
  }

  if (typeof renderConnectedServersCallback === "function") {
    renderConnectedServersCallback();
  }
}

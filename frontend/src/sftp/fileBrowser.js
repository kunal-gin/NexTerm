// ==========================================================================
// Nexterm — SFTP File Browser Utilities & Remote Editor
// Handles file type icons, size formatting, syntax language detection,
// remote file editor, permissions (chmod), and external editor integration.
// ==========================================================================

import { showToast, escapeHtml } from "../ui/notifications.js";
import { showModal, hideModal } from "../ui/modal.js";
import { posMenu, hideContextMenu, getContextMenuEl } from "../ui/contextMenu.js";
import { getActiveTabId, getTabs } from "../state/tabState.js";
import { userSettings } from "../settings/settings.js";

let refreshSFTPFn = null;

export function registerFileBrowserSFTPRefresh(fn) {
  refreshSFTPFn = fn;
}

export function getFolderBadgeIcon(name = "", isExpanded = false, customColor = null, size = 30) {
  const n = (name || "").toLowerCase().trim();
  let bg = customColor;
  let fg = "#0f172a";
  let glyph = "";

  // 1. Parent directory
  if (name === "..") {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 30" fill="none" class="folder-badge-svg" style="flex-shrink:0;">
      <rect x="2" y="3" width="28" height="24" rx="7" fill="#4ade80"/>
      <path d="M19 19v-2a4 4 0 0 0-4-4H9m0 0l3-3m-3 3l3 3" stroke="#064e3b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  // 2. Specialized linux directories matching screenshot & common patterns
  if (n.includes("cache")) {
    bg = bg || "#c084fc";
    glyph = `<circle cx="16" cy="18" r="5" fill="none" stroke="${fg}" stroke-width="1.6"/><path d="M16 18l3-3" stroke="${fg}" stroke-width="1.6" stroke-linecap="round"/><circle cx="16" cy="18" r="1.2" fill="${fg}"/>`;
  } else if (n.includes("config") || n === ".vim") {
    bg = bg || "#60a5fa";
    glyph = `<circle cx="16" cy="17.5" r="2.3" fill="none" stroke="${fg}" stroke-width="1.8"/><path d="M16 13v1.5m0 6V22m4.5-4.5h-1.5m-6 0H7m12.7-3.2l-1.1 1.1m-4.2 4.2l-1.1 1.1m6.4 0l-1.1-1.1m-4.2-4.2l-1.1-1.1" stroke="${fg}" stroke-width="1.7" stroke-linecap="round"/>`;
  } else if (n.includes("cpan") || n.includes("perl")) {
    bg = bg || "#2dd4bf";
    glyph = `<path d="M11 20h10M13 14c1-2 2-3 4-2 2 1 2 3 2 4v4m-8-6c-1-1-2 0-2 2v4" stroke="${fg}" stroke-width="1.8" stroke-linecap="round" fill="none"/>`;
  } else if (n.includes("java") || n.includes("jvm") || n.includes("jdk")) {
    bg = bg || "#f87171";
    glyph = `<path d="M12.5 16h6a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1z" fill="${fg}"/><path d="M19.5 17h1a1.5 1.5 0 0 1 0 3h-1" stroke="${fg}" stroke-width="1.4" fill="none"/><path d="M14.5 13c0 1-.8 1.5-.8 2m3.5-2c0 1-.8 1.5-.8 2" stroke="${fg}" stroke-width="1.3" stroke-linecap="round"/>`;
  } else if (n.includes("ssh") || n.includes("keys") || n.includes("auth")) {
    bg = bg || "#fbbf24";
    glyph = `<circle cx="13.5" cy="18" r="2.5" fill="none" stroke="${fg}" stroke-width="1.8"/><path d="M16 18h5m-2 0v2m2-2v1.5" stroke="${fg}" stroke-width="1.8" stroke-linecap="round"/>`;
  } else if (n.includes("cert") || n.includes("ssl") || n.includes("pki") || n.includes("tls")) {
    bg = bg || "#a3e635";
    glyph = `<path d="M16 13.5l4 1.5v3c0 2.5-2 4.5-4 5.5-2-1-4-3-4-5.5v-3l4-1.5z" fill="none" stroke="${fg}" stroke-width="1.6"/><path d="M14.5 18l1.2 1.2 2.5-2.5" stroke="${fg}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else if (n.includes("install") || n.includes("package") || n.includes("dist") || n.includes("build") || n.includes("download")) {
    bg = bg || "#c084fc";
    glyph = `<path d="M12 15l4-2 4 2v5l-4 2-4-2v-5z" fill="none" stroke="${fg}" stroke-width="1.5"/><path d="M12 15l4 2 4-2m-4 2v5" stroke="${fg}" stroke-width="1.4"/>`;
  } else if (n.includes("helm") || n.includes("k8s") || n.includes("kube") || n.includes("chart")) {
    bg = bg || "#38bdf8";
    glyph = `<circle cx="16" cy="17.5" r="4.2" fill="none" stroke="${fg}" stroke-width="1.5"/><circle cx="16" cy="17.5" r="1.3" fill="${fg}"/><path d="M16 12v2.5m0 6v2.5m-5.5-5.5h2.5m6 0h2.5" stroke="${fg}" stroke-width="1.4" stroke-linecap="round"/>`;
  } else if (n === "opt" || n.includes("tool") || n.includes("util")) {
    bg = bg || "#94a3b8";
    glyph = `<circle cx="16" cy="17.5" r="2.4" fill="none" stroke="${fg}" stroke-width="1.8"/><path d="M16 13.5v1.8m0 4.4v1.8m4.5-4h-1.8m-5.4 0H7.5" stroke="${fg}" stroke-width="1.8" stroke-linecap="round"/>`;
  } else if (n.includes("oracle") || n.includes("db") || n.includes("sql") || n.includes("data")) {
    bg = bg || "#f87171";
    glyph = `<ellipse cx="16" cy="14.5" rx="4.5" ry="1.7" fill="none" stroke="${fg}" stroke-width="1.5"/><path d="M11.5 14.5v3c0 1 2 1.7 4.5 1.7s4.5-.7 4.5-1.7v-3m-9 3v3c0 1 2 1.7 4.5 1.7s4.5-.7 4.5-1.7v-3" stroke="${fg}" stroke-width="1.5"/>`;
  } else if (n.includes("portal") || n.includes("web") || n.includes("www") || n.includes("html") || n.includes("site") || n.includes("public")) {
    bg = bg || "#e879f9";
    glyph = `<circle cx="16" cy="17.5" r="5" fill="none" stroke="${fg}" stroke-width="1.5"/><ellipse cx="16" cy="17.5" rx="2.5" ry="5" fill="none" stroke="${fg}" stroke-width="1.2"/><line x1="11" y1="17.5" x2="21" y2="17.5" stroke="${fg}" stroke-width="1.2"/>`;
  } else if (n.includes("domain") || n.includes("replace") || n.includes("star") || n.includes("fav")) {
    bg = bg || "#fbbf24";
    glyph = `<path d="M16 13.5l1.2 2.6 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="${fg}"/>`;
  } else if (n.includes("repo") || n.includes("git") || n.includes("src") || n.includes("source") || n.includes("code")) {
    bg = bg || "#4ade80";
    glyph = `<path d="M13.5 15.5l-2.2 2 2.2 2m5-4l2.2 2-2.2 2m-3 .5l1.5-5" stroke="${fg}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else if (n.includes("doc") || n.includes("text") || n.includes("note")) {
    bg = bg || "#38bdf8";
    glyph = `<path d="M13 14h6m-6 3h6m-6 3h4" stroke="${fg}" stroke-width="1.5" stroke-linecap="round"/>`;
  } else if (n.includes("music") || n.includes("audio") || n.includes("sound")) {
    bg = bg || "#a855f7";
    glyph = `<path d="M14 19a2 2 0 1 0-2-2v-4l6-1.5v4.5a2 2 0 1 0-2-2" stroke="${fg}" stroke-width="1.5" fill="none"/>`;
  } else if (n.includes("video") || n.includes("movie") || n.includes("film")) {
    bg = bg || "#f43f5e";
    glyph = `<rect x="12" y="14" width="8" height="6" rx="1.5" stroke="${fg}" stroke-width="1.5" fill="none"/><path d="M15 15.5l3 1.5-3 1.5z" fill="${fg}"/>`;
  } else if (n.includes("pic") || n.includes("photo") || n.includes("img") || n.includes("image")) {
    bg = bg || "#ec4899";
    glyph = `<rect x="12" y="14" width="8" height="7" rx="1.5" stroke="${fg}" stroke-width="1.5" fill="none"/><circle cx="14.5" cy="16.5" r=".8" fill="${fg}"/><path d="M12 19l2.5-2 2 1.5 2-1.5 1.5 1" stroke="${fg}" stroke-width="1.2" stroke-linecap="round"/>`;
  } else if (n.includes("prod")) {
    bg = bg || "#ef4444";
    glyph = `<circle cx="16" cy="17.5" r="4.5" fill="none" stroke="${fg}" stroke-width="1.6"/><path d="M14 17.5h4m-2-2v4" stroke="${fg}" stroke-width="1.6" stroke-linecap="round"/>`;
  } else if (n.includes("uat")) {
    bg = bg || "#f59e0b";
    glyph = `<path d="M16 13.5l1.2 2.6 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="${fg}"/>`;
  } else if (n.includes("test")) {
    bg = bg || "#10b981";
    glyph = `<path d="M13.5 18l2 2 4-4" stroke="${fg}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`;
  } else {
    const colors = ["#f59e0b", "#38bdf8", "#a855f7", "#10b981", "#ec4899", "#6366f1", "#14b8a6", "#f97316"];
    let hash = 0;
    for (let i = 0; i < n.length; i++) hash = (hash * 31 + n.charCodeAt(i)) & 0xffffffff;
    bg = bg || colors[Math.abs(hash) % colors.length];
    glyph = `<path d="M12 17.5h8m-4-3v6" stroke="${fg}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>`;
  }

  return `<svg width="${size}" height="${size}" viewBox="0 0 32 30" fill="none" class="folder-badge-svg" style="flex-shrink:0;">
    <path d="M 3 6 C 3 4.3 4.3 3 6 3 L 13 3 C 14.5 3 15.6 4 16.5 5.5 L 17.5 7 C 18.2 8 19.2 8.5 20.5 8.5 L 26 8.5 C 27.7 8.5 29 9.8 29 11.5 L 29 24 C 29 25.7 27.7 27 26 27 L 6 27 C 4.3 27 3 25.7 3 24 Z" fill="${bg}"/>
    ${glyph}
  </svg>`;
}

export function getFileBadgeIcon(item, size = 30) {
  const name = (item.name || "").toLowerCase();
  const ext = (item.extension || name.substring(name.lastIndexOf(".")) || "").toLowerCase();

  // 1. .bash_history -> Blue document with `>_` terminal prompt
  if (name.includes("history") || name.endsWith(".history")) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" class="file-badge-svg" style="flex-shrink:0;">
      <path d="M7 4a3 3 0 0 1 3-3h9l7 7v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4z" fill="#60a5fa"/>
      <path d="M19 1v6a1 1 0 0 0 1 1h6" fill="#93c5fd"/>
      <path d="M12 17l2.5 2.5L12 22m3.5 0h4" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  // 2. .bash_logout, .logout, or text docs -> Silver document with clean horizontal lines
  if (name.includes("logout") || ext === ".txt" || ext === ".doc") {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" class="file-badge-svg" style="flex-shrink:0;">
      <path d="M7 4a3 3 0 0 1 3-3h9l7 7v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4z" fill="#e2e8f0"/>
      <path d="M19 1v6a1 1 0 0 0 1 1h6" fill="#cbd5e1"/>
      <line x1="12" y1="15" x2="20" y2="15" stroke="#475569" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="12" y1="19" x2="20" y2="19" stroke="#475569" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="12" y1="23" x2="16" y2="23" stroke="#475569" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`;
  }

  // 3. Shell scripts (.sh, .bash, .zsh, .profile, .bashrc)
  if (ext === ".sh" || ext === ".bash" || ext === ".zsh" || name.startsWith(".bash") || name.startsWith(".zsh") || name === ".profile") {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" class="file-badge-svg" style="flex-shrink:0;">
      <path d="M7 4a3 3 0 0 1 3-3h9l7 7v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4z" fill="#34d399"/>
      <path d="M19 1v6a1 1 0 0 0 1 1h6" fill="#6ee7b7"/>
      <path d="M12 17l2.5 2.5L12 22m3.5 0h4" stroke="#064e3b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  // 4. Properties / Config files (.properties, .conf, .ini, .cfg, .env, .json, .yaml, .yml)
  if ([".properties", ".conf", ".ini", ".cfg", ".env", ".json", ".yaml", ".yml", ".pinlog"].includes(ext) || name.includes("config")) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" class="file-badge-svg" style="flex-shrink:0;">
      <path d="M7 4a3 3 0 0 1 3-3h9l7 7v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4z" fill="#c084fc"/>
      <path d="M19 1v6a1 1 0 0 0 1 1h6" fill="#d8b4fe"/>
      <circle cx="16" cy="18.5" r="2" stroke="#3b0764" stroke-width="1.6" fill="none"/>
      <path d="M16 15v1.2m0 4.6V22m3.5-3.5h-1.2m-4.6 0H12.5" stroke="#3b0764" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`;
  }

  // 5. Code files (.py, .go, .js, .ts, .c, .cpp, .java, .html, .css)
  if ([".py", ".go", ".js", ".ts", ".c", ".cpp", ".cc", ".h", ".java", ".html", ".css", ".sql"].includes(ext)) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" class="file-badge-svg" style="flex-shrink:0;">
      <path d="M7 4a3 3 0 0 1 3-3h9l7 7v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4z" fill="#38bdf8"/>
      <path d="M19 1v6a1 1 0 0 0 1 1h6" fill="#7dd3fc"/>
      <path d="M13 17l-2 2 2 2m6-4l2 2-2 2" stroke="#0c4a6e" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  // 6. Archives (.tar, .gz, .zip, .rar, .7z, .deb, .rpm)
  if ([".tar", ".gz", ".tgz", ".zip", ".rar", ".7z", ".deb", ".rpm"].includes(ext)) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" class="file-badge-svg" style="flex-shrink:0;">
      <path d="M7 4a3 3 0 0 1 3-3h9l7 7v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4z" fill="#fb923c"/>
      <path d="M19 1v6a1 1 0 0 0 1 1h6" fill="#fdba74"/>
      <rect x="14" y="15" width="4" height="6" rx="1" stroke="#7c2d12" stroke-width="1.5" fill="none"/>
      <line x1="16" y1="13" x2="16" y2="15" stroke="#7c2d12" stroke-width="1.5"/>
    </svg>`;
  }

  // 7. Default file badge
  return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" class="file-badge-svg" style="flex-shrink:0;">
    <path d="M7 4a3 3 0 0 1 3-3h9l7 7v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V4z" fill="#94a3b8"/>
    <path d="M19 1v6a1 1 0 0 0 1 1h6" fill="#cbd5e1"/>
    <line x1="12" y1="16" x2="20" y2="16" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="12" y1="20" x2="18" y2="20" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;
}

export function getItemDescription(item) {
  const name = (item.name || "").trim();
  const lower = name.toLowerCase();

  if (item.isDir) {
    if (name === "..") return "Parent Directory";
    if (lower === ".cache") return "Application cache files";
    if (lower === ".config") return "Configuration files";
    if (lower === ".cpan") return "Perl modules";
    if (lower === ".java") return "Java related files";
    if (lower === ".ssh") return "SSH keys and config";
    if (lower.includes("cert")) return "Certificates and keys";
    if (lower.includes("install")) return "Installation packages";
    if (lower.includes("helm") || lower.includes("chart")) return "Helm chart files";
    if (lower === "opt") return "Optional software";
    if (lower.includes("oracle")) return "Oracle related files";
    if (lower.includes("portal")) return "Portal application";
    if (lower.includes("domain") || lower.includes("replace")) return "Domain related files";
    if (lower.includes("repo") || lower.includes("git") || lower.includes("src")) return "Source code repositories";
    if (lower === ".local") return "User local binaries & data";
    if (lower === ".mozilla") return "Mozilla profile & cache";
    if (lower === ".pki") return "PKI certificates";
    if (lower === ".dbus") return "D-Bus session bus";
    if (lower === ".vim") return "Vim configuration";
    if (lower === "videos") return "Video media files";
    if (lower === "templates") return "Document templates";
    if (lower === "public") return "Public shared folder";
    if (lower === "pictures") return "Image and photo files";
    if (lower === "music") return "Audio and music files";
    if (lower === "downloads") return "Downloaded files";
    if (lower === "documents") return "User documents";
    if (lower === "desktop") return "Desktop workspace";
    if (lower === "etc") return "System configuration";
    if (lower === "var" || lower === "log" || lower === "logs") return "System variable data & logs";
    if (lower === "bin" || lower === "sbin") return "Binary executable commands";
    if (lower === "tmp") return "Temporary files";
    return "Folder";
  }

  // Files
  if (lower === ".bash_history") return "Command history";
  if (lower === ".bash_logout") return "Logout script";
  if (lower === ".bashrc") return "Bash shell startup configuration";
  if (lower === ".profile") return "User shell environment profile";
  if (lower === ".zshrc") return "Zsh shell startup configuration";
  if (lower === ".xauthority") return "X11 authentication authority";
  if (lower === ".wget-hsts") return "Wget HSTS cache";
  if (lower === "dead.letter") return "Failed email draft";
  if (lower.includes("pinlog")) return "Application trace log";
  if (lower.endsWith(".log")) return "System event log";
  if (lower.endsWith(".properties")) return "Application properties";
  if (lower.endsWith(".conf") || lower.endsWith(".cfg") || lower.endsWith(".ini")) return "Configuration settings";
  if (lower.endsWith(".sh") || lower.endsWith(".bash")) return "Shell execution script";
  if (lower.endsWith(".json")) return "JSON data document";
  if (lower.endsWith(".yaml") || lower.endsWith(".yml")) return "YAML configuration";
  if (lower.endsWith(".tar") || lower.endsWith(".gz") || lower.endsWith(".zip")) return "Compressed archive";
  if (lower.endsWith(".py")) return "Python script";
  if (lower.endsWith(".go")) return "Go source code";
  if (lower.endsWith(".js") || lower.endsWith(".ts")) return "JavaScript file";
  if (lower.endsWith(".txt")) return "Plain text document";
  return item.permissions || "File";
}

export function getMobaFileIcon(item, size = 30) {
  if (item.isDir) {
    return getFolderBadgeIcon(item.name, false, null, size);
  }
  return getFileBadgeIcon(item, size);
}

export function formatMobaSize(bytes, isDir) {
  if (isDir) return "";
  if (bytes === undefined || bytes === null || bytes <= 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) {
    const kb = (bytes / 1024).toFixed(1);
    return kb.endsWith(".0") ? `${parseInt(kb, 10)} KB` : `${kb} KB`;
  }
  const mb = (bytes / (1024 * 1024)).toFixed(1);
  return mb.endsWith(".0") ? `${parseInt(mb, 10)} MB` : `${mb} MB`;
}

export function detectSyntaxLanguage(fname = "") {
  const ext = fname.toLowerCase().substring(fname.lastIndexOf("."));
  switch (ext) {
    case ".c": case ".h": case ".cpp": case ".hpp": case ".cc": return "C/C++";
    case ".py": case ".pyw": return "Python";
    case ".sh": case ".bash": case ".zsh": case ".ksh": return "Shell/Bash";
    case ".go": return "Go";
    case ".java": return "Java";
    case ".js": case ".mjs": case ".cjs": case ".ts": case ".jsx": case ".tsx": return "JavaScript";
    case ".json": return "JSON";
    case ".xml": case ".html": case ".htm": case ".svg": return "XML/HTML";
    case ".css": case ".scss": case ".less": return "CSS";
    case ".sql": return "SQL";
    case ".conf": case ".ini": case ".cfg": case ".yaml": case ".yml": return "Config/YAML";
    default: return "Slack Code (Auto)";
  }
}

/**
 * highlightSlackCode parses source code and generates syntax tokens
 * colored according to Felipe Mendes' Slack Theme Dark Mode.
 */
export function highlightSlackCode(code, lang = "Slack Code (Auto)") {
  if (!code) return "";

  // Regular expression matching syntax tokens in order of precedence:
  // 1. Strings & Comments (multi-line, single-line, template strings)
  // 2. Numbers & Hexadecimals
  // 3. Booleans / Null / None
  // 4. Keywords
  // 5. Built-in types & globals
  // 6. Functions / Method calls (identifier followed by '(')
  // 7. Property accesses (.identifier)
  // 8. Operators and Punctuation
  const tokenRegex = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*|<!--[\s\S]*?-->|`(?:\\[\s\S]|[^`\\])*`|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*')|(\b0x[0-9a-fA-F]+\b|\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|(\b(?:true|false|null|undefined|nil|None|True|False)\b)|(\b(?:const|let|var|function|func|def|class|interface|type|struct|package|import|export|from|default|return|if|else|elif|then|fi|for|range|of|in|do|done|while|until|switch|case|select|chan|defer|go|break|continue|yield|try|catch|finally|throw|raise|except|with|as|pass|new|this|self|super|extends|implements|static|async|await|typeof|instanceof|void|public|private|protected|echo|local|readonly|SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN|GROUP|BY|ORDER|TABLE|CREATE|DROP)\b)|(\b(?:document|window|console|Math|JSON|Object|Array|Promise|String|Number|Boolean|Map|Set|fmt|os|io|time|sys|str|int|float|bool|bytes|list|dict|tuple|any|error)\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\())|(\.[a-zA-Z_$][a-zA-Z0-9_$]*\b)|(=>|===|!==|==|!=|<=|>=|&&|\|\||\+\+|--|\+=|-=|\*=|\/=|<<|>>|[=!+\-*\/%<>?&|^~:])|([{}()\[\];,])/g;

  let lastIndex = 0;
  let html = "";
  let match;

  while ((match = tokenRegex.exec(code)) !== null) {
    if (match.index > lastIndex) {
      html += escapeHtml(code.slice(lastIndex, match.index));
    }
    const [
      full,
      strOrComment,
      number,
      booleanOrNull,
      keyword,
      builtin,
      funcName,
      property,
      operator,
      punctuation
    ] = match;

    if (strOrComment) {
      if (strOrComment.startsWith("//") || strOrComment.startsWith("/*") || strOrComment.startsWith("#") || strOrComment.startsWith("<!--")) {
        html += `<span class="tok-cmt">${escapeHtml(strOrComment)}</span>`;
      } else {
        html += `<span class="tok-str">${escapeHtml(strOrComment)}</span>`;
      }
    } else if (number) {
      html += `<span class="tok-num">${escapeHtml(number)}</span>`;
    } else if (booleanOrNull) {
      html += `<span class="tok-bool">${escapeHtml(booleanOrNull)}</span>`;
    } else if (keyword) {
      html += `<span class="tok-kw">${escapeHtml(keyword)}</span>`;
    } else if (builtin) {
      html += `<span class="tok-type">${escapeHtml(builtin)}</span>`;
    } else if (funcName) {
      html += `<span class="tok-fn">${escapeHtml(funcName)}</span>`;
    } else if (property) {
      html += `<span class="tok-punct">.</span><span class="tok-prop">${escapeHtml(property.slice(1))}</span>`;
    } else if (operator) {
      html += `<span class="tok-op">${escapeHtml(operator)}</span>`;
    } else if (punctuation) {
      html += `<span class="tok-punct">${escapeHtml(punctuation)}</span>`;
    } else {
      html += escapeHtml(full);
    }
    lastIndex = match.index + full.length;
  }

  if (lastIndex < code.length) {
    html += escapeHtml(code.slice(lastIndex));
  }

  // Preserve trailing newline alignment with overlay textarea
  if (code.endsWith("\n")) {
    html += " ";
  }

  return html;
}

export function openChmodModal(tabId, item) {
  if (!item) return;

  let currentOctal = item.octalPerm || "0755";
  if (currentOctal.length === 3) currentOctal = "0" + currentOctal;

  const box = showModal(`
    <div class="modal-header">
      <div class="modal-title" style="display: flex; align-items: center; gap: 6px;">
        <span>🔑</span> Change File Permissions (chmod)
      </div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body" style="padding: 16px 18px;">
      <div class="chmod-target-info">
        <span class="chmod-filename">${escapeHtml(item.name)}</span>
        <span class="chmod-path">${escapeHtml(item.path)}</span>
      </div>

      <div class="chmod-grid">
        <div class="chmod-col">
          <div class="chmod-col-title">👤 Owner</div>
          <label><input type="checkbox" id="permOwnerR" /> Read (r)</label>
          <label><input type="checkbox" id="permOwnerW" /> Write (w)</label>
          <label><input type="checkbox" id="permOwnerX" /> Execute (x)</label>
        </div>
        <div class="chmod-col">
          <div class="chmod-col-title">👥 Group</div>
          <label><input type="checkbox" id="permGroupR" /> Read (r)</label>
          <label><input type="checkbox" id="permGroupW" /> Write (w)</label>
          <label><input type="checkbox" id="permGroupX" /> Execute (x)</label>
        </div>
        <div class="chmod-col">
          <div class="chmod-col-title">🌍 Others</div>
          <label><input type="checkbox" id="permOtherR" /> Read (r)</label>
          <label><input type="checkbox" id="permOtherW" /> Write (w)</label>
          <label><input type="checkbox" id="permOtherX" /> Execute (x)</label>
        </div>
      </div>

      <div class="chmod-octal-row">
        <label>Octal Value:</label>
        <input type="text" id="chmodOctalInput" value="${currentOctal}" maxlength="4" />
        <div class="chmod-presets">
          <button type="button" class="btn-preset" data-octal="0755">0755</button>
          <button type="button" class="btn-preset" data-octal="0644">0644</button>
          <button type="button" class="btn-preset" data-octal="0700">0700</button>
          <button type="button" class="btn-preset" data-octal="0777">0777</button>
        </div>
      </div>

      <div class="hostkey-actions" style="margin-top: 14px;">
        <button class="btn btn-secondary" id="chmodCancel">Cancel</button>
        <button class="btn btn-primary" id="chmodApply">Apply Permissions</button>
      </div>
    </div>
  `, "modal-chmod");

  if (!box) return;

  const oR = box.querySelector("#permOwnerR");
  const oW = box.querySelector("#permOwnerW");
  const oX = box.querySelector("#permOwnerX");
  const gR = box.querySelector("#permGroupR");
  const gW = box.querySelector("#permGroupW");
  const gX = box.querySelector("#permGroupX");
  const tR = box.querySelector("#permOtherR");
  const tW = box.querySelector("#permOtherW");
  const tX = box.querySelector("#permOtherX");
  const octalInput = box.querySelector("#chmodOctalInput");

  function updateCheckboxesFromOctal(val) {
    const num = parseInt(val, 8);
    if (isNaN(num)) return;
    const u = (num >> 6) & 7;
    const g = (num >> 3) & 7;
    const o = num & 7;

    oR.checked = !!(u & 4);
    oW.checked = !!(u & 2);
    oX.checked = !!(u & 1);

    gR.checked = !!(g & 4);
    gW.checked = !!(g & 2);
    gX.checked = !!(g & 1);

    tR.checked = !!(o & 4);
    tW.checked = !!(o & 2);
    tX.checked = !!(o & 1);
  }

  function computeOctalFromCheckboxes() {
    let u = 0;
    if (oR.checked) u += 4;
    if (oW.checked) u += 2;
    if (oX.checked) u += 1;

    let g = 0;
    if (gR.checked) g += 4;
    if (gW.checked) g += 2;
    if (gX.checked) g += 1;

    let o = 0;
    if (tR.checked) o += 4;
    if (tW.checked) o += 2;
    if (tX.checked) o += 1;

    const res = `0${u}${g}${o}`;
    octalInput.value = res;
    return res;
  }

  updateCheckboxesFromOctal(currentOctal);

  [oR, oW, oX, gR, gW, gX, tR, tW, tX].forEach(cb => {
    cb.onchange = computeOctalFromCheckboxes;
  });

  octalInput.oninput = () => {
    updateCheckboxesFromOctal(octalInput.value);
  };

  box.querySelectorAll(".btn-preset").forEach(btn => {
    btn.onclick = () => {
      octalInput.value = btn.dataset.octal;
      updateCheckboxesFromOctal(btn.dataset.octal);
    };
  });

  const cancelBtn = box.querySelector("#chmodCancel");
  if (cancelBtn) cancelBtn.onclick = hideModal;

  const applyBtn = box.querySelector("#chmodApply");
  if (applyBtn) {
    applyBtn.onclick = async () => {
      const mode = octalInput.value.trim();
      hideModal();
      showToast(`Applying permissions ${mode} to ${item.name}...`, "info");
      try {
        if (window.go && window.go.main && window.go.main.App) {
          await window.go.main.App.SFTPChmodRemote(tabId, item.path, mode);
          showToast(`Permissions updated to ${mode}`, "success");
          const tabs = getTabs();
          if (tabs[tabId] && tabs[tabId].refreshRemoteList) {
            tabs[tabId].refreshRemoteList();
          }
          if (typeof refreshSFTPFn === "function") refreshSFTPFn();
        }
      } catch (err) {
        showToast(`Failed to change permissions: ${err}`, "error");
      }
    };
  }
}

export function showSFTPContextMenu(x, y, item) {
  const contextMenuEl = getContextMenuEl();
  if (!contextMenuEl) return;

  const activeTabId = getActiveTabId();
  const tabs = getTabs();

  contextMenuEl.innerHTML = `
    ${!item.isDir ? `
      <div class="context-menu-item" id="sftpOpenExternal">📂 Open (Default Program)</div>
      <div class="context-menu-item" id="sftpEdit">✏️ Open with default text editor</div>
      <div class="context-menu-item" id="sftpOpenWith">📋 Open with...</div>
    ` : `
      <div class="context-menu-item" id="sftpOpenDir">📁 Open Folder</div>
      <div class="context-menu-item" id="sftpCdTerminal">💻 cd terminal to this folder</div>
    `}
    <div class="context-menu-item" id="sftpDownload">⬇ Download to Local PC</div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="sftpRename">✏️ Rename</div>
    <div class="context-menu-item danger" id="sftpDelete">🗑️ Delete</div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="sftpCopyPath">📋 Copy file path</div>
    <div class="context-menu-item" id="sftpCopyPathTerm">💻 Copy file path to terminal</div>
    <div class="context-menu-item" id="sftpChmod">🔑 Permissions (chmod)</div>
    <div class="context-menu-item" id="sftpProperties">ℹ️ Properties / Permissions</div>
  `;
  posMenu(x, y);

  if (!item.isDir) {
    contextMenuEl.querySelector("#sftpOpenExternal").onclick = () => {
      hideContextMenu();
      openRemoteFileExternal(item.path, false);
    };
    contextMenuEl.querySelector("#sftpEdit").onclick = () => {
      hideContextMenu();
      openRemoteFileEditor(item.path);
    };
    contextMenuEl.querySelector("#sftpOpenWith").onclick = () => {
      hideContextMenu();
      openRemoteFileExternal(item.path, true);
    };
  } else {
    contextMenuEl.querySelector("#sftpOpenDir").onclick = () => {
      hideContextMenu();
      if (typeof refreshSFTPFn === "function") refreshSFTPFn(item.path);
    };
    const cdTermBtn = contextMenuEl.querySelector("#sftpCdTerminal");
    if (cdTermBtn) {
      cdTermBtn.onclick = () => {
        hideContextMenu();
        if (activeTabId && tabs[activeTabId] && !tabs[activeTabId].isLocal && window.go && window.go.main && window.go.main.App) {
          window.go.main.App.WriteToTerminal(activeTabId, `cd "${item.path}"\r`);
          showToast(`Sent: cd "${item.path}" to terminal`, "info");
        }
      };
    }
  }

  contextMenuEl.querySelector("#sftpCopyPath").onclick = () => {
    hideContextMenu();
    navigator.clipboard.writeText(item.path);
    showToast("Copied remote path to clipboard", "info");
  };

  contextMenuEl.querySelector("#sftpCopyPathTerm").onclick = () => {
    hideContextMenu();
    if (activeTabId && tabs[activeTabId] && window.go && window.go.main && window.go.main.App) {
      window.go.main.App.WriteToTerminal(activeTabId, `"${item.path}" `);
      showToast("Pasted file path to terminal", "info");
    }
  };

  const chmodBtn = contextMenuEl.querySelector("#sftpChmod");
  if (chmodBtn) {
    chmodBtn.onclick = () => {
      hideContextMenu();
      openChmodModal(activeTabId, item);
    };
  }

  contextMenuEl.querySelector("#sftpProperties").onclick = () => {
    hideContextMenu();
    showSFTPPropertiesDialog(item);
  };

  contextMenuEl.querySelector("#sftpDownload").onclick = async () => {
    hideContextMenu();
    if (window.go && window.go.main && window.go.main.App) {
      try {
        const dest = await window.go.main.App.SelectDownloadDest(item.name);
        if (dest) {
          showToast(`Downloading ${item.name}...`, "info");
          await window.go.main.App.SFTPDownload(activeTabId, item.path, dest);
          showToast(`Downloaded ${item.name} successfully`, "success");
        }
      } catch (err) {
        showToast("Download failed: " + err, "error");
      }
    }
  };

  contextMenuEl.querySelector("#sftpRename").onclick = async () => {
    hideContextMenu();
    const newName = prompt("Enter new name:", item.name);
    if (newName && newName !== item.name && window.go && window.go.main && window.go.main.App) {
      const parentDir = item.path.substring(0, item.path.lastIndexOf("/"));
      const newPath = (parentDir === "" ? "/" : parentDir) + "/" + newName;
      try {
        await window.go.main.App.SFTPRename(activeTabId, item.path, newPath);
        showToast("Renamed successfully", "success");
        if (typeof refreshSFTPFn === "function") refreshSFTPFn();
      } catch (err) {
        showToast("Rename failed: " + err, "error");
      }
    }
  };

  contextMenuEl.querySelector("#sftpDelete").onclick = async () => {
    hideContextMenu();
    if (confirm(`Are you sure you want to delete "${item.name}" from remote server?`)) {
      if (window.go && window.go.main && window.go.main.App) {
        try {
          await window.go.main.App.SFTPDelete(activeTabId, item.path);
          showToast(`Deleted ${item.name}`, "info");
          if (typeof refreshSFTPFn === "function") refreshSFTPFn();
        } catch (err) {
          showToast("Delete failed: " + err, "error");
        }
      }
    }
  };
}

export async function showSFTPPropertiesDialog(item) {
  const activeTabId = getActiveTabId();
  let stats = item;
  if (activeTabId && window.go && window.go.main && window.go.main.App) {
    try {
      const detailed = await window.go.main.App.SFTPGetFileProperties(activeTabId, item.path);
      if (detailed) stats = detailed;
    } catch (_) {}
  }

  const box = showModal(`
    <div class="modal-header">
      <div class="modal-title">ℹ️ Properties — ${escapeHtml(stats.name)}</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="prop-grid">
        <span class="prop-label">Name:</span>
        <span class="prop-val">${escapeHtml(stats.name)}</span>

        <span class="prop-label">Full Path:</span>
        <span class="prop-val">${escapeHtml(stats.path)}</span>

        <span class="prop-label">Type:</span>
        <span class="prop-val">${stats.isDir ? 'Directory (Folder)' : 'Regular File'}</span>

        <span class="prop-label">Size:</span>
        <span class="prop-val">${escapeHtml(stats.formattedSize || '')} (${stats.size || 0} bytes)</span>

        <span class="prop-label">Permissions:</span>
        <span class="prop-val"><code>${escapeHtml(stats.permissions || 'N/A')}</code></span>

        <span class="prop-label">Last Modified:</span>
        <span class="prop-val">${escapeHtml(stats.modTime || 'N/A')}</span>
      </div>
    </div>
    <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
      <button class="btn-secondary" id="propChmodBtn" type="button" style="display: inline-flex; align-items: center; gap: 6px;">
        <span>🔑</span> Change Permissions (chmod)
      </button>
      <button class="btn-primary" id="modalCloseBtn">OK</button>
    </div>
  `);

  if (!box) return;

  const propChmodBtn = box.querySelector("#propChmodBtn");
  if (propChmodBtn) {
    propChmodBtn.onclick = () => {
      hideModal();
      openChmodModal(activeTabId, stats);
    };
  }

  const closeBtn = box.querySelector("#modalCloseBtn");
  if (closeBtn) closeBtn.onclick = hideModal;
  const closeX = box.querySelector("#modalClose");
  if (closeX) closeX.onclick = hideModal;
}

export async function openRemoteFileExternal(remotePath, chooseApp = false) {
  const activeTabId = getActiveTabId();
  if (!activeTabId || !window.go || !window.go.main || !window.go.main.App) {
    showToast("Open an SSH connection first", "warning");
    return;
  }
  const fileName = remotePath.substring(remotePath.lastIndexOf("/") + 1);
  showToast(`Downloading & opening ${fileName}...`, "info");

  try {
    await window.go.main.App.SFTPOpenExternal(activeTabId, remotePath, chooseApp);
    showToast(`Opened ${fileName} (${chooseApp ? 'App Chooser' : 'Default Program'}). Live sync watching for edits.`, "success");
  } catch (err) {
    showToast("Failed to open file externally: " + err, "error");
  }
}

export function handleExternalFileModified(info) {
  const { tabId, remotePath, localPath, fileName, modTime } = info;

  if (userSettings.autoSaveExternalEdits) {
    commitExternalChange(tabId, remotePath, localPath, fileName);
    return;
  }

  showFileChangeNotificationBanner(tabId, remotePath, localPath, fileName, modTime);
}

export function showFileChangeNotificationBanner(tabId, remotePath, localPath, fileName, modTime) {
  const bannerId = "banner-" + btoa(tabId + ":" + remotePath).replace(/=/g, "");
  let existing = document.getElementById(bannerId);
  if (existing) existing.remove();

  const banner = document.createElement("div");
  banner.id = bannerId;
  banner.className = "file-change-banner";
  banner.innerHTML = `
    <div class="file-change-info">
      <div class="file-change-title">
        <span>📝</span> <b>${escapeHtml(fileName)}</b> modified externally (${escapeHtml(modTime || '')})
      </div>
      <div class="file-change-desc" title="${escapeHtml(remotePath)}">
        Allow changes to be committed & saved directly to <code>${escapeHtml(remotePath)}</code>?
      </div>
    </div>
    <div class="file-change-actions">
      <button class="btn-commit" id="btnCommit_${bannerId}">💾 Allow & Save</button>
      <button class="btn-auto-commit" id="btnAuto_${bannerId}" title="Save now and always auto-commit future edits">⚡ Always Auto-Save</button>
      <button class="btn-discard" id="btnDiscard_${bannerId}" title="Discard change notification">&times;</button>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelector(`#btnCommit_${bannerId}`).onclick = () => {
    banner.remove();
    commitExternalChange(tabId, remotePath, localPath, fileName);
  };

  banner.querySelector(`#btnAuto_${bannerId}`).onclick = () => {
    userSettings.autoSaveExternalEdits = true;
    localStorage.setItem("nexterm_settings", JSON.stringify(userSettings));
    banner.remove();
    showToast("Always auto-save enabled: future modifications will save directly", "info");
    commitExternalChange(tabId, remotePath, localPath, fileName);
  };

  banner.querySelector(`#btnDiscard_${bannerId}`).onclick = () => {
    banner.remove();
    showToast(`Discarded change notification for ${fileName}`, "info");
  };
}

export async function commitExternalChange(tabId, remotePath, localPath, fileName) {
  if (window.go && window.go.main && window.go.main.App) {
    try {
      showToast(`Committing & saving ${fileName} to remote server...`, "info");
      await window.go.main.App.SFTPCommitExternalChange(tabId, remotePath, localPath);
      showToast(`✅ Changes committed & directly saved to ${fileName}!`, "success");
      const activeTabId = getActiveTabId();
      if (activeTabId === tabId && typeof refreshSFTPFn === "function") {
        refreshSFTPFn();
      }
    } catch (err) {
      showToast("Failed to commit change to server: " + err, "error");
    }
  }
}

export async function openRemoteFileEditor(remotePath = "") {
  const activeTabId = getActiveTabId();
  const tabs = getTabs();
  const activeTab = activeTabId ? tabs[activeTabId] : null;
  const host = (activeTab && activeTab.profile && (activeTab.profile.host || activeTab.profile.name)) || "workspace";

  const isScratchpad = !remotePath;
  const fileName = remotePath ? remotePath.substring(remotePath.lastIndexOf("/") + 1) : "main.js";
  const displayPath = remotePath ? `${host}:${remotePath}` : `scratchpad:${fileName}`;

  let content = "";
  if (remotePath) {
    if (!activeTabId || !window.go || !window.go.main || !window.go.main.App) {
      showToast("Open an SSH connection first to edit remote files", "warning");
      return;
    }
    showToast(`Opening ${fileName}...`, "info");
    try {
      content = await window.go.main.App.SFTPReadFile(activeTabId, remotePath);
    } catch (err) {
      showToast("Failed to open remote file: " + err, "error");
      return;
    }
  } else {
    // Default demo code matching Felipe Mendes' Slack Theme Dark Mode from screenshot:
    content = `const btn = document.getElementById('btn');
let count = 0;

function render() {
  btn.innerText = \`Count: \${count}\`;
}

btn.addEventListener('click', () => {
  // Count from 1 to 10.
  if (count < 10) {
    count += 1;
    render();
  }
});
`;
  }

  const detectedLang = detectSyntaxLanguage(fileName);
  let eolLabel = "🐧 Linux";
  if (content.includes("\r\n")) {
    eolLabel = "🪟 Windows";
  } else if (content.includes("\r") && !content.includes("\n")) {
    eolLabel = "🍎 Mac";
  }

  const box = showModal(`
    <div class="nte-titlebar">
      <div class="nte-title-left">
        <span class="nte-title-icon">📝</span>
        <span id="nteTitleText">NexTerm Text Editor — ${escapeHtml(fileName)}</span>
        <span class="nte-theme-badge">💬 Slack Theme Dark Mode</span>
      </div>
      <div class="nte-window-controls">
        <button class="nte-win-btn" id="nteMaximizeBtn" title="Maximize / Restore">🗖</button>
        <button class="nte-win-btn close-btn" id="nteCloseBtn" title="Close">✕</button>
      </div>
    </div>

    <div class="nte-menubar">
      <div class="nte-menu-item" id="nteMenuFile">File
        <div class="nte-dropdown hidden" id="nteDropFile">
          <div class="nte-dropdown-item" id="nteActionSave"><span>💾 Save to Server</span><span class="shortcut">Ctrl+S</span></div>
          <div class="nte-dropdown-item" id="nteActionReload"><span>↻ Reload / Revert</span><span class="shortcut">F5</span></div>
          <div class="nte-dropdown-separator"></div>
          <div class="nte-dropdown-item" id="nteActionClose"><span>✕ Close Editor</span><span class="shortcut">Esc</span></div>
        </div>
      </div>
      <div class="nte-menu-item" id="nteMenuEdit">Edit
        <div class="nte-dropdown hidden" id="nteDropEdit">
          <div class="nte-dropdown-item" id="nteActionUndo"><span>↩ Undo</span><span class="shortcut">Ctrl+Z</span></div>
          <div class="nte-dropdown-item" id="nteActionRedo"><span>↪ Redo</span><span class="shortcut">Ctrl+Y</span></div>
          <div class="nte-dropdown-separator"></div>
          <div class="nte-dropdown-item" id="nteActionCut"><span>✂ Cut</span><span class="shortcut">Ctrl+X</span></div>
          <div class="nte-dropdown-item" id="nteActionCopy"><span>📋 Copy</span><span class="shortcut">Ctrl+C</span></div>
          <div class="nte-dropdown-item" id="nteActionPaste"><span>📄 Paste</span><span class="shortcut">Ctrl+V</span></div>
          <div class="nte-dropdown-separator"></div>
          <div class="nte-dropdown-item" id="nteActionSelectAll"><span>🔍 Select All</span><span class="shortcut">Ctrl+A</span></div>
        </div>
      </div>
      <div class="nte-menu-item" id="nteMenuSearch">Search
        <div class="nte-dropdown hidden" id="nteDropSearch">
          <div class="nte-dropdown-item" id="nteActionFind"><span>🔍 Find / Search</span><span class="shortcut">Ctrl+F</span></div>
          <div class="nte-dropdown-item" id="nteActionReplace"><span>🔁 Replace</span><span class="shortcut">Ctrl+H</span></div>
          <div class="nte-dropdown-item" id="nteActionGoto"><span>📍 Go to Line...</span><span class="shortcut">Ctrl+G</span></div>
        </div>
      </div>
      <div class="nte-menu-item" id="nteMenuView">View
        <div class="nte-dropdown hidden" id="nteDropView">
          <div class="nte-dropdown-item" id="nteActionToggleGutter"><span>🔢 Toggle Line Numbers</span></div>
          <div class="nte-dropdown-item" id="nteActionToggleWrap"><span>↩ Toggle Word Wrap</span></div>
          <div class="nte-dropdown-separator"></div>
          <div class="nte-dropdown-item" id="nteActionZoomIn"><span>🔍 Zoom In Font</span><span class="shortcut">Ctrl++</span></div>
          <div class="nte-dropdown-item" id="nteActionZoomOut"><span>🔍 Zoom Out Font</span><span class="shortcut">Ctrl+-</span></div>
        </div>
      </div>
      <div class="nte-menu-item" id="nteMenuFormat">Format
        <div class="nte-dropdown hidden" id="nteDropFormat">
          <div class="nte-dropdown-item" id="nteActionUpper"><span>🔤 UPPERCASE</span></div>
          <div class="nte-dropdown-item" id="nteActionLower"><span>🔡 lowercase</span></div>
          <div class="nte-dropdown-separator"></div>
          <div class="nte-dropdown-item" id="nteActionTrim"><span>✂ Trim Trailing Spaces</span></div>
          <div class="nte-dropdown-item" id="nteActionTabsToSpaces"><span>⇥ Tabs to 4 Spaces</span></div>
        </div>
      </div>
      <div class="nte-menu-item" id="nteMenuEncoding">Encoding
        <div class="nte-dropdown hidden" id="nteDropEncoding">
          <div class="nte-dropdown-item" id="nteEncUtf8"><span>✓ UTF-8</span></div>
          <div class="nte-dropdown-item" id="nteEncAnsi"><span>ANSI / ASCII</span></div>
          <div class="nte-dropdown-item" id="nteEncUtf16"><span>UTF-16</span></div>
        </div>
      </div>
      <div class="nte-menu-item" id="nteMenuSyntax">Syntax
        <div class="nte-dropdown hidden" id="nteDropSyntax">
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="Slack Code (Auto)"><span>💬 Slack Code (Auto)</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="JavaScript"><span>JavaScript</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="Python"><span>Python</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="Go"><span>Go</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="Shell/Bash"><span>Shell / Bash</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="JSON"><span>JSON</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="XML/HTML"><span>XML / HTML</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="CSS"><span>CSS</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="C/C++"><span>C / C++</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="Java"><span>Java</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="SQL"><span>SQL</span></div>
          <div class="nte-dropdown-item nte-syntax-opt" data-lang="Config/YAML"><span>Config / YAML</span></div>
        </div>
      </div>
      <div class="nte-menu-item" id="nteMenuSpecial">Special tools
        <div class="nte-dropdown hidden" id="nteDropSpecial">
          <div class="nte-dropdown-item" id="nteActionEolLinux"><span>🐧 Convert EOL to Linux (LF)</span></div>
          <div class="nte-dropdown-item" id="nteActionEolWindows"><span>🪟 Convert EOL to Windows (CRLF)</span></div>
          <div class="nte-dropdown-separator"></div>
          <div class="nte-dropdown-item" id="nteActionStats"><span>📊 Document Statistics</span></div>
        </div>
      </div>
    </div>

    <div class="nte-toolbar">
      <button class="nte-tb-btn" id="nteTbSave" title="Save & Commit directly to Server (Ctrl+S)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" fill="#36c5f0"/><polyline points="17 21 17 13 7 13 7 21" fill="#1b1d21"/><polyline points="7 3 7 8 15 8" fill="#ecb22e"/></svg>
      </button>
      <button class="nte-tb-btn" id="nteTbReload" title="Reload / Revert from Server (F5)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 3v5h-5M3 21v-5h5M21 8A9 9 0 0 0 4.5 6.5M3 16a9 9 0 0 0 16.5 1.5" stroke="#2eb67d" stroke-width="2.2" stroke-linecap="round"/></svg>
      </button>
      <div class="nte-tb-separator"></div>
      <button class="nte-tb-btn" id="nteTbCut" title="Cut (Ctrl+X)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="3" stroke="#e01e5a" stroke-width="2"/><circle cx="6" cy="18" r="3" stroke="#e01e5a" stroke-width="2"/><line x1="20" y1="4" x2="8.12" y2="15.88" stroke="#e01e5a" stroke-width="2"/><line x1="14.47" y1="14.48" x2="20" y2="20" stroke="#e01e5a" stroke-width="2"/><line x1="8.12" y1="8.12" x2="12" y2="12" stroke="#e01e5a" stroke-width="2"/></svg>
      </button>
      <button class="nte-tb-btn" id="nteTbCopy" title="Copy (Ctrl+C)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="#36c5f0" stroke-width="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#38bdf8" stroke-width="2"/></svg>
      </button>
      <button class="nte-tb-btn" id="nteTbPaste" title="Paste (Ctrl+V)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="#ecb22e" stroke-width="2"/><rect x="8" y="2" width="8" height="4" rx="1" fill="#ecb22e"/></svg>
      </button>
      <div class="nte-tb-separator"></div>
      <button class="nte-tb-btn" id="nteTbUndo" title="Undo (Ctrl+Z)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 7v6h6" stroke="#36c5f0" stroke-width="2.2" stroke-linecap="round"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" stroke="#36c5f0" stroke-width="2.2" stroke-linecap="round"/></svg>
      </button>
      <button class="nte-tb-btn" id="nteTbRedo" title="Redo (Ctrl+Y)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 7v6h-6" stroke="#a78bfa" stroke-width="2.2" stroke-linecap="round"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" stroke="#a78bfa" stroke-width="2.2" stroke-linecap="round"/></svg>
      </button>
      <div class="nte-tb-separator"></div>
      <button class="nte-tb-btn" id="nteTbFind" title="Find & Replace (Ctrl+F)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#36c5f0" stroke-width="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#36c5f0" stroke-width="2.5"/></svg>
      </button>
      <button class="nte-tb-btn active" id="nteTbGutter" title="Toggle Line Numbers">
        <span style="font-size: 11px; font-weight: 700; color: #2eb67d; font-family: monospace;">123</span>
      </button>
      <button class="nte-tb-btn" id="nteTbWrap" title="Toggle Word Wrap">
        <span style="font-size: 13px; color: #ecb22e;">↩</span>
      </button>
      <div class="nte-tb-separator"></div>
      <button class="nte-tb-btn" id="nteTbWinEol" title="Convert to Windows EOL (CRLF)">
        <span style="font-size: 13px;">🪟</span>
      </button>
      <button class="nte-tb-btn" id="nteTbMacEol" title="Convert to Mac EOL (CR)">
        <span style="font-size: 13px;">🍎</span>
      </button>
      <button class="nte-tb-btn" id="nteTbLinEol" title="Convert to Linux EOL (LF)">
        <span style="font-size: 13px;">🐧</span>
      </button>
      <button class="nte-tb-btn" id="nteTbPilcrow" title="Show Whitespace Characters">
        <span style="font-size: 13px; font-weight: bold; color: #c084fc;">¶</span>
      </button>
      <div class="nte-tb-separator"></div>
      <button class="nte-tb-btn" id="nteTbZoomIn" title="Zoom In (Ctrl++)">
        <span style="font-size: 12px; font-weight: 700; color: #36c5f0;">A+</span>
      </button>
      <button class="nte-tb-btn" id="nteTbZoomOut" title="Zoom Out (Ctrl+-)">
        <span style="font-size: 12px; font-weight: 700; color: #94a3b8;">A-</span>
      </button>
      <div class="nte-tb-separator"></div>
      <div style="display: flex; align-items: center; gap: 4px; font-size: 11.5px; color: #9ca3af; margin-left: auto;">
        <span style="color: #36c5f0; font-weight: 600;">Theme:</span>
        <span style="font-size: 11px; padding: 2px 7px; background: rgba(54, 197, 240, 0.15); border: 1px solid rgba(54, 197, 240, 0.35); border-radius: 4px; color: #36c5f0; font-weight: 600;">💬 Slack Dark (Default)</span>
        <span style="margin-left: 6px;">Syntax:</span>
        <select id="nteSyntaxSelect" style="background: #1b1d21; color: #fff; border: 1px solid #383b40; border-radius: 4px; font-size: 11px; padding: 2px 6px;">
          ${["Slack Code (Auto)", "JavaScript", "Python", "Go", "Shell/Bash", "JSON", "XML/HTML", "CSS", "C/C++", "Java", "SQL", "Config/YAML"].map(s => `
            <option value="${s}" ${s === detectedLang ? 'selected' : ''}>${s}</option>
          `).join("")}
        </select>
      </div>
    </div>

    <div class="nte-tabstrip">
      <div class="nte-tab">
        <span>📄</span>
        <span id="nteTabFileName">${escapeHtml(fileName)}</span>
        <span class="nte-tab-dot" id="nteTabDot"></span>
        <span class="nte-tab-close" id="nteTabClose" title="Close">✕</span>
      </div>
    </div>

    <div class="nte-editor-wrap">
      <div class="nte-gutter" id="nteGutter">1</div>
      <div class="nte-code-viewport" id="nteViewport">
        <pre class="nte-highlight-layer" id="nteHighlightLayer" aria-hidden="true"><code id="nteCodeHighlight"></code></pre>
        <textarea class="nte-textarea" id="remoteEditTextarea" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea>
      </div>

      <div class="nte-find-panel hidden" id="nteFindPanel">
        <div class="nte-find-row">
          <input type="text" id="nteFindInput" class="nte-find-input" placeholder="Find..." />
          <button class="nte-btn-sm" id="nteFindNextBtn">Find Next</button>
          <button class="nte-btn-sm" id="nteFindPrevBtn">Find Prev</button>
          <button class="nte-btn-sm" id="nteFindCloseBtn" style="color: #f87171;">✕</button>
        </div>
        <div class="nte-find-row">
          <input type="text" id="nteReplaceInput" class="nte-find-input" placeholder="Replace with..." />
          <button class="nte-btn-sm" id="nteReplaceBtn">Replace</button>
          <button class="nte-btn-sm" id="nteReplaceAllBtn">Replace All</button>
        </div>
        <div id="nteFindStatus" style="font-size: 10.5px; color: #9ca3af;"></div>
      </div>
    </div>

    <div class="nte-statusbar">
      <div class="nte-status-left">
        <span class="nte-status-path" id="nteStatusPath">${escapeHtml(displayPath)}</span>
      </div>
      <div class="nte-status-right">
        <span class="nte-status-pill" id="nteStatusEol">${eolLabel}</span>
        <span class="nte-status-pill" id="nteStatusSyntax" style="font-weight: 600; color: #36c5f0;">${detectedLang}</span>
        <span class="nte-status-pill" id="nteStatusEncoding">UTF-8</span>
        <span class="nte-status-pill" id="nteStatusCaret">Row: 1 | Col: 1 | Pos: 0</span>
        <span class="nte-status-pill" id="nteStatusCounts">0 lines | 0 chars</span>
        <span class="nte-status-save" id="nteStatusSave">✅ Saved</span>
      </div>
    </div>
  `, "nexterm-editor-window");

  if (!box) return;

  const textarea = box.querySelector("#remoteEditTextarea");
  const highlightLayer = box.querySelector("#nteHighlightLayer");
  const codeHighlight = box.querySelector("#nteCodeHighlight");
  const gutter = box.querySelector("#nteGutter");
  const tabDot = box.querySelector("#nteTabDot");
  const statusSave = box.querySelector("#nteStatusSave");
  const statusCaret = box.querySelector("#nteStatusCaret");
  const statusCounts = box.querySelector("#nteStatusCounts");
  const statusEol = box.querySelector("#nteStatusEol");
  const statusSyntax = box.querySelector("#nteStatusSyntax");
  const syntaxSelect = box.querySelector("#nteSyntaxSelect");
  const findPanel = box.querySelector("#nteFindPanel");
  const findInput = box.querySelector("#nteFindInput");
  const replaceInput = box.querySelector("#nteReplaceInput");
  const findStatus = box.querySelector("#nteFindStatus");

  textarea.value = content;

  let isModified = false;
  let currentFontSize = 13;

  function updateHighlight() {
    if (codeHighlight) {
      codeHighlight.innerHTML = highlightSlackCode(textarea.value, statusSyntax.textContent);
    }
  }

  function updateGutterAndStats() {
    const val = textarea.value;
    const lines = val.split("\n");
    const totalLines = lines.length;
    const totalChars = val.length;

    let gutterStr = "";
    for (let i = 1; i <= totalLines; i++) {
      gutterStr += i + "\n";
    }
    gutter.textContent = gutterStr;
    gutter.scrollTop = textarea.scrollTop;
    if (highlightLayer) {
      highlightLayer.scrollTop = textarea.scrollTop;
      highlightLayer.scrollLeft = textarea.scrollLeft;
    }

    const pos = textarea.selectionStart || 0;
    const beforeText = val.substring(0, pos);
    const beforeLines = beforeText.split("\n");
    const row = beforeLines.length;
    const col = beforeLines[beforeLines.length - 1].length + 1;

    statusCaret.textContent = `Row: ${row} | Col: ${col} | Pos: ${pos}`;
    statusCounts.textContent = `${totalLines} lines | ${totalChars} chars`;
  }

  updateHighlight();
  updateGutterAndStats();
  textarea.focus();

  textarea.addEventListener("scroll", () => {
    gutter.scrollTop = textarea.scrollTop;
    if (highlightLayer) {
      highlightLayer.scrollTop = textarea.scrollTop;
      highlightLayer.scrollLeft = textarea.scrollLeft;
    }
  });

  textarea.addEventListener("input", () => {
    if (!isModified) {
      isModified = true;
      tabDot.classList.add("modified");
      statusSave.textContent = "● Modified (Ctrl+S to save)";
      statusSave.className = "nte-status-save modified";
    }
    updateHighlight();
    updateGutterAndStats();
  });

  ["click", "keyup", "select"].forEach(ev => {
    textarea.addEventListener(ev, updateGutterAndStats);
  });

  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;
      textarea.value = val.substring(0, start) + "    " + val.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 4;
      if (!isModified) {
        isModified = true;
        tabDot.classList.add("modified");
        statusSave.textContent = "● Modified (Ctrl+S to save)";
        statusSave.className = "nte-status-save modified";
      }
      updateHighlight();
      updateGutterAndStats();
    } else if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      doSave();
    } else if ((e.ctrlKey || e.metaKey) && e.key === "f") {
      e.preventDefault();
      toggleFind(false);
    } else if ((e.ctrlKey || e.metaKey) && e.key === "h") {
      e.preventDefault();
      toggleFind(true);
    }
  });

  const doSave = async () => {
    if (!remotePath) {
      isModified = false;
      tabDot.classList.remove("modified");
      statusSave.textContent = "✅ Saved";
      statusSave.className = "nte-status-save";
      showToast("Scratchpad saved in session memory", "success");
      return;
    }
    statusSave.textContent = "Saving to server...";
    statusSave.className = "nte-status-save";
    try {
      await window.go.main.App.SFTPWriteFile(activeTabId, remotePath, textarea.value);
      isModified = false;
      tabDot.classList.remove("modified");
      statusSave.textContent = "✅ Saved & Committed";
      statusSave.className = "nte-status-save";
      showToast(`Saved & committed changes directly to ${fileName}`, "success");
      if (typeof refreshSFTPFn === "function") refreshSFTPFn();
    } catch (err) {
      statusSave.textContent = "❌ Save failed";
      statusSave.className = "nte-status-save modified";
      showToast("Save failed: " + err, "error");
    }
  };

  const doReload = async () => {
    if (!remotePath) return;
    if (isModified && !confirm("Discard unsaved changes and reload from server?")) return;
    try {
      const refreshed = await window.go.main.App.SFTPReadFile(activeTabId, remotePath);
      textarea.value = refreshed;
      isModified = false;
      tabDot.classList.remove("modified");
      statusSave.textContent = "✅ Saved";
      statusSave.className = "nte-status-save";
      updateHighlight();
      updateGutterAndStats();
      showToast(`Reloaded ${fileName} from server`, "info");
    } catch (err) {
      showToast("Reload failed: " + err, "error");
    }
  };

  const menuItems = box.querySelectorAll(".nte-menu-item");
  menuItems.forEach(mi => {
    mi.addEventListener("click", (e) => {
      e.stopPropagation();
      const drop = mi.querySelector(".nte-dropdown");
      const wasHidden = drop.classList.contains("hidden");
      box.querySelectorAll(".nte-dropdown").forEach(d => d.classList.add("hidden"));
      if (wasHidden) drop.classList.remove("hidden");
    });
  });
  box.addEventListener("click", () => {
    box.querySelectorAll(".nte-dropdown").forEach(d => d.classList.add("hidden"));
  });

  const maxBtn = box.querySelector("#nteMaximizeBtn");
  maxBtn.onclick = () => {
    box.classList.toggle("is-maximized");
    maxBtn.textContent = box.classList.contains("is-maximized") ? "🗗" : "🗖";
  };

  const handleClose = () => {
    if (isModified && !confirm(`You have unsaved modifications in "${fileName}". Discard and close?`)) {
      return;
    }
    hideModal();
  };
  box.querySelector("#nteCloseBtn").onclick = handleClose;
  box.querySelector("#nteTabClose").onclick = handleClose;
  box.querySelector("#nteActionClose").onclick = handleClose;

  box.querySelector("#nteTbSave").onclick = doSave;
  box.querySelector("#nteActionSave").onclick = doSave;
  box.querySelector("#nteTbReload").onclick = doReload;
  box.querySelector("#nteActionReload").onclick = doReload;

  box.querySelector("#nteTbCut").onclick = () => {
    const sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    if (sel) {
      navigator.clipboard.writeText(sel);
      const start = textarea.selectionStart;
      textarea.value = textarea.value.substring(0, start) + textarea.value.substring(textarea.selectionEnd);
      textarea.selectionStart = textarea.selectionEnd = start;
      isModified = true;
      tabDot.classList.add("modified");
      updateHighlight();
      updateGutterAndStats();
    }
  };
  box.querySelector("#nteActionCut").onclick = () => box.querySelector("#nteTbCut").click();

  box.querySelector("#nteTbCopy").onclick = () => {
    const sel = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    if (sel) {
      navigator.clipboard.writeText(sel);
      showToast("Copied to clipboard", "info");
    }
  };
  box.querySelector("#nteActionCopy").onclick = () => box.querySelector("#nteTbCopy").click();

  box.querySelector("#nteTbPaste").onclick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        const start = textarea.selectionStart;
        textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(textarea.selectionEnd);
        textarea.selectionStart = textarea.selectionEnd = start + text.length;
        isModified = true;
        tabDot.classList.add("modified");
        updateHighlight();
        updateGutterAndStats();
      }
    } catch (_) {}
  };
  box.querySelector("#nteActionPaste").onclick = () => box.querySelector("#nteTbPaste").click();

  box.querySelector("#nteActionSelectAll").onclick = () => {
    textarea.select();
    updateGutterAndStats();
  };

  box.querySelector("#nteTbUndo").onclick = () => {
    document.execCommand("undo");
    updateHighlight();
    updateGutterAndStats();
  };
  box.querySelector("#nteActionUndo").onclick = () => box.querySelector("#nteTbUndo").click();
  box.querySelector("#nteTbRedo").onclick = () => {
    document.execCommand("redo");
    updateHighlight();
    updateGutterAndStats();
  };
  box.querySelector("#nteActionRedo").onclick = () => box.querySelector("#nteTbRedo").click();

  let showGutter = true;
  box.querySelector("#nteTbGutter").onclick = () => {
    showGutter = !showGutter;
    gutter.style.display = showGutter ? "block" : "none";
    box.querySelector("#nteTbGutter").classList.toggle("active", showGutter);
  };
  box.querySelector("#nteActionToggleGutter").onclick = () => box.querySelector("#nteTbGutter").click();

  let isWrapped = false;
  box.querySelector("#nteTbWrap").onclick = () => {
    isWrapped = !isWrapped;
    textarea.classList.toggle("wrap-enabled", isWrapped);
    if (highlightLayer) highlightLayer.classList.toggle("wrap-enabled", isWrapped);
    box.querySelector("#nteTbWrap").classList.toggle("active", isWrapped);
    updateGutterAndStats();
  };
  box.querySelector("#nteActionToggleWrap").onclick = () => box.querySelector("#nteTbWrap").click();

  box.querySelector("#nteTbZoomIn").onclick = () => {
    if (currentFontSize < 26) {
      currentFontSize += 1;
      textarea.style.fontSize = currentFontSize + "px";
      if (highlightLayer) highlightLayer.style.fontSize = currentFontSize + "px";
      gutter.style.fontSize = currentFontSize + "px";
      const lh = (currentFontSize * 1.54).toFixed(1) + "px";
      textarea.style.lineHeight = lh;
      if (highlightLayer) highlightLayer.style.lineHeight = lh;
      gutter.style.lineHeight = lh;
      updateGutterAndStats();
    }
  };
  box.querySelector("#nteActionZoomIn").onclick = () => box.querySelector("#nteTbZoomIn").click();

  box.querySelector("#nteTbZoomOut").onclick = () => {
    if (currentFontSize > 10) {
      currentFontSize -= 1;
      textarea.style.fontSize = currentFontSize + "px";
      if (highlightLayer) highlightLayer.style.fontSize = currentFontSize + "px";
      gutter.style.fontSize = currentFontSize + "px";
      const lh = (currentFontSize * 1.54).toFixed(1) + "px";
      textarea.style.lineHeight = lh;
      if (highlightLayer) highlightLayer.style.lineHeight = lh;
      gutter.style.lineHeight = lh;
      updateGutterAndStats();
    }
  };
  box.querySelector("#nteActionZoomOut").onclick = () => box.querySelector("#nteTbZoomOut").click();

  box.querySelector("#nteTbLinEol").onclick = () => {
    textarea.value = textarea.value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    statusEol.textContent = "🐧 Linux";
    isModified = true;
    tabDot.classList.add("modified");
    updateHighlight();
    updateGutterAndStats();
    showToast("Converted EOL to Linux (LF)", "info");
  };
  box.querySelector("#nteActionEolLinux").onclick = () => box.querySelector("#nteTbLinEol").click();

  box.querySelector("#nteTbWinEol").onclick = () => {
    textarea.value = textarea.value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\n/g, "\r\n");
    statusEol.textContent = "🪟 Windows";
    isModified = true;
    tabDot.classList.add("modified");
    updateHighlight();
    updateGutterAndStats();
    showToast("Converted EOL to Windows (CRLF)", "info");
  };
  box.querySelector("#nteActionEolWindows").onclick = () => box.querySelector("#nteTbWinEol").click();

  box.querySelector("#nteTbMacEol").onclick = () => {
    textarea.value = textarea.value.replace(/\r\n/g, "\r").replace(/\n/g, "\r");
    statusEol.textContent = "🍎 Mac";
    isModified = true;
    tabDot.classList.add("modified");
    updateHighlight();
    updateGutterAndStats();
    showToast("Converted EOL to Mac (CR)", "info");
  };

  box.querySelector("#nteActionUpper").onclick = () => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start !== end) {
      const sel = textarea.value.substring(start, end).toUpperCase();
      textarea.value = textarea.value.substring(0, start) + sel + textarea.value.substring(end);
      textarea.selectionStart = start;
      textarea.selectionEnd = end;
    } else {
      textarea.value = textarea.value.toUpperCase();
    }
    isModified = true;
    tabDot.classList.add("modified");
    updateHighlight();
    updateGutterAndStats();
  };

  box.querySelector("#nteActionLower").onclick = () => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start !== end) {
      const sel = textarea.value.substring(start, end).toLowerCase();
      textarea.value = textarea.value.substring(0, start) + sel + textarea.value.substring(end);
      textarea.selectionStart = start;
      textarea.selectionEnd = end;
    } else {
      textarea.value = textarea.value.toLowerCase();
    }
    isModified = true;
    tabDot.classList.add("modified");
    updateHighlight();
    updateGutterAndStats();
  };

  box.querySelector("#nteActionTrim").onclick = () => {
    textarea.value = textarea.value.split("\n").map(l => l.trimEnd()).join("\n");
    isModified = true;
    tabDot.classList.add("modified");
    updateHighlight();
    updateGutterAndStats();
    showToast("Trimmed trailing whitespaces", "info");
  };

  box.querySelector("#nteActionTabsToSpaces").onclick = () => {
    textarea.value = textarea.value.replace(/\t/g, "    ");
    isModified = true;
    tabDot.classList.add("modified");
    updateHighlight();
    updateGutterAndStats();
    showToast("Converted tabs to 4 spaces", "info");
  };

  const setSyntax = (lang) => {
    statusSyntax.textContent = lang;
    if (syntaxSelect) syntaxSelect.value = lang;
    updateHighlight();
    showToast(`Syntax highlighting set to ${lang}`, "info");
  };
  if (syntaxSelect) {
    syntaxSelect.onchange = (e) => setSyntax(e.target.value);
  }
  box.querySelectorAll(".nte-syntax-opt").forEach(opt => {
    opt.onclick = () => setSyntax(opt.dataset.lang);
  });

  box.querySelector("#nteActionStats").onclick = () => {
    const txt = textarea.value;
    const lines = txt.split("\n").length;
    const words = (txt.match(/\S+/g) || []).length;
    const chars = txt.length;
    alert(`Document Statistics:\n• File: ${fileName}\n• Lines: ${lines}\n• Words: ${words}\n• Characters: ${chars}\n• Syntax: ${statusSyntax.textContent}`);
  };

  const toggleFind = (withReplace = false) => {
    const isHidden = findPanel.classList.contains("hidden");
    if (isHidden) {
      findPanel.classList.remove("hidden");
      findInput.focus();
      findInput.select();
      if (withReplace) replaceInput.focus();
    } else {
      findPanel.classList.add("hidden");
      textarea.focus();
    }
  };

  box.querySelector("#nteTbFind").onclick = () => toggleFind(false);
  box.querySelector("#nteActionFind").onclick = () => toggleFind(false);
  box.querySelector("#nteActionReplace").onclick = () => toggleFind(true);
  box.querySelector("#nteFindCloseBtn").onclick = () => findPanel.classList.add("hidden");

  const doFindNext = (direction = 1) => {
    const query = findInput.value;
    if (!query) return;
    const text = textarea.value;
    let idx = direction === 1 
      ? text.indexOf(query, textarea.selectionEnd)
      : text.lastIndexOf(query, Math.max(0, textarea.selectionStart - 1));

    if (idx === -1) {
      idx = direction === 1 ? text.indexOf(query, 0) : text.lastIndexOf(query);
    }

    if (idx !== -1) {
      textarea.focus();
      textarea.setSelectionRange(idx, idx + query.length);
      findStatus.textContent = `Found at position ${idx}`;
      findStatus.style.color = "#a7f3d0";
      updateGutterAndStats();
    } else {
      findStatus.textContent = "Phrase not found";
      findStatus.style.color = "#f87171";
    }
  };

  box.querySelector("#nteFindNextBtn").onclick = () => doFindNext(1);
  box.querySelector("#nteFindPrevBtn").onclick = () => doFindNext(-1);
  findInput.onkeydown = (e) => {
    if (e.key === "Enter") doFindNext(e.shiftKey ? -1 : 1);
    else if (e.key === "Escape") findPanel.classList.add("hidden");
  };

  box.querySelector("#nteReplaceBtn").onclick = () => {
    const q = findInput.value;
    const rep = replaceInput.value;
    if (!q) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (textarea.value.substring(start, end) === q) {
      textarea.value = textarea.value.substring(0, start) + rep + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + rep.length;
      isModified = true;
      tabDot.classList.add("modified");
      updateHighlight();
      updateGutterAndStats();
    }
    doFindNext(1);
  };

  box.querySelector("#nteReplaceAllBtn").onclick = () => {
    const q = findInput.value;
    const rep = replaceInput.value;
    if (!q) return;
    const count = (textarea.value.split(q).length - 1);
    if (count > 0) {
      textarea.value = textarea.value.split(q).join(rep);
      isModified = true;
      tabDot.classList.add("modified");
      updateHighlight();
      updateGutterAndStats();
      findStatus.textContent = `Replaced ${count} occurrences`;
      findStatus.style.color = "#a7f3d0";
    } else {
      findStatus.textContent = "No matches to replace";
      findStatus.style.color = "#f87171";
    }
  };

  box.querySelector("#nteActionGoto").onclick = () => {
    const lineNum = prompt("Enter line number to navigate to:");
    if (lineNum) {
      const target = parseInt(lineNum, 10);
      if (!isNaN(target) && target > 0) {
        const lines = textarea.value.split("\n");
        if (target <= lines.length) {
          let charIndex = 0;
          for (let i = 0; i < target - 1; i++) {
            charIndex += lines[i].length + 1;
          }
          textarea.focus();
          textarea.setSelectionRange(charIndex, charIndex);
          updateGutterAndStats();
        }
      }
    }
  };
}

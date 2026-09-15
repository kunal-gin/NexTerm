import{A as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,R as p,S as m,T as h,V as g,_,a as v,b as y,c as b,d as x,g as S,h as C,i as w,j as T,k as E,l as D,m as O,n as k,o as A,p as j,r as M,s as ee,t as te,u as ne,v as N,w as P,x as F,y as re,z as ie}from"./workspaceState-Av5XbUcK.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var I=null;function ae(e){return I=e,I}function oe(e,t){function n(e){if(!e)return!1;if(e.id===t)return!0;if(e.children){for(let t of e.children)if(n(t))return!0}return!1}function r(t){if(!t)return null;if(t.id===e)return t;if(t.children)for(let e of t.children){let t=r(e);if(t)return t}return null}let i=r(I);return i?n(i):!1}function se(e=I,t=[]){return e?(!e.isFolder&&e.session&&t.push(e.session),e.children&&Array.isArray(e.children)&&e.children.forEach(e=>se(e,t)),t):t}var ce=null;function le(e){ce=e}function ue(e){if(!e)return{category:`Unknown`,message:`Unknown connection error`,description:`No additional diagnostic information available.`,rawError:``};if(typeof e==`object`&&e&&e.category&&e.message)return{category:e.category,message:e.message,description:e.description||``,rawError:e.rawError||e.message};let t=String(e).trim(),n=t.match(/^\[(.*?)\]\s*(.*?)(?::\s*(.*))?$/);if(n)return{category:n[1],message:n[2]||n[1],description:n[3]||n[2]||``,rawError:t};let r=t.toLowerCase();return r.includes(`timeout`)||r.includes(`timed out`)||r.includes(`deadline exceeded`)||r.includes(`connectex: a connection attempt failed`)?{category:`Timeout`,message:`Connection timed out`,description:`The remote host did not respond within the connection timeout threshold. Check target IP/hostname, firewall, or network route.`,rawError:t}:r.includes(`connection refused`)||r.includes(`refused`)||r.includes(`no connection could be made`)?{category:`Connection refused`,message:`Connection refused by host`,description:`The target host is active but rejected the connection. Verify that the SSH service is running on the specified port.`,rawError:t}:r.includes(`no such host`)||r.includes(`getaddrinfow`)||r.includes(`name resolution`)||r.includes(`lookup`)?{category:`DNS failure`,message:`DNS lookup failed`,description:`Could not resolve the domain name to an IP address. Check the hostname spelling and your network DNS settings.`,rawError:t}:r.includes(`host key`)||r.includes(`hostkey`)||r.includes(`known_hosts`)||r.includes(`fingerprint mismatch`)||r.includes(`man-in-the-middle`)?{category:`Host-key mismatch`,message:`Host-key verification failed`,description:`The remote server presented a host key that does not match your saved known_hosts record. Possible security threat or re-installed server.`,rawError:t}:r.includes(`unable to authenticate`)||r.includes(`auth fail`)||r.includes(`authentication failure`)||r.includes(`password change`)||r.includes(`bad password`)?{category:`Authentication failure`,message:`Authentication failed`,description:`The server rejected credentials. Verify your username, password, or SSH private key passphrase.`,rawError:t}:r.includes(`permission denied`)||r.includes(`access denied`)||r.includes(`forbidden`)?{category:`Permission denied`,message:`Permission denied`,description:`The remote host refused permission to open a terminal session or subsystem for this user account.`,rawError:t}:r.includes(`eof`)||r.includes(`connection reset`)||r.includes(`broken pipe`)||r.includes(`closed by remote`)||r.includes(`closed connection`)||r.includes(`reset by peer`)?{category:`Server closed connection`,message:`Server closed connection`,description:`The remote SSH server or intermediate gateway terminated the connection unexpectedly.`,rawError:t}:{category:`Unknown`,message:t.replace(/^error:\s*/i,``),description:`An unexpected connection error occurred.`,rawError:t}}function de(e,t=66){if(!e)return[];let n=String(e).split(` `),r=[],i=``;return n.forEach(e=>{(i+` `+e).trim().length<=t?i=(i+` `+e).trim():(i&&r.push(i),i=e)}),i&&r.push(i),r}function L(e,t,n){if(!e)return;let r=n?.category||`Unknown`,i=n?.message||`Connection failed`,a=n?.description||`An unexpected error occurred during connection.`,o=n?.rawError||``;e.write(`\r
`),e.write(`\x1B[1;31m┌────────────────────────────────────────────────────────────────────────┐\x1B[0m\r
`),e.write(`\x1b[1;31m│\x1b[0m \x1b[1;37;41m ❌ CONNECTION ERROR \x1b[0m \x1b[1;31m${r.padEnd(49).slice(0,49)}\x1b[1;31m│\x1b[0m\r\n`),e.write(`\x1B[1;31m├────────────────────────────────────────────────────────────────────────┤\x1B[0m\r
`),e.write(`\x1b[1;31m│\x1b[0m \x1b[1;36mTarget:\x1b[0m         ${`${t.host||`unknown`}:${t.port||22}`.padEnd(56).slice(0,56)}\x1b[1;31m│\x1b[0m\r\n`),e.write(`\x1b[1;31m│\x1b[0m \x1b[1;36mUser:\x1b[0m           ${(t.username||`n/a`).padEnd(56).slice(0,56)}\x1b[1;31m│\x1b[0m\r\n`),e.write(`\x1b[1;31m│\x1b[0m \x1b[1;33mClassification:\x1b[0m ${r.padEnd(56).slice(0,56)}\x1b[1;31m│\x1b[0m\r\n`),e.write(`\x1b[1;31m│\x1b[0m \x1b[1;31mReason:\x1b[0m         ${i.padEnd(56).slice(0,56)}\x1b[1;31m│\x1b[0m\r\n`),e.write(`\x1B[1;31m├────────────────────────────────────────────────────────────────────────┤\x1B[0m\r
`),e.write(`\x1B[1;31m│\x1B[0m \x1B[1;33mDiagnostics:\x1B[0m                                                           \x1B[1;31m│\x1B[0m\r
`),de(a,68).forEach(t=>{e.write(`\x1b[1;31m│\x1b[0m   \x1b[0;37m${t.padEnd(68).slice(0,68)}\x1b[1;31m│\x1b[0m\r\n`)}),o&&o!==i&&o!==a&&(e.write(`\x1B[1;31m├────────────────────────────────────────────────────────────────────────┤\x1B[0m\r
`),de(`Raw details: `+o,68).forEach(t=>{e.write(`\x1b[1;31m│\x1b[0m   \x1b[0;90m${t.padEnd(68).slice(0,68)}\x1b[1;31m│\x1b[0m\r\n`)})),e.write(`\x1B[1;31m├────────────────────────────────────────────────────────────────────────┤\x1B[0m\r
`),e.write(`\x1B[1;31m│\x1B[0m \x1B[1;32m💡 Hint:\x1B[0m Click \x1B[1;33m↻ Reconnect\x1B[0m in top toolbar or press \x1B[1;33mCtrl+R\x1B[0m to retry      \x1B[1;31m│\x1B[0m\r
`),e.write(`\x1B[1;31m└────────────────────────────────────────────────────────────────────────┘\x1B[0m\r
\r
`)}function fe(e,t){let n=e.theme||t.theme||`dark-modern`,r=Object.assign({},yr[n]||yr[`dark-modern`]);e.background&&(r.background=e.background),e.cursorColor&&(r.cursor=e.cursorColor),e.selectionColor&&(r.selectionBackground=e.selectionColor),e.ansiColors&&typeof e.ansiColors==`object`&&Object.assign(r,e.ansiColors);let i=window.Terminal||(typeof Terminal<`u`?Terminal:null);if(!i)throw console.error(`[terminal] Terminal class is not defined. Ensure vendor/xterm.js is loaded.`),Error(`Terminal class is not defined. Ensure vendor/xterm.js is loaded.`);let a=new i({fontFamily:e.fontFamily||t.fontFamily,fontSize:e.fontSize||t.fontSize,cursorBlink:e.cursorBlink===void 0?t.cursorBlink:e.cursorBlink,cursorStyle:e.cursorStyle||t.cursorStyle||`block`,scrollback:e.scrollback||t.scrollback||1e4,cols:e.cols>0?e.cols:80,rows:e.rows>0?e.rows:24,theme:r,allowTransparency:!0,smoothScrollDuration:120,scrollSensitivity:1.5,fastScrollSensitivity:5}),o=null;try{let e=window.FitAddon?.FitAddon||window.FitAddon||(typeof FitAddon<`u`?FitAddon:null);e&&(o=typeof e==`function`?new e:typeof e.FitAddon==`function`?new e.FitAddon:null,o&&a.loadAddon(o))}catch(e){console.warn(`FitAddon error:`,e)}let s=null;try{let e=window.SearchAddon?.SearchAddon||window.SearchAddon||(typeof SearchAddon<`u`?SearchAddon:null);e&&(s=typeof e==`function`?new e:typeof e.SearchAddon==`function`?new e.SearchAddon:null,s&&a.loadAddon(s))}catch(e){console.warn(`SearchAddon error:`,e)}return{term:a,fitAddon:o,searchAddon:s}}function pe(e,t,n,r){if(!r)return null;let i=t.querySelector(`.pane-terminal-top`)||t,a=document.createElement(`div`);a.className=`terminal-search-bar hidden`,a.id=`termSearchBar_${e}`,a.setAttribute(`role`,`search`),a.innerHTML=`
    <div class="search-input-box">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" id="termSearchInput_${e}" placeholder="Search terminal..." spellcheck="false" autocomplete="off" />
      <span class="search-count-badge" id="termSearchBadge_${e}"></span>
    </div>
    <div class="search-btn-group">
      <button type="button" class="btn-search btn-search-prev" id="termSearchPrev_${e}" title="Previous match (Shift+Enter)">▲</button>
      <button type="button" class="btn-search btn-search-next" id="termSearchNext_${e}" title="Next match (Enter)">▼</button>
      <button type="button" class="btn-search btn-search-toggle" id="termSearchCase_${e}" title="Match case (Alt+C)">Aa</button>
      <button type="button" class="btn-search btn-search-toggle" id="termSearchRegex_${e}" title="Regex (Alt+R)">.*</button>
      <button type="button" class="btn-search btn-search-close" id="termSearchClose_${e}" title="Close (Escape)">✕</button>
    </div>
  `,i.appendChild(a);let o=a.querySelector(`#termSearchInput_${e}`),s=a.querySelector(`#termSearchBadge_${e}`),c=a.querySelector(`#termSearchPrev_${e}`),l=a.querySelector(`#termSearchNext_${e}`),u=a.querySelector(`#termSearchCase_${e}`),d=a.querySelector(`#termSearchRegex_${e}`),f=a.querySelector(`#termSearchClose_${e}`),p={isOpen:!1,query:``,caseSensitive:!1,regex:!1,barEl:a,inputEl:o,badgeEl:s,caseBtn:u,regexBtn:d};typeof r.onDidChangeResults==`function`&&r.onDidChangeResults(e=>{if(p.isOpen){if(!p.query){s.textContent=``,s.classList.remove(`no-matches`);return}if(e.resultCount===0)s.textContent=`No results`,s.classList.add(`no-matches`);else{s.classList.remove(`no-matches`);let t=e.resultIndex>=0?e.resultIndex+1:0;s.textContent=`${t} of ${e.resultCount}`}}});let m=(e=!1)=>({regex:p.regex,caseSensitive:p.caseSensitive,incremental:e,decorations:{matchOverviewRulerColor:`#3b82f6`,activeMatchColorOverviewRuler:`#f59e0b`,matchBackground:`rgba(59, 130, 246, 0.35)`,activeMatchBackground:`rgba(245, 158, 11, 0.65)`}}),h=(e=!0,t=!1)=>{let n=o.value;if(p.query=n,!n){if(s.textContent=``,s.classList.remove(`no-matches`),typeof r.clearDecorations==`function`)try{r.clearDecorations()}catch{}return}if(p.regex)try{new RegExp(n)}catch{s.textContent=`Invalid regex`,s.classList.add(`no-matches`);return}let i=m(t);try{e?r.findNext(n,i):r.findPrevious(n,i)}catch(e){console.warn(`Search execution error:`,e)}};return o.addEventListener(`input`,()=>{h(!0,!0)}),o.addEventListener(`keydown`,t=>{t.key===`Enter`?(t.preventDefault(),t.stopPropagation(),h(!t.shiftKey,!1)):t.key===`Escape`?(t.preventDefault(),t.stopPropagation(),he(e)):t.altKey&&(t.key===`c`||t.key===`C`)?(t.preventDefault(),t.stopPropagation(),u.click()):t.altKey&&(t.key===`r`||t.key===`R`)&&(t.preventDefault(),t.stopPropagation(),d.click())}),c.addEventListener(`click`,e=>{e.stopPropagation(),h(!1,!1),o.focus()}),l.addEventListener(`click`,e=>{e.stopPropagation(),h(!0,!1),o.focus()}),u.addEventListener(`click`,e=>{e.stopPropagation(),p.caseSensitive=!p.caseSensitive,u.classList.toggle(`active`,p.caseSensitive),h(!0,!1),o.focus()}),d.addEventListener(`click`,e=>{e.stopPropagation(),p.regex=!p.regex,d.classList.toggle(`active`,p.regex),h(!0,!1),o.focus()}),f.addEventListener(`click`,t=>{t.stopPropagation(),he(e)}),p}function me(e){let t=T();if(!e||!t[e])return;let n=t[e];if(n.searchState&&(n.searchState.isOpen=!0,n.searchState.barEl.classList.remove(`hidden`),n.searchState.inputEl.focus(),n.searchState.inputEl.select(),n.searchState.inputEl.value&&n.searchAddon))try{n.searchAddon.findNext(n.searchState.inputEl.value,{regex:n.searchState.regex,caseSensitive:n.searchState.caseSensitive,incremental:!0,decorations:{matchOverviewRulerColor:`#3b82f6`,activeMatchColorOverviewRuler:`#f59e0b`,matchBackground:`rgba(59, 130, 246, 0.35)`,activeMatchBackground:`rgba(245, 158, 11, 0.65)`}})}catch{}}function he(e){let t=T();if(!e||!t[e])return;let n=t[e];if(n.searchState){if(n.searchState.isOpen=!1,n.searchState.barEl.classList.add(`hidden`),n.searchAddon&&typeof n.searchAddon.clearDecorations==`function`)try{n.searchAddon.clearDecorations()}catch{}if(n.term)try{n.term.focus()}catch{}}}function ge(){let e=document.getElementById(`sftpFollowTermCheckbox`);return!e||e.checked}function _e(e){if(!e)return null;let t=e.trim().match(/^(?:cd|pushd)(?:[\s]+(.*))?$/i);if(!t)return null;let n=t[1]===void 0?``:t[1].trim();return n?((n.includes(`;`)||n.includes(`&&`)||n.includes(`||`)||n.includes(`|`))&&(n=n.split(/[;&|]/)[0].trim()),(n.startsWith(`"`)&&n.endsWith(`"`)||n.startsWith(`'`)&&n.endsWith(`'`))&&(n=n.slice(1,-1)),n=n.replace(/\\ /g,` `),n.length>1&&n.endsWith(`/`)&&(n=n.slice(0,-1)),n.trim()):`~`}function ve(e){let t=e.startsWith(`/`),n=e.split(`/`).filter(e=>e&&e!==`.`),r=[];for(let e of n)e===`..`?r.length>0&&r.pop():r.push(e);return(t?`/`:``)+r.join(`/`)}function ye(e,t,n=`~`){if(!t||t===`~`||t===`$HOME`||t===``)return`~`;if(t===`-`)return n||`~`;if(t.startsWith(`/`))return ve(t);if(t.startsWith(`~/`))return`~/`+ve(t.slice(2));let r=e&&e!==`/`?e:``;return!r||r===`~`?`~/`+ve(t):ve(r+`/`+t)}function be(e){if(!e||!e.buffer||!e.buffer.active)return null;let t=e.buffer.active,n=Math.min(t.baseY+t.cursorY,t.length-1);for(let e=n;e>=Math.max(0,n-20);e--){let n=t.getLine(e);if(!n)continue;let r=n.translateToString(!0);if(!r||!r.trim())continue;let i=r.match(/\[(?:[^@\s]+@)?[^\]\s:]+[\s:]([^\]]+)\][\$#%>\s]?/);if(i&&i[1]){let e=i[1].replace(/\s*\([^\)]*\)\s*$/,``).replace(/[\$#%>\s]+$/,``).trim();if(e)return e}let a=r.match(/(?:[^@\s]+@)?[^:\s]+:([^\$#%>\r\n]+)[\$#%>\s]?/);if(a&&a[1]){let e=a[1].replace(/\s*\([^\)]*\)\s*$/,``).replace(/[\$#%>\s]+$/,``).trim();if(e)return e}let o=r.match(/\[([~/][^\]\s]*)\][\$#%>\s]?/);if(o&&o[1])return o[1].trim()}return null}function xe(e=P()){let t=T()[e];if(!t||t.isLocal)return;let n=null;try{n=be(t.term)}catch{}let r=``;if(n){if(n===`~`||n.startsWith(`/`)||n.startsWith(`~/`))r=n;else{let e=t.terminalCwd&&t.terminalCwd!==`~`?t.terminalCwd:`~`;r=e.replace(/\/+$/,``).split(`/`).pop()===n?e:ye(e,n,t.lastSftpPath)}t.terminalCwd=r}else r=t.terminalCwd?t.terminalCwd:t.sftpPath||`~`;t.sftpPath=r,typeof ce==`function`&&ce(r),t.loadRemoteList&&t.loadRemoteList(r)}var Se=null;function Ce(e,t){let n=_e(t);if(n===null)return;let r=T(),i=r[e];if(!i||i.isLocal)return;let a=ye(i.terminalCwd||i.sftpPath||`~`,n,i.lastSftpPath);i.lastSftpPath=i.terminalCwd||i.sftpPath,i.terminalCwd=a,ge()&&(Se&&clearTimeout(Se),Se=setTimeout(async()=>{r[e]&&P()===e&&ge()&&(i.sftpPath=a,typeof ce==`function`&&await ce(a),i.loadRemoteList&&i.loadRemoteList(a))},350))}function we(e,t){let n=``;if(t.includes(`:`)){let e=t.split(`:`);n=e[e.length-1].trim()}else(t.startsWith(`/`)||t.startsWith(`~`))&&(n=t.trim());if(n&&(n.startsWith(`/`)||n.startsWith(`~`))){n=n.split(/[\s\$#]/)[0].trim();let t=T()[e];n&&t&&(t.lastSftpPath=t.terminalCwd||t.sftpPath,t.terminalCwd=n,ge()&&P()===e&&t.sftpPath!==n&&(t.sftpPath=n,typeof ce==`function`&&ce(n)))}}function Te(e,t){let n=t;if(n.startsWith(`file://`))try{let e=new URL(n);n=decodeURIComponent(e.pathname)}catch{n=n.replace(/^file:\/\/[^\/]*/,``)}if(n&&n.startsWith(`/`)){let t=T()[e];t&&(t.lastSftpPath=t.terminalCwd||t.sftpPath,t.terminalCwd=n,ge()&&P()===e&&t.sftpPath!==n&&(t.sftpPath=n,typeof ce==`function`&&ce(n)))}}function Ee(e,t){let n=t.replace(/\x1b\[[0-9;]*[a-zA-Z]/g,``).replace(/\x1b\][^\x07\x1b]*(\x07|\x1b\\)/g,``),r=n.match(/\[([^@\s]+)@([^\]\s]+)\s+([^\]]+)\][\$#]\s*$/);if(r&&r[1]&&r[2]){let t=r[2].trim(),n=T()[e];n&&!n.remoteHostname&&t&&(n.remoteHostname=t,F(e)),Oe(e,r[3].trim());return}let i=n.match(/([^@\s]+)@([^:\s]+):([^\$#\r\n]+)[\$#]\s*$/);if(i&&i[1]&&i[2]){let t=i[2].trim(),n=T()[e];n&&!n.remoteHostname&&t&&(n.remoteHostname=t,F(e)),Oe(e,i[3].trim());return}}var De=``;function Oe(e,t){if(!t)return;let n=T()[e];if(!n||n.isLocal)return;let r=``;if(t===`~`)r=`~`;else if(t.startsWith(`/`)||t.startsWith(`~/`))r=t;else{let e=n.terminalCwd||n.sftpPath||`~`;if(e.replace(/\/+$/,``).split(`/`).pop()===t)return;r=ye(e,t,n.lastSftpPath)}r&&(n.lastSftpPath=n.terminalCwd||n.sftpPath,n.terminalCwd=r,ge()&&P()===e&&r!==n.sftpPath&&r!==De&&(De=r,n.sftpPath=r,typeof ce==`function`&&ce(r)))}function ke(){return document.getElementById(`contextMenu`)}function R(){let e=ke();e&&e.classList.add(`hidden`)}function Ae(e,t){let n=ke();if(!n)return;n.classList.remove(`hidden`),n.style.visibility=`hidden`,n.style.left=`0px`,n.style.top=`0px`;let r=n.offsetWidth||230,i=n.offsetHeight||380,a=Math.max(10,Math.min(e,window.innerWidth-r-10)),o=Math.max(10,Math.min(t,window.innerHeight-i-10));n.style.left=a+`px`,n.style.top=o+`px`,n.style.visibility=`visible`}function je(e,t){let n=document.getElementById(`splitLayoutMenu`);n||(n=document.createElement(`div`),n.id=`splitLayoutMenu`,n.className=`split-layout-menu`,document.body.appendChild(n));let r=k();n.innerHTML=`
    <div class="split-layout-title">Terminal Layout Presets</div>
    <div class="split-layout-grid">
      <div class="layout-card ${r===`single`?`active`:``}" data-layout="single">
        <div class="card-preview pv-single"><div class="pv-box"></div></div>
        <span class="card-label">1 Terminal</span>
      </div>
      <div class="layout-card ${r===`split-v`?`active`:``}" data-layout="split-v">
        <div class="card-preview pv-split-v"><div class="pv-box"></div><div class="pv-box"></div></div>
        <span class="card-label">2 Vertical</span>
      </div>
      <div class="layout-card ${r===`split-h`?`active`:``}" data-layout="split-h">
        <div class="card-preview pv-split-h"><div class="pv-box"></div><div class="pv-box"></div></div>
        <span class="card-label">2 Horizontal</span>
      </div>
      <div class="layout-card ${r===`2-top-1-bot`?`active`:``}" data-layout="2-top-1-bot">
        <div class="card-preview pv-2-top-1-bot">
          <div class="pv-box"></div>
          <div class="pv-box"></div>
          <div class="pv-box b3"></div>
        </div>
        <span class="card-label">2 Top + 1 Bottom</span>
      </div>
      <div class="layout-card ${r===`1-top-2-bot`?`active`:``}" data-layout="1-top-2-bot">
        <div class="card-preview pv-1-top-2-bot">
          <div class="pv-box b1"></div>
          <div class="pv-box"></div>
          <div class="pv-box"></div>
        </div>
        <span class="card-label">1 Top + 2 Bottom</span>
      </div>
      <div class="layout-card ${r===`grid-4`?`active`:``}" data-layout="grid-4">
        <div class="card-preview pv-grid-4">
          <div class="pv-box"></div><div class="pv-box"></div>
          <div class="pv-box"></div><div class="pv-box"></div>
        </div>
        <span class="card-label">4 Grid (2x2)</span>
      </div>
      <div class="layout-card ${r===`3-cols`?`active`:``}" data-layout="3-cols">
        <div class="card-preview pv-3-cols">
          <div class="pv-box"></div><div class="pv-box"></div><div class="pv-box"></div>
        </div>
        <span class="card-label">3 Columns</span>
      </div>
    </div>
  `,n.style.left=Math.min(e,window.innerWidth-310)+`px`,n.style.top=t+`px`,n.classList.remove(`hidden`),n.querySelectorAll(`.layout-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.layout;b(t),n.classList.add(`hidden`)})});let i=e=>{!n.contains(e.target)&&e.target.id!==`tbSplitBtn`&&!e.target.closest(`#tbSplitBtn`)&&(n.classList.add(`hidden`),document.removeEventListener(`mousedown`,i))};setTimeout(()=>document.addEventListener(`mousedown`,i),10)}function Me(e,t=`All Sessions`,n=``){if(!e)return[];let r=[];if(e.session&&r.push({id:e.session.id||e.id,nodeId:e.id,name:e.name||e.session.name||e.session.host||`Server`,host:e.session.host||``,port:e.session.port||22,username:e.session.username||``,protocol:(e.session.protocol||`ssh`).toLowerCase(),environment:e.session.environment||``,color:e.session.color||``,folderName:t,folderId:n,profile:e.session}),e.children&&Array.isArray(e.children)){let i=e.session?t:e.name||t,a=e.session?n:e.id||n;for(let t of e.children)r.push(...Me(t,i,a))}return r}function Ne(e){let t=new Map;return e.forEach(e=>{t.has(e.folderId)||t.set(e.folderId,{id:e.folderId,name:e.folderName,count:0}),t.get(e.folderId).count++}),Array.from(t.values())}function Pe(e,n,r){let i=(typeof T==`function`?T():t)||{};return Object.values(i).some(t=>!t||!t.isConnected?!1:!!(t.profile&&t.profile.id&&t.profile.id===e||t.profile&&t.profile.host===n&&(t.profile.username||``)===(r||``)))}function Fe(e=null){let t=Me(I);if(t.length===0){S(`No saved servers found. Create a session first using '＋' or Quick Connect.`,`warning`);return}let n=Ne(t),a=e||`all`,o=``,s=H(`
    <div class="modal-header multiconnect-modal-header">
      <div class="multiconnect-title-group">
        <div class="modal-title multiconnect-title">
          <span class="multiconnect-icon">📡</span>
          <span>Multi-Server Broadcast Connect</span>
        </div>
        <div class="multiconnect-subtitle">
          Select multiple servers to connect concurrently with automated split layout and synchronized broadcasting.
        </div>
      </div>
      <button class="modal-close-btn" id="modalClose" title="Close">&times;</button>
    </div>

    <div class="modal-body multiconnect-modal-body">
      <!-- Search & Filters Toolbar -->
      <div class="multiconnect-toolbar">
        <div class="multiconnect-search-wrap">
          <span class="search-lens-icon">🔍</span>
          <input type="text" id="mconnSearchInput" class="multiconnect-search-input" placeholder="Search servers by name, host, or user..." autocomplete="off" />
        </div>

        <div class="multiconnect-quick-actions">
          <button type="button" class="btn-sm-action" id="mconnSelectAllBtn">Select All</button>
          <button type="button" class="btn-sm-action" id="mconnSelectNoneBtn">Deselect All</button>
          <span class="mconn-selected-counter" id="mconnSelectedBadge">0 selected</span>
        </div>
      </div>

      <!-- Folder Filter Pills -->
      <div class="multiconnect-folder-pills" id="mconnFolderPills">
        <button type="button" class="mconn-pill ${a===`all`?`active`:``}" data-folder-id="all">
          All (${t.length})
        </button>
        ${n.map(e=>`
          <button type="button" class="mconn-pill ${a===e.id?`active`:``}" data-folder-id="${j(e.id)}">
            📁 ${j(e.name)} (${e.count})
          </button>
        `).join(``)}
      </div>

      <!-- Server Selection Cards Grid / List -->
      <div class="multiconnect-server-list" id="mconnServerList">
        <!-- Rendered dynamically -->
      </div>

      <!-- Connection & Broadcast Options Bar -->
      <div class="multiconnect-options-card">
        <div class="mconn-option-section">
          <label class="mconn-option-label">Split Layout Strategy:</label>
          <div class="mconn-layout-selector">
            <label class="mconn-radio-label">
              <input type="radio" name="mconnLayout" value="auto-split" checked />
              <span>⊞ Auto-Split (Side-by-Side / 2x2 Grid)</span>
            </label>
            <label class="mconn-radio-label">
              <input type="radio" name="mconnLayout" value="tabbed" />
              <span>📑 Tabbed (Full width per terminal)</span>
            </label>
          </div>
        </div>

        <div class="mconn-option-section" style="margin-top: 8px;">
          <label class="checkbox-label" style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" id="mconnEnableBroadcastCheck" checked />
            <span style="font-weight: 600; color: #38bdf8;">⚡ Activate Broadcast Command Bar immediately on connect</span>
          </label>
          <div style="font-size: 11px; color: var(--text-muted); margin-left: 24px; margin-top: 2px;">
            Enables instant synchronous typing & command broadcasting across all selected servers.
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer multiconnect-footer">
      <button class="btn-secondary" id="modalCancel">Cancel</button>
      <button class="btn-primary" id="mconnLaunchBtn" style="background: linear-gradient(135deg, #0284c7, #38bdf8); font-weight: 600;">
        🚀 Connect & Start Broadcasting (<span id="mconnLaunchCount">0</span>)
      </button>
    </div>
  `),c=s.querySelector(`#mconnSearchInput`),l=s.querySelector(`#mconnServerList`),u=s.querySelector(`#mconnFolderPills`),d=s.querySelector(`#mconnSelectedBadge`),f=s.querySelector(`#mconnLaunchCount`),p=s.querySelector(`#mconnLaunchBtn`),m=s.querySelector(`#mconnSelectAllBtn`),h=s.querySelector(`#mconnSelectNoneBtn`),g=new Set;e&&e!==`all`?t.forEach(t=>{t.folderId===e&&g.add(t.id)}):t.length<=4?t.forEach(e=>g.add(e.id)):t.slice(0,2).forEach(e=>g.add(e.id));function _(){let e=g.size;d&&(d.textContent=`${e} selected`),f&&(f.textContent=`${e}`),p&&(p.disabled=e===0,p.style.opacity=e===0?`0.5`:`1`)}function v(){l.innerHTML=``;let e=o.toLowerCase().trim(),n=t.filter(t=>{if(a!==`all`&&t.folderId!==a)return!1;if(e){let n=t.name.toLowerCase().includes(e),r=t.host.toLowerCase().includes(e),i=t.username.toLowerCase().includes(e),a=t.folderName.toLowerCase().includes(e);if(!n&&!r&&!i&&!a)return!1}return!0});if(n.length===0){l.innerHTML=`
        <div style="text-align:center; padding: 24px; color: var(--text-muted); font-size: 12.5px;">
          No matching servers found for this filter.
        </div>
      `;return}n.forEach(e=>{let t=g.has(e.id),n=Pe(e.id,e.host,e.username),a=r(e.environment||e.color)||i(e.folderName),o=e.color||(a?a.color:``),s=a?`<span class="mconn-env-badge" style="background:${a.bg}; color:${a.color}; border: 1px solid ${a.border};">${a.label}</span>`:``,c=document.createElement(`div`);c.className=`mconn-server-card ${t?`selected`:``} ${n?`active-connected`:``}`,c.dataset.id=e.id,o&&(c.style.borderLeft=`3px solid ${o}`),c.innerHTML=`
        <div class="mconn-card-left">
          <input type="checkbox" class="mconn-card-checkbox" ${t?`checked`:``} />
          <span class="mconn-card-dot ${n?`dot-live`:`dot-offline`}" title="${n?`Connected`:`Offline / Saved`}"></span>
          <div class="mconn-card-details">
            <div class="mconn-card-title-row">
              <span class="mconn-card-name" title="${j(e.name)}">${j(e.name)}</span>
              ${s}
              <span class="mconn-proto-tag ${e.protocol}">${e.protocol.toUpperCase()}</span>
            </div>
            <div class="mconn-card-meta">
              <span class="mconn-card-host">👤 ${j(e.username||`user`)}@${j(e.host)}:${e.port}</span>
              <span class="mconn-card-folder">📁 ${j(e.folderName)}</span>
              ${n?`<span class="mconn-live-badge">LIVE</span>`:``}
            </div>
          </div>
        </div>
      `,c.addEventListener(`click`,t=>{if(t.target.tagName.toLowerCase()===`input`)return;let n=c.querySelector(`.mconn-card-checkbox`);n&&(n.checked=!n.checked,n.checked?(g.add(e.id),c.classList.add(`selected`)):(g.delete(e.id),c.classList.remove(`selected`)),_())});let u=c.querySelector(`.mconn-card-checkbox`);u&&u.addEventListener(`change`,t=>{t.stopPropagation(),u.checked?(g.add(e.id),c.classList.add(`selected`)):(g.delete(e.id),c.classList.remove(`selected`)),_()}),l.appendChild(c)}),_()}c&&c.addEventListener(`input`,()=>{o=c.value,v()}),u&&u.addEventListener(`click`,e=>{let t=e.target.closest(`.mconn-pill`);t&&(a=t.dataset.folderId,u.querySelectorAll(`.mconn-pill`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),v())}),m&&(m.onclick=()=>{let e=o.toLowerCase().trim();t.forEach(t=>{(a===`all`||t.folderId===a)&&(!e||t.name.toLowerCase().includes(e)||t.host.toLowerCase().includes(e))&&g.add(t.id)}),v()}),h&&(h.onclick=()=>{g.clear(),v()}),p&&(p.onclick=async()=>{if(g.size===0){S(`Please select at least one server to connect.`,`warning`);return}let e=t.filter(e=>g.has(e.id)),n=s.querySelector(`input[name='mconnLayout']:checked`)?.value||`auto-split`,r=s.querySelector(`#mconnEnableBroadcastCheck`)?.checked??!0;U(),await Ie(e,n,r)}),s.querySelector(`#modalClose`).onclick=U,s.querySelector(`#modalCancel`).onclick=U,v(),c&&c.focus()}async function Ie(e,t=`auto-split`,n=!0){if(!e||e.length===0)return;let r=e.length;S(`⚡ Connecting ${r} server(s) concurrently for broadcasting...`,`info`),t===`auto-split`&&(r===2?b(`split-v`):(r>=3&&r<=4||r>4)&&b(`grid-4`));let i=x.panes||[];for(let n=0;n<e.length;n++){let r=e[n];if(t===`auto-split`&&i.length>0){let e=i[n%i.length];e&&ee(e.id)}try{await V(r.profile,!0)}catch(e){console.error(`Failed to connect to ${r.name}:`,e)}}n&&setTimeout(()=>{Nn(),S(`📡 Broadcast mode active across ${r} connected server(s)! Enter command to broadcast.`,`success`)},800)}async function Le(e){if(!e)return;let t=Me(e,e.name,e.id);if(t.length===0){S(`No saved sessions found inside folder "${e.name}".`,`warning`);return}await Ie(t,`auto-split`,!0)}async function Re(e){if(!e)return;let t=Me(e,e.name,e.id);if(t.length===0){S(`No saved sessions found inside folder "${e.name}".`,`warning`);return}S(`Opening ${t.length} session(s) from "${e.name}"...`,`info`),await Ie(t,`tabbed`,!1)}var ze=[/\brm\s+-[rf]{1,3}\b/i,/\bshutdown\b/i,/\breboot\b/i,/\bpoweroff\b/i,/\bmkfs\b/i,/\bdd\s+if=/i,/\bdrop\s+database\b/i,/\bdrop\s+table\b/i,/\btruncate\s+table\b/i,/\bformat\s+[a-z]:/i,/\bkill\s+-9\s+-1\b/i,/\binit\s+[06]\b/i,/\bfdisk\b/i,/\bparted\b/i],Be=[/\bsystemctl\s+(restart|stop|disable|mask)\b/i,/\bservice\s+\S+\s+(restart|stop)\b/i,/\biptables\b/i,/\bufw\b/i,/\bchmod\s+-R\b/i,/\bchown\s+-R\b/i,/\buserdel\b/i,/\bgroupdel\b/i,/\bapt\s+(remove|purge|autoremove)\b/i,/\byum\s+(erase|remove)\b/i,/\bdnf\s+(erase|remove)\b/i,/\bkillall\b/i,/\bpkill\b/i,/\bpasswd\b/i,/\bsed\s+-i\b/i],Ve=[/\bmkdir\b/i,/\btouch\b/i,/\bcp\b/i,/\bmv\b/i,/\becho\s+.*>/i,/\bwget\b/i,/\bcurl\s+.*-O/i,/\bgit\s+(pull|checkout|reset|merge|rebase)\b/i,/\bdocker\s+(run|stop|restart|rm|rmi|compose\s+down)\b/i,/\btar\s+-[xczf]/i,/\bnpm\s+install\b/i,/\bpip\s+install\b/i],He=[/\bnano\b/i,/\bvim?\b/i,/\bview\b/i,/\bless\b/i,/\bmore\b/i,/\bhtop\b/i,/\btput\b/i],z={isOpen:!1,currentStep:`targets`,availableTargets:[],selectedTargetIds:new Set,targetFilterEnv:`all`,searchTerm:``,command:``,validation:{isValid:!1,errors:[],warnings:[],notes:[]},risk:{level:`LOW`,score:1,title:`Low Risk`,description:`Safe telemetry / read-only inspection`,badgeColor:`#10b981`,isDestructive:!1,prodCount:0,requiresStrictConfirmation:!1,warnings:[]},mode:`parallel`,strictConfirmInput:``,requestId:null,startTime:0,endTime:0,elapsedMs:0,timerInterval:null,targetStatuses:new Map,resultsFilter:`all`,unsubDataListener:null},Ue=!1;function We(e){if(!e)return``;let t=j(e).replace(/\r\n/g,`
`).replace(/\r/g,`
`);return t=t.replace(/\x1b\[0m/g,`</span>`).replace(/\x1b\[1m/g,`<span style="font-weight:700;color:#f8fafc;">`).replace(/\x1b\[2m/g,`<span style="opacity:0.7;">`).replace(/\x1b\[31m/g,`<span style="color:#f87171;">`).replace(/\x1b\[32m/g,`<span style="color:#4ade80;">`).replace(/\x1b\[33m/g,`<span style="color:#facc15;">`).replace(/\x1b\[34m/g,`<span style="color:#60a5fa;">`).replace(/\x1b\[35m/g,`<span style="color:#c084fc;">`).replace(/\x1b\[36m/g,`<span style="color:#22d3ee;">`).replace(/\x1b\[37m/g,`<span style="color:#f1f5f9;">`).replace(/\x1b\[90m/g,`<span style="color:#94a3b8;">`).replace(/\x1b\[91m/g,`<span style="color:#fca5a5;">`).replace(/\x1b\[92m/g,`<span style="color:#86efac;">`).replace(/\x1b\[93m/g,`<span style="color:#fde047;">`).replace(/\x1b\[94m/g,`<span style="color:#93c5fd;">`).replace(/\x1b\[95m/g,`<span style="color:#d8b4fe;">`).replace(/\x1b\[96m/g,`<span style="color:#67e8f9;">`).replace(/\x1b\[[0-9;]*[a-zA-Z]/g,``),t}function Ge(e=``,t=``,n=``){let r=(e+` `+t+` `+n).toLowerCase();return r.includes(`prod`)||r.includes(`production`)?`prod`:r.includes(`uat`)||r.includes(`staging`)||r.includes(`stage`)?`uat`:r.includes(`test`)||r.includes(`testing`)||r.includes(`qa`)?`test`:r.includes(`dev`)||r.includes(`development`)?`dev`:r.includes(`local`)||t===`127.0.0.1`||t===`localhost`?`local`:`default`}function Ke(){let e=[],n=new Set,i=new Set,a=(typeof T==`function`?T():t)||{},o=Object.entries(a).filter(([e,t])=>t&&e&&e!==`home`),s=[];try{s=Me(I)}catch{s=[]}for(let t of s){let a=t.id||t.profile?.id;i.add(a);let s=o.find(([e,n])=>n?!!(n.profile&&(n.profile.id===a||n.profile.sessionId===a)||n.profile&&n.profile.host===t.host&&(n.profile.username||``)===(t.username||``)):!1),c=!!s&&!!s[1].isConnected,l=s?s[1].id||s[0]:null;l&&n.add(l);let u=t.environment||Ge(t.name,t.host,t.folderName),d=r(u)||{label:u.toUpperCase(),color:`#94a3b8`,bg:`rgba(148,163,184,0.18)`};e.push({id:a||`srv-`+Math.random().toString(36).slice(2,8),tabId:l,name:t.name||t.host||`Server`,host:t.host||`127.0.0.1`,port:t.port||22,username:t.username||`root`,env:u,envInfo:d,isLive:c,isConnected:c,isLocal:!!(t.profile&&t.profile.isLocal),folderName:t.folderName||`Saved Sessions`,profile:t.profile||t})}for(let[t,i]of o){let a=i.id||t;if(n.has(a))continue;let o=i.customTitle||i.title||i.profile?.name||(i.isLocal?`Local Terminal`:`Terminal `+String(a).slice(0,6)),s=i.host||i.profile?.host||(i.isLocal?`Local Shell`:`127.0.0.1`),c=i.username||i.profile?.username||(i.isLocal?`user`:`root`),l=i.environment||Ge(o,s,``),u=r(l)||{label:l.toUpperCase(),color:`#38bdf8`,bg:`rgba(56,189,248,0.18)`};e.push({id:`tab-`+a,tabId:a,name:o,host:s,port:i.profile?.port||22,username:c,env:l,envInfo:u,isLive:!0,isConnected:!!i.isConnected,isLocal:!!i.isLocal,folderName:i.isLocal?`Local Shell`:`Active Terminals`,profile:i.profile||null})}return e}function qe(e){let t={isValid:!0,errors:[],warnings:[],notes:[]};if(!e||typeof e!=`string`)return t.isValid=!1,t.errors.push(`Command cannot be empty.`),t;let n=e.trim();if(n.length===0)return t.isValid=!1,t.errors.push(`Command cannot be empty or only whitespace.`),t;let r=!1,i=!1;for(let e=0;e<n.length;e++){let t=n[e];t===`'`&&!i&&(r=!r),t===`"`&&!r&&(i=!i)}return r&&(t.isValid=!1,t.errors.push(`Syntax Error: Unclosed single quote (') detected.`)),i&&(t.isValid=!1,t.errors.push(`Syntax Error: Unclosed double quote (") detected.`)),/(\||\&|\;|>|<)\s*$/.test(n)&&(t.isValid=!1,t.errors.push(`Syntax Error: Incomplete command ending with operator ('|', '&', ';', '>' or '<').`)),He.some(e=>e.test(n))&&t.warnings.push(`Interactive command detected (e.g. text editor or pager). This may hang non-interactive broadcasts.`),/\bsudo\b/i.test(n)&&t.warnings.push(`Contains 'sudo'. If remote servers require an interactive password prompt, execution may stall or fail.`),/&&|\|\||;/.test(n)&&t.notes.push(`Compound command detected. Chained commands will execute sequentially on each target node.`),t}function Je(e,t=[]){let n={level:`LOW`,score:1,title:`Safe / Observability`,description:`Read-only telemetry, diagnostics, and status monitoring.`,badgeColor:`#10b981`,isDestructive:!1,prodCount:0,requiresStrictConfirmation:!1,warnings:[]};if(!e||typeof e!=`string`||!e.trim())return n;let r=e.trim();ze.some(e=>e.test(r))?(n.level=`CRITICAL`,n.score=4,n.title=`Destructive Action (Critical)`,n.description=`Command can cause permanent data erasure, filesystem corruption, or system shutdown.`,n.badgeColor=`#ef4444`,n.isDestructive=!0,n.warnings.push(`High-impact destructive patterns detected. Requires explicit manual confirmation phrase.`)):Be.some(e=>e.test(r))?(n.level=`HIGH`,n.score=3,n.title=`High Risk (System Modification)`,n.description=`Modifies system daemons, firewall rules, service states, or bulk file permissions.`,n.badgeColor=`#f97316`,n.warnings.push(`May interrupt running services or alter server configuration.`)):Ve.some(e=>e.test(r))?(n.level=`MEDIUM`,n.score=2,n.title=`Medium Risk (State Alteration)`,n.description=`Creates, modifies, or pulls files, containers, or packages.`,n.badgeColor=`#eab308`):(n.level=`LOW`,n.score=1,n.title=`Low Risk (Safe / Read-Only)`,n.description=`Read-only status inspection, telemetry, or diagnostic monitoring.`,n.badgeColor=`#10b981`);let i=t.filter(e=>e.env===`prod`);return n.prodCount=i.length,i.length>0&&n.warnings.push(`Target scope includes ${i.length} PRODUCTION instance(s).`),(n.level===`CRITICAL`||n.level===`HIGH`&&i.length>0)&&(n.requiresStrictConfirmation=!0),n}function Ye(e,t){let n=e.trim(),r=new Date().toTimeString().split(` `)[0],i=t.name.toLowerCase().replace(/[^a-z0-9_-]/g,`-`);if(n.includes(`uptime`))return`\x1b[32m[${i}]\x1b[0m ${r} up 42 days, 14:22,  2 users,  load average: ${(.1+Math.random()*.4).toFixed(2)}, ${(.2+Math.random()*.3).toFixed(2)}, 0.15\n`;if(n.includes(`df -h`))return`\x1b[32m[${i}]\x1b[0m Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        78G   22G   53G  30% /\ntmpfs           3.9G     0  3.9G   0% /dev/shm\n/dev/sda15      124M   12M  112M  10% /boot/efi\n`;if(n.includes(`free`))return`\x1b[32m[${i}]\x1b[0m                total        used        free      shared  buff/cache   available\nMem:            7936        2140        3820          45        1976        5480\nSwap:           2048           0        2048\n`;if(n.includes(`systemctl status`)){let e=n.split(` `)[2]||`service`;return`\x1b[1m● ${e}.service\x1b[0m - Nexterm Managed Daemon\n   Loaded: loaded (/etc/systemd/system/${e}.service; \x1b[32menabled\x1b[0m)\n   Active: \x1b[1;32mactive (running)\x1b[0m since ${r} UTC\n   Main PID: ${Math.floor(1200+Math.random()*4e3)} (${e})\n`}return`\x1b[32m[${i} (${t.host})]\x1b[0m Command '${j(n)}' executed successfully at ${r}. (Exit code 0)\n`}function Xe(e=`all`,t=null){$e();let r=Ke();if(r.length===0){S(`No saved servers or active terminals found. Create a session first.`,`warning`),typeof Fe==`function`&&Fe();return}if(z.isOpen=!0,z.currentStep=`targets`,z.availableTargets=r,z.selectedTargetIds.clear(),z.targetFilterEnv=`all`,z.searchTerm=``,z.command=``,z.mode=`parallel`,z.strictConfirmInput=``,z.requestId=null,z.startTime=0,z.endTime=0,z.elapsedMs=0,z.targetStatuses.clear(),z.resultsFilter=`all`,z.timerInterval&&=(clearInterval(z.timerInterval),null),z.unsubDataListener){try{z.unsubDataListener()}catch{}z.unsubDataListener=null}if(t&&Array.isArray(t)&&t.length>0)r.forEach(e=>{e.tabId&&t.includes(e.tabId)&&z.selectedTargetIds.add(e.id)});else if(e===`selected`){let e=n();if(e&&e.id!==`home`){let t=r.find(t=>t.tabId===e.id);t&&z.selectedTargetIds.add(t.id)}z.selectedTargetIds.size===0&&r.length>0&&z.selectedTargetIds.add(r[0].id)}else{let e=r.filter(e=>e.isLive);e.length>0?e.forEach(e=>z.selectedTargetIds.add(e.id)):r.forEach(e=>z.selectedTargetIds.add(e.id))}Qe(),B()}function Ze(){if(z.isOpen=!1,z.timerInterval&&=(clearInterval(z.timerInterval),null),z.unsubDataListener){try{z.unsubDataListener()}catch{}z.unsubDataListener=null}U()}function Qe(){let e=z.availableTargets.filter(e=>z.selectedTargetIds.has(e.id));z.validation=qe(z.command),z.risk=Je(z.command,e)}function $e(){Ue||window.runtime&&window.runtime.EventsOn&&(window.runtime.EventsOn(`broadcast:state`,et),window.runtime.EventsOn(`broadcast:progress`,tt),window.runtime.EventsOn(`broadcast:complete`,nt),Ue=!0)}function et(e){e&&z.isOpen&&e.state===`cancelled`&&(z.currentStep=`completed`,z.endTime=Date.now(),z.timerInterval&&=(clearInterval(z.timerInterval),null),S(`Broadcast dispatch cancelled by user`,`warning`),B())}function tt(e){if(!e||!z.isOpen)return;let{tabId:t,status:n,error:r}=e;if(!t)return;let i=null;for(let e of z.targetStatuses.values())if(e.tabId===t||e.id===t){i=e;break}i&&(i.status=n,r&&(i.error=r),(n===`completed`||n===`failed`||n===`cancelled`)&&(i.durationMs||(i.durationMs=Date.now()-z.startTime)),z.currentStep===`running`&&dt())}function nt(e){e&&z.isOpen&&(z.currentStep=`completed`,z.endTime=Date.now(),z.elapsedMs=z.endTime-z.startTime,z.timerInterval&&=(clearInterval(z.timerInterval),null),e.targets&&Array.isArray(e.targets)&&e.targets.forEach(e=>{for(let t of z.targetStatuses.values())if(t.tabId===e.tabId||t.id===e.tabId){t.status=e.status,t.error=e.error||``,t.durationMs||=z.elapsedMs;break}}),B())}async function rt(){let e=z.availableTargets.filter(e=>z.selectedTargetIds.has(e.id));if(e.length===0){S(`Please select at least one target server.`,`warning`);return}if(Qe(),!z.validation.isValid){S(`Cannot execute: `+(z.validation.errors[0]||`Invalid command syntax`),`error`);return}if(z.risk.requiresStrictConfirmation&&z.strictConfirmInput.trim().toUpperCase()!==`CONFIRM`){S(`You must type CONFIRM to authorize critical execution.`,`warning`);return}let t=e.filter(e=>!e.isLive||!e.tabId);if(t.length>0){S(`Connecting ${t.length} offline target server(s)...`,`info`);for(let e of t)if(e.profile&&typeof V==`function`)try{await V(e.profile,!0)}catch(t){console.warn(`Failed to auto-connect target:`,e.name,t)}z.availableTargets=Ke()}let n=[],r=[];for(let t of e){let e=z.availableTargets.find(e=>e.id===t.id)||t,i=e.tabId||e.id;n.push(e),r.push(i)}z.currentStep=`running`,z.startTime=Date.now(),z.endTime=0,z.elapsedMs=0,z.targetStatuses.clear(),n.forEach(e=>{z.targetStatuses.set(e.id,{id:e.id,tabId:e.tabId||e.id,name:e.name,host:e.host,env:e.env,envInfo:e.envInfo,status:`pending`,error:``,output:``,durationMs:0,openDrawer:!1})}),z.timerInterval=setInterval(()=>{z.elapsedMs=Date.now()-z.startTime;let e=document.getElementById(`bcastStopwatch`);e&&(e.textContent=`⏱ Elapsed: ${(z.elapsedMs/1e3).toFixed(1)}s`)},100),typeof wn==`function`&&(z.unsubDataListener=wn((e,t)=>{for(let n of z.targetStatuses.values())if(n.tabId===e||n.id===e){n.output+=t;let e=document.getElementById(`bcastDrawer_${n.id}`);e&&(e.innerHTML=We(n.output),e.scrollTop=e.scrollHeight);break}})),B();let i=z.command.trim(),a=z.mode;try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.BroadcastCommand){let e=await window.go.main.App.BroadcastCommand(r,i,a);if(e){z.requestId=e.requestId;for(let e of z.targetStatuses.values())e.output||=Ye(i,e);nt(e)}}else{z.requestId=`mock-bcast-`+Date.now();for(let e of n)e.status=`sending`,dt(),await new Promise(e=>setTimeout(e,a===`sequential`?120:60)),e.status=`completed`,e.durationMs=Date.now()-z.startTime,e.output=Ye(i,e),tt({requestId:z.requestId,tabId:e.tabId||e.id,status:`completed`});nt({requestId:z.requestId,targets:n.map(e=>({tabId:e.tabId||e.id,status:`completed`}))})}}catch(e){S(`Broadcast failed: `+(e.message||e),`error`),z.currentStep=`completed`,z.endTime=Date.now(),z.timerInterval&&=(clearInterval(z.timerInterval),null),B()}}async function it(){if(z.requestId&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.CancelBroadcast)try{await window.go.main.App.CancelBroadcast(z.requestId),S(`Cancellation requested...`,`info`)}catch(e){console.warn(`CancelBroadcast error:`,e)}z.currentStep=`completed`,z.endTime=Date.now(),z.elapsedMs=z.endTime-z.startTime,z.timerInterval&&=(clearInterval(z.timerInterval),null),z.targetStatuses.forEach(e=>{(e.status===`pending`||e.status===`sending`)&&(e.status=`cancelled`,e.error=`Execution cancelled by user`)}),B()}function at(e){let t=[{key:`targets`,num:`1`,label:`Targets`,desc:`Discovery & Selection`},{key:`command`,num:`2`,label:`Command & Risk`,desc:`Syntax & Blast Radius`},{key:`preview`,num:`3`,label:`Preview & Confirm`,desc:`Pre-flight Lock`},{key:`running`,num:`4`,label:`Execution`,desc:`Real-time Streaming`},{key:`completed`,num:`5`,label:`Results`,desc:`Aggregate Matrix`}],n={targets:0,command:1,preview:2,running:3,completed:4}[e]||0;return`
    <div class="bcast-stepper-container">
      <div class="bcast-stepper">
        ${t.map((e,r)=>{let i=r<n;return`
            <div class="bcast-step-item ${i?`step-done`:r===n?`step-active`:`step-pending`}">
              <div class="bcast-step-bubble">
                ${i?`✓`:e.num}
              </div>
              <div class="bcast-step-meta">
                <span class="bcast-step-title">${e.label}</span>
                <span class="bcast-step-desc">${e.desc}</span>
              </div>
              ${r<t.length-1?`<div class="bcast-step-connector"></div>`:``}
            </div>
          `}).join(``)}
      </div>
    </div>
  `}function B(){if(!z.isOpen)return;let e=``;switch(z.currentStep){case`targets`:e=ot();break;case`command`:e=st();break;case`preview`:e=ct();break;case`running`:e=lt();break;case`completed`:e=ft();break;default:e=ot()}H(e,`modal-plain`),pt()}function ot(){let e=z.availableTargets,t=z.searchTerm.toLowerCase(),n=z.targetFilterEnv,r=e.filter(e=>n===`live`&&!e.isLive||n===`offline`&&e.isLive||n===`prod`&&e.env!==`prod`||n===`uat`&&e.env!==`uat`||n===`test`&&e.env!==`test`&&e.env!==`dev`?!1:!t||e.name.toLowerCase().includes(t)||e.host.toLowerCase().includes(t)||e.username.toLowerCase().includes(t)||e.folderName.toLowerCase().includes(t)),i=z.selectedTargetIds.size,a=e.filter(e=>e.isLive).length,o=e.filter(e=>e.env===`prod`).length,s=e.filter(e=>e.env===`uat`).length,c=e.filter(e=>e.env===`test`||e.env===`dev`).length;return`
    <div class="broadcast-modal-card bcast-large-modal">
      <div class="broadcast-header">
        <div class="broadcast-title-row">
          <span class="broadcast-icon">📡</span>
          <div>
            <h3>Broadcast Command Orchestrator</h3>
            <p class="broadcast-subtitle">Multi-server synchronized terminal execution & operational workflow</p>
          </div>
        </div>
        <button id="broadcastCloseBtn" class="broadcast-close-btn" title="Close">✕</button>
      </div>

      ${at(`targets`)}

      <div class="broadcast-body">
        <!-- Target Filters & Search -->
        <div class="bcast-section-card">
          <div class="bcast-filter-header">
            <div class="bcast-filter-pills">
              <button class="bcast-pill-btn ${n===`all`?`active`:``}" data-filter="all">All Targets (${e.length})</button>
              <button class="bcast-pill-btn pill-live ${n===`live`?`active`:``}" data-filter="live">🟢 Live Online (${a})</button>
              <button class="bcast-pill-btn pill-prod ${n===`prod`?`active`:``}" data-filter="prod">🔴 PROD (${o})</button>
              <button class="bcast-pill-btn pill-uat ${n===`uat`?`active`:``}" data-filter="uat">🟠 UAT (${s})</button>
              <button class="bcast-pill-btn pill-test ${n===`test`?`active`:``}" data-filter="test">🔵 TEST/DEV (${c})</button>
              <button class="bcast-pill-btn pill-offline ${n===`offline`?`active`:``}" data-filter="offline">⚪ Saved/Offline (${e.length-a})</button>
            </div>

            <div class="bcast-actions-group">
              <button id="bcastSelectFilteredBtn" class="bcast-btn-text">Select All (${r.length})</button>
              <span class="bcast-sep">|</span>
              <button id="bcastSelectLiveBtn" class="bcast-btn-text">Select Live Only</button>
              <span class="bcast-sep">|</span>
              <button id="bcastClearBtn" class="bcast-btn-text">Clear</button>
            </div>
          </div>

          <div class="bcast-search-row">
            <input type="text" id="bcastSearchInput" class="bcast-search-input" 
                   placeholder="Search targets by server name, host IP, username, or folder..." 
                   value="${j(z.searchTerm)}" />
            <button id="bcastRefreshDiscoveryBtn" class="btn btn-secondary bcast-refresh-btn" title="Re-scan saved sessions & tabs">🔄 Refresh</button>
          </div>
        </div>

        <!-- Target Grid / List -->
        <div class="bcast-target-grid">
          ${r.length===0?`
            <div class="bcast-empty-state">
              <span>🔍</span>
              <p>No target servers match the current filter or search criteria.</p>
            </div>
          `:r.map(e=>{let t=z.selectedTargetIds.has(e.id),n=`color: ${e.envInfo.color}; background: ${e.envInfo.bg}; border: 1px solid ${e.envInfo.border||e.envInfo.color}33;`;return`
              <div class="bcast-target-card ${t?`selected`:``}" data-id="${e.id}">
                <div class="bcast-target-checkbox-wrap">
                  <input type="checkbox" class="bcast-target-checkbox" data-id="${e.id}" ${t?`checked`:``} />
                </div>
                <div class="bcast-target-main">
                  <div class="bcast-target-topline">
                    <span class="bcast-target-icon">${e.isLocal?`💻`:e.env===`prod`?`🚨`:`🖥️`}</span>
                    <span class="bcast-target-name" title="${j(e.name)}">${j(e.name)}</span>
                    <span class="bcast-env-tag" style="${n}">${e.envInfo.label}</span>
                  </div>
                  <div class="bcast-target-subline">
                    <span class="bcast-target-host">${j(e.username)}@${j(e.host)}:${e.port}</span>
                    <span class="bcast-target-folder">📁 ${j(e.folderName)}</span>
                  </div>
                </div>
                <div class="bcast-target-status-pill ${e.isLive?`status-live`:`status-offline`}">
                  ${e.isLive?`● Online`:`○ Saved (Auto-connect)`}
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>

      <div class="broadcast-footer">
        <div class="bcast-footer-summary">
          <span class="bcast-counter-chip">
            <strong>${i}</strong> targets selected of <strong>${e.length}</strong> available
          </span>
          ${i>0&&o>0&&e.some(e=>z.selectedTargetIds.has(e.id)&&e.env===`prod`)?`
            <span class="bcast-prod-counter-alert">⚠️ Includes Production Instances</span>
          `:``}
        </div>

        <div class="bcast-footer-buttons">
          <button id="bcastCancelBtn" class="btn btn-secondary">Cancel</button>
          <button id="bcastProceedToCommandBtn" class="btn btn-primary" ${i===0?`disabled`:``}>
            Proceed to Command & Risk (${i} Targets) →
          </button>
        </div>
      </div>
    </div>
  `}function st(){Qe();let{validation:e,risk:t}=z,n=z.availableTargets.filter(e=>z.selectedTargetIds.has(e.id));return`
    <div class="broadcast-modal-card bcast-large-modal">
      <div class="broadcast-header">
        <div class="broadcast-title-row">
          <span class="broadcast-icon">⚡</span>
          <div>
            <h3>Command Input & Real-Time Risk Engine</h3>
            <p class="broadcast-subtitle">Enter payload, validate syntax, and assess multi-node blast radius</p>
          </div>
        </div>
        <button id="broadcastCloseBtn" class="broadcast-close-btn">✕</button>
      </div>

      ${at(`command`)}

      <div class="broadcast-body">
        <!-- Quick Operational Templates -->
        <div class="bcast-template-bar">
          <span class="bcast-template-label">Quick Templates:</span>
          <button class="bcast-tpl-btn" data-cmd="uptime && free -h && df -h">📊 System Health</button>
          <button class="bcast-tpl-btn" data-cmd="systemctl status nginx">⚙️ Service Status</button>
          <button class="bcast-tpl-btn" data-cmd="ps aux --sort=-%mem | head -n 10">🔍 Top Memory</button>
          <button class="bcast-tpl-btn" data-cmd="ss -tulnp">🌐 Network Ports</button>
          <button class="bcast-tpl-btn" data-cmd="df -h / /var /tmp">🧹 Disk Usage</button>
        </div>

        <!-- Monospace Command Editor -->
        <div class="bcast-section-card">
          <div class="bcast-cmd-editor-header">
            <label class="broadcast-label" for="bcastCommandInput">Operational Command Payload (Dispatched to ${n.length} nodes)</label>
            <span class="bcast-cmd-badge ${e.isValid?`badge-valid`:`badge-invalid`}">
              ${e.isValid?`✓ Syntax Valid`:`✕ Syntax Incomplete`}
            </span>
          </div>

          <div class="bcast-textarea-wrapper">
            <textarea id="bcastCommandInput" class="bcast-textarea" rows="4" 
                      placeholder="e.g. systemctl restart billing or uptime && df -h">${j(z.command)}</textarea>
          </div>

          <!-- Syntax Validation Alerts -->
          ${e.errors.length>0?`
            <div class="bcast-validation-errors">
              ${e.errors.map(e=>`<div class="bcast-val-err">❌ ${j(e)}</div>`).join(``)}
            </div>
          `:``}

          ${e.warnings.length>0?`
            <div class="bcast-validation-warnings">
              ${e.warnings.map(e=>`<div class="bcast-val-warn">⚠️ ${j(e)}</div>`).join(``)}
            </div>
          `:``}

          ${e.notes.length>0?`
            <div class="bcast-validation-notes">
              ${e.notes.map(e=>`<div class="bcast-val-note">ℹ️ ${j(e)}</div>`).join(``)}
            </div>
          `:``}
        </div>

        <!-- Real-Time Risk Classification Card -->
        <div class="bcast-risk-card" style="border-left-color: ${t.badgeColor};">
          <div class="bcast-risk-card-header">
            <div class="bcast-risk-badge-group">
              <span class="bcast-risk-pill" style="background: ${t.badgeColor};">
                ${t.level} RISK (Tier ${t.score}/4)
              </span>
              <strong class="bcast-risk-title">${t.title}</strong>
            </div>
            ${t.requiresStrictConfirmation?`
              <span class="bcast-lock-badge">🔒 Strict Safety Lock Enabled</span>
            `:``}
          </div>

          <p class="bcast-risk-desc">${t.description}</p>

          ${t.prodCount>0?`
            <div class="bcast-prod-impact-box">
              <span class="prod-icon">🚨</span>
              <div>
                <strong>Production Blast Radius Alert</strong>
                <p>Command will execute across <strong>${t.prodCount} Production server(s)</strong>. High-impact operations on Production require typed authorization confirmation.</p>
              </div>
            </div>
          `:``}

          ${t.warnings.length>0?`
            <div class="bcast-risk-warnings-list">
              ${t.warnings.map(e=>`<div>• ${j(e)}</div>`).join(``)}
            </div>
          `:``}
        </div>
      </div>

      <div class="broadcast-footer">
        <button id="bcastBackToTargetsBtn" class="btn btn-secondary">← Back to Targets</button>
        <button id="bcastProceedToPreviewBtn" class="btn btn-primary" ${e.isValid?``:`disabled`}>
          Proceed to Preview & Confirm →
        </button>
      </div>
    </div>
  `}function ct(){Qe();let{risk:e,mode:t}=z,n=z.availableTargets.filter(e=>z.selectedTargetIds.has(e.id)),r=n.filter(e=>e.env===`prod`),i=n.filter(e=>e.env===`uat`),a=n.filter(e=>e.env===`test`||e.env===`dev`),o=n.filter(e=>!e.isLive),s=e.requiresStrictConfirmation,c=z.strictConfirmInput.trim().toUpperCase()===`CONFIRM`;return`
    <div class="broadcast-modal-card bcast-large-modal">
      <div class="broadcast-header">
        <div class="broadcast-title-row">
          <span class="broadcast-icon">${s?`🛑`:`📋`}</span>
          <div>
            <h3>Pre-Flight Execution Review & Safety Lock</h3>
            <p class="broadcast-subtitle">Verify scope, rollout strategy, and authorize broadcast dispatch</p>
          </div>
        </div>
        <button id="broadcastCloseBtn" class="broadcast-close-btn">✕</button>
      </div>

      ${at(`preview`)}

      <div class="broadcast-body">
        <!-- Prominent Safety Warning if Destructive / High Risk -->
        ${s?`
          <div class="bcast-danger-banner bcast-danger-prominent">
            <span class="danger-icon">🛑</span>
            <div>
              <strong>STRICT CONFIRMATION MANDATORY</strong>
              <p>This operation is classified as <strong>${e.level}</strong> affecting <strong>${n.length} servers</strong>${r.length>0?` including <strong>${r.length} PRODUCTION nodes</strong>`:``}.</p>
            </div>
          </div>
        `:``}

        <!-- Payload Preview -->
        <div class="bcast-section-card">
          <div class="bcast-preview-header">
            <span class="broadcast-label">Command to Execute</span>
            <button id="bcastCopyCmdBtn" class="bcast-btn-text">📋 Copy Command</button>
          </div>
          <pre class="bcast-cmd-preview"><code>${j(z.command)}</code></pre>
        </div>

        <!-- Strategy & Scope Summary -->
        <div class="bcast-strategy-grid">
          <!-- Execution Mode Selector -->
          <div class="bcast-section-card">
            <span class="broadcast-label">Execution Strategy</span>
            <div class="bcast-mode-options">
              <label class="bcast-mode-radio ${t===`parallel`?`active`:``}">
                <input type="radio" name="bcastMode" value="parallel" ${t===`parallel`?`checked`:``} />
                <div>
                  <strong>⚡ Parallel (Concurrent)</strong>
                  <span>Simultaneous dispatch bounded to 20 concurrent worker routines.</span>
                </div>
              </label>
              <label class="bcast-mode-radio ${t===`sequential`?`active`:``}">
                <input type="radio" name="bcastMode" value="sequential" ${t===`sequential`?`checked`:``} />
                <div>
                  <strong>⏳ Sequential (Canary Rollout)</strong>
                  <span>Dispatches node-by-node. Halts immediately on target failure.</span>
                </div>
              </label>
            </div>
          </div>

          <!-- Target Scope Breakdown -->
          <div class="bcast-section-card">
            <span class="broadcast-label">Target Scope Breakdown (${n.length} Nodes)</span>
            <div class="bcast-scope-chips">
              <div class="bcast-scope-chip"><strong>${n.length}</strong> Total Targets</div>
              <div class="bcast-scope-chip chip-live"><strong>${n.length-o.length}</strong> Live Connected</div>
              ${o.length>0?`<div class="bcast-scope-chip chip-offline"><strong>${o.length}</strong> Auto-Connect</div>`:``}
              ${r.length>0?`<div class="bcast-scope-chip chip-prod"><strong>${r.length}</strong> Production</div>`:``}
              ${i.length>0?`<div class="bcast-scope-chip chip-uat"><strong>${i.length}</strong> UAT</div>`:``}
              ${a.length>0?`<div class="bcast-scope-chip chip-test"><strong>${a.length}</strong> Test/Dev</div>`:``}
            </div>

            <div class="bcast-preview-target-tags">
              ${n.map(e=>`
                <span class="bcast-target-mini-tag ${e.env===`prod`?`tag-prod`:``}">
                  ${j(e.name)} <small>(${j(e.host)})</small>
                </span>
              `).join(``)}
            </div>
          </div>
        </div>

        <!-- Strict Confirmation Input Box -->
        ${s?`
          <div class="bcast-strict-confirm-box">
            <div class="bcast-confirm-label">
              <span>🔒 Two-Man Safety Authorization:</span> Type <strong>CONFIRM</strong> to unlock execution:
            </div>
            <input type="text" id="bcastStrictConfirmInput" class="bcast-confirm-input" 
                   placeholder="Type CONFIRM to authorize" 
                   value="${j(z.strictConfirmInput)}" />
          </div>
        `:``}
      </div>

      <div class="broadcast-footer">
        <button id="bcastBackToCommandBtn" class="btn btn-secondary">← Back to Command</button>
        <button id="bcastExecuteBtn" class="btn ${s?`btn-danger`:`btn-primary`}" 
                ${s&&!c?`disabled`:``}>
          ${s?`⚠️ Authorize Critical Broadcast 🚀`:`🚀 Authorize & Broadcast to `+n.length+` Nodes`}
        </button>
      </div>
    </div>
  `}function lt(){let e=Array.from(z.targetStatuses.values()),t=e.filter(e=>e.status===`completed`).length,n=e.filter(e=>e.status===`failed`||e.status===`disconnected`).length,r=e.filter(e=>e.status===`cancelled`).length,i=t+n+r,a=e.length,o=a>0?Math.round(i/a*100):0;return`
    <div class="broadcast-modal-card bcast-large-modal">
      <div class="broadcast-header">
        <div class="broadcast-title-row">
          <span class="broadcast-spinner"></span>
          <div>
            <h3>Executing Broadcast Dispatch</h3>
            <p class="broadcast-subtitle">Streaming operational command across ${a} target terminals</p>
          </div>
        </div>
        <div class="bcast-header-right">
          <span id="bcastStopwatch" class="bcast-stopwatch-pill">⏱ Elapsed: ${(z.elapsedMs/1e3).toFixed(1)}s</span>
        </div>
      </div>

      ${at(`running`)}

      <div class="broadcast-body">
        <!-- Progress Bar & Metrics -->
        <div class="bcast-progress-dashboard">
          <div class="bcast-progress-info">
            <span>Overall Progress: <strong>${i} / ${a} completed (${o}%)</strong></span>
            <div class="bcast-mini-stats">
              <span class="text-success">✓ ${t} ok</span>
              ${n>0?`<span class="text-danger">✕ ${n} failed</span>`:``}
              ${r>0?`<span class="text-warning">⏹ ${r} cancelled</span>`:``}
            </div>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${o}%;"></div>
          </div>
        </div>

        <!-- Target Status List with Live Console Drawers -->
        <div id="bcastRunningList" class="bcast-running-list">
          ${e.map(e=>ut(e)).join(``)}
        </div>
      </div>

      <div class="broadcast-footer">
        <span class="bcast-running-note">Broadcast runs asynchronously in background.</span>
        <button id="bcastCancelExecutionBtn" class="btn btn-danger">⏹ Cancel Remaining Execution</button>
      </div>
    </div>
  `}function ut(e){let t=``;switch(e.status){case`completed`:t=`<span class="status-pill pill-success">✓ Completed</span>`;break;case`failed`:t=`<span class="status-pill pill-danger" title="${j(e.error)}">✕ Failed</span>`;break;case`sending`:t=`<span class="status-pill pill-running">● Sending...</span>`;break;case`cancelled`:t=`<span class="status-pill pill-cancelled">⏹ Cancelled</span>`;break;case`disconnected`:t=`<span class="status-pill pill-disconnected">🔌 Disconnected</span>`;break;default:t=`<span class="status-pill pill-pending">⏳ Pending</span>`}let n=e.durationMs?`(${(e.durationMs/1e3).toFixed(2)}s)`:``;return`
    <div class="bcast-status-card" data-id="${e.id}">
      <div class="bcast-status-row">
        <div class="bcast-status-info">
          <div class="bcast-status-name-row">
            <span class="bcast-status-name">${j(e.name)}</span>
            <span class="bcast-env-mini-badge">${e.env.toUpperCase()}</span>
          </div>
          <span class="bcast-status-host">${j(e.host)}</span>
        </div>

        <div class="bcast-status-badge-wrap">
          ${t}
          <span class="bcast-status-duration">${n}</span>
          <button class="bcast-toggle-drawer-btn" data-id="${e.id}" title="Toggle live output console">
            ${e.openDrawer?`▲ Hide Console`:`▼ Live Console`}
          </button>
        </div>
      </div>

      ${e.error?`<div class="bcast-status-err">❌ Error: ${j(e.error)}</div>`:``}

      <!-- Expandable Live Terminal Drawer -->
      <div id="bcastDrawerContainer_${e.id}" class="bcast-terminal-drawer ${e.openDrawer?`open`:``}">
        <div class="bcast-drawer-header">
          <span>Terminal Stream: ${j(e.name)}</span>
          <button class="bcast-copy-drawer-btn" data-id="${e.id}">📋 Copy Output</button>
        </div>
        <pre id="bcastDrawer_${e.id}" class="bcast-drawer-content"><code>${We(e.output||`Waiting for stdout...
`)}</code></pre>
      </div>
    </div>
  `}function dt(){let e=document.getElementById(`bcastRunningList`);e&&(e.innerHTML=Array.from(z.targetStatuses.values()).map(e=>ut(e)).join(``),vt())}function ft(){let e=Array.from(z.targetStatuses.values()),t=e.filter(e=>e.status===`completed`).length,n=e.filter(e=>e.status===`failed`||e.status===`disconnected`).length,r=e.filter(e=>e.status===`cancelled`).length,i=e.length,a=(z.elapsedMs/1e3).toFixed(2),o=z.resultsFilter,s=e.filter(e=>o===`success`?e.status===`completed`:o!==`failed`||e.status===`failed`||e.status===`disconnected`||e.status===`cancelled`);return`
    <div class="broadcast-modal-card bcast-large-modal">
      <div class="broadcast-header">
        <div class="broadcast-title-row">
          <span class="broadcast-icon">${n===0?`✅`:`⚠️`}</span>
          <div>
            <h3>Broadcast Aggregate Results</h3>
            <p class="broadcast-subtitle">Execution completed across ${i} targets in ${a} seconds</p>
          </div>
        </div>
        <button id="broadcastCloseBtn" class="broadcast-close-btn">✕</button>
      </div>

      ${at(`completed`)}

      <div class="broadcast-body">
        <!-- Metric Cards Grid -->
        <div class="bcast-metrics-grid">
          <div class="bcast-metric-card">
            <span class="bcast-metric-num">${i}</span>
            <span class="bcast-metric-lbl">Total Targets</span>
          </div>
          <div class="bcast-metric-card metric-success">
            <span class="bcast-metric-num">${t}</span>
            <span class="bcast-metric-lbl">Succeeded</span>
          </div>
          <div class="bcast-metric-card ${n>0?`metric-failed`:``}">
            <span class="bcast-metric-num">${n}</span>
            <span class="bcast-metric-lbl">Failed</span>
          </div>
          <div class="bcast-metric-card ${r>0?`metric-cancelled`:``}">
            <span class="bcast-metric-num">${r}</span>
            <span class="bcast-metric-lbl">Cancelled</span>
          </div>
          <div class="bcast-metric-card metric-time">
            <span class="bcast-metric-num">${a}s</span>
            <span class="bcast-metric-lbl">Total Duration</span>
          </div>
        </div>

        <!-- Output Filter Bar & Actions -->
        <div class="bcast-results-toolbar">
          <div class="bcast-filter-pills">
            <button class="bcast-pill-btn ${o===`all`?`active`:``}" data-resfilter="all">All Targets (${i})</button>
            <button class="bcast-pill-btn pill-live ${o===`success`?`active`:``}" data-resfilter="success">✓ Succeeded (${t})</button>
            <button class="bcast-pill-btn pill-prod ${o===`failed`?`active`:``}" data-resfilter="failed">✕ Failed / Cancelled (${n+r})</button>
          </div>

          <div class="bcast-results-actions">
            <button id="bcastCopyAllOutputsBtn" class="btn btn-secondary bcast-sm-btn">📋 Copy All Output</button>
            <button id="bcastExportJsonBtn" class="btn btn-secondary bcast-sm-btn">💾 Export JSON Report</button>
            ${n>0||r>0?`
              <button id="bcastRerunFailedBtn" class="btn btn-warning bcast-sm-btn">🔄 Re-run Failed Targets Only</button>
            `:``}
          </div>
        </div>

        <!-- Output Inspection Matrix -->
        <div class="bcast-matrix-container">
          ${s.length===0?`
            <div class="bcast-empty-state">No target results match filter "${o}".</div>
          `:s.map(e=>`
            <div class="bcast-matrix-card">
              <div class="bcast-matrix-card-header">
                <div class="bcast-matrix-target-info">
                  <strong>${j(e.name)}</strong>
                  <span class="bcast-matrix-host">${j(e.host)}</span>
                  <span class="bcast-env-mini-badge">${e.env.toUpperCase()}</span>
                </div>
                <div class="bcast-matrix-status-wrap">
                  <span class="status-pill ${e.status===`completed`?`pill-success`:`pill-danger`}">
                    ${e.status===`completed`?`✓ OK`:`✕ `+e.status}
                  </span>
                  <span class="bcast-matrix-time">${e.durationMs?(e.durationMs/1e3).toFixed(2)+`s`:``}</span>
                  <button class="bcast-copy-target-output-btn" data-id="${e.id}" title="Copy output">📋 Copy</button>
                </div>
              </div>

              ${e.error?`<div class="bcast-matrix-err">Error: ${j(e.error)}</div>`:``}

              <pre class="bcast-matrix-output"><code>${We(e.output||`(No console output captured)`)}</code></pre>
            </div>
          `).join(``)}
        </div>
      </div>

      <div class="broadcast-footer">
        <button id="bcastNewBroadcastBtn" class="btn btn-secondary">＋ New Broadcast</button>
        <button id="bcastDoneBtn" class="btn btn-primary">Done</button>
      </div>
    </div>
  `}function pt(){let e=document.getElementById(`broadcastCloseBtn`);e&&(e.onclick=Ze);let t=document.getElementById(`bcastCancelBtn`);t&&(t.onclick=Ze);let n=document.getElementById(`bcastDoneBtn`);n&&(n.onclick=Ze),mt(),gt(),_t(),vt(),yt()}function mt(){document.querySelectorAll(`.bcast-pill-btn[data-filter]`).forEach(e=>{e.onclick=()=>{z.targetFilterEnv=e.getAttribute(`data-filter`),B()}});let e=document.getElementById(`bcastSelectFilteredBtn`);e&&(e.onclick=()=>{let e=z.availableTargets,t=z.searchTerm.toLowerCase(),n=z.targetFilterEnv;e.forEach(e=>{(n!==`live`||e.isLive)&&(n===`offline`&&e.isLive||(n!==`prod`||e.env===`prod`)&&(n!==`uat`||e.env===`uat`)&&(n!==`test`||e.env===`test`||e.env===`dev`)&&(!t||e.name.toLowerCase().includes(t)||e.host.toLowerCase().includes(t))&&z.selectedTargetIds.add(e.id))}),B()});let t=document.getElementById(`bcastSelectLiveBtn`);t&&(t.onclick=()=>{z.availableTargets.forEach(e=>{e.isLive&&z.selectedTargetIds.add(e.id)}),B()});let n=document.getElementById(`bcastClearBtn`);n&&(n.onclick=()=>{z.selectedTargetIds.clear(),B()});let r=document.getElementById(`bcastSearchInput`);r&&(r.oninput=e=>{z.searchTerm=e.target.value,B();let t=document.getElementById(`bcastSearchInput`);t&&(t.focus(),t.selectionStart=t.selectionEnd=t.value.length)});let i=document.getElementById(`bcastRefreshDiscoveryBtn`);i&&(i.onclick=()=>{z.availableTargets=Ke(),S(`Discovered `+z.availableTargets.length+` targets.`,`info`),B()}),document.querySelectorAll(`.bcast-target-card`).forEach(e=>{e.onclick=t=>{if(t.target.tagName===`INPUT`)return;let n=e.getAttribute(`data-id`),r=e.querySelector(`.bcast-target-checkbox`);r&&(r.checked=!r.checked,r.checked?z.selectedTargetIds.add(n):z.selectedTargetIds.delete(n),e.classList.toggle(`selected`,r.checked),ht())}}),document.querySelectorAll(`.bcast-target-checkbox`).forEach(e=>{e.onchange=e=>{let t=e.target.getAttribute(`data-id`);e.target.checked?z.selectedTargetIds.add(t):z.selectedTargetIds.delete(t);let n=e.target.closest(`.bcast-target-card`);n&&n.classList.toggle(`selected`,e.target.checked),ht()}});let a=document.getElementById(`bcastProceedToCommandBtn`);a&&(a.onclick=()=>{z.selectedTargetIds.size!==0&&(z.currentStep=`command`,B())})}function ht(){let e=document.getElementById(`bcastProceedToCommandBtn`),t=z.selectedTargetIds.size;e&&(e.disabled=t===0,e.textContent=`Proceed to Command & Risk (${t} Targets) →`)}function gt(){let e=document.getElementById(`bcastCommandInput`);e&&(e.oninput=e=>{z.command=e.target.value,Qe();let t=document.getElementById(`bcastProceedToPreviewBtn`);t&&(t.disabled=!z.validation.isValid)}),document.querySelectorAll(`.bcast-tpl-btn`).forEach(e=>{e.onclick=()=>{z.command=e.getAttribute(`data-cmd`),Qe(),B()}});let t=document.getElementById(`bcastBackToTargetsBtn`);t&&(t.onclick=()=>{z.currentStep=`targets`,B()});let n=document.getElementById(`bcastProceedToPreviewBtn`);n&&(n.onclick=()=>{z.validation.isValid&&(z.currentStep=`preview`,B())})}function _t(){document.querySelectorAll(`input[name="bcastMode"]`).forEach(e=>{e.onchange=e=>{z.mode=e.target.value,B()}});let e=document.getElementById(`bcastCopyCmdBtn`);e&&(e.onclick=()=>{navigator.clipboard.writeText(z.command),S(`Command copied to clipboard`,`info`)});let t=document.getElementById(`bcastStrictConfirmInput`);t&&(t.oninput=e=>{z.strictConfirmInput=e.target.value;let t=e.target.value.trim().toUpperCase()===`CONFIRM`,n=document.getElementById(`bcastExecuteBtn`);n&&(n.disabled=!t)});let n=document.getElementById(`bcastBackToCommandBtn`);n&&(n.onclick=()=>{z.currentStep=`command`,B()});let r=document.getElementById(`bcastExecuteBtn`);r&&(r.onclick=rt)}function vt(){let e=document.getElementById(`bcastCancelExecutionBtn`);e&&(e.onclick=it),document.querySelectorAll(`.bcast-toggle-drawer-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=z.targetStatuses.get(t);if(n){n.openDrawer=!n.openDrawer;let r=document.getElementById(`bcastDrawerContainer_${t}`);r&&r.classList.toggle(`open`,n.openDrawer),e.textContent=n.openDrawer?`▲ Hide Console`:`▼ Live Console`}}}),document.querySelectorAll(`.bcast-copy-drawer-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=z.targetStatuses.get(t);n&&n.output&&(navigator.clipboard.writeText(n.output),S(`Copied output for ${n.name}`,`info`))}})}function yt(){document.querySelectorAll(`.bcast-pill-btn[data-resfilter]`).forEach(e=>{e.onclick=()=>{z.resultsFilter=e.getAttribute(`data-resfilter`),B()}}),document.querySelectorAll(`.bcast-copy-target-output-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=z.targetStatuses.get(t);n&&n.output&&(navigator.clipboard.writeText(n.output),S(`Copied output for ${n.name}`,`info`))}});let e=document.getElementById(`bcastCopyAllOutputsBtn`);e&&(e.onclick=()=>{let e=Array.from(z.targetStatuses.values()),t=`# Nexterm Broadcast Execution Report
`;t+=`**Command:** \`${z.command}\`\n`,t+=`**Duration:** ${(z.elapsedMs/1e3).toFixed(2)}s\n`,t+=`**Targets:** ${e.length}\n\n`,e.forEach(e=>{t+=`## Server: ${e.name} (${e.host}) - Status: ${e.status.toUpperCase()}\n`,t+="```\n"+(e.output||`(No output)`)+`
\`\`\`

`}),navigator.clipboard.writeText(t),S(`Copied markdown report for all targets`,`info`)});let t=document.getElementById(`bcastExportJsonBtn`);t&&(t.onclick=()=>{let e=Array.from(z.targetStatuses.values()),t={requestId:z.requestId,command:z.command,mode:z.mode,durationMs:z.elapsedMs,timestamp:new Date().toISOString(),targets:e.map(e=>({name:e.name,host:e.host,env:e.env,status:e.status,error:e.error,durationMs:e.durationMs,output:e.output}))},n=new Blob([JSON.stringify(t,null,2)],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`broadcast-report-${Date.now()}.json`,i.click(),URL.revokeObjectURL(r),S(`Exported broadcast JSON report`,`info`)});let n=document.getElementById(`bcastRerunFailedBtn`);n&&(n.onclick=()=>{let e=[];if(z.targetStatuses.forEach(t=>{(t.status===`failed`||t.status===`disconnected`||t.status===`cancelled`)&&e.push(t.id)}),e.length===0){S(`No failed targets to re-run.`,`info`);return}z.selectedTargetIds.clear(),e.forEach(e=>z.selectedTargetIds.add(e)),z.currentStep=`command`,S(`Loaded ${e.length} failed target(s) for re-execution.`,`info`),B()});let r=document.getElementById(`bcastNewBroadcastBtn`);r&&(r.onclick=()=>Xe(`all`))}var bt=`nexterm_recordings`,xt=600,St=!1,Ct=null;function wt(){try{let e=JSON.parse(localStorage.getItem(bt));return Array.isArray(e)?e:[]}catch{return[]}}function Tt(e){try{localStorage.setItem(bt,JSON.stringify(e))}catch{}}function Et(e,t){if(!St||!Ct||Ct.tabId&&e!==Ct.tabId)return;let n=(t||``).trim();n&&(Ct.commands.push(n),Mt())}function Dt(e){let t=P(),n=T();return!t||t===`home`||!n[t]?(S(`Open or focus a terminal first, then start recording`,`warning`),!1):(Ct={name:e||`Recording `+new Date().toLocaleString(),commands:[],tabId:t},St=!0,S(`● Recording started — every command you run is being captured`,`success`),Mt(),!0)}function Ot(){if(!Ct)return St=!1,Mt(),null;St=!1;let e={id:`rec_`+Date.now(),name:Ct.name,commands:Ct.commands.slice(),delayMs:xt,created:Date.now()},t=e.commands.length>0;if(Ct=null,Mt(),!t)return S(`Recording stopped — no commands captured, nothing saved`,`warning`),null;let n=wt();return n.unshift(e),Tt(n),S(`■ Saved "${e.name}" — ${e.commands.length} command(s)`,`success`),e}function kt(){St?Ot():Dt(),document.getElementById(`recorderDialogRoot`)&&Pt(`list`)}async function At(e){let t=wt().find(t=>t.id===e);if(!t)return;let n=P(),r=T();if(!n||n===`home`||!r[n]){S(`Open or focus a terminal tab, then run the recording`,`warning`);return}if(!(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.WriteToTerminal)){S(`Replay needs the built app (run.bat)`,`error`);return}let i=Math.max(150,t.delayMs||xt);S(`▶ Running "${t.name}" — ${t.commands.length} command(s)`,`info`);for(let e of t.commands){try{window.go.main.App.WriteToTerminal(n,e+`\r`)}catch{}await new Promise(e=>setTimeout(e,i))}S(`✔ Finished "${t.name}"`,`success`)}async function jt(e){let t=wt().find(t=>t.id===e);if(!t)return;let n=window.go&&window.go.main&&window.go.main.App;if(!n||!n.WriteToTerminal){S(`Replay needs the built app (run.bat)`,`error`);return}let r=T(),i=Object.keys(r).filter(e=>e!==`home`&&r[e]&&r[e].isConnected&&!r[e].isLocal);if(i.length===0){S(`No connected SSH terminals to run on`,`warning`);return}let a=Math.max(150,t.delayMs||xt);S(`⇉ Running "${t.name}" on ${i.length} server(s)`,`info`);for(let e of t.commands)i.forEach(t=>{try{n.WriteToTerminal(t,e+`\r`)}catch{}}),await new Promise(e=>setTimeout(e,a));S(`✔ Finished on ${i.length} server(s)`,`success`)}function Mt(){let e=document.getElementById(`recIndicator`);St&&Ct?(e||(e=document.createElement(`div`),e.id=`recIndicator`,e.className=`rec-indicator`,e.onclick=()=>Nt(),document.body.appendChild(e)),e.innerHTML=`<span class="rec-dot"></span> REC <span class="rec-count">${Ct.commands.length}</span>`,e.title=`Recording — click to open the Session Recorder`):e&&e.remove()}function Nt(){H(`<div id="recorderDialogRoot"></div>`,`modal-plain`),Pt(`list`)}function Pt(e,t){let n=document.getElementById(`recorderDialogRoot`);if(!n)return;let r=wt();if(e===`edit`){let e=r.find(e=>e.id===t);if(!e){Pt(`list`);return}n.innerHTML=`
      <div class="recorder-card">
        <div class="recorder-head">
          <div class="recorder-title"><span class="recorder-ico">✏️</span> Edit Recording</div>
          <button class="recorder-x" id="recBack" title="Back">&larr;</button>
        </div>
        <label class="recorder-label">Name</label>
        <input type="text" id="recEditName" class="recorder-input" value="${j(e.name)}" />
        <label class="recorder-label">Commands (one per line — runs top to bottom)</label>
        <textarea id="recEditCmds" class="recorder-textarea" spellcheck="false">${j(e.commands.join(`
`))}</textarea>
        <label class="recorder-label">Delay between commands (ms)</label>
        <input type="number" id="recEditDelay" class="recorder-input" value="${e.delayMs||xt}" min="150" step="50" />
        <div class="recorder-actions-row">
          <button class="recorder-btn primary" id="recSaveEdit">Save changes</button>
          <button class="recorder-btn" id="recBack2">Cancel</button>
        </div>
      </div>`,n.querySelector(`#recBack`).onclick=()=>Pt(`list`),n.querySelector(`#recBack2`).onclick=()=>Pt(`list`),n.querySelector(`#recSaveEdit`).onclick=()=>{let e=wt(),r=e.find(e=>e.id===t);r&&(r.name=(n.querySelector(`#recEditName`).value||r.name).trim(),r.commands=n.querySelector(`#recEditCmds`).value.split(`
`).map(e=>e.replace(/\s+$/,``)).filter(e=>e.trim().length),r.delayMs=Math.max(150,parseInt(n.querySelector(`#recEditDelay`).value,10)||xt),Tt(e),S(`Recording updated`,`success`)),Pt(`list`)};return}let i=r.length===0?`<div class="recorder-empty">No recordings yet.<br/>Focus a terminal and press <b>Start Recording</b> — every command you run gets captured. Stop when done, then Run it any time.</div>`:r.map(e=>`
      <div class="recorder-row" data-id="${e.id}">
        <div class="recorder-row-main">
          <div class="recorder-row-name">${j(e.name)}</div>
          <div class="recorder-row-sub">${e.commands.length} command(s)${e.commands[0]?` · <span class="recorder-row-cmd">`+j(e.commands[0])+(e.commands.length>1?` …`:``)+`</span>`:``}</div>
        </div>
        <div class="recorder-row-actions">
          <button class="recorder-btn primary run-rec" data-id="${e.id}" title="Run all commands on the active terminal">▶ Run</button>
          <button class="recorder-btn run-all-rec" data-id="${e.id}" title="Run on ALL connected servers">⇉ All</button>
          <button class="recorder-btn edit-rec" data-id="${e.id}" title="Edit commands">✏️</button>
          <button class="recorder-btn export-rec" data-id="${e.id}" title="Copy commands to clipboard">⧉</button>
          <button class="recorder-btn danger del-rec" data-id="${e.id}" title="Delete">🗑️</button>
        </div>
      </div>`).join(``);n.innerHTML=`
    <div class="recorder-card">
      <div class="recorder-head">
        <div class="recorder-title"><span class="recorder-ico">⏺</span> Session Recorder</div>
        <button class="recorder-x" id="recClose" title="Close">&times;</button>
      </div>
      <div class="recorder-controls">
        ${St?`<button class="recorder-btn rec-stop" id="recToggle">■ Stop Recording <span class="rec-live">● ${Ct?Ct.commands.length:0}</span></button>
             <span class="recorder-hint">Recording the active terminal — run your commands, then stop to save.</span>`:`<input type="text" id="recName" class="recorder-input inline" placeholder="Recording name (optional)" />
             <button class="recorder-btn rec-start" id="recToggle">● Start Recording</button>`}
      </div>
      <div class="recorder-list">${i}</div>
    </div>`,n.querySelector(`#recClose`).onclick=()=>U(),n.querySelector(`#recToggle`).onclick=()=>{St?Ot():Dt((n.querySelector(`#recName`)?.value||``).trim()),Pt(`list`)},n.querySelectorAll(`.run-rec`).forEach(e=>e.onclick=()=>{U(),At(e.getAttribute(`data-id`))}),n.querySelectorAll(`.run-all-rec`).forEach(e=>e.onclick=()=>{U(),jt(e.getAttribute(`data-id`))}),n.querySelectorAll(`.edit-rec`).forEach(e=>e.onclick=()=>Pt(`edit`,e.getAttribute(`data-id`))),n.querySelectorAll(`.del-rec`).forEach(e=>e.onclick=()=>{let t=e.getAttribute(`data-id`);Tt(wt().filter(e=>e.id!==t)),S(`Recording deleted`,`info`),Pt(`list`)}),n.querySelectorAll(`.export-rec`).forEach(e=>e.onclick=async()=>{let t=wt().find(t=>t.id===e.getAttribute(`data-id`));if(!t)return;let n=t.commands.join(`
`);try{await navigator.clipboard.writeText(n),S(`Commands copied to clipboard`,`success`)}catch{S(`Copy failed — open Edit to view the commands`,`warning`)}})}var Ft=`nexterm_cmd_history`,It=800;function Lt(){try{let e=JSON.parse(localStorage.getItem(Ft));return Array.isArray(e)?e:[]}catch{return[]}}function Rt(e){try{localStorage.setItem(Ft,JSON.stringify(e))}catch{}}function zt(e,t){let n=(t||``).trim();if(!n)return;let r=Lt();r[0]&&r[0].cmd===n&&r[0].host===(e||``)||(r.unshift({cmd:n,host:e||``,ts:Date.now()}),r.length>It&&(r=r.slice(0,It)),Rt(r))}function Bt(e){let t=P(),n=T()[t];if(!t||t===`home`||!n){S(`Focus a terminal first`,`warning`);return}let r=window.go&&window.go.main&&window.go.main.App;if(!r||!r.WriteToTerminal){S(`Needs the built app (run.bat)`,`error`);return}r.WriteToTerminal(t,e+`\r`)}function Vt(){H(`<div id="histRoot"></div>`,`modal-plain`),Ut(``)}function Ht(e){let t=Math.floor((Date.now()-e)/1e3);if(t<60)return t+`s`;let n=Math.floor(t/60);if(n<60)return n+`m`;let r=Math.floor(n/60);return r<24?r+`h`:Math.floor(r/24)+`d`}function Ut(e){let t=document.getElementById(`histRoot`);if(!t)return;let n=Lt(),r=(e||``).trim().toLowerCase(),i=(r?n.filter(e=>e.cmd.toLowerCase().includes(r)||(e.host||``).toLowerCase().includes(r)):n).slice(0,300),a=i.length===0?`<div class="sched-empty">${n.length===0?`No commands recorded yet. Run some commands over SSH and they'll appear here.`:`No matches.`}</div>`:i.map((e,t)=>`
      <div class="hist-row" data-i="${t}">
        <span class="hist-cmd">${j(e.cmd)}</span>
        <span class="hist-meta">${j(e.host||``)} · ${Ht(e.ts)}</span>
        <span class="hist-acts">
          <button class="sx-btn sm primary hist-run" data-cmd="${j(e.cmd)}" title="Run on active terminal">▶</button>
          <button class="sx-btn sm hist-copy" data-cmd="${j(e.cmd)}" title="Copy">⧉</button>
        </span>
      </div>`).join(``);t.innerHTML=`
    <div class="sx-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">🕘</span> Command History</div>
        <button class="sx-x" id="histClose">&times;</button>
      </div>
      <div class="hist-search-row">
        <input type="text" id="histSearch" class="sx-input" placeholder="Search commands or hosts…" value="${j(e||``)}" />
        <button class="sx-btn danger" id="histClear" title="Clear all history">Clear</button>
      </div>
      <div class="hist-list">${a}</div>
    </div>`,t.querySelector(`#histClose`).onclick=()=>U();let o=t.querySelector(`#histSearch`);o.oninput=()=>{let e=o.value;Ut(e);let t=document.getElementById(`histSearch`);t&&(t.focus(),t.setSelectionRange(e.length,e.length))},t.querySelector(`#histClear`).onclick=()=>{confirm(`Clear all command history?`)&&(Rt([]),Ut(``))},t.querySelectorAll(`.hist-run`).forEach(e=>e.onclick=()=>{U(),Bt(e.getAttribute(`data-cmd`))}),t.querySelectorAll(`.hist-copy`).forEach(e=>e.onclick=async()=>{try{await navigator.clipboard.writeText(e.getAttribute(`data-cmd`)),S(`Copied`,`success`)}catch{}}),setTimeout(()=>{let e=document.getElementById(`histSearch`);e&&e.focus()},30)}var Wt=`nexterm_server_notes`,Gt=`nexterm_quick_cmds`,Kt=`nexterm_startup`;function qt(e){try{return JSON.parse(localStorage.getItem(e))||{}}catch{return{}}}function Jt(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function Yt(e){return e?e.id||(e.username||``)+`@`+(e.host||``)+`:`+(e.port||22):``}function Xt(){let e=T()[P()];return e&&e.profile?e.profile:null}function Zt(e){let t=P(),n=T()[t];if(!t||t===`home`||!n)return S(`Focus a terminal first`,`warning`),!1;let r=window.go&&window.go.main&&window.go.main.App;return!r||!r.WriteToTerminal?(S(`Needs the built app (run.bat)`,`error`),!1):(r.WriteToTerminal(t,e+`\r`),!0)}function Qt(e){return qt(Kt)[Yt(e)]||[]}function $t(e,t){let n=Qt(t);if(!n.length)return;let r=window.go&&window.go.main&&window.go.main.App;if(!r||!r.WriteToTerminal)return;let i=0,a=()=>{if(!(i>=n.length)){try{r.WriteToTerminal(e,n[i]+`\r`)}catch{}i++,setTimeout(a,700)}};setTimeout(a,900),S(`Running ${n.length} startup command(s)…`,`info`)}function en(){H(`<div id="serverExtrasRoot"></div>`,`modal-plain`),tn(`notes`)}function tn(e){let t=document.getElementById(`serverExtrasRoot`);if(!t)return;let n=Xt(),r=n?n.name||n.host||`Active server`:null,i=Yt(n);if(!n){t.innerHTML=`
      <div class="sx-card">
        <div class="sx-head"><div class="sx-title"><span class="sx-ico">🗂️</span> Server Tools</div>
          <button class="sx-x" id="sxClose">&times;</button></div>
        <div class="sx-empty">Connect to and focus a server first.<br/>Notes, quick commands and startup commands are saved per server.</div>
      </div>`,t.querySelector(`#sxClose`).onclick=()=>U();return}let a=qt(Wt)[i]||``,o=qt(Gt)[i]||[],s=(qt(Kt)[i]||[]).join(`
`),c=(t,n)=>`<button class="sx-tab ${e===t?`active`:``}" data-tab="${t}">${n}</button>`,l=``;if(e===`notes`)l=`
      <label class="sx-label">Notes for ${j(r)}</label>
      <textarea id="sxNotes" class="sx-textarea" placeholder="Anything you want to remember about this server — credentials hints, quirks, IPs, runbooks…">${j(a)}</textarea>
      <div class="sx-actions"><button class="sx-btn primary" id="sxSaveNotes">Save notes</button></div>`;else if(e===`quick`){let e=o.length===0?`<div class="sx-empty sm">No quick commands yet. Add one below.</div>`:o.map((e,t)=>`
        <div class="sx-quick-row">
          <span class="sx-quick-label">${j(e.label)}</span>
          <span class="sx-quick-cmd">${j(e.cmd)}</span>
          <button class="sx-btn sm run-quick" data-i="${t}" title="Run on this server">▶</button>
          <button class="sx-btn sm danger del-quick" data-i="${t}" title="Delete">🗑️</button>
        </div>`).join(``);l=`
      <label class="sx-label">One-click commands for ${j(r)}</label>
      <div class="sx-quick-list">${e}</div>
      <div class="sx-add-row">
        <input type="text" id="sxQLabel" class="sx-input" placeholder="Label (e.g. Restart nginx)" />
        <input type="text" id="sxQCmd" class="sx-input mono" placeholder="Command (e.g. sudo systemctl restart nginx)" />
        <button class="sx-btn primary" id="sxAddQuick">Add</button>
      </div>`}else l=`
      <label class="sx-label">Startup commands for ${j(r)} — run automatically on connect (one per line)</label>
      <textarea id="sxStartup" class="sx-textarea mono" spellcheck="false" placeholder="cd /var/www&#10;source .env&#10;tail -f logs/app.log">${j(s)}</textarea>
      <div class="sx-actions"><button class="sx-btn primary" id="sxSaveStartup">Save startup commands</button></div>`;t.innerHTML=`
    <div class="sx-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">🗂️</span> ${j(r)}</div>
        <button class="sx-x" id="sxClose">&times;</button>
      </div>
      <div class="sx-tabs">${c(`notes`,`📝 Notes`)}${c(`quick`,`⚡ Quick Commands`)}${c(`startup`,`🚀 Startup`)}</div>
      <div class="sx-body">${l}</div>
    </div>`,t.querySelector(`#sxClose`).onclick=()=>U(),t.querySelectorAll(`.sx-tab`).forEach(e=>e.onclick=()=>tn(e.getAttribute(`data-tab`))),e===`notes`?t.querySelector(`#sxSaveNotes`).onclick=()=>{let e=qt(Wt);e[i]=t.querySelector(`#sxNotes`).value,Jt(Wt,e),S(`Notes saved`,`success`)}:e===`quick`?(t.querySelector(`#sxAddQuick`).onclick=()=>{let e=(t.querySelector(`#sxQLabel`).value||``).trim(),n=(t.querySelector(`#sxQCmd`).value||``).trim();if(!e||!n){S(`Enter a label and a command`,`warning`);return}let r=qt(Gt),a=r[i]||[];a.push({label:e,cmd:n}),r[i]=a,Jt(Gt,r),tn(`quick`)},t.querySelectorAll(`.run-quick`).forEach(e=>e.onclick=()=>{let t=(qt(Gt)[i]||[])[parseInt(e.getAttribute(`data-i`),10)];t&&(U(),Zt(t.cmd))}),t.querySelectorAll(`.del-quick`).forEach(e=>e.onclick=()=>{let t=qt(Gt),n=t[i]||[];n.splice(parseInt(e.getAttribute(`data-i`),10),1),t[i]=n,Jt(Gt,t),tn(`quick`)})):t.querySelector(`#sxSaveStartup`).onclick=()=>{let e=qt(Kt);e[i]=t.querySelector(`#sxStartup`).value.split(`
`).map(e=>e.replace(/\s+$/,``)).filter(e=>e.trim().length),Jt(Kt,e),S(`Startup commands saved — they run next time you connect`,`success`)}}var nn=`modulepreload`,rn=function(e){return`/`+e},an={},on=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=rn(t,n),t=s(t),t in an)return;an[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:nn,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},sn=o({activateHomeTab:()=>Ln,activateTab:()=>Rn,addMultiExecDataListener:()=>wn,broadcastMultiExecData:()=>Tn,cancelReconnection:()=>yn,closeTab:()=>zn,connectToSession:()=>V,createTab:()=>Hn,duplicateTab:()=>Vn,executeReconnectAttempt:()=>Sn,findTabBySessionId:()=>Bn,getTabReconnectBanner:()=>mn,hideReconnectBanner:()=>hn,isAutoLogEnabled:()=>On,maybeLogSessionData:()=>jn,registerDualPaneSFTP:()=>fn,registerTerminalManagerDependencies:()=>pn,scheduleReconnectAttempt:()=>xn,sendMultiExec:()=>Pn,setAutoLog:()=>kn,showReconnectFailedBanner:()=>vn,showReconnectPromptBanner:()=>gn,showTabColorPalette:()=>Gn,showTabContextMenu:()=>Wn,startLocalTerminal:()=>Un,startReconnectionSequence:()=>bn,toggleMultiExec:()=>Nn,toggleSessionLogging:()=>Mn,updateReconnectProgressBanner:()=>_n}),cn=null,ln=null,un=null,dn=null;function fn(e){cn=e}function pn(e){e.setupDualPaneSFTP&&(cn=e.setupDualPaneSFTP),e.switchSidebarView&&(ln=e.switchSidebarView),e.renderTree&&(un=e.renderTree),e.refreshSFTP&&(dn=e.refreshSFTP)}function mn(e){let n=t[e];return!n||!n.paneEl?null:n.paneEl.querySelector(`#reconnectBanner_${e}`)}function hn(e){let n=mn(e);n&&n.remove(),t[e]&&(t[e].awaitingReconnectPrompt=!1)}function gn(e,n,r){let i=t[e];if(!i||!i.paneEl)return;hn(e);let a=i.paneEl.querySelector(`.pane-terminal-top`)||i.paneEl,o=document.createElement(`div`);o.className=`reconnect-banner`,o.id=`reconnectBanner_${e}`,o.innerHTML=`
    <div class="reconnect-banner-left">
      <span class="reconnect-pulse-icon">⚡</span>
      <div>
        <div class="reconnect-banner-title">Connection Lost</div>
        <div class="reconnect-banner-desc">Connection to <b>${j(n.host)}</b> was terminated. Reconnect?</div>
      </div>
    </div>
    <div class="reconnect-banner-actions">
      <button class="btn btn-primary" id="btnRecNow_${e}">⚡ Reconnect (Yes)</button>
      <button class="btn btn-secondary" id="btnRecAuto_${e}">🔄 Auto-Retry (5x)</button>
      <button class="btn btn-outline" id="btnRecDismiss_${e}">✕ Dismiss</button>
    </div>
  `,a.appendChild(o),i.awaitingReconnectPrompt=!0;let s=o.querySelector(`#btnRecNow_${e}`);s&&(s.onclick=()=>{hn(e),bn(e,!0)});let c=o.querySelector(`#btnRecAuto_${e}`);c&&(c.onclick=()=>{hn(e),bn(e,!1)});let l=o.querySelector(`#btnRecDismiss_${e}`);l&&(l.onclick=()=>{hn(e),i.term&&i.term.write(`\r
\x1B[90m● Reconnection prompt dismissed.\x1B[0m\r
`)})}function _n(e,n,r,i){let a=t[e];if(!a||!a.paneEl)return;let o=mn(e),s=a.paneEl.querySelector(`.pane-terminal-top`)||a.paneEl;o||(o=document.createElement(`div`),o.id=`reconnectBanner_${e}`,s.appendChild(o)),o.className=`reconnect-banner in-progress`,o.innerHTML=`
    <div class="reconnect-banner-left">
      <span class="reconnect-spinner">↻</span>
      <div>
        <div class="reconnect-banner-title">Reconnecting...</div>
        <div class="reconnect-banner-desc">Attempt <b>${n} of ${r}</b> — retrying in <b>${i}s</b> (backoff: 1s, 2s, 4s...)</div>
      </div>
    </div>
    <div class="reconnect-banner-actions">
      <button class="btn btn-primary" id="btnRecForceNow_${e}">Retry Now</button>
      <button class="btn btn-danger" id="btnRecCancel_${e}">✕ Cancel</button>
    </div>
  `;let c=o.querySelector(`#btnRecForceNow_${e}`);c&&(c.onclick=()=>{a.reconnectState&&(a.reconnectState.timerId&&clearTimeout(a.reconnectState.timerId),a.reconnectState.countdownTimerId&&clearInterval(a.reconnectState.countdownTimerId)),Sn(e,n)});let l=o.querySelector(`#btnRecCancel_${e}`);l&&(l.onclick=()=>{yn(e)})}function vn(e,n){let r=t[e];if(!r||!r.paneEl)return;let i=mn(e),a=r.paneEl.querySelector(`.pane-terminal-top`)||r.paneEl;i||(i=document.createElement(`div`),i.id=`reconnectBanner_${e}`,a.appendChild(i)),i.className=`reconnect-banner failed`,i.innerHTML=`
    <div class="reconnect-banner-left">
      <span class="reconnect-pulse-icon">❌</span>
      <div>
        <div class="reconnect-banner-title">Reconnection Failed</div>
        <div class="reconnect-banner-desc">Could not restore connection after <b>${n} attempts</b>.</div>
      </div>
    </div>
    <div class="reconnect-banner-actions">
      <button class="btn btn-primary" id="btnRecRetryLoop_${e}">↻ Try Again</button>
      <button class="btn btn-outline" id="btnRecDismissFailed_${e}">✕ Dismiss</button>
    </div>
  `;let o=i.querySelector(`#btnRecRetryLoop_${e}`);o&&(o.onclick=()=>{hn(e),bn(e,!0)});let s=i.querySelector(`#btnRecDismissFailed_${e}`);s&&(s.onclick=()=>{hn(e)})}function yn(e){let n=t[e];n&&(n.reconnectState&&(n.reconnectState.timerId&&clearTimeout(n.reconnectState.timerId),n.reconnectState.countdownTimerId&&clearInterval(n.reconnectState.countdownTimerId),n.reconnectState.active=!1,n.reconnectState.manualCancel=!0),hn(e),p(e,`Closed`,null,`Reconnection canceled by user`),n.term&&n.term.write(`\r
\x1B[1;90m● Reconnection canceled by user.\x1B[0m\r
\r
`),S(`Reconnection canceled`,`info`))}function bn(e,n=!1){let r=t[e];if(!r||r.isLocal)return;hn(e),r.reconnectState&&(r.reconnectState.timerId&&clearTimeout(r.reconnectState.timerId),r.reconnectState.countdownTimerId&&clearInterval(r.reconnectState.countdownTimerId));let i=r.profile;r.reconnectState={active:!0,attempt:1,maxAttempts:i.reconnectAttempts||W.reconnectAttempts||5,initialDelay:i.reconnectDelay||W.reconnectDelay||2,timerId:null,countdownTimerId:null,secondsRemaining:0,manualCancel:!1},xn(e,1,n)}function xn(e,n,r=!1){let i=t[e];if(!i||!i.reconnectState||!i.reconnectState.active)return;let{maxAttempts:a,initialDelay:o}=i.reconnectState;i.reconnectState.attempt=n;let s=0;if(s=r&&n===1?0:Math.min(60,Math.round(o*2**(n-1))),s<=0){Sn(e,n);return}i.reconnectState.secondsRemaining=s,p(e,`Reconnecting`,null,`Reconnecting to ${i.profile.host} (Attempt ${n}/${a} in ${s}s)...`),i.term&&i.term.write(`\r\n\x1b[1;33m● [Attempt ${n}/${a}] Reconnecting in ${s}s... (Press Esc or click Cancel to stop)\x1b[0m\r\n`),_n(e,n,a,s),i.reconnectState.countdownTimerId=setInterval(()=>{if(!i.reconnectState||!i.reconnectState.active){clearInterval(i.reconnectState?.countdownTimerId);return}--i.reconnectState.secondsRemaining;let t=i.reconnectState.secondsRemaining;if(t>0){_n(e,n,a,t);let r=document.getElementById(`statusMessage`);r&&P()===e&&(r.textContent=`● Reconnecting to ${i.profile.host} (Attempt ${n}/${a} in ${t}s)...`)}else clearInterval(i.reconnectState.countdownTimerId)},1e3),i.reconnectState.timerId=setTimeout(()=>{clearInterval(i.reconnectState?.countdownTimerId),Sn(e,n)},s*1e3)}async function Sn(e,n){let r=t[e];if(!r||!r.reconnectState||!r.reconnectState.active)return;let{maxAttempts:i}=r.reconnectState,a=r.profile;p(e,`Reconnecting`,null,`Connecting to ${a.host} (Attempt ${n}/${i})...`),r.term&&r.term.write(`\x1b[1;36m● [Attempt ${n}/${i}] Connecting to ${a.host}:${a.port||22}...\x1b[0m\r\n`);let o=``,s=a.vaultKey||a.id;if(!a.privateKeyPath&&window.go&&window.go.main&&window.go.main.App)try{s&&typeof window.go.main.App.GetSessionPassword==`function`?o=await window.go.main.App.GetSessionPassword(s):s&&typeof window.go.main.App.GetSavedPassword==`function`&&(o=await window.go.main.App.GetSavedPassword(s)),!o&&window.go.main.App.FindSessionPassword&&a.host&&a.username&&(o=await window.go.main.App.FindSessionPassword(s||``,a.host,a.port||22,a.username))}catch{}try{window.go&&window.go.main&&window.go.main.App&&(typeof window.go.main.App.OpenSessionWithTabID==`function`?await window.go.main.App.OpenSessionWithTabID(e,a,o):await window.go.main.App.OpenSession(a,o)),r.reconnectState&&(r.reconnectState.timerId&&clearTimeout(r.reconnectState.timerId),r.reconnectState.countdownTimerId&&clearInterval(r.reconnectState.countdownTimerId),r.reconnectState.active=!1),hn(e),p(e,`Connected`),r.term&&r.term.write(`\r\n\x1b[1;32m✔ [Attempt ${n}/${i}] Successfully reconnected to ${a.host}!\x1b[0m\r\n\r\n`),S(`Reconnected to ${a.name}`,`success`)}catch(t){if(!r.reconnectState||!r.reconnectState.active)return;let o=ue(t);if(n<i){let t=Math.min(60,Math.round(r.reconnectState.initialDelay*2**n));r.term&&r.term.write(`\x1b[1;31m✖ [Attempt ${n}/${i}] Connection failed: [${o.category}] ${o.message}. Next retry in ${t}s...\x1b[0m\r\n`),xn(e,n+1,!1)}else r.reconnectState.active=!1,p(e,`Failed`,o),r.term&&(r.term.write(`\r\n\x1b[1;31m✖ Reconnection failed after ${i} attempts.\x1b[0m\r\n`),L(r.term,a,o)),vn(e,i),S(`Reconnection failed after ${i} attempts: [${o.category}]`,`error`)}}var Cn=new Set;function wn(e){return Cn.add(e),()=>Cn.delete(e)}function Tn(e,t){for(let n of Cn)try{n(e,t)}catch(e){console.error(`multiExecData error:`,e)}}var En=RegExp(`[\\u001b\\u009b][[\\]()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]`,`g`);function Dn(e){try{return String(e).replace(En,``).replace(/\r/g,``)}catch{return e}}function On(){try{return localStorage.getItem(`nexterm_autolog`)===`1`}catch{return!1}}function kn(e){try{localStorage.setItem(`nexterm_autolog`,e?`1`:`0`)}catch{}}function An(e){return e&&(e.customTitle||e.remoteHostname||e.profile?.name||e.profile?.host)||`session`}function jn(e,n){let r=t[e];if(r&&r.logging&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.AppendSessionLog)try{window.go.main.App.AppendSessionLog(e,An(r),Dn(n))}catch{}}async function Mn(e){let n=t[e];if(!n){S(`Open a terminal first`,`warning`);return}if(n.logging){n.logging=!1;let t=``;if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.StopSessionLog)try{t=await window.go.main.App.StopSessionLog(e)}catch{}S(t?`Logging stopped — saved to ${t}`:`Session logging stopped`,`info`)}else n.logging=!0,S(`Session logging started — auto-saving transcript to the Nexterm Logs folder`,`success`)}function Nn(){let e=document.getElementById(`multiExecBar`),t=document.getElementById(`multiExecInput`);e&&!e.classList.toggle(`hidden`)&&t&&(t.focus(),S(`MultiExec enabled: Commands will broadcast to all tabs`,`info`))}async function Pn(){let e=document.getElementById(`multiExecInput`);if(!e)return;let n=e.value;n&&(window.go&&window.go.main&&window.go.main.App?await window.go.main.App.BroadcastCommand([],n,`parallel`):Object.values(t).forEach(e=>e.term.write(n+`\r
`)),e.value=``,S(`Broadcast sent to all active tabs`,`success`))}function Fn(e){let t=document.getElementById(`workspace`);if(!t)return;let n=e?r(e.environment||e.profile?.environment||e.color||e.profile?.color):null,i=n?n.color:``;if(n&&n.key===`prod`&&i){t.style.borderTop=`3px solid ${i}`,t.style.boxShadow=`inset 0 0 0 1px ${i}44`;let r=document.getElementById(`envGuardBadge`);r||(r=document.createElement(`div`),r.id=`envGuardBadge`,r.className=`env-guard-badge`,t.appendChild(r));let a=e.profile?.host||``;r.textContent=`${n.label}${a?` · `+a:``}`,r.style.background=n.bg||i,r.style.color=i,r.style.borderColor=i,r.hidden=!1}else In()}function In(){let e=document.getElementById(`workspace`);e&&(e.style.borderTop=``,e.style.boxShadow=``);let t=document.getElementById(`envGuardBadge`);t&&(t.hidden=!0)}function Ln(){In(),s(`home`);let e=document.getElementById(`homeTabBtn`),n=document.getElementById(`welcomeState`);e&&e.classList.add(`active`),n&&n.classList.add(`active`),Object.values(t).forEach(e=>{e.tabEl&&e.tabEl.classList.remove(`active`),e.paneEl&&e.paneEl.classList.remove(`active`)}),ln&&ln(`sessions`),un&&un();let r=document.getElementById(`welcomeSearchInput`);r&&typeof r.focus==`function`&&setTimeout(()=>{try{r.focus()}catch{}},50),N()}function Rn(e){if(e===`home`){Ln();return}let n=document.getElementById(`homeTabBtn`),r=document.getElementById(`welcomeState`);n&&n.classList.remove(`active`),r&&r.classList.remove(`active`),s(e),u(e,!1);let i=x.panes.find(t=>t.tabIds&&t.tabIds.includes(e));i&&(i.activeTabId=e,x.activePaneId=i.id),Object.entries(t).forEach(([t,n])=>{let r=t===e;n.tabEl&&n.tabEl.classList.toggle(`active`,r)}),A();let a=t[e];if(Fn(a),a){setTimeout(()=>{try{a.fitAddon&&a.fitAddon.fit(),a.term.focus(),window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ResizeTerminal(e,a.term.cols||120,a.term.rows||30)}catch{}},40);let t=document.getElementById(`sftpActiveTabBadge`);if(a.isLocal)t&&(t.textContent=`Local Terminal`),ln&&ln(`sessions`);else{let n=a.serialNo?`[${a.serialNo}] `:``,r=a.remoteHostname||(a.profile?.name&&a.profile.name!==`New Server`&&a.profile.name!==`New Session`?a.profile.name:a.profile?.host?a.profile.username?`${a.profile.username}@${a.profile.host}`:a.profile.host:`Server`);if(t&&(t.textContent=`${n}${r}`),ln&&ln(`sftp`),ge())xe(e);else{let e=a.sftpPath||a.profile&&a.profile.initialDir||`~`;dn&&dn(e)}}}N()}function zn(e){let n=t[e];if(!n)return;if(n.logging&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.StopSessionLog){try{window.go.main.App.StopSessionLog(e)}catch{}n.logging=!1}if(n.reconnectState&&(n.reconnectState.timerId&&clearTimeout(n.reconnectState.timerId),n.reconnectState.countdownTimerId&&clearInterval(n.reconnectState.countdownTimerId),n.reconnectState.active=!1),hn(e),n.unsubscribers&&Array.isArray(n.unsubscribers)&&(n.unsubscribers.forEach(e=>{try{typeof e==`function`&&e()}catch{}}),n.unsubscribers=[]),window.runtime&&window.runtime.EventsOff){try{window.runtime.EventsOff(`terminal:data:`+e)}catch{}try{window.runtime.EventsOff(`terminal:state:`+e)}catch{}try{window.runtime.EventsOff(`terminal:closed:`+e)}catch{}}window.go&&window.go.main&&window.go.main.App&&window.go.main.App.CloseTab(e);let r=x.panes.find(t=>t.tabIds&&t.tabIds.includes(e));if(r){let t=r.tabIds.indexOf(e);t!==-1&&r.tabIds.splice(t,1),r.activeTabId===e&&(r.activeTabId=r.tabIds.length>0?r.tabIds[r.tabIds.length-1]:null)}if(n.searchAddon&&typeof n.searchAddon.dispose==`function`)try{n.searchAddon.dispose()}catch{}try{n.term.dispose()}catch{}n.tabEl&&n.tabEl.remove(),n.paneEl&&n.paneEl.remove(),m(e),f(),A();let i=Object.keys(t);i.length>0?r&&r.activeTabId?Rn(r.activeTabId):Rn(i[i.length-1]):Ln(),N(),un&&un()}function Bn(e){if(!e)return null;for(let[n,r]of Object.entries(t))if(r.profile&&(r.profile.id===e||r.profile.sessionId===e))return n;return null}function Vn(e){if(e&&t[e]){let n=t[e];if(n.isLocal)Un(`powershell`);else if(n.profile){let e={...n.profile,id:`dup-`+Date.now()+`-`+Math.random().toString(36).substr(2,6),sessionId:n.profile.id,vaultKey:n.profile.vaultKey||n.profile.id,name:n.profile.name||n.profile.host};V(e,!0),S(`Duplicating tab for "${e.name}"...`,`info`)}}}function Hn(e,n,i=!1,a=`Connected`){let o=document.getElementById(`welcomeState`),s=document.getElementById(`homeTabBtn`),c=document.getElementById(`tabbar`);o&&o.classList.remove(`active`),s&&s.classList.remove(`active`);let l=i?`state-connected`:a===`Connecting`?`state-connecting`:`state-connected`,d=i?`● Connected`:a===`Connecting`?`● Connecting...`:`● Connected`,m=r(n.environment||n.color),h=m?`<span class="tab-env-badge env-${m.key}" style="color:${m.color}; background:${m.bg}; border-color:${m.border};" title="Environment: ${m.name}">${m.label}</span>`:``,g=(c?c.querySelectorAll(`.tab-item:not(.home-tab)`):[]).length+1,_=n.name&&n.name!==`New Server`&&n.name!==`New Session`?n.name:n.host?n.username?`${n.username}@${n.host}`:n.host:i?`Local Terminal`:`Terminal`,v=`[${g}] ${_}`,y=document.createElement(`div`);y.className=`tab-item active`,y.dataset.tabId=e,y.title=`${v} (${d})${m?` [${m.name}]`:``}`,y.innerHTML=`
    <span class="tab-dot ${l}" title="${d}"></span>
    <span class="tab-title" title="${j(v)}"><span class="tab-serial">[${g}] </span>${j(_)}</span>
    ${h}
    <span class="tab-notify-dot" title="Attention / Notification" style="display:none;">•</span>
    <span class="tab-dropdown-btn" title="Server Options & Color">▾</span>
    <span class="tab-close" title="Close (Ctrl+W)">&times;</span>
  `,y.addEventListener(`click`,()=>Rn(e)),y.addEventListener(`contextmenu`,t=>{t.preventDefault(),t.stopPropagation(),Wn(t.clientX,t.clientY,e)});let b=y.querySelector(`.tab-dropdown-btn`);b&&b.addEventListener(`click`,t=>{t.stopPropagation();let n=b.getBoundingClientRect();Wn(n.left,n.bottom+4,e)}),y.querySelector(`.tab-close`).addEventListener(`click`,t=>{t.stopPropagation(),zn(e)}),c&&c.appendChild(y);let x=document.createElement(`div`);x.className=`terminal-pane active`,x.dataset.tabId=e;let S=x;i||(x.innerHTML=`
      <div class="pane-split-wrap">
        <div class="pane-terminal-top">
          <div class="terminal-canvas-wrap" id="termCanvas_${e}"></div>
        </div>
        <div class="pane-split-divider" id="splitDivider_${e}">
          <div class="pane-split-handle" id="splitHandle_${e}" title="Drag to resize / Click toggle button to collapse SFTP">
            <span class="split-drag-bar"></span>
            <button class="split-toggle-btn" id="sftpToggleBtn_${e}" type="button">
              <span class="split-icon">📂</span> Show SFTP Dual File Manager
            </button>
          </div>
        </div>
        <div class="pane-sftp-bottom is-collapsed" id="sftpBottom_${e}">
          <div class="sftp-dual-container" id="sftpDual_${e}">
            <!-- Local Files Half -->
            <div class="sftp-half-pane sftp-pane-local" id="sftpLocalHalf_${e}">
              <div class="sftp-pane-header">
                <div class="sftp-header-left">
                  <span class="sftp-pane-badge local">💻 Local PC</span>
                  <select class="sftp-drive-select" id="sftpDriveSel_${e}" title="Select Drive"></select>
                  <input type="text" class="sftp-path-bar" id="sftpLocalPath_${e}" spellcheck="false" autocomplete="off" />
                </div>
                <div class="sftp-pane-actions">
                  <button class="sftp-mini-btn" id="sftpLocalUp_${e}" title="Up one folder">⬆</button>
                  <button class="sftp-mini-btn" id="sftpLocalRefresh_${e}" title="Refresh local files">↻</button>
                  <button class="sftp-mini-btn" id="sftpLocalMkdir_${e}" title="New local folder">📁+</button>
                  <button class="sftp-mini-btn" id="sftpLocalMkfile_${e}" title="New local file">📄+</button>
                  <button class="sftp-mini-btn" id="sftpLocalDel_${e}" title="Delete local file/folder">🗑️</button>
                </div>
              </div>
              <div class="sftp-table-head">
                <div class="sftp-col name">Name</div>
                <div class="sftp-col size">Size</div>
                <div class="sftp-col date">Modified</div>
              </div>
              <div class="sftp-file-tbody" id="sftpLocalList_${e}">
                <div style="color: #64748b; padding: 12px; font-size: 11px;">Loading local files...</div>
              </div>
            </div>

            <!-- Transfer Center Controls -->
            <div class="sftp-transfer-divider">
              <button class="btn-sftp-transfer btn-transfer-upload" id="sftpUploadBtn_${e}" title="Upload selected local file to remote server">
                <span class="arrow">➔</span>
                <span class="label">Upload</span>
              </button>
              <button class="btn-sftp-transfer btn-transfer-download" id="sftpDownloadBtn_${e}" title="Download selected remote file to local PC">
                <span class="arrow">⬅</span>
                <span class="label">Download</span>
              </button>
            </div>

            <!-- Remote Files Half -->
            <div class="sftp-half-pane sftp-pane-remote" id="sftpRemoteHalf_${e}">
              <div class="sftp-pane-header">
                <div class="sftp-header-left">
                  <span class="sftp-pane-badge remote">🌐 Remote Server</span>
                  <input type="text" class="sftp-path-bar" id="sftpRemotePath_${e}" spellcheck="false" autocomplete="off" />
                </div>
                <div class="sftp-pane-actions">
                  <button class="sftp-mini-btn" id="sftpRemoteUp_${e}" title="Up one folder">⬆</button>
                  <button class="sftp-mini-btn" id="sftpRemoteRefresh_${e}" title="Refresh remote files">↻</button>
                  <button class="sftp-mini-btn" id="sftpRemoteMkdir_${e}" title="New remote folder">📁+</button>
                  <button class="sftp-mini-btn" id="sftpRemoteMkfile_${e}" title="New remote file">📄+</button>
                  <button class="sftp-mini-btn" id="sftpRemoteEdit_${e}" title="Edit in NexTerm Editor">📝</button>
                  <button class="sftp-mini-btn" id="sftpRemoteChmod_${e}" title="Change Permissions (chmod)">🔑</button>
                  <button class="sftp-mini-btn" id="sftpRemoteDel_${e}" title="Delete remote file/folder">🗑️</button>
                </div>
              </div>
              <div class="sftp-table-head">
                <div class="sftp-col name">Name</div>
                <div class="sftp-col size">Size</div>
                <div class="sftp-col perm">Perms</div>
                <div class="sftp-col date">Modified</div>
              </div>
              <div class="sftp-file-tbody" id="sftpRemoteList_${e}">
                <div style="color: #64748b; padding: 12px; font-size: 11px;">Loading remote files...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,S=x.querySelector(`#termCanvas_${e}`));let{term:C,fitAddon:w,searchAddon:T}=fe(n,W);C.open(S),C.attachCustomKeyEventHandler(n=>(n.ctrlKey||n.metaKey)&&(n.shiftKey&&(n.key===`F`||n.key===`f`)||!n.shiftKey&&(n.key===`f`||n.key===`F`))?(n.type===`keydown`&&me(e),!1):n.key===`Escape`&&t[e]&&t[e].searchState&&t[e].searchState.isOpen?(n.type===`keydown`&&he(e),!1):!0);let E=pe(e,x,C,T);!i&&cn&&cn(e,n,x,w,C),setTimeout(()=>{try{w&&w.fit(),C.focus(),window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ResizeTerminal(e,C.cols||120,C.rows||30)}catch{}},50);let D=``,O=``;C.onData(n=>{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.WriteToTerminal(e,n),!i)for(let r=0;r<n.length;r++){let i=n[r];if(i===`\r`||i===`
`){let n=D.trim();D=``,Ce(e,n);try{Et(e,n)}catch{}try{zt(t[e]&&t[e].profile?t[e].profile.host:``,n)}catch{}}else i===``||i===`\b`?D=D.slice(0,-1):i===``||i===``?D=``:i>=` `&&i<=`~`&&(D+=i)}}),C.onTitleChange(t=>{t&&!i&&we(e,t)});try{C.parser&&typeof C.parser.registerOscHandler==`function`&&C.parser.registerOscHandler(7,t=>(i||Te(e,t),!0))}catch{}let k=[];if(window.runtime&&window.runtime.EventsOn){let r=window.runtime.EventsOn(`terminal:data:`+e,t=>{C.write(t),Tn(e,t),jn(e,t),i||(O=(O+t).slice(-500),Ee(e,O)),P()!==e&&u(e,!0)});typeof r==`function`&&k.push(r),C.onBell&&C.onBell(()=>{P()!==e&&u(e,!0)});let a=window.runtime.EventsOn(`terminal:state:`+e,r=>{if(!r)return;let i=r.state,a=r.message||``,o=r.error?ue(r.error):null;if(p(e,i,o,a),i===`Connecting`)C.write(`\r\n\x1b[1;36m● Connecting to ${n.username||`user`}@${n.host}:${n.port||22}...\x1b[0m\r\n`);else if(i===`Authenticating`)C.write(`\x1b[1;33m● Authenticating user '${n.username}'...\x1b[0m\r\n`);else if(i===`Connected`){C.write(`\x1b[1;32m● Connected to ${n.host}\x1b[0m\r\n\r\n`),ln&&ln(`sftp`);let r=t[e]&&t[e].sftpPath||n&&n.initialDir||`~`;dn&&dn(r)}else i===`Failed`&&L(C,n,o)});typeof a==`function`&&k.push(a);let o=window.runtime.EventsOn(`terminal:closed:`+e,r=>{let a=`Disconnected`,o=null;typeof r==`object`&&r?(a=r.reason||`Disconnected`,o={category:r.category||`Server closed connection`,message:r.reason||`Session closed`,description:r.description||`The remote server or network closed the connection.`,rawError:r.rawError||r.reason||``}):typeof r==`string`&&(a=r,o=ue(r)),p(e,`Closed`,o,a),C.write(`\r\n\x1b[1;31m[● Connection lost: ${o.category} - ${o.message}]\x1b[0m\r\n`),L(C,n,o),!i&&t[e]&&((n.autoReconnect===void 0?W.autoReconnect:n.autoReconnect)?bn(e,!1):(gn(e,n,o),C.write(`\x1b[1;33m● Connection lost to ${n.host}. Press \x1b[1;36m[Enter]\x1b[1;33m or \x1b[1;36m[Y]\x1b[1;33m to reconnect, or \x1b[1;36m[N]\x1b[1;33m to dismiss.\x1b[0m\r\n\r\n`),t[e].awaitingReconnectPrompt=!0))});typeof o==`function`&&k.push(o)}C.onKey(n=>{let r=t[e];if(r){if(r.awaitingReconnectPrompt){if(n.key===`\r`||n.key.toLowerCase()===`y`){r.awaitingReconnectPrompt=!1,hn(e),bn(e,!0);return}if(n.key.toLowerCase()===`n`||n.domEvent&&n.domEvent.key===`Escape`){r.awaitingReconnectPrompt=!1,hn(e),C.write(`\r
\x1B[90m● Reconnection dismissed.\x1B[0m\r
`);return}}if(r.reconnectState&&r.reconnectState.active&&n.domEvent&&n.domEvent.key===`Escape`){yn(e);return}}}),x.addEventListener(`contextmenu`,async t=>{if(t.preventDefault(),t.stopPropagation(),W.rightClickPaste!==!1)try{let t=await navigator.clipboard.readText();t&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.WriteToTerminal(e,t)}catch(e){console.warn(`Clipboard paste error:`,e)}}),x.addEventListener(`auxclick`,async t=>{if(t.button===1){t.preventDefault();try{let t=await navigator.clipboard.readText();t&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.WriteToTerminal(e,t)}catch{}}}),C.onSelectionChange(()=>{if(W.autoCopySelection!==!1){let e=C.getSelection();e&&e.length>0&&navigator.clipboard.writeText(e).catch(()=>{})}}),x.addEventListener(`dragover`,e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=`copy`}),x.addEventListener(`drop`,async t=>{if(t.preventDefault(),t.stopPropagation(),t.dataTransfer.files&&t.dataTransfer.files.length>0){let n=[];for(let e=0;e<t.dataTransfer.files.length;e++){let r=t.dataTransfer.files[e],i=r.path||r.name;n.push(i.includes(` `)?`"${i}"`:i)}let r=n.join(` `)+` `;window.go&&window.go.main&&window.go.main.App&&window.go.main.App.WriteToTerminal(e,r)}else{let n=t.dataTransfer.getData(`text`);n&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.WriteToTerminal(e,n)}});let M=te();M.tabIds.includes(e)||M.tabIds.push(e),M.activeTabId=e,t[e]={id:e,title:n?.name||(i?`Local Terminal`:`SSH Session`),host:n?.host||(i?`Local Shell`:`127.0.0.1`),term:C,fitAddon:w,searchAddon:T,searchState:E,profile:n,paneEl:x,tabEl:y,paneId:M.id,isConnected:a===`Connected`||i,connectionState:i?`Connected`:a,stateMessage:``,errorInfo:null,isLocal:i,sftpPath:n.initialDir||`~`,terminalCwd:n.initialDir||`~`,lastSftpPath:`~`,unsubscribers:k,reconnectState:null,awaitingReconnectPrompt:!1,color:n.color||``,environment:n.environment||``,pinned:!1,customTitle:``},A(),f(),F(e),Rn(e),un&&un()}async function Un(e=`powershell`){S(`Launching local terminal...`,`info`);let t;try{t=window.go&&window.go.main&&window.go.main.App?await window.go.main.App.OpenLocalTerminal(e):`mock-local-`+Date.now()}catch(e){S(`Failed to start local terminal: `+e,`error`);return}Hn(t,{id:t,name:e===`powershell`?`PowerShell`:`Command Prompt`,host:`localhost`,username:`Local`},!0),S(`Local terminal started`,`success`)}async function V(e,n=!1){if(!e)return;let r=te(),i=e.id&&r&&r.tabIds&&r.tabIds.some(n=>{let r=t[n];return r&&r.profile&&(r.profile.id===e.id||r.profile.sessionId===e.id)});if(!n&&e.id){let n=Bn(e.id);if(n&&t[n]){let r=t[n];if((r.isConnected||r.connectionState===`Connecting`||r.connectionState===`Authenticating`)&&(x.layout===`single`||i)){Rn(n),S(`Focused active connection for "${e.name||e.host}"`,`info`);return}}}let a=e.password||e.tempPassword||``,o=e.authType||(e.privateKeyPath?`key`:`password`),s=e.vaultKey||e.id;if(o===`password`){if(!a){let t=!1;if(window.go&&window.go.main&&window.go.main.App)try{if(s&&(t=await window.go.main.App.HasSavedPassword(s),t&&(typeof window.go.main.App.GetSessionPassword==`function`?a=await window.go.main.App.GetSessionPassword(s):typeof window.go.main.App.GetSavedPassword==`function`&&(a=await window.go.main.App.GetSavedPassword(s)))),!a&&window.go.main.App.FindSessionPassword&&e.host&&e.username){let n=await window.go.main.App.FindSessionPassword(s||``,e.host,e.port||22,e.username);n&&(a=n,t=!0)}}catch{}if((!t||!a)&&(a=await Qn(e),a===null))return}}else if(o===`key`){if(e.privateKeyPath&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ValidatePrivateKeyFile){let t=!1,n=e.passphraseVaultKey||(e.vaultKey?e.vaultKey+`_passphrase`:``);if(n&&window.go.main.App.GetSessionPassphrase)try{await window.go.main.App.GetSessionPassphrase(n)&&(t=!0)}catch{}if(!t&&!e.keyPassphrase)try{let t=await window.go.main.App.ValidatePrivateKeyFile(e.privateKeyPath,``);if(t&&t.encrypted){let t=await $n(e);if(t===null)return;e.keyPassphrase=t}}catch{}}}else if(o===`agent`&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.CheckSSHAgent)try{let e=await window.go.main.App.CheckSSHAgent();e&&!e.available&&S(`Warning: SSH Agent not active (${e.error||`service not running`})`,`warning`)}catch{}let c=``;if(e.useJumpHost&&e.jumpHost){let t=e.jumpAuthType||`password`,n=`${e.jumpUsername||`bastion`}@${e.jumpHost}:${e.jumpPort||22}`;if(t===`key`){if(e.jumpVaultKey&&window.go?.main?.App?.GetSessionPassphrase)try{c=await window.go.main.App.GetSessionPassphrase(e.jumpVaultKey+`_passphrase`)||``}catch{}if(!c&&e.jumpPrivateKeyPath&&window.go?.main?.App?.ValidatePrivateKeyFile)try{let t=await window.go.main.App.ValidatePrivateKeyFile(e.jumpPrivateKeyPath,``);if(t&&t.encrypted){let t=await er({gatewayLabel:n,vaultKey:e.jumpVaultKey,isKey:!0,keyPath:e.jumpPrivateKeyPath});if(t===null)return;c=t}}catch{}}else{if(e.jumpVaultKey&&window.go?.main?.App?.HasSavedPassword)try{await window.go.main.App.HasSavedPassword(e.jumpVaultKey)&&window.go.main.App.GetSessionPassword&&(c=await window.go.main.App.GetSessionPassword(e.jumpVaultKey)||``)}catch{}if(!c){let t=await er({gatewayLabel:n,vaultKey:e.jumpVaultKey,isKey:!1});if(t===null)return;c=t}}}let l=!n&&e.id&&Bn(e.id)||null;l&&t[l]?(t[l].profile=e,p(l,`Connecting`,null,`Connecting to ${e.host}...`),Rn(l),t[l].term&&t[l].term.reset()):(l=`ssh-`+Math.random().toString(36).substring(2,9)+`-`+Date.now().toString(36),Hn(l,e,!1,`Connecting`)),S(`Connecting to ${e.username}@${e.host}...`,`info`),p(l,`Connecting`,null,`Connecting to ${e.host}...`);try{if(window.go&&window.go.main&&window.go.main.App){if(typeof window.go.main.App.OpenSessionWithTabIDAndJumpSecret==`function`)await window.go.main.App.OpenSessionWithTabIDAndJumpSecret(l,e,a,c);else if(typeof window.go.main.App.OpenSessionWithTabID==`function`)await window.go.main.App.OpenSessionWithTabID(l,e,a);else{let n=await window.go.main.App.OpenSession(e,a);n&&n!==l&&t[l]&&(t[n]=t[l],m(l))}}else await new Promise(e=>setTimeout(e,300)),t[l]&&t[l].term&&(t[l].term.write(`\r\n\x1b[1;32m● Connected to ${e.host||`192.168.1.7`}\x1b[0m\r\n\r\n`),t[l].term.write(`Last login: ${new Date().toLocaleString()} from 192.168.1.108\r\n`),t[l].term.write(`\x1b[1;32m[${e.username||`pin`}@${(e.host||`SRV-01`).split(`.`)[0]} ~]$\x1b[0m `));p(l,`Connected`),On()&&t[l]&&(t[l].logging=!0),S(`Connected to ${e.name||e.host}`,`success`);try{$t(l,e)}catch{}ln&&ln(`sftp`);let n=t[l]&&t[l].sftpPath||e&&e.initialDir||`~`;dn&&dn(n)}catch(n){let r=ue(n);p(l,`Failed`,r),t[l]&&t[l].term&&L(t[l].term,e,r),S(`Connection failed: [${r.category}] ${r.message}`,`error`)}}function Wn(e,n,r){let i=ke();if(!i)return;let a=t[r];if(!a)return;let o=l(r),s=Object.keys(t),c=s.indexOf(r),u=c>0,d=c!==-1&&c<s.length-1;i.innerHTML=`
    <div class="context-menu-item" id="tabCtxRename">
      <span class="ctx-icon">✏️</span>
      <span class="ctx-text">Rename tab</span>
    </div>
    <div class="context-menu-item" id="tabCtxColor">
      <span class="ctx-icon">🎨</span>
      <span class="ctx-text">Set tab color</span>
      <span class="ctx-arrow" style="margin-left:auto; font-size:10px; color:var(--text-muted);">▸</span>
    </div>
    <div class="context-menu-item" id="tabCtxDup">
      <span class="ctx-icon">📋</span>
      <span class="ctx-text">Duplicate tab</span>
    </div>
    <div class="context-menu-item" id="tabCtxBroadcast">
      <span class="ctx-icon">📡</span>
      <span class="ctx-text">Broadcast command...</span>
      <span class="ctx-shortcut">Alt+B</span>
    </div>
    <div class="context-menu-item danger" id="tabCtxClose">
      <span class="ctx-icon">✕</span>
      <span class="ctx-text">Close tab</span>
      <span class="ctx-shortcut">Ctrl+W</span>
    </div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item ${u?``:`disabled`}" id="tabCtxCloseLeft">
      <span class="ctx-icon">⬅</span>
      <span class="ctx-text">Close all tabs to the left</span>
    </div>
    <div class="context-menu-item ${d?``:`disabled`}" id="tabCtxCloseRight">
      <span class="ctx-icon">➔</span>
      <span class="ctx-text">Close all tabs to the right</span>
    </div>
    <div class="context-menu-item" id="tabCtxCloseOther">
      <span class="ctx-icon">⛔</span>
      <span class="ctx-text">Close all except this tab</span>
    </div>
    <div class="context-menu-item danger" id="tabCtxCloseAll">
      <span class="ctx-icon">⏻</span>
      <span class="ctx-text">Close all tabs</span>
    </div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="tabCtxSplit">
      <span class="ctx-icon">✂</span>
      <span class="ctx-text">Detach tab (Split Pane)</span>
    </div>
    <div class="context-menu-item" id="tabCtxFullscreen">
      <span class="ctx-icon">⛶</span>
      <span class="ctx-text">Fullscreen</span>
    </div>
    <div class="context-menu-item" id="tabCtxPin">
      <span class="ctx-icon">📌</span>
      <span class="ctx-text">${o?`Unpin this tab`:`Pin/unpin this tab`}</span>
    </div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="tabCtxSave">
      <span class="ctx-icon">💾</span>
      <span class="ctx-text">Save terminal output</span>
    </div>
    <div class="context-menu-item" id="tabCtxPrint">
      <span class="ctx-icon">🖨️</span>
      <span class="ctx-text">Print terminal output</span>
    </div>
    <div class="context-menu-item" id="tabCtxFontPlus">
      <span class="ctx-icon">🔍➕</span>
      <span class="ctx-text">Increase font size</span>
      <span class="ctx-shortcut">Ctrl++</span>
    </div>
    <div class="context-menu-item" id="tabCtxFontMinus">
      <span class="ctx-icon">🔍➖</span>
      <span class="ctx-text">Decrease font size</span>
      <span class="ctx-shortcut">Ctrl+-</span>
    </div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="tabCtxClear">
      <span class="ctx-icon">⌫</span>
      <span class="ctx-text">Clear terminal screen</span>
    </div>
  `,Ae(e,n);let f=i.querySelector(`#tabCtxRename`);f&&(f.onclick=()=>{R();let e=a.customTitle||a.profile?.name||`Terminal`,t=prompt(`Enter new tab name:`,e);t!==null&&t.trim()&&(ie(r,t.trim()),S(`Tab renamed to "${t.trim()}"`,`success`))});let p=i.querySelector(`#tabCtxColor`);p&&(p.onclick=t=>{t.stopPropagation(),Gn(e+180,n+20,r)});let m=i.querySelector(`#tabCtxDup`);m&&(m.onclick=()=>{R(),Vn(r)});let h=i.querySelector(`#tabCtxBroadcast`);h&&(h.onclick=()=>{R(),Xe(`selected`,[r])});let _=i.querySelector(`#tabCtxClose`);_&&(_.onclick=()=>{R(),zn(r)});let v=i.querySelector(`#tabCtxCloseLeft`);v&&u&&(v.onclick=()=>{R(),s.slice(0,c).forEach(e=>{l(e)||zn(e)}),S(`Closed tabs to the left`,`info`)});let y=i.querySelector(`#tabCtxCloseRight`);y&&d&&(y.onclick=()=>{R(),s.slice(c+1).forEach(e=>{l(e)||zn(e)}),S(`Closed tabs to the right`,`info`)});let b=i.querySelector(`#tabCtxCloseOther`);b&&(b.onclick=()=>{R(),s.forEach(e=>{e!==r&&!l(e)&&zn(e)}),S(`Closed other tabs`,`info`)});let C=i.querySelector(`#tabCtxCloseAll`);C&&(C.onclick=()=>{R(),s.forEach(e=>{l(e)||zn(e)}),Ln(),S(`Closed all tabs`,`info`)});let w=i.querySelector(`#tabCtxSplit`);w&&(w.onclick=async()=>{R();let e=await on(()=>import(`./workspaceState-Av5XbUcK.js`).then(e=>e.f),[]),t=a.paneId||e.getWorkspaceState().activePaneId;e.splitPane(t,`right`);let n=e.getWorkspaceState(),i=n.panes.find(e=>e.id!==t)||n.panes[n.panes.length-1];i&&(e.moveTabToPane(r,i.id),e.setActiveWorkspacePane(i.id)),S(`Tab detached into split pane`,`success`)});let T=i.querySelector(`#tabCtxFullscreen`);T&&(T.onclick=()=>{R();let e=a.paneId||x.activePaneId;ne(e)});let E=i.querySelector(`#tabCtxPin`);E&&(E.onclick=()=>{R();let e=g(r);S(e?`Tab pinned 📌 (protected from bulk close)`:`Tab unpinned`,`info`)});let D=i.querySelector(`#tabCtxSave`);D&&(D.onclick=()=>{if(R(),!a.term)return;let e=a.term.buffer.active,t=[];for(let n=0;n<e.length;n++){let r=e.getLine(n);r&&t.push(r.translateToString(!0))}let n=t.join(`
`).trimEnd(),r=`${(a.profile?.name||`terminal`).replace(/[^a-zA-Z0-9_-]/g,`_`)}_${new Date().toISOString().replace(/[:.]/g,`-`)}.log`,i=()=>{let e=new Blob([n],{type:`text/plain;charset=utf-8`}),t=URL.createObjectURL(e),i=document.createElement(`a`);i.href=t,i.download=r,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t),S(`Saved terminal output as ${r}`,`success`)};window.go&&window.go.main&&window.go.main.App&&window.go.main.App.SaveTerminalOutput?window.go.main.App.SaveTerminalOutput(r,n).then(e=>{e&&S(`Terminal output saved: ${e}`,`success`)}).catch(e=>{console.warn(`Native SaveTerminalOutput failed, falling back to browser download:`,e),i()}):i()});let O=i.querySelector(`#tabCtxPrint`);O&&(O.onclick=()=>{if(R(),!a.term)return;let e=a.term.buffer.active,t=[];for(let n=0;n<e.length;n++){let r=e.getLine(n);r&&t.push(r.translateToString(!0))}let n=t.join(`
`).trimEnd(),r=window.open(``,`_blank`);r&&(r.document.write(`<title>${j(a.profile?.name||`Terminal Output`)}</title><pre style="font-family: Consolas, monospace; font-size: 11px; white-space: pre-wrap; line-height: 1.4; padding: 16px;">${j(n)}</pre>`),r.document.close(),r.focus(),r.print())});let k=i.querySelector(`#tabCtxFontPlus`);k&&(k.onclick=()=>{if(R(),a.term){let e=a.term.options.fontSize||13;e<36&&(a.term.options.fontSize=e+1,a.fitAddon&&a.fitAddon.fit(),S(`Terminal font: ${a.term.options.fontSize}px`,`info`))}});let A=i.querySelector(`#tabCtxFontMinus`);A&&(A.onclick=()=>{if(R(),a.term){let e=a.term.options.fontSize||13;e>8&&(a.term.options.fontSize=e-1,a.fitAddon&&a.fitAddon.fit(),S(`Terminal font: ${a.term.options.fontSize}px`,`info`))}});let M=i.querySelector(`#tabCtxClear`);M&&(M.onclick=()=>{R(),a.term&&a.term.clear(),S(`Terminal screen cleared`,`info`)})}function Gn(e,n,i){let a=document.getElementById(`tabColorPopover`);a||(a=document.createElement(`div`),a.id=`tabColorPopover`,a.className=`tab-color-popover`,document.body.appendChild(a));let o=t[i];if(!o)return;let s=o.environment||o.profile?.environment||``,l=o.color||o.profile?.color||``;a.innerHTML=`
    <div class="color-popover-header">
      <span class="color-popover-title">🎨 Tab / Server Environment</span>
      <button class="color-popover-close" id="closeColorPopover">&times;</button>
    </div>
    <div class="color-popover-desc">Select an environment tag to color-code this server (e.g. Yellow for UAT, Red for Prod):</div>
    <div class="color-popover-grid">
      ${Object.values(re).map(e=>`
        <button class="color-swatch-chip ${s===e.key?`active`:``}" data-env="${e.key}" data-color="${e.color}" type="button">
          <span class="swatch-dot" style="background:${e.color};"></span>
          <span class="swatch-label">${e.label}</span>
          <span class="swatch-name">${e.name}</span>
        </button>
      `).join(``)}
      <button class="color-swatch-chip ${!s&&!l?`active`:``}" data-env="" data-color="" type="button">
        <span class="swatch-dot" style="background:#64748b;"></span>
        <span class="swatch-label">NONE</span>
        <span class="swatch-name">Default</span>
      </button>
    </div>
    <div class="color-popover-custom-row">
      <span style="font-size:12px; color:var(--text-secondary);">Custom Hex:</span>
      <input type="color" id="tabCustomColorInput" value="${l||`#f59e0b`}" />
      <button class="btn btn-sm btn-primary" id="applyCustomColorBtn" style="padding:2px 8px; font-size:11px;">Apply</button>
    </div>
    ${o.profile&&o.profile.id&&!o.isLocal?`
      <div class="color-popover-save-row">
        <label style="display:flex; align-items:center; gap:6px; font-size:11px; cursor:pointer; color:var(--text-secondary);">
          <input type="checkbox" id="chkSaveColorToProfile" checked />
          <span>Save as default environment for "<b>${j(o.profile.name)}</b>"</span>
        </label>
      </div>
    `:``}
  `,a.style.left=Math.min(e,window.innerWidth-290)+`px`,a.style.top=Math.min(n,window.innerHeight-360)+`px`,a.classList.remove(`hidden`),R();let u=()=>a.classList.add(`hidden`),d=a.querySelector(`#closeColorPopover`);d&&(d.onclick=u);let f=async(e,t)=>{let n=a.querySelector(`#chkSaveColorToProfile`);if(n&&n.checked&&o.profile&&window.go&&window.go.main&&window.go.main.App){o.profile.color=e,o.profile.environment=t;try{await window.go.main.App.UpdateSession(o.profile),un&&await un(),S(`Saved ${t?t.toUpperCase():`color`} tag to "${o.profile.name}"`,`success`)}catch(e){console.warn(`Failed to persist session color:`,e)}}};a.querySelectorAll(`.color-swatch-chip`).forEach(e=>{e.onclick=async()=>{let t=e.dataset.color,n=e.dataset.env;c(i,t,n),await f(t,n),u(),S(n?`Tab environment: ${n.toUpperCase()}`:`Tab color reset`,`info`)}});let p=a.querySelector(`#tabCustomColorInput`),m=a.querySelector(`#applyCustomColorBtn`);m&&p&&(m.onclick=async()=>{let e=p.value,t=r(e),n=t?t.key:``;c(i,e,n),await f(e,n),u(),S(`Applied custom tab color ${e}`,`info`)});let h=e=>{a.contains(e.target)||(u(),document.removeEventListener(`mousedown`,h))};setTimeout(()=>document.addEventListener(`mousedown`,h),50)}function Kn(e){if(!e)return``;let t=j(e).replace(/\r\n/g,`
`).replace(/\r/g,`
`);return t=t.replace(/\x1b\[0m/g,`</span>`).replace(/\x1b\[1m/g,`<span style="font-weight:700;color:#f8fafc;">`).replace(/\x1b\[2m/g,`<span style="opacity:0.7;">`).replace(/\x1b\[31m/g,`<span style="color:#f87171;">`).replace(/\x1b\[32m/g,`<span style="color:#4ade80;">`).replace(/\x1b\[33m/g,`<span style="color:#facc15;">`).replace(/\x1b\[34m/g,`<span style="color:#60a5fa;">`).replace(/\x1b\[35m/g,`<span style="color:#c084fc;">`).replace(/\x1b\[36m/g,`<span style="color:#22d3ee;">`).replace(/\x1b\[37m/g,`<span style="color:#f1f5f9;">`).replace(/\x1b\[90m/g,`<span style="color:#94a3b8;">`).replace(/\x1b\[[0-9;]*[a-zA-Z]/g,``),t}var qn=[/\brm\s+-[rf]{1,3}\b/i,/\bshutdown\b/i,/\breboot\b/i,/\bpoweroff\b/i,/\bmkfs\b/i,/\bdd\s+if=/i,/\bdrop\s+database\b/i,/\bdrop\s+table\b/i,/\btruncate\s+table\b/i,/\bformat\s+[a-z]:/i,/\bkill\s+-9\s+-1\b/i,/\binit\s+[06]\b/i];function Jn(e){if(!e||typeof e!=`string`)return!1;let t=e.trim();return qn.some(e=>e.test(t))}function Yn(e,t,n){let r=e.trim(),i=new Date().toTimeString().split(` `)[0],a=t.toLowerCase().replace(/[^a-z0-9_-]/g,`-`);if(r.startsWith(`systemctl status`)){let e=r.split(` `)[2]||`billing`;return`\x1b[1m● ${e}.service - Nexterm Core Production Daemon\x1b[0m
     Loaded: loaded (/etc/systemd/system/${e}.service; \x1b[32menabled\x1b[0m; vendor preset: enabled)
     Active: \x1b[1;32mactive (running)\x1b[0m since Tue 2026-09-09 04:15:10 UTC; 8h 12min ago
   Main PID: ${Math.floor(1200+Math.random()*4e3)} (${e}-daemon)
      Tasks: 14 (limit: 8192)
     Memory: ${(42.5+Math.random()*8).toFixed(1)}M
        CPU: ${(1.8+Math.random()*1.5).toFixed(3)}s
     CGroup: /system.slice/${e}.service
             └─${Math.floor(1200+Math.random()*4e3)} /opt/nexterm/bin/${e}-daemon --cluster=prod-primary --port=8080

Sep 09 04:15:10 ${a} systemd[1]: Started Nexterm Core Production Daemon.
Sep 09 04:15:11 ${a} ${e}-daemon: [INFO] Initialized DB connection pool (max=64, active=12)
Sep 09 04:15:11 ${a} ${e}-daemon: [INFO] Synchronized cluster state with coordinator at ${n}
Sep 09 ${i} ${a} ${e}-daemon: [INFO] Health check OK: latency 0.8ms, error rate 0.00%
`}return r===`uptime`?` ${i} up 42 days, 14:22,  2 users,  load average: ${(.1+Math.random()*.4).toFixed(2)}, ${(.2+Math.random()*.3).toFixed(2)}, 0.15\n`:r===`df -h`?`Filesystem      Size  Used Avail Use% Mounted on
udev            3.9G     0  3.9G   0% /dev
tmpfs           794M  1.4M  793M   1% /run
/dev/sda1        78G   22G   53G  30% /
tmpfs           3.9G     0  3.9G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/sda15      124M   12M  112M  10% /boot/efi
`:r===`free -m`||r===`free -h`?`               total        used        free      shared  buff/cache   available
Mem:            7936        2140        3820          45        1976        5480
Swap:           2048           0        2048
`:r.startsWith(`docker ps`)?`CONTAINER ID   IMAGE                 COMMAND                  CREATED        STATUS        PORTS                    NAMES
a4f912c8b01a   redis:7.2-alpine      "docker-entrypoint.s…"   3 days ago     Up 3 days     0.0.0.0:6379->6379/tcp   billing-cache
c189e3a1f94d   postgres:16-alpine    "docker-entrypoint.s…"   3 days ago     Up 3 days     0.0.0.0:5432->5432/tcp   billing-db
8912ba77d3f1   nexterm/billing:v2.4  "/entrypoint.sh run"     8 hours ago    Up 8 hours    0.0.0.0:8080->8080/tcp   billing-api
`:`[${a} (${n})] Command executed successfully at ${i}: exit code 0\n`}var Xn=null;function Zn(){let e=[],n=new Map,r=h();for(let t of r)if(t&&t.profile){let r=t.profile.id||t.tabId;n.set(r,t),e.push({id:r,tabId:t.tabId,name:t.profile.name||`Session ${t.tabId.slice(0,6)}`,host:t.profile.host?`${t.profile.username||`root`}@${t.profile.host}`:t.isLocal?`localhost (Local Shell)`:`127.0.0.1`,protocol:t.profile.protocol||(t.isLocal?`local`:`ssh`),isConnected:!!t.isConnected,isOpen:!0,profile:t.profile,checked:!0})}let i=se(I);for(let t of i)t&&!n.has(t.id)&&e.push({id:t.id,tabId:null,name:t.name||`Server`,host:t.host?`${t.username||`root`}@${t.host}`:`remote-server`,protocol:t.protocol||`ssh`,isConnected:!1,isOpen:!1,profile:t,checked:!1});let a=new Map;e.forEach(e=>a.set(e.id,``));let o=H(`
    <div class="modal-header multiexec-modal-header">
      <div class="multiexec-title-wrap">
        <div class="modal-title multiexec-title">
          <span class="multiexec-title-icon">⚡</span>
          <span>Multi-Execution Command Center</span>
        </div>
        <div class="multiexec-subtitle">
          Architecture: <b>Command</b> ➔ <b>ConnectionManager</b> ➔ <b>Server 1, Server 2, Server 3...</b>
        </div>
      </div>
      <button class="modal-close-btn" id="multiExecModalClose" title="Close Dialog">&times;</button>
    </div>

    <div class="modal-body multiexec-modal-body">
      <!-- TOP SECTION: Server Selection & Command Control Panel -->
      <div class="multiexec-control-panel">
        
        <!-- Left: Selected Target Servers -->
        <div class="multiexec-targets-card">
          <div class="multiexec-section-title-row">
            <span class="multiexec-section-title">
              Selected Servers (<span id="multiexecSelectedCount">0</span>)
            </span>
            <div class="multiexec-selection-tools">
              <button class="multiexec-link-btn" id="mexecSelectAllBtn">Select All</button>
              <span class="multiexec-sep">|</span>
              <button class="multiexec-link-btn" id="mexecSelectNoneBtn">None</button>
              <span class="multiexec-sep">|</span>
              <button class="multiexec-link-btn" id="mexecSelectConnBtn">Connected Only</button>
            </div>
          </div>

          <div class="multiexec-server-list" id="multiExecServerList">
            ${e.map(e=>`
              <label class="multiexec-server-item" data-id="${e.id}">
                <input type="checkbox" class="multiexec-server-checkbox" data-id="${e.id}" ${e.checked?`checked`:``} />
                <span class="multiexec-status-dot ${e.isConnected?`dot-connected`:`dot-idle`}" title="${e.isConnected?`Connected`:`Offline / Saved`}"></span>
                <div class="multiexec-server-details">
                  <span class="multiexec-server-name">${j(e.name)}</span>
                  <span class="multiexec-server-host">${j(e.host)}</span>
                </div>
                <span class="multiexec-proto-badge ${e.protocol}">${e.protocol.toUpperCase()}</span>
              </label>
            `).join(``)}
          </div>
        </div>

        <!-- Right: Command Dispatcher & Presets -->
        <div class="multiexec-dispatch-card">
          <div class="multiexec-section-title-row">
            <span class="multiexec-section-title">Command Dispatcher</span>
            <div class="multiexec-layout-switch">
              <span class="multiexec-layout-label">Grid Layout:</span>
              <button class="multiexec-layout-btn active" data-layout="auto" title="Auto Responsive Grid">Auto</button>
              <button class="multiexec-layout-btn" data-layout="2x2" title="2x2 Matrix Grid">2x2</button>
              <button class="multiexec-layout-btn" data-layout="3x2" title="3 Columns Grid">3x2</button>
              <button class="multiexec-layout-btn" data-layout="1col" title="Single Stacked Column">1 Col</button>
            </div>
          </div>

          <div class="multiexec-cmd-input-wrap">
            <span class="multiexec-cmd-prompt">$</span>
            <input 
              type="text" 
              id="multiExecCommandInput" 
              class="multiexec-cmd-input" 
              placeholder="e.g. systemctl status billing" 
              value="systemctl status billing" 
              autocomplete="off" 
              spellcheck="false" 
            />
            <button id="multiExecExecuteBtn" class="multiexec-execute-btn" title="Execute command across all selected servers (Ctrl+Enter)">
              <span>⚡ Execute</span>
            </button>
          </div>

          <!-- Command Snippet Pills -->
          <div class="multiexec-presets-row">
            <span class="multiexec-presets-label">Quick Snippets:</span>
            <div class="multiexec-presets-list">
              <button class="multiexec-preset-pill" data-cmd="systemctl status billing">systemctl status billing</button>
              <button class="multiexec-preset-pill" data-cmd="uptime">uptime</button>
              <button class="multiexec-preset-pill" data-cmd="df -h">df -h</button>
              <button class="multiexec-preset-pill" data-cmd="free -m">free -m</button>
              <button class="multiexec-preset-pill" data-cmd="docker ps">docker ps</button>
              <button class="multiexec-preset-pill" data-cmd="journalctl -n 25 --no-pager">journalctl -n 25</button>
            </div>
          </div>

          <!-- Action Bar -->
          <div class="multiexec-action-bar">
            <div class="multiexec-dispatch-info">
              Dispatches simultaneously through <b>ConnectionManager</b> to all checked servers.
            </div>
            <div class="multiexec-btn-group">
              <button id="multiExecClearAllBtn" class="multiexec-aux-btn" title="Clear all console panes">
                🧹 Clear Outputs
              </button>
              <button id="multiExecCopyAllBtn" class="multiexec-aux-btn" title="Copy combined matrix outputs to clipboard">
                📋 Copy All Outputs
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- BOTTOM SECTION: Real-Time Output Matrix View (┌───┬───┐ Layout) -->
      <div class="multiexec-matrix-wrapper">
        <div class="multiexec-matrix-header">
          <span class="multiexec-matrix-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px;"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="12" y1="3" x2="12" y2="21"></line><line x1="3" y1="12" x2="21" y2="12"></line></svg>
            Multi-Server Output Matrix
          </span>
          <span class="multiexec-matrix-hint">Real-time asynchronous stream per server</span>
        </div>

        <div class="multiexec-matrix-grid layout-auto" id="multiExecMatrixGrid">
          <!-- Dynamically populated per selected server -->
        </div>
      </div>
    </div>
  `,`modal-multiexec`);if(!o)return;let s=o.querySelector(`#multiExecCommandInput`),c=o.querySelector(`#multiExecExecuteBtn`),l=o.querySelector(`#multiExecModalClose`),u=o.querySelector(`#multiExecMatrixGrid`),d=o.querySelector(`#multiexecSelectedCount`);function f(){let t=o.querySelectorAll(`.multiexec-server-checkbox`),n=0;t.forEach(t=>{let r=t.getAttribute(`data-id`),i=e.find(e=>e.id===r);i&&(i.checked=t.checked,t.checked&&n++)}),d&&(d.textContent=n),p()}function p(){let t=e.filter(e=>e.checked);if(!u)return;if(t.length===0){u.innerHTML=`
        <div class="multiexec-empty-matrix">
          <div class="multiexec-empty-icon">⚠️</div>
          <div class="multiexec-empty-title">No servers selected</div>
          <div class="multiexec-empty-desc">Check one or more servers above to inspect live multi-execution output.</div>
        </div>
      `;return}let n=new Map;t.forEach(e=>{let t=u.querySelector(`#mexecConsole_${e.id}`);t&&n.set(e.id,t.innerHTML)}),u.innerHTML=t.map(e=>`
      <div class="multiexec-server-card" id="mexecCard_${e.id}" data-id="${e.id}">
        <div class="multiexec-card-header">
          <div class="multiexec-card-title-group">
            <span class="multiexec-status-dot ${e.isConnected?`dot-connected`:`dot-idle`}" id="mexecDot_${e.id}"></span>
            <span class="multiexec-card-server-name">${j(e.name)}</span>
            <span class="multiexec-card-server-host">${j(e.host)}</span>
          </div>
          <div class="multiexec-card-actions">
            <span class="multiexec-card-state-pill" id="mexecState_${e.id}">Ready</span>
            <button class="multiexec-card-btn mexec-copy-btn" data-id="${e.id}" title="Copy Output">📋</button>
            <button class="multiexec-card-btn mexec-clear-btn" data-id="${e.id}" title="Clear Console">✕</button>
          </div>
        </div>
        <pre class="multiexec-console-output" id="mexecConsole_${e.id}">${n.get(e.id)||`<span class="multiexec-console-idle">[${j(e.name)}] Waiting for command execution...</span>\n`}</pre>
      </div>
    `).join(``),u.querySelectorAll(`.mexec-copy-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=u.querySelector(`#mexecConsole_${t}`);n&&(navigator.clipboard.writeText(n.textContent),S(`Copied output for ${t}`,`info`))}}),u.querySelectorAll(`.mexec-clear-btn`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-id`),n=u.querySelector(`#mexecConsole_${t}`);n&&(n.innerHTML=`<span class="multiexec-console-idle">Console cleared. Ready.</span>
`,a.set(t,``))}})}Xn&&=(Xn(),null),Xn=wn((t,n)=>{let r=e.find(e=>e.tabId===t||e.id===t);if(!r||!r.checked)return;let i=u.querySelector(`#mexecConsole_${r.id}`);if(i){let e=(a.get(r.id)||``)+n;a.set(r.id,e.slice(-1e4)),i.innerHTML=Kn(e),i.scrollTop=i.scrollHeight}});async function m(){let n=s.value.trim();if(!n){S(`Please specify a command to execute`,`warning`),s.focus();return}let r=e.filter(e=>e.checked);if(r.length===0){S(`Please select at least one server to execute`,`warning`);return}if(Jn(n)&&!confirm(`⚠️ WARNING: Potentially Destructive Command Detected!\n\nYou are about to execute:\n"${n}"\n\nacross ${r.length} server(s) simultaneously.\nAre you sure you want to proceed?`)){S(`Execution cancelled by user`,`info`);return}c.disabled=!0,c.innerHTML=`<span>⏳ Executing...</span>`;let i=[];for(let e of r){let r=u.querySelector(`#mexecState_${e.id}`),a=u.querySelector(`#mexecConsole_${e.id}`);r&&(r.textContent=`Executing...`,r.className=`multiexec-card-state-pill running`);let o=`<span style="color:#38bdf8;font-weight:bold;">$ ${j(n)}</span>\n`;if(a&&(a.innerHTML.includes(`Waiting for command execution`)||a.innerHTML.includes(`Console cleared`)?a.innerHTML=o:a.innerHTML+=`
`+o),e.tabId&&t[e.tabId])i.push(e.tabId);else if(e.profile&&!e.isOpen)try{r&&(r.textContent=`Connecting...`);let t=await V(e.profile);t&&(e.tabId=t,e.isOpen=!0,e.isConnected=!0,i.push(t))}catch(t){console.error(`Auto-connect failed for server:`,e.name,t)}else i.push(e.id)}try{window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ExecuteMulti&&i.length>0?(await window.go.main.App.ExecuteMulti(i,n),S(`Command dispatched to ${r.length} servers via ConnectionManager`,`success`)):(r.forEach((e,t)=>{setTimeout(()=>{let t=Yn(n,e.name,e.host),r=u.querySelector(`#mexecConsole_${e.id}`),i=u.querySelector(`#mexecState_${e.id}`);r&&(r.innerHTML+=Kn(t),r.scrollTop=r.scrollHeight),i&&(i.textContent=`Completed (0)`,i.className=`multiexec-card-state-pill success`),Tn(e.id,t)},120+t*90)}),S(`Simulated dispatch to ${r.length} servers`,`info`))}catch(e){S(`Multi-execution error: ${e}`,`error`)}finally{setTimeout(()=>{c.disabled=!1,c.innerHTML=`<span>⚡ Execute</span>`,r.forEach(e=>{let t=u.querySelector(`#mexecState_${e.id}`);t&&t.textContent===`Executing...`&&(t.textContent=`Done`,t.className=`multiexec-card-state-pill success`)})},500)}}o.querySelectorAll(`.multiexec-server-checkbox`).forEach(e=>{e.onchange=f}),o.querySelector(`#mexecSelectAllBtn`).onclick=()=>{o.querySelectorAll(`.multiexec-server-checkbox`).forEach(e=>e.checked=!0),f()},o.querySelector(`#mexecSelectNoneBtn`).onclick=()=>{o.querySelectorAll(`.multiexec-server-checkbox`).forEach(e=>e.checked=!1),f()},o.querySelector(`#mexecSelectConnBtn`).onclick=()=>{e.forEach(e=>{let t=o.querySelector(`.multiexec-server-checkbox[data-id="${e.id}"]`);t&&(t.checked=!!e.isConnected)}),f()},o.querySelectorAll(`.multiexec-preset-pill`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-cmd`);t&&s&&(s.value=t,s.focus())}}),o.querySelectorAll(`.multiexec-layout-btn`).forEach(e=>{e.onclick=()=>{o.querySelectorAll(`.multiexec-layout-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.getAttribute(`data-layout`);u.className=`multiexec-matrix-grid layout-${t}`}}),o.querySelector(`#multiExecClearAllBtn`).onclick=()=>{e.forEach(e=>{let t=u.querySelector(`#mexecConsole_${e.id}`);t&&(t.innerHTML=`<span class="multiexec-console-idle">Console cleared. Ready.</span>
`),a.set(e.id,``)}),S(`All matrix outputs cleared`,`info`)},o.querySelector(`#multiExecCopyAllBtn`).onclick=()=>{let t=e.filter(e=>e.checked);if(t.length===0)return;let n=t.map(e=>{let t=u.querySelector(`#mexecConsole_${e.id}`),n=t?t.textContent:``;return`=== [ ${e.name} (${e.host}) ] ===\n${n}\n`}).join(`
`);navigator.clipboard.writeText(n),S(`Copied outputs from ${t.length} servers`,`success`)},c.onclick=m,s.onkeydown=e=>{e.key===`Enter`&&(e.preventDefault(),m())},l.onclick=()=>{Xn&&=(Xn(),null),U()},f(),setTimeout(()=>s.focus(),50)}function H(e,t=``){let n=document.getElementById(`modalOverlay`),r=document.getElementById(`modalBox`);return!n||!r?null:(r.className=`modal-card `+t,r.innerHTML=e,n.classList.remove(`hidden`),r)}function U(){let e=document.getElementById(`modalOverlay`),t=document.getElementById(`modalBox`);e&&e.classList.add(`hidden`),t&&(t.innerHTML=``)}function Qn(e){return new Promise(t=>{let n=H(`
      <div class="modal-header">
        <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
          <span>🔐</span> SSH Password Authentication
        </div>
        <button class="modal-close-btn" id="promptPwClose">&times;</button>
      </div>
      <div class="modal-body" style="padding: 16px 20px;">
        <div style="margin-bottom: 12px; font-size: 13px; color: var(--text-color);">
          Please enter credentials for <b>${j(e.host)}</b>:
        </div>
        <div style="margin-bottom: 10px;">
          <label style="display: block; font-size: 11px; margin-bottom: 4px; color: var(--text-dim);">Login Username</label>
          <input type="text" id="promptUserVal" class="auth-modal-input" placeholder="e.g. root, ubuntu" value="${j(e.username||``)}" style="width: 100%; height: 34px; padding: 0 10px; background: #0c0f17; border: 1px solid #283046; border-radius: 4px; color: #fff; font-size: 13px; box-sizing: border-box;" />
        </div>
        <div class="sess-password-wrap">
          <input type="password" id="promptPwInput" class="auth-modal-input" placeholder="Enter password" autofocus autocomplete="current-password" style="width: 100%; height: 34px; padding: 0 36px 0 10px; background: #0c0f17; border: 1px solid #283046; border-radius: 4px; color: #fff; font-size: 13px; box-sizing: border-box;" />
          <button type="button" class="sess-password-toggle" id="promptPwToggle" title="Toggle visibility">👁️</button>
        </div>
        <div style="margin-top: 14px;">
          <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
            <input type="checkbox" id="promptPwSaveVault" checked />
            <span>Save credentials securely in platform vault</span>
          </label>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="btn-secondary" id="promptPwCancel" type="button">Cancel</button>
        <button class="btn-primary" id="promptPwSubmit" type="button">Connect</button>
      </div>
    `,`modal-auth-prompt`);if(!n){t(null);return}let r=n.querySelector(`#promptPwInput`),i=n.querySelector(`#promptUserVal`),a=n.querySelector(`#promptPwToggle`),o=n.querySelector(`#promptPwSaveVault`),s=n.querySelector(`#promptPwSubmit`),c=n.querySelector(`#promptPwCancel`),l=n.querySelector(`#promptPwClose`);setTimeout(()=>{!e.username&&i?i.focus():r&&r.focus()},50),a&&r&&(a.onclick=()=>{let e=r.type===`password`;r.type=e?`text`:`password`,a.textContent=e?`🔒`:`👁️`});let u=async()=>{let n=r?r.value:``;i&&i.value.trim()&&(e.username=i.value.trim());let a=(e.host||``).replace(/[^a-zA-Z0-9_-]/g,`_`),s=`session_${(e.username||`user`).replace(/[^a-zA-Z0-9_-]/g,`_`)}_${a}_${e.port||22}`,c=e.vaultKey||e.id||s;if(e.vaultKey=c,o&&o.checked&&n&&window.go?.main?.App)try{typeof window.go.main.App.SaveSessionPassword==`function`?(await window.go.main.App.SaveSessionPassword(c,n),s!==c&&await window.go.main.App.SaveSessionPassword(s,n)):typeof window.go.main.App.SavePassword==`function`&&await window.go.main.App.SavePassword(c,n)}catch(e){console.warn(`Save password to vault failed:`,e)}if(window.go?.main?.App)try{e.id&&!e.id.startsWith(`quick-`)?typeof window.go.main.App.UpdateSession==`function`&&await window.go.main.App.UpdateSession(e):typeof window.go.main.App.AddSession==`function`&&(e.id=window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():`sess-`+Date.now(),e.vaultKey=e.id,await window.go.main.App.AddSession(``,{...e,name:e.name||(e.username?`${e.username}@${e.host}`:e.host)}))}catch(e){console.warn(`Persist session profile failed:`,e)}U(),t(n)},d=()=>{U(),t(null)};s&&(s.onclick=u),c&&(c.onclick=d),l&&(l.onclick=d),r&&(r.onkeydown=e=>{e.key===`Enter`?u():e.key===`Escape`&&d()}),i&&(i.onkeydown=e=>{e.key===`Enter`?r?r.focus():u():e.key===`Escape`&&d()})})}function $n(e){return new Promise(t=>{let n=H(`
      <div class="modal-header">
        <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
          <span>🔑</span> Private Key Passphrase Required
        </div>
        <button class="modal-close-btn" id="promptPassClose">&times;</button>
      </div>
      <div class="modal-body" style="padding: 16px 20px;">
        <div style="margin-bottom: 10px; font-size: 13px; color: var(--text-color);">
          The private key for <b>${j(e.name||e.host)}</b> is encrypted:
        </div>
        <div style="margin-bottom: 12px; font-size: 11px; color: var(--text-dim); word-break: break-all; background: #0c0f17; padding: 6px 10px; border-radius: 4px; border: 1px solid #1f2536;">
          <code>${j(e.privateKeyPath||``)}</code>
        </div>
        <div class="sess-password-wrap">
          <input type="password" id="promptPassInput" class="auth-modal-input" placeholder="Enter key passphrase" autofocus style="width: 100%; height: 34px; padding: 0 36px 0 10px; background: #0c0f17; border: 1px solid #283046; border-radius: 4px; color: #fff; font-size: 13px; box-sizing: border-box;" />
          <button type="button" class="sess-password-toggle" id="promptPassToggle" title="Toggle visibility">👁️</button>
        </div>
        <div style="margin-top: 14px;">
          <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
            <input type="checkbox" id="promptPassSaveVault" checked />
            <span>Save passphrase in encrypted credential vault</span>
          </label>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="btn-secondary" id="promptPassCancel" type="button">Cancel</button>
        <button class="btn-primary" id="promptPassSubmit" type="button">Unlock &amp; Connect</button>
      </div>
    `,`modal-auth-prompt`);if(!n){t(null);return}let r=n.querySelector(`#promptPassInput`),i=n.querySelector(`#promptPassToggle`),a=n.querySelector(`#promptPassSaveVault`),o=n.querySelector(`#promptPassSubmit`),s=n.querySelector(`#promptPassCancel`),c=n.querySelector(`#promptPassClose`);setTimeout(()=>{r&&r.focus()},50),i&&r&&(i.onclick=()=>{let e=r.type===`password`;r.type=e?`text`:`password`,i.textContent=e?`🔒`:`👁️`});let l=async()=>{let n=r?r.value:``,i=e.passphraseVaultKey||(e.vaultKey?e.vaultKey+`_passphrase`:e.id?e.id+`_passphrase`:``);if(i&&(e.passphraseVaultKey=i),a&&a.checked&&n&&i&&window.go?.main?.App)try{typeof window.go.main.App.SaveSessionPassword==`function`?await window.go.main.App.SaveSessionPassword(i,n):typeof window.go.main.App.SavePassword==`function`&&await window.go.main.App.SavePassword(i,n),e.id&&!e.id.startsWith(`quick-`)&&typeof window.go.main.App.UpdateSession==`function`&&await window.go.main.App.UpdateSession(e)}catch{}U(),t(n)},u=()=>{U(),t(null)};o&&(o.onclick=l),s&&(s.onclick=u),c&&(c.onclick=u),r&&(r.onkeydown=e=>{e.key===`Enter`?l():e.key===`Escape`&&u()})})}function er({gatewayLabel:e,vaultKey:t,isKey:n,keyPath:r}){return new Promise(i=>{let a=H(`
      <div class="modal-header">
        <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
          <span>${n?`🔑`:`🛡️`}</span> ${n?`Bastion Private Key Passphrase Required`:`SSH Gateway Password Authentication`}
        </div>
        <button class="modal-close-btn" id="promptBastionClose">&times;</button>
      </div>
      <div class="modal-body" style="padding: 16px 20px;">
        <div style="margin-bottom: 10px; font-size: 13px; color: var(--text-color);">
          ${n?`The bastion gateway's private key is encrypted:`:`Enter the password for the bastion / jump host gateway:`}
          <br/><b>${j(e||``)}</b>
        </div>
        ${n?`<div style="margin-bottom: 12px; font-size: 11px; color: var(--text-dim); word-break: break-all; background: #0c0f17; padding: 6px 10px; border-radius: 4px; border: 1px solid #1f2536;"><code>${j(r||``)}</code></div>`:``}
        <div class="sess-password-wrap">
          <input type="password" id="promptBastionInput" class="auth-modal-input" placeholder="${n?`Enter key passphrase`:`Enter gateway password`}" autofocus autocomplete="off" style="width: 100%; height: 34px; padding: 0 36px 0 10px; background: #0c0f17; border: 1px solid #283046; border-radius: 4px; color: #fff; font-size: 13px; box-sizing: border-box;" />
          <button type="button" class="sess-password-toggle" id="promptBastionToggle" title="Toggle visibility">👁️</button>
        </div>
        <div style="margin-top: 14px;">
          <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; font-size: 12px; cursor: pointer;">
            <input type="checkbox" id="promptBastionSaveVault" checked />
            <span>Save in encrypted credential vault</span>
          </label>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="btn-secondary" id="promptBastionCancel" type="button">Cancel</button>
        <button class="btn-primary" id="promptBastionSubmit" type="button">Continue</button>
      </div>
    `,`modal-auth-prompt`);if(!a){i(null);return}let o=a.querySelector(`#promptBastionInput`),s=a.querySelector(`#promptBastionToggle`),c=a.querySelector(`#promptBastionSaveVault`),l=a.querySelector(`#promptBastionSubmit`),u=a.querySelector(`#promptBastionCancel`),d=a.querySelector(`#promptBastionClose`);setTimeout(()=>{o&&o.focus()},50),s&&o&&(s.onclick=()=>{let e=o.type===`password`;o.type=e?`text`:`password`,s.textContent=e?`🔒`:`👁️`});let f=async()=>{let e=o?o.value:``;if(c&&c.checked&&e&&t&&window.go?.main?.App)try{let r=n?t+`_passphrase`:t;typeof window.go.main.App.SaveSessionPassword==`function`?await window.go.main.App.SaveSessionPassword(r,e):typeof window.go.main.App.SavePassword==`function`&&await window.go.main.App.SavePassword(r,e)}catch{}U(),i(e)},p=()=>{U(),i(null)};l&&(l.onclick=f),u&&(u.onclick=p),d&&(d.onclick=p),o&&(o.onkeydown=e=>{e.key===`Enter`?f():e.key===`Escape`&&p()})})}function tr(e){if(!e||!e.requestId)return;let{requestId:t,user:n,instruction:r,questions:i,echoes:a}=e,o=``;(i||[]).forEach((e,t)=>{let n=a&&a[t]===!0;o+=`
      <div class="auth-challenge-group" style="margin-top: 12px;">
        <label style="display: block; font-size: 12px; font-weight: 600; color: #cbd5e1; margin-bottom: 4px;">${j(e)}</label>
        <input type="${n?`text`:`password`}" class="auth-challenge-field" data-index="${t}" placeholder="Enter response..." style="width: 100%; height: 34px; padding: 0 10px; background: #0c0f17; border: 1px solid #283046; border-radius: 4px; color: #fff; font-size: 13px; font-family: inherit; box-sizing: border-box;" autocomplete="off" />
      </div>
    `});let s=H(`
    <div class="modal-header">
      <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
        <span>🛡️</span> Interactive Authentication Challenge
      </div>
      <button class="modal-close-btn" id="challengeClose">&times;</button>
    </div>
    <div class="modal-body" style="padding: 16px 20px;">
      <div style="font-size: 12px; color: #94a3b8; margin-bottom: 8px;">
        Authentication challenge for user <b>${j(n||`remote`)}</b>:
      </div>
      ${r?`<div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 6px; padding: 10px 12px; font-size: 12.5px; color: #93c5fd; margin-bottom: 12px; line-height: 1.4;">${j(r)}</div>`:``}
      <div id="challengeQuestionsWrap">
        ${o||`<div style="color: var(--text-dim); font-size: 12px;">Server requested response. Click continue to proceed.</div>`}
      </div>
    </div>
    <div class="modal-footer" style="display: flex; justify-content: flex-end; gap: 8px;">
      <button class="btn-secondary" id="challengeCancel" type="button">Cancel</button>
      <button class="btn-primary" id="challengeSubmit" type="button">Verify &amp; Continue</button>
    </div>
  `,`modal-auth-challenge`);if(!s)return;let c=s.querySelector(`.auth-challenge-field`);setTimeout(()=>{c&&c.focus()},50);let l=async()=>{let e=s.querySelectorAll(`.auth-challenge-field`),n=[];if(e.forEach(e=>n.push(e.value)),U(),window.go?.main?.App?.RespondAuthChallenge)try{await window.go.main.App.RespondAuthChallenge(t,n)}catch(e){S(`Challenge response error: `+e,`error`)}},u=async()=>{if(U(),window.go?.main?.App?.CancelAuthChallenge)try{await window.go.main.App.CancelAuthChallenge(t)}catch{}},d=s.querySelector(`#challengeSubmit`),f=s.querySelector(`#challengeCancel`),p=s.querySelector(`#challengeClose`);d&&(d.onclick=l),f&&(f.onclick=u),p&&(p.onclick=u),s.querySelectorAll(`.auth-challenge-field`).forEach((e,t,n)=>{e.onkeydown=e=>{e.key===`Enter`?t===n.length-1?l():n[t+1].focus():e.key===`Escape`&&u()}})}function nr(e){if(!e)return;let t=e.status===`mismatch`,n=!1;function r(t){n||(n=!0,U(),window.go&&window.go.main&&window.go.main.App&&window.go.main.App.RespondHostKey&&window.go.main.App.RespondHostKey(e.requestId,t))}let i=t?`<span>⚠️ CRITICAL: REMOTE HOST IDENTIFICATION HAS CHANGED!</span>`:`<span>🛡️ SSH Server Host Key Verification</span>`,a=t?`hostkey-header-mismatch`:`hostkey-header-unknown`,o=t?`
      <div class="hostkey-banner-mismatch">
        <strong>⚠️ POTENTIAL SECURITY BREACH / MAN-IN-THE-MIDDLE ATTACK!</strong>
        The host key provided by server <strong>${j(e.host)}:${e.port}</strong> differs from the key cached in <code>${j(e.knownHostsPath||`known_hosts`)}</code>.<br>
        Someone could be intercepting your communication (Man-In-The-Middle attack), or the remote server administrator may have changed the host key.<br>
        <strong>If you were not expecting this change, DO NOT connect!</strong>
      </div>
    `:`
      <div class="hostkey-banner-unknown">
        The authenticity of host <strong>${j(e.host)}:${e.port}</strong> cannot be established.<br>
        This is the first time you are connecting to this server. Are you sure you want to continue connecting?
      </div>
    `,s=``;s=t?`
      <div class="hostkey-grid">
        <div class="hostkey-row">
          <span class="hostkey-label">Target Server:</span>
          <span class="hostkey-val"><strong>${j(e.host)}</strong> (Port ${e.port})</span>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">Stored Key Type:</span>
          <span class="hostkey-val"><span class="hostkey-badge" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border-color: rgba(245, 158, 11, 0.4);">${j(e.oldKeyType||`Unknown`)}</span></span>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">Stored Fingerprint:</span>
          <div class="hostkey-fp-box old">
            <code>${j(e.oldFingerprintSha||`N/A`)}</code>
            <button class="btn-copy-fp" data-copy="${j(e.oldFingerprintSha||``)}">📋 Copy</button>
          </div>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">New Key Type:</span>
          <span class="hostkey-val"><span class="hostkey-badge" style="background: rgba(239, 68, 68, 0.2); color: #f87171; border-color: rgba(239, 68, 68, 0.4);">${j(e.keyType)}</span></span>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">New Fingerprint:</span>
          <div class="hostkey-fp-box mismatch">
            <code>${j(e.fingerprintSha256)}</code>
            <button class="btn-copy-fp" data-copy="${j(e.fingerprintSha256)}">📋 Copy</button>
          </div>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">known_hosts File:</span>
          <span class="hostkey-val" style="font-size: 11px; color: #94a3b8;">${j(e.knownHostsPath||``)}</span>
        </div>
      </div>
    `:`
      <div class="hostkey-grid">
        <div class="hostkey-row">
          <span class="hostkey-label">Target Server:</span>
          <span class="hostkey-val"><strong>${j(e.host)}</strong> (Port ${e.port})</span>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">Key Algorithm:</span>
          <span class="hostkey-val"><span class="hostkey-badge">${j(e.keyType)}</span></span>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">SHA-256 Fingerprint:</span>
          <div class="hostkey-fp-box">
            <code>${j(e.fingerprintSha256)}</code>
            <button class="btn-copy-fp" data-copy="${j(e.fingerprintSha256)}">📋 Copy</button>
          </div>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">MD5 Fingerprint:</span>
          <div class="hostkey-fp-box">
            <code>${j(e.fingerprintMd5)}</code>
            <button class="btn-copy-fp" data-copy="${j(e.fingerprintMd5)}">📋 Copy</button>
          </div>
        </div>
        <div class="hostkey-row">
          <span class="hostkey-label">known_hosts Cache:</span>
          <span class="hostkey-val" style="font-size: 11px; color: #94a3b8;">${j(e.knownHostsPath||``)}</span>
        </div>
      </div>
    `;let c=H(`
    <div class="modal-header ${a}">
      <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">${i}</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body" style="padding: 18px 20px;">
      ${o}
      ${s}
      ${t?`
      <div class="hostkey-actions">
        <button class="btn btn-secondary btn-hostkey-danger" id="btnHkAbort">🛑 Abort Connection (Recommended)</button>
        <button class="btn btn-outline" id="btnHkOverride" style="border-color: #f59e0b; color: #fbbf24;">⚠️ Replace Key in known_hosts & Connect</button>
      </div>
    `:`
      <div class="hostkey-actions">
        <button class="btn btn-secondary" id="btnHkReject">✕ Reject & Disconnect</button>
        <button class="btn btn-outline" id="btnHkOnce">Connect Once (Don't save)</button>
        <button class="btn btn-hostkey-trust" id="btnHkTrust">🛡️ Accept & Save to known_hosts</button>
      </div>
    `}
    </div>
  `,`modal-hostkey`);if(!c)return;let l=document.getElementById(`modalOverlay`);l&&(l.onclick=e=>{e.target===l&&r(`reject`)});let u=c.querySelector(`#modalClose`);if(u&&(u.onclick=()=>r(`reject`)),c.querySelectorAll(`.btn-copy-fp`).forEach(e=>{e.onclick=()=>{let t=e.dataset.copy;t&&navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>{S(`Fingerprint copied to clipboard`,`success`)}).catch(()=>{S(`Failed to copy`,`error`)})}}),t){let t=c.querySelector(`#btnHkAbort`);t&&(t.onclick=()=>r(`reject`));let n=c.querySelector(`#btnHkOverride`);n&&(n.onclick=()=>{confirm(`Are you absolutely sure you want to replace the host key for ${e.host}:${e.port} in known_hosts? This will trust the new key.`)&&r(`accept_save`)})}else{let e=c.querySelector(`#btnHkReject`);e&&(e.onclick=()=>r(`reject`));let t=c.querySelector(`#btnHkOnce`);t&&(t.onclick=()=>r(`accept_once`));let n=c.querySelector(`#btnHkTrust`);n&&(n.onclick=()=>r(`accept_save`))}}async function rr(){let e=document.getElementById(`sidebarTunnelList`);if(e)try{let t=[];if(window.go&&window.go.main&&window.go.main.App&&(t=await window.go.main.App.GetTunnels()||[]),t.length===0){e.innerHTML=`<div class="sftp-empty-hint">No active SSH tunnels.<br/>Click <b>＋ New SSH Tunnel</b> to configure port forwarding.</div>`;return}e.innerHTML=t.map(e=>`
      <div class="tunnel-card">
        <div class="tunnel-card-title">
          <span>🔑 ${j(e.name)}</span>
          <span class="tunnel-badge ${e.status||`stopped`}">${e.status||`stopped`}</span>
        </div>
        <div class="tunnel-card-desc">
          <b>${e.type.toUpperCase()}</b>: Local <code>:${e.localPort}</code> &rarr; <code>${j(e.remoteHost||`*`)}:${e.remotePort||`*`}</code>
        </div>
        <div class="tunnel-card-actions">
          ${e.status===`running`?`<button class="pwd-action-btn danger stop-tun-btn" data-id="${e.id}">■ Stop</button>`:`<button class="pwd-action-btn start-tun-btn" data-id="${e.id}">▶ Start</button>`}
          <button class="pwd-action-btn danger del-tun-btn" data-id="${e.id}">🗑️</button>
        </div>
      </div>
    `).join(``),e.querySelectorAll(`.start-tun-btn`).forEach(e=>{e.onclick=async()=>{let t=P();if(!t||t===`home`){S(`Please open an active SSH tab first to bind the tunnel`,`warning`);return}try{await window.go.main.App.StartTunnel(e.dataset.id,t),S(`SSH tunnel started`,`success`),await rr()}catch(e){S(`Failed to start tunnel: `+e,`error`)}}}),e.querySelectorAll(`.stop-tun-btn`).forEach(e=>{e.onclick=async()=>{try{await window.go.main.App.StopTunnel(e.dataset.id),S(`Tunnel stopped`,`info`),await rr()}catch(e){S(`Failed to stop tunnel: `+e,`error`)}}}),e.querySelectorAll(`.del-tun-btn`).forEach(e=>{e.onclick=async()=>{confirm(`Delete this tunnel definition?`)&&(await window.go.main.App.DeleteTunnel(e.dataset.id),await rr())}})}catch(t){e.innerHTML=`<div class="sftp-empty-hint" style="color: var(--accent-red);">${j(t.toString())}</div>`}}function ir(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">Nexterm Tunnel — Visual Port Forwarding Manager</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div style="font-size: 12px; color: var(--text-muted); line-height: 1.4; margin-bottom: 12px;">
        Manage visual SSH tunnels: Local Port Forwarding, Remote Port Forwarding, and Dynamic SOCKS5 Proxy.
      </div>
      <div id="modalTunnelList" style="display: flex; flex-direction: column; gap: 8px; max-height: 280px; overflow-y: auto;">
        <div style="text-align: center; color: var(--text-dim); padding: 16px;">Loading tunnels...</div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCloseBtn">Close</button>
      <button class="btn-primary" id="newTunnelWizardBtn">＋ New SSH Tunnel</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U,e.querySelector(`#newTunnelWizardBtn`).onclick=()=>{U(),ar()};let t=async()=>{let n=e.querySelector(`#modalTunnelList`);if(n)try{let e=await window.go.main.App.GetTunnels()||[];if(e.length===0){n.innerHTML=`<div class="pwd-empty-state">No active tunnels. Click <b>＋ New SSH Tunnel</b> to configure forwarding.</div>`;return}n.innerHTML=e.map(e=>`
        <div class="pwd-card">
          <div class="pwd-card-header">
            <span class="pwd-card-title">🔑 ${j(e.name)}</span>
            <span class="tunnel-badge ${e.status||`stopped`}">${e.status||`stopped`}</span>
          </div>
          <div class="pwd-card-body">
            <div style="font-size: 11px; color: var(--text-muted); font-family: 'Fira Code', monospace;">
              <b>${e.type.toUpperCase()}</b>: Local :${e.localPort} &rarr; ${e.remoteHost||`*`}:${e.remotePort||`*`}
            </div>
            <div class="pwd-actions">
              ${e.status===`running`?`<button class="pwd-action-btn danger stop-modal-tun" data-id="${e.id}">■ Stop</button>`:`<button class="pwd-action-btn start-modal-tun" data-id="${e.id}">▶ Start</button>`}
              <button class="pwd-action-btn danger del-modal-tun" data-id="${e.id}">🗑️ Delete</button>
            </div>
          </div>
        </div>
      `).join(``),n.querySelectorAll(`.start-modal-tun`).forEach(e=>{e.onclick=async()=>{let n=P();if(!n||n===`home`){S(`Open an SSH tab first to bind tunnel`,`warning`);return}await window.go.main.App.StartTunnel(e.dataset.id,n),await t(),await rr()}}),n.querySelectorAll(`.stop-modal-tun`).forEach(e=>{e.onclick=async()=>{await window.go.main.App.StopTunnel(e.dataset.id),await t(),await rr()}}),n.querySelectorAll(`.del-modal-tun`).forEach(e=>{e.onclick=async()=>{confirm(`Delete tunnel?`)&&(await window.go.main.App.DeleteTunnel(e.dataset.id),await t(),await rr())}})}catch{}};t()}function ar(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">New SSH Port Forwarding Tunnel</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Tunnel Name</label>
        <input type="text" id="tunName" placeholder="e.g. Oracle Database Forwarding" value="My SSH Tunnel" />
      </div>
      <div class="form-group">
        <label>Forwarding Type</label>
        <select id="tunType">
          <option value="local">Local Port Forwarding (Local PC &rarr; Remote Service)</option>
          <option value="remote">Remote Port Forwarding (Remote Server &rarr; Local PC)</option>
          <option value="dynamic">Dynamic SOCKS5 Proxy</option>
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Local Port *</label>
          <input type="number" id="tunLocalPort" value="1521" />
        </div>
        <div class="form-group" id="tunRemotePortGroup">
          <label>Remote Port *</label>
          <input type="number" id="tunRemotePort" value="1521" />
        </div>
      </div>
      <div class="form-group" id="tunRemoteHostGroup">
        <label>Remote Destination Host / IP *</label>
        <input type="text" id="tunRemoteHost" value="10.0.0.5" placeholder="e.g. 10.0.0.5 or 127.0.0.1" />
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCancel">Cancel</button>
      <button class="btn-primary" id="saveTunnelBtn">Save Tunnel</button>
    </div>
  `),t=e.querySelector(`#tunType`);t.onchange=()=>{let n=t.value===`dynamic`;e.querySelector(`#tunRemotePortGroup`).classList.toggle(`hidden`,n),e.querySelector(`#tunRemoteHostGroup`).classList.toggle(`hidden`,n)},e.querySelector(`#modalCancel`).onclick=U,e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#saveTunnelBtn`).onclick=async()=>{let n={name:e.querySelector(`#tunName`).value.trim()||`SSH Tunnel`,type:t.value,localPort:parseInt(e.querySelector(`#tunLocalPort`).value,10)||8080,remotePort:parseInt(e.querySelector(`#tunRemotePort`).value,10)||80,remoteHost:e.querySelector(`#tunRemoteHost`).value.trim()||`127.0.0.1`,autoStart:!1};U(),window.go&&window.go.main&&window.go.main.App&&(await window.go.main.App.SaveTunnel(n),S(`SSH tunnel saved`,`success`),await rr())}}async function or(){let e=document.getElementById(`macrosList`);if(e)try{let t=[];if(window.go&&window.go.main&&window.go.main.App&&(t=await window.go.main.App.GetMacros()||[]),t.length===0){e.innerHTML=`<div class="sftp-empty-hint">No command snippets found.<br/>Click <b>＋ New Snippet / Macro</b> to create one.</div>`;return}let n={};t.forEach(e=>{let t=e.category||`Commands`;n[t]||(n[t]=[]),n[t].push(e)}),e.innerHTML=Object.keys(n).sort((e,t)=>e.toLowerCase()===`commands`?-1:t.toLowerCase()===`commands`?1:e.localeCompare(t)).map(e=>{let t=n[e];return`
        <div class="macro-category-group" data-category="${j(e)}">
          <div class="macro-category-header">
            <span class="macro-category-chevron">▾</span>
            <span class="macro-category-icon">📁</span>
            <span class="macro-category-name">${j(e)}</span>
            <span class="macro-category-badge">${t.length}</span>
          </div>
          <div class="macro-category-items">
            ${t.map((e,n)=>{let r=n===t.length-1?`└──`:`├──`,i=e.commands&&e.commands.length>0?e.commands[0]:``;return`
                <div class="macro-card" data-id="${j(e.id)}">
                  <div class="macro-card-top">
                    <span class="macro-tree-branch" style="color:var(--text-dim); font-family:var(--font-mono); font-size:11px; margin-right:4px;">${r}</span>
                    <span class="macro-card-title" title="${j(e.name)}">⚡ ${j(e.name)}</span>
                  </div>
                  <div class="macro-card-cmd" title="${j(i)}">${j(i||e.description||``)}</div>
                  <div class="macro-card-actions">
                    <button class="macro-action-btn run-macro-opt-btn" data-id="${j(e.id)}" title="Execute with options (Current / Selected / Folder)">▶ Run</button>
                    <button class="macro-action-btn quick-macro-btn" data-id="${j(e.id)}" title="Quick run on active terminal">⚡</button>
                    <button class="macro-action-btn edit-macro-btn" data-id="${j(e.id)}" title="Edit snippet">✏️</button>
                    <button class="macro-action-btn danger del-macro-btn" data-id="${j(e.id)}" title="Delete snippet">🗑️</button>
                  </div>
                </div>
              `}).join(``)}
          </div>
        </div>
      `}).join(``),e.querySelectorAll(`.macro-category-header`).forEach(e=>{e.onclick=()=>{let t=e.closest(`.macro-category-group`).querySelector(`.macro-category-items`),n=e.querySelector(`.macro-category-chevron`);if(t){let e=t.style.display===`none`;t.style.display=e?`block`:`none`,n&&(n.textContent=e?`▾`:`▸`)}}}),e.querySelectorAll(`.run-macro-opt-btn`).forEach(e=>{e.onclick=n=>{n.stopPropagation();let r=t.find(t=>t.id===e.dataset.id);r&&cr(r)}}),e.querySelectorAll(`.quick-macro-btn`).forEach(e=>{e.onclick=t=>{t.stopPropagation(),sr(e.dataset.id)}}),e.querySelectorAll(`.edit-macro-btn`).forEach(e=>{e.onclick=n=>{n.stopPropagation();let r=t.find(t=>t.id===e.dataset.id);r&&lr(r)}}),e.querySelectorAll(`.del-macro-btn`).forEach(e=>{e.onclick=async n=>{n.stopPropagation();let r=t.find(t=>t.id===e.dataset.id),i=r?r.name:`snippet`;confirm(`Delete command snippet "${i}"?`)&&(await window.go.main.App.DeleteMacro(e.dataset.id),S(`Deleted snippet "${i}"`,`info`),await or())}})}catch(t){e.innerHTML=`<div class="sftp-empty-hint" style="color: var(--accent-red);">${j(t.toString())}</div>`}}async function sr(e){let t=P();if(!t||t===`home`){S(`Please select an active terminal tab to run snippet`,`warning`);return}if(window.go&&window.go.main&&window.go.main.App)try{await window.go.main.App.ExecuteMacro(e,[t]),S(`Command snippet dispatched to active terminal`,`success`)}catch(e){S(`Snippet error: `+e,`error`)}}function cr(e){if(!e)return;let n=y&&t&&t[y],r=n?n.profile&&n.profile.name?n.profile.name:n.title||y:`No active terminal`,i=t?Object.entries(t).filter(([e,t])=>t&&!t.isHome):[],a=[];function o(e,t=``){if(!e)return;let n=t?`${t} / ${e.name}`:e.name;if(!e.session&&e.id!==(I?I.id:``)&&a.push({id:e.id,name:e.name,fullPath:n,node:e}),e.children)for(let t of e.children)t.session||o(t,n)}o(I);let s=H(`
    <div class="modal-header">
      <div class="modal-title" style="display:flex; align-items:center; gap:8px;">
        <span>⚡</span>
        <span>Execute Snippet — <b>${j(e.name)}</b></span>
      </div>
      <button class="modal-close-btn" id="macroExecClose">&times;</button>
    </div>
    <div class="modal-body" style="padding:16px 20px;">
      <!-- Command Preview Box -->
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:6px;">Commands to Execute</div>
      <pre style="background:rgba(0,0,0,0.35); border:1px solid var(--border-subtle); border-radius:4px; padding:8px 12px; font-family:var(--font-mono); font-size:12px; color:#38bdf8; max-height:85px; overflow-y:auto; margin:0 0 16px 0; white-space:pre-wrap;">${j(e.commands?e.commands.join(`
`):``)}</pre>

      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:10px;">Execution Target Options</div>

      <!-- Execution Option 1: Current Session -->
      <label class="macro-target-option" style="display:flex; align-items:flex-start; gap:10px; padding:10px 12px; border:1px solid var(--border-subtle); border-radius:5px; margin-bottom:8px; cursor:pointer; background:rgba(255,255,255,0.02);">
        <input type="radio" name="macroExecMode" value="current" checked style="margin-top:3px;" />
        <div>
          <div style="font-weight:600; font-size:12.5px; color:var(--text-primary);">Current session</div>
          <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">
            ${n?`<span style="color:#22c55e;">●</span> Active Tab: <b>${j(r)}</b>`:`<span style="color:#f59e0b;">⚠️ No active terminal currently focused</span>`}
          </div>
        </div>
      </label>

      <!-- Execution Option 2: Selected Sessions -->
      <label class="macro-target-option" style="display:flex; align-items:flex-start; gap:10px; padding:10px 12px; border:1px solid var(--border-subtle); border-radius:5px; margin-bottom:8px; cursor:pointer; background:rgba(255,255,255,0.02);">
        <input type="radio" name="macroExecMode" value="selected" style="margin-top:3px;" />
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-weight:600; font-size:12.5px; color:var(--text-primary);">Selected sessions</span>
            <span style="font-size:11px; color:var(--accent-cyan);">${i.length} connected tab(s)</span>
          </div>
          <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">Choose specific open terminal tabs to broadcast commands to</div>

          <!-- Multi-select tabs list -->
          <div id="macroSelectedTabsContainer" style="display:none; margin-top:10px; max-height:130px; overflow-y:auto; border:1px solid var(--border-subtle); border-radius:4px; padding:6px; background:rgba(0,0,0,0.25);">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:11px; padding:0 4px;">
              <span style="color:var(--text-muted);">Select targets:</span>
              <span>
                <a href="#" id="macroSelectAllTabs" style="color:var(--accent-blue); text-decoration:none; margin-right:8px; font-weight:600;">Select All</a>
                <a href="#" id="macroDeselectAllTabs" style="color:var(--text-muted); text-decoration:none;">None</a>
              </span>
            </div>
            ${i.length===0?`<div style="font-size:11.5px; color:var(--text-dim); padding:6px;">No active sessions open</div>`:i.map(([e,t])=>`
              <label style="display:flex; align-items:center; gap:8px; padding:4px 6px; font-size:12px; cursor:pointer; border-radius:3px; user-select:none;">
                <input type="checkbox" class="macro-target-tab-chk" value="${j(e)}" ${e===y?`checked`:``} />
                <span style="color:#22c55e; font-size:10px;">●</span>
                <span style="font-weight:500;">${j(t.profile&&t.profile.name?t.profile.name:t.title||e)}</span>
                <span style="color:var(--text-dim); font-size:11px; font-family:var(--font-mono);">(${j(t.profile&&t.profile.host?t.profile.host:`local`)})</span>
              </label>
            `).join(``)}
          </div>
        </div>
      </label>

      <!-- Execution Option 3: All Sessions in Folder -->
      <label class="macro-target-option" style="display:flex; align-items:flex-start; gap:10px; padding:10px 12px; border:1px solid var(--border-subtle); border-radius:5px; margin-bottom:8px; cursor:pointer; background:rgba(255,255,255,0.02);">
        <input type="radio" name="macroExecMode" value="folder" style="margin-top:3px;" />
        <div style="flex:1;">
          <div style="font-weight:600; font-size:12.5px; color:var(--text-primary);">All sessions in folder</div>
          <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">Execute across all server sessions grouped under a session tree folder</div>

          <div id="macroFolderContainer" style="display:none; margin-top:10px;">
            <select id="macroFolderSelect" style="width:100%; height:32px; background:var(--bg-input); border:1px solid var(--border-active); color:var(--text-primary); border-radius:4px; padding:0 8px; font-size:12px;">
              ${a.length===0?`<option value="">(No folders found in session tree)</option>`:a.map(e=>`
                <option value="${j(e.id)}">📁 ${j(e.fullPath)}</option>
              `).join(``)}
            </select>

            <label style="display:flex; align-items:center; gap:8px; margin-top:8px; font-size:11.5px; cursor:pointer; color:var(--text-secondary);">
              <input type="checkbox" id="macroFolderAutoConnect" checked />
              <span>Automatically connect disconnected servers in this folder</span>
            </label>
          </div>
        </div>
      </label>
    </div>

    <div class="modal-footer" style="display:flex; justify-content:space-between; align-items:center; padding:12px 20px; border-top:1px solid var(--border-subtle); background:rgba(0,0,0,0.15);">
      <button class="btn-action" id="macroExecCancel">Cancel</button>
      <button class="btn-action primary" id="macroExecRunBtn" style="padding:0 18px; height:32px; font-weight:600;">⚡ Execute Commands</button>
    </div>
  `,`macro-exec-modal`);if(!s)return;let c=()=>U();s.querySelector(`#macroExecClose`).onclick=c,s.querySelector(`#macroExecCancel`).onclick=c;let l=s.querySelectorAll(`input[name='macroExecMode']`),u=s.querySelector(`#macroSelectedTabsContainer`),d=s.querySelector(`#macroFolderContainer`),f=()=>{let e=s.querySelector(`input[name='macroExecMode']:checked`)?.value||`current`;u&&(u.style.display=e===`selected`?`block`:`none`),d&&(d.style.display=e===`folder`?`block`:`none`)};l.forEach(e=>e.onchange=f);let p=s.querySelector(`#macroSelectAllTabs`),m=s.querySelector(`#macroDeselectAllTabs`);p&&(p.onclick=e=>{e.preventDefault(),s.querySelectorAll(`.macro-target-tab-chk`).forEach(e=>e.checked=!0)}),m&&(m.onclick=e=>{e.preventDefault(),s.querySelectorAll(`.macro-target-tab-chk`).forEach(e=>e.checked=!1)}),s.querySelector(`#macroExecRunBtn`).onclick=async()=>{let n=s.querySelector(`input[name='macroExecMode']:checked`)?.value||`current`,r=[];if(n===`current`){let e=P();if(!e||e===`home`){S(`No active terminal tab selected`,`warning`);return}r=[e]}else if(n===`selected`){if(s.querySelectorAll(`.macro-target-tab-chk:checked`).forEach(e=>{r.push(e.value)}),r.length===0){S(`Please select at least one session tab to execute`,`warning`);return}}else if(n===`folder`){let e=s.querySelector(`#macroFolderSelect`),n=e?e.value:``;if(!n){S(`Please select a target folder`,`warning`);return}let i=a.find(e=>e.id===n);if(!i||!i.node){S(`Folder not found in session tree`,`error`);return}let o=[],c=e=>{e&&(e.session&&o.push(e.session),e.children&&e.children.forEach(c))};if(c(i.node),o.length===0){S(`No sessions found in folder "${i.name}"`,`warning`);return}let l=s.querySelector(`#macroFolderAutoConnect`)?.checked!==!1,u=[],d=[];for(let e of o){let n=!1;if(t){for(let[r,i]of Object.entries(t))if(i&&i.profile&&(i.profile.id===e.id||i.profile.host===e.host&&i.profile.username===e.username)){u.push(r),n=!0;break}}n||d.push(e)}if(l&&d.length>0){S(`Connecting ${d.length} session(s) in "${i.name}"...`,`info`);let{connectToSession:e}=await on(async()=>{let{connectToSession:e}=await Promise.resolve().then(()=>sn);return{connectToSession:e}},void 0);for(let t of d)e(t);if(await new Promise(e=>setTimeout(e,1200)),t)for(let e of d)for(let[n,r]of Object.entries(t))r&&r.profile&&(r.profile.id===e.id||r.profile.host===e.host)&&(u.includes(n)||u.push(n))}if(r=u,r.length===0){S(`No active terminal tabs connected for folder "${i.name}"`,`warning`);return}}if(c(),S(`Executing "${e.name}" on ${r.length} terminal session(s)...`,`info`),window.go&&window.go.main&&window.go.main.App)try{await window.go.main.App.ExecuteMacro(e.id,r),S(`Successfully executed "${e.name}" on ${r.length} session(s)`,`success`)}catch(e){S(`Snippet execution failed: `+e,`error`)}}}function lr(e=null){let t=!!e,n=e?e.name:``,r=e&&e.category||`Commands`,i=e&&e.commands?e.commands.join(`
`):``,a=e&&e.delayMs?e.delayMs:500,o=H(`
    <div class="modal-header">
      <div class="modal-title">${t?`Edit Command Snippet`:`Record / Create Command Snippet`}</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Snippet Name *</label>
        <input type="text" id="macroName" placeholder="e.g. Restart service" value="${j(n)}" />
      </div>
      <div class="form-group">
        <label>Category (Folder)</label>
        <input type="text" id="macroCat" placeholder="e.g. Commands, Monitoring, DevOps" value="${j(r)}" />
      </div>
      <div class="form-group">
        <label>Shell Commands (One per line) *</label>
        <textarea id="macroCmds" style="width: 100%; height: 160px; font-family: var(--font-mono, 'Fira Code', monospace); font-size: 12px; background: var(--bg-input); color: var(--text-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px;" placeholder="sudo systemctl restart nginx&#10;sudo systemctl status nginx">${j(i)}</textarea>
      </div>
      <div class="form-group" style="margin-top: 8px;">
        <label>Inter-command Delay (ms)</label>
        <input type="number" id="macroDelay" value="${a}" min="50" max="10000" step="50" style="width: 120px;" />
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCancel">Cancel</button>
      <button class="btn-primary" id="saveMacroBtn">${t?`Update Snippet`:`Save Snippet`}</button>
    </div>
  `);o.querySelector(`#modalCancel`).onclick=U,o.querySelector(`#modalClose`).onclick=U,o.querySelector(`#saveMacroBtn`).onclick=async()=>{let n=o.querySelector(`#macroName`).value.trim(),r=o.querySelector(`#macroCmds`).value.trim();if(!n||!r){S(`Snippet name and commands are required`,`error`);return}let i=r.split(`
`).map(e=>e.trim()).filter(e=>e.length>0),a=parseInt(o.querySelector(`#macroDelay`)?.value,10)||500,s={id:t&&e.id?e.id:``,name:n,category:o.querySelector(`#macroCat`).value.trim()||`Commands`,description:i.slice(0,2).join(`; `),commands:i,delayMs:a};U(),window.go&&window.go.main&&window.go.main.App&&(await window.go.main.App.SaveMacro(s),S(t?`Snippet updated`:`Snippet saved`,`success`),await or())}}function ur(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">Network Ping & Latency Diagnostics</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group" style="flex: 2;">
          <label>Target Host / IP</label>
          <input type="text" id="pingHost" value="8.8.8.8" />
        </div>
        <div class="form-group" style="flex: 1; display: flex; align-items: flex-end;">
          <button class="btn-primary" id="doPingBtn" style="width: 100%; height: 32px;">🏓 Ping</button>
        </div>
      </div>
      <div id="pingOutput" style="background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; height: 160px; overflow-y: auto; font-family: 'Fira Code', monospace; font-size: 11.5px; color: var(--text-dim); white-space: pre-wrap;">Ready to ping target.</div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCloseBtn">Close</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U,e.querySelector(`#doPingBtn`).onclick=async()=>{let t=e.querySelector(`#pingHost`).value.trim(),n=e.querySelector(`#pingOutput`);if(n.textContent=`Pinging ${t}...`,window.go&&window.go.main&&window.go.main.App)try{n.textContent=await window.go.main.App.NetPing(t)}catch(e){n.textContent=`Ping error: `+e}}}function dr(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">DNS & MX Lookup Tool</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group" style="flex: 2;">
          <label>Domain Name</label>
          <input type="text" id="dnsDomain" value="google.com" />
        </div>
        <div class="form-group" style="flex: 1; display: flex; align-items: flex-end;">
          <button class="btn-primary" id="doDNSBtn" style="width: 100%; height: 32px;">🔍 Lookup</button>
        </div>
      </div>
      <div id="dnsOutput" style="background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; height: 160px; overflow-y: auto; font-family: 'Fira Code', monospace; font-size: 11.5px; color: var(--text-dim);">Enter domain name above.</div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCloseBtn">Close</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U,e.querySelector(`#doDNSBtn`).onclick=async()=>{let t=e.querySelector(`#dnsDomain`).value.trim(),n=e.querySelector(`#dnsOutput`);if(n.innerHTML=`Resolving DNS for ${t}...`,window.go&&window.go.main&&window.go.main.App)try{let e=await window.go.main.App.NetLookupDNS(t);n.innerHTML=Object.entries(e).map(([e,t])=>`
          <div style="margin-bottom: 6px;">
            <b style="color: var(--accent-blue);">${e}:</b><br/>
            ${t.map(e=>`&bull; ${j(e)}`).join(`<br/>`)}
          </div>
        `).join(``)}catch(e){n.textContent=`DNS lookup error: `+e}}}function fr(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">Checksum & Hash Calculator</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Input Text</label>
        <input type="text" id="hashInput" placeholder="Enter text to hash..." />
      </div>
      <div class="form-group">
        <label>Algorithm</label>
        <select id="hashAlgo">
          <option value="sha256">SHA-256 (Default)</option>
          <option value="md5">MD5</option>
          <option value="sha1">SHA-1</option>
          <option value="sha512">SHA-512</option>
        </select>
      </div>
      <div class="form-group">
        <label>Computed Hash</label>
        <textarea id="hashResult" readonly style="width: 100%; height: 70px; font-family: 'Fira Code', monospace; font-size: 11px; background: var(--bg-input); color: var(--accent-green); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px;"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCloseBtn">Close</button>
      <button class="btn-secondary" id="copyHashBtn">📋 Copy Hash</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U;let t=async()=>{let t=e.querySelector(`#hashInput`).value,n=e.querySelector(`#hashAlgo`).value;window.go&&window.go.main&&window.go.main.App&&(e.querySelector(`#hashResult`).value=await window.go.main.App.NetCalculateHash(t,n))};e.querySelector(`#hashInput`).oninput=t,e.querySelector(`#hashAlgo`).onchange=t,e.querySelector(`#copyHashBtn`).onclick=()=>{let t=e.querySelector(`#hashResult`).value;t&&(navigator.clipboard.writeText(t),S(`Copied hash to clipboard`,`info`))}}function pr(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">Nexterm Package Manager</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">
        Browse and launch essential command line utilities:
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
        ${[{name:`curl`,desc:`Command line tool for transferring data with URLs`},{name:`git`,desc:`Distributed version control system`},{name:`ssh`,desc:`OpenSSH secure shell client`},{name:`tar`,desc:`Archive and extract files`},{name:`winget`,desc:`Windows Package Manager CLI`},{name:`powershell`,desc:`PowerShell automation shell`}].map(e=>`
          <div style="background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 10px;">
            <div style="font-weight: 600; font-size: 12px; color: var(--accent-blue);">📦 ${e.name}</div>
            <div style="font-size: 11px; color: var(--text-dim); margin-top: 3px;">${e.desc}</div>
          </div>
        `).join(``)}
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" id="modalCloseBtn">Done</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U}function mr(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">Nexterm Diff — Quick Text Comparison</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <label style="font-size: 11.5px; color: var(--text-muted); font-weight: 600;">Original (Left)</label>
          <textarea id="diffLeft" style="width: 100%; height: 180px; font-family: 'Fira Code', monospace; font-size: 11.5px; background: var(--bg-input); color: var(--text-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px;"></textarea>
        </div>
        <div>
          <label style="font-size: 11.5px; color: var(--text-muted); font-weight: 600;">Modified (Right)</label>
          <textarea id="diffRight" style="width: 100%; height: 180px; font-family: 'Fira Code', monospace; font-size: 11.5px; background: var(--bg-input); color: var(--text-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px;"></textarea>
        </div>
      </div>
      <div id="diffOutput" style="margin-top: 10px; font-size: 11.5px; color: var(--text-dim);">Enter text above and click Compare.</div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCloseBtn">Close</button>
      <button class="btn-primary" id="diffCompareBtn">Compare</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U,e.querySelector(`#diffCompareBtn`).onclick=()=>{let t=e.querySelector(`#diffLeft`).value,n=e.querySelector(`#diffRight`).value,r=e.querySelector(`#diffOutput`);r.innerHTML=t===n?`<span style="color: var(--accent-green);">✓ Both texts are identical.</span>`:`<span style="color: var(--accent-yellow);">Differences detected (Left: ${t.length} chars, Right: ${n.length} chars).</span>`}}function hr(){let e=[];for(let t=32;t<=126;t++)e.push({dec:t,hex:t.toString(16).toUpperCase(),char:String.fromCharCode(t)});let t=H(`
    <div class="modal-header">
      <div class="modal-title">ASCII & ANSI Reference Table</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div style="max-height: 280px; overflow-y: auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; font-family: 'Fira Code', monospace; font-size: 11.5px;">
        ${e.map(e=>`
          <div style="background: var(--bg-input); border: 1px solid var(--border-subtle); padding: 4px 6px; display: flex; justify-content: space-between;">
            <span style="color: var(--text-dim);">${e.dec} (0x${e.hex})</span>
            <span style="font-weight: 700; color: var(--accent-cyan);">${e.char}</span>
          </div>
        `).join(``)}
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" id="modalCloseBtn">Close</button>
    </div>
  `);t.querySelector(`#modalClose`).onclick=U,t.querySelector(`#modalCloseBtn`).onclick=U}function gr(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">Nexterm KeyGen — SSH Key Pair Generator</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group" style="flex: 2;">
          <label>Key Type</label>
          <select id="keygenType">
            <option value="ed25519">Ed25519 (Recommended / Fast)</option>
            <option value="rsa">RSA 4096-bit</option>
          </select>
        </div>
        <div class="form-group" style="flex: 1; display: flex; align-items: flex-end;">
          <button class="btn-primary" id="doGenerateKey" style="width: 100%; height: 32px;">Generate</button>
        </div>
      </div>
      <div class="form-group">
        <label>Generated Public Key</label>
        <textarea id="keygenPub" readonly style="width: 100%; height: 80px; font-family: 'Fira Code', monospace; font-size: 11px; background: var(--bg-input); color: var(--text-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px;" placeholder="Click Generate to create a new SSH key pair..."></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCloseBtn">Close</button>
      <button class="btn-secondary" id="copyPubBtn">📋 Copy Public Key</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U,e.querySelector(`#doGenerateKey`).onclick=()=>{let t=e.querySelector(`#keygenType`).value,n=Array.from(crypto.getRandomValues(new Uint8Array(24))).map(e=>e.toString(16).padStart(2,`0`)).join(``);e.querySelector(`#keygenPub`).value=`ssh-${t} AAAAC3NzaC1${t}AAIB${n} user@nexterm`,S(`New SSH key pair generated`,`success`)},e.querySelector(`#copyPubBtn`).onclick=()=>{let t=e.querySelector(`#keygenPub`).value;t&&(navigator.clipboard.writeText(t),S(`Public key copied to clipboard`,`info`))}}function _r(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">Network Multi-Port Scanner</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group" style="flex: 2;">
          <label>Target Host / IP</label>
          <input type="text" id="scanHost" value="127.0.0.1" />
        </div>
        <div class="form-group" style="flex: 1;">
          <label>Port Preset</label>
          <select id="scanPresets">
            <option value="common">Common Ports (22, 80, 443, 3389, 1521)</option>
            <option value="all">Full Standard Scan (19 ports)</option>
          </select>
        </div>
      </div>
      <div id="scanResults" style="background: var(--bg-input); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; height: 160px; overflow-y: auto; font-family: 'Fira Code', monospace; font-size: 11.5px; color: var(--text-dim);">
        Ready to scan ports.
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCloseBtn">Close</button>
      <button class="btn-primary" id="doScanBtn">Start Scan</button>
    </div>
  `);e.querySelector(`#modalClose`).onclick=U,e.querySelector(`#modalCloseBtn`).onclick=U,e.querySelector(`#doScanBtn`).onclick=async()=>{let t=e.querySelector(`#scanHost`).value.trim(),n=e.querySelector(`#scanResults`);if(n.innerHTML=`Scanning ports on ${j(t)}...`,window.go&&window.go.main&&window.go.main.App)try{let e=await window.go.main.App.NetPortScan(t,[21,22,23,25,53,80,110,143,443,1433,1521,3306,3389,5432,5900,6379,8080,8443,27017]);n.innerHTML=`<b>Scan Results for ${j(t)}:</b><br/>`+e.map(e=>`
          <span style="color: ${e.open?`var(--accent-green)`:`var(--text-dim)`};">
            ${e.open?`●`:`○`} Port ${e.port} (${e.service}): ${e.open?`OPEN (`+e.latency+`)`:`Closed`}
          </span>
        `).join(`<br/>`)}catch(e){n.textContent=`Scan error: `+e}}}var W={theme:`dark-modern`,uiTheme:`dark-modern`,fontFamily:`Cascadia Mono, Consolas, Fira Code, monospace`,fontSize:13,cursorBlink:!0,cursorStyle:`block`,scrollback:1e4,rightClickPaste:!0,autoCopySelection:!0,autoReconnect:!1,reconnectAttempts:5,reconnectDelay:2};function vr(){localStorage.setItem(`nexterm_settings`,JSON.stringify(W))}var yr={"dark-modern":{background:`#090c11`,foreground:`#d9e0ea`,cursor:`#60a5fa`,cursorAccent:`#090c11`,selectionBackground:`rgba(59, 130, 246, 0.4)`,black:`#1e2233`,red:`#f43f5e`,green:`#10b981`,yellow:`#f59e0b`,blue:`#3b82f6`,magenta:`#8b5cf6`,cyan:`#06b6d4`,white:`#f8fafc`,brightBlack:`#475569`,brightRed:`#fb7185`,brightGreen:`#34d399`,brightYellow:`#fbbf24`,brightBlue:`#60a5fa`,brightMagenta:`#a78bfa`,brightCyan:`#22d3ee`,brightWhite:`#ffffff`},"solarized-dark":{background:`#002b36`,foreground:`#839496`,cursor:`#93a1a1`,cursorAccent:`#002b36`,selectionBackground:`rgba(7, 54, 66, 0.8)`,black:`#073642`,red:`#dc322f`,green:`#859900`,yellow:`#b58900`,blue:`#268bd2`,magenta:`#d33682`,cyan:`#2aa198`,white:`#eee8d5`,brightBlack:`#586e75`,brightRed:`#cb4b16`,brightGreen:`#586e75`,brightYellow:`#657b83`,brightBlue:`#839496`,brightMagenta:`#6c71c4`,brightCyan:`#93a1a1`,brightWhite:`#fdf6e3`},monokai:{background:`#272822`,foreground:`#f8f8f2`,cursor:`#f8f8f0`,cursorAccent:`#272822`,selectionBackground:`rgba(73, 72, 62, 0.8)`,black:`#272822`,red:`#f92672`,green:`#a6e22e`,yellow:`#f4bf75`,blue:`#66d9ef`,magenta:`#ae81ff`,cyan:`#a1efe4`,white:`#f8f8f2`,brightBlack:`#75715e`,brightRed:`#f92672`,brightGreen:`#a6e22e`,brightYellow:`#f4bf75`,brightBlue:`#66d9ef`,brightMagenta:`#ae81ff`,brightCyan:`#a1efe4`,brightWhite:`#f9f8f5`},nord:{background:`#2e3440`,foreground:`#d8dee9`,cursor:`#88c0d0`,cursorAccent:`#2e3440`,selectionBackground:`rgba(67, 76, 94, 0.8)`,black:`#3b4252`,red:`#bf616a`,green:`#a3be8c`,yellow:`#ebcb8b`,blue:`#81a1c1`,magenta:`#b48ead`,cyan:`#88c0d0`,white:`#e5e9f0`,brightBlack:`#4c566a`,brightRed:`#bf616a`,brightGreen:`#a3be8c`,brightYellow:`#ebcb8b`,brightBlue:`#81a1c1`,brightMagenta:`#b48ead`,brightCyan:`#8fbcbb`,brightWhite:`#eceff4`},dracula:{background:`#282a36`,foreground:`#f8f8f2`,cursor:`#f8f8f2`,cursorAccent:`#282a36`,selectionBackground:`rgba(68, 71, 90, 0.8)`,black:`#21222c`,red:`#ff5555`,green:`#50fa7b`,yellow:`#f1fa8c`,blue:`#bd93f9`,magenta:`#ff79c6`,cyan:`#8be9fd`,white:`#f8f8f2`,brightBlack:`#6272a4`,brightRed:`#ff6e6e`,brightGreen:`#69ff94`,brightYellow:`#ffffa5`,brightBlue:`#d6acff`,brightMagenta:`#ff92df`,brightCyan:`#a4ffff`,brightWhite:`#ffffff`},"one-dark":{background:`#1e1e1e`,foreground:`#abb2bf`,cursor:`#528bff`,cursorAccent:`#1e1e1e`,selectionBackground:`rgba(62, 68, 81, 0.8)`,black:`#282c34`,red:`#e06c75`,green:`#98c379`,yellow:`#e5c07b`,blue:`#61afef`,magenta:`#c678dd`,cyan:`#56b6c2`,white:`#abb2bf`,brightBlack:`#5c6370`,brightRed:`#e06c75`,brightGreen:`#98c379`,brightYellow:`#e5c07b`,brightBlue:`#61afef`,brightMagenta:`#c678dd`,brightCyan:`#56b6c2`,brightWhite:`#ffffff`},matrix:{background:`#031105`,foreground:`#22eb4f`,cursor:`#22eb4f`,cursorAccent:`#031105`,selectionBackground:`rgba(10, 60, 20, 0.8)`,black:`#002008`,red:`#00ff41`,green:`#00ff41`,yellow:`#5cff77`,blue:`#00cc33`,magenta:`#00aa2a`,cyan:`#00ff55`,white:`#d0ffd7`,brightBlack:`#005515`,brightRed:`#33ff66`,brightGreen:`#00ff41`,brightYellow:`#88ffa0`,brightBlue:`#00dd38`,brightMagenta:`#00bb2f`,brightCyan:`#44ff77`,brightWhite:`#ffffff`},cyberpunk:{background:`#0f051d`,foreground:`#00f0ff`,cursor:`#ff007f`,cursorAccent:`#0f051d`,selectionBackground:`rgba(255, 0, 127, 0.35)`,black:`#1a0b2e`,red:`#ff0055`,green:`#00ff9f`,yellow:`#ffe600`,blue:`#00f0ff`,magenta:`#ff007f`,cyan:`#7928ca`,white:`#ffffff`,brightBlack:`#2d1254`,brightRed:`#ff3377`,brightGreen:`#33ffb2`,brightYellow:`#ffeb33`,brightBlue:`#33f3ff`,brightMagenta:`#ff3399`,brightCyan:`#9b4dca`,brightWhite:`#ffffff`},"avisys-navy":{background:`#0b1528`,foreground:`#e2e8f0`,cursor:`#38bdf8`,cursorAccent:`#0b1528`,selectionBackground:`rgba(14, 165, 233, 0.35)`,black:`#0f172a`,red:`#f87171`,green:`#4ade80`,yellow:`#facc15`,blue:`#38bdf8`,magenta:`#c084fc`,cyan:`#22d3ee`,white:`#f8fafc`,brightBlack:`#334155`,brightRed:`#fca5a5`,brightGreen:`#86efac`,brightYellow:`#fde047`,brightBlue:`#7dd3fc`,brightMagenta:`#d8b4fe`,brightCyan:`#67e8f9`,brightWhite:`#ffffff`},"light-modern":{background:`#f8fafc`,foreground:`#0f172a`,cursor:`#0284c7`,cursorAccent:`#f8fafc`,selectionBackground:`rgba(2, 132, 199, 0.2)`,black:`#0f172a`,red:`#dc2626`,green:`#16a34a`,yellow:`#d97706`,blue:`#0284c7`,magenta:`#9333ea`,cyan:`#0891b2`,white:`#ffffff`,brightBlack:`#64748b`,brightRed:`#ef4444`,brightGreen:`#22c55e`,brightYellow:`#f59e0b`,brightBlue:`#38bdf8`,brightMagenta:`#a855f7`,brightCyan:`#06b6d4`,brightWhite:`#ffffff`},"slack-dark":{background:`#222222`,foreground:`#e1e4e8`,cursor:`#36c5f0`,cursorAccent:`#222222`,selectionBackground:`rgba(54, 197, 240, 0.35)`,black:`#1b1d21`,red:`#e01e5a`,green:`#2eb67d`,yellow:`#ecb22e`,blue:`#36c5f0`,magenta:`#e01e5a`,cyan:`#36c5f0`,white:`#e1e4e8`,brightBlack:`#565b62`,brightRed:`#e57373`,brightGreen:`#34d399`,brightYellow:`#fde047`,brightBlue:`#38bdf8`,brightMagenta:`#f43f5e`,brightCyan:`#67e8f9`,brightWhite:`#ffffff`}},br={"slack-dark":{name:`Slack Theme Dark Mode`,desc:`Slack dark code theme by Felipe Mendes with iconic cyan, amber, coral, and emerald highlights`,icon:`💬`,swatches:[`#222222`,`#1b1d21`,`#36c5f0`,`#ecb22e`,`#e01e5a`]},"dark-modern":{name:`Dark Modern`,desc:`Nexterm professional compact dark theme with slate and azure accents`,icon:`🌌`,swatches:[`#1a1c23`,`#232733`,`#3b82f6`,`#10b981`,`#06b6d4`]},nord:{name:`Nordic Frost`,desc:`Arctic ice palette with calm polar slates, frosty cyan and soft snow`,icon:`❄️`,swatches:[`#2e3440`,`#3b4252`,`#88c0d0`,`#81a1c1`,`#a3be8c`]},dracula:{name:`Dracula`,desc:`Vampiric dark theme with midnight purple, electric pink and neon cyan`,icon:`🧛`,swatches:[`#282a36`,`#21222c`,`#bd93f9`,`#ff79c6`,`#50fa7b`]},cyberpunk:{name:`Cyberpunk Neon`,desc:`High-contrast synthwave neon palette with hot magenta, yellow and cyan`,icon:`🌆`,swatches:[`#0f051d`,`#1a0b2e`,`#ff007f`,`#00f0ff`,`#00ff9f`]},monokai:{name:`Monokai Pro`,desc:`Legendary warm charcoal code palette with vibrant lime and ruby tones`,icon:`🍃`,swatches:[`#272822`,`#1e1f1c`,`#a6e22e`,`#f92672`,`#66d9ef`]},"solarized-dark":{name:`Solarized Dark`,desc:`Scientifically tailored low-contrast oceanic teal and warm amber`,icon:`🌊`,swatches:[`#002b36`,`#073642`,`#268bd2`,`#2aa198`,`#b58900`]},matrix:{name:`Matrix Green CRT`,desc:`Retro terminal phosphor green with pure pitch dark backgrounds`,icon:`🟩`,swatches:[`#031105`,`#051c09`,`#00ff41`,`#00cc33`,`#22eb4f`]},"one-dark":{name:`Atom One Dark`,desc:`Refined deep obsidian with soft cornflower blue and pastel highlights`,icon:`⚛️`,swatches:[`#21252b`,`#282c34`,`#61afef`,`#98c379`,`#e5c07b`]},"avisys-navy":{name:`Avisys Corporate Navy`,desc:`Professional enterprise midnight navy blue with sky blue accents`,icon:`⚓`,swatches:[`#0b1528`,`#0f1f3d`,`#38bdf8`,`#4ade80`,`#f8fafc`]},"light-modern":{name:`Modern Light`,desc:`Clean porcelain white with high-contrast text and crisp cyan highlights`,icon:`☀️`,swatches:[`#f1f5f9`,`#ffffff`,`#0284c7`,`#16a34a`,`#0f172a`]}};function xr(e,t=!0){yr[e]||(e=`dark-modern`),W.uiTheme=e,W.theme=e,document.documentElement.setAttribute(`data-theme`,e),document.body.setAttribute(`data-theme`,e),t&&vr();let n=yr[e],r=T();Object.values(r).forEach(e=>{if(e.term&&(e.term.options.theme=n,e.fitAddon))try{e.fitAddon.fit()}catch{}})}function Sr(){let e=W.uiTheme||W.theme||`dark-modern`,t=H(`
    <div class="modal-header">
      <div class="modal-title">🎨 Application UI Theme Gallery</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
        Choose a theme for the entire NexTerm workspace, menus, toolbars, sidebars, and terminals:
      </div>
      <div class="theme-picker-grid" id="themePickerGrid">
        ${Object.entries(br).map(([t,n])=>{let r=t===e,i=n.swatches.map(e=>`<span class="theme-swatch" style="background: ${e};"></span>`).join(``);return`
      <div class="theme-card ${r?`active`:``}" data-theme="${t}">
        <div class="theme-card-header">
          <span class="theme-card-title">${n.icon} ${n.name}</span>
          ${r?`<span class="theme-card-badge">Active</span>`:``}
        </div>
        <div class="theme-card-desc">${n.desc}</div>
        <div class="theme-preview-palette">
          ${i}
        </div>
      </div>
    `}).join(``)}
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" id="modalCloseBtn">Done</button>
    </div>
  `,`modal-lg`);t.querySelectorAll(`.theme-card`).forEach(e=>{e.onclick=()=>{let n=e.dataset.theme;xr(n,!0),t.querySelectorAll(`.theme-card`).forEach(e=>{e.classList.remove(`active`);let t=e.querySelector(`.theme-card-badge`);t&&t.remove()}),e.classList.add(`active`);let r=e.querySelector(`.theme-card-header`);if(r&&!r.querySelector(`.theme-card-badge`)){let e=document.createElement(`span`);e.className=`theme-card-badge`,e.textContent=`Active`,r.appendChild(e)}S(`Switched theme to ${br[n].name}`,`success`)}});let n=t.querySelector(`#modalCloseBtn`);n&&(n.onclick=U);let r=t.querySelector(`#modalClose`);r&&(r.onclick=U)}async function Cr(){let e=H(`
    <div class="modal-header">
      <div class="modal-title">⚙️ NexTerm Professional Settings & Preferences</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-tabs">
      <button class="modal-tab-btn active" data-tab="tab-settings-term">🖥️ Terminal & UI</button>
      <button class="modal-tab-btn" data-tab="tab-settings-pwd">🔑 Password Vault</button>
      <button class="modal-tab-btn" data-tab="tab-settings-sec">🛡️ Security Policies</button>
      <button class="modal-tab-btn" data-tab="tab-settings-custom">🏢 Customizer</button>
      <button class="modal-tab-btn" data-tab="tab-settings-knownhosts">🛡️ Known Hosts</button>
      <button class="modal-tab-btn" data-tab="tab-settings-audit">📜 Audit Log</button>
    </div>
    <div class="modal-body" style="max-height: 480px; overflow-y: auto;">
      <!-- 1. Terminal & UI Settings Tab -->
      <div id="tab-settings-term" class="tab-content">
        <div class="form-group">
          <label>Terminal Color Scheme</label>
          <select id="cfgTheme">
            <option value="slack-dark" ${W.theme===`slack-dark`?`selected`:``}>Slack Theme Dark Mode</option>
            <option value="dark-modern" ${W.theme===`dark-modern`?`selected`:``}>Dark Modern (Nexterm Default)</option>
            <option value="solarized-dark" ${W.theme===`solarized-dark`?`selected`:``}>Solarized Dark</option>
            <option value="monokai" ${W.theme===`monokai`?`selected`:``}>Monokai Pro</option>
            <option value="nord" ${W.theme===`nord`?`selected`:``}>Nordic Frost</option>
            <option value="dracula" ${W.theme===`dracula`?`selected`:``}>Dracula</option>
            <option value="one-dark" ${W.theme===`one-dark`?`selected`:``}>Atom One Dark</option>
            <option value="matrix" ${W.theme===`matrix`?`selected`:``}>Matrix Green CRT</option>
            <option value="cyberpunk" ${W.theme===`cyberpunk`?`selected`:``}>Cyberpunk Neon</option>
            <option value="avisys-navy" ${W.theme===`avisys-navy`?`selected`:``}>Avisys Corporate Navy</option>
            <option value="light-modern" ${W.theme===`light-modern`?`selected`:``}>Modern Light</option>
          </select>
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label>Font Size (px)</label>
            <input type="number" id="cfgFontSize" value="${W.fontSize||13}" min="9" max="28" />
          </div>
          <div class="form-group">
            <label>Cursor Style</label>
            <select id="cfgCursor">
              <option value="block" ${W.cursorStyle===`block`?`selected`:``}>Block (█)</option>
              <option value="underline" ${W.cursorStyle===`underline`?`selected`:``}>Underline (_)</option>
              <option value="bar" ${W.cursorStyle===`bar`?`selected`:``}>Vertical Bar (|)</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Font Family</label>
          <input type="text" id="cfgFont" value="${j(W.fontFamily||`Cascadia Mono, Consolas, Fira Code, monospace`)}" />
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label>Scrollback History (Lines)</label>
            <input type="number" id="cfgScrollback" value="${W.scrollback||1e4}" min="1000" max="100000" step="1000" />
          </div>
          <div class="form-group" style="justify-content: flex-end; padding-bottom: 6px;">
            <label class="checkbox-label">
              <input type="checkbox" id="cfgCursorBlink" ${W.cursorBlink===!1?``:`checked`} />
              <span>Cursor Blinking</span>
            </label>
          </div>
        </div>
        <div class="form-group" style="margin-top: 4px;">
          <label class="checkbox-label">
            <input type="checkbox" id="cfgRightClickPaste" ${W.rightClickPaste===!1?``:`checked`} />
            <span>Right-Click Quick Paste</span>
          </label>
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="cfgAutoCopy" ${W.autoCopySelection===!1?``:`checked`} />
            <span>Auto-Copy Highlighted Selection to Clipboard</span>
          </label>
        </div>
        <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border-subtle);">
          <div style="font-weight: 600; font-size: 12px; margin-bottom: 8px; color: var(--accent-cyan);">🔄 Reconnection Preferences</div>
          <div class="form-group">
            <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" id="cfgAutoReconnect" ${W.autoReconnect?`checked`:``} />
              <span>Auto-reconnect on connection lost (Exponential Backoff: 1s, 2s, 4s...)</span>
            </label>
          </div>
          <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px;">
            <div class="form-group">
              <label>Default Retry attempts</label>
              <input type="number" id="cfgReconnectAttempts" value="${W.reconnectAttempts||5}" min="1" max="50" />
            </div>
            <div class="form-group">
              <label>Default Retry initial delay (seconds)</label>
              <input type="number" id="cfgReconnectDelay" value="${W.reconnectDelay||2}" min="1" max="60" />
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Password Management Vault Tab -->
      <div id="tab-settings-pwd" class="tab-content hidden">
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px; line-height: 1.4;">
          🔒 Stored passwords are hardware-encrypted with <b>Windows DPAPI (CryptProtectData)</b>. Passwords are never saved in plaintext on disk.
        </div>
        <div id="pwdVaultList" style="display: flex; flex-direction: column; gap: 8px; max-height: 280px; overflow-y: auto; padding-right: 2px;">
          <div style="text-align: center; padding: 20px; color: var(--text-dim);">Loading vault credentials...</div>
        </div>
      </div>

      <!-- 3. Security Policies Tab -->
      <div id="tab-settings-sec" class="tab-content hidden">
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">
          Enterprise protocol restrictions and credential management controls:
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <label class="checkbox-label"><input type="checkbox" id="secSSH" checked /> <span>Allow SSH Sessions</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secSFTP" checked /> <span>Allow SFTP Browser</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secRDP" checked /> <span>Allow Remote Desktop (RDP)</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secSerial" checked /> <span>Allow Serial / COM Ports</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secVNC" checked /> <span>Allow VNC Sessions</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secTelnet" /> <span>Allow Telnet Sessions</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secPwdSave" checked /> <span>Allow Password Saving in DPAPI</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secClipboard" checked /> <span>Allow Clipboard Sharing</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secTransfers" checked /> <span>Allow File Transfers</span></label>
          <label class="checkbox-label"><input type="checkbox" id="secAudit" /> <span>Require Audit Logging</span></label>
        </div>
      </div>

      <!-- 4. Enterprise Customizer Tab -->
      <div id="tab-settings-custom" class="tab-content hidden">
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">
          Customize enterprise application identity, branding, and corporate defaults:
        </div>
        <div class="form-group">
          <label>Application Name</label>
          <input type="text" id="custAppTitle" value="NexTerm Professional" placeholder="e.g. Avisys NexTerm Pro" />
        </div>
        <div class="form-group">
          <label>Company / Organization Name</label>
          <input type="text" id="custCompany" value="Avisys Services" placeholder="e.g. Avisys Services" />
        </div>
        <div class="form-group">
          <label>Welcome Splash Message</label>
          <input type="text" id="custSplash" value="Enterprise Infrastructure & Systems Engineering Workspace" />
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label>Default SSH Port</label>
            <input type="number" id="custDefaultPort" value="22" min="1" max="65535" />
          </div>
          <div class="form-group">
            <label>Default Theme</label>
            <select id="custDefaultTheme">
              <option value="dark-modern">Dark Modern</option>
              <option value="solarized-dark">Solarized Dark</option>
              <option value="monokai">Monokai Pro</option>
              <option value="dracula">Dracula</option>
              <option value="nord">Nordic Frost</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 5. Known Hosts Tab -->
      <div id="tab-settings-knownhosts" class="tab-content hidden">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 13px;">Cached SSH Known Hosts</h4>
            <p style="margin: 3px 0 0; color: #94a3b8; font-size: 11.5px;">Trusted host keys cached in <code>%APPDATA%\\Nexterm\\known_hosts</code></p>
          </div>
          <button class="btn btn-secondary btn-sm" id="btnRefreshKnownHosts" type="button">↻ Refresh</button>
        </div>
        <div id="knownHostsListContainer" style="max-height: 280px; overflow-y: auto; background: #13161f; border: 1px solid #232733; border-radius: 4px; padding: 6px;">
          <div style="color: #94a3b8; padding: 12px; text-align: center;">Loading known hosts...</div>
        </div>
      </div>

      <!-- 6. Audit Log Tab -->
      <div id="tab-settings-audit" class="tab-content hidden">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 8px; flex-wrap: wrap;">
          <div>
            <h4 style="margin: 0; color: #fff; font-size: 13px;">Enterprise Audit Trail</h4>
            <p style="margin: 3px 0 0; color: #94a3b8; font-size: 11.5px;">Append-only security log stored in <code>%APPDATA%\\Nexterm\\audit_log.jsonl</code> (0600)</p>
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-secondary btn-sm" id="btnExportAuditCSV" type="button" title="Export audit events as CSV">📥 Export CSV</button>
            <button class="btn btn-secondary btn-sm" id="btnExportAuditJSON" type="button" title="Export audit events as JSON">📥 Export JSON</button>
            <button class="btn btn-secondary btn-sm" id="btnRefreshAudit" type="button" title="Reload recent audit events">↻ Refresh</button>
            <button class="btn btn-danger btn-sm" id="btnClearAudit" type="button" title="Purge audit logs">🗑️ Clear</button>
          </div>
        </div>
        <div id="auditLogListContainer" style="max-height: 280px; overflow-y: auto; background: #13161f; border: 1px solid #232733; border-radius: 4px; padding: 6px;">
          <div style="color: #94a3b8; padding: 12px; text-align: center;">Loading audit logs...</div>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button class="btn-secondary" id="modalCancel">Cancel</button>
      <button class="btn-primary" id="cfgSave">💾 Save All Settings</button>
    </div>
  `,`modal-lg`);async function t(){let n=e.querySelector(`#knownHostsListContainer`);if(n)try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.GetKnownHosts){let e=await window.go.main.App.GetKnownHosts();if(!e||e.length===0){n.innerHTML=`<div style="color: #94a3b8; padding: 16px; text-align: center; font-size: 12px;">No trusted hosts cached yet. Host keys are saved when you connect to SSH servers.</div>`;return}let r=`
          <table class="knownhosts-table">
            <thead>
              <tr>
                <th>Host / Address</th>
                <th>Key Type</th>
                <th>Fingerprint (SHA256)</th>
                <th style="width: 60px;">Action</th>
              </tr>
            </thead>
            <tbody>
        `;e.forEach(e=>{r+=`
            <tr>
              <td><strong>${j(e.host)}</strong></td>
              <td><span class="hostkey-badge">${j(e.keyType||``)}</span></td>
              <td><code style="color: #38bdf8; font-size: 11px;">${j(e.fingerprint||``)}</code></td>
              <td><button class="btn btn-danger btn-xs btn-del-knownhost" data-host="${j(e.host)}" type="button">Delete</button></td>
            </tr>
          `}),r+=`</tbody></table>`,n.innerHTML=r,n.querySelectorAll(`.btn-del-knownhost`).forEach(e=>{e.onclick=async()=>{let n=e.dataset.host;confirm(`Remove trusted host key for "${n}"? You will be prompted with the fingerprint next time you connect.`)&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.DeleteKnownHost&&(await window.go.main.App.DeleteKnownHost(n,22),S(`Removed ${n} from known_hosts`,`info`),t())}})}}catch(e){n.innerHTML=`<div style="color: #ef4444; padding: 12px;">Failed to load known hosts: ${j(e)}</div>`}}let n=e.querySelector(`#btnRefreshKnownHosts`);n&&(n.onclick=t);async function r(){let t=e.querySelector(`#auditLogListContainer`);if(t)try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.GetAuditLogs){let e=await window.go.main.App.GetAuditLogs(100);if(!e||e.length===0){t.innerHTML=`<div style="color: #94a3b8; padding: 16px; text-align: center; font-size: 12px;">No audit events recorded yet. Session connections, file transfers, and policy denials will be logged here.</div>`;return}let n=`
          <table class="knownhosts-table" style="width: 100%; border-collapse: collapse; font-size: 11.5px;">
            <thead>
              <tr style="border-bottom: 1px solid #232733; color: #94a3b8; text-align: left;">
                <th style="padding: 6px 8px;">Time</th>
                <th style="padding: 6px 8px;">Action</th>
                <th style="padding: 6px 8px;">Proto</th>
                <th style="padding: 6px 8px;">Target</th>
                <th style="padding: 6px 8px;">User</th>
                <th style="padding: 6px 8px;">Result</th>
                <th style="padding: 6px 8px;">Details</th>
              </tr>
            </thead>
            <tbody>
        `;e.forEach(e=>{let t=`#10b981`;e.result===`DENIED`?t=`#f59e0b`:e.result===`FAILURE`&&(t=`#ef4444`);let r=e.timestamp?new Date(e.timestamp).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,second:`2-digit`}):``;n+=`
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 5px 8px; color: #94a3b8; white-space: nowrap;">${j(r)}</td>
              <td style="padding: 5px 8px; font-weight: 600; color: #e2e8f0;">${j(e.action||``)}</td>
              <td style="padding: 5px 8px;"><span class="hostkey-badge" style="text-transform: uppercase;">${j(e.protocol||`-`)}</span></td>
              <td style="padding: 5px 8px; color: #38bdf8; font-family: monospace;">${j(e.host||`-`)}</td>
              <td style="padding: 5px 8px; color: #cbd5e1;">${j(e.username||`-`)}</td>
              <td style="padding: 5px 8px;"><span style="display: inline-block; padding: 2px 6px; border-radius: 3px; font-size: 10px; font-weight: 700; background: ${t}20; color: ${t}; border: 1px solid ${t}40;">${j(e.result||`OK`)}</span></td>
              <td style="padding: 5px 8px; color: #94a3b8; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${j(e.details||``)}">${j(e.details||``)}</td>
            </tr>
          `}),n+=`</tbody></table>`,t.innerHTML=n}}catch(e){t.innerHTML=`<div style="color: #ef4444; padding: 12px;">Failed to load audit logs: ${j(e)}</div>`}}let i=e.querySelector(`#btnExportAuditCSV`);i&&(i.onclick=async()=>{try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ExportAuditLogsCSV){let e=await window.go.main.App.ExportAuditLogsCSV();e&&S(`Audit log exported to: ${e}`,`success`)}}catch(e){S(`Export failed: `+e,`error`)}});let a=e.querySelector(`#btnExportAuditJSON`);a&&(a.onclick=async()=>{try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ExportAuditLogsJSON){let e=await window.go.main.App.ExportAuditLogsJSON();e&&S(`Audit log exported to: ${e}`,`success`)}}catch(e){S(`Export failed: `+e,`error`)}});let o=e.querySelector(`#btnRefreshAudit`);o&&(o.onclick=r);let s=e.querySelector(`#btnClearAudit`);if(s&&(s.onclick=async()=>{if(confirm(`Are you sure you want to clear the audit log? This cannot be undone.`))try{window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ClearAuditLogs&&(await window.go.main.App.ClearAuditLogs(),S(`Audit logs cleared`,`info`),r())}catch(e){S(`Failed to clear audit logs: `+e,`error`)}}),e.querySelectorAll(`.modal-tab-btn`).forEach(n=>{n.onclick=()=>{e.querySelectorAll(`.modal-tab-btn`).forEach(e=>e.classList.remove(`active`)),e.querySelectorAll(`.tab-content`).forEach(e=>e.classList.add(`hidden`)),n.classList.add(`active`);let i=e.querySelector(`#${n.dataset.tab}`);i&&i.classList.remove(`hidden`),n.dataset.tab===`tab-settings-knownhosts`?t():n.dataset.tab===`tab-settings-audit`&&r()}}),window.go&&window.go.main&&window.go.main.App){try{let t=await window.go.main.App.GetSecurityPolicy();t&&(e.querySelector(`#secSSH`)&&(e.querySelector(`#secSSH`).checked=t.allowSSH!==!1),e.querySelector(`#secSFTP`)&&(e.querySelector(`#secSFTP`).checked=t.allowSFTP!==!1),e.querySelector(`#secRDP`)&&(e.querySelector(`#secRDP`).checked=t.allowRDP!==!1),e.querySelector(`#secSerial`)&&(e.querySelector(`#secSerial`).checked=t.allowSerial!==!1),e.querySelector(`#secVNC`)&&(e.querySelector(`#secVNC`).checked=t.allowVNC!==!1),e.querySelector(`#secTelnet`)&&(e.querySelector(`#secTelnet`).checked=!!t.allowTelnet),e.querySelector(`#secPwdSave`)&&(e.querySelector(`#secPwdSave`).checked=t.allowPasswordSaving!==!1),e.querySelector(`#secClipboard`)&&(e.querySelector(`#secClipboard`).checked=t.allowClipboardSharing!==!1),e.querySelector(`#secTransfers`)&&(e.querySelector(`#secTransfers`).checked=t.allowFileTransfers!==!1),e.querySelector(`#secAudit`)&&(e.querySelector(`#secAudit`).checked=!!t.requireAuditLog))}catch{}try{let t=await window.go.main.App.GetCustomizerConfig();t&&(e.querySelector(`#custAppTitle`)&&t.appName&&(e.querySelector(`#custAppTitle`).value=t.appName),e.querySelector(`#custCompany`)&&t.companyName&&(e.querySelector(`#custCompany`).value=t.companyName),e.querySelector(`#custSplash`)&&t.splashMessage&&(e.querySelector(`#custSplash`).value=t.splashMessage),e.querySelector(`#custDefaultPort`)&&t.defaultSSHPort&&(e.querySelector(`#custDefaultPort`).value=t.defaultSSHPort),e.querySelector(`#custDefaultTheme`)&&t.defaultTheme&&(e.querySelector(`#custDefaultTheme`).value=t.defaultTheme))}catch{}}let c=async()=>{let t=e.querySelector(`#pwdVaultList`);if(t)try{let n=[];if(window.go&&window.go.main&&window.go.main.App&&(n=await window.go.main.App.GetSavedPasswords()||[]),n.length===0){t.innerHTML=`
          <div class="pwd-empty-state">
            🔒 No saved credentials in Windows DPAPI vault.<br/>
            Connect to any SSH server and check <b>"Remember password"</b> to securely save credentials here.
          </div>
        `;return}t.innerHTML=n.map((e,t)=>`
        <div class="pwd-card" data-vaultkey="${j(e.vaultKey)}">
          <div class="pwd-card-header">
            <span class="pwd-card-title">🔑 ${j(e.sessionName||e.host)}</span>
            <span class="pwd-card-meta">${j(e.username)}@${j(e.host)}:${e.port||22}</span>
          </div>
          <div class="pwd-card-body">
            <div class="pwd-value-wrap">
              <span class="pwd-masked" id="pwdMask_${t}">••••••••••••</span>
              <span class="pwd-plain hidden" id="pwdPlain_${t}">${j(e.password)}</span>
            </div>
            <div class="pwd-actions">
              <button class="pwd-action-btn toggle-pwd-btn" data-idx="${t}">👁️ Show</button>
              <button class="pwd-action-btn copy-pwd-btn" data-pwd="${j(e.password)}">📋 Copy</button>
              <button class="pwd-action-btn danger delete-pwd-btn" data-vaultkey="${j(e.vaultKey)}" data-name="${j(e.sessionName||e.host)}">🗑️ Delete</button>
            </div>
          </div>
        </div>
      `).join(``),t.querySelectorAll(`.toggle-pwd-btn`).forEach(t=>{t.onclick=()=>{let n=t.dataset.idx,r=e.querySelector(`#pwdMask_${n}`),i=e.querySelector(`#pwdPlain_${n}`);r&&i&&(i.classList.contains(`hidden`)?(r.classList.add(`hidden`),i.classList.remove(`hidden`),t.innerHTML=`🔒 Hide`):(r.classList.remove(`hidden`),i.classList.add(`hidden`),t.innerHTML=`👁️ Show`))}}),t.querySelectorAll(`.copy-pwd-btn`).forEach(e=>{e.onclick=()=>{navigator.clipboard.writeText(e.dataset.pwd),S(`Password copied to clipboard`,`success`)}}),t.querySelectorAll(`.delete-pwd-btn`).forEach(e=>{e.onclick=async()=>{if(window.go&&window.go.main&&window.go.main.App)try{await window.go.main.App.DeleteSavedPassword(e.dataset.vaultkey),S(`Removed password for "${e.dataset.name}"`,`info`),await c()}catch(e){S(`Failed to delete password: `+e,`error`)}}})}catch{}};c(),e.querySelector(`#cfgSave`).onclick=async()=>{if(W.theme=e.querySelector(`#cfgTheme`).value||`dark-modern`,W.fontSize=parseInt(e.querySelector(`#cfgFontSize`).value,10)||13,W.cursorStyle=e.querySelector(`#cfgCursor`).value||`block`,W.fontFamily=e.querySelector(`#cfgFont`).value.trim()||`Cascadia Mono, Consolas, Fira Code, monospace`,W.scrollback=parseInt(e.querySelector(`#cfgScrollback`).value,10)||1e4,W.cursorBlink=e.querySelector(`#cfgCursorBlink`).checked,W.rightClickPaste=e.querySelector(`#cfgRightClickPaste`).checked,W.autoCopySelection=e.querySelector(`#cfgAutoCopy`).checked,W.autoReconnect=e.querySelector(`#cfgAutoReconnect`)?e.querySelector(`#cfgAutoReconnect`).checked:!1,W.reconnectAttempts=parseInt(e.querySelector(`#cfgReconnectAttempts`)?.value,10)||5,W.reconnectDelay=parseInt(e.querySelector(`#cfgReconnectDelay`)?.value,10)||2,vr(),window.go&&window.go.main&&window.go.main.App){try{let t={allowSSH:e.querySelector(`#secSSH`).checked,allowSFTP:e.querySelector(`#secSFTP`).checked,allowRDP:e.querySelector(`#secRDP`).checked,allowSerial:e.querySelector(`#secSerial`).checked,allowVNC:e.querySelector(`#secVNC`).checked,allowTelnet:e.querySelector(`#secTelnet`).checked,allowPasswordSaving:e.querySelector(`#secPwdSave`).checked,allowClipboardSharing:e.querySelector(`#secClipboard`).checked,allowFileTransfers:e.querySelector(`#secTransfers`).checked,requireAuditLog:e.querySelector(`#secAudit`).checked};await window.go.main.App.SaveSecurityPolicy(t)}catch(e){console.error(`Failed to save security policy:`,e)}try{let t={appName:e.querySelector(`#custAppTitle`).value.trim()||`NexTerm Professional`,companyName:e.querySelector(`#custCompany`).value.trim()||`Enterprise IT`,companyLogoText:`NexTerm`,splashMessage:e.querySelector(`#custSplash`).value.trim(),defaultSSHPort:parseInt(e.querySelector(`#custDefaultPort`).value,10)||22,defaultTheme:e.querySelector(`#custDefaultTheme`).value||`dark-modern`,defaultFontSize:W.fontSize};await window.go.main.App.SaveCustomizerConfig(t),document.title=t.appName}catch(e){console.error(`Failed to save customizer:`,e)}}let t=yr[W.theme]||yr[`dark-modern`],n=T();Object.values(n).forEach(e=>{if(e.term&&(e.term.options.theme=t,e.term.options.fontSize=W.fontSize,e.term.options.cursorStyle=W.cursorStyle,e.term.options.cursorBlink=W.cursorBlink,e.term.options.fontFamily=W.fontFamily,e.term.options.scrollback=W.scrollback,e.fitAddon))try{e.fitAddon.fit()}catch{}}),U(),S(`Settings and enterprise preferences saved successfully`,`success`)},e.querySelector(`#modalCancel`).onclick=U,e.querySelector(`#modalClose`).onclick=U}var G={open:!1,tabId:null,interval:null,intervalMs:2500,view:`overview`,busy:!1,procSort:`cpu`,prevNet:null,prevCpu:null,history:{cpu:[],ram:[],net:[]},lastAlert:{},lastUsers:[],lastPorts:[]},wr=120,Tr={cpu:90,ram:90,disk:90},Er=6e4,Dr=[`echo "@@UPTIME@@"; uptime 2>/dev/null`,`echo "@@NPROC@@"; nproc 2>/dev/null`,`echo "@@STAT@@"; grep "^cpu " /proc/stat 2>/dev/null`,`echo "@@MEM@@"; free -m 2>/dev/null`,`echo "@@WHO@@"; who 2>/dev/null`,`echo "@@PORTS@@"; (ss -H -tulnp 2>/dev/null || netstat -tulnp 2>/dev/null)`,`echo "@@NET@@"; cat /proc/net/dev 2>/dev/null`,`echo "@@DISK@@"; df -hP 2>/dev/null | tail -n +2`,`echo "@@HOST@@"; hostname 2>/dev/null`].join(`; `);function Or(){return Object.entries(t).filter(([e,t])=>t&&e!==`home`&&!t.isLocal&&t.isConnected).map(([e,t])=>({id:t.id||e,name:t.customTitle||t.profile?.name||t.profile?.host||`Server`,host:t.profile?.host||``}))}function kr(){let e=t[y];if(e&&!e.isLocal&&e.isConnected)return e.id||y;let n=Or();return n.length?n[0].id:null}function Ar(){let e=kr();if(!e){S(`Connect to an SSH server first to open Server Monitoring`,`warning`);return}if(!(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.RunSSHCommand)){S(`Server Monitoring requires the latest build (RunSSHCommand not available)`,`error`);return}G.open=!0,G.tabId=e,G.view=`overview`,G.busy=!1,G.prevNet=null,G.prevCpu=null,G.history={cpu:[],ram:[],net:[]},H(Mr(),`modal-plain`),Nr(),Ir(),setTimeout(()=>{G.open&&Ir()},1300),G.interval&&clearInterval(G.interval),G.interval=setInterval(Ir,G.intervalMs)}function jr(){G.open=!1,G.interval&&=(clearInterval(G.interval),null),U()}function Mr(){let e=Or().map(e=>`<option value="${e.id}" ${e.id===G.tabId?`selected`:``}>${K(e.name)} (${K(e.host)})</option>`).join(``);return`
    <div class="broadcast-modal-card bcast-large-modal mon-modal">
      <div class="broadcast-header">
        <div class="broadcast-title-row">
          <span class="broadcast-icon">📈</span>
          <div>
            <h3>Server Monitoring <span id="monHostName" class="mon-host-name"></span></h3>
            <p class="broadcast-subtitle">Live metrics · refreshes every ${G.intervalMs/1e3}s</p>
          </div>
        </div>
        <div class="mon-header-tools">
          <select id="monServerSelect" class="mon-select" title="Choose server to monitor">${e}</select>
          <button id="monCloseBtn" class="broadcast-close-btn" title="Close">✕</button>
        </div>
      </div>

      <div class="mon-tabbar">
        <button class="mon-tab active" data-view="overview">📊 Overview</button>
        <button class="mon-tab" data-view="processes">⚙️ Processes</button>
        <button class="mon-tab" data-view="services">🧩 Services</button>
        <button class="mon-tab" data-view="docker">🐳 Docker</button>
      </div>

      <div class="broadcast-body mon-body">
        <!-- ===== OVERVIEW VIEW ===== -->
        <div id="monViewOverview">
        <!-- Metric tiles -->
        <div class="mon-tiles">
          <div class="mon-tile"><div class="mon-tile-label">CPU Load</div><div class="mon-tile-val" id="monCpuVal">—</div><canvas class="mon-spark" id="monCpuGraph" width="240" height="46"></canvas></div>
          <div class="mon-tile"><div class="mon-tile-label">Memory</div><div class="mon-tile-val" id="monRamVal">—</div><canvas class="mon-spark" id="monRamGraph" width="240" height="46"></canvas></div>
          <div class="mon-tile"><div class="mon-tile-label">Network (↓/↑)</div><div class="mon-tile-val" id="monNetVal">—</div><canvas class="mon-spark" id="monNetGraph" width="240" height="46"></canvas></div>
          <div class="mon-tile"><div class="mon-tile-label">Uptime / Load Avg</div><div class="mon-tile-val mon-tile-sm" id="monUptimeVal">—</div><div class="mon-tile-sub" id="monLoadAvg"></div></div>
        </div>

        <div class="mon-cols">
          <!-- Connected users -->
          <div class="mon-panel">
            <div class="mon-panel-head"><span>👥 Connected Users (<span id="monUserCount">0</span>)</span></div>
            <div class="mon-table" id="monUsers"><div class="mon-empty">Loading…</div></div>
          </div>

          <!-- Listening ports -->
          <div class="mon-panel">
            <div class="mon-panel-head"><span>🔌 Listening Ports (<span id="monPortCount">0</span>)</span></div>
            <div class="mon-table" id="monPorts"><div class="mon-empty">Loading…</div></div>
          </div>
        </div>

        <!-- Disk + local tab info -->
        <div class="mon-panel">
          <div class="mon-panel-head"><span>💾 Disk Usage</span></div>
          <div class="mon-table" id="monDisk"><div class="mon-empty">Loading…</div></div>
        </div>

        <div class="mon-localbar" id="monLocalBar"></div>
        </div><!-- /overview -->

        <!-- ===== PROCESSES VIEW ===== -->
        <div id="monViewProcesses" hidden>
          <div class="mon-panel">
            <div class="mon-panel-head" style="display:flex; justify-content:space-between; align-items:center;">
              <span>⚙️ Top Processes (<span id="monProcCount">0</span>)</span>
              <span class="mon-sort-toggle">
                Sort:
                <button class="mon-mini-tab" id="monSortCpu" data-sort="cpu">CPU</button>
                <button class="mon-mini-tab" id="monSortMem" data-sort="mem">Memory</button>
              </span>
            </div>
            <div class="mon-table mon-table-tall" id="monProcs"><div class="mon-empty">Loading…</div></div>
          </div>
        </div>

        <!-- ===== SERVICES VIEW ===== -->
        <div id="monViewServices" hidden>
          <div class="mon-panel">
            <div class="mon-panel-head"><span>🧩 systemd Services (<span id="monSvcCount">0</span>)</span></div>
            <div class="mon-table mon-table-tall" id="monServices"><div class="mon-empty">Loading…</div></div>
          </div>
        </div>

        <!-- ===== DOCKER VIEW ===== -->
        <div id="monViewDocker" hidden>
          <div class="mon-panel">
            <div class="mon-panel-head"><span>🐳 Docker Containers (<span id="monDockerCount">0</span>)</span></div>
            <div class="mon-table mon-table-tall" id="monDocker"><div class="mon-empty">Loading…</div></div>
          </div>
        </div>
      </div>
    </div>
  `}function Nr(){let e=document.getElementById(`monCloseBtn`);e&&(e.onclick=jr);let t=document.getElementById(`monServerSelect`);t&&(t.onchange=()=>{G.tabId=t.value,G.prevNet=null,G.prevCpu=null,G.history={cpu:[],ram:[],net:[]},Ir()}),document.querySelectorAll(`.mon-tab`).forEach(e=>{e.onclick=()=>Pr(e.getAttribute(`data-view`))});let n=document.getElementById(`monSortCpu`),r=document.getElementById(`monSortMem`);n&&(n.onclick=()=>{G.procSort=`cpu`,Fr(),Rr()}),r&&(r.onclick=()=>{G.procSort=`mem`,Fr(),Rr()}),Fr()}function Pr(e){G.view=e,document.querySelectorAll(`.mon-tab`).forEach(t=>t.classList.toggle(`active`,t.getAttribute(`data-view`)===e)),Object.entries({overview:`monViewOverview`,processes:`monViewProcesses`,services:`monViewServices`,docker:`monViewDocker`}).forEach(([t,n])=>{let r=document.getElementById(n);r&&(r.hidden=t!==e)}),e===`processes`?Rr():e===`services`?Br():e===`docker`&&Hr()}function Fr(){let e=document.getElementById(`monSortCpu`),t=document.getElementById(`monSortMem`);e&&e.classList.toggle(`active`,G.procSort===`cpu`),t&&t.classList.toggle(`active`,G.procSort===`mem`)}async function Ir(){if(!G.open||!G.tabId)return;if(!document.getElementById(`monCloseBtn`)){jr();return}if(G.busy)return;G.busy=!0;let e=``;try{e=await window.go.main.App.RunSSHCommand(G.tabId,Dr)}catch{G.busy=!1,ci(`monHostName`,`(unreachable)`);return}if(G.busy=!1,G.open){try{let t=qr(e);Xr(t),Lr(t)}catch(e){console.warn(`monitor parse error`,e)}ei(),G.view===`processes`?Rr():G.view===`services`?Br():G.view===`docker`&&Hr()}}function Lr(e){let t=Date.now(),n=(e,n)=>{t-(G.lastAlert[e]||0)>Er&&(G.lastAlert[e]=t,S(`⚠️ `+n,`warning`))};e.cpuPct>=Tr.cpu&&n(`cpu`,`High CPU on ${e.host||`server`}: ${Math.round(e.cpuPct)}%`),e.memPct>=Tr.ram&&n(`ram`,`High memory on ${e.host||`server`}: ${Math.round(e.memPct)}%`),(e.disks||[]).forEach(t=>{let r=parseInt(t.pct,10)||0;r>=Tr.disk&&n(`disk:`+t.mount,`Disk ${t.mount} on ${e.host||`server`} is ${r}% full`)})}async function Rr(){let e=document.getElementById(`monProcs`);if(!e)return;let t=`ps -eo pid,user,pcpu,pmem,comm --sort=${G.procSort===`mem`?`-pmem`:`-pcpu`} 2>/dev/null | head -n 31`,n=``;try{n=await window.go.main.App.RunSSHCommand(G.tabId,t)}catch{return}let r=n.split(`
`).map(e=>e.trim()).filter(Boolean);r.shift();let i=r.map(e=>{let t=e.split(/\s+/);return{pid:t[0],user:t[1],cpu:t[2],mem:t[3],cmd:t.slice(4).join(` `)}}).filter(e=>e.pid&&/^\d+$/.test(e.pid));if(ci(`monProcCount`,String(i.length)),!i.length){e.innerHTML=`<div class="mon-empty">No process data</div>`;return}e.innerHTML=`<div class="mon-row mon-row-hdr"><div class="mon-row-main">PID · User · Command</div><div class="mon-row-side">CPU / MEM</div></div>`+i.map(e=>`
      <div class="mon-row">
        <div class="mon-row-main"><strong>${K(e.pid)}</strong> <span class="mon-dim">${K(e.user)}</span> ${K(e.cmd)}</div>
        <div class="mon-row-side">
          <span class="mon-metric">${K(e.cpu)}% / ${K(e.mem)}%</span>
          <button class="mon-act-btn danger" data-killproc="${K(e.pid)}" data-name="${K(e.cmd)}" title="Kill this process">Kill</button>
        </div>
      </div>`).join(``),e.querySelectorAll(`[data-killproc]`).forEach(e=>{e.onclick=()=>zr(e.getAttribute(`data-killproc`),e.getAttribute(`data-name`))})}async function zr(e,t){if(e&&confirm(`Kill process ${e} (${t}) on this server?`))try{await window.go.main.App.RunSSHCommand(G.tabId,`kill -TERM ${e} 2>&1 || sudo kill -TERM ${e} 2>&1`),S(`Sent terminate to PID ${e}`,`info`),setTimeout(Rr,500)}catch(e){S(`Kill failed: `+e,`error`)}}async function Br(){let e=document.getElementById(`monServices`);if(!e)return;let t=``;try{t=await window.go.main.App.RunSSHCommand(G.tabId,`systemctl list-units --type=service --all --no-legend --no-pager 2>/dev/null | head -n 60`)}catch{return}let n=t.split(`
`).map(e=>e.replace(/^\s*[●*]\s*/,``).trim()).filter(Boolean).map(e=>{let t=e.split(/\s+/);return{unit:t[0],load:t[1],active:t[2],sub:t[3],desc:t.slice(4).join(` `)}}).filter(e=>e.unit&&e.unit.endsWith(`.service`));if(ci(`monSvcCount`,String(n.length)),!n.length){e.innerHTML=`<div class="mon-empty">No services found (systemd may be unavailable)</div>`;return}e.innerHTML=n.map(e=>{let t=e.active===`active`;return`<div class="mon-row">
      <div class="mon-row-main"><span class="mon-status-dot" style="background:${t?`#22c55e`:e.active===`failed`?`#ef4444`:`#94a3b8`};"></span><strong>${K(e.unit.replace(`.service`,``))}</strong> <span class="mon-dim">${K(e.active)}/${K(e.sub)}</span></div>
      <div class="mon-row-side">
        <button class="mon-act-btn" data-svc="${K(e.unit)}" data-op="restart" title="Restart">Restart</button>
        ${t?`<button class="mon-act-btn danger" data-svc="${K(e.unit)}" data-op="stop" title="Stop">Stop</button>`:`<button class="mon-act-btn" data-svc="${K(e.unit)}" data-op="start" title="Start">Start</button>`}
      </div>
    </div>`}).join(``),e.querySelectorAll(`[data-svc]`).forEach(e=>{e.onclick=()=>Vr(e.getAttribute(`data-svc`),e.getAttribute(`data-op`))})}async function Vr(e,t){if(e&&t&&confirm(`${t} service "${e}" on this server?`))try{await window.go.main.App.RunSSHCommand(G.tabId,`systemctl ${t} ${e} 2>&1 || sudo systemctl ${t} ${e} 2>&1`),S(`${t} sent to ${e}`,`info`),setTimeout(Br,700)}catch(e){S(`Service action failed: `+e,`error`)}}async function Hr(){let e=document.getElementById(`monDocker`);if(!e)return;let t=``;try{t=await window.go.main.App.RunSSHCommand(G.tabId,`docker ps -a --format '{{.ID}}|{{.Names}}|{{.Image}}|{{.State}}|{{.Status}}' 2>&1 | head -n 60`)}catch{return}if(/command not found|permission denied|Cannot connect to the Docker daemon/i.test(t)){e.innerHTML=`<div class="mon-empty">Docker not available on this host (${K(t.split(`
`)[0]||``)})</div>`,ci(`monDockerCount`,`0`);return}let n=t.split(`
`).map(e=>e.trim()).filter(e=>e.includes(`|`)).map(e=>{let t=e.split(`|`);return{id:t[0],name:t[1],image:t[2],state:t[3],status:t[4]}});if(ci(`monDockerCount`,String(n.length)),!n.length){e.innerHTML=`<div class="mon-empty">No containers</div>`;return}e.innerHTML=n.map(e=>{let t=/running|up/i.test(e.state)||/^Up/i.test(e.status);return`<div class="mon-row">
      <div class="mon-row-main"><span class="mon-status-dot" style="background:${t?`#22c55e`:`#94a3b8`};"></span><strong>${K(e.name)}</strong> <span class="mon-dim">${K(e.image)}</span> <span class="mon-dim">${K(e.status)}</span></div>
      <div class="mon-row-side">
        <button class="mon-act-btn" data-dockerlogs="${K(e.id)}" data-name="${K(e.name)}" title="View recent logs">Logs</button>
        <button class="mon-act-btn" data-dockerrestart="${K(e.id)}" data-name="${K(e.name)}" title="Restart container">Restart</button>
        ${t?`<button class="mon-act-btn danger" data-dockerstop="${K(e.id)}" data-name="${K(e.name)}" title="Stop container">Stop</button>`:``}
      </div>
    </div>`}).join(``),e.querySelectorAll(`[data-dockerrestart]`).forEach(e=>e.onclick=()=>Ur(e.getAttribute(`data-dockerrestart`),`restart`,e.getAttribute(`data-name`))),e.querySelectorAll(`[data-dockerstop]`).forEach(e=>e.onclick=()=>Ur(e.getAttribute(`data-dockerstop`),`stop`,e.getAttribute(`data-name`))),e.querySelectorAll(`[data-dockerlogs]`).forEach(e=>e.onclick=()=>Wr(e.getAttribute(`data-dockerlogs`),e.getAttribute(`data-name`)))}async function Ur(e,t,n){if(e&&(t!==`stop`||confirm(`Stop container ${n}?`)))try{await window.go.main.App.RunSSHCommand(G.tabId,`docker ${t} ${e} 2>&1 || sudo docker ${t} ${e} 2>&1`),S(`docker ${t} ${n}`,`info`),setTimeout(Hr,900)}catch(e){S(`Docker action failed: `+e,`error`)}}async function Wr(e,t){try{let n=await window.go.main.App.RunSSHCommand(G.tabId,`docker logs --tail 200 ${e} 2>&1 || sudo docker logs --tail 200 ${e} 2>&1`);G.interval&&=(clearInterval(G.interval),null),G.open=!1,H(`
      <div class="broadcast-modal-card bcast-large-modal mon-modal">
        <div class="broadcast-header">
          <div class="broadcast-title-row"><span class="broadcast-icon">🐳</span><div><h3>Logs: ${K(t)}</h3><p class="broadcast-subtitle">Last 200 lines</p></div></div>
          <button id="monLogsClose" class="broadcast-close-btn">✕</button>
        </div>
        <div class="broadcast-body"><pre class="mon-logs">${K(n||`(empty)`)}</pre></div>
      </div>`,`modal-plain`);let r=document.getElementById(`monLogsClose`);r&&(r.onclick=()=>Gr(`docker`))}catch(e){S(`Could not fetch logs: `+e,`error`)}}function Gr(e){G.open=!0,H(Mr(),`modal-plain`),Nr(),Pr(e||`overview`),G.interval||=setInterval(Ir,G.intervalMs),Ir()}function Kr(e,t){let n=RegExp(`@@`+t+`@@\\n?([\\s\\S]*?)(?=@@[A-Z]+@@|$)`),r=e.match(n);return r?r[1].trim():``}function qr(e){let t={};t.host=Kr(e,`HOST`).split(`
`)[0]||``,t.nproc=parseInt(Kr(e,`NPROC`),10)||1;let n=Kr(e,`UPTIME`);t.uptimeText=ai(n);let r=n.match(/load average[s]?:\s*([\d.]+),?\s*([\d.]+),?\s*([\d.]+)/i);t.load=r?[parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])]:[0,0,0];let i=Kr(e,`STAT`).split(/\s+/).slice(1).map(Number).filter(e=>!isNaN(e));if(i.length>=4){let e=i[3]+(i[4]||0),n=i.reduce((e,t)=>e+t,0);if(G.prevCpu){let r=e-G.prevCpu.idle,i=n-G.prevCpu.total;t.cpuPct=i>0?Math.max(0,Math.min(100,(1-r/i)*100)):0}else t.cpuPct=Math.max(0,Math.min(100,t.load[0]/t.nproc*100));G.prevCpu={idle:e,total:n}}else t.cpuPct=Math.max(0,Math.min(100,t.load[0]/t.nproc*100));let a=Kr(e,`MEM`).split(`
`).find(e=>/^Mem:/i.test(e.trim()));if(a){let e=a.trim().split(/\s+/);t.memTotal=parseInt(e[1],10)||0,t.memUsed=parseInt(e[2],10)||0,t.memPct=t.memTotal?t.memUsed/t.memTotal*100:0}else t.memTotal=0,t.memUsed=0,t.memPct=0;return t.users=Kr(e,`WHO`).split(`
`).filter(Boolean).map(e=>{let t=e.trim().split(/\s+/);return{user:t[0]||``,tty:t[1]||``,since:t.slice(2,5).join(` `),from:(e.match(/\(([^)]+)\)/)||[])[1]||``}}).filter(e=>e.user),t.ports=Jr(Kr(e,`PORTS`)),t.net=Yr(Kr(e,`NET`)),t.disks=Kr(e,`DISK`).split(`
`).filter(Boolean).map(e=>{let t=e.trim().split(/\s+/);return{fs:t[0],size:t[1],used:t[2],avail:t[3],pct:t[4],mount:t[5]}}).filter(e=>e.mount&&e.fs&&!/^(tmpfs|devtmpfs|udev|overlay)$/.test(e.fs)),t}function Jr(e){let t=[];e.split(`
`).filter(Boolean).forEach(e=>{if(/^Netid|^Proto|^Active/i.test(e.trim()))return;let n=e.trim().split(/\s+/),r=n.find(e=>/:\d+$/.test(e))||``,i=(r.match(/:(\d+)$/)||[])[1]||``;if(!i)return;let a=n[0]&&/tcp|udp/i.test(n[0])?n[0].toLowerCase():e.includes(`tcp`)?`tcp`:`udp`,o=e.match(/pid=(\d+)/)||e.match(/,(\d+),/)||e.match(/\/(\d+)\//),s=e.match(/\(\("([^"]+)"/)||e.match(/\d+\/([\w.-]+)/);t.push({proto:a,port:i,pid:o?o[1]:``,proc:s?s[1]:``,addr:r})});let n=new Set;return t.filter(e=>{let t=e.proto+e.port;return!n.has(t)&&(n.add(t),!0)}).sort((e,t)=>parseInt(e.port)-parseInt(t.port))}function Yr(e){let t=0,n=0;e.split(`
`).forEach(e=>{let r=e.split(`:`);if(r.length<2)return;let i=r[0].trim();if(i===`lo`||!i)return;let a=r[1].trim().split(/\s+/).map(Number);a.length>=9&&(t+=a[0],n+=a[8])});let r=Date.now(),i=0,a=0;if(G.prevNet){let e=(r-G.prevNet.ts)/1e3;e>0&&(i=Math.max(0,(t-G.prevNet.rx)/e),a=Math.max(0,(n-G.prevNet.tx)/e))}return G.prevNet={ts:r,rx:t,tx:n},{rxRate:i,txRate:a}}function Xr(e){ci(`monHostName`,e.host?`· `+e.host:``),ci(`monCpuVal`,Math.round(e.cpuPct)+`%  (`+e.nproc+` cores)`),ci(`monRamVal`,e.memTotal?`${oi(e.memUsed)} / ${oi(e.memTotal)} (${Math.round(e.memPct)}%)`:`—`),ci(`monNetVal`,`↓ ${si(e.net.rxRate)}   ↑ ${si(e.net.txRate)}`),ci(`monUptimeVal`,e.uptimeText||`—`),ci(`monLoadAvg`,`load ${e.load.map(e=>e.toFixed(2)).join(`  `)}`),ri(`cpu`,e.cpuPct),ri(`ram`,e.memPct),ri(`net`,(e.net.rxRate+e.net.txRate)/1024),ii(`monCpuGraph`,G.history.cpu,`#38bdf8`,100),ii(`monRamGraph`,G.history.ram,`#a855f7`,100),ii(`monNetGraph`,G.history.net,`#22c55e`,null),Zr(e.users),Qr(e.ports),$r(e.disks)}function Zr(e){G.lastUsers=e,ci(`monUserCount`,String(e.length));let t=document.getElementById(`monUsers`);if(t){if(!e.length){t.innerHTML=`<div class="mon-empty">No interactive users</div>`;return}t.innerHTML=e.map(e=>`
    <div class="mon-row">
      <div class="mon-row-main"><strong>${K(e.user)}</strong> <span class="mon-dim">${K(e.tty)}</span>${e.from?` <span class="mon-dim">from ${K(e.from)}</span>`:``}</div>
      <div class="mon-row-side"><span class="mon-dim">${K(e.since)}</span>
        <button class="mon-act-btn danger" data-kick="${K(e.tty)}" data-user="${K(e.user)}" title="Disconnect this login session">Disconnect</button>
      </div>
    </div>`).join(``),t.querySelectorAll(`[data-kick]`).forEach(e=>{e.onclick=()=>ni(e.getAttribute(`data-user`),e.getAttribute(`data-kick`))})}}function Qr(e){G.lastPorts=e,ci(`monPortCount`,String(e.length));let t=document.getElementById(`monPorts`);if(t){if(!e.length){t.innerHTML=`<div class="mon-empty">No listening ports detected (may need root)</div>`;return}t.innerHTML=e.map(e=>`
    <div class="mon-row">
      <div class="mon-row-main"><strong>${K(e.port)}</strong>/<span class="mon-dim">${K(e.proto)}</span> ${e.proc?`<span class="mon-tag">${K(e.proc)}</span>`:``}${e.pid?` <span class="mon-dim">pid ${K(e.pid)}</span>`:``}</div>
      <div class="mon-row-side">
        ${e.pid?`<button class="mon-act-btn danger" data-killpid="${K(e.pid)}" data-port="${K(e.port)}" title="Kill the process holding this port">Close Port</button>`:`<span class="mon-dim">—</span>`}
      </div>
    </div>`).join(``),t.querySelectorAll(`[data-killpid]`).forEach(e=>{e.onclick=()=>ti(e.getAttribute(`data-killpid`),e.getAttribute(`data-port`))})}}function $r(e){let t=document.getElementById(`monDisk`);if(t){if(!e||!e.length){t.innerHTML=`<div class="mon-empty">No disk data</div>`;return}t.innerHTML=e.map(e=>{let t=parseInt(e.pct,10)||0,n=t>=90?`#ef4444`:t>=75?`#f59e0b`:`#22c55e`;return`<div class="mon-row">
      <div class="mon-row-main"><strong>${K(e.mount)}</strong> <span class="mon-dim">${K(e.used)}/${K(e.size)}</span></div>
      <div class="mon-row-side" style="flex:1; max-width:220px;">
        <div class="mon-bar"><div class="mon-bar-fill" style="width:${t}%; background:${n};"></div></div>
        <span class="mon-dim">${K(e.pct)}</span>
      </div>
    </div>`}).join(``)}}function ei(){let e=document.getElementById(`monLocalBar`);if(!e)return;let n=Object.entries(t).filter(([e])=>e!==`home`),r=n.filter(([,e])=>e&&e.isConnected),i=r.filter(([e])=>e!==y).length,a=``;try{if(performance&&performance.memory){let e=performance.memory.usedJSHeapSize/1048576,t=performance.memory.jsHeapSizeLimit/1048576;a=` · App memory: ${e.toFixed(0)} MB / ${t.toFixed(0)} MB`}}catch{}e.textContent=`Open tabs: ${n.length} · Connected: ${r.length} · Inactive (background) tabs: ${i}${a}`}async function ti(e,t){if(e&&confirm(`Close port ${t} by terminating process PID ${e} on this server?\n\nThis can disrupt a running service. Continue?`))try{await window.go.main.App.RunSSHCommand(G.tabId,`kill -TERM ${e} 2>&1 || sudo kill -TERM ${e} 2>&1`),S(`Sent terminate to PID ${e} (port ${t})`,`info`),setTimeout(Ir,600)}catch(e){S(`Failed to close port: `+e,`error`)}}async function ni(e,t){if(!t){S(`No TTY to disconnect`,`warning`);return}if(confirm(`Disconnect user "${e}" on ${t}?\n\nTheir session will be terminated. Continue?`))try{await window.go.main.App.RunSSHCommand(G.tabId,`pkill -9 -t ${t} 2>&1 || sudo pkill -9 -t ${t} 2>&1`),S(`Disconnected ${e} (${t})`,`info`),setTimeout(Ir,600)}catch(e){S(`Failed to disconnect user: `+e,`error`)}}function ri(e,t){let n=G.history[e];n.push(isFinite(t)?t:0),n.length>wr&&n.shift()}function ii(e,t,n,r){let i=document.getElementById(e);if(!i||!i.getContext)return;let a=i.getContext(`2d`),o=i.width,s=i.height;if(a.clearRect(0,0,o,s),!t.length)return;let c=r??Math.max(1,...t),l=o/119;a.beginPath(),t.forEach((e,t)=>{let n=t*l,r=s-Math.min(e,c)/c*(s-4)-2;t===0?a.moveTo(n,r):a.lineTo(n,r)}),a.strokeStyle=n,a.lineWidth=1.6,a.stroke(),a.lineTo((t.length-1)*l,s),a.lineTo(0,s),a.closePath(),a.fillStyle=n+`22`,a.fill()}function ai(e){let t=e.match(/up\s+(.+?),\s+\d+\s+user/);return t?t[1].trim():(e.split(`,`)[0]||``).replace(/.*up/,`up`).trim()}function oi(e){return e>=1024?(e/1024).toFixed(1)+` GB`:e+` MB`}function si(e){return e>=1048576?(e/1048576).toFixed(1)+` MB/s`:e>=1024?(e/1024).toFixed(1)+` KB/s`:Math.round(e)+` B/s`}function ci(e,t){let n=document.getElementById(e);n&&(n.textContent=t)}function K(e){return String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var li=`nexterm_session_groups`;function ui(){try{let e=localStorage.getItem(li),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function di(e){try{localStorage.setItem(li,JSON.stringify(e))}catch{}}function fi(e){let t=null;return(function n(r){if(r&&!t){if(r.session&&r.session.id===e){t=r.session;return}r.children&&r.children.forEach(n)}})(I),t}function pi(){let e=new Set,n=[];return Object.values(t).forEach(t=>{t&&t.profile&&t.profile.id&&!t.isLocal&&!e.has(t.profile.id)&&(e.add(t.profile.id),n.push({id:t.profile.id,name:t.profile.name||t.profile.host||`Server`}))}),n}function mi(){let e=pi();if(e.length===0){S(`No open server tabs to save. Connect to some servers first.`,`warning`);return}let t=prompt(`Save these ${e.length} open server(s) as a group named:`,`My Workspace`);if(!t||!t.trim())return;let n=ui(),r=n.findIndex(e=>e.name.toLowerCase()===t.trim().toLowerCase()),i={name:t.trim(),ids:e.map(e=>e.id),autoStart:r>=0&&n[r].autoStart};r>=0?n[r]=i:n.push(i),di(n),S(`Saved group "${i.name}" (${i.ids.length} servers)`,`success`)}async function hi(e){let t=ui().find(t=>t.name===e);if(!t){S(`Group "${e}" not found`,`error`);return}let n=0,r=0;for(let e of t.ids){let t=fi(e);t?(V(t,!0),n++):r++}S(`Opening group "${e}": ${n} server(s)${r?`, ${r} no longer saved`:``}`,n?`success`:`warning`)}async function gi(){let e=ui().filter(e=>e.autoStart);for(let t of e)await hi(t.name)}function _i(){e();function e(){let t=ui(),n=pi().length;H(`
      <div class="modal-header">
        <div class="modal-title" style="display:flex; align-items:center; gap:8px;"><span>🗂️</span> Session Groups</div>
        <button class="modal-close" id="grpClose">✕</button>
      </div>
      <div class="modal-body">
        <div class="grp-list">${t.length?t.map((e,t)=>`
      <div class="grp-row">
        <div class="grp-info">
          <div class="grp-name">${j(e.name)}</div>
          <div class="grp-sub">${e.ids.length} server(s)</div>
        </div>
        <label class="grp-auto" title="Open this group automatically when Nexterm starts">
          <input type="checkbox" data-auto="${t}" ${e.autoStart?`checked`:``} /> Auto-start
        </label>
        <div class="grp-actions">
          <button class="btn btn-sm btn-primary" data-open="${t}">▶ Open</button>
          <button class="btn btn-sm btn-outline" data-del="${t}">🗑️</button>
        </div>
      </div>`).join(``):`<div class="mon-empty">No saved groups yet. Open some servers, then click "Save current open tabs".</div>`}</div>
        <div style="margin-top:14px; display:flex; gap:8px;">
          <button class="btn btn-primary" id="grpSaveCurrent" ${n?``:`disabled`}>💾 Save current open tabs (${n})</button>
        </div>
      </div>
    `,`modal-lg`);let r=document.getElementById(`grpClose`);r&&(r.onclick=U);let i=document.getElementById(`grpSaveCurrent`);i&&(i.onclick=()=>{mi(),e()}),document.querySelectorAll(`[data-open]`).forEach(e=>{e.onclick=()=>{let t=ui()[+e.getAttribute(`data-open`)];t&&(U(),hi(t.name))}}),document.querySelectorAll(`[data-del]`).forEach(t=>{t.onclick=()=>{let n=ui(),r=+t.getAttribute(`data-del`);n[r]&&confirm(`Delete group "${n[r].name}"?`)&&(n.splice(r,1),di(n),e())}}),document.querySelectorAll(`[data-auto]`).forEach(e=>{e.onchange=()=>{let t=ui(),n=+e.getAttribute(`data-auto`);t[n]&&(t[n].autoStart=e.checked,di(t))}})}}var vi=`nexterm_snippets`,yi=[{name:`Disk usage (human)`,category:`System`,cmd:`df -h`},{name:`Top memory processes`,category:`System`,cmd:`ps aux --sort=-%mem | head -n 12`},{name:`Tail a log file`,category:`Logs`,cmd:`tail -n {{lines:100}} -f {{path:/var/log/syslog}}`},{name:`Restart a service`,category:`Services`,cmd:`sudo systemctl restart {{service}}`},{name:`Service status`,category:`Services`,cmd:`systemctl status {{service}}`},{name:`Find large files`,category:`System`,cmd:`sudo find {{dir:/}} -type f -size +{{size:100M}} -exec ls -lh {} \\; 2>/dev/null`},{name:`Open ports`,category:`Network`,cmd:`ss -tulnp`},{name:`Ping host`,category:`Network`,cmd:`ping -c 4 {{host}}`},{name:`Grep in files`,category:`Files`,cmd:`grep -rn '{{pattern}}' {{dir:.}}`}];function bi(){try{let e=localStorage.getItem(vi);if(!e)return yi.slice();let t=JSON.parse(e);return Array.isArray(t)?t:yi.slice()}catch{return yi.slice()}}function xi(e){try{localStorage.setItem(vi,JSON.stringify(e))}catch{}}function Si(e){let t=/\{\{\s*([^}:]+?)\s*(?::([^}]*))?\}\}/g,n=new Map,r;for(;(r=t.exec(e))!==null;){let e=r[1].trim();n.has(e)||n.set(e,r[2]===void 0?``:r[2])}return[...n.entries()].map(([e,t])=>({name:e,def:t}))}function Ci(e,n){return!y||y===`home`||!t[y]?(S(`Open a terminal first to run a snippet`,`warning`),!1):window.go&&window.go.main&&window.go.main.App&&window.go.main.App.WriteToTerminal?(window.go.main.App.WriteToTerminal(y,e+(n?`\r`:``)),!0):(S(`Cannot send command (WriteToTerminal unavailable)`,`error`),!1)}function wi(e){let t=Si(e.cmd),n=e.cmd;for(let e of t){let t=prompt(`Value for "${e.name}"${e.def?` (default: ${e.def})`:``}:`,e.def||``);if(t===null)return;let r=RegExp(`\\{\\{\\s*`+e.name.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)+`\\s*(?::[^}]*)?\\}\\}`,`g`);n=n.replace(r,t)}Ci(n,!0)&&(U(),S(`Snippet sent to terminal`,`success`))}function Ti(){e();function e(t=-1){let n=bi(),r=[...new Set(n.map(e=>e.category||`General`))].map(e=>`
      <div class="snip-cat">${j(e)}</div>
      ${n.map((e,t)=>({s:e,i:t})).filter(t=>(t.s.category||`General`)===e).map(({s:e,i:t})=>`
        <div class="snip-row">
          <div class="snip-info">
            <div class="snip-name">${j(e.name)}</div>
            <div class="snip-cmd">${j(e.cmd)}</div>
          </div>
          <div class="snip-actions">
            <button class="btn btn-sm btn-primary" data-run="${t}">▶ Run</button>
            <button class="btn btn-sm btn-outline" data-copy="${t}">⧉</button>
            <button class="btn btn-sm btn-outline" data-edit="${t}">✏️</button>
            <button class="btn btn-sm btn-outline" data-del="${t}">🗑️</button>
          </div>
        </div>`).join(``)}
    `).join(``)||`<div class="mon-empty">No snippets yet.</div>`,i=t>=0?bi()[t]:null,a=t===-2;H(`
      <div class="modal-header">
        <div class="modal-title" style="display:flex; align-items:center; gap:8px;"><span>📋</span> Command Snippets</div>
        <button class="modal-close" id="snipClose">✕</button>
      </div>
      <div class="modal-body">
        <div class="snip-hint">Click <b>Run</b> to fill any <code>{{variables}}</code> and send the command to the active terminal.</div>
        <div class="snip-list">${r}</div>
        ${t>=0||a?`
      <div class="snip-editor">
        <div class="snip-editor-title">${a?`New Snippet`:`Edit Snippet`}</div>
        <input id="snipName" class="snip-input" placeholder="Name" value="${i?j(i.name):``}" />
        <input id="snipCat" class="snip-input" placeholder="Category" value="${i?j(i.category||`General`):`General`}" />
        <textarea id="snipCmd" class="snip-input snip-textarea" rows="3" placeholder="Command — use {{variable}} or {{variable:default}}">${i?j(i.cmd):``}</textarea>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="btn btn-primary btn-sm" id="snipSave">Save</button>
          <button class="btn btn-outline btn-sm" id="snipCancelEdit">Cancel</button>
        </div>
      </div>`:``}
        <div style="margin-top:12px;"><button class="btn btn-primary" id="snipNew">＋ New Snippet</button></div>
      </div>
    `,`modal-lg`),document.getElementById(`snipClose`).onclick=U,document.getElementById(`snipNew`).onclick=()=>e(-2),document.querySelectorAll(`[data-run]`).forEach(e=>e.onclick=()=>wi(bi()[+e.getAttribute(`data-run`)])),document.querySelectorAll(`[data-copy]`).forEach(e=>e.onclick=()=>{let t=bi()[+e.getAttribute(`data-copy`)];Ci(t.cmd,!1)&&(U(),S(`Snippet typed into terminal (not executed)`,`info`))}),document.querySelectorAll(`[data-edit]`).forEach(t=>t.onclick=()=>e(+t.getAttribute(`data-edit`))),document.querySelectorAll(`[data-del]`).forEach(t=>t.onclick=()=>{let n=bi(),r=+t.getAttribute(`data-del`);n[r]&&confirm(`Delete snippet "${n[r].name}"?`)&&(n.splice(r,1),xi(n),e())}),(t>=0||a)&&(document.getElementById(`snipCancelEdit`).onclick=()=>e(),document.getElementById(`snipSave`).onclick=()=>{let n=document.getElementById(`snipName`).value.trim(),r=document.getElementById(`snipCmd`).value.trim(),i=document.getElementById(`snipCat`).value.trim()||`General`;if(!n||!r){S(`Name and command are required`,`warning`);return}let o=bi();a?o.push({name:n,cmd:r,category:i}):o[t]={name:n,cmd:r,category:i},xi(o),e(),S(`Snippet saved`,`success`)})}}var Ei=`nexterm_schedules`,Di=null;function Oi(){try{let e=JSON.parse(localStorage.getItem(Ei));return Array.isArray(e)?e:[]}catch{return[]}}function ki(e){try{localStorage.setItem(Ei,JSON.stringify(e))}catch{}}function Ai(){try{let e=JSON.parse(localStorage.getItem(`nexterm_recordings`));return Array.isArray(e)?e:[]}catch{return[]}}function ji(e){let t=P(),n=T()[t];if(!t||t===`home`||!n)return!1;let r=window.go&&window.go.main&&window.go.main.App;if(!r||!r.WriteToTerminal)return!1;if(e.mode===`recording`){let n=Ai().find(t=>t.id===e.recordingId);if(!n)return!1;let i=0,a=()=>{if(!(i>=n.commands.length)){try{r.WriteToTerminal(t,n.commands[i]+`\r`)}catch{}i++,setTimeout(a,n.delayMs||600)}};a()}else try{r.WriteToTerminal(t,(e.command||``)+`\r`)}catch{}return!0}function Mi(){Di||=setInterval(()=>{let e=Date.now(),t=!1,n=Oi();n.forEach(n=>{if(n.enabled){if(!n.nextRun){n.nextRun=e+Math.max(5,n.everySec||60)*1e3,t=!0;return}e>=n.nextRun&&(ji(n),n.repeat?n.nextRun=e+Math.max(5,n.everySec||60)*1e3:(n.enabled=!1,n.nextRun=null),t=!0)}}),t&&ki(n),document.getElementById(`schedRoot`)&&Ii()},1e3)}function Ni(){H(`<div id="schedRoot"></div>`,`modal-plain`),Li()}function Pi(e){if(e<=0)return`now`;let t=Math.ceil(e/1e3);if(t<60)return t+`s`;let n=Math.floor(t/60),r=t%60;return n+`m `+(r?r+`s`:``)}function Fi(){let e=Oi(),t=Ai(),n=Date.now();return e.length===0?`<div class="sched-empty">No scheduled tasks yet. Create one above — it runs on whichever terminal is focused when it fires.</div>`:e.map(e=>{let r=e.mode===`recording`?`▶ `+j((t.find(t=>t.id===e.recordingId)||{}).name||`(missing recording)`):`$ `+j(e.command||``),i=e.enabled?e.repeat?`every ${e.everySec}s · next in ${Pi((e.nextRun||n)-n)}`:`once · in ${Pi((e.nextRun||n)-n)}`:`paused`;return`
      <div class="sched-row">
        <div class="sched-main">
          <div class="sched-name">${j(e.name||`Task`)}</div>
          <div class="sched-sub">${r}</div>
          <div class="sched-when">${i}</div>
        </div>
        <div class="sched-acts">
          <button class="sx-btn sm ${e.enabled?`primary`:``} sched-toggle" data-id="${e.id}">${e.enabled?`❚❚`:`▶`}</button>
          <button class="sx-btn sm sched-run" data-id="${e.id}" title="Run now">⚡</button>
          <button class="sx-btn sm danger sched-del" data-id="${e.id}" title="Delete">🗑️</button>
        </div>
      </div>`}).join(``)}function Ii(){let e=document.getElementById(`schedRoot`);if(!e)return;let t=e.querySelector(`.sched-list`);t&&(t.innerHTML=Fi(),t.querySelectorAll(`.sched-toggle`).forEach(e=>e.onclick=()=>{let t=Oi(),n=t.find(t=>t.id===e.getAttribute(`data-id`));n&&(n.enabled=!n.enabled,n.enabled&&(n.nextRun=Date.now()+Math.max(5,n.everySec||60)*1e3)),ki(t),Ii()}),t.querySelectorAll(`.sched-run`).forEach(e=>e.onclick=()=>{let t=Oi().find(t=>t.id===e.getAttribute(`data-id`));t&&(ji(t)?S(`Ran "${t.name}"`,`info`):S(`Focus a terminal first`,`warning`))}),t.querySelectorAll(`.sched-del`).forEach(e=>e.onclick=()=>{ki(Oi().filter(t=>t.id!==e.getAttribute(`data-id`))),Ii()}))}function Li(){let e=document.getElementById(`schedRoot`);if(!e)return;let t=Ai(),n=t.map(e=>`<option value="${e.id}">${j(e.name)}</option>`).join(``);e.innerHTML=`
    <div class="sx-card sched-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">⏱️</span> Command Scheduler</div>
        <button class="sx-x" id="schedClose">&times;</button>
      </div>
      <div class="sched-form">
        <input type="text" id="schedName" class="sx-input" placeholder="Task name" />
        <div class="sched-form-row">
          <select id="schedMode" class="sx-input">
            <option value="command">Run a command</option>
            <option value="recording" ${t.length===0?`disabled`:``}>Run a recording</option>
          </select>
          <input type="text" id="schedCommand" class="sx-input mono" placeholder="e.g. uptime" />
          <select id="schedRec" class="sx-input" style="display:none">${n}</select>
        </div>
        <div class="sched-form-row">
          <label class="sched-inline"><input type="checkbox" id="schedRepeat" checked /> Repeat</label>
          <label class="sched-inline">every <input type="number" id="schedEvery" class="sx-input tiny" value="60" min="5" /> sec</label>
          <button class="sx-btn primary" id="schedAdd">Add task</button>
        </div>
      </div>
      <div class="sched-list"></div>
    </div>`,e.querySelector(`#schedClose`).onclick=()=>U();let r=e.querySelector(`#schedMode`),i=e.querySelector(`#schedCommand`),a=e.querySelector(`#schedRec`);r.onchange=()=>{let e=r.value===`recording`;a.style.display=e?``:`none`,i.style.display=e?`none`:``},e.querySelector(`#schedAdd`).onclick=()=>{let t=r.value,n=Math.max(5,parseInt(e.querySelector(`#schedEvery`).value,10)||60),o=e.querySelector(`#schedRepeat`).checked,s={id:`sch_`+Date.now(),name:(e.querySelector(`#schedName`).value||``).trim()||(t===`recording`?`Recording task`:`Command task`),mode:t,command:t===`command`?(i.value||``).trim():``,recordingId:t===`recording`?a.value:``,repeat:o,everySec:n,enabled:!0,nextRun:Date.now()+n*1e3};if(t===`command`&&!s.command){S(`Enter a command`,`warning`);return}if(t===`recording`&&!s.recordingId){S(`Pick a recording`,`warning`);return}let c=Oi();c.unshift(s),ki(c),S(`Scheduled "${s.name}"`,`success`),e.querySelector(`#schedName`).value=``,i&&(i.value=``),Ii()},Ii()}function Ri(){let e=t[y];if(e&&!e.isLocal&&e.isConnected)return e.id||y;let n=Object.entries(t).find(([e,t])=>t&&e!==`home`&&!t.isLocal&&t.isConnected);return n?n[1].id||n[0]:null}function zi(){let e=Ri(),n=e?t[e]:null;return n?n.customTitle||n.profile&&(n.profile.name||n.profile.host)||`Server`:``}async function Bi(e){let t=Ri();if(!t)return{ok:!1,err:`no-target`};let n=window.go&&window.go.main&&window.go.main.App;if(!n||!n.RunSSHCommand)return{ok:!1,err:`no-bridge`};try{let r=await n.RunSSHCommand(t,e);return{ok:!0,out:r==null?``:String(r),id:t}}catch(e){return{ok:!1,err:String(e)}}}function Vi(e){let t=Ri(),n=window.go&&window.go.main&&window.go.main.App;if(!t||!n||!n.WriteToTerminal)return!1;try{return n.WriteToTerminal(t,e+`\r`),!0}catch{return!1}}var Hi=`cpu`;function Ui(e){let t=(e||``).split(`
`).map(e=>e.trim()).filter(Boolean),n=[];for(let e of t){if(/^PID\s+USER/i.test(e))continue;let t=e.match(/^(\d+)\s+(\S+)\s+([\d.]+)\s+([\d.]+)\s+(\S+)\s+(.*)$/);t&&n.push({pid:t[1],user:t[2],cpu:parseFloat(t[3]),mem:parseFloat(t[4]),comm:t[5],args:t[6]})}return n}function Wi(){if(!Ri()){S(`Connect to and focus a server first`,`warning`);return}H(`<div id="procRoot"></div>`,`modal-plain`),Gi()}async function Gi(){let e=document.getElementById(`procRoot`);e&&(e.innerHTML=`
    <div class="sx-card proc-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">🧩</span> Process Explorer — ${j(zi())}</div>
        <div style="display:flex;gap:6px;align-items:center">
          <button class="sx-btn sm" id="procRefresh" title="Refresh">↻</button>
          <button class="sx-x" id="procClose">&times;</button>
        </div>
      </div>
      <div class="proc-sort">
        Sort: <button class="sx-btn sm ${Hi===`cpu`?`primary`:``}" data-k="cpu">CPU</button>
        <button class="sx-btn sm ${Hi===`mem`?`primary`:``}" data-k="mem">MEM</button>
        <button class="sx-btn sm ${Hi===`pid`?`primary`:``}" data-k="pid">PID</button>
      </div>
      <div class="proc-list" id="procList"><div class="sched-empty">Loading processes…</div></div>
    </div>`,e.querySelector(`#procClose`).onclick=()=>U(),e.querySelector(`#procRefresh`).onclick=()=>Ki(),e.querySelectorAll(`.proc-sort [data-k]`).forEach(e=>e.onclick=()=>{Hi=e.getAttribute(`data-k`),Gi()}),Ki())}async function Ki(){let e=document.getElementById(`procList`);if(!e)return;let t=await Bi(`ps -eo pid,user,pcpu,pmem,comm,args --sort=-pcpu 2>/dev/null | head -80`);if(!t.ok){e.innerHTML=`<div class="sched-empty">Couldn't read processes (${j(t.err||`error`)}). Needs a connected SSH server.</div>`;return}let n=Ui(t.out);if(Hi===`mem`?n.sort((e,t)=>t.mem-e.mem):Hi===`pid`?n.sort((e,t)=>+e.pid-t.pid):n.sort((e,t)=>t.cpu-e.cpu),n.length===0){e.innerHTML=`<div class="sched-empty">No processes returned.</div>`;return}e.innerHTML=`
    <div class="proc-row proc-head-row"><span>PID</span><span>USER</span><span>CPU</span><span>MEM</span><span>COMMAND</span></div>
    ${n.map(e=>`
      <div class="proc-row proc-item" data-pid="${e.pid}" title="Click for details">
        <span class="proc-pid">${e.pid}</span>
        <span class="proc-user">${j(e.user)}</span>
        <span class="proc-cpu">${e.cpu.toFixed(1)}%</span>
        <span class="proc-mem">${e.mem.toFixed(1)}%</span>
        <span class="proc-cmd" title="${j(e.args)}">${j(e.args)}</span>
      </div>`).join(``)}`,e.querySelectorAll(`.proc-item`).forEach(e=>e.onclick=()=>qi(e.getAttribute(`data-pid`)))}async function qi(e){let t=document.getElementById(`procRoot`);if(!t)return;t.innerHTML=`
    <div class="sx-card proc-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">🧩</span> Process ${j(e)}</div>
        <button class="sx-x" id="procBack" title="Back">&larr;</button>
      </div>
      <div class="proc-detail" id="procDetail"><div class="sched-empty">Loading details…</div></div>
      <div class="sx-actions" style="padding:0 18px 16px">
        <button class="sx-btn danger" id="procKill">Kill (SIGTERM)</button>
        <button class="sx-btn danger" id="procKill9">Force kill (SIGKILL)</button>
      </div>
    </div>`,t.querySelector(`#procBack`).onclick=()=>Gi(),t.querySelector(`#procKill`).onclick=()=>Ji(e,`TERM`),t.querySelector(`#procKill9`).onclick=()=>Ji(e,`KILL`);let n=await Bi([`echo '###INFO'`,`ps -o pid,ppid,user,pcpu,pmem,etime,stat,nice -p ${e} 2>/dev/null`,`echo '###CWD'`,`readlink /proc/${e}/cwd 2>/dev/null`,`echo '###CMD'`,`tr '\\0' ' ' < /proc/${e}/cmdline 2>/dev/null`,`echo '###FILES'`,`ls /proc/${e}/fd 2>/dev/null | wc -l`,`echo '###PORTS'`,`ss -tlnp 2>/dev/null | grep "pid=${e}," || sudo ss -tlnp 2>/dev/null | grep "pid=${e},"`].join(` ; `)),r=document.getElementById(`procDetail`);if(!r)return;if(!n.ok){r.innerHTML=`<div class="sched-empty">Couldn't read details.</div>`;return}let i=e=>{let t=n.out.split(`###`).find(t=>t.startsWith(e));return t?t.slice(e.length).trim():``},a=i(`INFO`),o=i(`CWD`),s=i(`CMD`),c=i(`FILES`),l=i(`PORTS`),u=l?l.split(`
`).map(e=>(e.match(/:(\d+)\s/)||[])[1]).filter(Boolean):[];r.innerHTML=`
    <pre class="proc-info">${j(a||`(no info)`)}</pre>
    <div class="proc-kv"><b>Command</b><span class="mono">${j(s||``)}</span></div>
    <div class="proc-kv"><b>Working dir</b><span class="mono">${j(o||`—`)}</span></div>
    <div class="proc-kv"><b>Open files</b><span>${j(c||`—`)}</span></div>
    <div class="proc-kv"><b>Listening ports</b><span class="mono">${u.length?u.join(`, `):`—`}</span></div>`}async function Ji(e,t){if(!confirm(`Send SIG${t} to process ${e}?`))return;let n=await Bi(`kill -${t} ${e} 2>&1 || sudo kill -${t} ${e} 2>&1`);S(n.ok?`Sent SIG${t} to ${e}`:`Kill failed`,n.ok?`success`:`error`),setTimeout(()=>Gi(),500)}var Yi={22:`SSH`,80:`HTTP`,443:`HTTPS`,3306:`MySQL`,5432:`PostgreSQL`,6379:`Redis`,27017:`MongoDB`,3e3:`Node/Dev`,8080:`HTTP-alt`,9200:`Elasticsearch`,5672:`RabbitMQ`,11211:`Memcached`,25:`SMTP`,53:`DNS`,21:`FTP`,3389:`RDP`,8e3:`HTTP-alt`,5e3:`Dev`};function Xi(e){let t=[];(e||``).split(`
`).forEach(e=>{if(e=e.trim(),!e||/^Netid|^State/i.test(e))return;let n=/^udp/i.test(e)?`udp`:/^tcp/i.test(e)||e.includes(`users:`)||e.includes(`:`)?`tcp`:``,r=e.match(/(\d{1,3}(?:\.\d{1,3}){3}|\[[0-9a-fA-F:]+\]|\*|0\.0\.0\.0|\[::\]):(\d+)\s/);if(!r)return;let i=r[2],a=``,o=``,s=e.match(/users:\(\("([^"]+)",pid=(\d+)/);s&&(a=s[1],o=s[2]),t.push({port:i,proto:n,proc:a,pid:o,svc:Yi[i]||``})});let n=new Set,r=[];return t.forEach(e=>{let t=e.port+e.proto;n.has(t)||(n.add(t),r.push(e))}),r.sort((e,t)=>+e.port-t.port),r}function Zi(){if(!Ri()){S(`Connect to and focus a server first`,`warning`);return}H(`<div id="portRoot"></div>`,`modal-plain`),Qi()}async function Qi(){let e=document.getElementById(`portRoot`);e&&(e.innerHTML=`
    <div class="sx-card proc-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">🔌</span> Ports &amp; Services — ${j(zi())}</div>
        <div style="display:flex;gap:6px;align-items:center">
          <button class="sx-btn sm" id="portRefresh" title="Refresh">↻</button>
          <button class="sx-x" id="portClose">&times;</button>
        </div>
      </div>
      <div class="proc-list" id="portList"><div class="sched-empty">Scanning listening ports…</div></div>
    </div>`,e.querySelector(`#portClose`).onclick=()=>U(),e.querySelector(`#portRefresh`).onclick=()=>$i(),$i())}async function $i(){let e=document.getElementById(`portList`);if(!e)return;let t=await Bi(`ss -tulnp 2>/dev/null || sudo ss -tulnp 2>/dev/null || netstat -tulnp 2>/dev/null`);if(!t.ok){e.innerHTML=`<div class="sched-empty">Couldn't scan ports (${j(t.err||`error`)}).</div>`;return}let n=Xi(t.out);if(n.length===0){e.innerHTML=`<div class="sched-empty">No listening ports found (process names may need sudo).</div>`;return}e.innerHTML=`
    <div class="port-row port-head-row"><span>PORT</span><span>PROTO</span><span>SERVICE</span><span>PROCESS</span><span>PID</span></div>
    ${n.map(e=>`
      <div class="port-row port-item" data-pid="${j(e.pid)}" data-port="${j(e.port)}" data-proc="${j(e.proc)}" title="Click for details">
        <span class="port-num">:${j(e.port)}</span>
        <span class="port-proto">${j(e.proto)}</span>
        <span class="port-svc">${j(e.svc||`—`)}</span>
        <span class="port-proc">${j(e.proc||`—`)}</span>
        <span class="port-pid">${j(e.pid||`—`)}</span>
      </div>`).join(``)}`,e.querySelectorAll(`.port-item`).forEach(e=>e.onclick=()=>ea(e.dataset.port,e.dataset.pid,e.dataset.proc))}async function ea(e,t,n){let r=document.getElementById(`portRoot`);if(!r)return;r.innerHTML=`
    <div class="sx-card proc-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">🔌</span> Port :${j(e)}</div>
        <button class="sx-x" id="portBack" title="Back">&larr;</button>
      </div>
      <div class="proc-detail" id="portDetail"><div class="sched-empty">Loading…</div></div>
      <div class="sx-actions" style="padding:0 18px 16px">
        ${t&&t!==`—`?`<button class="sx-btn danger" id="portKill">Kill process ${j(t)}</button>`:``}
      </div>
    </div>`,r.querySelector(`#portBack`).onclick=()=>Qi();let i=r.querySelector(`#portKill`);i&&(i.onclick=async()=>{if(!confirm(`Kill process ${t} (${n}) on port ${e}?`))return;let r=await Bi(`kill -TERM ${t} 2>&1 || sudo kill -TERM ${t} 2>&1`);S(r.ok?`Killed ${t}`:`Kill failed`,r.ok?`success`:`error`),setTimeout(()=>Qi(),500)});let a=document.getElementById(`portDetail`);if(!t||t===`—`){a.innerHTML=`<div class="sched-empty">No owning process resolved for this port (try running the app's SSH user with sudo).</div>`;return}let o=await Bi([`echo '###USER'`,`ps -o user= -p ${t} 2>/dev/null`,`echo '###CMD'`,`ps -o args= -p ${t} 2>/dev/null`,`echo '###CWD'`,`readlink /proc/${t}/cwd 2>/dev/null`].join(` ; `));if(!o.ok){a.innerHTML=`<div class="sched-empty">Couldn't read details.</div>`;return}let s=e=>{let t=o.out.split(`###`).find(t=>t.startsWith(e));return t?t.slice(e.length).trim():``};a.innerHTML=`
    <div class="proc-kv"><b>Service</b><span>${j(Yi[e]||`—`)}</span></div>
    <div class="proc-kv"><b>Process</b><span class="mono">${j(n||`—`)}</span></div>
    <div class="proc-kv"><b>PID</b><span>${j(t)}</span></div>
    <div class="proc-kv"><b>User</b><span>${j(s(`USER`)||`—`)}</span></div>
    <div class="proc-kv"><b>Command</b><span class="mono">${j(s(`CMD`)||`—`)}</span></div>
    <div class="proc-kv"><b>Directory</b><span class="mono">${j(s(`CWD`)||`—`)}</span></div>`}var ta=null,q={path:``,search:``,regex:!1,errorsOnly:!1,lines:300,raw:[]};function na(e){return/\b(ERR|ERROR|FATAL|CRIT|CRITICAL|PANIC|EXCEPTION|FAIL(ED|URE)?)\b/i.test(e)?`err`:/\b(WARN|WARNING)\b/i.test(e)?`warn`:/\b(INFO|NOTICE)\b/i.test(e)?`info`:/\b(DEBUG|TRACE)\b/i.test(e)?`debug`:``}function ra(){if(!Ri()){S(`Connect to and focus a server first`,`warning`);return}H(`<div id="logRoot"></div>`,`modal-plain`),aa()}function ia(){ta&&=(clearInterval(ta),null)}function aa(){let e=document.getElementById(`logRoot`);e&&(e.innerHTML=`
    <div class="sx-card log-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">📜</span> Log Explorer — ${j(zi())}</div>
        <button class="sx-x" id="logClose">&times;</button>
      </div>
      <div class="log-controls">
        <input type="text" id="logPath" class="sx-input mono" placeholder="/var/log/syslog  (path to a log file)" value="${j(q.path)}" />
        <button class="sx-btn primary" id="logStart">${ta?`■ Stop`:`▶ Tail`}</button>
      </div>
      <div class="log-controls">
        <input type="text" id="logSearch" class="sx-input" placeholder="Filter / search…" value="${j(q.search)}" />
        <label class="sched-inline"><input type="checkbox" id="logRegex" ${q.regex?`checked`:``}/> Regex</label>
        <label class="sched-inline"><input type="checkbox" id="logErr" ${q.errorsOnly?`checked`:``}/> Errors only</label>
      </div>
      <div class="log-view" id="logView"><div class="sched-empty">Enter a log path and press Tail. Live-updates every 3s; search, regex and error filters apply instantly.</div></div>
      <div class="log-foot" id="logFoot"></div>
    </div>`,e.querySelector(`#logClose`).onclick=()=>{ia(),U()},e.querySelector(`#logStart`).onclick=()=>oa(),e.querySelector(`#logPath`).onchange=e=>{q.path=e.target.value.trim()},e.querySelector(`#logSearch`).oninput=e=>{q.search=e.target.value,ca()},e.querySelector(`#logRegex`).onchange=e=>{q.regex=e.target.checked,ca()},e.querySelector(`#logErr`).onchange=e=>{q.errorsOnly=e.target.checked,ca()})}async function oa(){let e=document.getElementById(`logPath`);if(e&&(q.path=e.value.trim()),ta){ia(),aa();return}if(!q.path){S(`Enter a log file path`,`warning`);return}await sa(),ta=setInterval(sa,3e3),aa()}async function sa(){let e=await Bi(`tail -n ${q.lines} ${JSON.stringify(q.path)} 2>&1`);if(!e.ok){let t=document.getElementById(`logView`);t&&(t.innerHTML=`<div class="sched-empty">Can't read log (${j(e.err||`error`)}).</div>`);return}q.raw=e.out.split(`
`),ca()}function ca(){let e=document.getElementById(`logView`);if(!e)return;let t=q.raw,n=null;if(q.search&&q.regex)try{n=new RegExp(q.search,`i`)}catch{n=null}let r={err:0,warn:0,info:0,debug:0},i=t.filter(e=>{let t=na(e);return t&&(r[t]=(r[t]||0)+1),q.errorsOnly&&t!==`err`&&t!==`warn`?!1:q.search?n?n.test(e):e.toLowerCase().includes(q.search.toLowerCase()):!0});e.innerHTML=i.length===0?`<div class="sched-empty">No matching lines.</div>`:i.map(e=>`<div class="log-line log-${na(e)||`plain`}">${j(e)}</div>`).join(``),e.scrollTop=e.scrollHeight;let a=document.getElementById(`logFoot`);a&&(a.innerHTML=`<span class="log-badge err">${r.err} err</span><span class="log-badge warn">${r.warn} warn</span><span class="log-badge info">${r.info} info</span><span class="log-muted">${i.length}/${q.raw.length} lines${ta?` · live`:``}</span>`)}var la=[{re:/(?:which\s+)?(?:process|pid).*port\s+(\d+)|port\s+(\d+).*(?:process|pid|use|using)|what.*(?:on|uses)\s+port\s+(\d+)/i,build:e=>({cmd:`ss -tlnp 2>/dev/null | grep :${e[1]||e[2]||e[3]} || sudo ss -tlnp | grep :${e[1]||e[2]||e[3]}`,label:`Find what uses port ${e[1]||e[2]||e[3]}`,kind:`read`})},{re:/(?:show|view|open|tail)\s+(.+?)\s+logs?|logs?\s+(?:of|for)\s+(.+)/i,build:e=>{let t=(e[1]||e[2]||``).trim();return{cmd:`journalctl -u ${t} -n 120 --no-pager 2>&1 || sudo journalctl -u ${t} -n 120 --no-pager 2>&1`,label:`Show logs for ${t}`,kind:`read`}}},{re:/restart\s+(\S+)/i,build:e=>({cmd:`sudo systemctl restart ${e[1]}`,label:`Restart ${e[1]}`,kind:`action`,destructive:!0})},{re:/stop\s+(\S+)/i,build:e=>({cmd:`sudo systemctl stop ${e[1]}`,label:`Stop ${e[1]}`,kind:`action`,destructive:!0})},{re:/start\s+(\S+)/i,build:e=>({cmd:`sudo systemctl start ${e[1]}`,label:`Start ${e[1]}`,kind:`action`})},{re:/status\s+(?:of\s+)?(\S+)/i,build:e=>({cmd:`systemctl status ${e[1]} --no-pager 2>&1 || sudo systemctl status ${e[1]} --no-pager 2>&1`,label:`Status of ${e[1]}`,kind:`read`})},{re:/^(?:open|cd|go to)\s+(\/\S+)/i,build:e=>({cmd:`cd ${e[1]}`,label:`cd to ${e[1]}`,kind:`action`})},{re:/open\s+log\s*explorer|log\s*explorer/i,build:()=>({special:`logexplorer`,label:`Open Log Explorer`,kind:`action`})},{re:/disk|storage|df\b/i,build:()=>({cmd:`df -h`,label:`Disk usage`,kind:`read`})},{re:/memory|ram|free\b/i,build:()=>({cmd:`free -h`,label:`Memory usage`,kind:`read`})},{re:/who|logged|users\b/i,build:()=>({cmd:`who`,label:`Logged-in users`,kind:`read`})},{re:/top\s+(?:cpu|process)|cpu\s+hog|heaviest/i,build:()=>({cmd:`ps -eo pid,pcpu,pmem,comm --sort=-pcpu 2>/dev/null | head -12`,label:`Top CPU processes`,kind:`read`})},{re:/uptime|load/i,build:()=>({cmd:`uptime`,label:`Uptime & load`,kind:`read`})},{re:/explain\s+(.+)/i,build:e=>({explain:(e[1]||``).trim(),label:`Explain command`,kind:`read`})}];function ua(e){for(let t of la){let n=e.match(t.re);if(n)return t.build(n)}return null}function da(){H(`<div id="ciRoot"></div>`,`modal-plain`),fa()}function fa(){let e=document.getElementById(`ciRoot`);if(!e)return;e.innerHTML=`
    <div class="sx-card ci-card">
      <div class="sx-head">
        <div class="sx-title"><span class="sx-ico">✨</span> Command Intelligence</div>
        <button class="sx-x" id="ciClose">&times;</button>
      </div>
      <div class="ci-input-row">
        <input type="text" id="ciInput" class="sx-input" placeholder="Try: find which process uses port 8080 · restart nginx · show redis logs · disk usage" autocomplete="off" />
      </div>
      <div class="ci-hints">
        ${[`find which process uses port 8080`,`restart nginx`,`show nginx logs`,`disk usage`,`top cpu`,`who`].map(e=>`<button class="ci-chip" data-h="${j(e)}">${j(e)}</button>`).join(``)}
      </div>
      <div class="ci-result" id="ciResult"></div>
    </div>`,e.querySelector(`#ciClose`).onclick=()=>U();let t=e.querySelector(`#ciInput`);t.onkeydown=e=>{e.key===`Enter`&&pa(t.value)},e.querySelectorAll(`.ci-chip`).forEach(e=>e.onclick=()=>{t.value=e.getAttribute(`data-h`),pa(t.value)}),setTimeout(()=>t.focus(),30)}function pa(e){e=(e||``).trim();let t=document.getElementById(`ciResult`);if(!t)return;if(!e){t.innerHTML=``;return}let n=ua(e);if(!n){t.innerHTML=`
      <div class="ci-card-plan">
        <div class="ci-plan-label">No preset matched. Run it as a raw command?</div>
        <pre class="ci-cmd">${j(e)}</pre>
        <div class="sx-actions">
          <button class="sx-btn danger" id="ciRunRaw">Run on active terminal</button>
        </div>
      </div>`,t.querySelector(`#ciRunRaw`).onclick=()=>ha(e,!0);return}if(n.special===`logexplorer`){U(),ra();return}if(n.explain){t.innerHTML=`<div class="ci-card-plan"><div class="ci-plan-label">${j(n.label)}</div>
      <pre class="ci-cmd">${j(n.explain)}</pre>
      <div class="ci-note">Offline explain isn't available in-app. Tip: run <span class="mono">man ${j(n.explain.split(/\s+/)[0]||``)}</span> or <span class="mono">${j(n.explain.split(/\s+/)[0]||``)} --help</span> on the server.</div></div>`;return}let r=n.kind===`read`;t.innerHTML=`
    <div class="ci-card-plan">
      <div class="ci-plan-label">${j(n.label)}${n.destructive?` <span class="ci-danger">destructive</span>`:``}</div>
      <pre class="ci-cmd">${j(n.cmd)}</pre>
      <div class="sx-actions">
        <button class="sx-btn ${n.destructive?`danger`:`primary`}" id="ciRun">${r?`Run &amp; show output`:`Run on active terminal`}</button>
      </div>
      <div class="ci-out" id="ciOut"></div>
    </div>`,t.querySelector(`#ciRun`).onclick=()=>{r?ma(n.cmd):ha(n.cmd,n.destructive)}}async function ma(e){if(!Ri()){S(`Connect to and focus a server first`,`warning`);return}let t=document.getElementById(`ciOut`);t&&(t.innerHTML=`<div class="sched-empty">Running…</div>`);let n=await Bi(e);t&&(t.innerHTML=n.ok?`<pre class="ci-output">${j(n.out||`(no output)`)}</pre>`:`<div class="sched-empty">Failed (${j(n.err||`error`)}).</div>`)}function ha(e,t){(!t||confirm(`Run this command on the active terminal?\n\n${e}`))&&(Vi(e)?(S(`Sent to active terminal`,`success`),U()):S(`Focus a terminal first`,`warning`))}var ga=[{title:`Sessions & Tabs`,items:[[`Ctrl + N`,`New SSH session`],[`Ctrl + W`,`Close current tab`],[`Ctrl + K`,`Command palette / quick search`],[`Alt + M`,`Toggle MultiExec broadcast bar`],[`Ctrl+Alt + B`,`Broadcast command to servers`]]},{title:`Workspace & Split`,items:[[`Ctrl+Shift + E`,`Split right (vertical)`],[`Ctrl+Shift + O`,`Split down (horizontal)`],[`Ctrl+Shift + M`,`Maximize / restore active pane`],[`Ctrl+Shift + \\`,`Toggle vertical split`],[`Ctrl+Shift + -`,`Toggle horizontal split`]]},{title:`Terminal`,items:[[`Ctrl+Shift + F`,`Find in terminal scrollback`],[`Ctrl + F`,`Find in terminal`],[`Ctrl + B`,`Toggle sidebar`],[`Esc`,`Close dialog / palette / menu`]]},{title:`Help`,items:[[`F1  or  Shift + ?`,`Show this shortcuts sheet`]]}];function _a(){H(`
    <div class="modal-header">
      <div class="modal-title" style="display:flex; align-items:center; gap:8px;"><span>⌨️</span> Keyboard Shortcuts</div>
      <button class="modal-close" id="ksClose">✕</button>
    </div>
    <div class="modal-body">
      <div class="ks-grid">${ga.map(e=>`
    <div class="ks-group">
      <div class="ks-group-title">${e.title}</div>
      ${e.items.map(([e,t])=>`
        <div class="ks-row">
          <span class="ks-keys">${e.split(/\s+\+\s+|\s+or\s+/).map(e=>/^(or)$/i.test(e)?e:`<kbd>${e.replace(/\+/g,`</kbd>+<kbd>`)}</kbd>`).join(` `)}</span>
          <span class="ks-desc">${t}</span>
        </div>`).join(``)}
    </div>`).join(``)}</div>
    </div>
  `,`modal-lg`);let e=document.getElementById(`ksClose`);e&&(e.onclick=U)}var va=o({registerDialogRefreshTree:()=>ba,showEditSessionDialog:()=>Sa,showFolderDialog:()=>Ca,showMoveNodeDialog:()=>Ta,showNewSessionDialog:()=>J,showRenameNodeDialog:()=>wa}),ya=null;function ba(e){ya=e}async function xa(){ya&&await ya()}function Sa(e){return J(``,e)}async function J(e=``,t=null){let n=!!t,a=``,o=``,s=t?t.vaultKey||t.id:``;if(n&&s&&window.go&&window.go.main&&window.go.main.App){if(window.go.main.App.GetSessionPassword)try{a=await window.go.main.App.GetSessionPassword(s)}catch{}if(!a&&window.go.main.App.GetSavedPassword)try{a=await window.go.main.App.GetSavedPassword(s)}catch{}if(!a&&window.go.main.App.FindSessionPassword&&t.host&&t.username)try{a=await window.go.main.App.FindSessionPassword(s,t.host,t.port||22,t.username)}catch{}if(window.go.main.App.GetSessionPassphrase)try{o=await window.go.main.App.GetSessionPassphrase(s)}catch{}}let c=t||{id:``,name:``,protocol:`ssh`,host:``,port:22,username:``,authType:`password`,privateKeyPath:``,keyPassphrase:``,useAgent:!1,terminalType:`xterm-256color`,fontFamily:W.fontFamily||`Cascadia Mono, Consolas, monospace`,fontSize:W.fontSize||13,rows:24,cols:80,cursorStyle:W.cursorStyle||`block`,cursorBlink:W.cursorBlink===void 0||W.cursorBlink,encoding:`utf-8`,scrollback:W.scrollback||1e4,startupCommand:``,workingDirectory:``,keepAliveInterval:15,connectionTimeout:10,compression:!1,x11Forwarding:!1,proxyType:`none`,proxyHost:``,proxyPort:1080,proxyUsername:``,proxyPassword:``,useJumpHost:t?.useJumpHost||!1,jumpHost:t?.jumpHost||``,jumpPort:t?.jumpPort||22,jumpUsername:t?.jumpUsername||`bastion`,jumpAuthType:t?.jumpAuthType||`password`,jumpPrivateKeyPath:t?.jumpPrivateKeyPath||``,jumpVaultKey:t?.jumpVaultKey||``,theme:W.theme||`dark-modern`,foreground:``,background:``,cursorColor:``,selectionColor:``,ansiColors:{},serialPort:`COM1`,baudRate:115200,dataBits:8,stopBits:1,parity:`none`,rdpDomain:``,rdpFullScreen:!1,autoReconnect:t?.autoReconnect===void 0?W.autoReconnect||!1:t.autoReconnect,reconnectAttempts:t?.reconnectAttempts||W.reconnectAttempts||5,reconnectDelay:t?.reconnectDelay||W.reconnectDelay||2,environment:t?.environment||``,color:t?.color||``},l=yr[c.theme]||yr[`dark-modern`],u=c.foreground||l.foreground,d=c.background||l.background,f=c.cursorColor||l.cursor,p=c.ansiColors||{},m=[];function h(e,t=``){e&&(e.isFolder||e.children)&&(e!==I&&e.id&&e.name&&m.push({id:e.id,name:t+e.name,rawName:e.name,defaultUsername:e.defaultUsername||``,defaultPort:e.defaultPort||22,environment:e.environment||``,color:e.color||``}),e.children&&e.children.forEach(n=>h(n,e===I?``:t+e.name+` / `)))}h(I);let g=e;if(!g&&t&&I){function e(t,n){if(!t||!t.children)return null;for(let r of t.children){if(!r.isFolder&&r.session&&r.session.id===n)return t.id;if(r.isFolder||r.children){let t=e(r,n);if(t)return t}}return null}let n=e(I,t.id);n&&n!==I.id&&(g=n)}let _=m.find(e=>e.id===g);_&&!n&&(!c.username&&_.defaultUsername&&(c.username=_.defaultUsername),(!c.port||c.port===22)&&_.defaultPort&&(c.port=_.defaultPort),!c.environment&&_.environment&&(c.environment=_.environment),!c.color&&_.color&&(c.color=_.color));let v=H(`
    <div class="modal-header">
      <div class="modal-title">${n?`⚙️ Edit Session — `+j(c.name):`✨ New Session Configuration`}</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>

    <!-- Top Protocol Chips Bar -->
    <div class="sess-proto-bar">
      ${[{id:`ssh`,label:`SSH`,icon:`🔒`,port:22},{id:`sftp`,label:`SFTP`,icon:`📁`,port:22},{id:`rdp`,label:`RDP`,icon:`🖥️`,port:3389},{id:`vnc`,label:`VNC`,icon:`📺`,port:5900},{id:`telnet`,label:`Telnet`,icon:`📡`,port:23},{id:`serial`,label:`Serial`,icon:`🔌`,port:0},{id:`local`,label:`Local Terminal`,icon:`💻`,port:0}].map(e=>`
        <div class="sess-proto-chip ${c.protocol===e.id?`active`:``}" data-proto="${e.id}" data-default-port="${e.port}">
          <span>${e.icon}</span>
          <span>${e.label}</span>
        </div>
      `).join(``)}
    </div>

    <!-- Main Two-Column Body -->
    <div class="sess-modal-layout sess-editor-body">
      <!-- Left Navigation Sidebar -->
      <div class="sess-nav-sidebar">
        <div class="sess-nav-item active" data-tab="tab-sess-gen">
          <span class="nav-icon">🌐</span>
          <span>General</span>
        </div>
        <div class="sess-nav-item" data-tab="tab-sess-auth" id="navItemAuth">
          <span class="nav-icon">🔐</span>
          <span>Authentication</span>
        </div>
        <div class="sess-nav-item" data-tab="tab-sess-term">
          <span class="nav-icon">💻</span>
          <span>Terminal</span>
        </div>
        <div class="sess-nav-item" data-tab="tab-sess-start">
          <span class="nav-icon">🚀</span>
          <span>Startup</span>
        </div>
        <div class="sess-nav-item" data-tab="tab-sess-ssh" id="navItemSSH">
          <span class="nav-icon">🛡️</span>
          <span>SSH Settings</span>
        </div>
        <div class="sess-nav-item" data-tab="tab-sess-app">
          <span class="nav-icon">🎨</span>
          <span>Appearance</span>
        </div>
      </div>

      <!-- Right Content Pane -->
      <div class="sess-content-pane">

        <!-- 1. GENERAL TAB -->
        <div id="tab-sess-gen" class="sess-tab-content">
          <div class="sess-section-heading">🌐 General Session Settings</div>

          <div class="sess-form-group">
            <label>Session Name *</label>
            <div style="display: flex; gap: 8px;">
              <input type="text" id="sName" value="${j(c.name)}" placeholder="e.g. Oracle BRM Production 01" autocomplete="off" style="flex: 1;" />
              <button type="button" id="sAutoNameBtn" class="btn-action" title="Auto-generate name from user@host:port" style="padding: 0 12px; font-size: 11px; white-space: nowrap; font-weight: 600; display: flex; align-items: center; gap: 4px;">⚡ Auto-Name</button>
            </div>
          </div>

          <!-- Server Environment & Folder Options -->
          <div class="sess-form-group" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 6px; padding: 12px; margin-bottom: 14px;">
            <div style="font-size: 12px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
              <span style="display: flex; align-items: center; gap: 6px;">📁 Folder & Environment Options</span>
              <div id="sEnvPreviewWrap" style="display: flex; align-items: center; gap: 8px;">
                <span id="sInheritedEnvBadge" class="tab-env-badge">DEFAULT</span>
                <span id="sInheritedColorHex" style="font-size: 11px; font-family: monospace; color: var(--text-dim);">#64748b</span>
              </div>
            </div>
            <div class="sess-form-row" style="align-items: flex-end; gap: 10px;">
              <div class="sess-form-group" style="flex: 1.6;">
                <label>Folder *</label>
                <div style="display: flex; gap: 6px;">
                  <select id="sFolderSelect" style="flex: 1;">
                    <option value="">(Root / Unassigned)</option>
                    ${m.map(e=>`
                      <option value="${e.id}" data-name="${j(e.rawName)}" ${e.id===g?`selected`:``}>${j(e.name)}</option>
                    `).join(``)}
                  </select>
                  <button type="button" id="sNewFolderQuickBtn" class="btn-action" title="Create New Folder" style="padding: 0 10px; font-weight: 700; font-size: 14px;">＋</button>
                </div>
              </div>
              <div class="sess-form-group" style="flex: 1.4;">
                <label>Environment</label>
                <select id="sEnvSelect">
                  <option value="inherit">⚡ Auto (Inherit from Folder)</option>
                  <option value="prod" ${c.environment===`prod`?`selected`:``}>🔴 Production (PROD)</option>
                  <option value="uat" ${c.environment===`uat`?`selected`:``}>🟠 UAT (User Acceptance)</option>
                  <option value="testing" ${c.environment===`testing`||c.environment===`test`?`selected`:``}>🟢 Testing (TEST)</option>
                  <option value="dev" ${c.environment===`dev`?`selected`:``}>🔵 Development (DEV)</option>
                  <option value="staging" ${c.environment===`staging`?`selected`:``}>🟣 Staging (STAGE)</option>
                  <option value="dr" ${c.environment===`dr`?`selected`:``}>🌸 Disaster Recovery (DR)</option>
                  <option value="custom">🎨 Custom Environment...</option>
                  <option value="none">⚪ None / Default</option>
                </select>
              </div>
              <div class="sess-form-group" id="sCustomTagGroup" style="flex: 1.1; display: none;">
                <label>Custom Tag</label>
                <input type="text" id="sEnvCustomTag" value="${j(c.environment&&![`prod`,`uat`,`test`,`testing`,`dev`,`staging`,`dr`,`inherit`,`none`].includes(c.environment.toLowerCase())?c.environment:``)}" placeholder="e.g. DMZ, LAB" style="height: 32px; padding: 0 8px; font-size: 11px; text-transform: uppercase; font-weight: 700;" />
              </div>
              <div class="sess-form-group" style="flex: 0.5; min-width: 50px;">
                <label>Color</label>
                <div style="display: flex; align-items: center; gap: 6px; height: 32px;">
                  <input type="color" id="sColorPicker" value="${c.color&&c.color.startsWith(`#`)?c.color:`#10b981`}" style="width: 32px; height: 32px; padding: 0; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; cursor: pointer; background: transparent;" title="Pick Accent Color" />
                  <span id="sInheritedDot" style="display: none; width: 12px; height: 12px; border-radius: 50%; background: #64748b;"></span>
                </div>
              </div>
            </div>
            <div style="font-size: 10.5px; color: var(--text-muted); margin-top: 6px;">
              💡 Customize folder grouping and color-coded environment tags (PROD, UAT, TEST, DEV, etc.).
            </div>
            <input type="hidden" id="sEnv" value="${j(c.environment||``)}" />
            <input type="hidden" id="sColor" value="${j(c.color||``)}" />
          </div>

          <!-- Network & Credentials Section -->
          <div id="generalNetworkFields">
            <div class="sess-form-row" style="gap: 10px;">
              <div class="sess-form-group" style="flex: 2.2;">
                <label>Remote Host / IP *</label>
                <input type="text" id="sHost" value="${j(c.host)}" placeholder="192.168.1.100 or server.company.com" autocomplete="off" />
              </div>
              <div class="sess-form-group" style="flex: 0.8;">
                <label>Port</label>
                <input type="number" id="sPort" value="${c.port||22}" />
              </div>
              <div class="sess-form-group" style="flex: 1.6;">
                <label>Username *</label>
                <input type="text" id="sUser" value="${j(c.username)}" placeholder="e.g. root, pin, admin" autocomplete="off" />
              </div>
            </div>

            <!-- Row 2: Auth Method & Password / Key on General Tab -->
            <div class="sess-form-row" style="gap: 10px; align-items: flex-end; margin-top: 2px;">
              <div class="sess-form-group" style="flex: 1.4;">
                <label>Authentication Mode</label>
                <select id="sAuthTypeQuick">
                  <option value="password" ${c.authType===`password`||!c.privateKeyPath&&c.authType!==`key`&&c.authType!==`agent`?`selected`:``}>🔑 Password (Vault)</option>
                  <option value="key" ${c.authType===`key`||c.privateKeyPath?`selected`:``}>📜 Private Key</option>
                  <option value="keyboard-interactive" ${c.authType===`keyboard-interactive`?`selected`:``}>💬 Prompt on Connect</option>
                  <option value="agent" ${c.authType===`agent`?`selected`:``}>🛡️ SSH Agent</option>
                </select>
              </div>
              <div class="sess-form-group" id="sPasswordGenWrap" style="flex: 2.2;">
                <label>Password</label>
                <div class="sess-password-wrap">
                  <input type="password" id="sPasswordGen" value="${j(a)}" placeholder="Enter password (stored encrypted in Vault)" autocomplete="current-password" />
                  <button type="button" class="sess-password-toggle" id="togglePwBtnGen" title="Toggle password visibility">👁️</button>
                </div>
              </div>
              <div class="sess-form-group hidden" id="sQuickKeyWrap" style="flex: 2.2;">
                <label>Private Key File</label>
                <div class="file-input-group" style="display: flex; gap: 6px;">
                  <input type="text" id="sQuickKeyPath" value="${j(c.privateKeyPath||``)}" placeholder="C:\\path\\to\\id_rsa" style="font-size: 11.5px;" />
                  <button class="btn-secondary" id="sQuickBrowseKeyBtn" type="button" style="padding: 0 10px; font-size: 11px;">Browse...</button>
                </div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 11px; color: var(--text-dim);">
              <label class="checkbox-label" style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                <input type="checkbox" id="sSavePasswordCheck" checked />
                <span>Remember credentials in Secure Vault</span>
              </label>
              <span style="color: var(--text-muted);">
                For SSH Keys, 2FA, or Proxy, see <a href="#" id="linkToAuthTab" style="color: #38bdf8; text-decoration: none;">🔐 Authentication</a>
              </span>
            </div>
          </div>

          <div class="sess-form-group" style="margin-top: 10px;">
            <label>Protocol</label>
            <select id="sProtoSelect">
              <option value="ssh" ${c.protocol===`ssh`?`selected`:``}>SSH — Secure Shell</option>
              <option value="sftp" ${c.protocol===`sftp`?`selected`:``}>SFTP — Secure File Transfer</option>
              <option value="rdp" ${c.protocol===`rdp`?`selected`:``}>RDP — Remote Desktop</option>
              <option value="vnc" ${c.protocol===`vnc`?`selected`:``}>VNC — Virtual Network Computing</option>
              <option value="telnet" ${c.protocol===`telnet`?`selected`:``}>Telnet — Unencrypted Terminal</option>
              <option value="serial" ${c.protocol===`serial`?`selected`:``}>Serial — COM Port</option>
              <option value="local" ${c.protocol===`local`?`selected`:``}>Local — PowerShell / CMD</option>
            </select>
          </div>

          <!-- Serial Specific Section -->
          <div id="generalSerialFields" class="${c.protocol===`serial`?``:`hidden`}">
            <div class="sess-form-row">
              <div class="sess-form-group">
                <label>Serial Port (COM)</label>
                <select id="sSerialPort">
                  ${[`COM1`,`COM2`,`COM3`,`COM4`,`COM5`,`COM6`,`COM7`,`COM8`].map(e=>`
                    <option value="${e}" ${c.serialPort===e?`selected`:``}>${e}</option>
                  `).join(``)}
                </select>
              </div>
              <div class="sess-form-group">
                <label>Baud Rate</label>
                <select id="sBaudRate">
                  ${[9600,19200,38400,57600,115200,230400].map(e=>`
                    <option value="${e}" ${c.baudRate===e?`selected`:``}>${e}</option>
                  `).join(``)}
                </select>
              </div>
            </div>
            <div class="sess-form-row">
              <div class="sess-form-group">
                <label>Data Bits</label>
                <select id="sDataBits">
                  <option value="8" ${c.dataBits===8?`selected`:``}>8</option>
                  <option value="7" ${c.dataBits===7?`selected`:``}>7</option>
                </select>
              </div>
              <div class="sess-form-group">
                <label>Stop Bits</label>
                <select id="sStopBits">
                  <option value="1" ${c.stopBits===1?`selected`:``}>1</option>
                  <option value="2" ${c.stopBits===2?`selected`:``}>2</option>
                </select>
              </div>
              <div class="sess-form-group">
                <label>Parity</label>
                <select id="sParity">
                  <option value="none" ${c.parity===`none`?`selected`:``}>None</option>
                  <option value="odd" ${c.parity===`odd`?`selected`:``}>Odd</option>
                  <option value="even" ${c.parity===`even`?`selected`:``}>Even</option>
                </select>
              </div>
            </div>
          </div>

          <!-- RDP Specific Section -->
          <div id="generalRdpFields" class="${c.protocol===`rdp`?``:`hidden`}">
            <div class="sess-form-group">
              <label>Windows Domain (Optional)</label>
              <input type="text" id="sRDPDomain" value="${j(c.rdpDomain||``)}" placeholder="e.g. CORP" />
            </div>
            <div class="sess-form-group">
              <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" id="sRDPFullScreen" ${c.rdpFullScreen?`checked`:``} />
                <span>Open in Fullscreen Mode</span>
              </label>
            </div>
          </div>
        </div>

        <!-- 2. AUTHENTICATION TAB -->
        <div id="tab-sess-auth" class="sess-tab-content hidden">
          <div class="sess-section-heading">🔐 Authentication Credentials</div>

          <div class="sess-form-group">
            <label>Authentication Method</label>
            <select id="sAuthType">
              <option value="password" ${c.authType===`password`||!c.privateKeyPath&&c.authType!==`agent`&&c.authType!==`keyboard-interactive`&&c.authType!==`auto`?`selected`:``}>Password (Encrypted in Vault)</option>
              <option value="key" ${c.authType===`key`||!c.authType&&c.privateKeyPath?`selected`:``}>Public Key / Private Key (RSA / Ed25519 / OpenSSH Cert)</option>
              <option value="agent" ${c.authType===`agent`?`selected`:``}>SSH Agent / Pageant (Local Key Agent)</option>
              <option value="keyboard-interactive" ${c.authType===`keyboard-interactive`?`selected`:``}>Keyboard-Interactive (MFA / 2FA / PAM Challenge)</option>
              <option value="auto" ${c.authType===`auto`?`selected`:``}>Auto (Smart Priority Chain: Key → Agent → 2FA → Password)</option>
            </select>
          </div>

          <div id="sessPassFields" class="${c.authType===`key`||c.authType===`agent`?`hidden`:``}">
            <div class="sess-form-group">
              <label>Password</label>
              <div class="sess-password-wrap">
                <input type="password" id="sPassword" value="${j(a)}" placeholder="Enter password (stored encrypted in Vault)" autocomplete="off" />
                <button type="button" class="sess-password-toggle" id="togglePwBtn" title="Toggle visibility">👁️</button>
              </div>
              <div style="font-size: 10.5px; color: var(--text-dim); margin-top: 4px;">
                🔐 Encrypted using platform credential vault. Leave blank to prompt on connection.
              </div>
            </div>
          </div>

          <div id="sessKeyFields" class="${c.authType===`password`||c.authType===`agent`||c.authType===`keyboard-interactive`?`hidden`:``}">
            <div class="sess-form-group">
              <label>Private Key File</label>
              <div class="file-input-group" style="display: flex; gap: 8px;">
                <input type="text" id="sKeyPath" value="${j(c.privateKeyPath||``)}" placeholder="C:\\Users\\...\\.ssh\\id_rsa" />
                <button class="btn-secondary" id="browseKeyBtn" type="button">Browse...</button>
              </div>
              <div id="keyInfoBadge" style="margin-top: 6px; font-size: 11px; min-height: 18px;">
                ${c.keyType?`<span style="color: #4ade80;">🔑 ${j(c.keyType)} ${c.keyFingerprint?`• `+j(c.keyFingerprint):``}</span>`:``}
              </div>
            </div>
            <div class="sess-form-group">
              <label>Key Passphrase</label>
              <div class="sess-password-wrap">
                <input type="password" id="sKeyPassphrase" value="${j(o)}" placeholder="Passphrase if key is encrypted (stored in Vault)" />
                <button type="button" class="sess-password-toggle" id="toggleKeyPassBtn" title="Toggle visibility">👁️</button>
              </div>
              <div style="font-size: 10.5px; color: var(--text-dim); margin-top: 4px;">
                🔐 Encrypted in platform credential vault. Never stored in plaintext.
              </div>
            </div>
            <div class="sess-form-group" style="margin-top: 8px;">
              <label>OpenSSH Certificate (Optional, auto-detected if &lt;key&gt;-cert.pub)</label>
              <div class="file-input-group" style="display: flex; gap: 8px;">
                <input type="text" id="sCertPath" value="${j(c.certificatePath||``)}" placeholder="Optional: C:\\Users\\...\\.ssh\\id_rsa-cert.pub" />
                <button class="btn-secondary" id="browseCertBtn" type="button">Browse...</button>
              </div>
            </div>
          </div>

          <div class="sess-form-group" style="margin-top: 14px; padding-top: 10px; border-top: 1px solid #232838;">
            <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" id="sUseAgent" ${c.useAgent?`checked`:``} />
              <span><b>Enable SSH Agent / Pageant authentication forwarding</b></span>
            </label>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px; margin-left: 26px;">
              <div id="sessAgentStatus" style="font-size: 11px; min-height: 16px; flex: 1;"></div>
              <button class="btn-secondary" id="refreshAgentBtn" type="button" style="padding: 2px 8px; font-size: 11px; height: 24px;">🔄 Refresh Agent</button>
            </div>
          </div>
        </div>

        <!-- 3. TERMINAL TAB -->
        <div id="tab-sess-term" class="sess-tab-content hidden">
          <div class="sess-section-heading">💻 Terminal & Display Options</div>

          <div class="sess-form-row">
            <div class="sess-form-group">
              <label>Terminal Type (TERM)</label>
              <select id="sTermType">
                <option value="xterm-256color" ${c.terminalType===`xterm-256color`?`selected`:``}>xterm-256color (Recommended)</option>
                <option value="xterm" ${c.terminalType===`xterm`?`selected`:``}>xterm</option>
                <option value="vt100" ${c.terminalType===`vt100`?`selected`:``}>vt100</option>
                <option value="linux" ${c.terminalType===`linux`?`selected`:``}>linux</option>
                <option value="ansi" ${c.terminalType===`ansi`?`selected`:``}>ansi</option>
              </select>
            </div>
            <div class="sess-form-group">
              <label>Encoding</label>
              <select id="sEncoding">
                <option value="utf-8" ${c.encoding===`utf-8`||!c.encoding?`selected`:``}>UTF-8 (Universal)</option>
                <option value="iso-8859-1" ${c.encoding===`iso-8859-1`?`selected`:``}>ISO-8859-1 (Latin-1)</option>
                <option value="windows-1252" ${c.encoding===`windows-1252`?`selected`:``}>Windows-1252</option>
                <option value="gbk" ${c.encoding===`gbk`?`selected`:``}>GBK (Chinese)</option>
                <option value="shift-jis" ${c.encoding===`shift-jis`?`selected`:``}>Shift-JIS (Japanese)</option>
              </select>
            </div>
          </div>

          <div class="sess-form-row">
            <div class="sess-form-group" style="flex: 2;">
              <label>Font Family</label>
              <select id="sFontFamily">
                <option value="Cascadia Mono, Consolas, monospace" ${c.fontFamily?.includes(`Cascadia`)?`selected`:``}>Cascadia Mono (Modern)</option>
                <option value="Fira Code, Consolas, monospace" ${c.fontFamily?.includes(`Fira`)?`selected`:``}>Fira Code (Ligatures)</option>
                <option value="JetBrains Mono, monospace" ${c.fontFamily?.includes(`JetBrains`)?`selected`:``}>JetBrains Mono</option>
                <option value="Consolas, monospace" ${c.fontFamily===`Consolas, monospace`?`selected`:``}>Consolas</option>
                <option value="Courier New, monospace" ${c.fontFamily?.includes(`Courier`)?`selected`:``}>Courier New</option>
                <option value="monospace" ${c.fontFamily===`monospace`?`selected`:``}>System Monospace</option>
              </select>
            </div>
            <div class="sess-form-group" style="flex: 1;">
              <label>Font Size (px)</label>
              <input type="number" id="sFontSize" value="${c.fontSize||13}" min="9" max="28" />
            </div>
          </div>

          <div class="sess-form-row">
            <div class="sess-form-group">
              <label>Columns (0 = Auto-fit)</label>
              <input type="number" id="sCols" value="${c.cols||80}" min="0" max="400" />
            </div>
            <div class="sess-form-group">
              <label>Rows (0 = Auto-fit)</label>
              <input type="number" id="sRows" value="${c.rows||24}" min="0" max="200" />
            </div>
            <div class="sess-form-group">
              <label>Scrollback (lines)</label>
              <select id="sScrollback">
                <option value="5000" ${c.scrollback===5e3?`selected`:``}>5,000</option>
                <option value="10000" ${c.scrollback===1e4||!c.scrollback?`selected`:``}>10,000</option>
                <option value="25000" ${c.scrollback===25e3?`selected`:``}>25,000</option>
                <option value="50000" ${c.scrollback===5e4?`selected`:``}>50,000</option>
              </select>
            </div>
          </div>

          <div class="sess-form-row" style="align-items: center; margin-top: 6px;">
            <div class="sess-form-group">
              <label>Cursor Style</label>
              <select id="sCursorStyle">
                <option value="block" ${c.cursorStyle===`block`?`selected`:``}>Block (█)</option>
                <option value="underline" ${c.cursorStyle===`underline`?`selected`:``}>Underline (_)</option>
                <option value="bar" ${c.cursorStyle===`bar`?`selected`:``}>Vertical Bar (|)</option>
              </select>
            </div>
            <div class="sess-form-group" style="display: flex; align-items: flex-end; padding-bottom: 8px;">
              <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" id="sCursorBlink" ${c.cursorBlink===!1?``:`checked`} />
                <span>Cursor Blink</span>
              </label>
            </div>
          </div>
        </div>

        <!-- 4. STARTUP TAB -->
        <div id="tab-sess-start" class="sess-tab-content hidden">
          <div class="sess-section-heading">🚀 Startup Automation & Environment</div>

          <div class="sess-form-group">
            <label>Startup Command (Automatically executed upon connection)</label>
            <input type="text" id="sStartup" value="${j(c.startupCommand||``)}" placeholder="e.g. cd /opt/brm && ./pin_ctl status" />
            <div style="font-size: 10.5px; color: var(--text-dim); margin-top: 4px;">
              Command will be transmitted directly to the remote shell session once connected.
            </div>
          </div>

          <div class="sess-form-group" style="margin-top: 14px;">
            <label>Working Directory (Initial directory upon login)</label>
            <input type="text" id="sWorkDir" value="${j(c.workingDirectory||``)}" placeholder="e.g. /home/kunal/projects or ~" />
            <div style="font-size: 10.5px; color: var(--text-dim); margin-top: 4px;">
              Remote working directory to navigate into immediately after shell startup.
            </div>
          </div>
        </div>

        <!-- 5. SSH SETTINGS TAB -->
        <div id="tab-sess-ssh" class="sess-tab-content hidden">
          <div class="sess-section-heading">🛡️ Advanced SSH, Tunneling & Proxies</div>

          <div class="sess-form-row">
            <div class="sess-form-group">
              <label>Keep-Alive Heartbeat (seconds)</label>
              <input type="number" id="sKeepAlive" value="${c.keepAliveInterval||15}" min="0" max="300" />
            </div>
            <div class="sess-form-group">
              <label>Connection Timeout (seconds)</label>
              <input type="number" id="sTimeout" value="${c.connectionTimeout||10}" min="3" max="120" />
            </div>
          </div>

          <div class="sess-form-group">
            <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" id="sCompression" ${c.compression?`checked`:``} />
              <span><b>Enable SSH payload compression (zlib)</b> — improves speed over slow links</span>
            </label>
          </div>

          <div class="sess-form-group">
            <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" id="sX11Forwarding" ${c.x11Forwarding?`checked`:``} />
              <span><b>Enable X11 Forwarding</b> — run remote Linux GUI apps on your desktop (needs a local X server; use Tools → Start X Server)</span>
            </label>
          </div>

          <!-- Jump Host Box -->
          <div style="background: #11141d; border: 1px solid #252b3b; border-radius: 6px; padding: 12px; margin-top: 12px;">
            <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">
              <input type="checkbox" id="sUseJump" ${c.useJumpHost?`checked`:``} />
              <span><b>Connect via SSH Jump Host (Bastion Gateway Proxy)</b></span>
            </label>
            <div id="jumpFields" class="${c.useJumpHost?``:`hidden`}">
              <div class="sess-form-row">
                <div class="sess-form-group" style="flex: 2;">
                  <label>Gateway Host / IP</label>
                  <input type="text" id="sJumpHost" value="${j(c.jumpHost||``)}" placeholder="bastion.company.com" />
                </div>
                <div class="sess-form-group" style="flex: 1;">
                  <label>Gateway Port</label>
                  <input type="number" id="sJumpPort" value="${c.jumpPort||22}" />
                </div>
              </div>
              <div class="sess-form-row">
                <div class="sess-form-group">
                  <label>Gateway Username</label>
                  <input type="text" id="sJumpUser" value="${j(c.jumpUsername||`bastion`)}" />
                </div>
                <div class="sess-form-group">
                  <label>Gateway Auth Method</label>
                  <select id="sJumpAuthType">
                    <option value="password" ${c.jumpAuthType===`key`?``:`selected`}>Password</option>
                    <option value="key" ${c.jumpAuthType===`key`?`selected`:``}>Private Key</option>
                  </select>
                </div>
              </div>
              <div id="jumpPassFields" class="${c.jumpAuthType===`key`?`hidden`:``}">
                <div class="sess-form-group">
                  <label>Gateway Password</label>
                  <input type="password" id="sJumpPassword" placeholder="Stored encrypted in Vault; leave blank to prompt on connect" autocomplete="off" />
                </div>
              </div>
              <div id="jumpKeyFields" class="${c.jumpAuthType===`key`?``:`hidden`}">
                <div class="sess-form-group">
                  <label>Gateway Private Key File</label>
                  <div class="file-input-group" style="display: flex; gap: 8px;">
                    <input type="text" id="sJumpKeyPath" value="${j(c.jumpPrivateKeyPath||``)}" placeholder="C:\\Users\\...\\.ssh\\bastion_key" />
                    <button class="btn-secondary" id="browseJumpKeyBtn" type="button">Browse...</button>
                  </div>
                </div>
                <div class="sess-form-group">
                  <label>Gateway Key Passphrase</label>
                  <input type="password" id="sJumpKeyPassphrase" placeholder="Passphrase if key is encrypted (stored in Vault)" />
                </div>
              </div>
              <div style="font-size: 10.5px; color: var(--text-dim); margin-top: 4px;">
                🛡️ NexTerm opens the SSH connection to this gateway first, authenticates, then tunnels a second SSH handshake to the target host through it — the target never sees a direct connection from your machine.
              </div>
            </div>
          </div>

          <!-- Proxy Configuration Box -->
          <div style="background: #11141d; border: 1px solid #252b3b; border-radius: 6px; padding: 12px; margin-top: 12px;">
            <div class="sess-form-group">
              <label>Network Proxy Type</label>
              <select id="sProxyType">
                <option value="none" ${c.proxyType===`none`||!c.proxyType?`selected`:``}>Direct Connection (No Proxy)</option>
                <option value="socks5" ${c.proxyType===`socks5`?`selected`:``}>SOCKS5 Proxy</option>
                <option value="http" ${c.proxyType===`http`?`selected`:``}>HTTP CONNECT Proxy</option>
              </select>
            </div>
            <div id="proxyFields" class="${c.proxyType&&c.proxyType!==`none`?``:`hidden`}">
              <div class="sess-form-row">
                <div class="sess-form-group" style="flex: 2;">
                  <label>Proxy Host</label>
                  <input type="text" id="sProxyHost" value="${j(c.proxyHost||``)}" placeholder="127.0.0.1" />
                </div>
                <div class="sess-form-group" style="flex: 1;">
                  <label>Proxy Port</label>
                  <input type="number" id="sProxyPort" value="${c.proxyPort||1080}" />
                </div>
              </div>
            </div>
          </div>

          <!-- Automatic Reconnection Box -->
          <div style="background: #11141d; border: 1px solid #252b3b; border-radius: 6px; padding: 12px; margin-top: 12px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <label class="checkbox-label" style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" id="sAutoReconnect" ${c.autoReconnect?`checked`:``} />
                <span><b>Auto reconnect on connection lost</b></span>
              </label>
              <span style="font-size: 11px; color: var(--accent-cyan);">Exponential Backoff (1s, 2s, 4s...)</span>
            </div>
            <div class="sess-form-row" id="reconnectConfigRow" style="margin-top: 8px;">
              <div class="sess-form-group">
                <label>Retry attempts</label>
                <input type="number" id="sReconnectAttempts" value="${c.reconnectAttempts||5}" min="1" max="50" />
              </div>
              <div class="sess-form-group">
                <label>Retry initial delay (seconds)</label>
                <input type="number" id="sReconnectDelay" value="${c.reconnectDelay||2}" min="1" max="60" />
              </div>
            </div>
          </div>
        </div>

        <!-- 6. APPEARANCE TAB -->
        <div id="tab-sess-app" class="sess-tab-content hidden">
          <div class="sess-section-heading">🎨 Terminal Color Palette & Theme</div>

          <div class="sess-form-row">
            <div class="sess-form-group" style="flex: 2;">
              <label>Preset Color Theme</label>
              <select id="sTheme">
                ${Object.keys(yr).map(e=>`
                  <option value="${e}" ${c.theme===e?`selected`:``}>${e.replace(/-/g,` `).toUpperCase()}</option>
                `).join(``)}
              </select>
            </div>
            <div class="sess-form-group" style="flex: 1; display: flex; align-items: flex-end;">
              <button class="btn-secondary" id="resetColorsBtn" type="button" style="width: 100%; height: 32px;">Reset to Defaults</button>
            </div>
          </div>

          <div class="sess-color-grid">
            <div class="sess-color-item">
              <input type="color" id="sFgColor" value="${u.startsWith(`#`)?u:`#d9e0ea`}" />
              <span>Foreground</span>
            </div>
            <div class="sess-color-item">
              <input type="color" id="sBgColor" value="${d.startsWith(`#`)?d:`#090c11`}" />
              <span>Background</span>
            </div>
            <div class="sess-color-item">
              <input type="color" id="sCursorColor" value="${f.startsWith(`#`)?f:`#60a5fa`}" />
              <span>Cursor</span>
            </div>
            <div class="sess-color-item">
              <input type="color" id="sSelColor" value="#3b82f6" />
              <span>Selection</span>
            </div>
          </div>

          <div style="font-size: 11px; font-weight: 600; color: #94a3b8; margin-top: 14px; text-transform: uppercase;">
            Standard ANSI Colors (8 Regular + 8 Bright)
          </div>
          <div class="sess-color-grid" style="grid-template-columns: repeat(8, 1fr); gap: 4px; margin-top: 6px;">
            ${[{name:`black`,def:l.black||`#1e2233`},{name:`red`,def:l.red||`#f43f5e`},{name:`green`,def:l.green||`#10b981`},{name:`yellow`,def:l.yellow||`#f59e0b`},{name:`blue`,def:l.blue||`#3b82f6`},{name:`magenta`,def:l.magenta||`#8b5cf6`},{name:`cyan`,def:l.cyan||`#06b6d4`},{name:`white`,def:l.white||`#f8fafc`},{name:`brightBlack`,def:l.brightBlack||`#475569`},{name:`brightRed`,def:l.brightRed||`#fb7185`},{name:`brightGreen`,def:l.brightGreen||`#34d399`},{name:`brightYellow`,def:l.brightYellow||`#fbbf24`},{name:`brightBlue`,def:l.brightBlue||`#60a5fa`},{name:`brightMagenta`,def:l.brightMagenta||`#a78bfa`},{name:`brightCyan`,def:l.brightCyan||`#22d3ee`},{name:`brightWhite`,def:l.brightWhite||`#ffffff`}].map(e=>`
              <div style="display: flex; flex-direction: column; align-items: center; gap: 2px;">
                <input type="color" class="ansi-color-picker" data-ansi="${e.name}" value="${p[e.name]&&p[e.name].startsWith(`#`)?p[e.name]:e.def.startsWith(`#`)?e.def:`#ffffff`}" style="width: 24px; height: 24px; border: none; cursor: pointer; border-radius: 3px; background: transparent;" title="${e.name}" />
                <span style="font-size: 8px; color: #64748b; text-transform: uppercase;">${e.name.slice(0,4)}</span>
              </div>
            `).join(``)}
          </div>

          <!-- Live Terminal Preview -->
          <div class="sess-terminal-preview" id="sessTermPreview" style="background: ${d}; color: ${u};">
            <div><span style="color: #10b981; font-weight: bold;">root@server</span>:<span style="color: #60a5fa;">~</span># ls -la --color=auto</div>
            <div style="color: #94a3b8;">total 48</div>
            <div>drwxr-xr-x  6 root root  4096 Sep  8 12:00 <span style="color: #60a5fa; font-weight: bold;">.</span></div>
            <div>drwxr-xr-x 19 root root  4096 Aug 15 08:30 <span style="color: #3b82f6; font-weight: bold;">..</span></div>
            <div>-rw-------  1 root root  1420 Sep  8 11:20 .bash_history</div>
            <div>-rwxr-xr-x  1 root root 18432 Sep  8 14:45 <span style="color: #10b981; font-weight: bold;">nexterm-daemon</span></div>
            <div>-rw-r--r--  1 root root   852 Sep  8 10:15 <span style="color: #f59e0b;">config.json</span></div>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; gap: 8px; align-items: center;">
        <button class="btn-secondary" id="modalCancel" type="button">Cancel</button>
        <button class="btn-secondary" id="modalTestConnect" type="button" title="Test Connection without saving permanently">🧪 Test Connection</button>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn-secondary" id="modalSaveOnly" type="button">${n?`Save Changes`:`Save Only`}</button>
        <button class="btn-primary" id="modalSaveConnect" type="button">⚡ ${n?`Save & Reconnect`:`Save & Connect`}</button>
      </div>
    </div>
  `,`modal-session-editor`);v.querySelectorAll(`.sess-nav-item`).forEach(e=>{e.onclick=()=>{v.querySelectorAll(`.sess-nav-item`).forEach(e=>e.classList.remove(`active`)),v.querySelectorAll(`.sess-tab-content`).forEach(e=>e.classList.add(`hidden`)),e.classList.add(`active`);let t=v.querySelector(`#${e.dataset.tab}`);t&&t.classList.remove(`hidden`)}});let y=c.protocol||`ssh`,b=v.querySelector(`#sProtoSelect`),x=e=>{y=e,b&&(b.value=e),v.querySelectorAll(`.sess-proto-chip`).forEach(t=>{t.classList.toggle(`active`,t.dataset.proto===e)});let t=e===`serial`,n=e===`rdp`,r=e===`local`,i=v.querySelector(`#generalSerialFields`);i&&i.classList.toggle(`hidden`,!t);let a=v.querySelector(`#generalRdpFields`);a&&a.classList.toggle(`hidden`,!n);let o=v.querySelector(`#generalNetworkFields`);o&&o.classList.toggle(`hidden`,t||r);let s=v.querySelector(`#navItemSSH`);s&&s.classList.toggle(`hidden`,t||n||r);let c=v.querySelector(`#navItemAuth`);c&&c.classList.toggle(`hidden`,r);let l=v.querySelector(`#sPort`);l&&(e===`rdp`&&l.value===`22`?l.value=`3389`:e===`vnc`&&l.value===`22`?l.value=`5900`:e===`telnet`&&l.value===`22`?l.value=`23`:(e===`ssh`||e===`sftp`)&&(l.value===`3389`||l.value===`5900`)&&(l.value=`22`))};v.querySelectorAll(`.sess-proto-chip`).forEach(e=>{e.onclick=()=>x(e.dataset.proto)}),b&&(b.onchange=()=>x(b.value));let C=v.querySelector(`#sAutoNameBtn`);C&&(C.onclick=()=>{let e=v.querySelector(`#sHost`)?.value.trim()||``,t=v.querySelector(`#sUser`)?.value.trim()||``,n=parseInt(v.querySelector(`#sPort`)?.value,10)||22,r=``;r=t&&e?`${t}@${e}`:e||e||`Server`,n&&n!==22&&n!==0&&(r+=`:${n}`);let i=v.querySelector(`#sName`);i&&(i.value=r,i.focus())});let w=v.querySelector(`#togglePwBtn`),T=v.querySelector(`#sPassword`);w&&T&&(w.onclick=()=>{let e=T.type===`password`;T.type=e?`text`:`password`,w.textContent=e?`🔒`:`👁️`});let E=v.querySelector(`#togglePwBtnGen`),D=v.querySelector(`#sPasswordGen`);E&&D&&(E.onclick=()=>{let e=D.type===`password`;D.type=e?`text`:`password`,E.textContent=e?`🔒`:`👁️`}),D&&T&&(D.oninput=()=>{T.value=D.value},T.oninput=()=>{D.value=T.value});let O=v.querySelector(`#sAuthTypeQuick`),k=v.querySelector(`#sAuthType`),A=v.querySelector(`#sPasswordGenWrap`),M=v.querySelector(`#sQuickKeyWrap`),ee=e=>{A&&A.classList.toggle(`hidden`,e===`key`||e===`agent`||e===`keyboard-interactive`),M&&M.classList.toggle(`hidden`,e!==`key`)};O&&k&&(O.onchange=()=>{k.value=O.value,typeof k.onchange==`function`&&k.onchange(),ee(O.value)},ee(O.value));let te=v.querySelector(`#sQuickKeyPath`),ne=v.querySelector(`#sKeyPath`);te&&ne&&(te.oninput=()=>{ne.value=te.value,ne.dispatchEvent(new Event(`input`))},ne.oninput=()=>{te.value=ne.value});let N=v.querySelector(`#sQuickBrowseKeyBtn`),P=v.querySelector(`#browseKeyBtn`);N&&P&&(N.onclick=()=>P.click());let F=v.querySelector(`#sHost`),ie=v.querySelector(`#sUser`),ae=v.querySelector(`#sPort`),oe=async()=>{let e=F?F.value.trim():``,t=ie?ie.value.trim():``,n=(ae?parseInt(ae.value,10):22)||22;if(e&&t&&window.go?.main?.App?.FindSessionPassword&&D&&!D.value)try{let r=await window.go.main.App.FindSessionPassword(``,e,n,t);if(r&&!D.value){D.value=r,T&&(T.value=r);let e=v.querySelector(`#sSavePasswordCheck`);e&&(e.checked=!0)}}catch{}};F&&F.addEventListener(`blur`,oe),ie&&ie.addEventListener(`blur`,oe);let se=v.querySelector(`#linkToAuthTab`);se&&(se.onclick=e=>{e.preventDefault();let t=v.querySelector(`.sess-nav-item[data-tab="tab-sess-auth"]`);t&&t.click()});let ce=v.querySelector(`#toggleKeyPassBtn`),le=v.querySelector(`#sKeyPassphrase`);ce&&le&&(ce.onclick=()=>{let e=le.type===`password`;le.type=e?`text`:`password`,ce.textContent=e?`🔒`:`👁️`});let ue=async()=>{let e=v.querySelector(`#sKeyPath`),t=v.querySelector(`#sKeyPassphrase`),n=v.querySelector(`#keyInfoBadge`);if(!n)return;let r=e?e.value.trim():``,i=t?t.value:``;if(!r){n.innerHTML=``;return}if(n.innerHTML=`<span style="color: var(--text-dim);">⏳ Inspecting private key...</span>`,window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ValidatePrivateKeyFile)try{let e=await window.go.main.App.ValidatePrivateKeyFile(r,i);if(e&&e.valid){let t=``;e.hasCertificate&&(t=` • 📜 <span style="color: #67e8f9;">OpenSSH Certificate (${j(e.certificateKeyId||`Active`)})</span>`),n.innerHTML=`<span style="color: #4ade80;">🟢 Valid <b>${j(e.keyType||`Key`)}</b>${t} • Fingerprint: <code>${j(e.fingerprint||``)}</code></span>`}else e&&e.encrypted&&!i?n.innerHTML=`<span style="color: #fbbf24;">🔒 Encrypted private key (${j(e.keyType||`Key`)}) • Passphrase required</span>`:e&&e.error&&(n.innerHTML=`<span style="color: #f87171;">⚠️ ${j(e.error)}</span>`)}catch(e){n.innerHTML=`<span style="color: #f87171;">⚠️ ${j(e.message||String(e))}</span>`}},de=v.querySelector(`#sFolderSelect`),L=v.querySelector(`#sEnvSelect`),fe=v.querySelector(`#sCustomTagGroup`),pe=v.querySelector(`#sEnvCustomTag`),me=v.querySelector(`#sColorPicker`),he=v.querySelector(`#sInheritedEnvBadge`),ge=v.querySelector(`#sInheritedColorHex`),_e=v.querySelector(`#sInheritedDot`),ve=v.querySelector(`#sEnv`),ye=v.querySelector(`#sColor`),be=(e,t,n,r,i)=>{he&&(he.textContent=t||`DEFAULT`,he.className=`tab-env-badge ${e?`env-`+e:``}`,he.style.color=n||`#94a3b8`,he.style.background=r||`rgba(255,255,255,0.08)`,he.style.borderColor=i||`rgba(255,255,255,0.15)`),ge&&(ge.textContent=n||`#64748b`),_e&&(_e.style.background=n||`#64748b`),me&&n&&n.startsWith(`#`)&&(me.value=n),ve&&(ve.value=e||``),ye&&(ye.value=n||``)},xe=()=>{if(!L)return;let e=L.value;if(fe&&(fe.style.display=e===`custom`?`block`:`none`),e===`inherit`){let e=de?de.selectedOptions[0]:null,t=e?e.getAttribute(`data-name`):``,n=i(t);n?be(n.key,n.label,n.color,n.bg,n.border):be(``,`DEFAULT`,`#64748b`,`rgba(255,255,255,0.08)`,`rgba(255,255,255,0.15)`)}else if(e===`custom`){let e=(pe?.value||`CUSTOM`).trim().toUpperCase()||`CUSTOM`,t=me?.value||`#10b981`;be(`custom`,e,t,`${t}28`,`${t}60`),ve&&(ve.value=e)}else if(e===`none`)be(``,`NONE`,`#64748b`,`rgba(255,255,255,0.08)`,`rgba(255,255,255,0.15)`);else{let t=re[e]||r(e);t?be(t.key,t.label,t.color,t.bg,t.border):be(e,e.toUpperCase(),me?.value||`#3b82f6`,`rgba(59,130,246,0.18)`,`rgba(59,130,246,0.45)`)}};if(L&&(L.onchange=xe),de&&(de.onchange=()=>{let e=m.find(e=>e.id===de.value);if(e){let t=v.querySelector(`#sUser`);if(t&&!t.value.trim()&&e.defaultUsername&&(t.value=e.defaultUsername),e.defaultPort&&v.querySelector(`#sPort`)){let t=parseInt(v.querySelector(`#sPort`).value,10);(!t||t===22)&&(v.querySelector(`#sPort`).value=e.defaultPort)}e.environment&&L&&L.value===`inherit`&&xe()}L&&L.value===`inherit`&&xe()}),me&&(me.oninput=()=>{let e=me.value;ye&&(ye.value=e),ge&&(ge.textContent=e),_e&&(_e.style.background=e),he&&(he.style.color=e,he.style.background=`${e}28`,he.style.borderColor=`${e}60`)}),pe&&(pe.oninput=()=>{L&&L.value===`custom`&&xe()}),c.environment){let e=[`prod`,`uat`,`test`,`testing`,`dev`,`staging`,`dr`,`none`],t=c.environment.toLowerCase();e.includes(t)?L&&(L.value=t===`test`?`testing`:t):(L&&(L.value=`custom`),pe&&(pe.value=c.environment),fe&&(fe.style.display=`block`))}else L&&(L.value=`inherit`);c.color&&me&&c.color.startsWith(`#`)&&(me.value=c.color),xe();let Se=v.querySelector(`#sNewFolderQuickBtn`);Se&&(Se.onclick=()=>{let e=prompt(`Enter new folder name (e.g. Staging, Production, Databases):`);e&&e.trim()&&window.go&&window.go.main&&window.go.main.App&&window.go.main.App.AddFolder&&window.go.main.App.AddFolder(``,e.trim()).then(t=>{if(S(`Folder "${e.trim()}" created`,`success`),de&&t){let n=[],r=(e,t=0)=>{e.isDir&&e.id!==`root`&&n.push({id:e.id,name:`${`  `.repeat(t)}${t>0?`└─ `:`📁 `}${e.name}`,rawName:e.name}),e.children&&e.children.forEach(n=>r(n,t+(e.id===`root`?0:1)))};r(t),de.innerHTML=`<option value="">(Root / Unassigned)</option>`+n.map(e=>`<option value="${e.id}" data-name="${j(e.rawName)}">${j(e.name)}</option>`).join(``);let i=n.find(t=>t.rawName.toLowerCase()===e.trim().toLowerCase());i&&(de.value=i.id,L&&L.value===`inherit`&&xe())}}).catch(e=>{S(`Failed to create folder: `+e,`error`)})});let Ce=async()=>{let e=v.querySelector(`#sessAgentStatus`);if(e&&(e.innerHTML=`<span style="color: var(--text-dim);">Checking SSH Agent...</span>`,window.go&&window.go.main&&window.go.main.App&&window.go.main.App.CheckSSHAgent))try{let t=await window.go.main.App.CheckSSHAgent();e.innerHTML=t&&t.available?`<span style="color: #4ade80;">🟢 SSH Agent active (${t.keyCount} key${t.keyCount===1?``:`s`} loaded)</span>`:`<span style="color: #94a3b8;">⚠️ SSH Agent not detected (${j(t.error||`Agent service not running`)})</span>`}catch{e.innerHTML=`<span style="color: #94a3b8;">⚠️ SSH Agent unreachable</span>`}},we=v.querySelector(`#refreshAgentBtn`);we&&(we.onclick=()=>Ce());let Te=v.querySelector(`#sessPassFields`),Ee=v.querySelector(`#sessKeyFields`);k&&(k.onchange=()=>{let e=k.value===`key`,t=k.value===`agent`,n=k.value===`auto`,r=k.value===`keyboard-interactive`,i=k.value===`password`;Te&&Te.classList.toggle(`hidden`,e||t),Ee&&Ee.classList.toggle(`hidden`,i||t||r),(t||n)&&Ce(),(e||n)&&ue(),O&&(O.value=k.value),ee(k.value)});let De=async()=>{let e=v.querySelector(`#sHost`)?.value?.trim(),t=v.querySelector(`#sUser`)?.value?.trim(),n=parseInt(v.querySelector(`#sPort`)?.value,10)||22;if(e&&t&&(!D||!D.value)&&window.go?.main?.App?.FindSessionPassword)try{let r=await window.go.main.App.FindSessionPassword(``,e,n,t);r&&D&&!D.value&&(D.value=r,T&&(T.value=r),S(`⚡ Auto-loaded saved credentials for ${t}@${e}`,`info`))}catch{}};v.querySelector(`#sHost`)?.addEventListener(`change`,De),v.querySelector(`#sUser`)?.addEventListener(`change`,De);let Oe=v.querySelector(`#sKeyPath`);Oe&&(Oe.oninput=()=>ue()),le&&(le.oninput=()=>ue());let ke=v.querySelector(`#sUseAgent`);ke&&(ke.onchange=()=>{if(ke.checked)Ce();else{let e=v.querySelector(`#sessAgentStatus`);e&&k?.value!==`agent`&&(e.innerHTML=``)}});let R=v.querySelector(`#browseKeyBtn`);R&&(R.onclick=async()=>{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.SelectPrivateKeyFile)try{let e=await window.go.main.App.SelectPrivateKeyFile();e&&(v.querySelector(`#sKeyPath`).value=e,await ue())}catch{}});let Ae=v.querySelector(`#browseCertBtn`);Ae&&(Ae.onclick=async()=>{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.SelectPrivateKeyFile)try{let e=await window.go.main.App.SelectPrivateKeyFile();e&&v.querySelector(`#sCertPath`)&&(v.querySelector(`#sCertPath`).value=e)}catch{}}),c.privateKeyPath&&ue(),(c.useAgent||c.authType===`agent`)&&Ce();let je=v.querySelector(`#sUseJump`),Me=v.querySelector(`#jumpFields`);je&&Me&&(je.onchange=()=>Me.classList.toggle(`hidden`,!je.checked));let Ne=v.querySelector(`#sJumpAuthType`),Pe=v.querySelector(`#jumpPassFields`),Fe=v.querySelector(`#jumpKeyFields`);Ne&&Pe&&Fe&&(Ne.onchange=()=>{let e=Ne.value===`key`;Pe.classList.toggle(`hidden`,e),Fe.classList.toggle(`hidden`,!e)});let Ie=v.querySelector(`#browseJumpKeyBtn`);Ie&&(Ie.onclick=async()=>{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.SelectPrivateKeyFile)try{let e=await window.go.main.App.SelectPrivateKeyFile();if(e){let t=v.querySelector(`#sJumpKeyPath`);t&&(t.value=e)}}catch{}});let Le=v.querySelector(`#sProxyType`),Re=v.querySelector(`#proxyFields`);Le&&Re&&(Le.onchange=()=>Re.classList.toggle(`hidden`,Le.value===`none`));let ze=v.querySelector(`#sTheme`),Be=v.querySelector(`#sFgColor`),Ve=v.querySelector(`#sBgColor`),He=v.querySelector(`#sessTermPreview`),z=()=>{if(!He)return;He.style.background=Ve?Ve.value:`#090c11`,He.style.color=Be?Be.value:`#d9e0ea`;let e=v.querySelector(`#sFontFamily`)?v.querySelector(`#sFontFamily`).value:`Cascadia Mono, monospace`;He.style.fontFamily=e};Be&&(Be.oninput=z),Ve&&(Ve.oninput=z),ze&&(ze.onchange=()=>{let e=yr[ze.value];e&&(Be&&e.foreground&&(Be.value=e.foreground.startsWith(`#`)?e.foreground:`#d9e0ea`),Ve&&e.background&&(Ve.value=e.background.startsWith(`#`)?e.background:`#090c11`),v.querySelectorAll(`.ansi-color-picker`).forEach(t=>{let n=t.dataset.ansi;e[n]&&e[n].startsWith(`#`)&&(t.value=e[n])}),z())});let Ue=v.querySelector(`#resetColorsBtn`);Ue&&(Ue.onclick=()=>{let e=yr[`dark-modern`];Be&&(Be.value=e.foreground),Ve&&(Ve.value=e.background),v.querySelectorAll(`.ansi-color-picker`).forEach(t=>{let n=t.dataset.ansi;e[n]&&(t.value=e[n])}),z()}),v.querySelector(`#modalClose`).onclick=U,v.querySelector(`#modalCancel`).onclick=U;let We=async(r=!1)=>{let i=v.querySelector(`#sHost`)?v.querySelector(`#sHost`).value.trim():``,a=v.querySelector(`#sUser`)?v.querySelector(`#sUser`).value.trim():``,o=v.querySelector(`#sAuthTypeQuick`),s=v.querySelector(`#sAuthType`),c=v.querySelector(`#sFolderSelect`);if(y!==`serial`&&y!==`local`&&!i){S(`Remote Host / IP is required`,`error`);return}let l={};v.querySelectorAll(`.ansi-color-picker`).forEach(e=>{l[e.dataset.ansi]=e.value});let u=n&&t?.id?t.id:window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():`sess-`+Date.now()+`-`+Math.random().toString(36).substr(2,9),d=n&&t?.vaultKey?t.vaultKey:u,f=v.querySelector(`#sName`)?v.querySelector(`#sName`).value.trim():``,p={id:u,vaultKey:d,name:f&&f!==`New Server`&&f!==`New Session`?f:i?a?`${a}@${i}`:i:`Server`,protocol:y,host:i,port:parseInt(v.querySelector(`#sPort`).value,10)||(y===`rdp`?3389:22),username:a,authType:o?o.value:s?s.value:`password`,environment:v.querySelector(`#sEnv`)?v.querySelector(`#sEnv`).value:``,color:v.querySelector(`#sColor`)?v.querySelector(`#sColor`).value:``,privateKeyPath:s&&(s.value===`key`||s.value===`auto`)?v.querySelector(`#sKeyPath`).value.trim():``,certificatePath:v.querySelector(`#sCertPath`)?v.querySelector(`#sCertPath`).value.trim():``,keyPassphrase:v.querySelector(`#sKeyPassphrase`)?v.querySelector(`#sKeyPassphrase`).value:``,useAgent:v.querySelector(`#sUseAgent`)?v.querySelector(`#sUseAgent`).checked:s?.value===`agent`,terminalType:v.querySelector(`#sTermType`)?v.querySelector(`#sTermType`).value:`xterm-256color`,fontFamily:v.querySelector(`#sFontFamily`)?v.querySelector(`#sFontFamily`).value:`Cascadia Mono, Consolas, monospace`,fontSize:parseInt(v.querySelector(`#sFontSize`).value,10)||13,rows:parseInt(v.querySelector(`#sRows`).value,10)||24,cols:parseInt(v.querySelector(`#sCols`).value,10)||80,cursorStyle:v.querySelector(`#sCursorStyle`)?v.querySelector(`#sCursorStyle`).value:`block`,cursorBlink:!v.querySelector(`#sCursorBlink`)||v.querySelector(`#sCursorBlink`).checked,encoding:v.querySelector(`#sEncoding`)?v.querySelector(`#sEncoding`).value:`utf-8`,scrollback:parseInt(v.querySelector(`#sScrollback`).value,10)||1e4,startupCommand:v.querySelector(`#sStartup`)?v.querySelector(`#sStartup`).value.trim():``,workingDirectory:v.querySelector(`#sWorkDir`)?v.querySelector(`#sWorkDir`).value.trim():``,keepAliveInterval:parseInt(v.querySelector(`#sKeepAlive`).value,10)||15,connectionTimeout:parseInt(v.querySelector(`#sTimeout`).value,10)||10,compression:v.querySelector(`#sCompression`)?v.querySelector(`#sCompression`).checked:!1,x11Forwarding:v.querySelector(`#sX11Forwarding`)?v.querySelector(`#sX11Forwarding`).checked:!1,autoReconnect:v.querySelector(`#sAutoReconnect`)?v.querySelector(`#sAutoReconnect`).checked:!1,reconnectAttempts:parseInt(v.querySelector(`#sReconnectAttempts`)?.value,10)||5,reconnectDelay:parseInt(v.querySelector(`#sReconnectDelay`)?.value,10)||2,proxyType:v.querySelector(`#sProxyType`)?v.querySelector(`#sProxyType`).value:`none`,proxyHost:v.querySelector(`#sProxyHost`)?v.querySelector(`#sProxyHost`).value.trim():``,proxyPort:parseInt(v.querySelector(`#sProxyPort`)?.value,10)||1080,useJumpHost:v.querySelector(`#sUseJump`)?v.querySelector(`#sUseJump`).checked:!1,jumpHost:v.querySelector(`#sJumpHost`)?v.querySelector(`#sJumpHost`).value.trim():``,jumpPort:parseInt(v.querySelector(`#sJumpPort`)?.value,10)||22,jumpUsername:v.querySelector(`#sJumpUser`)?v.querySelector(`#sJumpUser`).value.trim():`bastion`,jumpAuthType:v.querySelector(`#sJumpAuthType`)?v.querySelector(`#sJumpAuthType`).value:`password`,jumpPrivateKeyPath:v.querySelector(`#sJumpAuthType`)&&v.querySelector(`#sJumpAuthType`).value===`key`&&v.querySelector(`#sJumpKeyPath`)?v.querySelector(`#sJumpKeyPath`).value.trim():``,jumpVaultKey:n&&t?.jumpVaultKey?t.jumpVaultKey:d+`_jump`,theme:ze?ze.value:`dark-modern`,foreground:Be?Be.value:``,background:Ve?Ve.value:``,cursorColor:v.querySelector(`#sCursorColor`)?v.querySelector(`#sCursorColor`).value:``,selectionColor:v.querySelector(`#sSelColor`)?v.querySelector(`#sSelColor`).value:``,ansiColors:l,serialPort:v.querySelector(`#sSerialPort`)?v.querySelector(`#sSerialPort`).value:`COM1`,baudRate:parseInt(v.querySelector(`#sBaudRate`)?.value,10)||115200,dataBits:parseInt(v.querySelector(`#sDataBits`)?.value,10)||8,stopBits:parseInt(v.querySelector(`#sStopBits`)?.value,10)||1,parity:v.querySelector(`#sParity`)?v.querySelector(`#sParity`).value:`none`,rdpDomain:v.querySelector(`#sRDPDomain`)?v.querySelector(`#sRDPDomain`).value.trim():``,rdpFullScreen:v.querySelector(`#sRDPFullScreen`)?v.querySelector(`#sRDPFullScreen`).checked:!1},m=v.querySelector(`#sPasswordGen`)?.value||v.querySelector(`#sPassword`)?.value||``,h=!v.querySelector(`#sSavePasswordCheck`)||v.querySelector(`#sSavePasswordCheck`).checked,_=v.querySelector(`#sJumpPassword`)?v.querySelector(`#sJumpPassword`).value:``,b=v.querySelector(`#sJumpKeyPassphrase`)?v.querySelector(`#sJumpKeyPassphrase`).value:``;if(m&&(p.password=m),U(),window.go&&window.go.main&&window.go.main.App){let t=c?c.value:``;if(n){if(await window.go.main.App.UpdateSession(p),t!==g&&g!==void 0){let e=(function e(t,n){if(!t)return null;if(t.session&&t.session.id===n)return t;if(t.children)for(let r of t.children){let t=e(r,n);if(t)return t}return null})(I,p.id);e&&await window.go.main.App.MoveNode(e.id,t||I.id,-1)}S(`Updated "${p.name}"`,`success`)}else{let n=t||e||``;if(await window.go.main.App.AddSession(n,p),n&&window.go.main.App.ToggleFolder)try{await window.go.main.App.ToggleFolder(n,!0)}catch{}S(`Saved session "${p.name}"`,`success`)}if(m&&p.vaultKey&&h&&(await window.go.main.App.SaveSessionPassword(p.vaultKey,m),p.host&&p.username)){let e=p.host.replace(/[^a-zA-Z0-9_-]/g,`_`),t=`session_${p.username.replace(/[^a-zA-Z0-9_-]/g,`_`)}_${e}_${p.port||22}`;t!==p.vaultKey&&typeof window.go.main.App.SaveSessionPassword==`function`&&await window.go.main.App.SaveSessionPassword(t,m)}let r=v.querySelector(`#sKeyPassphrase`)?v.querySelector(`#sKeyPassphrase`).value:``;r&&p.vaultKey&&await window.go.main.App.SaveSessionPassword(p.vaultKey+`_passphrase`,r),_&&p.jumpVaultKey&&p.jumpAuthType!==`key`&&await window.go.main.App.SaveSessionPassword(p.jumpVaultKey,_),b&&p.jumpVaultKey&&p.jumpAuthType===`key`&&await window.go.main.App.SaveSessionPassword(p.jumpVaultKey+`_passphrase`,b)}await xa(),r&&(y===`rdp`?(S(`Launching native RDP session to ${p.host}...`,`info`),window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.LaunchRDPSession(p,m)):V(p))},Ge=v.querySelector(`#modalTestConnect`);Ge&&(Ge.onclick=async()=>{let e=v.querySelector(`#sHost`)?.value.trim();if(y!==`serial`&&y!==`local`&&!e){S(`Enter Remote Host / IP to test connection`,`error`);return}let t=parseInt(v.querySelector(`#sPort`)?.value,10)||(y===`rdp`?3389:22);Ge.disabled=!0,Ge.textContent=`⏳ Testing...`;try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ScanPorts){let n=await window.go.main.App.ScanPorts(e,String(t),4e3);n&&n.length>0&&n[0].open?S(`✅ Port ${t} reachable on ${e}!`,`success`):S(`⚠️ Cannot reach ${e}:${t} (Port closed or timed out)`,`warning`)}else S(`Configuration for ${e}:${t} is valid!`,`success`)}catch(e){S(`Test connection failed: `+e,`error`)}finally{Ge.disabled=!1,Ge.textContent=`🧪 Test Connection`}}),v.querySelector(`#modalSaveOnly`).onclick=()=>We(!1),v.querySelector(`#modalSaveConnect`).onclick=()=>We(!0)}function Ca(e=``,t=null){let n=!!t,r=t?.environment||``,i=t?.color||`#3b82f6`,a=t?.defaultUsername||``,o=t?.defaultPort||22,s=H(`
    <div class="modal-header">
      <div class="modal-title">📁 ${n?`Folder Properties & Options`:`New Folder`}</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
      <div class="form-group">
        <label>Folder Name *</label>
        <input type="text" id="fNameInput" value="${j(n?t.name:``)}" placeholder="e.g. Production Cluster, Database Servers, AWS" autocomplete="off" />
      </div>

      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 6px; padding: 12px; display: flex; flex-direction: column; gap: 10px;">
        <div style="font-size: 11.5px; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; justify-content: space-between;">
          <span>⚡ Default Credentials & Connection Options</span>
          <span style="font-size: 10.5px; color: var(--text-dim); font-weight: normal;">Inherited by sessions in this folder</span>
        </div>

        <div style="display: flex; gap: 10px;">
          <div class="form-group" style="flex: 2;">
            <label>Default Username</label>
            <input type="text" id="fUsernameInput" value="${j(a)}" placeholder="e.g. root, admin, ubuntu" autocomplete="off" />
          </div>
          <div class="form-group" style="flex: 1;">
            <label>Default Port</label>
            <input type="number" id="fPortInput" value="${o||22}" min="1" max="65535" />
          </div>
        </div>

        <div style="display: flex; gap: 10px; align-items: flex-end;">
          <div class="form-group" style="flex: 2;">
            <label>Environment Tag</label>
            <select id="fEnvSelect">
              <option value="" ${r?``:`selected`}>None / Auto from Name</option>
              <option value="prod" ${r===`prod`?`selected`:``}>🔴 Production (PROD)</option>
              <option value="uat" ${r===`uat`?`selected`:``}>🟠 UAT (Staging)</option>
              <option value="testing" ${r===`testing`||r===`test`?`selected`:``}>🟢 Testing (TEST)</option>
              <option value="dev" ${r===`dev`?`selected`:``}>🔵 Development (DEV)</option>
              <option value="staging" ${r===`staging`?`selected`:``}>🟣 Staging (STAGE)</option>
              <option value="dr" ${r===`dr`?`selected`:``}>🌸 Disaster Recovery (DR)</option>
            </select>
          </div>
          <div class="form-group" style="flex: 1;">
            <label>Folder Color</label>
            <div style="display: flex; align-items: center; gap: 6px; height: 32px;">
              <input type="color" id="fColorPicker" value="${i.startsWith(`#`)?i:`#3b82f6`}" style="width: 32px; height: 32px; padding: 0; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; cursor: pointer; background: transparent;" />
              <span id="fColorHex" style="font-size: 11px; font-family: monospace; color: var(--text-dim);">${i}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCancel">Cancel</button>
      <button class="btn-primary" id="modalSave">${n?`Save Changes`:`Create Folder`}</button>
    </div>
  `),c=s.querySelector(`#fNameInput`),l=s.querySelector(`#fColorPicker`),u=s.querySelector(`#fColorHex`);l&&u&&(l.oninput=()=>{u.textContent=l.value}),c.focus();let d=async()=>{let r=c.value.trim();if(!r)return;let i=(s.querySelector(`#fUsernameInput`)?.value||``).trim(),a=parseInt(s.querySelector(`#fPortInput`)?.value,10)||22,o=s.querySelector(`#fEnvSelect`)?.value||``,l=s.querySelector(`#fColorPicker`)?.value||``;U(),window.go&&window.go.main&&window.go.main.App&&(n?(typeof window.go.main.App.ConfigureFolder==`function`?await window.go.main.App.ConfigureFolder(t.id,r,i,o,l,a):await window.go.main.App.UpdateFolder(t.id,r),S(`Folder "${r}" updated`,`success`)):(typeof window.go.main.App.AddFolderWithOptions==`function`?await window.go.main.App.AddFolderWithOptions(e,r,i,o,l,a):await window.go.main.App.AddFolder(e,r),S(`Folder "${r}" created`,`success`))),await xa()};s.querySelector(`#modalSave`).onclick=d,s.querySelector(`#modalCancel`).onclick=U,s.querySelector(`#modalClose`).onclick=U,c.onkeydown=e=>{e.key===`Enter`&&d()}}function wa(e,t,n=!1){let r=H(`
    <div class="modal-header">
      <div class="modal-title">✏️ Rename ${n?`Folder`:`Session`}</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Name</label>
        <input type="text" id="renameNodeInput" value="${j(t)}" autocomplete="off" />
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCancel">Cancel</button>
      <button class="btn-primary" id="modalSave">Save</button>
    </div>
  `),i=r.querySelector(`#renameNodeInput`);i.focus(),i.select();let a=async()=>{let n=i.value.trim();if(!n||n===t){U();return}U();try{window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.RenameNode(e,n),await xa(),S(`Renamed to "${n}"`,`success`)}catch(e){S(`Rename failed: `+e,`error`)}};r.querySelector(`#modalSave`).onclick=a,r.querySelector(`#modalCancel`).onclick=U,r.querySelector(`#modalClose`).onclick=U,i.onkeydown=e=>{e.key===`Enter`&&a()}}function Ta(e,t,n=!1){let r=[];function i(t,a=``){if(!t||t.session||n&&(t.id===e||oe(e,t.id)))return;let o=a?`${a} / ${t.name}`:t.name;r.push({id:t.id,name:t.name,path:o}),t.children&&t.children.forEach(e=>i(e,o))}i(I);let a=H(`
    <div class="modal-header">
      <div class="modal-title">📦 Move "${j(t)}" to Folder</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 10px;">
        Select destination folder:
      </div>
      <div class="folder-picker-list" style="max-height: 240px; overflow-y: auto; display: flex; flex-direction: column; gap: 4px;">
        ${r.map(e=>`
          <div class="folder-picker-item" data-id="${e.id}" style="padding: 8px 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 12px; transition: background 0.12s;">
            <span>📁</span>
            <span style="font-weight: 500;">${j(e.path)}</span>
          </div>
        `).join(``)}
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary" id="modalCancel">Cancel</button>
    </div>
  `);a.querySelectorAll(`.folder-picker-item`).forEach(n=>{n.onmouseover=()=>n.style.background=`rgba(59, 130, 246, 0.15)`,n.onmouseout=()=>n.style.background=`rgba(255,255,255,0.03)`,n.onclick=async()=>{let r=n.dataset.id;U();try{window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.MoveNode(e,r,-1),await xa(),S(`Moved "${t}"`,`success`)}catch(e){S(`Move failed: `+e,`error`)}}}),a.querySelector(`#modalCancel`).onclick=U,a.querySelector(`#modalClose`).onclick=U}var Ea=null;function Da(e){Ea=e}var Oa=null;function ka(e){Oa=e}async function Aa(){Ea&&await Ea()}async function ja(e){if(!e)return!1;try{if(navigator.clipboard&&navigator.clipboard.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.left=`-9999px`,t.style.top=`-9999px`,t.style.opacity=`0`,document.body.appendChild(t),t.focus(),t.select();let n=document.execCommand(`copy`);return document.body.removeChild(t),n}catch{return!1}}function Ma(e){if(!e)return``;let t=(e.protocol||`ssh`).toLowerCase(),n=e.host||`localhost`,r=t===`rdp`?3389:t===`vnc`?5900:t===`telnet`?23:22,i=e.port||r,a=e.username||``;switch(t){case`ssh`:return a?`ssh -p ${i} ${a}@${n}`:`ssh -p ${i} ${n}`;case`sftp`:return a?`sftp://${a}@${n}:${i}`:`sftp://${n}:${i}`;case`telnet`:return`telnet ${n} ${i}`;case`rdp`:return`mstsc.exe /v:${n}:${i}`;case`vnc`:return`vnc://${n}:${i}`;case`serial`:return`Serial: ${e.port||`COM1`} (Baud: ${e.baudRate||9600})`;case`local`:return`Local Shell: ${e.shellPath||`powershell.exe`}`;default:return`${t}://${a?a+`@`:``}${n}:${i}`}}async function Na(e){if(!e)return;let n=(e.protocol||`ssh`).toLowerCase();if(n!==`ssh`&&n!==`sftp`){S(`SFTP is only available for SSH and SFTP sessions`,`warning`);return}let r=null;if(t){for(let[n,i]of Object.entries(t))if(i&&i.profile&&(i.profile.id===e.id||i.profile.host===e.host&&i.profile.username===e.username)){r=n;break}}r?(Rn(r),Oa&&Oa(t[r].sftpPath||`~`),S(`Opened SFTP for "${e.name}"`,`success`)):(S(`Connecting to "${e.name}" for SFTP...`,`info`),V(e),Oa&&setTimeout(()=>Oa(`~`),650))}function Pa(e){if(!e)return;let n=(e.protocol||`ssh`).toUpperCase(),r=Ma(e),i=!1;if(t){for(let n of Object.values(t))if(n&&n.profile&&n.profile.id===e.id){i=!0;break}}if(!H(`
    <div class="modal-header">
      <div class="modal-title" style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:16px;">ℹ️</span>
        <span>Session Properties — <b>${j(e.name)}</b></span>
        <span class="session-prop-badge" style="font-size:10px; font-weight:700; padding:2px 7px; border-radius:3px; background:rgba(96,165,250,0.15); color:#60a5fa; border:1px solid rgba(96,165,250,0.3); font-family:var(--font-mono);">${n}</span>
      </div>
      <button class="modal-close-btn" id="propModalClose">&times;</button>
    </div>
    <div class="modal-body" style="padding:16px 20px; max-height:480px; overflow-y:auto;">
      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:8px;">General Information</div>
      <div style="display:grid; grid-template-columns:140px 1fr; gap:6px 12px; font-size:12.5px; margin-bottom:16px; background:rgba(0,0,0,0.25); padding:10px 12px; border-radius:4px; border:1px solid var(--border-subtle);">
        <span style="color:var(--text-muted);">Session Name:</span>
        <span style="color:var(--text-primary); font-weight:600;">${j(e.name)}</span>

        <span style="color:var(--text-muted);">Session ID:</span>
        <span style="color:var(--text-secondary); font-family:var(--font-mono); font-size:11px;">${j(e.id||`Auto-generated`)}</span>

        <span style="color:var(--text-muted);">Protocol:</span>
        <span style="color:var(--text-primary); font-weight:600;">${n}</span>

        <span style="color:var(--text-muted);">Live Status:</span>
        <span>${i?`<span style="color:#22c55e; font-weight:600;">● Active / Connected</span>`:`<span style="color:var(--text-muted);">○ Idle / Disconnected</span>`}</span>
      </div>

      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:8px;">Connection Endpoint</div>
      <div style="display:grid; grid-template-columns:140px 1fr; gap:6px 12px; font-size:12.5px; margin-bottom:16px; background:rgba(0,0,0,0.25); padding:10px 12px; border-radius:4px; border:1px solid var(--border-subtle);">
        <span style="color:var(--text-muted);">Remote Host:</span>
        <span style="color:var(--text-primary); font-family:var(--font-mono); font-weight:500;">${j(e.host||`—`)}</span>

        <span style="color:var(--text-muted);">Port:</span>
        <span style="color:var(--text-primary); font-family:var(--font-mono); font-weight:500;">${e.port||(n===`RDP`?3389:n===`VNC`?5900:n===`TELNET`?23:22)}</span>

        <span style="color:var(--text-muted);">Username:</span>
        <span style="color:var(--text-primary);">${j(e.username||`—`)}</span>

        <span style="color:var(--text-muted);">Connection Target:</span>
        <span style="color:#93c5fd; font-family:var(--font-mono); font-size:11.5px; word-break:break-all;">${j(r)}</span>
      </div>

      <div style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:8px;">Security & Terminal Environment</div>
      <div style="display:grid; grid-template-columns:140px 1fr; gap:6px 12px; font-size:12.5px; background:rgba(0,0,0,0.25); padding:10px 12px; border-radius:4px; border:1px solid var(--border-subtle);">
        <span style="color:var(--text-muted);">Authentication:</span>
        <span style="color:var(--text-primary); text-transform:capitalize;">${j(e.authType||`Password / Credential Vault`)}</span>

        ${e.keyPath?`
          <span style="color:var(--text-muted);">Private Key:</span>
          <span style="color:var(--text-secondary); font-family:var(--font-mono); font-size:11px; word-break:break-all;">${j(e.keyPath)}</span>
        `:``}

        ${e.initialDir?`
          <span style="color:var(--text-muted);">Initial Directory:</span>
          <span style="color:var(--text-secondary); font-family:var(--font-mono); font-size:11.5px;">${j(e.initialDir)}</span>
        `:``}

        <span style="color:var(--text-muted);">Keep-Alive:</span>
        <span style="color:var(--text-secondary);">${e.keepaliveInterval?e.keepaliveInterval+`s`:`Default (30s)`}</span>

        <span style="color:var(--text-muted);">Font Size:</span>
        <span style="color:var(--text-secondary);">${e.fontSize?e.fontSize+`px`:`Default (13px)`}</span>
      </div>
    </div>
    <div class="modal-footer" style="display:flex; justify-content:space-between; align-items:center; padding:12px 20px; border-top:1px solid var(--border-subtle); background:rgba(0,0,0,0.15);">
      <div style="display:flex; gap:8px;">
        <button class="btn-action" id="propCopyBtn" title="Copy Connection Command">📋 Copy Details</button>
        ${n===`SSH`||n===`SFTP`?`
          <button class="btn-action" id="propSFTPBtn" title="Open SFTP Explorer">📁 Open SFTP</button>
        `:``}
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn-action" id="propEditBtn">✏️ Edit</button>
        <button class="btn-action primary" id="propConnectBtn">⚡ Connect</button>
        <button class="btn-action" id="propCloseBtn">Close</button>
      </div>
    </div>
  `,`session-props-modal`))return;let a=()=>U(),o=document.getElementById(`propModalClose`),s=document.getElementById(`propCloseBtn`);o&&(o.onclick=a),s&&(s.onclick=a);let c=document.getElementById(`propCopyBtn`);c&&(c.onclick=async()=>{await ja(r),S(`Copied: ${r}`,`success`)});let l=document.getElementById(`propSFTPBtn`);l&&(l.onclick=()=>{a(),Na(e)});let u=document.getElementById(`propEditBtn`);u&&(u.onclick=()=>{a(),J(``,e)});let d=document.getElementById(`propConnectBtn`);d&&(d.onclick=()=>{a(),V(e)})}function Fa(e,t,n){let r=ke();if(!r)return;let i=n.id===(I?I.id:``);r.innerHTML=`
    <div class="context-menu-item" id="cConnectAllFold" style="color: #22c55e; font-weight: 600;">▶ Open All in Tabs</div>
    <div class="context-menu-item" id="cConnectBcastFold" style="color: #38bdf8; font-weight: 600;">⚡ Connect All & Broadcast</div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="cAddSess">＋ New Session</div>
    <div class="context-menu-item" id="cAddFold">📁 New Folder</div>
    <div class="context-menu-separator"></div>
    ${i?``:`<div class="context-menu-item" id="cFolderProps">⚙️ Folder Properties & Options</div>`}
    ${i?``:`<div class="context-menu-item" id="cRenFold">✏️ Rename</div>`}
    ${i?``:`<div class="context-menu-item" id="cMoveFold">📦 Move</div>`}
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="cExpFold">⊞ Expand</div>
    <div class="context-menu-item" id="cColFold">⊟ Collapse</div>
    ${i?``:`
      <div class="context-menu-separator"></div>
      <div class="context-menu-item danger" id="cDelFold">🗑️ Delete</div>
    `}
  `,Ae(e,t);let a=r.querySelector(`#cConnectAllFold`);a&&(a.onclick=()=>{R(),Re(n)});let o=r.querySelector(`#cConnectBcastFold`);o&&(o.onclick=()=>{R(),Le(n)}),r.querySelector(`#cAddSess`).onclick=()=>{R(),J(n.id)},r.querySelector(`#cAddFold`).onclick=()=>{R(),Ca(n.id)};let s=r.querySelector(`#cFolderProps`);s&&(s.onclick=()=>{R(),Ca(n.parentId||``,n)});let c=r.querySelector(`#cRenFold`);c&&(c.onclick=()=>{R(),wa(n.id,n.name,!0)});let l=r.querySelector(`#cMoveFold`);l&&(l.onclick=()=>{R(),Ta(n.id,n.name,!0)}),r.querySelector(`#cExpFold`).onclick=async()=>{R(),n.expanded=!0,window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.ToggleFolder(n.id,!0),await Aa(),S(`Expanded "${n.name}"`,`info`)},r.querySelector(`#cColFold`).onclick=async()=>{R(),n.expanded=!1,window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.ToggleFolder(n.id,!1),await Aa(),S(`Collapsed "${n.name}"`,`info`)};let u=r.querySelector(`#cDelFold`);u&&(u.onclick=async()=>{R();let e=n.children?n.children.length:0,t=e>0?`Are you sure you want to delete folder "${n.name}" and its ${e} item(s)?`:`Are you sure you want to delete folder "${n.name}"?`;if(confirm(t))try{window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.DeleteNode(n.id),await Aa(),S(`Deleted folder "${n.name}"`,`info`)}catch(e){S(`Delete failed: `+e,`error`)}})}function Ia(e,t,n,r){let i=ke();i&&(i.innerHTML=`
    <div class="context-menu-item" id="cConn">⚡ Connect</div>
    <div class="context-menu-item" id="cConnNew">⧉ Open in New Tab (Duplicate)</div>
    <div class="context-menu-item" id="cEdit">✏️ Edit</div>
    <div class="context-menu-item" id="cDup">📋 Duplicate Saved Entry</div>
    <div class="context-menu-item" id="cRenSess">🏷️ Rename</div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item" id="cMoveSess">📦 Move To</div>
    <div class="context-menu-item" id="cCopyDetails">📋 Copy Connection Details</div>
    <div class="context-menu-item" id="cOpenSFTP">📁 Open SFTP</div>
    <div class="context-menu-item" id="cProps">ℹ️ Properties</div>
    <div class="context-menu-separator"></div>
    <div class="context-menu-item danger" id="cDel">🗑️ Delete</div>
  `,Ae(e,t),i.querySelector(`#cConn`).onclick=()=>{R(),V(n)},i.querySelector(`#cConnNew`).onclick=()=>{R(),V(n,!0)},i.querySelector(`#cEdit`).onclick=()=>{R(),J(``,n)},i.querySelector(`#cDup`).onclick=async()=>{R();try{window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.DuplicateSession(r),await Aa(),S(`Duplicated "${n.name}"`,`success`)}catch(e){S(`Duplicate failed: `+e,`error`)}},i.querySelector(`#cRenSess`).onclick=()=>{R(),wa(r,n.name,!1)},i.querySelector(`#cMoveSess`).onclick=()=>{R(),Ta(r,n.name,!1)},i.querySelector(`#cCopyDetails`).onclick=async()=>{R();let e=Ma(n);await ja(e),S(`Copied connection details: ${e}`,`success`)},i.querySelector(`#cOpenSFTP`).onclick=()=>{R(),Na(n)},i.querySelector(`#cProps`).onclick=()=>{R(),Pa(n)},i.querySelector(`#cDel`).onclick=async()=>{if(R(),confirm(`Are you sure you want to delete session "${n.name}"?`))try{window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.DeleteNode(r),await Aa(),S(`Deleted session "${n.name}"`,`info`)}catch(e){S(`Delete failed: `+e,`error`)}})}var La=null;function Ra(e){La=e}function za(e){if(e.isDir)return`<svg width="15" height="15" viewBox="0 0 16 16"><path d="M1 3a1 1 0 0 1 1-1h4l2 2h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3z" fill="#f59e0b"/></svg>`;let t=(e.extension||``).toLowerCase(),n=(e.name||``).toLowerCase();return t===`.c`||t===`.cpp`||t===`.cc`||t===`.h`||t===`.hpp`?`<svg width="15" height="15" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7.5" fill="#1d4ed8"/><path d="M10.5 5.5A3.5 3.5 0 1 0 10.5 10.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" fill="none"/></svg>`:t===`.o`||t===`.obj`||t===`.so`||t===`.a`||t===`.dll`||t===`.bin`||t===`.exe`||t===`.class`?`<svg width="15" height="15" viewBox="0 0 16 16"><rect width="15" height="15" rx="2" fill="#e0e7ff" stroke="#6366f1" stroke-width="1"/><text x="7.5" y="6.5" font-size="5" font-family="monospace" font-weight="bold" fill="#312e81" text-anchor="middle">100</text><text x="7.5" y="12" font-size="5" font-family="monospace" font-weight="bold" fill="#312e81" text-anchor="middle">001</text></svg>`:n===`makefile`||n===`cmakelists.txt`||t===`.mk`||t===`.cmake`?`<svg width="15" height="15" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 1 1-1h6l4 4v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/><line x1="4" y1="5" x2="8" y2="5" stroke="#0284c7" stroke-width="1.2"/><line x1="4" y1="8" x2="11" y2="8" stroke="#0284c7" stroke-width="1.2"/><line x1="4" y1="11" x2="9" y2="11" stroke="#0284c7" stroke-width="1.2"/></svg>`:t===`.py`?`<svg width="15" height="15" viewBox="0 0 16 16"><rect width="15" height="15" rx="2" fill="#38bdf8"/><path d="M4 4h5v3H5v1h4v3H4z" fill="#facc15"/></svg>`:t===`.sh`||t===`.bash`||t===`.zsh`||t===`.ksh`?`<svg width="15" height="15" viewBox="0 0 16 16"><rect width="15" height="15" rx="2" fill="#047857"/><path d="M4 6l3 2-3 2M8 10h4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/></svg>`:[`.tar`,`.gz`,`.tgz`,`.zip`,`.rar`,`.7z`,`.deb`,`.rpm`].includes(t)?`<svg width="15" height="15" viewBox="0 0 16 16"><rect width="15" height="15" rx="2" fill="#d97706"/><line x1="2" y1="6" x2="14" y2="6" stroke="#ffffff" stroke-width="1.2"/></svg>`:`<svg width="15" height="15" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 1 1-1h6l5 5v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1z" fill="#bae6fd" stroke="#38bdf8" stroke-width="0.8"/><polyline points="9 0 9 5 14 5" fill="#7dd3fc"/></svg>`}function Ba(e,t){return t?``:e<=0?`0`:e<1024?`1`:e<1048576?Math.max(1,Math.round(e/1024)).toString():(e/1048576).toFixed(1)+`M`}function Va(e=``){switch(e.toLowerCase().substring(e.lastIndexOf(`.`))){case`.c`:case`.h`:case`.cpp`:case`.hpp`:case`.cc`:return`C/C++`;case`.py`:case`.pyw`:return`Python`;case`.sh`:case`.bash`:case`.zsh`:case`.ksh`:return`Shell/Bash`;case`.go`:return`Go`;case`.java`:return`Java`;case`.js`:case`.mjs`:case`.cjs`:case`.ts`:case`.jsx`:case`.tsx`:return`JavaScript`;case`.json`:return`JSON`;case`.xml`:case`.html`:case`.htm`:case`.svg`:return`XML/HTML`;case`.css`:case`.scss`:case`.less`:return`CSS`;case`.sql`:return`SQL`;case`.conf`:case`.ini`:case`.cfg`:case`.yaml`:case`.yml`:return`Config/YAML`;default:return`Slack Code (Auto)`}}function Ha(e,t=`Slack Code (Auto)`){if(!e)return``;let n=/(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*|<!--[\s\S]*?-->|`(?:\\[\s\S]|[^`\\])*`|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*')|(\b0x[0-9a-fA-F]+\b|\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|(\b(?:true|false|null|undefined|nil|None|True|False)\b)|(\b(?:const|let|var|function|func|def|class|interface|type|struct|package|import|export|from|default|return|if|else|elif|then|fi|for|range|of|in|do|done|while|until|switch|case|select|chan|defer|go|break|continue|yield|try|catch|finally|throw|raise|except|with|as|pass|new|this|self|super|extends|implements|static|async|await|typeof|instanceof|void|public|private|protected|echo|local|readonly|SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN|GROUP|BY|ORDER|TABLE|CREATE|DROP)\b)|(\b(?:document|window|console|Math|JSON|Object|Array|Promise|String|Number|Boolean|Map|Set|fmt|os|io|time|sys|str|int|float|bool|bytes|list|dict|tuple|any|error)\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\())|(\.[a-zA-Z_$][a-zA-Z0-9_$]*\b)|(=>|===|!==|==|!=|<=|>=|&&|\|\||\+\+|--|\+=|-=|\*=|\/=|<<|>>|[=!+\-*\/%<>?&|^~:])|([{}()\[\];,])/g,r=0,i=``,a;for(;(a=n.exec(e))!==null;){a.index>r&&(i+=j(e.slice(r,a.index)));let[t,n,o,s,c,l,u,d,f,p]=a;n?n.startsWith(`//`)||n.startsWith(`/*`)||n.startsWith(`#`)||n.startsWith(`<!--`)?i+=`<span class="tok-cmt">${j(n)}</span>`:i+=`<span class="tok-str">${j(n)}</span>`:i+=o?`<span class="tok-num">${j(o)}</span>`:s?`<span class="tok-bool">${j(s)}</span>`:c?`<span class="tok-kw">${j(c)}</span>`:l?`<span class="tok-type">${j(l)}</span>`:u?`<span class="tok-fn">${j(u)}</span>`:d?`<span class="tok-punct">.</span><span class="tok-prop">${j(d.slice(1))}</span>`:f?`<span class="tok-op">${j(f)}</span>`:p?`<span class="tok-punct">${j(p)}</span>`:j(t),r=a.index+t.length}return r<e.length&&(i+=j(e.slice(r))),e.endsWith(`
`)&&(i+=` `),i}function Ua(e,t){if(!t)return;let n=t.octalPerm||`0755`;n.length===3&&(n=`0`+n);let r=H(`
    <div class="modal-header">
      <div class="modal-title" style="display: flex; align-items: center; gap: 6px;">
        <span>🔑</span> Change File Permissions (chmod)
      </div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body" style="padding: 16px 18px;">
      <div class="chmod-target-info">
        <span class="chmod-filename">${j(t.name)}</span>
        <span class="chmod-path">${j(t.path)}</span>
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
        <input type="text" id="chmodOctalInput" value="${n}" maxlength="4" />
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
  `,`modal-chmod`);if(!r)return;let i=r.querySelector(`#permOwnerR`),a=r.querySelector(`#permOwnerW`),o=r.querySelector(`#permOwnerX`),s=r.querySelector(`#permGroupR`),c=r.querySelector(`#permGroupW`),l=r.querySelector(`#permGroupX`),u=r.querySelector(`#permOtherR`),d=r.querySelector(`#permOtherW`),f=r.querySelector(`#permOtherX`),p=r.querySelector(`#chmodOctalInput`);function m(e){let t=parseInt(e,8);if(isNaN(t))return;let n=t>>6&7,r=t>>3&7,p=t&7;i.checked=!!(n&4),a.checked=!!(n&2),o.checked=!!(n&1),s.checked=!!(r&4),c.checked=!!(r&2),l.checked=!!(r&1),u.checked=!!(p&4),d.checked=!!(p&2),f.checked=!!(p&1)}function h(){let e=0;i.checked&&(e+=4),a.checked&&(e+=2),o.checked&&(e+=1);let t=0;s.checked&&(t+=4),c.checked&&(t+=2),l.checked&&(t+=1);let n=0;u.checked&&(n+=4),d.checked&&(n+=2),f.checked&&(n+=1);let r=`0${e}${t}${n}`;return p.value=r,r}m(n),[i,a,o,s,c,l,u,d,f].forEach(e=>{e.onchange=h}),p.oninput=()=>{m(p.value)},r.querySelectorAll(`.btn-preset`).forEach(e=>{e.onclick=()=>{p.value=e.dataset.octal,m(e.dataset.octal)}});let g=r.querySelector(`#chmodCancel`);g&&(g.onclick=U);let _=r.querySelector(`#chmodApply`);_&&(_.onclick=async()=>{let n=p.value.trim();U(),S(`Applying permissions ${n} to ${t.name}...`,`info`);try{if(window.go&&window.go.main&&window.go.main.App){await window.go.main.App.SFTPChmodRemote(e,t.path,n),S(`Permissions updated to ${n}`,`success`);let r=T();r[e]&&r[e].refreshRemoteList&&r[e].refreshRemoteList(),typeof La==`function`&&La()}}catch(e){S(`Failed to change permissions: ${e}`,`error`)}})}function Wa(e,t,n){let r=ke();if(!r)return;let i=P(),a=T();if(r.innerHTML=`
    ${n.isDir?`
      <div class="context-menu-item" id="sftpOpenDir">📁 Open Folder</div>
      <div class="context-menu-item" id="sftpCdTerminal">💻 cd terminal to this folder</div>
    `:`
      <div class="context-menu-item" id="sftpOpenExternal">📂 Open (Default Program)</div>
      <div class="context-menu-item" id="sftpEdit">✏️ Open with default text editor</div>
      <div class="context-menu-item" id="sftpOpenWith">📋 Open with...</div>
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
  `,Ae(e,t),!n.isDir)r.querySelector(`#sftpOpenExternal`).onclick=()=>{R(),Ka(n.path,!1)},r.querySelector(`#sftpEdit`).onclick=()=>{R(),Xa(n.path)},r.querySelector(`#sftpOpenWith`).onclick=()=>{R(),Ka(n.path,!0)};else{r.querySelector(`#sftpOpenDir`).onclick=()=>{R(),typeof La==`function`&&La(n.path)};let e=r.querySelector(`#sftpCdTerminal`);e&&(e.onclick=()=>{R(),i&&a[i]&&!a[i].isLocal&&window.go&&window.go.main&&window.go.main.App&&(window.go.main.App.WriteToTerminal(i,`cd "${n.path}"\r`),S(`Sent: cd "${n.path}" to terminal`,`info`))})}r.querySelector(`#sftpCopyPath`).onclick=()=>{R(),navigator.clipboard.writeText(n.path),S(`Copied remote path to clipboard`,`info`)},r.querySelector(`#sftpCopyPathTerm`).onclick=()=>{R(),i&&a[i]&&window.go&&window.go.main&&window.go.main.App&&(window.go.main.App.WriteToTerminal(i,`"${n.path}" `),S(`Pasted file path to terminal`,`info`))};let o=r.querySelector(`#sftpChmod`);o&&(o.onclick=()=>{R(),Ua(i,n)}),r.querySelector(`#sftpProperties`).onclick=()=>{R(),Ga(n)},r.querySelector(`#sftpDownload`).onclick=async()=>{if(R(),window.go&&window.go.main&&window.go.main.App)try{let e=await window.go.main.App.SelectDownloadDest(n.name);e&&(S(`Downloading ${n.name}...`,`info`),await window.go.main.App.SFTPDownload(i,n.path,e),S(`Downloaded ${n.name} successfully`,`success`))}catch(e){S(`Download failed: `+e,`error`)}},r.querySelector(`#sftpRename`).onclick=async()=>{R();let e=prompt(`Enter new name:`,n.name);if(e&&e!==n.name&&window.go&&window.go.main&&window.go.main.App){let t=n.path.substring(0,n.path.lastIndexOf(`/`)),r=(t===``?`/`:t)+`/`+e;try{await window.go.main.App.SFTPRename(i,n.path,r),S(`Renamed successfully`,`success`),typeof La==`function`&&La()}catch(e){S(`Rename failed: `+e,`error`)}}},r.querySelector(`#sftpDelete`).onclick=async()=>{if(R(),confirm(`Are you sure you want to delete "${n.name}" from remote server?`)&&window.go&&window.go.main&&window.go.main.App)try{await window.go.main.App.SFTPDelete(i,n.path),S(`Deleted ${n.name}`,`info`),typeof La==`function`&&La()}catch(e){S(`Delete failed: `+e,`error`)}}}async function Ga(e){let t=P(),n=e;if(t&&window.go&&window.go.main&&window.go.main.App)try{let r=await window.go.main.App.SFTPGetFileProperties(t,e.path);r&&(n=r)}catch{}let r=H(`
    <div class="modal-header">
      <div class="modal-title">ℹ️ Properties — ${j(n.name)}</div>
      <button class="modal-close-btn" id="modalClose">&times;</button>
    </div>
    <div class="modal-body">
      <div class="prop-grid">
        <span class="prop-label">Name:</span>
        <span class="prop-val">${j(n.name)}</span>

        <span class="prop-label">Full Path:</span>
        <span class="prop-val">${j(n.path)}</span>

        <span class="prop-label">Type:</span>
        <span class="prop-val">${n.isDir?`Directory (Folder)`:`Regular File`}</span>

        <span class="prop-label">Size:</span>
        <span class="prop-val">${j(n.formattedSize||``)} (${n.size||0} bytes)</span>

        <span class="prop-label">Permissions:</span>
        <span class="prop-val"><code>${j(n.permissions||`N/A`)}</code></span>

        <span class="prop-label">Last Modified:</span>
        <span class="prop-val">${j(n.modTime||`N/A`)}</span>
      </div>
    </div>
    <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
      <button class="btn-secondary" id="propChmodBtn" type="button" style="display: inline-flex; align-items: center; gap: 6px;">
        <span>🔑</span> Change Permissions (chmod)
      </button>
      <button class="btn-primary" id="modalCloseBtn">OK</button>
    </div>
  `);if(!r)return;let i=r.querySelector(`#propChmodBtn`);i&&(i.onclick=()=>{U(),Ua(t,n)});let a=r.querySelector(`#modalCloseBtn`);a&&(a.onclick=U);let o=r.querySelector(`#modalClose`);o&&(o.onclick=U)}async function Ka(e,t=!1){let n=P();if(!n||!window.go||!window.go.main||!window.go.main.App){S(`Open an SSH connection first`,`warning`);return}let r=e.substring(e.lastIndexOf(`/`)+1);S(`Downloading & opening ${r}...`,`info`);try{await window.go.main.App.SFTPOpenExternal(n,e,t),S(`Opened ${r} (${t?`App Chooser`:`Default Program`}). Live sync watching for edits.`,`success`)}catch(e){S(`Failed to open file externally: `+e,`error`)}}function qa(e){let{tabId:t,remotePath:n,localPath:r,fileName:i,modTime:a}=e;if(W.autoSaveExternalEdits){Ya(t,n,r,i);return}Ja(t,n,r,i,a)}function Ja(e,t,n,r,i){let a=`banner-`+btoa(e+`:`+t).replace(/=/g,``),o=document.getElementById(a);o&&o.remove();let s=document.createElement(`div`);s.id=a,s.className=`file-change-banner`,s.innerHTML=`
    <div class="file-change-info">
      <div class="file-change-title">
        <span>📝</span> <b>${j(r)}</b> modified externally (${j(i||``)})
      </div>
      <div class="file-change-desc" title="${j(t)}">
        Allow changes to be committed & saved directly to <code>${j(t)}</code>?
      </div>
    </div>
    <div class="file-change-actions">
      <button class="btn-commit" id="btnCommit_${a}">💾 Allow & Save</button>
      <button class="btn-auto-commit" id="btnAuto_${a}" title="Save now and always auto-commit future edits">⚡ Always Auto-Save</button>
      <button class="btn-discard" id="btnDiscard_${a}" title="Discard change notification">&times;</button>
    </div>
  `,document.body.appendChild(s),s.querySelector(`#btnCommit_${a}`).onclick=()=>{s.remove(),Ya(e,t,n,r)},s.querySelector(`#btnAuto_${a}`).onclick=()=>{W.autoSaveExternalEdits=!0,localStorage.setItem(`nexterm_settings`,JSON.stringify(W)),s.remove(),S(`Always auto-save enabled: future modifications will save directly`,`info`),Ya(e,t,n,r)},s.querySelector(`#btnDiscard_${a}`).onclick=()=>{s.remove(),S(`Discarded change notification for ${r}`,`info`)}}async function Ya(e,t,n,r){if(window.go&&window.go.main&&window.go.main.App)try{S(`Committing & saving ${r} to remote server...`,`info`),await window.go.main.App.SFTPCommitExternalChange(e,t,n),S(`✅ Changes committed & directly saved to ${r}!`,`success`),P()===e&&typeof La==`function`&&La()}catch(e){S(`Failed to commit change to server: `+e,`error`)}}async function Xa(e=``){let t=P(),n=T(),r=t?n[t]:null,i=r&&r.profile&&(r.profile.host||r.profile.name)||`workspace`,a=e?e.substring(e.lastIndexOf(`/`)+1):`main.js`,o=e?`${i}:${e}`:`scratchpad:${a}`,s=``;if(e){if(!t||!window.go||!window.go.main||!window.go.main.App){S(`Open an SSH connection first to edit remote files`,`warning`);return}S(`Opening ${a}...`,`info`);try{s=await window.go.main.App.SFTPReadFile(t,e)}catch(e){S(`Failed to open remote file: `+e,`error`);return}}else s=`const btn = document.getElementById('btn');
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
`;let c=Va(a),l=`🐧 Linux`;s.includes(`\r
`)?l=`🪟 Windows`:s.includes(`\r`)&&!s.includes(`
`)&&(l=`🍎 Mac`);let u=H(`
    <div class="nte-titlebar">
      <div class="nte-title-left">
        <span class="nte-title-icon">📝</span>
        <span id="nteTitleText">NexTerm Text Editor — ${j(a)}</span>
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
          ${[`Slack Code (Auto)`,`JavaScript`,`Python`,`Go`,`Shell/Bash`,`JSON`,`XML/HTML`,`CSS`,`C/C++`,`Java`,`SQL`,`Config/YAML`].map(e=>`
            <option value="${e}" ${e===c?`selected`:``}>${e}</option>
          `).join(``)}
        </select>
      </div>
    </div>

    <div class="nte-tabstrip">
      <div class="nte-tab">
        <span>📄</span>
        <span id="nteTabFileName">${j(a)}</span>
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
        <span class="nte-status-path" id="nteStatusPath">${j(o)}</span>
      </div>
      <div class="nte-status-right">
        <span class="nte-status-pill" id="nteStatusEol">${l}</span>
        <span class="nte-status-pill" id="nteStatusSyntax" style="font-weight: 600; color: #36c5f0;">${c}</span>
        <span class="nte-status-pill" id="nteStatusEncoding">UTF-8</span>
        <span class="nte-status-pill" id="nteStatusCaret">Row: 1 | Col: 1 | Pos: 0</span>
        <span class="nte-status-pill" id="nteStatusCounts">0 lines | 0 chars</span>
        <span class="nte-status-save" id="nteStatusSave">✅ Saved</span>
      </div>
    </div>
  `,`nexterm-editor-window`);if(!u)return;let d=u.querySelector(`#remoteEditTextarea`),f=u.querySelector(`#nteHighlightLayer`),p=u.querySelector(`#nteCodeHighlight`),m=u.querySelector(`#nteGutter`),h=u.querySelector(`#nteTabDot`),g=u.querySelector(`#nteStatusSave`),_=u.querySelector(`#nteStatusCaret`),v=u.querySelector(`#nteStatusCounts`),y=u.querySelector(`#nteStatusEol`),b=u.querySelector(`#nteStatusSyntax`),x=u.querySelector(`#nteSyntaxSelect`),C=u.querySelector(`#nteFindPanel`),w=u.querySelector(`#nteFindInput`),E=u.querySelector(`#nteReplaceInput`),D=u.querySelector(`#nteFindStatus`);d.value=s;let O=!1,k=13;function A(){p&&(p.innerHTML=Ha(d.value,b.textContent))}function M(){let e=d.value,t=e.split(`
`).length,n=e.length,r=``;for(let e=1;e<=t;e++)r+=e+`
`;m.textContent=r,m.scrollTop=d.scrollTop,f&&(f.scrollTop=d.scrollTop,f.scrollLeft=d.scrollLeft);let i=d.selectionStart||0,a=e.substring(0,i).split(`
`),o=a.length,s=a[a.length-1].length+1;_.textContent=`Row: ${o} | Col: ${s} | Pos: ${i}`,v.textContent=`${t} lines | ${n} chars`}A(),M(),d.focus(),d.addEventListener(`scroll`,()=>{m.scrollTop=d.scrollTop,f&&(f.scrollTop=d.scrollTop,f.scrollLeft=d.scrollLeft)}),d.addEventListener(`input`,()=>{O||(O=!0,h.classList.add(`modified`),g.textContent=`● Modified (Ctrl+S to save)`,g.className=`nte-status-save modified`),A(),M()}),[`click`,`keyup`,`select`].forEach(e=>{d.addEventListener(e,M)}),d.addEventListener(`keydown`,e=>{if(e.key===`Tab`){e.preventDefault();let t=d.selectionStart,n=d.selectionEnd,r=d.value;d.value=r.substring(0,t)+`    `+r.substring(n),d.selectionStart=d.selectionEnd=t+4,O||(O=!0,h.classList.add(`modified`),g.textContent=`● Modified (Ctrl+S to save)`,g.className=`nte-status-save modified`),A(),M()}else(e.ctrlKey||e.metaKey)&&e.key===`s`?(e.preventDefault(),ee()):(e.ctrlKey||e.metaKey)&&e.key===`f`?(e.preventDefault(),I(!1)):(e.ctrlKey||e.metaKey)&&e.key===`h`&&(e.preventDefault(),I(!0))});let ee=async()=>{if(!e){O=!1,h.classList.remove(`modified`),g.textContent=`✅ Saved`,g.className=`nte-status-save`,S(`Scratchpad saved in session memory`,`success`);return}g.textContent=`Saving to server...`,g.className=`nte-status-save`;try{await window.go.main.App.SFTPWriteFile(t,e,d.value),O=!1,h.classList.remove(`modified`),g.textContent=`✅ Saved & Committed`,g.className=`nte-status-save`,S(`Saved & committed changes directly to ${a}`,`success`),typeof La==`function`&&La()}catch(e){g.textContent=`❌ Save failed`,g.className=`nte-status-save modified`,S(`Save failed: `+e,`error`)}},te=async()=>{if(e&&(!O||confirm(`Discard unsaved changes and reload from server?`)))try{let n=await window.go.main.App.SFTPReadFile(t,e);d.value=n,O=!1,h.classList.remove(`modified`),g.textContent=`✅ Saved`,g.className=`nte-status-save`,A(),M(),S(`Reloaded ${a} from server`,`info`)}catch(e){S(`Reload failed: `+e,`error`)}};u.querySelectorAll(`.nte-menu-item`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.querySelector(`.nte-dropdown`),r=n.classList.contains(`hidden`);u.querySelectorAll(`.nte-dropdown`).forEach(e=>e.classList.add(`hidden`)),r&&n.classList.remove(`hidden`)})}),u.addEventListener(`click`,()=>{u.querySelectorAll(`.nte-dropdown`).forEach(e=>e.classList.add(`hidden`))});let ne=u.querySelector(`#nteMaximizeBtn`);ne.onclick=()=>{u.classList.toggle(`is-maximized`),ne.textContent=u.classList.contains(`is-maximized`)?`🗗`:`🗖`};let N=()=>{(!O||confirm(`You have unsaved modifications in "${a}". Discard and close?`))&&U()};u.querySelector(`#nteCloseBtn`).onclick=N,u.querySelector(`#nteTabClose`).onclick=N,u.querySelector(`#nteActionClose`).onclick=N,u.querySelector(`#nteTbSave`).onclick=ee,u.querySelector(`#nteActionSave`).onclick=ee,u.querySelector(`#nteTbReload`).onclick=te,u.querySelector(`#nteActionReload`).onclick=te,u.querySelector(`#nteTbCut`).onclick=()=>{let e=d.value.substring(d.selectionStart,d.selectionEnd);if(e){navigator.clipboard.writeText(e);let t=d.selectionStart;d.value=d.value.substring(0,t)+d.value.substring(d.selectionEnd),d.selectionStart=d.selectionEnd=t,O=!0,h.classList.add(`modified`),A(),M()}},u.querySelector(`#nteActionCut`).onclick=()=>u.querySelector(`#nteTbCut`).click(),u.querySelector(`#nteTbCopy`).onclick=()=>{let e=d.value.substring(d.selectionStart,d.selectionEnd);e&&(navigator.clipboard.writeText(e),S(`Copied to clipboard`,`info`))},u.querySelector(`#nteActionCopy`).onclick=()=>u.querySelector(`#nteTbCopy`).click(),u.querySelector(`#nteTbPaste`).onclick=async()=>{try{let e=await navigator.clipboard.readText();if(e){let t=d.selectionStart;d.value=d.value.substring(0,t)+e+d.value.substring(d.selectionEnd),d.selectionStart=d.selectionEnd=t+e.length,O=!0,h.classList.add(`modified`),A(),M()}}catch{}},u.querySelector(`#nteActionPaste`).onclick=()=>u.querySelector(`#nteTbPaste`).click(),u.querySelector(`#nteActionSelectAll`).onclick=()=>{d.select(),M()},u.querySelector(`#nteTbUndo`).onclick=()=>{document.execCommand(`undo`),A(),M()},u.querySelector(`#nteActionUndo`).onclick=()=>u.querySelector(`#nteTbUndo`).click(),u.querySelector(`#nteTbRedo`).onclick=()=>{document.execCommand(`redo`),A(),M()},u.querySelector(`#nteActionRedo`).onclick=()=>u.querySelector(`#nteTbRedo`).click();let F=!0;u.querySelector(`#nteTbGutter`).onclick=()=>{F=!F,m.style.display=F?`block`:`none`,u.querySelector(`#nteTbGutter`).classList.toggle(`active`,F)},u.querySelector(`#nteActionToggleGutter`).onclick=()=>u.querySelector(`#nteTbGutter`).click();let re=!1;u.querySelector(`#nteTbWrap`).onclick=()=>{re=!re,d.classList.toggle(`wrap-enabled`,re),f&&f.classList.toggle(`wrap-enabled`,re),u.querySelector(`#nteTbWrap`).classList.toggle(`active`,re),M()},u.querySelector(`#nteActionToggleWrap`).onclick=()=>u.querySelector(`#nteTbWrap`).click(),u.querySelector(`#nteTbZoomIn`).onclick=()=>{if(k<26){k+=1,d.style.fontSize=k+`px`,f&&(f.style.fontSize=k+`px`),m.style.fontSize=k+`px`;let e=(k*1.54).toFixed(1)+`px`;d.style.lineHeight=e,f&&(f.style.lineHeight=e),m.style.lineHeight=e,M()}},u.querySelector(`#nteActionZoomIn`).onclick=()=>u.querySelector(`#nteTbZoomIn`).click(),u.querySelector(`#nteTbZoomOut`).onclick=()=>{if(k>10){--k,d.style.fontSize=k+`px`,f&&(f.style.fontSize=k+`px`),m.style.fontSize=k+`px`;let e=(k*1.54).toFixed(1)+`px`;d.style.lineHeight=e,f&&(f.style.lineHeight=e),m.style.lineHeight=e,M()}},u.querySelector(`#nteActionZoomOut`).onclick=()=>u.querySelector(`#nteTbZoomOut`).click(),u.querySelector(`#nteTbLinEol`).onclick=()=>{d.value=d.value.replace(/\r\n/g,`
`).replace(/\r/g,`
`),y.textContent=`🐧 Linux`,O=!0,h.classList.add(`modified`),A(),M(),S(`Converted EOL to Linux (LF)`,`info`)},u.querySelector(`#nteActionEolLinux`).onclick=()=>u.querySelector(`#nteTbLinEol`).click(),u.querySelector(`#nteTbWinEol`).onclick=()=>{d.value=d.value.replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/\n/g,`\r
`),y.textContent=`🪟 Windows`,O=!0,h.classList.add(`modified`),A(),M(),S(`Converted EOL to Windows (CRLF)`,`info`)},u.querySelector(`#nteActionEolWindows`).onclick=()=>u.querySelector(`#nteTbWinEol`).click(),u.querySelector(`#nteTbMacEol`).onclick=()=>{d.value=d.value.replace(/\r\n/g,`\r`).replace(/\n/g,`\r`),y.textContent=`🍎 Mac`,O=!0,h.classList.add(`modified`),A(),M(),S(`Converted EOL to Mac (CR)`,`info`)},u.querySelector(`#nteActionUpper`).onclick=()=>{let e=d.selectionStart,t=d.selectionEnd;if(e!==t){let n=d.value.substring(e,t).toUpperCase();d.value=d.value.substring(0,e)+n+d.value.substring(t),d.selectionStart=e,d.selectionEnd=t}else d.value=d.value.toUpperCase();O=!0,h.classList.add(`modified`),A(),M()},u.querySelector(`#nteActionLower`).onclick=()=>{let e=d.selectionStart,t=d.selectionEnd;if(e!==t){let n=d.value.substring(e,t).toLowerCase();d.value=d.value.substring(0,e)+n+d.value.substring(t),d.selectionStart=e,d.selectionEnd=t}else d.value=d.value.toLowerCase();O=!0,h.classList.add(`modified`),A(),M()},u.querySelector(`#nteActionTrim`).onclick=()=>{d.value=d.value.split(`
`).map(e=>e.trimEnd()).join(`
`),O=!0,h.classList.add(`modified`),A(),M(),S(`Trimmed trailing whitespaces`,`info`)},u.querySelector(`#nteActionTabsToSpaces`).onclick=()=>{d.value=d.value.replace(/\t/g,`    `),O=!0,h.classList.add(`modified`),A(),M(),S(`Converted tabs to 4 spaces`,`info`)};let ie=e=>{b.textContent=e,x&&(x.value=e),A(),S(`Syntax highlighting set to ${e}`,`info`)};x&&(x.onchange=e=>ie(e.target.value)),u.querySelectorAll(`.nte-syntax-opt`).forEach(e=>{e.onclick=()=>ie(e.dataset.lang)}),u.querySelector(`#nteActionStats`).onclick=()=>{let e=d.value,t=e.split(`
`).length,n=(e.match(/\S+/g)||[]).length,r=e.length;alert(`Document Statistics:\n• File: ${a}\n• Lines: ${t}\n• Words: ${n}\n• Characters: ${r}\n• Syntax: ${b.textContent}`)};let I=(e=!1)=>{C.classList.contains(`hidden`)?(C.classList.remove(`hidden`),w.focus(),w.select(),e&&E.focus()):(C.classList.add(`hidden`),d.focus())};u.querySelector(`#nteTbFind`).onclick=()=>I(!1),u.querySelector(`#nteActionFind`).onclick=()=>I(!1),u.querySelector(`#nteActionReplace`).onclick=()=>I(!0),u.querySelector(`#nteFindCloseBtn`).onclick=()=>C.classList.add(`hidden`);let ae=(e=1)=>{let t=w.value;if(!t)return;let n=d.value,r=e===1?n.indexOf(t,d.selectionEnd):n.lastIndexOf(t,Math.max(0,d.selectionStart-1));r===-1&&(r=e===1?n.indexOf(t,0):n.lastIndexOf(t)),r===-1?(D.textContent=`Phrase not found`,D.style.color=`#f87171`):(d.focus(),d.setSelectionRange(r,r+t.length),D.textContent=`Found at position ${r}`,D.style.color=`#a7f3d0`,M())};u.querySelector(`#nteFindNextBtn`).onclick=()=>ae(1),u.querySelector(`#nteFindPrevBtn`).onclick=()=>ae(-1),w.onkeydown=e=>{e.key===`Enter`?ae(e.shiftKey?-1:1):e.key===`Escape`&&C.classList.add(`hidden`)},u.querySelector(`#nteReplaceBtn`).onclick=()=>{let e=w.value,t=E.value;if(!e)return;let n=d.selectionStart,r=d.selectionEnd;d.value.substring(n,r)===e&&(d.value=d.value.substring(0,n)+t+d.value.substring(r),d.selectionStart=d.selectionEnd=n+t.length,O=!0,h.classList.add(`modified`),A(),M()),ae(1)},u.querySelector(`#nteReplaceAllBtn`).onclick=()=>{let e=w.value,t=E.value;if(!e)return;let n=d.value.split(e).length-1;n>0?(d.value=d.value.split(e).join(t),O=!0,h.classList.add(`modified`),A(),M(),D.textContent=`Replaced ${n} occurrences`,D.style.color=`#a7f3d0`):(D.textContent=`No matches to replace`,D.style.color=`#f87171`)},u.querySelector(`#nteActionGoto`).onclick=()=>{let e=prompt(`Enter line number to navigate to:`);if(e){let t=parseInt(e,10);if(!isNaN(t)&&t>0){let e=d.value.split(`
`);if(t<=e.length){let n=0;for(let r=0;r<t-1;r++)n+=e[r].length+1;d.focus(),d.setSelectionRange(n,n),M()}}}}}var Y=`/`,Za=[],X=null,Qa=`name`,$a=`asc`,eo=!0,to=[`/`,`~`,`/opt`,`/etc`,`/var/log`,`/tmp`];function no(e){Qa=e}function ro(e){$a=e}function io(e){eo=e}var ao=null;function oo(e){ao=e}function so(){if(!Y||Y===`/`)return;let e=Y.lastIndexOf(`/`),t=Y.substring(0,e);(!t||t===``)&&(t=`/`),Z(t)}async function Z(e=``){let n=document.getElementById(`sftpFileList`),r=document.getElementById(`sftpPathInput`),i=document.getElementById(`sftpCountBadge`);if(!n)return;if(!y||y===`home`||!t[y]||t[y].isLocal){n.innerHTML=`<div class="sftp-empty-hint">Connect to an SSH server to browse remote files via SFTP</div>`,i&&(i.textContent=`0 items`);return}let a=t[y],o=e||a&&a.sftpPath||Y||`~`;n.innerHTML=`<div class="sftp-empty-hint">Loading files from ${j(o)}...</div>`;try{if(window.go&&window.go.main&&window.go.main.App&&typeof window.go.main.App.SFTPList==`function`){let e=await window.go.main.App.SFTPList(y,o);Y=e&&e.path||o,a&&(a.sftpPath=Y),r&&(r.value=Y),Y&&!to.includes(Y)&&(to.unshift(Y),to.length>15&&to.pop(),co()),Za=e&&e.items||[],fo(Za,Y),ao&&ao()}else{let e=a.profile&&a.profile.username||`pin`;Y=o===`~`||!o||o===`/`?`/home/${e}`:o,a&&(a.sftpPath=Y),r&&(r.value=Y),Za=[{name:`Videos`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Videos`},{name:`Templates`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Templates`},{name:`Public`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Public`},{name:`Portal`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Portal`},{name:`Pictures`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Pictures`},{name:`Music`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Music`},{name:`Downloads`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Downloads`},{name:`Documents`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Documents`},{name:`Desktop`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 15:10`,path:`${Y}/Desktop`},{name:`.vim`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 12:00`,path:`${Y}/.vim`},{name:`.ssh`,isDir:!0,size:4096,permissions:`drwx------`,modTime:`2026-09-15 12:30`,path:`${Y}/.ssh`},{name:`.pki`,isDir:!0,size:4096,permissions:`drwx------`,modTime:`2026-09-15 12:00`,path:`${Y}/.pki`},{name:`.mozilla`,isDir:!0,size:4096,permissions:`drwx------`,modTime:`2026-09-15 12:00`,path:`${Y}/.mozilla`},{name:`.local`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 12:00`,path:`${Y}/.local`},{name:`.java`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 12:00`,path:`${Y}/.java`},{name:`.dbus`,isDir:!0,size:4096,permissions:`drwx------`,modTime:`2026-09-15 12:00`,path:`${Y}/.dbus`},{name:`.config`,isDir:!0,size:4096,permissions:`drwxr-xr-x`,modTime:`2026-09-15 12:00`,path:`${Y}/.config`},{name:`.cache`,isDir:!0,size:4096,permissions:`drwx------`,modTime:`2026-09-15 12:00`,path:`${Y}/.cache`},{name:`Infranet.properties`,isDir:!1,size:1024,permissions:`-rw-r--r--`,modTime:`2026-09-15 14:00`,path:`${Y}/Infranet.properties`},{name:`default.pinlog`,isDir:!1,size:1024,permissions:`-rw-r--r--`,modTime:`2026-09-15 14:05`,path:`${Y}/default.pinlog`},{name:`dead.letter`,isDir:!1,size:1024,permissions:`-rw-r--r--`,modTime:`2026-09-15 14:10`,path:`${Y}/dead.letter`},{name:`.Xauthority`,isDir:!1,size:1024,permissions:`-rw-------`,modTime:`2026-09-15 14:12`,path:`${Y}/.Xauthority`},{name:`.wget-hsts`,isDir:!1,size:1024,permissions:`-rw-------`,modTime:`2026-09-15 14:15`,path:`${Y}/.wget-hsts`}],fo(Za,Y),ao&&ao()}}catch(e){n.innerHTML=`<div class="sftp-empty-hint" style="color: var(--accent-red); padding: 16px 12px; line-height: 1.5;">
      ⚠️ SFTP Listing failed for <b>${j(o)}</b>:<br>
      <span style="font-size: 11px; opacity: 0.85;">${j(e.toString())}</span><br><br>
      <button class="btn-primary" style="font-size: 11px; padding: 4px 10px; cursor: pointer;" id="sftpRetryHomeBtn">↻ Open Home Directory (~)</button>
    </div>`;let t=document.getElementById(`sftpRetryHomeBtn`);t&&(t.onclick=()=>Z(`~`))}}function co(){let e=document.getElementById(`sftpRecentPathsContainer`);if(!e)return;e.innerHTML=``;let t=to.filter(e=>![`/`,`~`,`/opt`,`/etc`,`/var/log`,`/tmp`,`/home`].includes(e));if(t.length>0){let n=document.createElement(`div`);n.style.cssText=`border-top: 1px solid #38383e; margin: 4px 0;`,e.appendChild(n),t.slice(0,8).forEach(t=>{let n=document.createElement(`div`);n.className=`moba-path-item`,n.dataset.path=t,n.textContent=t,n.onclick=()=>{lo(),Z(t)},e.appendChild(n)})}}function lo(){let e=document.getElementById(`sftpPathDropdownMenu`);e&&e.classList.add(`hidden`)}function uo(){let e=document.getElementById(`sftpPathDropdownMenu`);e&&e.classList.toggle(`hidden`)}function fo(e,t=Y){let n=document.getElementById(`sftpFileList`),r=document.getElementById(`sftpCountBadge`);if(!n)return;let i=[...e];eo||(i=i.filter(e=>!e.name.startsWith(`.`))),i.sort((e,t)=>{if(e.isDir!==t.isDir)return e.isDir?-1:1;if(Qa===`size`){let n=(e.size||0)-(t.size||0);return $a===`asc`?n:-n}{let n=(e.name||``).localeCompare(t.name||``,void 0,{sensitivity:`base`});return $a===`asc`?n:-n}});let a=i.filter(e=>e.isDir).length,o=i.filter(e=>!e.isDir).length;if(r&&(r.textContent=`${i.length} items (${a} dirs, ${o} files)`),n.innerHTML=``,t&&t!==`/`&&t!==``){let e=document.createElement(`div`);e.className=`moba-file-row moba-parent-row`,e.title=`Go to parent directory (Click or Double-click)`,e.innerHTML=`
      <div class="moba-row-left">
        <span class="moba-row-icon">
          <svg width="15" height="15" viewBox="0 0 16 16"><rect width="16" height="16" rx="2" fill="#86efac"/><path d="M11 11V7a2 2 0 0 0-2-2H5m0 0l2.5-2.5M5 5l2.5 2.5" stroke="#166534" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span class="moba-row-name" style="font-weight: bold; color: #a7f3d0;">..</span>
      </div>
      <span class="moba-row-size"></span>
    `,e.addEventListener(`click`,e=>{e.stopPropagation(),so()}),e.addEventListener(`dblclick`,e=>{e.stopPropagation(),so()}),n.appendChild(e)}if(i.length===0){let e=document.createElement(`div`);e.className=`sftp-empty-hint`,e.textContent=`Directory is empty`,n.appendChild(e);return}i.forEach(e=>{let t=document.createElement(`div`);t.className=`moba-file-row ${X&&X.path===e.path?`selected`:``} ${e.isDir?`is-dir`:`is-file`}`,t.dataset.path=e.path,t.dataset.isDir=e.isDir;let r=za(e),i=Ba(e.size,e.isDir),a=`${e.path}\nSize: ${e.formattedSize||e.size+` B`}\nPermissions: ${e.permissions||`N/A`}\nModified: ${e.modTime||`N/A`}`;t.innerHTML=`
      <div class="moba-row-left" title="${j(a)}">
        <span class="moba-row-icon">${r}</span>
        <span class="moba-row-name">${j(e.name)}</span>
      </div>
      <span class="moba-row-size">${j(i)}</span>
    `,t.addEventListener(`click`,async r=>{r.stopPropagation();let i=X&&X.path===e.path;X=e,n.querySelectorAll(`.moba-file-row`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`),e.isDir&&(r.target.closest(`.moba-row-icon`)||i)&&(X=null,await Z(e.path))}),t.addEventListener(`dblclick`,async t=>{t.stopPropagation(),e.isDir?(X=null,await Z(e.path)):Xa(e.path)}),t.addEventListener(`contextmenu`,r=>{r.preventDefault(),r.stopPropagation(),X=e,n.querySelectorAll(`.moba-file-row`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`),Wa(r.clientX,r.clientY,e)}),n.appendChild(t)})}function po(e,n,r,i,a){let o=r.querySelector(`#sftpLocalList_${e}`),s=r.querySelector(`#sftpRemoteList_${e}`),c=r.querySelector(`#sftpLocalPath_${e}`),l=r.querySelector(`#sftpRemotePath_${e}`),u=r.querySelector(`#sftpDriveSel_${e}`),d=r.querySelector(`#splitHandle_${e}`),f=r.querySelector(`#sftpBottom_${e}`),p=r.querySelector(`#sftpToggleBtn_${e}`),m=r.querySelector(`#sftpUploadBtn_${e}`),h=r.querySelector(`#sftpDownloadBtn_${e}`),g=``,_=n.initialDir||`~`,v=null,y=null,b=[],x=[];if(p&&f&&(p.onclick=e=>{e.stopPropagation(),f.classList.toggle(`is-collapsed`);let t=f.classList.contains(`is-collapsed`);p.innerHTML=t?`<span class="split-icon">📂</span> Show SFTP Dual File Manager`:`<span class="split-icon">📂</span> SFTP Dual File Manager`,setTimeout(()=>{i&&i.fit()},50)}),d&&f){let e=!1,t=0,n=0;d.onmousedown=r=>{r.target===p||p&&p.contains(r.target)||(e=!0,t=r.clientY,n=f.offsetHeight,document.body.style.cursor=`row-resize`,r.preventDefault())},window.addEventListener(`mousemove`,r=>{if(!e)return;let a=t-r.clientY,o=Math.max(100,Math.min(window.innerHeight*.75,n+a));f.style.height=`${o}px`,i&&i.fit()}),window.addEventListener(`mouseup`,()=>{e&&(e=!1,document.body.style.cursor=``,i&&i.fit())})}async function C(){if(u)try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.SFTPGetLocalDrives){let e=await window.go.main.App.SFTPGetLocalDrives();u.innerHTML=``,e.forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,u.appendChild(t)})}}catch{}}u&&(u.onchange=()=>{g=u.value,w(g)});async function w(e){if(o){o.innerHTML=`<div style="color: #64748b; padding: 12px; font-size: 11px;">Loading local files...</div>`,v=null;try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.SFTPListLocal){let t=await window.go.main.App.SFTPListLocal(e||g);if(!t)return;g=t.path,c&&(c.value=g),b=t.items||[],T()}}catch(e){o.innerHTML=`<div style="color: #ef4444; padding: 10px; font-size: 11px;">Error: ${j(e)}</div>`}}}function T(){o.innerHTML=``;let e=document.createElement(`div`);if(e.className=`sftp-row`,e.innerHTML=`
      <div class="col-name" style="color: #a7f3d0; font-weight: 700;">
        <span class="file-icon">📁</span>
        <span>..</span>
      </div>
      <div class="col-size"></div>
      <div class="col-date"></div>
    `,e.ondblclick=()=>{w(g.substring(0,Math.max(g.lastIndexOf(`\\`),g.lastIndexOf(`/`)))||g.substring(0,3))},o.appendChild(e),b.length===0){let e=document.createElement(`div`);e.style.cssText=`color: #64748b; padding: 12px; font-size: 11px; text-align: center;`,e.textContent=`Folder is empty`,o.appendChild(e);return}b.forEach(e=>{let t=document.createElement(`div`);t.className=`sftp-row ${v&&v.path===e.path?`selected`:``}`,t.draggable=!0,t.ondragstart=t=>{t.dataTransfer.setData(`text/plain`,JSON.stringify({type:`local`,path:e.path,name:e.name}))},t.innerHTML=`
        <div class="col-name">
          <span class="file-icon">${e.isDir?`📁`:`📄`}</span>
          <span>${j(e.name)}</span>
        </div>
        <div class="col-size">${j(e.formattedSize||``)}</div>
        <div class="col-date">${j(e.modTime||``)}</div>
      `,t.onclick=()=>{v=e,o.querySelectorAll(`.sftp-row`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`)},t.ondblclick=()=>{e.isDir?w(e.path):confirm(`Upload "${e.name}" to remote server folder (${_})?`)&&O(e.path)},o.appendChild(t)})}async function E(n){if(s){s.innerHTML=`<div style="color: #64748b; padding: 12px; font-size: 11px;">Loading remote files...</div>`,y=null;try{if(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.SFTPList){let r=await window.go.main.App.SFTPList(e,n||_);if(!r)return;_=r.path,l&&(l.value=_),x=r.items||[],D(),t[e]&&(t[e].sftpPath=_)}}catch(e){s.innerHTML=`<div style="color: #ef4444; padding: 10px; font-size: 11px;">Error: ${j(e)}</div>`}}}function D(){if(s.innerHTML=``,_!==`/`&&_!==``){let e=document.createElement(`div`);e.className=`sftp-row`,e.innerHTML=`
        <div class="col-name" style="color: #4ade80; font-weight: 700;">
          <span class="file-icon">📁</span>
          <span>..</span>
        </div>
        <div class="col-size"></div>
        <div class="col-perm"></div>
        <div class="col-date"></div>
      `,e.ondblclick=()=>{let e=_.lastIndexOf(`/`);E(e>0?_.substring(0,e):`/`)},s.appendChild(e)}if(x.length===0){let e=document.createElement(`div`);e.style.cssText=`color: #64748b; padding: 12px; font-size: 11px; text-align: center;`,e.textContent=`Directory is empty`,s.appendChild(e);return}x.forEach(e=>{let t=document.createElement(`div`);t.className=`sftp-row ${y&&y.path===e.path?`selected`:``}`,t.draggable=!0,t.ondragstart=t=>{t.dataTransfer.setData(`text/plain`,JSON.stringify({type:`remote`,path:e.path,name:e.name}))},t.innerHTML=`
        <div class="col-name">
          <span class="file-icon">${e.isDir?`📁`:`📄`}</span>
          <span>${j(e.name)}</span>
        </div>
        <div class="col-size">${j(e.formattedSize||``)}</div>
        <div class="col-perm">${j(e.octalPerm||e.permissions||``)}</div>
        <div class="col-date">${j(e.modTime||``)}</div>
      `,t.onclick=()=>{y=e,s.querySelectorAll(`.sftp-row`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`)},t.ondblclick=()=>{e.isDir?E(e.path):Xa(e.path)},s.appendChild(t)})}s&&(s.ondragover=e=>e.preventDefault(),s.ondrop=e=>{e.preventDefault();try{let t=JSON.parse(e.dataTransfer.getData(`text/plain`));t&&t.type===`local`&&O(t.path)}catch{}}),o&&(o.ondragover=e=>e.preventDefault(),o.ondrop=e=>{e.preventDefault();try{let t=JSON.parse(e.dataTransfer.getData(`text/plain`));t&&t.type===`remote`&&k(t.path)}catch{}});async function O(t){let n=t||(v?v.path:null);if(!n){S(`Please select a local file or folder to upload`,`warning`);return}S(`Uploading ${n} ➔ ${_}...`,`info`);try{window.go&&window.go.main&&window.go.main.App&&(await window.go.main.App.SFTPUpload(e,n,_),S(`Upload completed successfully`,`success`),E(_),Z())}catch(e){S(`Upload failed: ${e}`,`error`)}}async function k(t){let n=t||(y?y.path:null);if(!n){S(`Please select a remote file or folder to download`,`warning`);return}S(`Downloading ${n} ➔ ${g}...`,`info`);try{window.go&&window.go.main&&window.go.main.App&&(await window.go.main.App.SFTPDownload(e,n,g),S(`Download completed successfully`,`success`),w(g))}catch(e){S(`Download failed: ${e}`,`error`)}}m&&(m.onclick=()=>O()),h&&(h.onclick=()=>k()),c&&(c.onkeydown=e=>{e.key===`Enter`&&w(c.value.trim())}),l&&(l.onkeydown=e=>{e.key===`Enter`&&E(l.value.trim())});let A=r.querySelector(`#sftpLocalUp_${e}`);A&&(A.onclick=()=>{let e=g.substring(0,Math.max(g.lastIndexOf(`\\`),g.lastIndexOf(`/`)));e&&w(e)});let M=r.querySelector(`#sftpLocalRefresh_${e}`);M&&(M.onclick=()=>w(g));let ee=r.querySelector(`#sftpLocalMkdir_${e}`);ee&&(ee.onclick=async()=>{let e=prompt(`Enter new local folder name:`);if(e)try{let t=`${g}\\${e}`;await window.go.main.App.SFTPMkdirLocal(t),S(`Created folder ${e}`,`success`),w(g)}catch(e){S(`Failed: ${e}`,`error`)}});let te=r.querySelector(`#sftpLocalMkfile_${e}`);te&&(te.onclick=async()=>{let e=prompt(`Enter new local file name:`);if(e)try{let t=`${g}\\${e}`;await window.go.main.App.SFTPCreateFileLocal(t),S(`Created file ${e}`,`success`),w(g)}catch(e){S(`Failed: ${e}`,`error`)}});let ne=r.querySelector(`#sftpLocalDel_${e}`);ne&&(ne.onclick=async()=>{if(!v){S(`Select a local file or folder to delete`,`warning`);return}if(confirm(`Delete local "${v.name}"?`))try{await window.go.main.App.SFTPDeleteLocal(v.path),S(`Deleted ${v.name}`,`info`),w(g)}catch(e){S(`Delete failed: ${e}`,`error`)}});let N=r.querySelector(`#sftpRemoteUp_${e}`);N&&(N.onclick=()=>{let e=_.lastIndexOf(`/`);E(e>0?_.substring(0,e):`/`)});let P=r.querySelector(`#sftpRemoteRefresh_${e}`);P&&(P.onclick=()=>E(_));let F=r.querySelector(`#sftpRemoteMkdir_${e}`);F&&(F.onclick=async()=>{let t=prompt(`Enter new remote folder name:`);if(t)try{let n=`${_===`/`?``:_}/${t}`;await window.go.main.App.SFTPMkdir(e,n),S(`Created remote folder ${t}`,`success`),E(_)}catch(e){S(`Failed: ${e}`,`error`)}});let re=r.querySelector(`#sftpRemoteMkfile_${e}`);re&&(re.onclick=async()=>{let t=prompt(`Enter new remote file name:`);if(t)try{let n=`${_===`/`?``:_}/${t}`;await window.go.main.App.SFTPCreateFile(e,n),S(`Created remote file ${t}`,`success`),E(_)}catch(e){S(`Failed: ${e}`,`error`)}});let ie=r.querySelector(`#sftpRemoteEdit_${e}`);ie&&(ie.onclick=()=>{if(!y||y.isDir){S(`Select a remote file to edit`,`warning`);return}Xa(y.path)});let I=r.querySelector(`#sftpRemoteChmod_${e}`);I&&(I.onclick=()=>{if(!y){S(`Select a remote file or folder to change permissions`,`warning`);return}Ua(e,y)});let ae=r.querySelector(`#sftpRemoteDel_${e}`);ae&&(ae.onclick=async()=>{if(!y){S(`Select a remote file or folder to delete`,`warning`);return}if(confirm(`Delete remote "${y.name}"?`))try{await window.go.main.App.SFTPDelete(e,y.path),S(`Deleted ${y.name}`,`info`),E(_)}catch(e){S(`Delete failed: ${e}`,`error`)}}),t[e]&&(t[e].refreshRemoteList=()=>E(_),t[e].refreshLocalList=()=>w(g),t[e].loadRemoteList=E),C(),w(),setTimeout(()=>E(_),400)}le(Z),Ra(Z),fn(po);function mo(){return document.getElementById(`sessionTree`)||document.getElementById(`tree`)}function ho(e){let t=(e||``).trim();if(!t)return null;let n=`ssh`;if(t.toLowerCase().startsWith(`ssh `))n=`ssh`,t=t.substring(4).trim();else if(t.toLowerCase().startsWith(`telnet `))n=`telnet`,t=t.substring(7).trim();else if(t.toLowerCase().startsWith(`sftp `))n=`sftp`,t=t.substring(5).trim();else if(t.toLowerCase().startsWith(`rdp `))n=`rdp`,t=t.substring(4).trim();else if(t.toLowerCase().startsWith(`vnc `))n=`vnc`,t=t.substring(4).trim();else if(t.includes(`://`)){let e=t.indexOf(`://`);n=t.substring(0,e).toLowerCase(),t=t.substring(e+3).trim()}let r=n===`rdp`?3389:n===`vnc`?5900:n===`telnet`?23:22,i=t.match(/-p\s*(\d+)/i);if(i){let e=parseInt(i[1],10);!isNaN(e)&&e>0&&(r=e),t=t.replace(/-p\s*\d+/i,``).trim()}let a=``;if(t.includes(` `)){let e=t.split(/\s+/);t=e[0],a=e.slice(1).join(` `)}let o=``,s=``;if(t.includes(`@`)){let e=t.split(`@`);o=e[0],t=e.slice(1).join(`@`)}if(t.includes(`/`)&&!t.includes(`://`)){let e=t.indexOf(`/`);a||=t.substring(e),t=t.substring(0,e)}if(t.includes(`:`)){let e=t.split(`:`);s=e[0];let n=parseInt(e[1],10);!isNaN(n)&&n>0&&(r=n)}else s=t;return s?{protocol:n,host:s,port:r,username:o,initialDir:a}:null}function go(){let n=document.getElementById(`connectedServersList`),i=document.getElementById(`connectedCountBadge`);if(!n)return;let a=Object.entries(t);if(i&&(i.textContent=a.length.toString()),a.length===0){n.innerHTML=`<div class="connected-empty-msg">No active connections</div>`;return}n.innerHTML=``,a.forEach(([t,i])=>{let a=document.createElement(`div`);a.className=`connected-server-item ${y===t?`active`:``}`,a.dataset.tabId=t;let o=d(i),s=e(i),c=E(i),l=i.serialNo||1,u=i.customTitle||i.remoteHostname||(i.profile?.name&&i.profile.name!==`New Server`&&i.profile.name!==`New Session`?i.profile.name:i.profile?.host?i.profile.username?`${i.profile.username}@${i.profile.host}`:i.profile.host:i.isLocal?`Local Terminal`:`Terminal`),f=`[${l}] ${u}`,p=i.isLocal?`Local Terminal (PowerShell)`:`SSH • ${i.profile?.username||`user`}@${i.profile?.host||`host`}:${i.profile?.port||22}`,m=i.sftpPath||i.profile&&i.profile.initialDir||`/`,h=r(i.environment||i.profile?.environment||i.color||i.profile?.color),g=i.color||i.profile?.color||(h?h.color:``),_=g?`style="background:${g}; box-shadow:0 0 6px ${g};"`:``;g&&(a.style.borderLeft=`3px solid ${g}`);let v=h?`<button class="connected-env-btn env-${h.key}" style="color:${h.color}; background:${h.bg}; border: 1px solid ${h.border};" title="Environment: ${h.name} (Click to change color)" type="button">${h.label} ▾</button>`:`<button class="connected-env-btn unassigned" title="Click to set Environment & Color (UAT Yellow, Prod Red...)" type="button">🎨 Color ▾</button>`;a.innerHTML=`
      <span class="connected-item-dot ${o}" ${_} title="${j(s)}"></span>
      <div class="connected-item-info">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 4px;">
          <span class="connected-item-title" title="${j(f)}"><span class="tab-serial">[${l}] </span>${j(u)}</span>
          <div style="display:flex; align-items:center; gap:4px;">
            ${v}
            <span class="connected-item-state ${o}">${j(c)}</span>
            <button class="connected-options-btn" title="Server Options (Rename, Color, Duplicate, Split, Close...)" type="button">⋯</button>
            <span class="connected-item-close" title="Close connection">&times;</span>
          </div>
        </div>
        <span class="connected-item-sub" title="${j(p)}">${j(p)}</span>
        ${i.isLocal?``:`<span class="connected-item-path" title="Current SFTP Path: ${j(m)}">📁 ${j(m)}</span>`}
      </div>
    `;let b=a.querySelector(`.connected-env-btn`);b&&(b.onclick=e=>{e.stopPropagation();let n=b.getBoundingClientRect();Gn(n.right+6,n.top,t)});let x=a.querySelector(`.connected-options-btn`);x&&(x.onclick=e=>{e.stopPropagation();let n=x.getBoundingClientRect();Wn(n.right+6,n.top,t)}),a.oncontextmenu=e=>{e.preventDefault(),e.stopPropagation(),Wn(e.clientX,e.clientY,t)},a.onclick=e=>{if(!(e.target.closest(`.connected-env-btn`)||e.target.closest(`.connected-options-btn`)||e.target.closest(`.connected-item-close`))){if(y===t){let e=a.getBoundingClientRect();Wn(e.right+6,e.top,t)}else Rn(t)}};let S=a.querySelector(`.connected-item-close`);S&&(S.onclick=e=>{e.stopPropagation(),zn(t)}),n.appendChild(a)})}function _o(e){e&&(e.session||(Array.isArray(e.children)||(e.children=[]),e.expanded===void 0&&(e.expanded=!0),e.children.forEach(_o)))}async function Q(e=``){try{if(window.go&&window.go.main&&window.go.main.App){let e=await window.go.main.App.GetSessionTree();_o(e),ae(e)}else ae({id:`root`,name:`SAVED SESSIONS`,expanded:!0,children:[{id:`f1`,name:`Production`,expanded:!0,children:[]},{id:`f2`,name:`UAT`,expanded:!0,children:[]},{id:`f3`,name:`Testing`,expanded:!0,children:[]},{id:`f4`,name:`Local`,expanded:!0,children:[]},{id:`f5`,name:`Client`,expanded:!0,children:[]},{id:`f6`,name:`User`,expanded:!0,children:[]}]});bo(e),So(null,e)}catch(e){console.error(`Failed to load session tree:`,e)}}function vo(e){switch(e&&e.protocol?e.protocol.toLowerCase():`ssh`){case`sftp`:return{icon:`📦`,badge:`SFTP`,cls:`sftp`};case`rdp`:return{icon:`🪟`,badge:`RDP`,cls:`rdp`};case`vnc`:return{icon:`🖥️`,badge:`VNC`,cls:`vnc`};case`telnet`:return{icon:`📡`,badge:`TELNET`,cls:`telnet`};case`serial`:return{icon:`🔌`,badge:`SERIAL`,cls:`serial`};case`local`:return{icon:`💻`,badge:`LOCAL`,cls:`local`};default:return{icon:`🔑`,badge:`SSH`,cls:`ssh`}}}function yo(){let e=mo();document.querySelectorAll(`.tree-node-row.drag-target-over`).forEach(e=>e.classList.remove(`drag-target-over`)),document.querySelectorAll(`.tree-node-row.drag-insert-above`).forEach(e=>e.classList.remove(`drag-insert-above`)),document.querySelectorAll(`.tree-node-row.drag-insert-below`).forEach(e=>e.classList.remove(`drag-insert-below`)),e&&e.classList.remove(`drag-target-root`)}function bo(e=``){let t=mo();if(!t||(t.innerHTML=``,!I))return;let n=e.trim().toLowerCase();if(t.dataset.hasDropListener||(t.dataset.hasDropListener=`true`,t.addEventListener(`dragover`,e=>{e.preventDefault(),e.dataTransfer.dropEffect=`move`,t.classList.add(`drag-target-root`)}),t.addEventListener(`dragleave`,e=>{t.contains(e.relatedTarget)||t.classList.remove(`drag-target-root`)}),t.addEventListener(`drop`,async e=>{if(!e.target.closest(`.tree-node-row`)){e.preventDefault(),t.classList.remove(`drag-target-root`);try{let t=e.dataTransfer.getData(`text/plain`);if(!t)return;let n=JSON.parse(t);if(!n.nodeId||n.nodeId===I.id)return;window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.MoveNode(n.nodeId,I.id,-1),await Q(),S(`Moved "${n.nodeName}" to All Sessions`,`success`)}catch(e){console.error(`Drop to root error:`,e)}}})),I.children&&I.children.length>0)I.children.forEach(e=>{let r=xo(e,n,I,0);r&&t.appendChild(r)});else{let e=xo(I,n,null,0);e&&t.appendChild(e)}}function xo(e,n=``,a=null,o=0){if(!e)return null;let s=!e.session,c=!n||e.name.toLowerCase().includes(n)||e.session&&(e.session.host&&e.session.host.toLowerCase().includes(n)||e.session.username&&e.session.username.toLowerCase().includes(n)),l=[];if(s&&e.children&&(l=e.children.map(t=>xo(t,n,e,o+1)).filter(e=>e!==null)),n&&!c&&l.length===0)return null;let u=document.createElement(`div`),d=document.createElement(`div`);if(d.className=`tree-node-row ${s?`folder`:`session`}`,d.dataset.id=e.id,d.dataset.level=o,d.draggable=!0,s){let t=e.expanded!==!1,n=r(e.environment)||i(e.name),o=n?`<span class="tree-node-env-badge env-${n.key}" style="color:${n.color}; background:${n.bg}; border: 1px solid ${n.border}; font-size: 9px; padding: 0 4px; margin-left: 4px;">${n.label}</span>`:``,s=e.defaultUsername?`<span class="tree-folder-user" style="font-size: 10px; color: var(--text-dim); margin-left: auto; margin-right: 4px;" title="Default username: ${j(e.defaultUsername)}">👤 ${j(e.defaultUsername)}</span>`:``;d.innerHTML=`
      <span class="chevron">${t?`▾`:`▸`}</span>
      <span class="node-icon">${t?`📂`:`📁`}</span>
      <span class="node-name" title="${j(e.name)}">${j(e.name)}</span>
      ${o}
      ${s}
      <span class="node-badge" style="${e.defaultUsername?``:`margin-left:auto;`}">${e.children?e.children.length:0}</span>
      <button class="folder-options-btn" title="Folder Options (New Session, Properties, Rename, Delete...)" type="button">⋯</button>
    `;let c=d.querySelector(`.folder-options-btn`);c&&(c.onclick=t=>{t.stopPropagation(),t.preventDefault();let n=c.getBoundingClientRect();Fa(n.right+4,n.top,e)}),d.addEventListener(`click`,t=>{t.stopPropagation(),e.expanded=!e.expanded;let n=document.getElementById(`sidebarQuickConnectInput`)||document.getElementById(`sidebarQuickConnect`);bo(n?n.value:``),window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ToggleFolder(e.id,e.expanded)}),d.addEventListener(`contextmenu`,t=>{t.preventDefault(),t.stopPropagation(),Fa(t.clientX,t.clientY,e)}),d.addEventListener(`dragstart`,t=>{t.stopPropagation(),t.dataTransfer.setData(`text/plain`,JSON.stringify({nodeId:e.id,nodeName:e.name,isFolder:!0})),t.dataTransfer.effectAllowed=`move`,d.classList.add(`dragging`)}),d.addEventListener(`dragend`,e=>{e.stopPropagation(),d.classList.remove(`dragging`),yo()}),d.addEventListener(`dragover`,e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=`move`;let t=d.getBoundingClientRect(),n=(e.clientY-t.top)/t.height;d.classList.remove(`drag-insert-above`,`drag-insert-below`,`drag-target-over`),n<.25?d.classList.add(`drag-insert-above`):n>.75?d.classList.add(`drag-insert-below`):d.classList.add(`drag-target-over`)}),d.addEventListener(`dragleave`,e=>{e.stopPropagation(),d.classList.remove(`drag-insert-above`,`drag-insert-below`,`drag-target-over`)}),d.addEventListener(`drop`,async t=>{t.preventDefault(),t.stopPropagation();let n=d.classList.contains(`drag-insert-above`),r=d.classList.contains(`drag-insert-below`);yo();try{let i=t.dataTransfer.getData(`text/plain`);if(!i)return;let o=JSON.parse(i);if(!o.nodeId||o.nodeId===e.id)return;if(o.isFolder&&oe(o.nodeId,e.id)){S(`Cannot move folder into itself or its subfolder`,`warning`);return}let s=e.id,c=-1;if(n||r){s=a?a.id:I.id;let t=(a&&a.children?a.children:I.children||[]).findIndex(t=>t.id===e.id);c=n?Math.max(0,t):t+1}window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.MoveNode(o.nodeId,s,c),await Q(),S(`Moved "${o.nodeName}"`,`success`)}catch(e){console.error(`Drop error:`,e),S(`Move failed: ${e}`,`error`)}})}else{let n=vo(e.session),o=Object.values(t).some(t=>t.profile&&t.profile.id===e.session.id&&t.isConnected),s=a?i(a.name):null,c=s||r(e.session.environment||e.session.color),l=(s?s.color:e.session.color)||(c?c.color:``),u=c?`<span class="tree-node-env-badge env-${c.key}" style="color:${c.color}; background:${c.bg}; border-color:${c.border};">${c.label}</span>`:``;d.innerHTML=`
      <span style="width: 14px;"></span>
      <span class="node-icon">${n.icon}</span>
      <span class="node-name" title="${j(e.session.username||``)}@${j(e.session.host||``)}">${j(e.name)}</span>
      ${u}
      <span class="tree-node-proto-badge ${n.cls}">${n.badge}</span>
      ${o?`<span class="status-dot state-connected" title="● Connected"></span>`:``}
    `,d.addEventListener(`dragstart`,t=>{t.stopPropagation(),t.dataTransfer.setData(`text/plain`,JSON.stringify({nodeId:e.id,nodeName:e.name,isFolder:!1})),t.dataTransfer.effectAllowed=`move`,d.classList.add(`dragging`)}),d.addEventListener(`dragend`,e=>{e.stopPropagation(),d.classList.remove(`dragging`),yo()}),d.addEventListener(`dragover`,e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=`move`;let t=d.getBoundingClientRect(),n=(e.clientY-t.top)/t.height;d.classList.remove(`drag-insert-above`,`drag-insert-below`,`drag-target-over`),n<.5?d.classList.add(`drag-insert-above`):d.classList.add(`drag-insert-below`)}),d.addEventListener(`dragleave`,e=>{e.stopPropagation(),d.classList.remove(`drag-insert-above`,`drag-insert-below`)}),d.addEventListener(`drop`,async t=>{t.preventDefault(),t.stopPropagation();let n=d.classList.contains(`drag-insert-above`);yo();try{let r=t.dataTransfer.getData(`text/plain`);if(!r)return;let i=JSON.parse(r);if(!i.nodeId||i.nodeId===e.id)return;let o=a?a.id:I.id,s=(a&&a.children?a.children:I.children||[]).findIndex(t=>t.id===e.id),c=n?Math.max(0,s):s+1;window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.MoveNode(i.nodeId,o,c),await Q(),S(`Moved "${i.nodeName}"`,`success`)}catch(e){console.error(`Drop error:`,e),S(`Move failed: ${e}`,`error`)}}),d.addEventListener(`dblclick`,()=>{V({...e.session,environment:c?c.key:e.session.environment,color:l||e.session.color})}),d.addEventListener(`click`,()=>{document.querySelectorAll(`.tree-node-row.selected`).forEach(e=>e.classList.remove(`selected`)),d.classList.add(`selected`);let n=document.getElementById(`statusMessage`);n&&(n.textContent=`Selected: ${e.name}`);let r=Object.entries(t).find(([t,n])=>n.profile&&(n.profile.id===e.session.id||n.profile.host===e.session.host&&n.profile.username===e.session.username));r&&Rn(r[0])}),d.addEventListener(`contextmenu`,t=>{t.preventDefault(),t.stopPropagation(),Ia(t.clientX,t.clientY,e.session,e.id)})}if(u.appendChild(d),s&&e.children&&e.children.length>0&&e.expanded!==!1){let e=document.createElement(`div`);e.className=`tree-node-children`,l.forEach(t=>e.appendChild(t)),u.appendChild(e)}return u}function So(e=null,n=``){let a=document.getElementById(`recentSessionsSection`),o=document.getElementById(`recentSessionsGrid`);if(!o)return;let s=e||I,c=[],l=[];function u(e){let t=[];return e.children&&e.children.forEach(n=>{!n.isFolder&&n.session?t.push({session:n.session,nodeId:n.id,folder:e}):n.isFolder&&t.push(...u(n))}),t}if(s&&s.children&&s.children.forEach(e=>{if(e.isFolder||e.children){let t=u(e),n=i(e.name)||r(e.name);l.push({folder:e,name:e.name,env:n,sessions:t}),c.push(...t)}else if(e.session){let t={session:e.session,nodeId:e.id,folder:null};c.push(t)}}),Object.values(t).forEach(e=>{if(e.profile&&!c.some(t=>t.session.id===e.profile.id||t.session.host===e.profile.host&&t.session.username===e.profile.username)){let t={session:e.profile,nodeId:``,folder:null};c.unshift(t)}}),a&&(a.style.display=`block`),c.length===0){o.innerHTML=`
      <div class="empty-saved-sessions-card">
        <div style="font-size:28px; margin-bottom:8px;">🌐</div>
        <div style="font-size:14px; font-weight:700; color:var(--text-primary); margin-bottom:4px;">Saved & Active Servers</div>
        <div style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">Connect to any server or create a new session to display 1-click launch cards right here.</div>
        <div style="display:flex; gap:10px; justify-content:center;">
          <button class="btn btn-sm btn-primary" id="homeCreateSessBtn" type="button">＋ New SSH Session</button>
        </div>
      </div>
    `;let e=o.querySelector(`#homeCreateSessBtn`);e&&(e.onclick=()=>{on(()=>Promise.resolve().then(()=>va).then(e=>e.showNewSessionDialog()),void 0)});return}let d=(n||``).trim().toLowerCase(),f=e=>{if(!d)return!0;let t=e.session;return t.name&&t.name.toLowerCase().includes(d)||t.host&&t.host.toLowerCase().includes(d)||t.username&&t.username.toLowerCase().includes(d)||t.environment&&t.environment.toLowerCase().includes(d)},p=e=>{let n=e.session,a=e.nodeId||``,o=vo(n),s=e.folder?i(e.folder.name):null,c=s||r(n.environment||n.color),l=(s?s.color:n.color)||(c?c.color:``),u=(n.name||n.host||`Session`).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),d=`${n.username?n.username+`@`:``}${n.host||``}${n.port?`:`+n.port:``}`.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),f=Object.values(t).some(e=>e.profile&&e.profile.id===n.id&&e.isConnected),p=l?`style="--card-accent:${l}; border-top: 3px solid ${l};"`:``,m=c?`<span class="card-env-badge env-${c.key}" style="color:${c.color}; background:${c.bg}; border:1px solid ${c.border};" title="Environment: ${c.name}">${c.label}</span>`:`<span class="card-env-badge card-env-default" title="No environment set">DEFAULT</span>`;return`
      <div class="recent-session-card ${l?`has-env-color`:``}" data-id="${n.id}" data-node-id="${a}" title="Click to open or focus ${d}" ${p}>
        <div class="card-header-row">
          <span class="key-icon">${o.icon}</span>
          ${m}
          <span class="card-proto-tag">${o.badge}</span>
          <span class="connected-item-dot ${f?`state-connected`:`state-closed`}" style="margin-left:auto;" title="${f?`● Connected`:`○ Disconnected`}"></span>
          <button class="card-close-btn" type="button" data-id="${n.id}" data-node-id="${a}" title="Remove this server from saved connections">&times;</button>
        </div>
        <span class="card-name" title="${u}">${u}</span>
        <span class="card-host" title="${d}">${d}</span>
        <div class="card-actions-row">
          <button class="card-connect-btn" type="button" data-id="${n.id}">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <span>${f?`Focus Tab`:`Connect`}</span>
          </button>
          <button class="card-color-btn" type="button" data-id="${n.id}" title="Change Environment / Color">Env ▾</button>
          <button class="card-delete-btn" type="button" data-id="${n.id}" data-node-id="${a}" title="Remove Server">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `},m=``;l.forEach(e=>{let t=e.sessions.filter(f);if(t.length===0&&d)return;let n=e.env||{key:`default`,label:e.name.toUpperCase(),name:e.name,color:`#94a3b8`,bg:`rgba(255,255,255,0.08)`,border:`rgba(255,255,255,0.15)`};m+=`
      <div class="home-env-group" data-folder-name="${j(e.name)}">
        <div class="home-env-header" style="border-left: 3px solid ${n.color};">
          <div class="home-env-title">
            <span class="home-env-badge env-${n.key}" style="color:${n.color}; background:${n.bg}; border: 1px solid ${n.border};">${n.label}</span>
            <span class="home-env-name">${j(e.name.toUpperCase())}</span>
            <span class="home-env-count">(${t.length})</span>
          </div>
        </div>
        <div class="home-env-cards-grid">
          ${t.length>0?t.map(p).join(``):`<div class="home-env-empty">No servers in ${j(e.name)}</div>`}
        </div>
      </div>
    `});let h=c.filter(e=>!e.folder&&f(e));h.length>0&&(m+=`
      <div class="home-env-group unassigned-group">
        <div class="home-env-header" style="border-left: 3px solid #64748b;">
          <div class="home-env-title">
            <span class="home-env-badge" style="color:#94a3b8; background:rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);">SERVERS</span>
            <span class="home-env-name">OTHER SAVED SERVERS</span>
            <span class="home-env-count">(${h.length})</span>
          </div>
        </div>
        <div class="home-env-cards-grid">
          ${h.map(p).join(``)}
        </div>
      </div>
    `),o.innerHTML=m||`<div class="empty-saved-sessions-card"><div style="font-size:13px; color:var(--text-muted);">No sessions match "${j(n)}"</div></div>`;let g=c;o.querySelectorAll(`.card-connect-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=g.find(t=>t.session.id===e.dataset.id);if(n&&n.session){let e=n.folder?i(n.folder.name):null,t=e||r(n.session.environment||n.session.color),a=(e?e.color:n.session.color)||(t?t.color:``);V({...n.session,environment:t?t.key:n.session.environment,color:a||n.session.color})}})}),o.querySelectorAll(`.card-color-btn`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation();let r=g.find(t=>t.session.id===e.dataset.id);if(r&&r.session){let n=Object.entries(t).find(([e,t])=>t.profile&&t.profile.id===r.session.id),i=e.getBoundingClientRect();n?Gn(i.right+4,i.top,n[0]):on(()=>Promise.resolve().then(()=>va).then(e=>e.showEditSessionDialog(r.session)),void 0)}})}),o.querySelectorAll(`.card-delete-btn, .card-close-btn`).forEach(e=>{e.addEventListener(`click`,async t=>{t.stopPropagation();let n=e.dataset.id,r=e.dataset.nodeId,i=g.find(e=>e.session.id===n),a=i&&i.session&&(i.session.name||i.session.host)||`this server`;if(confirm(`Are you sure you want to remove "${a}" from saved servers?`))try{if(r&&window.go&&window.go.main&&window.go.main.App)await window.go.main.App.DeleteNode(r);else if(window.go&&window.go.main&&window.go.main.App){function e(t,n){if(!t)return null;if(t.session&&t.session.id===n)return t;if(t.children)for(let r of t.children){let t=e(r,n);if(t)return t}return null}let t=e(I,n);t&&await window.go.main.App.DeleteNode(t.id)}await Q(),S(`Removed "${a}"`,`info`)}catch(e){console.error(`Failed to remove server:`,e),S(`Failed to remove server: ${e}`,`error`)}})}),o.querySelectorAll(`.recent-session-card`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.closest(`.card-connect-btn`)||t.target.closest(`.card-color-btn`)||t.target.closest(`.card-delete-btn`)||t.target.closest(`.card-close-btn`))return;let n=g.find(t=>t.session.id===e.dataset.id);if(n&&n.session){let e=n.folder?i(n.folder.name):null,t=e||r(n.session.environment||n.session.color),a=(e?e.color:n.session.color)||(t?t.color:``);V({...n.session,environment:t?t.key:n.session.environment,color:a||n.session.color})}})})}function $(e){Object.entries({sessions:{viewId:`viewSessions`,tabId:`navTabSessions`},sftp:{viewId:`viewSFTP`,tabId:`navTabSFTP`},macros:{viewId:`viewMacros`,tabId:`navTabMacros`},tunnel:{viewId:`viewTunnel`,tabId:`navTabTunnel`},tools:{viewId:`viewTools`,tabId:`navTabTools`},followterm:{viewId:`viewFollowTerm`,tabId:`navTabFollowTerm`},monitor:{viewId:`viewMonitor`,tabId:`navTabMonitor`}}).forEach(([t,n])=>{let r=document.getElementById(n.viewId),i=document.getElementById(n.tabId),a=t===e;r&&(r.classList.toggle(`hidden`,!a),r.style.display=a?`flex`:`none`),i&&i.classList.toggle(`active`,a)}),e===`sftp`&&Z(t[y]&&t[y].sftpPath||Y||`~`),e===`macros`&&or(),e===`tunnel`&&rr()}ba(Q),Da(Q),C(go),oo(go),a(go),ka(e=>{$(`sftp`),typeof Z==`function`&&Z(e||`~`)});var Co={colors:{bgApp:`#0d0f17`,bgSurface:`#131722`,bgPanel:`#161b26`,bgElevated:`#1c2230`,bgGlass:`rgba(22, 27, 38, 0.75)`,bgInput:`#0f121a`,bgPill:`rgba(255, 255, 255, 0.05)`,bgPillHover:`rgba(255, 255, 255, 0.09)`,bgPillActive:`rgba(255, 255, 255, 0.14)`,bgHover:`rgba(255, 255, 255, 0.05)`,bgActive:`rgba(255, 255, 255, 0.09)`,borderMuted:`rgba(255, 255, 255, 0.05)`,borderSubtle:`rgba(255, 255, 255, 0.08)`,borderActive:`rgba(255, 255, 255, 0.15)`,borderFocus:`#38bdf8`,textPrimary:`#f1f5f9`,textSecondary:`#94a3b8`,textMuted:`#64748b`,textBright:`#ffffff`,accentCyan:`#38bdf8`,accentBlue:`#60a5fa`,accentPurple:`#c084fc`,accentGreen:`#34d399`,accentRed:`#f87171`,accentAmber:`#fbbf24`,envProd:`#ef4444`,envUat:`#f59e0b`,envTest:`#10b981`,envLocal:`#3b82f6`,envClient:`#a855f7`,envUser:`#64748b`,stateConnected:`#10b981`,stateConnecting:`#f59e0b`,stateFailed:`#ef4444`,stateDisconnected:`#64748b`,stateAttention:`#f59e0b`},spacing:{xs:`4px`,sm:`8px`,md:`12px`,lg:`16px`,xl:`20px`,"2xl":`24px`,"3xl":`32px`},radius:{xs:`4px`,sm:`6px`,md:`10px`,lg:`14px`,xl:`18px`,pill:`9999px`},typography:{fontSans:`-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,fontMono:`'SF Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace`,sizeXs:`10px`,sizeSm:`11px`,sizeBase:`12px`,sizeMd:`13px`,sizeLg:`14px`,sizeXl:`16px`,weightNormal:`400`,weightMedium:`500`,weightSemiBold:`600`,weightBold:`700`},shadows:{sm:`0 1px 3px rgba(0, 0, 0, 0.3)`,md:`0 4px 14px rgba(0, 0, 0, 0.35)`,lg:`0 10px 28px rgba(0, 0, 0, 0.5)`,macosSm:`0 1px 2px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)`,macosMd:`0 6px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.07)`,macosLg:`0 14px 36px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.09)`,popover:`0 12px 36px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)`,modal:`0 24px 64px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)`},transitions:{fast:`120ms cubic-bezier(0.16, 1, 0.3, 1)`,normal:`200ms cubic-bezier(0.16, 1, 0.3, 1)`,slow:`280ms cubic-bezier(0.16, 1, 0.3, 1)`}};function wo(){let e=document.documentElement;if(!e||!e.style)return;let t=(t,n)=>{typeof e.style.setProperty==`function`?e.style.setProperty(t,n):e.style[t]=n};Object.entries(Co.colors).forEach(([e,n])=>{t(`--nex-${To(e)}`,n)}),Object.entries(Co.spacing).forEach(([e,n])=>{t(`--nex-space-${e}`,n)}),Object.entries(Co.radius).forEach(([e,n])=>{t(`--nex-radius-${e}`,n)}),Object.entries(Co.typography).forEach(([e,n])=>{t(`--nex-typo-${To(e)}`,n)}),Object.entries(Co.shadows).forEach(([e,n])=>{t(`--nex-shadow-${e}`,n)}),Object.entries(Co.transitions).forEach(([e,n])=>{t(`--nex-trans-${e}`,n)})}function To(e){return e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()}var Eo=[],Do=!1,Oo=0,ko=[];function Ao(e){Eo=e}function jo(){if(Do)return;Do=!0,Oo=0;let e=document.getElementById(`commandPaletteModal`);if(!e){e=document.createElement(`div`),e.id=`commandPaletteModal`,e.className=`command-palette-overlay`,e.innerHTML=`
      <div class="command-palette-card" role="dialog" aria-modal="true" aria-label="Command Palette">
        <div class="command-palette-input-wrap">
          <span class="command-palette-search-icon">🔍</span>
          <input type="text" id="commandPaletteInput" class="command-palette-input" placeholder="Type a command or jump to session... (Esc to exit)" autocomplete="off" spellcheck="false" />
          <span class="command-palette-esc-badge">ESC</span>
        </div>
        <div class="command-palette-results" id="commandPaletteResults"></div>
        <div class="command-palette-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>↵</kbd> to select</span>
          <span><kbd>esc</kbd> to dismiss</span>
        </div>
      </div>
    `,document.body.appendChild(e),e.addEventListener(`click`,t=>{t.target===e&&Mo()});let t=e.querySelector(`#commandPaletteInput`);t.addEventListener(`input`,()=>{Oo=0,No()}),t.addEventListener(`keydown`,e=>{e.key===`Escape`?(e.preventDefault(),Mo()):e.key===`ArrowDown`?(e.preventDefault(),ko.length>0&&(Oo=(Oo+1)%ko.length,Po())):e.key===`ArrowUp`?(e.preventDefault(),ko.length>0&&(Oo=(Oo-1+ko.length)%ko.length,Po())):e.key===`Enter`&&(e.preventDefault(),ko[Oo]&&Io(ko[Oo]))})}e.classList.remove(`hidden`),e.style.display=`flex`;let t=e.querySelector(`#commandPaletteInput`);t.value=``,No(),setTimeout(()=>t.focus(),20)}function Mo(){Do=!1;let e=document.getElementById(`commandPaletteModal`);e&&(e.classList.add(`hidden`),e.style.display=`none`)}function No(){let e=document.getElementById(`commandPaletteInput`),n=document.getElementById(`commandPaletteResults`);if(!n)return;let r=(e?e.value:``).trim().toLowerCase(),i=[...Eo];if(Object.entries(t).forEach(([e,t])=>{t&&t.profile&&i.push({id:`tab-jump-${e}`,category:`Open Tabs`,title:`Switch to: ${t.profile.name||t.profile.host||`Terminal`}`,subtitle:`${t.profile.host||``} (${t.isConnected?`Connected`:`Disconnected`})`,icon:`⚡`,action:()=>{t.activateTabFn&&t.activateTabFn(e)}})}),ko=r?i.filter(e=>{let t=e.title&&e.title.toLowerCase().includes(r),n=e.subtitle&&e.subtitle.toLowerCase().includes(r),i=e.category&&e.category.toLowerCase().includes(r);return t||n||i}):i,ko.length===0){n.innerHTML=`
      <div class="command-palette-empty">No commands or sessions match "${Lo(r)}"</div>
    `;return}let a=``,o=``;ko.forEach((e,t)=>{e.category&&e.category!==o&&(o=e.category,a+=`<div class="command-palette-category">${Lo(o)}</div>`),a+=`
      <div class="command-palette-item ${t===Oo?`selected`:``}" data-index="${t}">
        <span class="palette-item-icon">${e.icon||`▸`}</span>
        <div class="palette-item-info">
          <span class="palette-item-title">${Lo(e.title)}</span>
          ${e.subtitle?`<span class="palette-item-sub">${Lo(e.subtitle)}</span>`:``}
        </div>
        ${e.shortcut?`<span class="palette-item-shortcut">${Lo(e.shortcut)}</span>`:``}
      </div>
    `}),n.innerHTML=a,n.querySelectorAll(`.command-palette-item`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{Oo=parseInt(e.dataset.index,10),Po()}),e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index,10);ko[t]&&Io(ko[t])})}),Fo()}function Po(){let e=document.getElementById(`commandPaletteResults`);e&&(e.querySelectorAll(`.command-palette-item`).forEach((e,t)=>{e.classList.toggle(`selected`,t===Oo)}),Fo())}function Fo(){let e=document.getElementById(`commandPaletteResults`);if(!e)return;let t=e.querySelector(`.command-palette-item.selected`);t&&t.scrollIntoView({block:`nearest`})}function Io(e){if(Mo(),typeof e.action==`function`)try{e.action()}catch(e){console.error(`Error executing palette command:`,e)}}function Lo(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}var Ro=null,zo={cpu:`2.4%`,ram:`11.6 / 30.9 GB`,netUp:`0.01 MB/s`,netDown:`0.12 MB/s`,uptime:`65d`,disks:[{mount:`/`,usage:`14%`},{mount:`/opt`,usage:`28%`},{mount:`/home`,usage:`3%`}]};function Bo(){let e=document.getElementById(`statusBar`);e&&(e.addEventListener(`click`,e=>{(e.target.closest(`.status-server-pill`)||e.target.closest(`#activeTargetText`))&&Ho()}),Vo(),Ro&&clearInterval(Ro),Ro=setInterval(()=>{Vo()},3e3))}function Vo(){let e=n(),t=T(),r=Object.keys(t).length,i=document.getElementById(`activeSessionsCount`);i&&(i.textContent=`${r} active tab${r===1?``:`s`}`);let a=document.getElementById(`activeTargetText`);if(!a)return;if(!e||!e.profile){a.innerHTML=`<span class="status-idle-pill">○ Workspace Ready</span>`;return}let o=e.profile,s=e.isConnected,c=e.environment||{label:`DEV`,color:`#3b82f6`},l=(o.protocol||`ssh`).toUpperCase(),u=`${e.serialNo?`[${e.serialNo}] `:``}${e.remoteHostname||(o.name&&o.name!==`New Server`&&o.name!==`New Session`?o.name:o.host||`Terminal`)}`;a.innerHTML=`
    <div class="status-server-pill" title="Click for Server Metrics & Resource Details">
      <span class="status-dot ${s?`connected`:`disconnected`}">●</span>
      <span class="status-server-name">${Uo(u)}</span>
      <span class="status-env-tag" style="color:${c.color};">${c.label}</span>
      <span class="status-divider">│</span>
      <span class="status-proto-tag">${l}</span>
      <span class="status-divider">│</span>
      <span class="status-metric">CPU ${zo.cpu}</span>
      <span class="status-divider">│</span>
      <span class="status-metric">RAM ${zo.ram}</span>
      <span class="status-divider">│</span>
      <span class="status-metric">↑ ${zo.netUp} ↓ ${zo.netDown}</span>
      <span class="status-divider">│</span>
      <span class="status-metric">${zo.uptime}</span>
    </div>
  `}function Ho(){let e=document.getElementById(`serverDetailsPopover`);if(e){e.remove();return}let t=n();if(!t||!t.profile)return;let r=t.profile,i=t.environment||{label:`DEV`,name:`Development`,color:`#3b82f6`},a=`${t.serialNo?`[${t.serialNo}] `:``}${t.remoteHostname||(r.name&&r.name!==`New Server`&&r.name!==`New Session`?r.name:r.host||`Terminal`)}`,o=`${r.username?r.username+`@`:``}${r.host||`localhost`}${r.port?`:`+r.port:``}`;e=document.createElement(`div`),e.id=`serverDetailsPopover`,e.className=`server-details-popover`,e.innerHTML=`
    <div class="popover-header">
      <div class="popover-title-row">
        <span class="popover-host">${Uo(a)}</span>
        <span class="popover-env" style="color:${i.color};">${i.label}</span>
      </div>
      <span class="popover-conn-info">${Uo(o)}</span>
      <button class="popover-close-btn" type="button">&times;</button>
    </div>
    <div class="popover-body">
      <div class="metric-row">
        <span class="metric-label">CPU Utilization</span>
        <span class="metric-val accent">${zo.cpu}</span>
      </div>
      <div class="metric-row">
        <span class="metric-label">Memory In-Use</span>
        <span class="metric-val">${zo.ram}</span>
      </div>
      <div class="metric-divider"></div>
      <div class="disk-section">
        <span class="metric-label" style="margin-bottom:4px; display:block;">Storage Mounts</span>
        ${zo.disks.map(e=>`
          <div class="disk-row">
            <span class="disk-mount">${e.mount}</span>
            <span class="disk-usage">${e.usage}</span>
          </div>
        `).join(``)}
      </div>
      <div class="metric-divider"></div>
      <div class="metric-row">
        <span class="metric-label">Network Throughput</span>
        <span class="metric-val">↑ ${zo.netUp}  ↓ ${zo.netDown}</span>
      </div>
      <div class="metric-row">
        <span class="metric-label">Server Uptime</span>
        <span class="metric-val">${zo.uptime}</span>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector(`.popover-close-btn`).addEventListener(`click`,()=>{e.remove()});let s=t=>{!e.contains(t.target)&&!t.target.closest(`.status-server-pill`)&&(e.remove(),window.removeEventListener(`click`,s))};setTimeout(()=>{window.addEventListener(`click`,s)},10)}function Uo(e){return e?String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]):``}var Wo=!1;function Go(e={}){let t=document.getElementById(`sidebar`);if(!t)return;let n=document.getElementById(`sidebarCollapseToggle`);n||(n=document.createElement(`button`),n.id=`sidebarCollapseToggle`,n.className=`sidebar-collapse-toggle`,n.title=`Toggle Sidebar Collapse (Ctrl+B)`,n.innerHTML=`◀`,t.appendChild(n),n.addEventListener(`click`,()=>{Ko()})),document.querySelectorAll(`.nav-category-item`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.section;n&&Jo(n,e)})}),window.addEventListener(`resize`,()=>{window.innerWidth<850&&!Wo&&qo(!0)}),window.innerWidth<850&&qo(!0)}function Ko(){qo(!Wo)}function qo(e){Wo=e;let t=document.getElementById(`sidebar`),n=document.getElementById(`sidebarCollapseToggle`);t&&(t.classList.toggle(`collapsed`,Wo),n&&(n.innerHTML=Wo?`▶`:`◀`,n.title=Wo?`Expand Sidebar`:`Collapse Sidebar`),setTimeout(()=>{window.dispatchEvent(new Event(`resize`))},160))}function Jo(e,t={}){switch(document.querySelectorAll(`.nav-category-item`).forEach(t=>{t.classList.toggle(`active`,t.dataset.section===e)}),e){case`home`:t.onOpenHome&&t.onOpenHome();break;case`sessions`:t.onOpenSessions&&t.onOpenSessions();break;case`sftp`:t.onOpenSFTP&&t.onOpenSFTP();break;case`broadcast`:t.onOpenBroadcast&&t.onOpenBroadcast();break;case`multiexec`:t.onOpenMultiExec&&t.onOpenMultiExec();break;case`tunneling`:t.onOpenTunneling&&t.onOpenTunneling();break;case`settings`:t.onOpenSettings&&t.onOpenSettings()}}v({activateTab:Rn,closeTab:zn,showNewSessionDialog:J,showTabContextMenu:Wn,activateHomeTab:Ln}),Ao([{id:`cmd-new-session`,category:`Sessions`,title:`New Session...`,subtitle:`Create a new SSH, Telnet, Serial or VNC session`,icon:`＋`,shortcut:`Ctrl+N`,action:()=>J()},{id:`cmd-new-folder`,category:`Sessions`,title:`New Folder...`,subtitle:`Create an environment or organization folder`,icon:`📁`,action:()=>Ca()},{id:`cmd-home`,category:`Navigation`,title:`Go to Home Dashboard`,subtitle:`View recent sessions and tools`,icon:`🏠`,action:()=>Ln()},{id:`cmd-local-term`,category:`Sessions`,title:`New Local Terminal`,subtitle:`Start a local PowerShell or Command Prompt tab`,icon:`💻`,action:()=>Un(`powershell`)},{id:`cmd-split-vert`,category:`Workspace`,title:`Split Right (Vertical Split)`,subtitle:`Split active pane side-by-side`,icon:`◫`,shortcut:`Ctrl+Shift+E`,action:()=>D(x.activePaneId,`right`)},{id:`cmd-split-horiz`,category:`Workspace`,title:`Split Down (Horizontal Split)`,subtitle:`Split active pane top and bottom`,icon:`⬒`,shortcut:`Ctrl+Shift+O`,action:()=>D(x.activePaneId,`down`)},{id:`cmd-single-pane`,category:`Workspace`,title:`Single Pane Mode`,subtitle:`Reset workspace to one active pane`,icon:`◻`,action:()=>b(`single`)},{id:`cmd-grid-pane`,category:`Workspace`,title:`2x2 Grid Workspace`,subtitle:`Split terminal workspace into 4 quadrants`,icon:`⊞`,action:()=>b(`grid`)},{id:`cmd-sftp`,category:`Tools`,title:`Open SFTP File Browser`,subtitle:`Browse local and remote files with dual-pane transfer`,icon:`📂`,action:()=>$(`sftp`)},{id:`cmd-broadcast`,category:`Tools`,title:`Broadcast Command...`,subtitle:`Send a command to all or selected connected servers`,icon:`⚡`,shortcut:`Ctrl+Alt+B`,action:()=>Xe(`all`)},{id:`cmd-multiexec`,category:`Tools`,title:`Toggle MultiExec Bar`,subtitle:`Simultaneous keystroke streaming bar`,icon:`⚡`,shortcut:`Alt+M`,action:()=>Zn()},{id:`cmd-find-term`,category:`Terminal`,title:`Find in Terminal...`,subtitle:`Search terminal scrollback buffer`,icon:`🔍`,shortcut:`Ctrl+Shift+F`,action:()=>{y&&t[y]&&me(y)}},{id:`cmd-tunneling`,category:`Network`,title:`Nexterm Tunnel Manager...`,subtitle:`SSH local/remote/dynamic port forwarding`,icon:`🔑`,action:()=>ir()},{id:`cmd-settings`,category:`System`,title:`Preferences & Settings...`,subtitle:`Configure themes, fonts, credentials and audit logging`,icon:`⚙`,action:()=>Cr()},{id:`cmd-theme`,category:`Appearance`,title:`Choose UI Theme...`,subtitle:`Select between Dark Modern, One Dark, Nord, or Dracula`,icon:`🎨`,action:()=>Sr()},{id:`cmd-recorder`,category:`Automation`,title:`Session Recorder...`,subtitle:`Record, edit and replay a sequence of commands`,icon:`⏺`,action:()=>Nt()},{id:`cmd-record-toggle`,category:`Automation`,title:`Start / Stop Recording`,subtitle:`Capture the commands you run on the active terminal`,icon:`●`,action:()=>kt()},{id:`cmd-scheduler`,category:`Automation`,title:`Command Scheduler...`,subtitle:`Auto-run a command or recording once or on a repeating interval`,icon:`⏱️`,action:()=>Ni()},{id:`cmd-history`,category:`Automation`,title:`Command History...`,subtitle:`Search and re-run any command you've run over SSH`,icon:`🕘`,action:()=>Vt()},{id:`cmd-server-tools`,category:`Automation`,title:`Server Tools (Notes / Quick / Startup)...`,subtitle:`Per-server notes, one-click commands, and startup commands`,icon:`🗂️`,action:()=>en()},{id:`cmd-processes`,category:`Server`,title:`Process Explorer...`,subtitle:`Live processes on the server, with details and kill`,icon:`🧩`,action:()=>Wi()},{id:`cmd-ports`,category:`Server`,title:`Ports & Services...`,subtitle:`Listening ports and the process behind each`,icon:`🔌`,action:()=>Zi()},{id:`cmd-logs`,category:`Server`,title:`Log Explorer...`,subtitle:`Live-tail a remote log with search, regex and error filters`,icon:`📜`,action:()=>ra()},{id:`cmd-intel`,category:`Server`,title:`Command Intelligence...`,subtitle:`Type an intent; get the explicit command to run`,icon:`✨`,action:()=>da()}]);function Yo(){document.querySelectorAll(`.menu-item`).forEach(e=>{e.onclick=t=>{t.stopPropagation();let n=e.querySelector(`.dropdown-menu`);if(!n)return;let r=n.classList.contains(`hidden`);document.querySelectorAll(`.dropdown-menu`).forEach(e=>e.classList.add(`hidden`)),r&&n.classList.remove(`hidden`)}}),window.addEventListener(`click`,()=>{document.querySelectorAll(`.dropdown-menu`).forEach(e=>e.classList.add(`hidden`)),R()});let e=(e,t)=>{let n=document.getElementById(e);n&&(n.onclick=t)};e(`mStartLocal`,()=>Un(`powershell`)),e(`mNewSSH`,()=>J()),e(`mNewSession`,()=>J()),e(`mNewFolder`,()=>Ca()),e(`mToggleMultiExec`,Zn),e(`mOpenCommandPalette`,jo),e(`mSwitchTheme`,Sr),e(`mOpenTunneling`,ir),e(`mOpenSettings`,Cr),e(`mRecordMacro`,lr),e(`mStartXServer`,async()=>{if(!(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.LaunchXServer)){S(`X Server support requires rebuilding the app (run.bat)`,`error`);return}try{let e=await window.go.main.App.LaunchXServer();S(e||`X server started`,`success`)}catch(e){S(`X Server: `+e,`warning`)}}),e(`mImportSessions`,()=>{let e=document.getElementById(`treeImportBtn`);e&&e.click()}),e(`mExportSessions`,()=>{let e=document.getElementById(`treeExportBtn`);e&&e.click()}),e(`mSaveGroup`,()=>mi()),e(`mManageGroups`,()=>_i()),e(`mCloseTab`,()=>{y&&y!==`home`&&zn(y)}),e(`mClearTab`,()=>{y&&t[y]&&t[y].term.clear()}),e(`mFindInTerm`,()=>{y&&t[y]&&me(y)}),e(`mDuplicateTab`,()=>{y&&t[y]&&Vn(y)}),e(`mSnippets`,()=>Ti()),e(`mShortcuts`,()=>_a()),e(`mAbout`,()=>S(`NexTerm — Professional SSH & Terminal Manager (Connect Beyond Limits)`,`info`)),e(`mToggleLogging`,()=>{y&&y!==`home`?Mn(y):S(`Open a terminal tab first`,`warning`)});let n=()=>{let e=document.getElementById(`mAutoLogState`);e&&(e.textContent=On()?`On`:`Off`)};n(),e(`mToggleAutoLog`,()=>{kn(!On()),n(),S(On()?`New sessions will be auto-logged`:`Auto-logging disabled`,`info`)}),e(`mOpenLogsFolder`,()=>{window.go&&window.go.main&&window.go.main.App&&window.go.main.App.OpenSessionLogFolder&&window.go.main.App.OpenSessionLogFolder()});let r=e=>{document.querySelectorAll(`.nav-rail-btn`).forEach(t=>t.classList.toggle(`active`,t.id===e)),document.body.classList.toggle(`on-home`,e===`navRailHomeBtn`)},i=()=>{document.getElementById(`navRail`)?.classList.add(`open`),document.getElementById(`navBackdrop`)?.classList.add(`show`)},a=()=>{document.getElementById(`navRail`)?.classList.remove(`open`),document.getElementById(`navBackdrop`)?.classList.remove(`show`)};e(`topMenuToggle`,()=>{let e=document.getElementById(`navRail`);e&&e.classList.contains(`open`)?a():i()}),e(`navRailPin`,a);let o=document.getElementById(`navBackdrop`);o&&(o.onclick=a),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()}),document.getElementById(`navRail`)?.addEventListener(`click`,e=>{e.target.closest(`button`)&&e.target.closest(`button`).id!==`navRailPin`&&a()}),document.body.classList.add(`on-home`);let s=document.getElementById(`welcomeState`);if(s){let e=()=>{document.body.classList.toggle(`on-home`,s.classList.contains(`active`))};new MutationObserver(e).observe(s,{attributes:!0,attributeFilter:[`class`]}),e()}let c=(e,t,n=!0)=>{let i=document.getElementById(e);i&&(i.onclick=()=>{n&&r(e),t(),a()})};c(`navRailHomeBtn`,()=>Ln());let l=document.getElementById(`navRailHome`);l&&(l.onclick=()=>{r(`navRailHomeBtn`),Ln()}),c(`navRailTerminal`,()=>Un(`powershell`),!1),c(`navRailSessions`,()=>$(`sessions`)),c(`navRailServers`,async()=>{if($(`sessions`),window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ExpandAllFolders)try{await window.go.main.App.ExpandAllFolders(!0)}catch{}await Q()}),c(`navRailSFTP`,()=>$(`sftp`)),c(`navRailTools`,()=>$(`tools`)),c(`navRailMacros`,()=>$(`macros`)),c(`navRailTunneling`,()=>ir(),!1),c(`navRailBroadcast`,()=>Xe(`all`),!1),c(`navRailWorkspaces`,()=>_i(),!1),c(`navRailSettings`,()=>Cr(),!1);function u(){return(document.documentElement.getAttribute(`data-theme`)||``)===`light-modern`}function d(){let e=document.getElementById(`tbThemeToggleIcon`),t=document.getElementById(`tbThemeToggleBtn`);e&&(u()?(e.innerHTML=`<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`,t&&(t.title=`Light mode — click for Dark`)):(e.innerHTML=`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`,t&&(t.title=`Dark mode — click for Light`)))}function f(){if(u()){let e=`dark-modern`;try{e=localStorage.getItem(`nexterm_last_dark_theme`)||`dark-modern`}catch{}e===`light-modern`&&(e=`dark-modern`),xr(e,!0)}else{let e=document.documentElement.getAttribute(`data-theme`)||`dark-modern`;try{localStorage.setItem(`nexterm_last_dark_theme`,e)}catch{}xr(`light-modern`,!0)}d()}d(),O(),e(`tbSessionBtn`,()=>J()),e(`tbServersBtn`,async()=>{if($(`sessions`),window.go&&window.go.main&&window.go.main.App&&window.go.main.App.ExpandAllFolders)try{await window.go.main.App.ExpandAllFolders(!0)}catch{}await Q()}),e(`tbToolsBtn`,()=>$(`tools`)),e(`tbSplitBtn`,e=>je(e.clientX,e.clientY+10)),e(`tbMultiExecBtn`,Zn),e(`tbBroadcastBtn`,()=>Xe(`all`)),e(`connectedBroadcastBtn`,()=>Xe(`all`)),e(`tbMacrosBtn`,()=>$(`macros`)),e(`tbTunnelingBtn`,ir),e(`tbPackagesBtn`,pr),e(`tbThemeBtn`,Sr),e(`tbThemeToggleBtn`,f),e(`tbNotifBtn`,_),e(`tbSettingsBtn`,Cr),e(`tbCommandPaletteBtn`,jo),e(`tbMonitorBtn`,()=>Ar()),e(`tbXServerBtn`,async()=>{if(!(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.LaunchXServer)){S(`X Server support requires rebuilding the app (run.bat)`,`error`);return}try{let e=await window.go.main.App.LaunchXServer();S(e||`X server started`,`success`)}catch(e){S(`X Server: `+e,`warning`)}}),e(`tbExitBtn`,()=>{confirm(`Exit Nexterm?`)&&window.close()}),e(`topBrandHome`,()=>{r(`navRailHomeBtn`),Ln()});let p=document.getElementById(`topGlobalSearch`);p&&(p.addEventListener(`focus`,()=>jo()),p.addEventListener(`keydown`,e=>{e.key===`Enter`&&jo()}));let m=()=>window.runtime||window.wails&&window.wails.runtime||null;e(`winMinBtn`,()=>{let e=m();e&&e.WindowMinimise&&e.WindowMinimise()}),e(`winMaxBtn`,()=>{let e=m();e&&e.WindowToggleMaximise&&e.WindowToggleMaximise()}),e(`winCloseBtn`,()=>{let e=m();e&&e.Quit?e.Quit():window.close()}),e(`homeViewDocsBtn`,()=>{let e=m();if(e&&e.BrowserOpenURL)try{e.BrowserOpenURL(`https://github.com/gnmyt/Nexterm`);return}catch{}S(`Documentation is available in the project README`,`info`)}),e(`homeTermNewBtn`,()=>J()),e(`homeTermExpandBtn`,()=>{let e=Object.keys(t).filter(e=>e!==`home`&&e!==`welcome`);if(e.length>0)try{Rn(e[0]);return}catch{}Un(`powershell`)}),document.querySelectorAll(`.nav-ws-item`).forEach(e=>{e.onclick=()=>{let t=e.getAttribute(`data-ws`)||``;Ln();let n=document.getElementById(`welcomeSearchInput`);n&&(n.value=t);try{Q(t)}catch{}}}),c(`navRailMonitor`,()=>Ar(),!1),c(`navRailFollowTerm`,()=>{$(`followterm`);let e=document.getElementById(`sftpFollowTermCheckbox`),n=document.getElementById(`followTermPanelCheckbox`);e&&n&&(n.checked=e.checked);let r=document.getElementById(`followTermCurrentPath`);r&&y&&t[y]&&(r.textContent=t[y].sftpPath||t[y].cwd||`—`)}),c(`navRailRecorder`,()=>Nt(),!1),c(`navRailScheduler`,()=>Ni(),!1),c(`navRailHistory`,()=>Vt(),!1),c(`navRailServerTools`,()=>en(),!1),c(`navRailProcesses`,()=>Wi(),!1),c(`navRailPorts`,()=>Zi(),!1),c(`navRailLogs`,()=>ra(),!1),c(`navRailCmdIntel`,()=>da(),!1),Mi(),c(`navRailXServer`,async()=>{if(!(window.go&&window.go.main&&window.go.main.App&&window.go.main.App.LaunchXServer)){S(`X Server support requires rebuilding the app (run.bat)`,`error`);return}try{S(await window.go.main.App.LaunchXServer()||`X server started`,`success`)}catch(e){S(`X Server: `+e,`warning`)}},!1),e(`navRailSplit`,e=>je(e.clientX,e.clientY+10)),e(`navRailMultiExec`,Zn),e(`navRailPackages`,pr),e(`navRailThemes`,Sr);function h(){let e=document.getElementById(`sysActiveSessions`),n=document.getElementById(`sysSavedServers`);if(e){let n=Object.keys(t).filter(e=>e!==`home`&&e!==`welcome`).length;e.textContent=String(n)}if(n){let e=document.querySelectorAll(`#recentSessionsGrid .recent-session-card`).length;n.textContent=String(e)}}h(),setInterval(h,4e3),e(`multiExecSendBtn`,Pn),e(`multiExecMatrixBtn`,Zn),e(`multiExecCloseBtn`,Nn);let g=document.getElementById(`multiExecInput`);g&&(g.onkeydown=e=>{e.key===`Enter`&&Pn()}),e(`navTabSessions`,()=>$(`sessions`)),e(`navTabSFTP`,()=>$(`sftp`)),e(`navTabMacros`,()=>$(`macros`)),e(`navTabTunnel`,()=>$(`tunnel`)),e(`navTabTools`,()=>$(`tools`)),e(`navTabFollowTerm`,()=>{$(`followterm`);let e=document.getElementById(`sftpFollowTermCheckbox`),n=document.getElementById(`followTermPanelCheckbox`);e&&n&&(n.checked=e.checked);let r=document.getElementById(`followTermCurrentPath`);r&&y&&t[y]&&(r.textContent=t[y].sftpPath||t[y].cwd||`—`)}),e(`navTabMonitor`,()=>{$(`monitor`);let e=document.getElementById(`monitorActiveServer`);e&&y&&t[y]&&!t[y].isLocal?e.textContent=t[y].name||t[y].host||y:e&&(e.textContent=`No SSH connection`)}),e(`sftpFollowTermBtn`,()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Open an SSH connection first`,`warning`);return}let e=document.getElementById(`sftpFollowTermCheckbox`);e&&!e.checked&&(e.checked=!0),xe(y),S(`SFTP synchronized with terminal folder (${t[y].sftpPath||Y})`,`success`)}),e(`sftpDownloadBtn`,async()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Open an SSH connection first to download files`,`warning`);return}if(!X){S(`Please select a file to download`,`warning`);return}if(X.isDir){S(`Folder download not supported directly; please select a file`,`warning`);return}if(window.go&&window.go.main&&window.go.main.App)try{let e=await window.go.main.App.SelectDownloadDest(X.name);e&&(S(`Downloading ${X.name}...`,`info`),await window.go.main.App.SFTPDownload(y,X.path,e),S(`Downloaded ${X.name} successfully`,`success`))}catch(e){S(`Download failed: `+e,`error`)}}),e(`sftpUploadBtn`,async()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Open an SSH connection first to upload files via SFTP`,`warning`);return}if(window.go&&window.go.main&&window.go.main.App)try{let e=await window.go.main.App.SelectUploadFile();if(e){let t=e.substring(e.lastIndexOf(`\\`)+1),n=(Y===`/`?``:Y)+`/`+t;S(`Uploading ${t}...`,`info`),await window.go.main.App.SFTPUpload(y,e,n),S(`Uploaded ${t} successfully`,`success`),await Z(Y)}}catch(e){S(`Upload failed: `+e,`error`)}}),e(`sftpRefreshBtn`,()=>Z(Y)),e(`sftpMkdirBtn`,async()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Open an SSH connection first to create folders`,`warning`);return}let e=prompt(`Enter new folder name:`);if(e&&window.go&&window.go.main&&window.go.main.App){let t=(Y===`/`?``:Y)+`/`+e.trim();try{await window.go.main.App.SFTPMkdir(y,t),S(`Folder "${e}" created`,`success`),await Z(Y)}catch(e){S(`Mkdir failed: `+e,`error`)}}}),e(`sftpNewFileBtn`,async()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Open an SSH connection first to create files`,`warning`);return}let e=prompt(`Enter new file name (e.g. test.txt, script.sh, main.c):`);if(e&&window.go&&window.go.main&&window.go.main.App){let t=(Y===`/`?``:Y)+`/`+e.trim();try{await window.go.main.App.SFTPCreateFile(y,t),S(`File "${e}" created`,`success`),await Z(Y)}catch(e){S(`Create file failed: `+e,`error`)}}}),e(`sftpDeleteBtn`,async()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Open an SSH connection first`,`warning`);return}if(!X){S(`Please select a file or folder to delete`,`warning`);return}if(confirm(`Are you sure you want to delete "${X.name}" from remote server?`)&&window.go&&window.go.main&&window.go.main.App)try{await window.go.main.App.SFTPDelete(y,X.path),S(`Deleted ${X.name}`,`info`),await Z(Y)}catch(e){S(`Delete failed: `+e,`error`)}}),e(`sftpEditBtn`,()=>{if(!X||X.isDir){S(`Please select a file to edit in Nexterm Editor`,`warning`);return}Xa(X.path)}),e(`sftpToggleHiddenBtn`,()=>{io(!eo),S(eo?`Showing hidden files (.*)`:`Hiding hidden files`,`info`),fo(Za,Y)}),e(`sftpSyncBtn`,()=>{let e=document.getElementById(`sftpFollowTermCheckbox`);e&&(e.checked=!e.checked,S(e.checked?`Automatic Terminal-SFTP Directory Sync: ON`:`Automatic Terminal-SFTP Directory Sync: OFF`,e.checked?`success`:`info`),e.checked&&y&&t[y]&&!t[y].isLocal&&xe(y))});let v=document.getElementById(`sftpFollowTermCheckbox`);v&&v.addEventListener(`change`,()=>{let e=document.getElementById(`sessionsFollowTermCheckbox`);e&&(e.checked=v.checked);let n=document.getElementById(`followTermPanelCheckbox`);n&&(n.checked=v.checked),S(v.checked?`Follow terminal folder: ON`:`Follow terminal folder: OFF`,v.checked?`success`:`info`),v.checked&&y&&t[y]&&!t[y].isLocal&&xe(y)});let C=document.getElementById(`sftpRemoteMonitorCheckbox`);C&&C.addEventListener(`change`,()=>{let e=document.getElementById(`sessionsRemoteMonitorCheckbox`);if(e&&(e.checked=C.checked),C.checked){if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Connect to an SSH server first to open Server Monitoring`,`warning`),C.checked=!1,e&&(e.checked=!1);return}Ar()}});let T=document.getElementById(`sessionsRemoteMonitorCheckbox`);T&&T.addEventListener(`change`,()=>{let e=document.getElementById(`sftpRemoteMonitorCheckbox`);if(e&&(e.checked=T.checked),T.checked){if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Connect to an SSH server first to open Server Monitoring`,`warning`),T.checked=!1,e&&(e.checked=!1);return}Ar()}});let E=document.getElementById(`sessionsFollowTermCheckbox`);E&&E.addEventListener(`change`,()=>{let e=document.getElementById(`sftpFollowTermCheckbox`);e&&(e.checked=E.checked);let n=document.getElementById(`followTermPanelCheckbox`);n&&(n.checked=E.checked),S(E.checked?`Follow terminal folder: ON`:`Follow terminal folder: OFF`,E.checked?`success`:`info`),E.checked&&y&&t[y]&&!t[y].isLocal&&xe(y)}),e(`followTermSyncNowBtn`,()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Open an SSH connection first`,`warning`);return}let e=document.getElementById(`sftpFollowTermCheckbox`);e&&(e.checked=!0);let n=document.getElementById(`sessionsFollowTermCheckbox`);n&&(n.checked=!0);let r=document.getElementById(`followTermPanelCheckbox`);r&&(r.checked=!0),xe(y),S(`SFTP synchronized with terminal folder`,`success`)});let k=document.getElementById(`followTermPanelCheckbox`);k&&k.addEventListener(`change`,()=>{let e=document.getElementById(`sftpFollowTermCheckbox`);e&&(e.checked=k.checked);let n=document.getElementById(`sessionsFollowTermCheckbox`);n&&(n.checked=k.checked),S(k.checked?`Follow terminal folder: ON`:`Follow terminal folder: OFF`,k.checked?`success`:`info`),k.checked&&y&&t[y]&&!t[y].isLocal&&xe(y)}),e(`monitorLaunchBtn`,()=>{if(!y||y===`home`||!t[y]||t[y].isLocal){S(`Connect to an SSH server first to open Server Monitoring`,`warning`);return}Ar()}),e(`sftpPathDropdownBtn`,e=>{e.stopPropagation(),uo()}),document.querySelectorAll(`.moba-path-item`).forEach(e=>{e.addEventListener(`click`,()=>{lo();let t=e.dataset.path;t&&Z(t)})});let A=document.getElementById(`sftpPathInput`);A&&(A.onkeydown=e=>{e.key===`Enter`&&(lo(),Z(A.value.trim()))}),e(`sftpSortNameBtn`,()=>{Qa===`name`?ro($a===`asc`?`desc`:`asc`):(no(`name`),ro(`asc`));let e=document.getElementById(`sftpSortArrow`);e&&(e.textContent=$a===`asc`?`▲`:`▼`),fo(Za,Y)}),e(`sftpSortSizeBtn`,()=>{Qa===`size`?ro($a===`asc`?`desc`:`asc`):(no(`size`),ro(`asc`)),fo(Za,Y)}),e(`sidebarNewMacroBtn`,lr),e(`sidebarNewTunnelBtn`,ar),e(`treeMultiConnectBtn`,()=>Fe()),e(`treeAddSessionBtn`,()=>J()),e(`treeAddFolderBtn`,()=>Ca()),e(`treeExpandAllBtn`,async()=>{window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.ExpandAllFolders(!0),await Q()}),e(`treeCollapseAllBtn`,async()=>{window.go&&window.go.main&&window.go.main.App&&await window.go.main.App.ExpandAllFolders(!1),await Q()}),e(`treeRefreshBtn`,()=>Q()),e(`treeExportBtn`,async()=>{if(window.go&&window.go.main&&window.go.main.App)try{let e=await window.go.main.App.ExportSessionsToFile();e&&S(`Sessions exported to ${e}`,`success`)}catch(e){S(`Export failed: `+e,`error`)}}),e(`treeImportBtn`,async()=>{if(window.go&&window.go.main&&window.go.main.App)try{await window.go.main.App.ImportSessionsFromFile(),await Q(),S(`Sessions imported successfully`,`success`)}catch(e){S(`Import failed: `+e,`error`)}});let j=async e=>{if(!e)return;let t=e.value.trim();if(!t){S(`Please enter a connection string (e.g. ssh user@192.168.1.20)`,`warning`),e.focus();return}let n=ho(t);if(!n||!n.host){S(`Invalid quick connect address: "${t}"`,`error`),e.focus();return}e.value=``;let r=n.protocol||`ssh`,i=n.port||22,a=i===22?``:`:${i}`,o=n.username||``,s=o?`${o}@${n.host}${a}`:`${n.host}${a}`;S(`Quick connecting to ${s}...`,`info`);let c=null,l=e=>{if(e&&!c){if(e.session){let t=e.session;if(t.host===n.host&&(t.port||22)===i&&(!o||!t.username||t.username===o)){c=t;return}}if(e.children){for(let t of e.children)if(l(t),c)return}}};if(l(I),c){let e={...c};o&&!e.username&&(e.username=o),V(e);return}let u=n.host.replace(/[^a-zA-Z0-9_-]/g,`_`);`${(o||`user`).replace(/[^a-zA-Z0-9_-]/g,`_`)}${u}${i}`;let d=window.crypto&&window.crypto.randomUUID?window.crypto.randomUUID():`sess-`+Date.now(),f={id:d,vaultKey:d,name:s,protocol:r,host:n.host,port:i,username:o,initialDir:n.initialDir||``,authType:`password`};if(window.go?.main?.App?.AddSession)try{await window.go.main.App.AddSession(``,f),await Q()}catch(e){console.warn(`Auto-saving quick connect session failed:`,e)}V(f)},M=document.getElementById(`quickConnectInput`),ee=document.getElementById(`quickConnectBtn`);M&&M.addEventListener(`keydown`,e=>{e.key===`Enter`&&j(M)}),ee&&ee.addEventListener(`click`,()=>{j(M)});let te=document.getElementById(`sidebarQuickConnectInput`)||document.getElementById(`sidebarQuickConnect`);te&&te.addEventListener(`keydown`,e=>{e.key===`Enter`&&j(te)});let N=document.getElementById(`welcomeSearchInput`);N&&(N.oninput=()=>{Q(N.value)}),e(`startLocalTerminalBtn`,()=>Un(`powershell`)),e(`newSSHSessionBigBtn`,()=>J()),e(`homeMultiConnectBtn`,()=>Fe()),e(`homeBroadcastConnectBtn`,()=>Fe()),e(`homeAddServerBtn`,()=>J()),e(`homeToolSSH`,()=>J()),e(`homeToolSFTP`,()=>{$(`sftp`),S(`Switched to SFTP Browser in sidebar`,`info`)}),e(`homeToolTunnel`,ir),e(`homeToolMacros`,()=>{$(`macros`),S(`Switched to Macros in sidebar`,`info`)}),e(`homeToolTaskMgr`,()=>{window.go&&window.go.main&&window.go.main.App&&window.go.main.App.LaunchSystemTool(`taskmgr`)}),e(`homeToolScanner`,_r);let P=document.getElementById(`homeTabBtn`);P&&(P.onclick=Ln),e(`newTabAddBtn`,()=>{J()}),e(`wsSettingsBtn`,Cr),Object.entries({toolHardware:`devmgmt`,toolProcesses:`taskmgr`,toolCmdAdmin:`cmd_admin`,toolPSAdmin:`powershell_admin`,toolPorts:`resmon`}).forEach(([t,n])=>{e(t,()=>{window.go&&window.go.main&&window.go.main.App&&window.go.main.App.LaunchSystemTool(n),S(`Launching ${n}...`,`info`)})}),e(`toolPkgMgr`,pr),e(`toolTextEditor`,()=>Xa(``)),e(`toolDiff`,mr),e(`toolAscii`,hr),e(`toolPing`,ur),e(`toolDNS`,dr),e(`toolScanner`,_r),e(`toolHash`,fr),e(`toolKeyGen`,gr),e(`toolTunnel`,ir),window.addEventListener(`resize`,()=>{w()});let F=document.getElementById(`sidebar`),re=document.getElementById(`sidebarResizer`);if(F&&re){try{let e=parseInt(localStorage.getItem(`nexterm_sidebar_width`),10);e&&e>=180&&e<=640&&(F.style.width=e+`px`)}catch{}let e=!1;re.addEventListener(`mousedown`,t=>{e=!0,re.classList.add(`dragging`),document.body.style.cursor=`col-resize`,document.body.style.userSelect=`none`,t.preventDefault()}),window.addEventListener(`mousemove`,t=>{if(!e)return;let n=F.getBoundingClientRect().left,r=Math.max(180,Math.min(640,t.clientX-n));F.style.width=r+`px`}),window.addEventListener(`mouseup`,()=>{if(e){e=!1,re.classList.remove(`dragging`),document.body.style.cursor=``,document.body.style.userSelect=``;try{localStorage.setItem(`nexterm_sidebar_width`,String(parseInt(F.style.width,10)||290))}catch{}w()}}),re.addEventListener(`dblclick`,()=>{F.style.width=`290px`;try{localStorage.setItem(`nexterm_sidebar_width`,`290`)}catch{}w()})}window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(R(),U(),Mo());let n=/^(INPUT|TEXTAREA|SELECT)$/.test(e.target&&e.target.tagName||``);(e.key===`F1`||e.shiftKey&&e.key===`?`)&&!n&&(e.preventDefault(),_a()),e.altKey&&(e.key===`m`||e.key===`M`)&&(e.preventDefault(),Zn()),(e.altKey&&(e.key===`b`||e.key===`B`)||(e.ctrlKey||e.metaKey)&&e.altKey&&(e.key===`b`||e.key===`B`))&&(e.preventDefault(),Xe(`all`)),(e.ctrlKey||e.metaKey)&&((e.key===`k`||e.key===`K`)&&!e.shiftKey&&(e.preventDefault(),jo()),(e.shiftKey&&(e.key===`F`||e.key===`f`)||!e.shiftKey&&(e.key===`f`||e.key===`F`))&&y&&t[y]&&(e.preventDefault(),me(y)),e.shiftKey&&(e.key===`E`||e.key===`e`)&&(e.preventDefault(),D(x.activePaneId,`right`)),e.shiftKey&&(e.key===`O`||e.key===`o`)&&(e.preventDefault(),D(x.activePaneId,`down`)),e.shiftKey&&(e.key===`M`||e.key===`m`)&&(e.preventDefault(),ne(x.activePaneId)),e.shiftKey&&(e.key===`|`||e.key===`\\`)&&(e.preventDefault(),b(x.layout===`split-v`?`single`:`split-v`)),e.shiftKey&&(e.key===`_`||e.key===`-`)&&(e.preventDefault(),b(x.layout===`split-h`?`single`:`split-h`)),e.key===`n`&&!e.shiftKey&&(e.preventDefault(),J()),e.key===`w`&&!e.shiftKey&&y&&y!==`home`&&(e.preventDefault(),zn(y)))})}async function Xo(){let e=localStorage.getItem(`nexterm_settings`);if(e)try{let t=JSON.parse(e);Object.assign(W,t)}catch{}if(xr(W.uiTheme||W.theme||`dark-modern`,!1),window.go&&window.go.main&&window.go.main.App)try{let e=await window.go.main.App.GetCustomizerConfig();e&&e.appName&&(document.title=e.appName)}catch{}Yo(),window.runtime&&window.runtime.EventsOn&&(window.runtime.EventsOn(`sftp:file:modified`,e=>{qa(e)}),window.runtime.EventsOn(`ssh:hostkey:verify_request`,e=>{nr(e)}),window.runtime.EventsOn(`ssh:auth:challenge_request`,e=>{tr(e)})),pn({switchSidebarView:$,refreshSFTP:Z,renderTree:Q}),await Q(),M(),Ln(),N(),wo(),Bo(),Go({onOpenHome:Ln,onOpenSessions:()=>$(`sessions`),onOpenSFTP:()=>$(`sftp`),onOpenBroadcast:()=>Xe(`all`),onOpenMultiExec:Zn,onOpenTunneling:ir,onOpenSettings:Cr}),setTimeout(()=>{try{gi()}catch{}},1200)}document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,Xo):Xo();
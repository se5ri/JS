const ua = document.querySelector("#user-agent");
const lang = document.querySelector("#language");
const platform = document.querySelector("#platform");
const isOnline = document.querySelector("#online-status");
//window 뺴줘도 된다
if (ua) {
  ua.textContent = window.navigator.userAgent;
}

if (lang) {
  lang.textContent = window.navigator.language;
}

if (platform) {
  platform.textContent = (window.navigator as any).userAgentData.platform;
}

if (isOnline) {
  isOnline.textContent = window.navigator.onLine ? "온라인" : "오프라인";
}

console.log(navigator);

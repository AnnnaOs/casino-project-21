(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("scrollContainer");let o=!1,c,r;t.addEventListener("mousedown",e=>{o=!0,t.classList.add("active"),c=e.pageX-t.offsetLeft,r=t.scrollLeft}),t.addEventListener("mouseleave",()=>{o=!1,t.classList.remove("active")}),t.addEventListener("mouseup",()=>{o=!1,t.classList.remove("active")}),t.addEventListener("mousemove",e=>{if(!o)return;e.preventDefault();const n=(e.pageX-t.offsetLeft-c)*3;t.scrollLeft=r-n}),t.addEventListener("touchstart",e=>{o=!0,c=e.touches[0].pageX-t.offsetLeft,r=t.scrollLeft}),t.addEventListener("touchend",()=>{o=!1}),t.addEventListener("touchmove",e=>{if(!o)return;const n=(e.touches[0].pageX-t.offsetLeft-c)*3;t.scrollLeft=r-n})});
//# sourceMappingURL=commonHelpers.js.map

if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const c=e=>r(e,l),o={module:{uri:l},exports:t,require:c};s[l]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/CreateEvent.1d332c6c.js",revision:null},{url:"assets/CreateEvent.258a803f.css",revision:null},{url:"assets/EventsPlaceCard.31480834.css",revision:null},{url:"assets/EventsPlaceCard.691abe0c.js",revision:null},{url:"assets/index.4e52f804.js",revision:null},{url:"assets/index.726618aa.css",revision:null},{url:"assets/index.ca79c041.css",revision:null},{url:"assets/Start.6316773f.js",revision:null},{url:"assets/Start.b1b80b95.css",revision:null},{url:"assets/webfontloader.cd097671.js",revision:null},{url:"index.html",revision:"0886cf55a4f3b8df3101b195cca43c0e"},{url:"registerSW.js",revision:"adc960fa1d7177b94b70b8a60aa274d6"},{url:"favicon.ico",revision:"5f2b16b856a3e3af6909f416e1b6f039"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"android-chrome-192x192.png",revision:"43772ac24f36ba74c246d0012055b20a"},{url:"android-chrome-512x512.png",revision:"9657852120ad4bb7d028769b0bfea507"},{url:"apple-touch-icon.png",revision:"e8d910d19ef79babe94e8957414b43c0"},{url:"mstile-150x150.png",revision:"b58c26cd7f1012d54e815370a592039c"},{url:"manifest.webmanifest",revision:"9d8d6eb88d49e8dc9c6ca2ff387e18fc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

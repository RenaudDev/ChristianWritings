if(!self.define){let e,c={};const n=(n,a)=>(n=new URL(n+".js",a).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(c[i])return;let f={};const o=e=>n(e,i),r={module:{uri:i},exports:f,require:o};c[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(s(...e),f)))}}define(["./workbox-85135f18"],(function(e){"use strict";e.setCacheNameDetails({prefix:"PWA"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"generator.js",revision:"b636427ffe2847d5898683a9e77b66a2"},{url:"js/header.7a2a109ec3782c57bad0332b662f8a5f41765505936b69868eb8bd5241de9daf23c388e82ca1831f6d09935013dcb9f71bfa7face3975880c1076028b7b0a6e1.js",revision:"fe4132ad90c012ae92f464098b5a846e"},{url:"style.min.b69fe43ece9c1c4e7504d0633025581545d50d59c050364efc7e271428b998aac87c4b2fd449298cc7205f5b376c378cfa5f2f54a072706ac824edf786807e2f.css",revision:"c58111e457bd97808389a875c9ee4eed"}],{}),e.registerRoute(/(?:\/)$/,new e.StaleWhileRevalidate({cacheName:"html",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|m4a)$/,new e.CacheFirst({cacheName:"audio",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:m4v|mpg|avi)$/,new e.CacheFirst({cacheName:"videos",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({})}));
//# sourceMappingURL=service-worker.js.map

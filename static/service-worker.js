
// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)



importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);


workbox.routing.registerRoute(
  /\.(?:css|js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    "cacheName": "assets",
  })
);

workbox.routing.registerRoute(
  /\.(?:webp|png|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    "cacheName": "images",
  })
);

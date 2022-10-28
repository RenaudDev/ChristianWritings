
// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)



importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    "cacheName": "assets",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 604800
      })
    ]
  })
);
workbox.routing.registerRoute(
  /\.(?:webp|png|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    "cacheName": "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 1000,
        maxAgeSeconds: 31536000
      })
    ]
  })
);
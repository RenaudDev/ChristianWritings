importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    "cacheName": "assets"
  })
);
workbox.routing.registerRoute(
  /\.(?:webp|png|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    "cacheName": "images"
  })
);

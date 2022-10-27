importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
/* workbox.routing.registerRoute(
  ({request}) => request.destination === '/',
  new workbox.strategies.CacheFirst()
);
*/
workbox.routing.registerRoute(
  /\.(?:js|css|webp|png|svg)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

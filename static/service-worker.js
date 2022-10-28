import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { offlineFallback } from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly}  from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { RangeRequestsPlugin } from 'workbox-range-requests';

// Evict image cache entries older thirty days:
const imageRoute = new Route(({ request }) => {
  return request.destination === 'image';
}, new CacheFirst({
  cacheName: 'images',
  plugins: [
    new ExpirationPlugin({
      maxAgeSeconds: 60 * 60 * 24 * 30,
    })
  ]
}));

// Evict the least-used script cache entries when
// the cache has more than 50 entries:
const scriptsRoute = new Route(({ request }) => {
  return request.destination === 'script';
}, new CacheFirst({
  cacheName: 'scripts',
  plugins: [
    new ExpirationPlugin({
      maxEntries: 50,
    })
  ]
}));

// Register routes
registerRoute(imageRoute);
registerRoute(scriptsRoute);

// sw.js


registerRoute(
  ({request}) => {
    const {destination} = request;

    destination === 'audio'
  },
  new CacheFirst({
    cacheName: 'audioCache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200]
      }),
      new RangeRequestsPlugin(),
    ],
  }),
);

setDefaultHandler(new NetworkOnly());

offlineFallback();
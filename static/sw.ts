import {precacheAndRoute} from 'workbox-precaching';
import {warmStrategyCache} from 'workbox-recipes';
import {setDefaultHandler, setCatchHandler} from 'workbox-routing';
import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;



precacheAndRoute(self.__WB_MANIFEST);


// Fallback assets to cache
const FALLBACK_HTML_URL = '/offline';
const FALLBACK_IMAGE_URL = '/offline.png';
const FALLBACK_STRATEGY = new CacheFirst();
const CACHE = "pwabuilder-page";

// Warm the runtime cache with a list of asset URLs
warmStrategyCache({
  urls: [FALLBACK_HTML_URL, FALLBACK_IMAGE_URL],
  strategy: FALLBACK_STRATEGY,
});

// Use a stale-while-revalidate strategy to handle requests by default.
setDefaultHandler(new StaleWhileRevalidate());

// This "catch" handler is triggered when any of the other routes fail to
// generate a response.
setCatchHandler(async ({request}) => {
  // The warmStrategyCache recipe is used to add the fallback assets ahead of
  // time to the runtime cache, and are served in the event of an error below.
  // Use `event`, `request`, and `url` to figure out how to respond, or
  // use request.destination to match requests for specific resource types.
  switch (request.destination) {
    case 'document':
      return FALLBACK_STRATEGY.handle({event, request: FALLBACK_HTML_URL});

    case 'image':
      return FALLBACK_STRATEGY.handle({event, request: FALLBACK_IMAGE_URL});

    default:
      // If we don't have a fallback, return an error response.
      return Response.error();
  }
});


self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
      self.skipWaiting();
    }
  });
  
  self.addEventListener('install', async (event) => {
    event.waitUntil(
      caches.open(CACHE)
        .then((cache) => cache.add(FALLBACK_HTML_URL))
    );
  });
  
  if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
  }
  
  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith((async () => {
        try {
          const preloadResp = await event.preloadResponse;
  
          if (preloadResp) {
            return preloadResp;
          }
  
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
  
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match(FALLBACK_HTML_URL);
          return cachedResp;
        }
      })());
    }
  });
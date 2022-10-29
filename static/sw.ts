import {precacheAndRoute} from 'workbox-precaching';
import {warmStrategyCache} from 'workbox-recipes';
import {setDefaultHandler, setCatchHandler} from 'workbox-routing';
import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';

// Fallback assets to cache
const FALLBACK_HTML_URL = '/offline.html';
const FALLBACK_IMAGE_URL = '/offline.png';
const FALLBACK_STRATEGY = new CacheFirst();

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
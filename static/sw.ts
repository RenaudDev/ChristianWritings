import {precacheAndRoute} from 'workbox-precaching';
import {matchPrecache, precacheAndRoute} from 'workbox-precaching';
import {setDefaultHandler, setCatchHandler} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

const FALLBACK_HTML_URL = '/offline.html';
const FALLBACK_IMAGE_URL = '/offline.png';

precacheAndRoute(self.__WB_MANIFEST);

setDefaultHandler(new StaleWhileRevalidate());

setCatchHandler(async ({request}) => {
    switch (request.destination) {
        case 'document':
          // FALLBACK_HTML_URL must be defined as a precached URL for this to work:
          return matchPrecache(FALLBACK_HTML_URL);
    
        case 'image':
          // FALLBACK_IMAGE_URL must be defined as a precached URL for this to work:
          return matchPrecache(FALLBACK_IMAGE_URL);
    
        default:
          // If we don't have a fallback, return an error response.
          return Response.error();
      }
    });
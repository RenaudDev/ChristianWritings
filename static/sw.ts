import {precacheAndRoute} from 'workbox-precaching';
import {warmStrategyCache} from 'workbox-recipes';
import { registerRoute, Route } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;
const OFFLINE_PAGE_URL = '/offline'
const OFFLINE_PAGE_NO_NETWORK_IMAGE_URL = '/offline.png'

const CACHE_PREFIX = 'workbox-renaud-coding'
const CACHE_OFFLINE_NAME = `${CACHE_PREFIX}-offline`
const CACHE_SCRIPT_NAME = `${CACHE_PREFIX}-scripts`
const CACHE_STYLES_NAME = `${CACHE_PREFIX}-styles`
const CACHE_DOCUMENTS_NAME = `${CACHE_PREFIX}-documents`
const CACHE_FONTS_NAME = `${CACHE_PREFIX}-fonts`
const CACHE_IMAGES_NAME = `${CACHE_PREFIX}-images`

// This can be any strategy, CacheFirst used as an example.
const strategy = new CacheFirst();
const urls = [
  '/offline',
];

warmStrategyCache({urls, strategy});

precacheAndRoute(self.__WB_MANIFEST)


const stylesScriptsExpirationPlugin = new ExpirationPlugin({   
    maxEntries: 10, 
    maxAgeSeconds: 15 * 24 * 60 * 60, 
    purgeOnQuotaError: true 
  })
  const fontsExpirationPlugin = new ExpirationPlugin({
    maxEntries: 5, 
    maxAgeSeconds: 180 * 24 * 60 * 60 
  })
  const imagesExpirationPlugin = new ExpirationPlugin({ 
    maxEntries: 100, 
    maxAgeSeconds: 60 * 24 * 60 * 60 
  })
  const documentExpirationPlugin = new ExpirationPlugin({ 
    maxEntries: 50, 
    maxAgeSeconds: 60 * 24 * 60 * 60, 
    purgeOnQuotaError: true 
  })
  const registerCacheFirstRouteUsing = (
    destination: RequestDestination,
    cacheName: string,
    expirationPlugin: ExpirationPlugin
  ): Route => registerRoute(
    ({ request }) => request.destination === destination,
    new CacheFirst({
      cacheName: cacheName,
      plugins: [expirationPlugin],
    })
  )
  registerCacheFirstRouteUsing(
    'style', 
    CACHE_STYLES_NAME, 
    stylesScriptsExpirationPlugin
  )
  registerCacheFirstRouteUsing(
    'script', 
    CACHE_SCRIPT_NAME, 
    stylesScriptsExpirationPlugin
  )
  registerCacheFirstRouteUsing(
    'document', 
    CACHE_DOCUMENTS_NAME, 
    documentExpirationPlugin
  )
  registerCacheFirstRouteUsing(
    'font', 
    CACHE_FONTS_NAME, 
    fontsExpirationPlugin
  )
  registerCacheFirstRouteUsing(
    'image',
    CACHE_IMAGES_NAME, 
    imagesExpirationPlugin
  )

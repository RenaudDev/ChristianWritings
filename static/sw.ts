import {precacheAndRoute} from 'workbox-precaching';
import { imageCache } from 'workbox-recipes';
import { googleFontsCache } from 'workbox-recipes';
import { pageCache } from 'workbox-recipes';
import { offlineFallback } from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

setDefaultHandler(new NetworkOnly());

offlineFallback();

imageCache();
googleFontsCache();
pageCache();


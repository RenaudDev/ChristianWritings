import {precacheAndRoute} from 'workbox-precaching';
import {imageCache} from 'workbox-recipes';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);
imageCache();
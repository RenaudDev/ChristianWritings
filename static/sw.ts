import {precacheAndRoute} from 'workbox-precaching';
import {offlineFallback} from 'workbox-recipes';
import {setDefaultHandler} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

setDefaultHandler(new StaleWhileRevalidate());

offlineFallback();
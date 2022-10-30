import { imageCache } from 'workbox-recipes';
import { googleFontsCache } from 'workbox-recipes';
import { pageCache } from 'workbox-recipes';
import { offlineFallback } from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

setDefaultHandler(new NetworkOnly());

offlineFallback();

imageCache();
googleFontsCache();
pageCache();

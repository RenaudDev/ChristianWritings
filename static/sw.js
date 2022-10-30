importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

setDefaultHandler(new NetworkOnly());

offlineFallback();

imageCache();
googleFontsCache();
pageCache();

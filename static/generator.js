const workbox = require("workbox-build");

workbox.generateSW( {
    cacheId: "PWA",
    globDirectory: "./",
    globPatterns: [
        "**/*.{css,js}"
    ],
    globIgnores: [
        "**/generator.js",
        "**/service-worker.js"
    ],
    swDest: "./service-worker.js",
    runtimeCaching: [
        {
            urlPattern: /\,(?:html|xml)$/,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "markup",
                expiration: {
                    maxAgeSeconds: 86400
                }
            }
        }
    ]
})
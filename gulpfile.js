const gulp = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

gulp.task("clean", function () {
    return gulp.src("public", { read: false, allowEmpty: true })
    .pipe(clean());
});
gulp.task("pagefind", shell.task(["npx pagefind --source public"]));
gulp.task("hugo-build", shell.task(["hugo --gc --minify"]));

gulp.task("generate-service-worker", () => {
    return workbox.generateSW({
        cacheId: "PWA",
        globDirectory: "./public",
        globPatterns: [
            "**/*.{css,js,eot,ttf,woff,woff2,otf}"
        ],
        swDest: "./public/service-worker.js",
        ignoreURLParametersMatching: [/./],
        clientsClaim: true,
        skipWaiting: true,
        offlineGoogleAnalytics: true,
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
        runtimeCaching: [
            {
                urlPattern: /(?:\/)$/,
                handler: "StaleWhileRevalidate",
                options: {
                    cacheName: "html",
                    expiration: {
                        maxAgeSeconds: 60 * 60 * 24 * 7,
                    },
                },
            },
            {
                urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "images",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
            },
            {
                urlPattern: /\.(?:mp3|wav|m4a)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "audio",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
            },
            {
                urlPattern: /\.(?:m4v|mpg|avi)$/,
                handler: "CacheFirst",
                options: {
                    cacheName: "videos",
                    expiration: {
                        maxEntries: 1000,
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    },
                },
            }
        ],
    });
});
gulp.task("build", gulp.series("clean", "hugo-build", "pagefind", "generate-service-worker"));
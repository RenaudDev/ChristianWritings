const gulp = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

const genRanHex = (size = 24) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

gulp.task("clean", function () {
    return gulp.src("public", { read: false, allowEmpty: true })
    .pipe(clean());
});
gulp.task("pagefind", shell.task(["npx pagefind --source public"]));
gulp.task("hugo-build", shell.task(["hugo --gc --minify"]));
gulp.task("pagefind-serve", shell.task(["npx pagefind --source public --serve"]));
gulp.task("esbuild", shell.task(["esbuild --outfile=static/sw.js --bundle static/sw.ts"]));
gulp.task("inject", shell.task(["workbox injectManifest"]));


gulp.task("build", gulp.series("clean", "esbuild", "hugo-build", "inject", "pagefind",));
gulp.task("serve", gulp.series("hugo-build", "pagefind-serve"));
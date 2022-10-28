const gulp = require("gulp");
const clean = require("gulp-clean");
const shell = require("gulp-shell");

gulp.task("clean", function () {
    return gulp.src("public", { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task("pagefind", shell.task(["npx pagefind --source public"]));

gulp.task("hugo-build", shell.task(["hugo --gc --minify"]));

gulp.task("build", gulp.series("hugo-build", "pagefind" ));
var gulp = require("gulp"),
  clean = require("gulp-clean"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  minifyCss = require("gulp-minify-css")
  markdown = require("gulp-markdown")
  gfi = require("gulp-file-insert");


gulp.task("default", ["watch"]);

gulp.task("watch", function () {
  gulp.watch(["src/**/*.{css,js}", "page-src/index.html"], ["minify-js", "minify-css", "compileFrontPage"]);
});

gulp.task("clean", function() {
  return gulp.src(["dist"], { read: false })
    .pipe(clean());
});

gulp.task("minify-js", ["clean"], function () {
  gulp.src("./src/spiral-button.js")
    .pipe(rename("spiral-button.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});

gulp.task("minify-css", ["clean"], function () {
  gulp.src("./src/spiral-button.css") // path to your file
    .pipe(rename("spiral-button.min.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest("./dist"));
});

gulp.task("convertReadmeToHtml", function () {
  return gulp.src("README.md")
    .pipe(markdown())
    .pipe(gulp.dest("./page-src"));
});

gulp.task("compileFrontPage", ["convertReadmeToHtml"], function () {
  return gulp.src("page-src/index.html")
    .pipe(gfi({
      "<!-- readme -->": "page-src/README.html"
    }))
    .pipe(gulp.dest("./"));
});






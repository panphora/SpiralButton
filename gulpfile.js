var gulp = require('gulp'),
  clean = require('gulp-clean'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  minifyCss = require("gulp-minify-css");

gulp.task('default', ['clean', 'minify-js', 'minify-css']);

gulp.task('clean', function() {
  return gulp.src(['dist'], { read: false })
    .pipe(clean());
});

gulp.task('minify-js', function () {
  gulp.src('./src/spiral-button.js')
    .pipe(rename("spiral-button.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-css', function () {
  gulp.src('./src/spiral-button.css') // path to your file
    .pipe(rename("spiral-button.min.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist'));
});

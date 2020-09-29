const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

const path = require("path");
const fs = require("fs");


var CSSDEST = "css/";
var TIMESTAMP = Math.round(Date.now() / 1000);

gulp.task("sass", function () {
  return gulp
    .src("scss/particl-ccs-front.scss")
    .pipe(sass({ errLogToConsole: true }))
    .pipe(cleanCSS({ format: "beautify" }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest(CSSDEST))
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(CSSDEST));
});


gulp.task(
  "default",
  gulp.series(
    "sass"
  )
);

gulp.task("devel", function () {
  gulp.watch("scss/**/*.*css", gulp.series("sass"));
});

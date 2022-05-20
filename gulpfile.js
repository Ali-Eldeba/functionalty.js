// Gulp Plugins
var gulp = require("gulp");
var minify = require("gulp-clean-css");
var prefix = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var sass = require("gulp-sass")(require("sass"));
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var pug = require("gulp-pug");
var livereload = require("gulp-livereload");

// HTML Task
gulp.task("html", () => {
  require("./server.js");
  return gulp
    .src("./project/html/*.pug", "./project/html/pages/*.pug")
    .pipe(pug({ pretty: false }))
    .pipe(gulp.dest("./website"))
    .pipe(livereload());
});

// CSS Styles Task
gulp.task("styles", () => {
  require("./server.js");
  return gulp
    .src("./project/css/main.scss")
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(minify())
    .pipe(gulp.dest("./website/css"))
    .pipe(livereload());
});

// JS Tasks
gulp.task("scripts", () => {
  require("./server.js");
  return gulp
    .src([
      "./project/js/*.js",
      "./project/js/**/*.js",
      "!./project/js/functionalty.js",
    ])
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(gulp.dest("./dist"))
    .pipe(livereload());
});

// Functionalty.js File Task
gulp.task("functionalty", () => {
  require("./server.js");
  return gulp
    .src("./project/js/functionalty.js")
    .pipe(uglify())
    .pipe(rename("functionalty.min.js"))
    .pipe(gulp.dest("./dist"));
});

// Watch Task (Main Task)
gulp.task("watch", () => {
  require("./server.js");
  gulp.watch(
    ["./project/html/*.pug", "./project/html/**/*.pug"],
    gulp.series("html")
  );
  gulp.watch(
    ["./project/css/**.scss", "./project/css/**.scss"],
    gulp.series("styles")
  );
  gulp.watch(
    [
      "./project/js/*.js",
      "./project/js/**/*.js",
      "!./project/js/functionalty.js",
    ],
    gulp.series("scripts")
  );
  gulp.watch("./project/js/functionalty.js", gulp.series("functionalty"));
});

var gulp = require('gulp'),
		gutil = require('gulp-util'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    minifycss = require('gulp-minify-css'),
    stylish = require('jshint-stylish');

var paths = {
  scripts: ['src/bg/*.js','src/inject/*.js','src/page_action/*.js'],
  styles: ['src/inject/contentscript.less']
};

gulp.task('less', function () {
  gulp.src(paths.styles)
    .pipe(less())
    .pipe(minifycss())
    .pipe(gulp.dest('./css'))
});

gulp.task('ugly', function() {
  gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('lint', function() {
  gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function () {
  gulp.watch(paths.styles, ['less']);
  gulp.watch(paths.scripts, ['lint']);
  gulp.watch(paths.scripts, ['ugly']);
});

gulp.task('default', ['lint', 'less', 'ugly', 'watch']);
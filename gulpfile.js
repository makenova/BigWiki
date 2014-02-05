var gulp = require('gulp'),
		gutil = require('gulp-util'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    minifycss = require('gulp-minify-css'),
    stylish = require('jshint-stylish'),
    clean = require('gulp-clean');

var paths = {
  scripts: ['src/bg/*.js','src/inject/*.js','src/page_action/*.js'],
  styles: ['src/inject/contentscript.less'],
  dist: ['./src/_locales/**/*', './src/icons/**/*', './src/page_action/**/*', './src/manifest.json']
};

gulp.task('less', function () {
  gulp.src(paths.styles)
    .pipe(less())
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('ugly', function() {
  gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
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

gulp.task('clean', function(){
  return gulp.src(['dist/*'], {read:false})
  .pipe(clean());
});

gulp.task('move',['clean', 'lint', 'less', 'ugly'], function(){
  gulp.src(paths.dist, {base:'./src'})
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'less', 'ugly', 'watch']);
gulp.task('dist', ['move']);
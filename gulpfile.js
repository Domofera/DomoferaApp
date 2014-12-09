/********* Variables *********/

/** Paths **/
var destinationPath = 'app/';
var assetsPath = 'assets'
var styleRootPath = 'app/' + assetsPath + '/stylesheets'
var styleDestPath = destinationPath + assetsPath + '/stylesheets/compiled';
var scriptPath = 'app/' + assetsPath + '/javascripts';
var viewPath = 'views'

/** Extensions **/
var styleRootExtension = '/*css.scss'
var styleDestExtension = '/*.css'
var scriptExtension = '/*.js'

/********* Dependencies *********/
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/************* Files *************/
gulp.task('style', function() {
  return gulp.src(styleRootPath + styleRootExtension)
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(gulp.dest(styleDestPath));
});

gulp.task('scripts', function() {
  return gulp.src(scriptPath + scriptExtension)
  .pipe(concat('script.js'))
  .pipe(gulp.dest(destinationPath + assetsPath + '/javascripts/compiled'))
  .pipe(rename('script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(destinationPath + assetsPath + '/javascripts/compiled'));
});

gulp.task('chartScripts', function() {
  return gulp.src('app/assets/javascripts/statistics/*.js')
  .pipe(concat('statistics.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/assets/javascripts/compiled'));
})

/************* Others *************/
gulp.task('lint', function() {
  return gulp.src(scriptPath + scriptExtension)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(scriptPath + scriptExtension, ['lint', 'scripts']);
  gulp.watch('app/assets/javascripts/statistics/*.js', ['chartScripts']);
  gulp.watch(styleRootPath + styleRootExtension, ['style']);
});

gulp.task('default', ['lint', 'style', 'scripts', 'chartScripts','watch']);

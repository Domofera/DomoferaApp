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
var calendar = ['app/assets/javascripts/calendar/moment.min.js',
                'app/assets/javascripts/calendar/fullcalendar.min.js',
                'app/assets/javascripts/calendar/calendarData.js',
                'app/assets/javascripts/calendar/calendarConfig.js'
              ];
var calendarstyle = ['app/assets/stylesheets/fullcalendar/fullcalendar.min.css',
                     'app/assets/stylesheets/fullcalendar/fullcalendar.print.css'
];

var aubengine = ['app/assets/javascripts/aubengine/Aubengine.js',
                'app/assets/javascripts/aubengine/mygrove.js'];

/************* Files *************/
gulp.task('style', function() {
  return gulp.src(styleRootPath + styleRootExtension)
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(gulp.dest(styleDestPath));
});

gulp.task('calendarstyle', function() {
  return gulp.src(calendarstyle)
  .pipe(concat('fullcalendar.css'))
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

gulp.task('calendar', function() {
  return gulp.src(calendar)
  .pipe(concat('calendar.js'))
  .pipe(gulp.dest('app/assets/javascripts/compiled'));
})

gulp.task('aubengine', function() {
  return gulp.src(aubengine)
  .pipe(concat('aubengine.js'))
  .pipe(gulp.dest('app/assets/javascripts/compiled'));
});

/************* Others *************/
gulp.task('lint', function() {
  return gulp.src(scriptPath + scriptExtension)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(scriptPath + scriptExtension, ['lint', 'scripts']);
  gulp.watch('app/assets/javascripts/statistics/*.js', ['chartScripts']);
  gulp.watch('app/assets/javascripts/aubengine/*.js', ['aubengine']);
  gulp.watch(styleRootPath + styleRootExtension, ['style']);
});

gulp.task('default', ['lint', 'style', 'scripts', 'chartScripts', 'aubengine', 'calendar', 'calendarstyle', 'watch']);

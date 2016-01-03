/*!
 * gulp
 * $ npm install gulp gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-notify gulp-rename gulp-cache del --save-dev
 */
 
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    minifycss = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');

// SASS (UI)
gulp.task('sass-ui', function() {
    return sass('sass/ui.scss', { style: 'expanded' })
    .pipe(prefix({ browsers: ['last 2 versions'] }))
    .pipe(gulp.dest('production/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('production/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});
 
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'scripts');
});
 
// Watch
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass-ui']);
});
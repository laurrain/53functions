//
var gulp = require('gulp'),
    qunit = require('gulp-qunit');

gulp.task('test', function() {
    return gulp.src('./tddQunit.html')
        .pipe(qunit());
});


gulp.task('default', function() {
    return gulp.src('./tddQunit.html')
        .pipe(qunit());
});


gulp.task('go', function(){

	console.log("oi!");

});

var jshint = require('gulp-jshint');
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

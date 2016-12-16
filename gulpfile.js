//REQUIRE
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('_scss/global-style.scss')
        .pipe(sass({ style: 'expanded', }).on('error', sass.logError))
        .pipe(gulp.dest('_css'));
});

gulp.task('default',function() {
    gulp.watch('_scss/*.scss',['styles']);
});

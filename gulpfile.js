var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');

// compile Sass
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules/breakpoint-sass/stylesheets']
        }))
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

// watch
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});

// default task
gulp.task('default', ['sass', 'watch']);
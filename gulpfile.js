var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');
var concat 			= require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(["./scss/styles.scss", "./css/vendor/*.css"])
        .pipe(sass())
        .pipe(cleanCSS())
				.pipe(concat('bundle.min.css'))
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
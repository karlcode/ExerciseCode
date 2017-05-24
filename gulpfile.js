var gulp = require('gulp');
var sass = require('gulp-sass')
var pug = require('gulp-pug')
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src('app/css/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({debug: true}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('pug', function () {
    return gulp.src('app/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('js', function () {
    return gulp.src('app/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('images', function(){
    return gulp.src('app/images/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/images'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass', 'pug', 'js', 'images'], function() {
    gulp.watch('app/css/*.scss', ['sass']);
    gulp.watch('app/*.pug', ['pug']);
    gulp.watch('app/js/*js', ['js']);
    gulp.watch('app/images/*', ['images']);
})

gulp.task('default', function (callback) {
    runSequence('clean:dist', ['sass', 'pug', 'js', 'images'],
        callback
    )
})
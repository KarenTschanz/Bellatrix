// Require
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var closureCompiler = require('gulp-closure-compiler');

// Development Tasks 
// -----------------
// Start browserSync server
gulp.task('browserSync', function () {
    browserSync({
        port: 3000
    });
});

// Sass
gulp.task('sass', function () {
    return gulp.src('./src/assets/scss/**/*.scss') // Gets all files ending with .scss in scss and children dirs
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact',
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./src/assets/css'))
        .pipe(browserSync.reload({ // Reloading with Browser Sync
            stream: true
        }));
});

// Auto prefixer
gulp.task('autoprefix', function () {
    return gulp.src('./src/assets/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'iOS 7']
            , cascade: false
        }))
        .pipe(gulp.dest('.'));
});

//JS
// gulp.task('optimjs', function() {
//     return gulp.src('./src/assets/js/**/*.js')
//         .pipe(concat('script.js'))
//         .pipe(gulp.dest('./src/assets/js'));
// });

gulp.task('minjs', function () {
    return gulp.src('./src/assets/js/**/*.js')
        .pipe(uglify().on('error', function(e){
            console.log(e);
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./src/assets/js'));
    
});

// Build Sequences
// ---------------

// Watchers
gulp.task('prod', function () {
    browserSync.init({
        server: { baseDir: './'},
        port:3000
    });
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass', 'autoprefix'));
    gulp.watch('./src/assets/js/**/*.js',  gulp.series('minjs'), browserSync.reload);
});

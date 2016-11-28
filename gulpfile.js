'use strict';
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    ts = require('gulp-typescript'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('jade', function(){
    var YOUR_LOCALS = {};
    gulp.src('./src/jade/**/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dist'));
});
gulp.task('sass', function(){
    return gulp.src('./src/sass/**/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('board.css'))
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('images', function() {
    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});
gulp.task('script', function(){
    return tsProject.src()
                    .pipe(tsProject())
                    .pipe(uglify())
                    .pipe(gulp.dest('./dist/js'));
});
gulp.task('default', ['jade', 'sass', 'images', 'script']);
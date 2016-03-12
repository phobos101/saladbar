'use strict';

const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    pleeease = require('gulp-pleeease'),
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer'),
    del = require('del'),
    babel = require('gulp-babel'),
    preprocess = require('gulp-preprocess'),
    watch = require('gulp-watch'),
    SOURCE = './src/',
    DEST = './build/'

gulp.task('clean', () => {
    del([DEST + '*']);
});

gulp.task('html', () => {
  return gulp.src(SOURCE + '*.html')
    .pipe(watch([SOURCE + '*.html', SOURCE + 'partials/**/*']))
    .pipe(preprocess({context: { NODE_ENV: 'production', DEBUG: true}}))
    .pipe(gulp.dest(DEST))
});

gulp.task('images', () => {
    return gulp.src(SOURCE + 'images/*')
        .pipe(watch(SOURCE + 'images/*'))
        .pipe(newer(DEST + 'assets/images')) // only process images once
        .pipe(imagemin())
        .pipe(gulp.dest(DEST + 'assets/images'));
});

gulp.task('sass', () => {
    let css = {
        in: SOURCE + 'scss/base.scss',
        out: DEST + 'css',
        options: {
            outputStyle: 'nested',
            imagePath: '../images',
            precision: 3,
            errLogToConsole: true
        },
        please: {
            autoprexixer: {browsers: ['last 2 versions', '> 2%']},
            rem: ['16px'],
            pseudoElements: true,
            mqpacker: true
        }
    };
    return gulp.src(css.in)
        .pipe(watch(css.in))
        .pipe(sass(css.options))
        .pipe(pleeease(css.please))
        .pipe(gulp.dest(css.out));
});

gulp.task('js', () => {
    let js = {
        in: SOURCE + 'js/**/*.js',
        out: DEST + 'js'
    };
	return gulp.src(js.in)
        .pipe(watch(js.in))
        .pipe(newer(js.out))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(js.out));
});

gulp.task('libs', () => {
	return gulp.src(SOURCE + 'lib/**/*')
		.pipe(gulp.dest(DEST + 'lib/js/'));
});

gulp.task('default', ['html', 'sass', 'js', 'libs', 'images']);

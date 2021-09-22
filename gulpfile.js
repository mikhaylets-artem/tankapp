const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
// const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean-css');

gulp.task('styles', () => {
  return gulp
    .src('styles/scss/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(clean())
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('styles/css/'));
});

gulp.task('clean', () => {
  return del(['styles/css/main.css']);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
  gulp.watch('styles/scss/*.scss', (done) => {
    gulp.series(['clean', 'styles'])(done);
  });
});
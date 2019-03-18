const gulp = require('gulp');
const source = require('vinyl-source-stream');
const del = require('del');

const ts = require('gulp-typescript');
const tsProject = ts.createProject("tsconfig.json");
const browserify = require('browserify');
const browserifycss = require('browserify-css');

gulp.task('clean',() => {
  return del('dist/**',{force : true});
});

gulp.task('tsc',() => {
  return tsProject.src()
    .pipe(tsProject()).js
    .pipe(gulp.dest('dist'));
});

gulp.task('copy',() => {
  return gulp.src(['src/**/*','!src/**/*.ts'],{root:'src'})
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify',() => {
  return browserify({ entries : 'dist/index.js', debug : true, transform : [browserifycss] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('www'));
});

gulp.task('build',gulp.series('clean',gulp.parallel('tsc','copy'),'browserify','clean'));

gulp.task('watch',() => {
  gulp.watch('src/**/*',gulp.series('build'));
});
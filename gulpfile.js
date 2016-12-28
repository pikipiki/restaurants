var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    babel      = require('gulp-babel')
    jsFiles    = [
      'src/app/**/*.module.js',
      'src/app/**/*.js'
    ],
    jsDest     = 'dist/js'

gulp.task('scripts', function() {
  return gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsDest))
})

gulp.watch(jsFiles, ['scripts'])
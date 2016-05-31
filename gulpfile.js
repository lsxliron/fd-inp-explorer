var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps')

var production = process.env.NODE_ENV == 'production';

var dependencies = [
    'alt',
    'react',
    'react-dom'
];

/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */

 gulp.task('vendor', function(){
    return gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/Materialize/dist/js/materialize.js',
    // 'bower_components/toastr/toastr.js'
    ]).pipe(concat('vendor.js'))
      .pipe(gulpif(production, uglify({ mangle:false })))
      .pipe(gulp.dest('app/js'));
 });

 /*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */

 gulp.task('browserify-vendor', function() {
  return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
    .pipe(gulp.dest('app/js'));
});



/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', ['browserify-vendor'], function() {
  return browserify({ entries: 'app/main.js', debug: true })
    .external(dependencies)
    .transform(babelify, { presets: ['es2015', 'react'] })
    .pipe(streamify(sourcemaps.init({ loadMaps: true })))
    .bundle()
    .pipe(sourcemaps.write('.'))
    .pipe(source('bundle.js'))
    .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
    .pipe(streamify(sourcemaps.write('.')))
    .pipe(gulp.dest('app/js'));
});

/*
 |--------------------------------------------------------------------------
 | Same as browserify task, but will also watch for changes and re-compile.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-watch', ['browserify-vendor'], function() {
  var bundler = watchify(browserify({ entries: 'app/main.js', debug: true }, watchify.args));
  bundler.external(dependencies);
  bundler.transform(babelify, { presets: ['es2015', 'react'] })
  bundler.on('update', rebundle);
  return rebundle();

  function rebundle() {
    var start = Date.now();
    return bundler.bundle()
      .on('error', function(err) {
        gutil.log(gutil.colors.red(err.toString()));
      })
      .on('end', function() {
        gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
      })
      .pipe(source('bundle.js'))
      .pipe(streamify(sourcemaps.init({ loadMaps: true })))
      .pipe(streamify(sourcemaps.write('.')))
      .pipe(gulp.dest('app/js/'));
  }
});

/*
 |--------------------------------------------------------------------------
 | Compile SASS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function() {
  return gulp.src(['app/styles/styles.scss', 'bower_components/Materialize/dist/css/materialize.min.css'])
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    // .pipe(gulpif(production, cssmin()))
    .pipe(cssmin())
    .pipe(gulp.dest('app/styles'));
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['styles', 'vendor', 'browserify']);
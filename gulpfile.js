var gulp = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var del = require('del');
var changed = require('gulp-changed');
var sourceMaps = require('gulp-sourcemaps');
var order = require('gulp-order');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var stylish = require('jshint-stylish');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var plumber = require('gulp-plumber');
var base64 = require('gulp-base64');
var runSequence = require('run-sequence');
var size = require('gulp-size');
var print = require('gulp-print');
var minifycss = require('gulp-minify-css');
var githubPages = require('gulp-gh-pages');
var indexer = require('./lunr_index_builder.js');
var fs = require('fs');


gulp.task('default', ['watch']);

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  //Watch fonts files
  var fontFiles = 'app/_assets/fonts/**/*';
  gulp.watch(fontFiles, ['fonts']);

  // Watch image files
  var imageFiles = 'app/_assets/img/**/*';
  gulp.watch(imageFiles, ['images']);

  // Watch .scss files
  var sassFiles = 'app/_assets/scss/**/*.{sass,scss}';
  gulp.watch(sassFiles, ['sass', 'scsslint']);

  // Watch .js files
  var jsFiles = 'app/_assets/js/**/*.js';
  gulp.watch(jsFiles, ['scripts', 'jshint']);

  // Watch (jekyll files) .html files and posts
  var jekyllFiles = [
      "_config.yml",
      "_config.build.yml",
      "app/_data/**/*.{json,yml,csv}",
      "app/_includes/**/*.{html,xml}",
      "app/_layouts/*.html",
      "app/_locales/*.yml",
      "app/_plugins/*.rb",
      "app/_posts/*.{markdown,md}",
      "app/**/*.{html,markdown,md,yml,json,txt,xml}",
      "app/json/**/*.json",
      "app/*"
  ];
  gulp.watch(jekyllFiles, ['jekyll-rebuild']);

});

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', ['build'], function() {
  var config = {
        server: {
          baseDir: ['build/development', 'build', 'app']
        },
        port: 9999,
        files: [
          'build/assets/css/*.css',
          'build/assets/js/*.js',
          'build/assets/images/**',
        ]
      };
  browserSync(config);
});

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence('delete',
  [
    'jekyll-tasks',
    'sass',
    'scripts',
    'images',
    'fonts'
  ],
  [
    'jshint',
    'scsslint'
  ],
  callback);
});

/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
  del('build/assets', callback);
});

/**
 * Create lunr index
 */
gulp.task('index', function(callback){
  indexer('build/development/json/all_posts.json','build/development/json/all_index.json', callback);
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll', function(done) {
  browserSync.notify('Compiling Jekyll');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=app', '--destination=build/development', '--config=_config.yml,_config_dev.yml'], { stdio: 'inherit' })
  .on('close', done);
});

/**
 * It executes jekyll and than all tasks dependent on jekyll
 */
 gulp.task('jekyll-tasks', function(callback){
   runSequence(
     'jekyll', 'index',
   callback);
 });


gulp.task('jekyll-rebuild', ['jekyll-tasks'], function() {
  browserSync.reload();
});


/**
 * Minimise javascripts, generate sourcemaps
 */
gulp.task('scripts', function(callback) {
  runSequence(
  [
    'header:scripts',
    'footer:scripts'
  ],
  callback);
});

gulp.task('header:scripts', function() {
   browserSync.notify('Minimising header scripts and generating sourcemaps...');
   //header scripts
   var jsFiles = [
     'app/bower_components/modernizr/modernizr.js'
   ];
   return gulp.src(jsFiles)
     .pipe(order(jsFiles, {"base": "."}))
     .pipe(sourceMaps.init())
     .pipe(concat('inchmeal_head.js'))
     .pipe(sourceMaps.write('.'))
     .pipe(gulp.dest('build/assets/js'))
     //.pipe(notify({ message: 'Header scripts task complete' }));
 });

gulp.task('footer:scripts', function() {
  browserSync.notify('Minimising footer scripts and generating sourcemaps...');
  //footer scripts
  var jsFiles = [
    "app/bower_components/jquery/dist/jquery.js",
    "app/bower_components/fastclick/lib/fastclick.js",
    "app/bower_components/foundation/js/foundation/foundation.js",
    "app/bower_components/foundation/js/foundation/foundation.clearing.js",
    "app/bower_components/foundation/js/foundation/foundation.equalizer.js",
    "app/bower_components/foundation/js/foundation/foundation.topbar.js",
    "app/bower_components/jquery-backstretch/jquery.backstretch.js",
    "app/bower_components/microplugin/src/microplugin.js",
    "app/bower_components/sifter/sifter.js",
    "app/bower_components/selectize/dist/js/selectize.js",
    "app/bower_components/underscore/underscore.js",
    "app/bower_components/backbone/backbone.js",
    "node_modules/lunr/lunr.js",
    "app/_assets/js/*.js"
  ];
  return gulp.src(jsFiles)
    .pipe(order(jsFiles, {"base": "."}))
    .pipe(sourceMaps.init())
    .pipe(concat('inchmeal_all.js'))
    //.pipe(uglify())  //not required for dev
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('build/assets/js'))
});

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('jshint', function() {
  return gulp.src('app/_assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

/**
 * Copy images to build folder
 * if changed
 */
gulp.task('images', function() {
  browserSync.notify('Copying images..');

  return gulp.src('app/_assets/img/**/*')
    .pipe(changed('build/assets/img')) // Ignore unchanged files
    .pipe(gulp.dest('build/assets/img'))
    .pipe(size())
});

/**
 * Copy fonts to build folder
 * if changed
 */
gulp.task('fonts', function() {
  browserSync.notify('Copying fonts..');

  return gulp.src('app/_assets/fonts/**/*')
    .pipe(changed('build/assets/fonts')) // Ignore unchanged files
    .pipe(gulp.dest('build/assets/fonts'))
    .pipe(size())
});

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  browserSync.notify('Compiling Sass');

  var includePaths = [
    'app/bower_components/foundation/scss/foundation/components',
    'app/bower_components/foundation/scss/foundation',
    'app/_assets/scss'
  ];

  return gulp.src('app/_assets/scss/*.scss')
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass({'includePaths': includePaths}))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('build/assets/css'))
});

/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */
gulp.task('scsslint', function(callback) {
  callback();
  /*
  browserSync.notify('TODO. Ignoring scsslint.');

  var scssFiles = [
      'app/_assets/scss/*.{sass,scss}',
      '!app/_assets/scss/_selectize-link.scss'
  ]

  return gulp.src(scssFiles)
    .pipe(scsslint({'bundleExec': true}));
  */
});

/**************************************************************************
 *
 * Below sections contains code for building for production
 *
 **************************************************************************
*/

/**
 * Run task browsersync:production
 */
gulp.task('publish', ['browsersync:production']);


gulp.task('browsersync:production', ['build:production'], function() {
  var config = {
        server: {
          baseDir: ['build/production']
        },
        port: 8888,
  };
  browserSync(config);
});

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete',
  [
    'jekyll-tasks:production',
    'sass',
    'scripts',
    'images',
    'fonts'
  ],
  [
    'css:production',
    'js:production',
    'images:production',
    'fonts:production'
  ],
  callback);
});

/**
 * Build jekyll in production folder
*/
gulp.task('jekyll:production', function(done) {
  browserSync.notify('Compiling Jekyll (Production)');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=app', '--destination=build/production', '--config=_config.yml'], { stdio: 'inherit' })
  .on('close', done);
});

/**
 * Copy js files from dev to production folder and minimise js
 */
gulp.task('js:production', function() {
  browserSync.notify('Copying js files and Uglifying (Production)..');

  return gulp.src('build/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/production/assets/js'))
    .pipe(size());
});

/**
 * Copy css files from dev to production folder and minimise css
 */
gulp.task('css:production', function() {
  browserSync.notify('Copying css files and Minimising (Production)..');

  return gulp.src('build/assets/css/*.css')
    .pipe(minifycss({"keepSpecialComments": 0}))
    .pipe(gulp.dest('build/production/assets/css'))
    .pipe(size());
});

gulp.task('images:production', function() {
  browserSync.notify('Copying images (Production)..');

  return gulp.src('build/assets/img/**/*.{jpg,jpeg,png,gif}')
    .pipe(gulp.dest('build/production/assets/img'))
    .pipe(size())
});

gulp.task('fonts:production', function() {
  browserSync.notify('Copying fonts (Production)..');

  return gulp.src('build/assets/fonts/**/*')
    .pipe(gulp.dest('build/production/assets/fonts'))
    .pipe(size())
});

gulp.task('index:production', function(callback){
  indexer('build/production/json/all_posts.json','build/production/json/all_index.json', callback);
});

/**
 * It executes jekyll and than all tasks dependent on jekyll
 */
 gulp.task('jekyll-tasks:production', function(callback){
   runSequence(
     'jekyll:production', 'index:production',
   callback);
 });

/*******************************************************************************
 *
 * Code for deployment to github-pages
 *
 *******************************************************************************
 */

 gulp.task('deploy', ['build:production'], function(){
   gulp.src('app/.nojekyll')
   .pipe(gulp.dest('build/production'));

   var options = {
     "remoteUrl": "https://github.com/inchmeal/inchmeal.github.io",
     "branch": "master"
   }

   return gulp.src('build/production/**/*')
      .pipe(githubPages(options));
 });

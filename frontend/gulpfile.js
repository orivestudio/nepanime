;(function () {
  'use strict';
  var gulp = require('gulp');
  var source = require('vinyl-source-stream');
  var gulpif = require('gulp-if');
  var notify = require('gulp-notify');
  var uglify = require('gulp-uglify');
  var gutil = require('gulp-util');

  var inject = require('gulp-inject');
  var imagemin = require('gulp-imagemin');
  var iconfont = require('gulp-iconfont');
  var cssnano = require('gulp-cssnano');
  var concat = require('gulp-concat');
  var htmlreplace = require('gulp-html-replace');

  //webpack essentials
  var webpack = require('webpack');
  var webpackStream = require('webpack-stream');
  var webpackConfig = require('./webpack.config.js');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');

  //server components
  var browserSync = require('browser-sync');
  var historyApiFallback = require('connect-history-api-fallback');

  //variable declaration
  var bundler = webpack(webpackConfig);
  var url = require('url');

  var config = {
    paths: {
      src: {
        js: './src/js/**/*.js*',
        css: [
          './src/css/materialize.min.css',
          './src/css/font-awesome.css',
          './src/css/glyphicons.css',
          './src/css/fontface.css',
          './src/css/custom.css'
        ],
        img: ['./src/img/*', './src/img/**/*'],
        fonts: ['./src/css/fonts/*', './src/css/fonts/**/*'],
        materializeFonts: ['./src/css/fonts/roboto'],
        vendorJs: [
          'node_modules/jquery/dist/jquery.min.js',
          './src/vendorjs/materialize.js'
        ]
      },
      dist: {
        js: './dist/js',
        css: './dist/css',
        img: './dist/img',
        fonts: './dist/css/fonts',
        materializeFonts: './dist/fonts'
      },
      appJs: './src/js/app.js',
      html: './index.html'
    },
    env: {
      development: 'development'
    }
  };

  //environment
  var env = process.env.NODE_ENV || config.env.development;
  var isProduction = process.env.NODE_ENV === 'production';

  //Styles task
  gulp.task('styles', function () {
    gulp.src(config.paths.src.css)
      .pipe(concat('nepanime.css'))
      .pipe(gulpif(isProduction, cssnano()).on('error', gutil.log))
      .pipe(gulp.dest(config.paths.dist.css));
  });

  //Scripts task using webpack
  gulp.task('scripts', function () {
    return gulp.src(config.paths.appJs)
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest(config.paths.dist.js))
      .pipe(gulpif(isProduction, uglify()).on('error', gutil.log))
      .pipe(gulpif(!isProduction, notify('Scripts compiled')));
  });

  /*
   Browser Sync
   */
  gulp.task('browser-sync', function () {
    var proxy = require('proxy-middleware');
    var proxyOptions = url.parse('http://localhost:8080/nepanime');
    proxyOptions.route = '/nepanime';
    browserSync({
      server: {
        baseDir: 'dist',
        middleware: [
          historyApiFallback(),
          proxy(proxyOptions),
          webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {colors: true}
          }),
          webpackHotMiddleware(bundler)
        ]
      },
      ghostMode: false
    })
  });

  //Images task
  gulp.task('images', function () {
    gulp.src(config.paths.src.img)
      .pipe(gulpif(isProduction, imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
        ]
      })))
      .pipe(gulp.dest(config.paths.dist.img));
  });

  gulp.task('vendorJs', function () {
    // Compiles CSS
    gulp.src(config.paths.src.vendorJs)
      .pipe(concat('vendor.min.js'))
      .pipe(gulp.dest(config.paths.dist.js))
  });


  gulp.task('fonts', function () {
    return gulp.src(config.paths.src.fonts)
      .pipe(iconfont({
        fontName: 'myfont',
        prependUnicode: true,
        formats: ['ttf', 'eot']
      }))
      .pipe(gulp.dest(config.paths.dist.fonts));
  });

  gulp.task('materializeFonts', function () {
    return gulp.src(config.paths.src.materializeFonts)
      .pipe(iconfont({
        fontName: 'myfont',
        prependUnicode: true,
        formats: ['ttf', 'eot']
      }))
      .pipe(gulp.dest(config.paths.dist.materializeFonts));
  });

  gulp.task('html', ['scripts', 'styles', 'vendorJs'], function () {
    var sources = gulp.src(['./dist/js/vendor.min.js', './dist/js/bundle.js', './dist/css/nepanime.css'], {read: false});
    gulp.src('./index.html')
      .pipe(inject(sources, {
        ignorePath: 'dist',
        addRootSlash: false
      }))
      .pipe(htmlreplace({
        'base': '<base href=\"' + '/' + '\">'
      }))
      .pipe(gulp.dest('./dist'))
  });


  gulp.task('watch', function () {
    gulp.watch(config.paths.src.css, ['styles']); // gulp watch for css changes
    gulp.watch(config.paths.src.js, ['scripts']); // gulp watch for js changes
    gulp.watch(config.paths.src.img, ['images']); // gulp watch for js changes
    gulp.watch(config.paths.src.fonts, ['fonts']); // gulp watch for js changes
    gulp.watch(config.paths.src.materializeFonts, ['materializeFonts']); // gulp watch for js changes
  });

  gulp.task('default', [
      'styles',
      'scripts',
      'vendorJs',
      'browser-sync',
      'images',
      'fonts',
      'materializeFonts',
      'watch',
      'html'
    ]
  );

  gulp.task('build', [
    'styles',
    'scripts',
    'vendorJs',
    'images',
    'fonts',
    'materializeFonts',
    'html'
  ]);

})();
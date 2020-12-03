let gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    svgstore = require('gulp-svgstore'),
    posthtml = require('gulp-posthtml'),
    include = require('posthtml-include'),
    del = require('del'),
    ghPages = require('gulp-gh-pages');

gulp.task('clean', async function(){
  del.sync('build')
})

gulp.task('copy', function () {
  return gulp.src([
    'app/fonts/**/*.{woff,ttf}',
    'app/img/**',
    'app/js/sorting.js',
    'app/*.ico',
  ], {
    base: 'app'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('css', function() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/normalize.css/normalize.css',
    'node_modules/animate.css/animate.css',
    'app/css/jquery.formstyler.css',
    'app/css/jquery.formstyler.theme.css',
    'app/css/ion.rangeSlider.min.css',
    'app/css/jquery.rateyo.min.css'
  ])
    .pipe(concat('libs.scss'))
    .pipe(gulp.dest('app/scss'))
});

gulp.task('scss', function () {
  return gulp.src([
    'app/scss/libs.scss',
    'app/scss/style.scss'
  ])
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 6 versions'],
    cascade: false
  }))
  .pipe(csso())
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('build/css'))
  .pipe(browserSync.reload({stream: true}))
});


gulp.task('html', function () {
  return gulp.src('app/*.html')
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest('build'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function () {
  return gulp.src('app/js/_*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function () {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'app/js/ion.rangeSlider.min.js',
    'app/js/jquery.rateyo.min.js',
    'app/js/jquery.formstyler.min.js',
    'app/js/wow.min.js',
    'node_modules/picturefill/dist/picturefill.min.js',
    'app/js/svg4everybody.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('images', function () {
  return gulp.src("app/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({quality: 65, progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('webp', function () {
  return gulp.src('app/img/**/*.{png,jpg}')
    .pipe(webp({quality: 55}))
    .pipe(gulp.dest('app/img'));
});

gulp.task('sprite', function () {
  return gulp.src('app/img/icon-*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'))
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "build/"
      },
      notify: false,
      open: true,
  });

  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/img/icon-*.svg', gulp.series('sprite', 'html', 'refresh'));
  gulp.watch('app/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', gulp.series('js', 'script'));
});

gulp.task('refresh', function (done) {
  browserSync.reload();
  done();
});

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'css',
  'scss',
  'js',
  'script',
  'webp',
  'images',
  'sprite',
  'html'
));

gulp.task('default', gulp.series('build', 'browser-sync'));

import gulp from 'gulp';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel.js';
import browserSync, {reload} from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import gutil from 'gulp-util';

const paths = {
  srcJs: 'src/**/*.js?(x)',
  entry: 'src/js/main.js',
  distDir: 'dist/js',
  webpackFile: 'webpack.config.babel.js'
}

gulp.task('server', () => {
  browserSync({
    server: {
      baseDir: './dist',
      middleware: [ historyApiFallback() ]
    },
    ghostMode: false
  });
});

gulp.task('compile', () => {
  gulp.src(paths.entry)
    .pipe(webpack(webpackConfig)
      .on('error', gutil.log))
    .pipe(gulp.dest(paths.distDir))
    .pipe(reload({stream:true}));
});

gulp.task('watch', () => {
  gulp.watch(paths.srcJs, ['compile']);
});

gulp.task('default', ['watch', 'compile', 'server']);

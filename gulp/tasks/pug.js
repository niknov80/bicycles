import gulppug from 'gulp-pug';
import pugLinter from 'gulp-pug-linter';

export const pug = () => app.gulp.src(app.path.src.pug)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'PUG',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(pugLinter({ reporter: 'default' }))
  .pipe(gulppug({
    pretty: true
  }))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream());

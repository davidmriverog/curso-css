/*
* Dependencias generales
*/
var gulp       =  require('gulp'),
    cssmin     =  require('gulp-cssmin'),
    concat     =  require('gulp-concat'),
    concatCss  =  require('gulp-concat-css'),
    rename     =  require('gulp-rename'),
    livereload =  require('gulp-livereload');

// Inicializador de tareas

gulp.task('cssconcat',function(){
 return gulp.src('src/css/**/*.css')
    .pipe(concatCss("theme.css"))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

// esta tarea permite mirar los cambios en el fichero src/ de desarrollo
// para luego desplegarlos en produccion cada vez que guardes un cambios
// de manera automatizada. xD....
gulp.task('watch',function(){
  // automatizacion de los css
  livereload.listen();

  gulp.watch('src/css/**/*.css',['cssconcat']);
  gulp.watch('*.html',['html']);
});


// iniciamos nuestro gestor automatico de tareas multiples.
gulp.task('default',['cssconcat','html','watch']);

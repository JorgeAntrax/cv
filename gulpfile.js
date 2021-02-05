const gulp        = require('gulp');
const browserSync = require('browser-sync');
const br = browserSync.create();
const sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ()=>{
    br.init({
        server: "./"
    });
});

gulp.task('watch', () => {
    gulp.watch('style.scss', gulp.series('sass'));
    gulp.watch("*.html").on('change', br.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src("./*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./build/css"))
        .pipe(br.stream());
});

gulp.task('default', gulp.parallel('watch','serve'));
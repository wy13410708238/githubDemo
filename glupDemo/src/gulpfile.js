var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass',function(){
    return gulp.src('scss/*.scss').pipe(sass()).pipe(concat('css'));
    //console.log("ok");
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});
// 預設工作
gulp.task('default', ['sass']);
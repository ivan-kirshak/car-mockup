const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');

function html() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest('build'));
}

gulp.task('minify', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('build/css'));
});

function images() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
}

gulp.task("uglify", function () {
    return gulp.src("src/js/*.js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("build/js"));
});

exports.html = html;
exports.images = images;
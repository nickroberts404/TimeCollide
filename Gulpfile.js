// Gulpfile.js

var gulp 		= require('gulp');
var browserify 	= require('browserify');
var source 		= require('vinyl-source-stream');
var buffer		= require('vinyl-buffer');
var babel 		= require('babelify');
var chalk 		= require('chalk');

// This task compiles sass into css.
// gulp.task('styles', ()=> {
// 	return gulp.src('./src/css/main.scss')
// 		.pipe(sass())
// 		.on('error', handleError)
// 		.pipe(gulp.dest('./dist'));
// });

// This task bundles our scripts using browserify.
gulp.task('scripts', ()=> {
	return browserify('./src/js/index.js')
		.transform(babel, {presets: [ "react", "es2015"]})
		.bundle()
		.on('error', handleError)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist'));
});

function handleError(err) {
	console.log(chalk.red(`Error file ${err.filename}`));
	console.log(err.codeFrame);
	this.emit('end');
}

// This task keeps an eye on our source files and rebuilds them when they change.
gulp.task('watch', ()=> {
	// gulp.watch('./src/css/**/*.scss', 	['styles']);
	gulp.watch('./src/js/**/*.js', 		['scripts']);
})

// gulp.task('default', ['scripts', 'styles', 'watch']);
gulp.task('default', ['scripts', 'watch']);
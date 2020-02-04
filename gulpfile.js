var gulp = require("gulp"),
	sass = require("gulp-ruby-sass"),
	plumber = require("gulp-plumber");
	
gulp.task("default", function(){
	
	
		return sass("style.scss").on("error",sass.logError).pipe(gulp.dest("css/"));
	
});
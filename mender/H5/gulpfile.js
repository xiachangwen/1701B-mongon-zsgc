const gulp = require("gulp");
const saser = require("gulp-sass");
const minjs = require("gulp-uglify");
const mincss = require("gulp-minify-css");
const servert = require("gulp-webserver");

gulp.task("webserve", () => {
	return gulp.src("./src/")
			.pipe(servert({
				open:true,
				port:8090,
				livereload:true,
				proxies:[{
					source:"/api/findUsr",target:"http://localhost:3000/api/findUsr"
				}]
			}))
})
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {},
			dist: {
				src: [
					"web/js/libs/angular.min.js",
					"web/js/libs/d3.js",
					"web/js/libs/angular-resource.js",
					"web/js/libs/angular-route.js",
					"web/js/libs/angular-sanitize.js",
					"web/js/libs/angular-animate.js",
					"web/js/libs/better_resource.js",
					/*"web/js/libs/buzz.min.js", */
					"web/js/mvc/main_module.js",
					"web/js/mvc/services.js",
					"web/js/mvc/controllers.js",
					"web/js/mvc/directives.js"
				],
				dest: "web/js/coach.js"
			}
		},
		uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'web/js/coach.min.js': ['<%= concat.dist.dest %>']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);

	console.log("lol");
};
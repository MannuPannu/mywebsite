module.exports = function(grunt) {
		
	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			copy: {
				main: {
					files: 
						[
							{ expand:true, src: ['app/**/*'], dest: 'prod/'},
							{ expand:true, src: ['backend/**/*'], dest: 'prod/'},
							{ expand:true, src: ['server.js'], dest: 'prod/'},
							{ expand:true, src: ['node_modules/**/*'], dest: 'prod/'},
							{ expand:true, src: ['bower_components/**/*'], dest: 'prod/'},
						],
				},
			},
			requirejs: {
					compile: {
								 options: {
								    appDir: "app/",
									baseUrl: ".",
									dir: "prod/app/",
									mainConfigFile: 'app/scripts/main.js',
									findNestedDependencies: true,
									inlineText: true,
									optimize: 'uglify',
									uglify: {
										mangle: true
									}
								  }
							 }
			}
	});

	grunt.loadNpmTasks('grunt-annotated-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy', 'requirejs']);
};

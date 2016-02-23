module.exports = function(grunt) {
	
	grunt.initConfig({
		
		 pkg: grunt.file.readJSON('package.json'),
		 
		 concat : {
			 webqq2 : {
				 files : {
					 'dist/main.js' : ['main.js','drag.js','scale.js','range.js']
				 }
			 }
		 },
		 uglify : {
			 webqq2 : {
				 files : {
					 'dist/main.min.js' : ['dist/main.js']
 				 }
			 }
		 }
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');

  	grunt.loadNpmTasks('grunt-contrib-uglify');

  	grunt.registerTask('default', ['concat','uglify']);
	
};
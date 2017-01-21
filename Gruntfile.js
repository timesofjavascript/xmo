module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: [{
                    src: [
                        'www/**/public/js/**/*.js'],
                    dest: 'public/js/xmo.js'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: [{
                    src: 'public/js/xmo.js',
                    dest: 'public/js/xmo.min.js'
                }]
            }
        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'public/css/sass',
                    cssDir: 'public/css/generated'
                }
            }
        },
        cssmin: {
            dist: {
                files: [{
                    'public/css/main.min.css': 'public/css/main.css'
                }]
            }
        }
    });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'compass']);
  
};

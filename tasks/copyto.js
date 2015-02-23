'use strict';


module.exports = function copyto(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-copy-to');

    // Options
    return {
        build: {
            files: [{
                cwd: 'public',
                expand: true,
                src: ['**/*'],
                dest: '.build/'
            }],
            options: {
                ignore: [
                    'public/css/**/*',
                    'public/js/**/*',
                    'public/templates/**/*'
                ]
            }
        }
    };
};

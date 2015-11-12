'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        balmung: {
            options: {
            },
            dist: {
                config: {
                    src: 'src/images',
                    dst: 'build/images',
                    settings: {
                        optipng: { level: 7 },
                        pngquant: {
                            color: 256,
                            speed: 1
                        }
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-balmung');
    grunt.registerTask('default', ['balmung']);

};
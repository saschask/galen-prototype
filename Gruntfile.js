module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            build: ['build/']
        },
        copy: {
            html: {
                expand: true,
                cwd: 'source/',
                src: ['*.html'],
                dest: 'build/'
            },
            css: {
                expand: true,
                cwd: 'source/',
                src: ['css/**/*.css'],
                dest: 'build/'
            },
            img: {
                expand: true,
                cwd: 'source/',
                src: ['img/**/*.*'],
                dest: 'build/'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'build/'
                }
            }
        },
        watch: {
            html: {
                files: ['source/*.html'],
                tasks: ['copy:html'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['source/css/**/*.css'],
                tasks: ['copy:css'],
                options: {
                    livereload: true
                }
            },
            img: {
                files: ['source/img/**/*.*'],
                tasks: ['copy:img'],
                options: {
                    livereload: true
                }
            }
        },
        shell: {
            galenSpec: {
                command:
                'galen check tests/galenframework/spec-*.spec ' +
                '--url "http://localhost:8000" ' +
                '--size "1280x720" ' +
                '--javascript "" ' +
                '--include "" ' +
                '--exclude "" ' +

                '--htmlreport "reports/galenframework/htmlreport/" ' +
                '--testngreport "reports/galenframework/ngreport/" ' +
                '--jsonreport "reports/galenframework/jsonreport/" ' +

                '-Dwebdriver.chrome.driver=tests/galenframework/drivers/selenium-chrome-driver.exe ' +
                '-Dwebdriver.ie.driver=tests/galenframework/drivers/selenium-ie-driver.exe'
            },
            galenSuite: {
                command:
                'galen test tests/galenframework/suite-*.test ' +
                '--parallel-suites 2 ' +

                '--htmlreport "reports/galenframework/htmlreport/" ' +
                '--testngreport "reports/galenframework/ngreport/" ' +
                '--jsonreport "reports/galenframework/jsonreport/" ' +

                '-Dwebdriver.chrome.driver=tests/galenframework/drivers/selenium-chrome-driver.exe ' +
                '-Dwebdriver.ie.driver=tests/galenframework/drivers/selenium-ie-driver.exe'
            }
        }
    });

    grunt.registerTask('build', ['clean', 'copy']);
    grunt.registerTask('start', ['build', 'connect', 'watch']);

    grunt.registerTask('testSpec', ['build', 'connect', 'shell:galenSpec']);
    grunt.registerTask('testSuite', ['build', 'connect', 'shell:galenSuite']);
};
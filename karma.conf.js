/*globals module, config */

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function (config) {
    'use strict';

    config.set({
        basePath         : '',
        frameworks       : ['jasmine'],
        plugins          : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-script-launcher'
        ],
        files            : [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/notify.js',
            'tests/**.js',
        ],
        reporters        : ['progress', 'coverage'],
        preprocessors    : {
            'src/notify.js' : ['coverage']
        },
        coverageReporter : {
            type : 'html',
            dir  : 'tests/coverage/'
        },
        colors           : true,
        exclude          : [
        ],
        port             : 9876,
        logLevel         : config.LOG_INFO,
        browsers         : ['Chrome', 'Firefox'],
        autoWatch        : true,
        singleRun        : true
    });
};
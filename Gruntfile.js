module.exports = function(grunt) {
    /**
     * http://thenittygritty.co/shared-grunt-configuration
     * Load configuration files for Grunt
     * @param  {string} path Path to folder with tasks
     * @return {object}      All options
     */
    var loadConfig = function (path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', { cwd: path }).forEach(function (option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });

        return object;
    };

    var config = {pkg: grunt.file.readJSON('package.json')};
    grunt.util._.extend(config, loadConfig('./tasks/options/'));
    grunt.initConfig(config);

    //Load task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};

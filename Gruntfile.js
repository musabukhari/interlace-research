// Use strict mode helps with some JS issues
'use strict';
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function (grunt) {
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  // Loads the modular grunt configuration from the grunt folder
  require('load-grunt-config')(grunt, {
    data: require('./config/build.conf.js')
  });

  grunt.loadNpmTasks('grunt-include-replace');
  
  grunt.registerTask('test', [
      'clean:server',
      'concurrent:test',
      'autoprefixer',
      'connect:test',
      'karma'
    ]);

  grunt.registerTask('config', function () {
    grunt.log.writeln(JSON.stringify(grunt.config()));
  });
};


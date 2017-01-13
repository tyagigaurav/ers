module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
    wiredep: {
      target: {
        src: 'public/index.html' // point to your HTML file.
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
};
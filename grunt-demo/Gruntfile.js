module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        compress: true
      },
      build: {
        src: 'src/index.js',
        dest: 'build/index.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};
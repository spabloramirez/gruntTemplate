module.exports = {
  build: {
      files: [{
          expand: true,
          cwd: '<%= pkg.path.uglify.src %>',
          src: '**/*.js',
          dest: '<%= pkg.path.uglify.dest %>'
      }]
  }
}
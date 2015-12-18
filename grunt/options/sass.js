module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
        expand: true,
        cwd: '<%= pkg.path.sass.src %>',
        src: ['*.scss'],
        dest: '../public',
        ext: '.css'
    }
  }
}
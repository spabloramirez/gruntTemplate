module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/dist/global.css': 'css/global.scss'
    }
  }
}
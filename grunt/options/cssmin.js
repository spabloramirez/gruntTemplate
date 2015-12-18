module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: '<%= pkg.path.cssmin.src %>',
            src: ['*.css', '!*.min.css'],
            dest: '<%= pkg.path.cssmin.dest %>',
            ext: '.min.css'
        }]
    }
}
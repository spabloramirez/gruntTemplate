module.exports = {
    options: {
        data: {
            message: 'Hello world!'
        }
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= pkg.path.processhtml.src %>',
            src: '*.html',
            dest: '<%= pkg.path.processhtml.dest %>/html'
        }]
    }
}
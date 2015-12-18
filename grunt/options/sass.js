module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= pkg.path.sass.src %>',
            src: ['*.scss', '!includes/*'],
            dest: '<%= pkg.path.sass.dest %>',
            ext: '.css'
        }]
    }
}
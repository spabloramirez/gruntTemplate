module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'css/dist',
            src: ['*.css', '!*.min.css'],
            dest: 'css/dist',
            ext: '.min.css'
        }]
    }
}
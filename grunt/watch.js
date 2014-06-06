module.exports = {
  js: {
    files: ['<%= app_dir %>/scripts/{,*/}*.js'],
    tasks: ['newer:jshint:all'],
    options: {
      livereload: true
    }
  },
  compass: {
    files: ['<%= app_dir %>/styles/*.scss'],
    tasks: ['compass:dev']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.dev %>'
    },
    files: [
      '<%= app_dir %>/{,*/}*.html',
      '.tmp/styles/{,*/}*.css',
      '<%= app_dir %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};

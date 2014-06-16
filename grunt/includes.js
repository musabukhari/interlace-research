module.exports = {
  build: {
        cwd: 'client/src',
        src: [ '*.html', 'pages/*.html' ],
        dest: 'build/',
        options: {
          flatten: true,
          includePath: 'client/views',
          banner: '<!-- Site built using grunt includes! -->\n'
        }
      }
    }

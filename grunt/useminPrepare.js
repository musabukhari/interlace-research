module.exports = {
  dev: {
    src: '<%= src_dir %>/**/index.html',
    options: {
      dest: '<%= build_dir %>/',
      flow: {
        steps: {
          js: ['concat']
        },
        post: {}
      }
    }
  },
  prod: {
    src: '<%= src_dir %>/**/index.hml',
    option: {
      dest: '<%= build_dir %>'
    }
  }
}

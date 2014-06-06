module.exports = {
  options: {
    sassDir: './client/styles',
    cssDir: './.tmp/styles',
    // generatedImagesDir: '.tmp/images/generated',
    // imagesDir: '<%= yeoman.app %>/images',
    // javascriptsDir: '<%= yeoman.app %>/scripts',
    // fontsDir: '<%= yeoman.app %>/styles/fonts',
    importPath: './client/vendor',
    // httpImagesPath: '/images',
    // httpGeneratedImagesPath: '/images/generated',
    // httpFontsPath: '/styles/fonts',
    // relativeAssets: false,
    // assetCacheBuster: false,
    // raw: 'Sass::Script::Number.precision = 10\n'
  },
  dist: {
    options: {
      generatedImagesDir: 'client/images/generated'
    }
  },
  server: {
    options: {
      debugInfo: true
    }
  }
};

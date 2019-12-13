module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        components: '.',
      },
    },
  },
  pages: {
    index: {
      entry: 'src/example/main.js',
      template: 'src/example/public/index.html',
      filename: 'index.html',
      title: 'Vuetify Query Data Table',
    },
  },
}

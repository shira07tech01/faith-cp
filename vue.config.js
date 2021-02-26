module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/src/assets/scss/style.scss";`
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
}
const path = require('path')

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'pl',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/global.scss";'
      }
    }
  }
}

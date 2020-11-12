const { ServiceProvider } = require('@adonisjs/fold')

class DictionaryProvider extends ServiceProvider {
  register () {
    this.app.singleton('Dictionary', () => {
      return new require('axios').create({
        baseURL: 'http://dictionary:8080/',
      })
    })
  }
}

module.exports = DictionaryProvider

const { ServiceProvider } = require('@adonisjs/fold')

class AxiosProvider extends ServiceProvider {
  register () {
    this.app.singleton('Axios', () => {
      return new require('axios').create()
    })
  }
}

module.exports = AxiosProvider

const path = require('path')
const $common = path.join(__dirname, 'src/common')
const $modules = path.join(__dirname, 'src/modules')

module.exports = {
  alias: {
    $components: path.join($common, 'components'),
    $config: path.join($common, 'config'),
    home: path.join($modules, 'home'),

  }
}
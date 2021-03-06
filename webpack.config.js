const path = require('path')
const $common = path.join(__dirname, 'src/common')
const $modules = path.join(__dirname, 'src/modules')

module.exports = {
  publicPath: '/',
  alias: {
    $components: path.join($common, 'components'),
    $config: path.join($common, 'config'),
    $images: path.join($common, 'images'),
    $request: path.join($common, 'request'),
    $utils: path.join($common, 'utils'),
    $home: path.join($modules, 'home'),
  },
  postCssOptions: {
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
      require('postcss-px2rem')({
        remUnit: 100
      })
    ],
  }
}
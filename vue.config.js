const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(process.env.NODE_ENV)
module.exports = {
  lintOnSave: true,
  publicPath: '',
  outputDir: 'docs',
  assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: true,
  parallel: true,
  chainWebpack: (config) => {
    config.devtool('source-map')
    config.resolve.alias.set('src', resolve('@'))
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        BlankLayout: [path.resolve(resolve('./src/layouts/BlankLayout')), 'default']
      })
    ]
  },
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: ' https://www.easy-mock.com/mock/',
    //     changeOrigin: true,
    //     pathRewrite: { '^/api': '5b7a5611f0e3593f36141420' }
    //   }
    // },
    port: 9000,
    disableHostCheck: true
  },
  css: {
    modules: false,
    sourceMap: true
  }
}

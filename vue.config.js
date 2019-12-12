const path = require("path");
const px2rem = require('postcss-px2rem')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/qzp/' : '/',
  outputDir: "dist",
  // indexPath: "demo.html", // 指定生成的 index.html 的输出路径 
  filenameHashing: true, // 文件名hash
  productionSourceMap: false, // 关闭生产环境的 source map
  devServer: {
    port: 8080,
    open: true, // 浏览器自动运行
    https: false, // https服务
    hot: true, // 热更新
    hotOnly: true,
    proxy: {
      '/qzp': {
        target: 'http://utopia.herogame.com',
        changeOrigin: true,
        ws: true, //websocket支持
        // pathRewrite: {
        //   '^/four-years': ''
        // }
      }
    },
  },
  css: { // css 模块
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 100   //基准大小 baseSize，需要和rem.js中相同
          })
        ]
      }
    }
  },
  chainWebpack: config => { // 调整内联文件的大小限制
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
}
const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/qzp/' : '/',
  outputDir: "dist",
  devServer: {
    // contentBase: path.join(__dirname, 'public'), // 根目录
    // host: "localhost",
    port: 8080,
    open: true, // 浏览器自动运行
    https: false, // https服务
    hot: true, // 热更新
    hotOnly: true, 
    // proxy: {
    //   '/qzp': {
    //     target: 'http://utopia.herogame.com',
    //     changeOrigin: true,
    //     ws: true, //websocket支持
    //     // pathRewrite: {
    //     //   '^/four-years': ''
    //     // }
    //     // cookieDomainRewrite: "localhost",
    //     // onProxyRes: function(proxyRes, req, res) {
    //     //   var cookies = proxyRes.headers['set-cookie'];
    //     //   var cookieRegex = /Domain=\.?xxx.com/i; // 返回的cookie中提取domain
    //     //   //修改cookie Path
    //     //   if (cookies) {
    //     //     var newCookie = cookies.map(function(cookie) {
    //     //       if (cookieRegex.test(cookie)) {
    //     //       	// 将domain设置为localhost
    //     //         return cookie.replace(cookieRegex, 'Domain=localhost');
    //     //       }
    //     //       return cookie;
    //     //     });
    //     //     delete proxyRes.headers['set-cookie'];
    //     //     proxyRes.headers['set-cookie'] = newCookie;
    //     //   }
    //     // }
    //   }
    // },
    // chainWebpack: config => { // 调整内联文件的大小限制
    //   config.module
    //     .rule('images')
    //       .use('url-loader')
    //         .loader('url-loader')
    //         .tap(options => Object.assign(options, { limit: 10240 }))
    // }
  }
}
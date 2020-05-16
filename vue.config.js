const webpack = require("webpack");

module.exports = {
  // 設定全域物件
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"],
        moment: "moment"
      })
    ]
  },
  publicPath: "./"
  // devServer: {
  //     proxy: {
  //       '/api': {
  //         target: 'https://louis-chen-webapi.netlify.com/.netlify/functions/server',
  //         pathRewrite: { '^/api': '' }
  //       }
  //     }
  //   }
};

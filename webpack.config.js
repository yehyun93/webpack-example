const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    index : "./source/index.js",
    about : "./source/about.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: '[name]_bundle.js'
  },
  module : {
    rules : [
      {
        test:/\.css$/i,
        use: [
          // 뒤에 있는걸 먼저 실행함
          'style-loader' //css 코드를 웹페이지에 적용해줌
          , 'css-loader' //css 코드를 웹팩에 번들링
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
      filename: './index.html',
      chunks: ['index'] //entry 이름
    }),
    new HtmlWebpackPlugin({
      template: './source/about.html',
      filename: './about.html',
      chunks: ['about'] //entry 이름
    })
  ]
}
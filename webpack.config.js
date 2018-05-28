
const webpack = require('webpack');

module.exports = {
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
    },   
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],     
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      port: 3000,
      hot: true

    }
  };
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = (path = require('path'))
var webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader,
        "css-loader",
        "less-loader"] },
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.HotModuleReplacementPlugin(), new MiniCssExtractPlugin()],
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
}
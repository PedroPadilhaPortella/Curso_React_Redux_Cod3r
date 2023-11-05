const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const modoDev = (process.env.NODE_ENV !== 'production')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: "./public",
    port: 9000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'estilo.css',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCssAssetsWebpackPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', // Adiciona CSS na DOM, injetando a tag <style>
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
}
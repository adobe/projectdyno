const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'tour-guide.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    contentBase: './dist',
    watchContentBase: true,
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader?removeTags=true&removingTags[\'style\']',
      },
    ],
  },
  optimization: {
    minimize: true,
  },
}

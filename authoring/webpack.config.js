const path = require('path')

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'

module.exports = [
  {
    entry: './src/renderer/index.ts',
    mode,
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: [/\.scss$/, /\.css$/],
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'renderer.js',
      path: path.resolve(__dirname, 'packaged'),
    },
  },
  {
    entry: './src/main/index.js',
    mode,
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'packaged'),
    },
  },
  {
    entry: './src/preload/webview.js',
    mode,
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: [/\.scss$/, /\.css$/],
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'webview.js',
      path: path.resolve(__dirname, 'packaged'),
    },
  },
]

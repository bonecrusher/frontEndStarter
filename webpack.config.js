const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/js/vendors.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: "file-loader",
            options: {
                name: "/[name].css",
            },
          },
          {
            loader: "extract-loader",
            options: {
                publicPath: "./public",
            }
          },
          { 
            loader: 'css-loader', 
            options: { 
              importLoaders: 1,
              minimize: true 
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  watch: true
};

module.exports = config;
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');

dotenv.config();

module.exports = {
  entry: {
    main: './src/index.js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    // new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
    })
    // new webpack.DefinePlugin({
    //   'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
    //   'process.env.SECRET': JSON.stringify(process.env.SECRET),
    //   'process.env.FACEBOOK_SHARE_URL': JSON.stringify(process.env.FACEBOOK_SHARE_URL),
    //   'process.env.TWITTER_SHARE_URL': JSON.stringify(process.env.TWITTER_SHARE_URL),
    //   'process.env.FACEBOOK_SHARE_APP_ID': JSON.stringify(process.env.FACEBOOK_SHARE_APP_ID),
    //   'process.env.PUSHER_KEY': JSON.stringify(process.env.PUSHER_KEY)
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js?$|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          'postcss-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  }
};

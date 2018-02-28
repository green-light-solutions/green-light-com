const webpack = require('webpack');
const resolve = require('path').resolve;
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

/*
 * Define source & build directories
 */
const sourceDirectory = resolve(__dirname, 'app');
const buildDirectory = resolve(__dirname, 'dist');

module.exports = (env) => {
  const isProduction = env.production;
  const publicPath = '/';
  const imagesLocation = 'assets/images/';
  const videosLocation = 'assets/video';

  const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: !isProduction,
  });

  return {
    context: sourceDirectory,
    entry: {
      main: './assets/js/app.js',
    },
    output: {
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      path: buildDirectory,
      publicPath,
      pathinfo: !isProduction,
    },
    devtool: isProduction ? '' : 'source-map',
    bail: isProduction,
    resolve: {
      extensions: ['.js'],
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          loaders: ['raw-loader'],
        },
        {
          test: /\.scss$/,
          loaders: extractSass.extract({
            use: [
              // Order matters!!!
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer],
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
            // use style-loader in development
            fallback: 'style-loader',
          }),
        },
        {
          test: /\.(jpg|png|svg|mp4|eot|ttf|gif)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
        {
          // Match woff2 and patterns like .woff?v=1.1.1.
          test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'application/font-woff',
            name: './fonts/[name].[ext]', // Output below ./fonts
            publicPath: '../', // Take the directory into account
          },
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: imagesLocation,
        to: imagesLocation,
      },
      ]),
      new CopyWebpackPlugin([{
        from: videosLocation,
        to: videosLocation,
      },
      ]),

      new ImageminPlugin({
        disable: !isProduction,
        test: `${imagesLocation}/**`,
        optipng: {
          optimizationLevel: 5,
        },
        jpegtran: {
          progressive: true,
        },
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
      }),

      new HtmlWebpackPlugin({
        filename: 'loop.html',
        template: './loop.html',
      }),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Tether: 'tether',
      }),

      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   minChunks: ({resource}) => /node_modules/.test(resource)
      // }),

      extractSass,
    ],
  };
};

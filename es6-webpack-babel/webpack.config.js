const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

/** @returns {import('webpack').Configuration} */
const createConfig = function(_, {mode}) {

  const plugins = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: mode === 'production',
      }
    }),
  ];

  const minimizer = [];

  if (mode === 'production') {
    plugins.push(new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[chunkhash].min.css",
    }));
    minimizer.push(new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }));
    minimizer.push(new OptimizeCSSAssetsPlugin({}));
  }

  return {
    // devtool: false,
    entry: './js/main',
    output: {
      filename: (mode === 'development') ? '[name].js' : '[name].[chunkhash].min.js',
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', {
                    // we need this for tree-shaking so the ES6 Modules are preserved
                    modules: false,
                    targets: {
                      browsers: ['> 1% in FR'] // see browserlist
                    }
                  }],
                ],
              },
            },
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: (mode === 'production') ?  MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ]
        },
      ],
    },
    optimization: {
      minimizer
    }
  };
}

module.exports = createConfig;
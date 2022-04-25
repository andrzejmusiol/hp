/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const pjson = require('./package.json')

const { ModuleFederationPlugin } = webpack.container

module.exports = function config(env) {
  const webpackConfig = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'lib'),
      devtoolNamespace: pjson.name,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', 'mjs'],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'index.css' }),
      new ModuleFederationPlugin({
        name: 'help_fans',
        filename: 'index.js',
        shared: {
          react: {
            requiredVersion: pjson.dependencies.react,
          },
          'react-dom': {
            requiredVersion: pjson.dependencies['react-dom'],
          },
        },
        exposes: {
          './mfModule': './src/index.tsx',
        },
      }),
    ],
    module: {
      rules: [
        { test: /\.[tj]sx?$/, use: ['babel-loader'], exclude: /node_modules/ },
        {
          test: /\.svg$/,
          use: 'url-loader',
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
  }

  if (env && env.profiler) {
    webpackConfig.resolve = {
      ...webpackConfig.resolve,
      alias: {
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      },
    }
    webpackConfig.optimization = {
      minimize: false,
    }
  }

  if (env && env.analyzer) webpackConfig.plugins.push(new BundleAnalyzerPlugin())

  return webpackConfig
}

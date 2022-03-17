const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  const isEnvDevelopment = mode === 'development';
  return {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
      chunkFilename: "[name].chunk.js"
    },
    mode,
    devtool: 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.jpe?g$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 5000
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: 'index.html',
    }),
      new webpack.ProgressPlugin(),
      new BundleAnalyzerPlugin({
        analyzerPort: isEnvDevelopment ? 8887 : 8886
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
    optimization: {
      splitChunks: {
        minSize: 50,
        maxAsyncRequests: 2, // from wherever I come from the max number of async parallel request that i have to make in order to get a chunk completely,
        // this above explanation is not correct because when done with value 3 and only used common component(with lodash)
        // in about and contact then also common gets different chunk even though to get to this chunk I will need total 4 request when done from /home but if done from /about then I would need 3 requests only, hence common component can get its own chunk
        maxInitialRequests: 1, // doubt
        // cacheGroups: {
        //   common: {
        //     name: 'common',
        //     minChunks: 2,
        //     chunks: 'async',
        //     priority: 10,
        //     enforce: true
        //   }
        // }
      }
    }
  };
};

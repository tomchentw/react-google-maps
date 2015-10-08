"use strict";

var Path = require("path");
var webpack = require("webpack");

var FILENAME_FORMAT;
var PRODUCTION_PLUGINS;

if ("production" === process.env.NODE_ENV) {
  FILENAME_FORMAT = "[name]-[chunkhash].js";
  PRODUCTION_PLUGINS = [
    // Same effect as webpack -p
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  // When HMR is enabled, chunkhash cannot be used.
  FILENAME_FORMAT = "[name].js";
  PRODUCTION_PLUGINS = [];
}

module.exports = {
  output: {
    path: Path.resolve(__dirname, "../../public/assets"),
    pathinfo: "production" !== process.env.NODE_ENV,
    publicPath: "assets/",
    filename: FILENAME_FORMAT,
  },
  target: "webworker",
  resolve: {
    alias: {
      "react": Path.resolve(__dirname, "./node_modules/react"),
      "react-dom": Path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  resolveLoader: {
    root: Path.resolve(__dirname, "./node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: "null",
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: "babel",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin("NODE_ENV"),
  ].concat(PRODUCTION_PLUGINS),
};

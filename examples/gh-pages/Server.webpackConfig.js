"use strict";

var Path = require("path");
var webpack = require("webpack");

var PRODUCTION_PLUGINS;

if ("production" === process.env.NODE_ENV) {
  PRODUCTION_PLUGINS = [
    // Safe effect as webpack -p
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  PRODUCTION_PLUGINS = [];
}

var externals = [
  require("./package.json").dependencies,
  require("../../package.json").dependencies,
].reduce(function (acc, dependencies) {
  return acc.concat(
    Object.keys(dependencies)
      .map(function (key) { return new RegExp("^" + key); })
  );
}, []);

module.exports = {
  context: __dirname,
  output: {
    path: Path.resolve(__dirname, "../../public"),
    filename: "[name].js",
    library: true,
    libraryTarget: "commonjs2",
  },
  target: "node",
  externals: externals,
  resolve: {
    alias: {
      "react": Path.resolve(__dirname, "./node_modules/react"),
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
        loader: "babel",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin("NODE_ENV"),
  ].concat(PRODUCTION_PLUGINS),
};

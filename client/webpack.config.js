"use strict";
/**
 * __template__gist__: https://gist.github.com/tomchentw/368a93bb748ad9d576f1#file-webpack-config-js
 */
var Path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    webpackConfig,
 
    IS_PRODUCTION = "production" === process.env.NODE_ENV,
    JSX_LOADER = "jsx-loader?harmony",
    SCSS_LOADER = "style-loader!css-loader?root=../!sass-loader?includePaths[]=" +
        Path.resolve(__dirname, "../bower_components/bootstrap-sass-official/assets/stylesheets");
 
webpackConfig = module.exports = {
  entry: "./client/scripts/index.js",
  output: {
    path: Path.resolve(__dirname, "../public/assets"),
    publicPath: "assets/",
    filename: (IS_PRODUCTION ? "[hash].js" : "bundle.js")
  },
  module: {
    loaders: [
      { test: require.resolve("react/addons"), loader: "expose-loader?React" },
      { test: /\.js(x?)$/, loader: JSX_LOADER },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.scss$/, loader: SCSS_LOADER },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      filename: "../index.html"
    })
  ]
};
 
if (IS_PRODUCTION) {
  webpackConfig.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
}

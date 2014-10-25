var Path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var JSX_LOADER = "jsx-loader?harmony";
var SCSS_LOADER = "style-loader!css-loader?root=../!sass-loader?includePaths[]=" +
        Path.resolve(__dirname, "../bower_components/bootstrap-sass-official/assets/stylesheets");
var IS_PRODUCTION = "production" === process.env.NODE_ENV;

var webpackConfig = module.exports = {
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

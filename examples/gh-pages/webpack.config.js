"use strict";
/**
 * __template__gist__: https://gist.github.com/tomchentw/368a93bb748ad9d576f1#file-webpack-config-js
 */
var Path = require("path"),
    webpack = require("webpack"),
    React = require("react"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    IsomorphicReactPluginFactory = require("isomorphic-react-plugin-factory"),
    isomorphicReactPlugin,
    outputPath = Path.resolve(__dirname, "../../public"),
    clientConfig,
    serverConfig,
    webpackConfigsArray,
    host,

    IS_PRODUCTION = "production" === process.env.NODE_ENV,
    IS_DEVELOPMENT = !IS_PRODUCTION,
    BABEL_LOADER = "babel-loader?stage=1",
    STYLE_LOADER = "style-loader",
    CSS_LOADER = "css-loader?root=../",
    SASS_LOADER = CSS_LOADER + "!sass-loader";

if ("--docker" === process.argv[process.argv.length-1]) {
  host = "0.0.0.0";
} else {
  host = "localhost";
}

isomorphicReactPlugin = new IsomorphicReactPluginFactory({
  serverComponentPath: "../tmp/server.js",
  serverMarkupPath: "../tmp/html.js",
  htmlOutputFilename: "index.html",
});

clientConfig = {
  entry: {
    "assets/client": "./scripts/client.js",
  },
  output: {
    path: outputPath,
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "react": Path.resolve(__dirname, "./node_modules/react"),
      "react-google-maps": Path.resolve(__dirname, "../../src"),
    },
  },
  resolveLoader: {
    root: Path.resolve(__dirname, "./node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: [BABEL_LOADER],
      },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(STYLE_LOADER, SASS_LOADER) },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin("NODE_ENV"),
    new ExtractTextPlugin("[name].css", {
      disable: IS_DEVELOPMENT,
    }),
    isomorphicReactPlugin.clientPlugin,
  ],
};

if (IS_DEVELOPMENT) {
  // http://webpack.github.io/docs/hot-module-replacement-with-webpack.html#tutorial
  Object.keys(clientConfig.entry).forEach(function (key) {
    clientConfig.entry[key] = this.concat(clientConfig.entry[key]);
  }, [
    require.resolve("webpack-dev-server/client/") + "?http://" + host + ":8080",
    "webpack/hot/dev-server"
  ]);

  clientConfig.module.loaders[0].loaders.unshift("react-hot-loader");

  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
} else {
  clientConfig.entry = Object.keys(clientConfig.entry).reduce(function (acc, key) {
    acc[key.replace(/^assets\//, "")] = clientConfig.entry[key];
    return acc;
  }, {});

  clientConfig.output.publicPath = "assets/[hash]/";
  clientConfig.output.path = Path.resolve(outputPath, "./" + clientConfig.output.publicPath);

  clientConfig.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
}

serverConfig = {
  entry: {
    "../tmp/server": "./scripts/server.js",
    "../tmp/html": "./scripts/html.js",
  },
  output: {
    path: outputPath,
    filename: "[name].js",
    library: true,
    libraryTarget: "commonjs2",
  },
  target: "node",
  resolve: {
    alias: {
      "react-google-maps": Path.resolve(__dirname, "../../src"),
    },
  },
  resolveLoader: {
    root: Path.resolve(__dirname, "./node_modules")
  },
  externals: [
    "react", /* use the same library as node runtime */
    "react/addons",
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: BABEL_LOADER,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin("NODE_ENV"),
    isomorphicReactPlugin.serverPlugin,
  ],
};

webpackConfigsArray = [
  clientConfig,
  serverConfig,
];

webpackConfigsArray.devServer = {
  hot: IS_DEVELOPMENT,
  host: host,
  contentBase: "../../public",
};

module.exports = webpackConfigsArray;

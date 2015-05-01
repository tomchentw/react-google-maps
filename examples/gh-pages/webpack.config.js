"use strict";
/**
 * __template__gist__: https://gist.github.com/tomchentw/368a93bb748ad9d576f1#file-webpack-config-js
 */
var Path = require("path"),
    webpack = require("webpack"),
    React = require("react"),
    IsomorphicReactPluginFactory = require("./IsomorphicReactPluginFactory"),
    isomorphicReactPlugin,
    clientConfig,
    serverConfig,
    webpackConfigsArray,

    IS_PRODUCTION = "production" === process.env.NODE_ENV,
    BABEL_LOADER = "babel-loader?stage=1",
    CSS_LOADER = "style-loader!css-loader?root=../",
    SCSS_LOADER = CSS_LOADER + "!sass-loader?" + JSON.stringify({
      includePaths: [
        Path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/stylesheets"),
      ]
    });

isomorphicReactPlugin = new IsomorphicReactPluginFactory({
  serverComponentPath: "tmp/main.js",
  serverMarkupPath: "tmp/html.js",
  htmlOutputPath: "index.html",
});

clientConfig = {
  entry: {
    "assets/main": "./scripts/client.js",
  },
  output: {
    path: Path.resolve(__dirname, "../../public"),
    filename: (IS_PRODUCTION ? "[hash].js" : "[name].js"),
  },
  resolve: {
    alias: {
      "react": Path.resolve(__dirname, "../../node_modules/react"),
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
        loaders: ["react-hot-loader", BABEL_LOADER],
      },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.css$/, loader: CSS_LOADER },
      { test: /\.scss$/, loader: SCSS_LOADER },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    isomorphicReactPlugin.clientPlugin,
  ],
};

if (IS_PRODUCTION) {
  clientConfig.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
} else {
  // http://webpack.github.io/docs/hot-module-replacement-with-webpack.html#tutorial
  Object.keys(clientConfig.entry).forEach(function (key) {
    clientConfig.entry[key] = this.concat(clientConfig.entry[key]);
  }, [
    require.resolve("webpack-dev-server/client/") + "?http://localhost:8080",
    "webpack/hot/dev-server"
  ]);

  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

serverConfig = {
  entry: {
    "tmp/main": "./scripts/server.js",
    "tmp/html": "./scripts/html.js",
  },
  output: {
    path: Path.resolve(__dirname, "../../public"),
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
    isomorphicReactPlugin.serverPlugin,
  ],
};

webpackConfigsArray = [
  clientConfig,
];

if (!IS_PRODUCTION) {
  webpackConfigsArray.push(serverConfig);
}

module.exports = webpackConfigsArray;

import {
  resolve as resolvePath,
} from "path";

import {
  default as webpack,
} from "webpack";

import {
  default as ExtractTextPlugin,
} from "extract-text-webpack-plugin";

let HOST;
let JSX_LOADER_LIST;
let FILENAME_FORMAT;
let PRODUCTION_PLUGINS;

if (process.env.DOCKER_ENV) {
  HOST = `0.0.0.0`;
} else {
  HOST = `localhost`;
}

if (`production` === process.env.NODE_ENV) {
  JSX_LOADER_LIST = [`babel`];
  FILENAME_FORMAT = `[name]-[chunkhash].js`;
  PRODUCTION_PLUGINS = [
    // Same effect as webpack -p
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  // For webpack-dev-server and HMR!!!
  JSX_LOADER_LIST = [`react-hot`, `babel`];
  // When HMR is enabled, chunkhash cannot be used.
  FILENAME_FORMAT = `[name].js`;
  PRODUCTION_PLUGINS = [];
}

export default {
  devServer: {
    port: 8080,
    host: HOST,
    contentBase: resolvePath(__dirname, `../../public`),
    publicPath: `/assets/`,
    hot: true,
    stats: { colors: true },
  },
  output: {
    path: resolvePath(__dirname, `../../public/assets`),
    pathinfo: `production` !== process.env.NODE_ENV,
    publicPath: `assets/`,
    filename: FILENAME_FORMAT,
  },
  resolve: {
    alias: {
      "react": resolvePath(__dirname, `./node_modules/react`),
      "react-dom": resolvePath(__dirname, `./node_modules/react-dom`),
    },
  },
  resolveLoader: {
    root: resolvePath(__dirname, `./node_modules`),
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(`style`, `css!sass`, {
          publicPath: ``,
        }),
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: JSX_LOADER_LIST,
      },
      {
        test: /\.json$/,
        loader: `json`,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(`NODE_ENV`),
    new ExtractTextPlugin(`[name]-[chunkhash].css`, {
      disable: `production` !== process.env.NODE_ENV,
    }),
    ...PRODUCTION_PLUGINS,
  ],
};

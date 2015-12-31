import {
  resolve as resolvePath,
} from "path";

import {
  default as webpack,
} from "webpack";

let FILENAME_FORMAT;
let PRODUCTION_PLUGINS;

if (`production` === process.env.NODE_ENV) {
  FILENAME_FORMAT = `[name]-[chunkhash].js`;
  PRODUCTION_PLUGINS = [
    // Same effect as webpack -p
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  // When HMR is enabled, chunkhash cannot be used.
  FILENAME_FORMAT = `[name].js`;
  PRODUCTION_PLUGINS = [];
}

export default {
  output: {
    path: resolvePath(__dirname, `../../public/assets`),
    pathinfo: `production` !== process.env.NODE_ENV,
    publicPath: `assets/`,
    filename: FILENAME_FORMAT,
  },
  target: `webworker`,
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
        loader: `null`,
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: `babel`,
      },
      {
        test: /\.json$/,
        loader: `json`,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(`NODE_ENV`),
    ...PRODUCTION_PLUGINS,
  ],
};

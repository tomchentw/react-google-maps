import {
  resolve as resolvePath,
} from "path";
import webpack from "webpack";

import {
  dependencies,
} from "./package.json";

let PRODUCTION_PLUGINS;

if (`production` === process.env.NODE_ENV) {
  PRODUCTION_PLUGINS = [
    // Same effect as webpack -p
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];
} else {
  PRODUCTION_PLUGINS = [];
}

const externals = [
  dependencies,
].reduce((acc, nameValuePairs = {}) => ([
  ...acc,
  ...(
    Object
      .keys(nameValuePairs)
      .map(key => new RegExp(`^${key}`))
  ),
]), []);

export default {
  output: {
    path: resolvePath(__dirname, `./public/assets`),
    pathinfo: `production` !== process.env.NODE_ENV,
    filename: `[name].js`,
    libraryTarget: `commonjs2`,
  },
  target: `node`,
  externals,
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
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(`NODE_ENV`),
    ...PRODUCTION_PLUGINS,
  ],
};

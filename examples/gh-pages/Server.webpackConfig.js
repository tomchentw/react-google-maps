import {
  resolve as resolvePath,
} from "path";

import {
  default as webpack,
} from "webpack";

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
  require(`./package.json`).dependencies,
  require(`../../package.json`).dependencies,
].reduce((acc, dependencies = {}) => {
  const regExpList = Object.keys(dependencies)
    .map(key => new RegExp(`^${ key }`));

  return [
    ...acc,
    ...regExpList,
  ];
}, []);

export default {
  output: {
    path: resolvePath(__dirname, `../../public/assets`),
    pathinfo: `production` !== process.env.NODE_ENV,
    filename: `[name].js`,
    libraryTarget: `commonjs2`,
  },
  target: `node`,
  externals,
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

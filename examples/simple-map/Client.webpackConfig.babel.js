import {
  resolve as resolvePath,
} from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

let JSX_LOADER_LIST;
let FILENAME_FORMAT;
let PRODUCTION_PLUGINS;

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
    host: `localhost`,
    contentBase: resolvePath(__dirname, `./public`),
    publicPath: `/assets/`,
    hot: true,
    stats: { colors: true },
  },
  output: {
    path: resolvePath(__dirname, `./public/assets`),
    pathinfo: `production` !== process.env.NODE_ENV,
    publicPath: `assets/`,
    filename: FILENAME_FORMAT,
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

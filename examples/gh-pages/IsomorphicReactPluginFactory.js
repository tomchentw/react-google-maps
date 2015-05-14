"use strict";

var React = require("react");
var evaluate = require("eval-as-module");

var SEPERATOR = "----------------------------------------";// 40 chars

function IsomorphicReactPluginFactory (_options_) {
  var options = _options_ || {};
  this.serverComponentPath = options.serverComponentPath;
  this.serverMarkupPath = options.serverMarkupPath;
  this.htmlOutputFilename = options.htmlOutputFilename;

  if ("string" !== typeof options.htmlDoctype) {
    options.htmlDoctype = "<!DOCTYPE html>";
  }
  this.htmlDoctype = options.htmlDoctype;

  var evaluateOptions = this.evaluateOptions = options.evaluateOptions || {};
  if (false !== evaluateOptions.includeGlobals) {
    evaluateOptions.includeGlobals = true;
  }

  return {
    clientPlugin: new ClientPlugin(this),
    serverPlugin: new ServerPlugin(this),
  };
}

IsomorphicReactPluginFactory.prototype.receivedClientAssets = function (clientAssets) {
  this.clientAssets = clientAssets;
  if (this.serverAssets) {
    this.runCompilation();
  }
}

IsomorphicReactPluginFactory.prototype.receivedServerEmit = function (compilation, done) {
  this.htmlOutputPath = compilation.getPath(this.htmlOutputFilename)
  this.serverAssets = compilation.assets;
  this.done = done;
  if (this.clientAssets) {
    this.runCompilation();
  }
}

IsomorphicReactPluginFactory.prototype.evaluate = function (serverPath, errorMessage) {
  var serverAsset = this.serverAssets[serverPath];
  if (undefined === serverAsset) {
    throw new Error(errorMessage + ": \"" + serverPath + "\"");
  }

  var source = serverAsset.source();
  var includeGlobals = this.evaluateOptions.includeGlobals;

  try {
    return evaluate(source, includeGlobals).exports;
  } catch (error) {
    error.message = serverPath + "\n" + SEPERATOR + SEPERATOR + error.message;
    error.stack = error.stack + "\n" + SEPERATOR + SEPERATOR + source + "\n" + SEPERATOR + SEPERATOR;
    throw error;
  }
}

IsomorphicReactPluginFactory.prototype.runCompilation = function () {
  var error;

  try {
    var ServerComponent = this.evaluate(this.serverComponentPath, "Component for server rendering is missing");
    var componentString = React.renderToString(React.createElement(ServerComponent));

    var MarkupComponent = this.evaluate(this.serverMarkupPath, "Component for markup generation is missing");
    var htmlString = React.renderToStaticMarkup(
      React.createElement(MarkupComponent, {
        componentString: componentString,
        clientAssets: this.clientAssets,
      })
    );

    this.serverAssets[this.htmlOutputPath] = createAssetFromContents(
      this.htmlDoctype + htmlString
    );
   
  } catch (_error_) {
    error = _error_;
  }
  this.done(error);
}

function ClientPlugin (isomorphicReactPluginFactory) {
  this.pluginFactory = isomorphicReactPluginFactory;
}

ClientPlugin.prototype.apply = function (compiler) {
  compiler.plugin("emit", (function (compilation, done) {
    var assets = getAssetsFromCompilation(compilation);

    this.pluginFactory.receivedClientAssets(assets);
    done();
  }).bind(this));
}

function ServerPlugin (isomorphicReactPluginFactory) {
  this.pluginFactory = isomorphicReactPluginFactory;
}

ServerPlugin.prototype.apply = function (compiler) {
  compiler.plugin("emit", (function (compilation, done) {

    this.pluginFactory.receivedServerEmit(compilation, done);
  }).bind(this));
}

module.exports = IsomorphicReactPluginFactory;

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
function getAssetsFromCompilation (compilation) {
  var assets = {};
  var webpackStatsJson = compilation.getStats().toJson();
  for (var chunk in webpackStatsJson.assetsByChunkName) {
    var chunkValue = webpackStatsJson.assetsByChunkName[chunk];

    // Webpack outputs an array for each chunk when using sourcemaps
    if (chunkValue instanceof Array) {
      // Is the main bundle always the first element?
      chunkValue = chunkValue[0];
    }

    assets[chunk] = (webpackStatsJson.publicPath || "") + chunkValue;
  }
  return assets;
}

function createAssetFromContents(contents) {
  return {
    source: function() {
      return contents;
    },
    size: function() {
      return contents.length;
    }
  };
}

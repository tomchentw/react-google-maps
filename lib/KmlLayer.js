"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _constants = require("./constants");

var _enhanceElement = require("./enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global google */
var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  defaultViewport: _propTypes2.default.any,
  options: _propTypes2.default.any,
  metadata: _propTypes2.default.any,
  status: _propTypes2.default.any,
  url: _propTypes2.default.string,
  zIndex: _propTypes2.default.number
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onClick: "click",

  onDefaultViewportChanged: "defaultviewport_changed",

  onStatusChanged: "status_changed"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDefaultViewport: function getDefaultViewport(kmlLayer) {
    return kmlLayer.getDefaultViewport();
  },
  getMetadata: function getMetadata(kmlLayer) {
    return kmlLayer.getMetadata();
  },
  getOptions: function getOptions(kmlLayer) {
    return kmlLayer.getOptions();
  },
  getStatus: function getStatus(kmlLayer) {
    return kmlLayer.getStatus();
  },
  getUrl: function getUrl(kmlLayer) {
    return kmlLayer.getUrl();
  },
  getZIndex: function getZIndex(kmlLayer) {
    return kmlLayer.getZIndex();
  }
};

var controlledPropUpdaterMap = {
  defaultViewport: function defaultViewport(kmlLayer, _defaultViewport) {
    kmlLayer.setDefaultViewport(_defaultViewport);
  },
  metadata: function metadata(kmlLayer, _metadata) {
    kmlLayer.setMetadata(_metadata);
  },
  options: function options(kmlLayer, _options) {
    kmlLayer.setOptions(_options);
  },
  status: function status(kmlLayer, _status) {
    kmlLayer.setStatus(_status);
  },
  url: function url(kmlLayer, _url) {
    kmlLayer.setUrl(_url);
  },
  zIndex: function zIndex(kmlLayer, _zIndex) {
    kmlLayer.setZIndex(_zIndex);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.KML_LAYER];
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "KmlLayer",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    var kmlLayer = new google.maps.KmlLayer((0, _extends3.default)({
      map: this.context[_constants.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, _constants.KML_LAYER, kmlLayer);
  },
  componentWillUnmount: function componentWillUnmount() {
    var kmlLayer = getInstanceFromComponent(this);
    if (kmlLayer) {
      kmlLayer.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});
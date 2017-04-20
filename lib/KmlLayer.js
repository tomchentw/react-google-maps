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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("./constants");

var _enhanceElement = require("./enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  defaultViewport: _react.PropTypes.any,
  metadata: _react.PropTypes.any,
  status: _react.PropTypes.any,
  url: _react.PropTypes.string,
  zIndex: _react.PropTypes.number
}; /* global google */


var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var otherUncontrolledPropTypes = {
  preserveViewport: _react.PropTypes.bool,
  screenOverlays: _react.PropTypes.bool,
  suppressInfoWindows: _react.PropTypes.bool
};

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

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "KmlLayer",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes, otherUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    var kmlLayer = new google.maps.KmlLayer((0, _extends3.default)({
      map: this.context[_constants.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, otherUncontrolledPropTypes, controlledPropTypes, this.props)));
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  center: _propTypes2.default.object,

  heading: _propTypes2.default.number,

  mapTypeId: _propTypes2.default.any,

  options: _propTypes2.default.object,

  streetView: _propTypes2.default.any,

  tilt: _propTypes2.default.number,

  zoom: _propTypes2.default.number
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onBoundsChanged: "bounds_changed",

  onCenterChanged: "center_changed",

  onClick: "click",

  onDblClick: "dblclick",

  onDrag: "drag",

  onDragEnd: "dragend",

  onDragStart: "dragstart",

  onHeadingChanged: "heading_changed",

  onIdle: "idle",

  onMapTypeIdChanged: "maptypeid_changed",

  onMouseMove: "mousemove",

  onMouseOut: "mouseout",

  onMouseOver: "mouseover",

  onProjectionChanged: "projection_changed",

  onResize: "resize",

  onRightClick: "rightclick",

  onTilesLoaded: "tilesloaded",

  onTiltChanged: "tilt_changed",

  onZoomChanged: "zoom_changed"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds: function getBounds(map) {
    return map.getBounds();
  },
  getCenter: function getCenter(map) {
    return map.getCenter();
  },
  getDiv: function getDiv(map) {
    return map.getDiv();
  },
  getHeading: function getHeading(map) {
    return map.getHeading();
  },
  getMapTypeId: function getMapTypeId(map) {
    return map.getMapTypeId();
  },
  getProjection: function getProjection(map) {
    return map.getProjection();
  },
  getStreetView: function getStreetView(map) {
    return map.getStreetView();
  },
  getTilt: function getTilt(map) {
    return map.getTilt();
  },
  getZoom: function getZoom(map) {
    return map.getZoom();
  },

  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // Public APIs - Use this carefully
  // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })
  fitBounds: function fitBounds(map, args) {
    return map.fitBounds.apply(map, (0, _toConsumableArray3.default)(args));
  },
  panBy: function panBy(map, args) {
    return map.panBy.apply(map, (0, _toConsumableArray3.default)(args));
  },
  panTo: function panTo(map, args) {
    return map.panTo.apply(map, (0, _toConsumableArray3.default)(args));
  },
  panToBounds: function panToBounds(map, args) {
    return map.panToBounds.apply(map, (0, _toConsumableArray3.default)(args));
  }
};

var controlledPropUpdaterMap = {
  center: function center(map, _center) {
    map.setCenter(_center);
  },
  heading: function heading(map, _heading) {
    map.setHeading(_heading);
  },
  mapTypeId: function mapTypeId(map, _mapTypeId) {
    map.setMapTypeId(_mapTypeId);
  },
  options: function options(map, _options) {
    map.setOptions(_options);
  },
  streetView: function streetView(map, _streetView) {
    map.setStreetView(_streetView);
  },
  tilt: function tilt(map, _tilt) {
    map.setTilt(_tilt);
  },
  zoom: function zoom(map, _zoom) {
    map.setZoom(_zoom);
  }
};

function getInstanceFromComponent(component) {
  return component.context[_constants.MAP];
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "GoogleMap",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

  getInitialState: function getInitialState() {
    var map = getInstanceFromComponent(this);

    (0, _invariant2.default)(!!map, "Did you wrap <GoogleMap> component with withGoogleMap() HOC?");

    map.setOptions((0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props));
    return null;
  },
  render: function render() {
    var children = this.props.children;


    return _react2.default.createElement(
      "div",
      null,
      children
    );
  }
});
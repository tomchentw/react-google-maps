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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  directions: _react.PropTypes.any,
  options: _react.PropTypes.object,
  panel: _react.PropTypes.object,
  routeIndex: _react.PropTypes.number
}; /* global google */


var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onDirectionsChanged: "directions_changed"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDirections: function getDirections(directionsRenderer) {
    return directionsRenderer.getDirections();
  },
  getPanel: function getPanel(directionsRenderer) {
    return directionsRenderer.getPanel();
  },
  getRouteIndex: function getRouteIndex(directionsRenderer) {
    return directionsRenderer.getRouteIndex();
  }
};

var controlledPropUpdaterMap = {
  directions: function directions(directionsRenderer, _directions) {
    directionsRenderer.setDirections(_directions);
  },
  options: function options(directionsRenderer, _options) {
    directionsRenderer.setOptions(_options);
  },
  panel: function panel(directionsRenderer, _panel) {
    directionsRenderer.setPanel(_panel);
  },
  routeIndex: function routeIndex(directionsRenderer, _routeIndex) {
    directionsRenderer.setRouteIndex(_routeIndex);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.DIRECTIONS_RENDERER];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "DirectionsRenderer",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
    var directionsRenderer = new google.maps.DirectionsRenderer((0, _extends3.default)({
      map: this.context[_constants.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, _constants.DIRECTIONS_RENDERER, directionsRenderer);
  },
  componentWillUnmount: function componentWillUnmount() {
    var directionsRenderer = getInstanceFromComponent(this);
    if (directionsRenderer) {
      directionsRenderer.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});
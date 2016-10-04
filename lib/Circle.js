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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  center: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  radius: _react.PropTypes.number,
  visible: _react.PropTypes.bool
}; /* global google */


var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCenterChanged: "center_changed",

  onClick: "click",

  onDblClick: "dblclick",

  onDrag: "drag",

  onDragEnd: "dragend",

  onDragStart: "dragstart",

  onMouseDown: "mousedown",

  onMouseMove: "mousemove",

  onMouseOut: "mouseout",

  onMouseOver: "mouseover",

  onMouseUp: "mouseup",

  onRadiusChanged: "radius_changed",

  onRightClick: "rightclick"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds: function getBounds(circle) {
    return circle.getBounds();
  },
  getCenter: function getCenter(circle) {
    return circle.getCenter();
  },
  getDraggable: function getDraggable(circle) {
    return circle.getDraggable();
  },
  getEditable: function getEditable(circle) {
    return circle.getEditable();
  },
  getMap: function getMap(circle) {
    return circle.getMap();
  },
  getRadius: function getRadius(circle) {
    return circle.getRadius();
  },
  getVisible: function getVisible(circle) {
    return circle.getVisible();
  }
};

var controlledPropUpdaterMap = {
  center: function center(circle, _center) {
    circle.setCenter(_center);
  },
  draggable: function draggable(circle, _draggable) {
    circle.setDraggable(_draggable);
  },
  editable: function editable(circle, _editable) {
    circle.setEditable(_editable);
  },
  options: function options(circle, _options) {
    circle.setOptions(_options);
  },
  radius: function radius(circle, _radius) {
    circle.setRadius(_radius);
  },
  visible: function visible(circle, _visible) {
    circle.setVisible(_visible);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.CIRCLE];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "Circle",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
    var circle = new google.maps.Circle((0, _extends3.default)({
      map: this.context[_constants.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, _constants.CIRCLE, circle);
  },
  componentWillUnmount: function componentWillUnmount() {
    var circle = getInstanceFromComponent(this);
    if (circle) {
      circle.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});
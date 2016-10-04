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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  bounds: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  visible: _react.PropTypes.bool
}; /* global google */


var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onBoundsChanged: "bounds_changed",

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

  onRightClick: "rightclick"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds: function getBounds(rectangle) {
    return rectangle.getBounds();
  },
  getDraggable: function getDraggable(rectangle) {
    return rectangle.getDraggable();
  },
  getEditable: function getEditable(rectangle) {
    return rectangle.getEditable();
  },
  getVisible: function getVisible(rectangle) {
    return rectangle.getVisible();
  }
};

var controlledPropUpdaterMap = {
  bounds: function bounds(rectangle, _bounds) {
    rectangle.setBounds(_bounds);
  },
  draggable: function draggable(rectangle, _draggable) {
    rectangle.setDraggable(_draggable);
  },
  editable: function editable(rectangle, _editable) {
    rectangle.setEditable(_editable);
  },
  options: function options(rectangle, _options) {
    rectangle.setOptions(_options);
  },
  visible: function visible(rectangle, _visible) {
    rectangle.setVisible(_visible);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.RECTANGLE];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "Rectangle",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
    var rectangle = new google.maps.Rectangle((0, _extends3.default)({
      map: this.context[_constants.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, _constants.RECTANGLE, rectangle);
  },
  componentWillUnmount: function componentWillUnmount() {
    var rectangle = getInstanceFromComponent(this);
    if (rectangle) {
      rectangle.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});
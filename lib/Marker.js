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

var _contextTypes; /* global google */


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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  animation: _react.PropTypes.any,

  attribution: _react.PropTypes.any,

  clickable: _react.PropTypes.bool,

  cursor: _react.PropTypes.string,

  draggable: _react.PropTypes.bool,

  icon: _react.PropTypes.any,

  label: _react.PropTypes.any,

  opacity: _react.PropTypes.number,

  options: _react.PropTypes.object,

  place: _react.PropTypes.any,

  position: _react.PropTypes.any,

  shape: _react.PropTypes.any,

  title: _react.PropTypes.string,

  visible: _react.PropTypes.bool,

  zIndex: _react.PropTypes.number
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onAnimationChanged: "animation_changed",

  onClick: "click",

  onClickableChanged: "clickable_changed",

  onCursorChanged: "cursor_changed",

  onDblClick: "dblclick",

  onDrag: "drag",

  onDragEnd: "dragend",

  onDraggableChanged: "draggable_changed",

  onDragStart: "dragstart",

  onFlatChanged: "flat_changed",

  onIconChanged: "icon_changed",

  onMouseDown: "mousedown",

  onMouseOut: "mouseout",

  onMouseOver: "mouseover",

  onMouseUp: "mouseup",

  onPositionChanged: "position_changed",

  onRightClick: "rightclick",

  onShapeChanged: "shape_changed",

  onTitleChanged: "title_changed",

  onVisibleChanged: "visible_changed",

  onZindexChanged: "zindex_changed"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getAnimation: function getAnimation(marker) {
    return marker.getAnimation();
  },
  getAttribution: function getAttribution(marker) {
    return marker.getAttribution();
  },
  getClickable: function getClickable(marker) {
    return marker.getClickable();
  },
  getCursor: function getCursor(marker) {
    return marker.getCursor();
  },
  getDraggable: function getDraggable(marker) {
    return marker.getDraggable();
  },
  getIcon: function getIcon(marker) {
    return marker.getIcon();
  },
  getLabel: function getLabel(marker) {
    return marker.getLabel();
  },
  getOpacity: function getOpacity(marker) {
    return marker.getOpacity();
  },
  getPlace: function getPlace(marker) {
    return marker.getPlace();
  },
  getPosition: function getPosition(marker) {
    return marker.getPosition();
  },
  getShape: function getShape(marker) {
    return marker.getShape();
  },
  getTitle: function getTitle(marker) {
    return marker.getTitle();
  },
  getVisible: function getVisible(marker) {
    return marker.getVisible();
  },
  getZIndex: function getZIndex(marker) {
    return marker.getZIndex();
  }
};

var controlledPropUpdaterMap = {
  animation: function animation(marker, _animation) {
    marker.setAnimation(_animation);
  },
  attribution: function attribution(marker, _attribution) {
    marker.setAttribution(_attribution);
  },
  clickable: function clickable(marker, _clickable) {
    marker.setClickable(_clickable);
  },
  cursor: function cursor(marker, _cursor) {
    marker.setCursor(_cursor);
  },
  draggable: function draggable(marker, _draggable) {
    marker.setDraggable(_draggable);
  },
  icon: function icon(marker, _icon) {
    marker.setIcon(_icon);
  },
  label: function label(marker, _label) {
    marker.setLabel(_label);
  },
  opacity: function opacity(marker, _opacity) {
    marker.setOpacity(_opacity);
  },
  options: function options(marker, _options) {
    marker.setOptions(_options);
  },
  place: function place(marker, _place) {
    marker.setPlace(_place);
  },
  position: function position(marker, _position) {
    marker.setPosition(_position);
  },
  shape: function shape(marker, _shape) {
    marker.setShape(_shape);
  },
  title: function title(marker, _title) {
    marker.setTitle(_title);
  },
  visible: function visible(marker, _visible) {
    marker.setVisible(_visible);
  },
  zIndex: function zIndex(marker, _zIndex) {
    marker.setZIndex(_zIndex);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.MARKER];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "Marker",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (_contextTypes = {}, (0, _defineProperty3.default)(_contextTypes, _constants.MAP, _react.PropTypes.object), (0, _defineProperty3.default)(_contextTypes, _constants.MARKER_CLUSTERER, _react.PropTypes.object), _contextTypes),

  childContextTypes: (0, _defineProperty3.default)({}, _constants.ANCHOR, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
    var marker = new google.maps.Marker((0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props));
    var markerClusterer = this.context[_constants.MARKER_CLUSTERER];
    if (markerClusterer) {
      markerClusterer.addMarker(marker);
    } else {
      marker.setMap(this.context[_constants.MAP]);
    }
    return (0, _defineProperty3.default)({}, _constants.MARKER, marker);
  },
  getChildContext: function getChildContext() {
    return (0, _defineProperty3.default)({}, _constants.ANCHOR, this.context[_constants.ANCHOR] || getInstanceFromComponent(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    var marker = getInstanceFromComponent(this);
    if (marker) {
      var markerClusterer = this.context[_constants.MARKER_CLUSTERER];
      if (markerClusterer) {
        markerClusterer.removeMarker(marker);
      }
      marker.setMap(null);
    }
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
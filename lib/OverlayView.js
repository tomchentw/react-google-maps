"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _delay2 = require("lodash/delay");

var _delay3 = _interopRequireDefault(_delay2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("./constants");

var _enhanceElement = require("./enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

var _OverlayViewHelper = require("./utils/OverlayViewHelper");

var helpers = _interopRequireWildcard(_OverlayViewHelper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
  mapPaneName: _react.PropTypes.string,
  position: _react.PropTypes.object,
  bounds: _react.PropTypes.object
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getPanes: function getPanes(overlayView) {
    return overlayView.getPanes();
  },
  getProjection: function getProjection(overlayView) {
    return overlayView.getProjection();
  }
};

var controlledPropUpdaterMap = {};

function getInstanceFromComponent(component) {
  return component.state[_constants.OVERLAY_VIEW];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "OverlayView",

  statics: {
    FLOAT_PANE: "floatPane",
    MAP_PANE: "mapPane",
    MARKER_LAYER: "markerLayer",
    OVERLAY_LAYER: "overlayLayer",
    OVERLAY_MOUSE_TARGET: "overlayMouseTarget"
  },

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes, {
    children: _react.PropTypes.node.isRequired,
    getPixelPositionOffset: _react.PropTypes.func
  }),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    var overlayView = new google.maps.OverlayView();
    // You must implement three methods: onAdd(), draw(), and onRemove().
    overlayView.onAdd = this.onAdd;
    overlayView.draw = this.draw;
    overlayView.onRemove = this.onRemove;
    // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.
    overlayView.setMap(this.context[_constants.MAP]);
    return (0, _defineProperty3.default)({}, _constants.OVERLAY_VIEW, overlayView);
  },
  onAdd: function onAdd() {
    this._containerElement = helpers.createContainerElement();
  },
  draw: function draw() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    var overlayView = getInstanceFromComponent(this);
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
    var mapPanes = overlayView.getPanes();
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapCanvasProjection
    var mapCanvasProjection = overlayView.getProjection();
    //
    var props = (0, _extends3.default)({}, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props), {
      children: this.props.children,
      getPixelPositionOffset: this.props.getPixelPositionOffset
    });
    helpers.mountContainerElementToPane(mapPanes, this._containerElement, props);
    helpers.renderChildToContainerElement(mapCanvasProjection, this._containerElement, props);
  },
  onRemove: function onRemove() {
    helpers.unmountAndDestroyContainerElement(this._containerElement);
    this._containerElement = null;
  },
  componentDidUpdate: function componentDidUpdate() {
    (0, _delay3.default)(this.draw);
  },
  componentWillUnmount: function componentWillUnmount() {
    var overlayView = getInstanceFromComponent(this);
    if (overlayView) {
      overlayView.setMap(null);
      // You must implement three methods: onAdd(), draw(), and onRemove().
      overlayView.onAdd = null;
      overlayView.draw = null;
      overlayView.onRemove = null;
    }
  },
  render: function render() {
    return false;
  }
});
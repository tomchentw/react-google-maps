"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _assign2 = require("lodash/assign");

var _assign3 = _interopRequireDefault(_assign2);

var _isFunction2 = require("lodash/isFunction");

var _isFunction3 = _interopRequireDefault(_isFunction2);

exports.createContainerElement = createContainerElement;
exports.mountContainerElementToPane = mountContainerElementToPane;
exports.renderChildToContainerElement = renderChildToContainerElement;
exports.unmountAndDestroyContainerElement = unmountAndDestroyContainerElement;

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require("react");

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createContainerElement() {
  var containerElement = document.createElement("div");
  containerElement.style.position = "absolute";
  return containerElement;
} /* global google */
function mountContainerElementToPane(mapPanes, containerElement, props) {
  var mapPaneName = props.mapPaneName;

  (0, _invariant2.default)(!!mapPaneName, "OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s", mapPaneName);
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
  mapPanes[mapPaneName].appendChild(containerElement);
}

function getOffsetOverride(containerElement, props) {
  var getPixelPositionOffset = props.getPixelPositionOffset;
  //
  // Allows the component to control the visual position of the OverlayView
  // relative to the LatLng pixel position.
  //

  if ((0, _isFunction3.default)(getPixelPositionOffset)) {
    return getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight);
  } else {
    return {};
  }
}

function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
}

function createLatLngBounds(inst, Type) {
  return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
}

function ensureOfType(inst, type, factory) {
  if (inst instanceof type) {
    return inst;
  } else {
    return factory(inst, type);
  }
}

function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  var ne = mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  var sw = mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
  return {
    left: sw.x + offset.x + "px",
    top: ne.y + offset.y + "px",
    width: ne.x - sw.x - offset.x + "px",
    height: sw.y - ne.y - offset.y + "px"
  };
}

function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  var _mapCanvasProjection$ = mapCanvasProjection.fromLatLngToDivPixel(position);

  var x = _mapCanvasProjection$.x;
  var y = _mapCanvasProjection$.y;

  return {
    left: x + offset.x + "px",
    top: y + offset.y + "px"
  };
}

function getLayoutStyles(mapCanvasProjection, offset, props) {
  if (props.bounds) {
    var bounds = ensureOfType(props.bounds, google.maps.LatLngBounds, createLatLngBounds);
    return getLayoutStylesByBounds(mapCanvasProjection, offset, bounds);
  } else {
    var position = ensureOfType(props.position, google.maps.LatLng, createLatLng);
    return getLayoutStylesByPosition(mapCanvasProjection, offset, position);
  }
}

function renderChildToContainerElement(mapCanvasProjection, containerElement, props) {
  var child = _react.Children.only(props.children);
  (0, _reactDom.render)(child, containerElement, function () {
    var offset = (0, _extends3.default)({
      x: 0,
      y: 0
    }, getOffsetOverride(containerElement, props));
    var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, props);
    (0, _assign3.default)(containerElement.style, layoutStyles);
  });
}

function unmountAndDestroyContainerElement(containerElement) {
  containerElement.parentNode.removeChild(containerElement);
  (0, _reactDom.unmountComponentAtNode)(containerElement);
}
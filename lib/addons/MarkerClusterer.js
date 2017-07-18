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

var _childContextTypes;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _markerClustererPlus = require("marker-clusterer-plus");

var _markerClustererPlus2 = _interopRequireDefault(_markerClustererPlus);

var _constants = require("../constants");

var _enhanceElement = require("../enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html
  averageCenter: _propTypes2.default.bool,
  batchSizeIE: _propTypes2.default.number,
  batchSize: _propTypes2.default.number,
  calculator: _propTypes2.default.func,
  clusterClass: _propTypes2.default.string,
  enableRetinaIcons: _propTypes2.default.bool,
  gridSize: _propTypes2.default.number,
  ignoreHidden: _propTypes2.default.bool,
  imageExtension: _propTypes2.default.string,
  imagePath: _propTypes2.default.string,
  imageSizes: _propTypes2.default.array,
  maxZoom: _propTypes2.default.number,
  minimumClusterSize: _propTypes2.default.number,
  styles: _propTypes2.default.array,
  title: _propTypes2.default.string,
  zoomOnClick: _propTypes2.default.bool
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html
  onClick: "click",

  onClusteringBegin: "clusteringbegin",

  onClusteringEnd: "clusteringend",

  onMouseOut: "mouseout",

  onMouseOver: "mouseover"
};

var publicMethodMap = {
  // Public APIs
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
  getAverageCenter: function getAverageCenter(markerClusterer) {
    return markerClusterer.getAverageCenter();
  },
  getBatchSizeIE: function getBatchSizeIE(markerClusterer) {
    return markerClusterer.getBatchSizeIE();
  },
  getBatchSize: function getBatchSize(markerClusterer) {
    return markerClusterer.getBatchSize();
  },
  getCalculator: function getCalculator(markerClusterer) {
    return markerClusterer.getCalculator();
  },
  getClusterClass: function getClusterClass(markerClusterer) {
    return markerClusterer.getClusterClass();
  },
  getClusters: function getClusters(markerClusterer) {
    return markerClusterer.getClusters();
  },
  getEnableRetinaIcons: function getEnableRetinaIcons(markerClusterer) {
    return markerClusterer.getEnableRetinaIcons();
  },
  getGridSize: function getGridSize(markerClusterer) {
    return markerClusterer.getGridSize();
  },
  getIgnoreHidden: function getIgnoreHidden(markerClusterer) {
    return markerClusterer.getIgnoreHidden();
  },
  getImageExtension: function getImageExtension(markerClusterer) {
    return markerClusterer.getImageExtension();
  },
  getImagePath: function getImagePath(markerClusterer) {
    return markerClusterer.getImagePath();
  },
  getImageSize: function getImageSize(markerClusterer) {
    return markerClusterer.getImageSize();
  },
  getMarkers: function getMarkers(markerClusterer) {
    return markerClusterer.getMarkers();
  },
  getMaxZoom: function getMaxZoom(markerClusterer) {
    return markerClusterer.getMaxZoom();
  },
  getMinimumClusterSize: function getMinimumClusterSize(markerClusterer) {
    return markerClusterer.getMinimumClusterSize();
  },
  getStyles: function getStyles(markerClusterer) {
    return markerClusterer.getStyles();
  },
  getTitle: function getTitle(markerClusterer) {
    return markerClusterer.getTitle();
  },
  getTotalClusters: function getTotalClusters(markerClusterer) {
    return markerClusterer.getTotalClusters();
  },
  getZoomOnClick: function getZoomOnClick(markerClusterer) {
    return markerClusterer.getZoomOnClick();
  },


  // Public APIs - Use this carefully
  addMarker: function addMarker(markerClusterer, marker) {
    var nodraw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return markerClusterer.addMarker(marker, nodraw);
  },
  addMarkers: function addMarkers(markerClusterer, markers) {
    var nodraw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return markerClusterer.addMarkers(markers, nodraw);
  },
  removeMarker: function removeMarker(markerClusterer, marker) {
    var nodraw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return markerClusterer.removeMarker(marker, nodraw);
  },
  removeMarkers: function removeMarkers(markerClusterer, markers) {
    var nodraw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return markerClusterer.removeMarkers(markers, nodraw);
  },
  clearMarkers: function clearMarkers(markerClusterer) {
    return markerClusterer.clearMarkers();
  },
  fitMapToMarkers: function fitMapToMarkers(markerClusterer) {
    return markerClusterer.fitMapToMarkers();
  },
  repaint: function repaint(markerClusterer) {
    return markerClusterer.repaint();
  }
};

var controlledPropUpdaterMap = {
  averageCenter: function averageCenter(markerClusterer, _averageCenter) {
    markerClusterer.setAverageCenter(_averageCenter);
  },
  batchSizeIE: function batchSizeIE(markerClusterer, _batchSizeIE) {
    markerClusterer.setBatchSizeIE(_batchSizeIE);
  },
  batchSize: function batchSize(markerClusterer, _batchSize) {
    markerClusterer.setBatchSize(_batchSize);
  },
  calculator: function calculator(markerClusterer, _calculator) {
    markerClusterer.setCalculator(_calculator);
  },
  enableRetinaIcons: function enableRetinaIcons(markerClusterer, _enableRetinaIcons) {
    markerClusterer.setEnableRetinaIcons(_enableRetinaIcons);
  },
  gridSize: function gridSize(markerClusterer, _gridSize) {
    markerClusterer.setGridSize(_gridSize);
  },
  ignoreHidden: function ignoreHidden(markerClusterer, _ignoreHidden) {
    markerClusterer.setIgnoreHidden(_ignoreHidden);
  },
  imageExtension: function imageExtension(markerClusterer, _imageExtension) {
    markerClusterer.setImageExtension(_imageExtension);
  },
  imagePath: function imagePath(markerClusterer, _imagePath) {
    markerClusterer.setImagePath(_imagePath);
  },
  imageSizes: function imageSizes(markerClusterer, _imageSizes) {
    markerClusterer.setImageSizes(_imageSizes);
  },
  maxZoom: function maxZoom(markerClusterer, _maxZoom) {
    markerClusterer.setMaxZoom(_maxZoom);
  },
  minimumClusterSize: function minimumClusterSize(markerClusterer, _minimumClusterSize) {
    markerClusterer.setMinimumClusterSize(_minimumClusterSize);
  },
  styles: function styles(markerClusterer, _styles) {
    markerClusterer.setStyles(_styles);
  },
  title: function title(markerClusterer, _title) {
    markerClusterer.setTitle(_title);
  },
  zoomOnClick: function zoomOnClick(markerClusterer, _zoomOnClick) {
    markerClusterer.setZoomOnClick(_zoomOnClick);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.MARKER_CLUSTERER];
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "MarkerClusterer",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

  childContextTypes: (_childContextTypes = {}, (0, _defineProperty3.default)(_childContextTypes, _constants.ANCHOR, _propTypes2.default.object), (0, _defineProperty3.default)(_childContextTypes, _constants.MARKER_CLUSTERER, _propTypes2.default.object), _childContextTypes),

  getInitialState: function getInitialState() {
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
    var markerClusterer = new _markerClustererPlus2.default(this.context[_constants.MAP], [], (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props));
    return (0, _defineProperty3.default)({}, _constants.MARKER_CLUSTERER, markerClusterer);
  },
  getChildContext: function getChildContext() {
    var _ref2;

    var markerClusterer = getInstanceFromComponent(this);
    return _ref2 = {}, (0, _defineProperty3.default)(_ref2, _constants.ANCHOR, markerClusterer), (0, _defineProperty3.default)(_ref2, _constants.MARKER_CLUSTERER, markerClusterer), _ref2;
  },
  componentDidUpdate: function componentDidUpdate() {
    var markerClusterer = getInstanceFromComponent(this);
    markerClusterer.repaint();
  },
  componentWillUnmount: function componentWillUnmount() {
    var markerClusterer = getInstanceFromComponent(this);
    if (markerClusterer) {
      markerClusterer.setMap(null);
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
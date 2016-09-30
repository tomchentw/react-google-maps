"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heatmapLayerEventPropTypes = exports.heatmapLayerDefaultPropTypes = exports.heatmapLayerControlledPropTypes = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _HeatmapLayerEventList = require("../eventLists/HeatmapLayerEventList");

var _HeatmapLayerEventList2 = _interopRequireDefault(_HeatmapLayerEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var heatmapLayerControlledPropTypes = exports.heatmapLayerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  data: _react.PropTypes.any,
  options: _react.PropTypes.object
};

var heatmapLayerDefaultPropTypes = exports.heatmapLayerDefaultPropTypes = (0, _defaultPropsCreator2.default)(heatmapLayerControlledPropTypes);

var heatmapLayerUpdaters = {
  data: function data(_data, component) {
    component.getHeatmapLayer().setData(_data);
  },
  options: function options(_options, component) {
    component.getHeatmapLayer().setOptions(_options);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_HeatmapLayerEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var heatmapLayerEventPropTypes = exports.heatmapLayerEventPropTypes = eventPropTypes;

var HeatmapLayerCreator = function (_Component) {
  (0, _inherits3.default)(HeatmapLayerCreator, _Component);

  function HeatmapLayerCreator() {
    (0, _classCallCheck3.default)(this, HeatmapLayerCreator);
    return (0, _possibleConstructorReturn3.default)(this, (HeatmapLayerCreator.__proto__ || (0, _getPrototypeOf2.default)(HeatmapLayerCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(HeatmapLayerCreator, [{
    key: "getHeatmapLayer",
    value: function getHeatmapLayer() {
      return this.props.heatmapLayer;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createHeatmapLayer",
    value: function _createHeatmapLayer(heatmapLayerProps) {
      var mapHolderRef = heatmapLayerProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer

      var heatmapLayer = new google.maps.visualization.HeatmapLayer((0, _composeOptions2.default)(heatmapLayerProps, heatmapLayerControlledPropTypes));

      heatmapLayer.setMap(mapHolderRef.getMap());

      return heatmapLayer;
    }
  }]);
  return HeatmapLayerCreator;
}(_react.Component);

HeatmapLayerCreator.propTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default).isRequired,
  heatmapLayer: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getHeatmapLayer",
  updaters: heatmapLayerUpdaters
})(HeatmapLayerCreator);
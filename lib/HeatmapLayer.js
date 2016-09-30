"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _HeatmapLayerCreator = require("./creators/HeatmapLayerCreator");

var _HeatmapLayerCreator2 = _interopRequireDefault(_HeatmapLayerCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeatmapLayer = function (_Component) {
  (0, _inherits3.default)(HeatmapLayer, _Component);

  function HeatmapLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HeatmapLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeatmapLayer.__proto__ || (0, _getPrototypeOf2.default)(HeatmapLayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HeatmapLayer, [{
    key: "getData",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
    //
    value: function getData() {
      return this.state.heatmapLayer.getData();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2.default) {
        return;
      }
      var heatmapLayer = _HeatmapLayerCreator2.default._createHeatmapLayer(this.props);

      this.setState({ heatmapLayer: heatmapLayer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.heatmapLayer) {
        return _react2.default.createElement(
          _HeatmapLayerCreator2.default,
          (0, _extends3.default)({ heatmapLayer: this.state.heatmapLayer }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return HeatmapLayer;
}(_react.Component);

HeatmapLayer.propTypes = (0, _extends3.default)({}, _HeatmapLayerCreator.heatmapLayerDefaultPropTypes, _HeatmapLayerCreator.heatmapLayerControlledPropTypes, _HeatmapLayerCreator.heatmapLayerEventPropTypes);
exports.default = HeatmapLayer;
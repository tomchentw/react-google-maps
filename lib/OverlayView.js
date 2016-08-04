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

var _OverlayViewCreator = require("./creators/OverlayViewCreator");

var _OverlayViewCreator2 = _interopRequireDefault(_OverlayViewCreator);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Original author: @petebrowne
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/63
 */
var OverlayView = function (_Component) {
  (0, _inherits3.default)(OverlayView, _Component);

  function OverlayView() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, OverlayView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(OverlayView)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(OverlayView, [{
    key: "getPanes",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getPanes() {
      return this.state.overlayView.getPanes();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.state.overlayView.getProjection();
    }
    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2.default) {
        return;
      }
      var overlayView = _OverlayViewCreator2.default._createOverlayView(this.props);

      this.setState({ overlayView: overlayView });
    }
  }, {
    key: "render",
    value: function render() {
      var mapHolderRef = this.context.mapHolderRef;

      if (this.state.overlayView) {
        return _react2.default.createElement(
          _OverlayViewCreator2.default,
          (0, _extends3.default)({
            mapHolderRef: mapHolderRef,
            overlayView: this.state.overlayView }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return OverlayView;
}(_react.Component);

OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
OverlayView.propTypes = (0, _extends3.default)({}, _OverlayViewCreator.overlayViewDefaultPropTypes, _OverlayViewCreator.overlayViewControlledPropTypes);
OverlayView.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
OverlayView.defaultProps = {
  mapPaneName: OverlayView.OVERLAY_LAYER
};
exports.default = OverlayView;
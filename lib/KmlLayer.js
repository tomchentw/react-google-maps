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

var _KmlLayerCreator = require("./creators/KmlLayerCreator");

var _KmlLayerCreator2 = _interopRequireDefault(_KmlLayerCreator);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KmlLayer = function (_Component) {
  (0, _inherits3.default)(KmlLayer, _Component);

  function KmlLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, KmlLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = KmlLayer.__proto__ || (0, _getPrototypeOf2.default)(KmlLayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(KmlLayer, [{
    key: "getDefaultViewport",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getDefaultViewport() {
      return this.state.kmlLayer.getDefaultViewport();
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this.state.kmlLayer.getMetadata();
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.state.kmlLayer.getStatus();
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.state.kmlLayer.getUrl();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.marker.getZIndex();
    }
    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var mapHolderRef = this.context.mapHolderRef;


      if (!_canUseDom2.default) {
        return;
      }
      var kmlLayer = _KmlLayerCreator2.default._createKmlLayer((0, _extends3.default)({}, this.props, {
        mapHolderRef: mapHolderRef
      }));

      this.setState({ kmlLayer: kmlLayer });
    }
  }, {
    key: "render",
    value: function render() {
      var mapHolderRef = this.context.mapHolderRef;

      if (this.state.kmlLayer) {
        return _react2.default.createElement(
          _KmlLayerCreator2.default,
          (0, _extends3.default)({ mapHolderRef: mapHolderRef, kmlLayer: this.state.kmlLayer }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return KmlLayer;
}(_react.Component);

KmlLayer.propTypes = (0, _extends3.default)({}, _KmlLayerCreator.kmlLayerDefaultPropTypes, _KmlLayerCreator.kmlLayerControlledPropTypes, _KmlLayerCreator.kmlLayerEventPropTypes);
KmlLayer.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = KmlLayer;
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

var _DirectionsRendererCreator = require("./creators/DirectionsRendererCreator");

var _DirectionsRendererCreator2 = _interopRequireDefault(_DirectionsRendererCreator);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Original author: @alexishevia
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/22
 */
var DirectionsRenderer = function (_Component) {
  (0, _inherits3.default)(DirectionsRenderer, _Component);

  function DirectionsRenderer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DirectionsRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DirectionsRenderer.__proto__ || (0, _getPrototypeOf2.default)(DirectionsRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DirectionsRenderer, [{
    key: "getDirections",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getDirections() {
      return this.state.directionsRenderer.getDirections();
    }
  }, {
    key: "getPanel",
    value: function getPanel() {
      return this.state.directionsRenderer.getPanel();
    }
  }, {
    key: "getRouteIndex",
    value: function getRouteIndex() {
      return this.state.directionsRenderer.getRouteIndex();
    }
    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var mapHolderRef = this.context.mapHolderRef;


      if (!_canUseDom2.default) {
        return;
      }
      var directionsRenderer = _DirectionsRendererCreator2.default._createDirectionsRenderer((0, _extends3.default)({}, this.props, {
        mapHolderRef: mapHolderRef
      }));

      this.setState({ directionsRenderer: directionsRenderer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.directionsRenderer) {
        return _react2.default.createElement(
          _DirectionsRendererCreator2.default,
          (0, _extends3.default)({
            directionsRenderer: this.state.directionsRenderer
          }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return DirectionsRenderer;
}(_react.Component);

DirectionsRenderer.propTypes = (0, _extends3.default)({}, _DirectionsRendererCreator.directionsRendererDefaultPropTypes, _DirectionsRendererCreator.directionsRendererControlledPropTypes, _DirectionsRendererCreator.directionsRendererEventPropTypes);
DirectionsRenderer.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = DirectionsRenderer;
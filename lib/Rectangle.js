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

var _RectangleCreator = require("./creators/RectangleCreator");

var _RectangleCreator2 = _interopRequireDefault(_RectangleCreator);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Original author: @alistairjcbrown
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/80
 */
var Rectangle = function (_Component) {
  (0, _inherits3.default)(Rectangle, _Component);

  function Rectangle() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Rectangle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Rectangle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Rectangle, [{
    key: "getBounds",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
    value: function getBounds() {
      return this.state.rectangle.getBounds();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.rectangle.getDraggable();
    }
  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state.rectangle.getEditable();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.rectangle.getVisible();
    }
    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var mapHolderRef = this.context.mapHolderRef;


      if (!_canUseDom2.default) {
        return;
      }
      var rectangle = _RectangleCreator2.default._createRectangle((0, _extends3.default)({}, this.props, {
        mapHolderRef: mapHolderRef
      }));

      this.setState({ rectangle: rectangle });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.rectangle) {
        return _react2.default.createElement(
          _RectangleCreator2.default,
          (0, _extends3.default)({ rectangle: this.state.rectangle }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return Rectangle;
}(_react.Component);

Rectangle.propTypes = (0, _extends3.default)({}, _RectangleCreator.rectangleDefaultPropTypes, _RectangleCreator.rectangleControlledPropTypes, _RectangleCreator.rectangleEventPropTypes);
Rectangle.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = Rectangle;
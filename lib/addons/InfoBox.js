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

var _InfoBoxCreator = require("./addonsCreators/InfoBoxCreator");

var _InfoBoxCreator2 = _interopRequireDefault(_InfoBoxCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Original author: @wuct
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/54
 */
var InfoBox = function (_Component) {
  (0, _inherits3.default)(InfoBox, _Component);

  function InfoBox() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InfoBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(InfoBox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InfoBox, [{
    key: "getContent",


    // Public APIs
    //
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
    value: function getContent() {/* TODO: children */}
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state.infoBox.getPosition();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.infoBox.getVisible();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.infoBox.getZIndex();
    }
    // END - Public APIs
    //
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2.default) {
        return;
      }
      var infoBox = _InfoBoxCreator2.default._createInfoBox(this.props);

      this.setState({ infoBox: infoBox });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.infoBox) {
        return _react2.default.createElement(
          _InfoBoxCreator2.default,
          (0, _extends3.default)({ infoBox: this.state.infoBox }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return InfoBox;
}(_react.Component);

InfoBox.propTypes = (0, _extends3.default)({}, _InfoBoxCreator.infoBoxDefaultPropTypes, _InfoBoxCreator.infoBoxControlledPropTypes, _InfoBoxCreator.infoBoxEventPropTypes);
exports.default = InfoBox;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _index = require("../index");

var _ScriptjsLoader = require("./ScriptjsLoader");

var _ScriptjsLoader2 = _interopRequireDefault(_ScriptjsLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScriptjsGoogleMap = function (_Component) {
  (0, _inherits3.default)(ScriptjsGoogleMap, _Component);

  function ScriptjsGoogleMap() {
    (0, _classCallCheck3.default)(this, ScriptjsGoogleMap);
    return (0, _possibleConstructorReturn3.default)(this, (ScriptjsGoogleMap.__proto__ || (0, _getPrototypeOf2.default)(ScriptjsGoogleMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScriptjsGoogleMap, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      (0, _warning2.default)(false, "\"async/ScriptjsGoogleMap\" is deprecated now and will be removed in next major release (5.0.0).\nUse \"async/ScriptjsLoader\" instead.\nSee https://github.com/tomchentw/react-google-maps/pull/150 for more details.");
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var protocol = _props.protocol;
      var hostname = _props.hostname;
      var port = _props.port;
      var pathname = _props.pathname;
      var query = _props.query;
      var loadingElement = _props.loadingElement;
      var children = _props.children;
      var restProps = (0, _objectWithoutProperties3.default)(_props, ["protocol", "hostname", "port", "pathname", "query", "loadingElement", "children"]);


      return _react2.default.createElement(_ScriptjsLoader2.default, {
        protocol: protocol,
        hostname: hostname,
        port: port,
        pathname: pathname,
        query: query,
        loadingElement: loadingElement,
        googleMapElement: _react2.default.createElement(
          _index.GoogleMap,
          restProps,
          children
        )
      });
    }
  }]);
  return ScriptjsGoogleMap;
}(_react.Component);

exports.default = ScriptjsGoogleMap;
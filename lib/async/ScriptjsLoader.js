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

var _omit2 = require("lodash/omit");

var _omit3 = _interopRequireDefault(_omit2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesElementOfType = require("react-prop-types-element-of-type");

var _reactPropTypesElementOfType2 = _interopRequireDefault(_reactPropTypesElementOfType);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _index = require("../index");

var _makeUrl = require("../utils/makeUrl");

var _makeUrl2 = _interopRequireDefault(_makeUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DELEGATE_PROPS_LIST = ["protocol", "hostname", "port", "pathname", "query", "loadingElement"];

var ScriptjsLoader = function (_Component) {
  (0, _inherits3.default)(ScriptjsLoader, _Component);

  function ScriptjsLoader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ScriptjsLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ScriptjsLoader.__proto__ || (0, _getPrototypeOf2.default)(ScriptjsLoader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoaded: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ScriptjsLoader, [{
    key: "shouldUseNewBehavior",
    value: function shouldUseNewBehavior() {
      var _props$googleMapEleme = this.props.googleMapElement.props;
      var containerTagName = _props$googleMapEleme.containerTagName;
      var containerProps = _props$googleMapEleme.containerProps;

      return this.props.containerElement !== undefined && this.props.containerElement !== null && containerTagName === undefined && containerProps === undefined;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      (0, _warning2.default)(this.shouldUseNewBehavior(), "\"async/ScriptjsLoader\" is now rendering \"GoogleMapLoader\".\nMigrate to use \"GoogleMapLoader\" instead.\nThe old behavior will be removed in next major release (5.0.0).\nSee https://github.com/tomchentw/react-google-maps/pull/157 for more details.");
      if (!_canUseDom2.default) {
        return;
      }
      /*
       * External commonjs require dependency -- begin
       */
      var scriptjs = require("scriptjs"); // eslint-disable-line global-require
      /*
       * External commonjs require dependency -- end
       */
      var _props = this.props;
      var protocol = _props.protocol;
      var hostname = _props.hostname;
      var port = _props.port;
      var pathname = _props.pathname;
      var query = _props.query;

      var urlObj = { protocol: protocol, hostname: hostname, port: port, pathname: pathname, query: query };
      var url = (0, _makeUrl2.default)(urlObj);
      scriptjs(url, function () {
        return _this2.setState({ isLoaded: true });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ("production" !== process.env.NODE_ENV) {
        var changedKeys = (0, _makeUrl.getUrlObjChangedKeys)(this.props, nextProps);

        (0, _warning2.default)(changedKeys.length === 0, "ScriptjsLoader doesn't support mutating url related props after initial render.\nChanged props: %s", "[" + changedKeys.join(", ") + "]");
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoaded) {
        if (this.shouldUseNewBehavior()) {
          var nextProps = (0, _omit3.default)(this.props, DELEGATE_PROPS_LIST);

          return _react2.default.createElement(_index.GoogleMapLoader, nextProps);
        } else {
          // ------------ Deprecated ------------
          return this.props.googleMapElement;
        }
      } else {
        return this.props.loadingElement;
      }
    }
  }]);
  return ScriptjsLoader;
}(_react.Component);

ScriptjsLoader.propTypes = (0, _extends3.default)({}, _makeUrl.urlObjDefinition, {
  // PropTypes for ScriptjsLoader
  loadingElement: _react.PropTypes.node,
  // ...GoogleMapLoader.propTypes,// Uncomment for 5.0.0
  googleMapElement: (0, _reactPropTypesElementOfType2.default)(_index.GoogleMap).isRequired
});
ScriptjsLoader.defaultProps = {};
exports.default = ScriptjsLoader;
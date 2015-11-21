"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _index = require("../index");

var _utilsMakeUrl = require("../utils/makeUrl");

var _utilsMakeUrl2 = _interopRequireDefault(_utilsMakeUrl);

var ScriptjsLoader = (function (_Component) {
  _inherits(ScriptjsLoader, _Component);

  function ScriptjsLoader() {
    _classCallCheck(this, ScriptjsLoader);

    _get(Object.getPrototypeOf(ScriptjsLoader.prototype), "constructor", this).apply(this, arguments);

    this.state = {
      isLoaded: false
    };
  }

  _createClass(ScriptjsLoader, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this = this;

      if (!_canUseDom2["default"]) {
        return;
      }
      /*
       * External commonjs require dependency -- begin
       */
      var scriptjs = require("scriptjs");
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
      var url = (0, _utilsMakeUrl2["default"])(urlObj);
      scriptjs(url, function () {
        return _this.setState({ isLoaded: true });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ("production" !== process.env.NODE_ENV) {
        var changedKeys = (0, _utilsMakeUrl.getUrlObjChangedKeys)(this.props, nextProps);

        (0, _warning2["default"])(0 === changedKeys.length, "ScriptjsLoader doesn't support mutating url related props after initial render. Changed props: %s", "[" + changedKeys.join(", ") + "]");
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoaded) {
        return this.props.googleMapElement;
      } else {
        return this.props.loadingElement;
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _utilsMakeUrl.urlObjDefinition, {
      // PropTypes for ScriptjsLoader
      loadingElement: _react.PropTypes.node,
      googleMapElement: _react.PropTypes.element.isRequired
    }),
    enumerable: true
  }]);

  return ScriptjsLoader;
})(_react.Component);

exports["default"] = ScriptjsLoader;
module.exports = exports["default"];
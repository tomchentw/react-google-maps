"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var ScriptjsGoogleMap = (function (_Component) {
  _inherits(ScriptjsGoogleMap, _Component);

  function ScriptjsGoogleMap() {
    _classCallCheck(this, ScriptjsGoogleMap);

    _get(Object.getPrototypeOf(ScriptjsGoogleMap.prototype), "constructor", this).apply(this, arguments);

    this.state = {
      isLoaded: false
    };
  }

  _createClass(ScriptjsGoogleMap, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this = this;

      if (!_canUseDom2["default"]) {
        return;
      }
      var scriptjs = require("scriptjs");
      var _props = this.props;
      var protocol = _props.protocol;
      var hostname = _props.hostname;
      var port = _props.port;
      var pathname = _props.pathname;
      var query = _props.query;

      var restProps = _objectWithoutProperties(_props, ["protocol", "hostname", "port", "pathname", "query"]);

      var urlObj = { protocol: protocol, hostname: hostname, port: port, pathname: pathname, query: query };
      var url = (0, _utilsMakeUrl2["default"])(urlObj);
      scriptjs(url, function () {
        return _this.setState({ isLoaded: true });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var changedKeys = Object.keys(ScriptjsGoogleMap.propTypes).filter(function (key) {
        return _this2.props[key] !== nextProps[key];
      });

      (0, _warning2["default"])(0 === changedKeys.length, "ScriptjsGoogleMap doesn't support mutating props after initial render. Changed props: %s", "[" + changedKeys.join(", ") + "]");
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoaded) {
        var _props2 = this.props;
        var protocol = _props2.protocol;
        var hostname = _props2.hostname;
        var port = _props2.port;
        var pathname = _props2.pathname;
        var query = _props2.query;

        var restProps = _objectWithoutProperties(_props2, ["protocol", "hostname", "port", "pathname", "query"]);

        return _react2["default"].createElement(_index.GoogleMap, restProps);
      } else {
        return this.props.loadingElement;
      }
    }
  }], [{
    key: "propTypes",
    value: {
      // PropTypes for URL generation
      // https://nodejs.org/api/url.html#url_url_format_urlobj
      protocol: _react.PropTypes.string,
      hostname: _react.PropTypes.string.isRequired,
      port: _react.PropTypes.number,
      pathname: _react.PropTypes.string.isRequired,
      query: _react.PropTypes.object.isRequired,
      // PropTypes for ScriptjsGoogleMap
      loadingElement: _react.PropTypes.node
    },
    enumerable: true
  }]);

  return ScriptjsGoogleMap;
})(_react.Component);

exports["default"] = ScriptjsGoogleMap;
module.exports = exports["default"];
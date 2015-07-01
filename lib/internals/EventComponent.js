"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var PropTypes = _react2["default"].PropTypes;

function noop() {}

var EventComponent = (function (_React$Component) {
  /* Contract
   *  statics:
   *    _registerEvents:
   *  member:
   *    _createOrUpdateInstance
   */

  function EventComponent() {
    _classCallCheck(this, EventComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(EventComponent.prototype), "constructor", this).apply(this, args);

    this._unregisterEvents = noop;
  }

  _inherits(EventComponent, _React$Component);

  _createClass(EventComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var instance = this._createOrUpdateInstance();
      if (!instance) {
        return;
      }
      this._add_listeners_(instance);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var instance = this._createOrUpdateInstance();
      if (!instance) {
        return;
      }
      this._unregisterEvents();
      this._add_listeners_(instance);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var instance = this.state.instance;

      if (!instance) {
        return;
      }
      this._unregisterEvents();
    }
  }, {
    key: "_add_listeners_",
    value: function _add_listeners_(instance) {
      var event = this.props.googleMapsApi.event;
      var _registerEvents = this.constructor._registerEvents;

      this._unregisterEvents = _registerEvents(event, instance, this.props);
    }
  }]);

  return EventComponent;
})(_react2["default"].Component);

EventComponent.propTypes = {
  googleMapsApi: PropTypes.object
};

exports["default"] = EventComponent;
module.exports = exports["default"];
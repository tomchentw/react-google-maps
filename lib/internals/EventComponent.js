"use strict";

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _React = require("react");

var _React2 = _interopRequireDefault(_React);

var PropTypes = _React2["default"].PropTypes;

function noop() {}

var EventComponent = (function (_React$Component) {
  /* Contract
   *  statics:
   *    _registerEvents: 
   *  member:
   *    _createOrUpdateInstance
   */

  function EventComponent(props) {
    _classCallCheck(this, EventComponent);

    _get(Object.getPrototypeOf(EventComponent.prototype), "constructor", this).call(this, props);

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
})(_React2["default"].Component);

EventComponent.propTypes = {
  googleMapsApi: PropTypes.object };

exports["default"] = EventComponent;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = componentLifecycleDecorator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function componentLifecycleDecorator(_ref) {
  var registerEvents = _ref.registerEvents;
  var instanceMethodName = _ref.instanceMethodName;
  var updaters = _ref.updaters;

  // This modify the Component.prototype directly
  return function (Component) {
    function register() {
      this._unregisterEvents = registerEvents(google.maps.event, this.props, this[instanceMethodName]());
    }

    function unregister() {
      if (this._unregisterEvents) {
        this._unregisterEvents();
        this._unregisterEvents = null;
      }
    }

    function noop() {}

    // Stash component's own lifecycle methods to be invoked later
    var componentDidMount = Component.prototype.hasOwnProperty("componentDidMount") ? Component.prototype.componentDidMount : noop;
    var componentDidUpdate = Component.prototype.hasOwnProperty("componentDidUpdate") ? Component.prototype.componentDidUpdate : noop;
    var componentWillUnmount = Component.prototype.hasOwnProperty("componentWillUnmount") ? Component.prototype.componentWillUnmount : noop;

    Object.defineProperty(Component.prototype, "componentDidMount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        // Hook into client's implementation, if it has any
        componentDidMount.call(this);

        register.call(this);
      }
    });

    Object.defineProperty(Component.prototype, "componentDidUpdate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(prevProps) {
        var _this = this;

        unregister.call(this);

        (0, _keys2.default)(updaters).forEach(function (name) {
          return updaters[name](_this.props[name], _this);
        });

        // Hook into client's implementation, if it has any
        componentDidUpdate.call(this, prevProps);

        register.call(this);
      }
    });

    Object.defineProperty(Component.prototype, "componentWillUnmount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        // Hook into client's implementation, if it has any
        componentWillUnmount.call(this);

        unregister.call(this);
        var instance = this[instanceMethodName]();
        if ("setMap" in instance) {
          instance.setMap(null);
        }
      }
    });

    return Component;
  };
}
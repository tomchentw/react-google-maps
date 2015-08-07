"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = componentLifecycleDecorator;

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
      this._unregisterEvents();
      this._unregisterEvents = null;
    }

    Object.defineProperty(Component.prototype, "componentDidMount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: register
    });

    Object.defineProperty(Component.prototype, "componentDidUpdate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        unregister.call(this);

        for (var _name in updaters) {
          if (Object.prototype.hasOwnProperty.call(this.props, _name)) {
            updaters[_name](this.props[_name], this);
          }
        }

        register.call(this);
      }
    });

    Object.defineProperty(Component.prototype, "componentWillUnmount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
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

module.exports = exports["default"];
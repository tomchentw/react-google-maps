export default function componentLifecycleDecorator({ registerEvents, instanceMethodName, updaters }) {
  // This modify the Component.prototype directly
  return (Component) => {
    function register() {
      this._unregisterEvents = registerEvents(
        google.maps.event,
        this.props,
        this[instanceMethodName]()
      );
    }

    function unregister() {
      if (this._unregisterEvents) {
        this._unregisterEvents();
        this._unregisterEvents = null;
      }
    }

    function noop() {}

    // Stash component's own lifecycle methods to be invoked later
    const componentDidMount = Component.prototype.hasOwnProperty(`componentDidMount`) ? Component.prototype.componentDidMount : noop;
    const componentWillReceiveProps = Component.prototype.hasOwnProperty(`componentWillReceiveProps`) ? Component.prototype.componentWillReceiveProps : noop;
    const componentWillUnmount = Component.prototype.hasOwnProperty(`componentWillUnmount`) ? Component.prototype.componentWillUnmount : noop;

    Object.defineProperty(Component.prototype, `componentDidMount`, {
      enumerable: false,
      configurable: true,
      writable: true,
      value() {
        // Hook into client's implementation, if it has any
        componentDidMount.call(this);

        register.call(this);
      },
    });

    Object.defineProperty(Component.prototype, `componentWillReceiveProps`, {
      enumerable: false,
      configurable: true,
      writable: true,
      value(prevProps) {
        unregister.call(this);

        for (const name in updaters) {
          if (Object.prototype.hasOwnProperty.call(this.props, name)) {
            updaters[name](this.props[name], this);
          }
        }

        // Hook into client's implementation, if it has any
        componentWillReceiveProps.call(this, prevProps);

        register.call(this);
      },
    });

    Object.defineProperty(Component.prototype, `componentWillUnmount`, {
      enumerable: false,
      configurable: true,
      writable: true,
      value() {
        // Hook into client's implementation, if it has any
        componentWillUnmount.call(this);

        unregister.call(this);
        const instance = this[instanceMethodName]();
        if (`setMap` in instance) {
          instance.setMap(null);
        }
      },
    });

    return Component;
  };
}

export default function componentLifecycleDecorator ({registerEvents, instanceMethodName, updaters}) {
  // This modify the Component.prototype directly
  return (Component) => {
    function register () {
      this._unregisterEvents = registerEvents(
        google.maps.event,
        this.props,
        this[instanceMethodName]()
      );
    }

    function unregister () {
      this._unregisterEvents();
      this._unregisterEvents = null;
    }

    Object.defineProperty(Component.prototype, "componentDidMount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: register,
    });

    Object.defineProperty(Component.prototype, "componentDidUpdate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value () {
        unregister.call(this);

        for (const name in updaters) {
          if (Object.prototype.hasOwnProperty.call(this.props, name)) {
            updaters[name](this.props[name], this);
          }
        }

        register.call(this);
      },
    });

    Object.defineProperty(Component.prototype, "componentWillUnmount", {
      enumerable: false,
      configurable: true,
      writable: true,
      value () {
        unregister.call(this);
        const instance = this[instanceMethodName]();
        if ("setMap" in instance) {
          instance.setMap(null);
        }
      },
    });

    return Component;
  };
}

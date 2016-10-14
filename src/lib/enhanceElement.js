/* global google */
import _ from "lodash";

export function addDefaultPrefixToPropTypes(propTypes: Object) {
  return _.mapKeys(propTypes, (value, key) =>
    `default${key.substr(0, 1).toUpperCase()}${key.substr(1)}`
  );
}

function removeDefaultPrefix(defaultKey) {
  // default = 7
  const key = defaultKey.substr(7);
  return `${key.substr(0, 1).toLowerCase()}${key.substr(1)}`;
}

function collectProps(propTypes: Object, props: Object, keyTransform = _.identity) {
  return _.reduce(propTypes, (acc, value, key) => {
    if (_.has(props, key)) {
      const nextKey = keyTransform(key);
      // eslint-disable-next-line no-param-reassign
      acc[nextKey] = props[key];
    }
    return acc;
  }, {});
}

export function collectUncontrolledAndControlledProps(
  defaultUncontrolledPropTypes: Object,
  controlledPropTypes: Object,
  props: Object
) {
  return {
    ...collectProps(defaultUncontrolledPropTypes, props, removeDefaultPrefix),
    ...collectProps(controlledPropTypes, props),
  };
}

function registerGoogleEventsFromReactProps(
  instance: Object,
  props: Object,
  eventMap: Object
) {
  const registered = _.reduce(eventMap, (acc, googleEventName, onEventName) => {
    if (_.has(props, onEventName)) {
      acc.push(
        google.maps.event.addListener(instance, googleEventName, props[onEventName])
      );
    }
    return acc;
  }, []);

  return _.bind(_.forEach, null, registered, event =>
    google.maps.event.removeListener(event)
  );
}

function registerEventsFromComponent(component, getInstanceFromComponent, eventMap) {
  const instance = getInstanceFromComponent(component);
  // eslint-disable-next-line no-param-reassign
  component._unregisterEvents = registerGoogleEventsFromReactProps(
    instance,
    component.props,
    eventMap
  );
}

function unregisterEventsFromComponent(component, getInstanceFromComponent) {
  // eslint-disable-next-line no-param-reassign
  component._unregisterEvents();
  // eslint-disable-next-line no-param-reassign
  component._unregisterEvents = _.noop;
}

const enhanceWithPropTypes = _.curry((
  getInstanceFromComponent,
  controlledPropUpdaterMap,
  componentSpec
) => {
  const {
    componentDidUpdate = _.noop,
  } = componentSpec;

  return {
    ...componentSpec,

    componentDidUpdate(prevProps, prevState) {
      _.forEach(controlledPropUpdaterMap, (fn, key) => {
        const nextValue = this.props[key];
        if (nextValue !== prevProps[key]) {
          fn(getInstanceFromComponent(this), nextValue, this);
        }
      });
      componentDidUpdate.call(this, prevProps, prevState);
    },
  };
});

const enhanceWithEventMap = _.curry((
  getInstanceFromComponent,
  eventMap,
  componentSpec
) => {
  const {
    componentDidMount = _.noop,
    componentDidUpdate = _.noop,
    componentWillUnmount = _.noop,
  } = componentSpec;

  return {
    ...componentSpec,

    _unregisterEvents: _.noop,

    componentDidMount() {
      componentDidMount.call(this);
      registerEventsFromComponent(this, getInstanceFromComponent, eventMap);
    },

    componentDidUpdate(prevProps, prevState) {
      unregisterEventsFromComponent(this, getInstanceFromComponent);
      componentDidUpdate.call(this, prevProps, prevState);
      registerEventsFromComponent(this, getInstanceFromComponent, eventMap);
    },

    componentWillUnmount() {
      unregisterEventsFromComponent(this, getInstanceFromComponent);
      componentWillUnmount.call(this);
    },
  };
});

const enhanceWithPublicMethod = _.curry((
  getInstanceFromComponent,
  publicMethodMap,
  componentSpec
) => (
  _.reduce(publicMethodMap, (acc, fn, publicMethodName) => {
    // eslint-disable-next-line no-param-reassign
    acc[publicMethodName] = function publicMethod(...args) {
      return fn(getInstanceFromComponent(this), args, /* Use with caution */this);
    };
    return acc;
  }, {
    ...componentSpec,
  })
));

export default function enhanceElement(
  getInstanceFromComponent,
  publicMethodMap,
  eventMap,
  controlledPropUpdaterMap
) {
  return _.flowRight(
    enhanceWithPublicMethod(getInstanceFromComponent, publicMethodMap),
    enhanceWithEventMap(getInstanceFromComponent, eventMap),
    enhanceWithPropTypes(getInstanceFromComponent, controlledPropUpdaterMap),
  );
}

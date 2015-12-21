import {
  default as invariant,
} from "invariant";

import {
  default as GoogleMap,
} from "../GoogleMap";

export function __getInstance(componentOrLoader) {
  let component = componentOrLoader;
  const { constructor } = component;
  if (GoogleMap === constructor) {
    if (component.props.map) {
      return component.props.map;
    } else {
      // Deprecated
      component = component.refs.loader;
    }
  }
  // Otherwise, every other instance type exists in component state
  const key = Object.keys(component.state)[0];
  return component.state[key];
}

export function triggerEvent(component, ...args) {
  const instance = __getInstance(component);
  invariant(instance,
`The react-google-maps component %s is not mounted, hence we can't find an
 associated Google Maps JavaScript API v3 instance with it.`, component);

  return google.maps.event.trigger(instance, ...args);
}

import { default as addDefaultPrefix } from "./addDefaultPrefix";

export default function controlledOrDefault(props) {
  return (name) => {
    if (Object.prototype.hasOwnProperty.call(props, name)) {
      return props[name];
    } else {
      return props[addDefaultPrefix(name)];
    }
  };
}

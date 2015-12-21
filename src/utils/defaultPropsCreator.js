import { default as addDefaultPrefix } from "./addDefaultPrefix";

export default function defaultPropsCreator(propTypes) {
  return Object.keys(propTypes).reduce((acc, name) => {
    acc[addDefaultPrefix(name)] = propTypes[name];
    return acc;
  }, {});
}

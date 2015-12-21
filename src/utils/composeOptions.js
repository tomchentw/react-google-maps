import { default as controlledOrDefault } from "./controlledOrDefault";

export default function composeOptions(props, controlledPropTypes) {
  const optionNameList = Object.keys(controlledPropTypes);
  const getter = controlledOrDefault(props);

  // props from arguments may contain unknow props.
  // We only interested those in optionNameList
  return optionNameList.reduce((acc, optionName) => {
    if (`options` !== optionName) {
      const value = getter(optionName);
      if (`undefined` !== typeof value) {
        acc[optionName] = value;
      }
    }
    return acc;
  }, {
    ...getter(`options`),
  });
}

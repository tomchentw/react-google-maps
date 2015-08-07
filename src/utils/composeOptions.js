import {default as controlledOrDefault} from "./controlledOrDefault";

export default function composeOptions (props, optionNameList) {
  const getter = controlledOrDefault(props);

  return optionNameList.reduce((acc, optionName) => {
    const value = getter(optionName);
    if ("undefined" !== typeof value) {
      acc[optionName] = value;
    }
    return acc;
  }, {
    ...getter("options"),
  });
}

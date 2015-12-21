import { PropTypes } from "react";

function groupToUpperCase(match, group) {
  return group.toUpperCase();
}

function toOnEventName(rawName) {
  return `on${ rawName
    .replace(/^(.)/, groupToUpperCase)
    .replace(/_(.)/g, groupToUpperCase) }`;
}

export default function eventHandlerCreator(rawNameList) {
  const eventPropTypes = {};
  const onEventNameByRawName = {};

  rawNameList.forEach((rawName) => {
    const onEventName = toOnEventName(rawName);
    eventPropTypes[onEventName] = PropTypes.func;
    onEventNameByRawName[rawName] = onEventName;
  });

  function registerEvents(event, props, googleMapInstance) {
    const registered = rawNameList.reduce((acc, rawName) => {
      const onEventName = onEventNameByRawName[rawName];

      if (Object.prototype.hasOwnProperty.call(props, onEventName)) {
        acc.push(
          event.addListener(googleMapInstance, rawName, props[onEventName])
        );
      }
      return acc;
    }, []);

    return registered.forEach.bind(registered, event.removeListener, event);
  }

  return {
    eventPropTypes,
    registerEvents,
  };
}

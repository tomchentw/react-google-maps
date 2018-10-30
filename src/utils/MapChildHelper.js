/* global google */
/* eslint-disable no-param-reassign */

const lowerFirst = s => s.substring(0, 1).toLowerCase() + s.substring(1)
const reduceMap = (map, reducer, initial) => {
  let result = initial
  for (const key of Object.keys(map)) {
    result = reducer(result, map[key], key)
  }
  return result
}

function rdcUncontrolledAndControlledProps(acc, value, key) {
  if (typeof acc.prevProps[key] !== "undefined") {
    const match = key.match(/^default(\S+)/)
    if (match) {
      const unprefixedKey = lowerFirst(match[1])
      if (typeof acc.nextProps[unprefixedKey] === "undefined") {
        acc.nextProps[unprefixedKey] = acc.prevProps[key]
      }
    } else {
      acc.nextProps[key] = acc.prevProps[key]
    }
  }
  return acc
}

function applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance) {
  Object.keys(updaterMap).forEach(key => {
    const fn = updaterMap[key]
    const nextValue = nextProps[key]
    if (nextValue !== prevProps[key]) {
      fn(instance, nextValue)
    }
  })
}

export function construct(propTypes, updaterMap, prevProps, instance) {
  const { nextProps } = reduceMap(
    propTypes,
    rdcUncontrolledAndControlledProps,
    {
      nextProps: {},
      prevProps,
    }
  )
  applyUpdaterToNextProps(
    updaterMap,
    {
      /* empty prevProps for construct */
    },
    nextProps,
    instance
  )
}

export function componentDidMount(component, instance, eventMap) {
  registerEvents(component, instance, eventMap)
}

export function componentDidUpdate(
  component,
  instance,
  eventMap,
  updaterMap,
  prevProps
) {
  component.unregisterAllEvents()
  applyUpdaterToNextProps(updaterMap, prevProps, component.props, instance)
  registerEvents(component, instance, eventMap)
}

export function componentWillUnmount(component) {
  component.unregisterAllEvents()
}

function registerEvents(component, instance, eventMap) {
  const registeredList = reduceMap(
    eventMap,
    (acc, googleEventName, onEventName) => {
      if (typeof component.props[onEventName] === "function") {
        acc.push(
          google.maps.event.addListener(
            instance,
            googleEventName,
            component.props[onEventName]
          )
        )
      }
      return acc
    },
    []
  )

  component.unregisterAllEvents = () => {
    registeredList.forEach(registered => unregisterEvent(registered))
  }
}

function unregisterEvent(registered) {
  google.maps.event.removeListener(registered)
}

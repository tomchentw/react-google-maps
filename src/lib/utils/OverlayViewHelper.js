/* global google */
import _ from "lodash";

import invariant from "invariant";

import {
  Children,
} from "react";

import {
  render,
  unmountComponentAtNode,
} from "react-dom";

export function createContainerElement() {
  const containerElement = document.createElement(`div`);
  containerElement.style.position = `absolute`;
  return containerElement;
}

export function mountContainerElementToPane(mapPanes, containerElement, props) {
  const {
    mapPaneName,
  } = props;
  invariant(!!mapPaneName,
`OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s`,
    mapPaneName
  );
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
  mapPanes[mapPaneName].appendChild(containerElement);
}

function getOffsetOverride(containerElement, props) {
  const {
    getPixelPositionOffset,
  } = props;
  //
  // Allows the component to control the visual position of the OverlayView
  // relative to the LatLng pixel position.
  //
  if (_.isFunction(getPixelPositionOffset)) {
    return getPixelPositionOffset(
      containerElement.offsetWidth,
      containerElement.offsetHeight,
    );
  } else {
    return {};
  }
}

function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
}

function createLatLngBounds(inst, Type) {
  return new Type(
    new google.maps.LatLng(inst.ne.lat, inst.ne.lng),
    new google.maps.LatLng(inst.sw.lat, inst.sw.lng)
  );
}

function ensureOfType(inst, type, factory) {
  if (inst instanceof type) {
    return inst;
  } else {
    return factory(inst, type);
  }
}

function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  const ne = mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  const sw = mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
  return {
    left: `${sw.x + offset.x}px`,
    top: `${ne.y + offset.y}px`,
    width: `${ne.x - sw.x - offset.x}px`,
    height: `${sw.y - ne.y - offset.y}px`,
  };
}

function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  const {
    x,
    y,
  } = mapCanvasProjection.fromLatLngToDivPixel(position);
  return {
    left: `${x + offset.x}px`,
    top: `${y + offset.y}px`,
  };
}

function getLayoutStyles(mapCanvasProjection, offset, props) {
  if (props.bounds) {
    const bounds = ensureOfType(props.bounds, google.maps.LatLngBounds, createLatLngBounds);
    return getLayoutStylesByBounds(mapCanvasProjection, offset, bounds);
  } else {
    const position = ensureOfType(props.position, google.maps.LatLng, createLatLng);
    return getLayoutStylesByPosition(mapCanvasProjection, offset, position);
  }
}

export function renderChildToContainerElement(mapCanvasProjection, containerElement, props) {
  const child = Children.only(props.children);
  render(child, containerElement, () => {
    const offset = {
      x: 0,
      y: 0,
      ...getOffsetOverride(containerElement, props),
    };
    const layoutStyles = getLayoutStyles(mapCanvasProjection, offset, props);
    _.assign(containerElement.style, layoutStyles);
  });
}

export function unmountAndDestroyContainerElement(containerElement) {
  containerElement.parentNode.removeChild(containerElement);
  unmountComponentAtNode(containerElement);
}

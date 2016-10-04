/* global google */
import React from "react";

import {
  render,
  findDOMNode,
  unmountComponentAtNode,
} from "react-dom";

export function createInputElement(props) {
  const containerElement = document.createElement(`div`);
  // Allow developers to style the "hidden element" via `props.inputProps` and `props.input{*}`.
  const component = render((
    <input
      {...props.inputProps}
      style={props.inputStyle}
      className={props.inputClassName}
      placeholder={props.inputPlaceholder}
    />
  ), containerElement);
  // Cannot directly use the component - Google Maps will mess with React's internal state
  // by detaching/attaching.
  const inputEl = findDOMNode(component).cloneNode();
  unmountComponentAtNode(containerElement);
  return inputEl;
}

export function mountInputElementToControlPositionOnMap(inputEl, controlPosition, map) {
  return map.controls[controlPosition].push(inputEl) - 1;
}

export function unmountInputElementFromControlPositionOnMap(index, controlPosition, map) {
  return map.controls[controlPosition].removeAt(index);
}

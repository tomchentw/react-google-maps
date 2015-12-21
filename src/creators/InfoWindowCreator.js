import {
  default as React,
  PropTypes,
  Component,
} from "react";

import { default as InfoWindowEventList } from "../eventLists/InfoWindowEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as setContentForOptionalReactElement } from "../utils/setContentForOptionalReactElement";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const infoWindowControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: PropTypes.any,
  options: PropTypes.object,
  position: PropTypes.any,
  zIndex: PropTypes.number,
};

export const infoWindowDefaultPropTypes = defaultPropsCreator(infoWindowControlledPropTypes);

const infoWindowUpdaters = {
  children(children, component) { setContentForOptionalReactElement(children, component.getInfoWindow()); },
  content(content, component) { component.getInfoWindow().setContent(content); },
  options(options, component) { component.getInfoWindow().setOptions(options); },
  position(position, component) { component.getInfoWindow().setPosition(position); },
  zIndex(zIndex, component) { component.getInfoWindow().setZIndex(zIndex); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(InfoWindowEventList);

export const infoWindowEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getInfoWindow`,
  updaters: infoWindowUpdaters,
})
export default class InfoWindowCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    infoWindow: PropTypes.object.isRequired,
    anchorHolderRef: PropTypes.object,
  }

  static _createInfoWindow(infoWindowProps) {
    const { mapHolderRef, anchorHolderRef } = infoWindowProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    const infoWindow = new google.maps.InfoWindow(composeOptions(infoWindowProps, infoWindowControlledPropTypes));

    if (infoWindowProps.children) {
      setContentForOptionalReactElement(infoWindowProps.children, infoWindow);
    }

    if (anchorHolderRef) {
      infoWindow.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
    } else {
      infoWindow.setMap(mapHolderRef.getMap());
    }

    return infoWindow;
  }

  getInfoWindow() {
    return this.props.infoWindow;
  }

  render() {
    return (<noscript />);
  }
}

import {
  default as React,
  PropTypes,
  Component,
} from "react";

import {default as InfoWindowEventList} from "../eventLists/InfoWindowEventList";
import {default as eventHandlerCreator} from "../utils/eventHandlerCreator";
import {default as defaultPropsCreator} from "../utils/defaultPropsCreator";
import {default as composeOptions} from "../utils/composeOptions";
import {default as componentLifecycleDecorator} from "../utils/componentLifecycleDecorator";

import {default as GoogleMapHolder} from "./GoogleMapHolder";

export const infoWindowControlledPropTypes = {
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: PropTypes.any, /* TODO: children */
  options: PropTypes.object,
  position: PropTypes.any,
  zIndex: PropTypes.number,
};

export const infoWindowDefaultPropTypes = defaultPropsCreator(infoWindowControlledPropTypes);

const infoWindowUpdaters = {
  content   (/* content, component */) { /* TODO: children */ },
  options   (options, component) { component.getInfoWindow().setOptions(options); },
  position  (position, component) { component.getInfoWindow().setPosition(position); },
  zIndex    (zIndex, component) { component.getInfoWindow().setZIndex(zIndex); },
};

const {eventPropTypes, registerEvents} = eventHandlerCreator(InfoWindowEventList);

export const infoWindowEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: "getInfoWindow",
  updaters: infoWindowUpdaters,
})
export default class InfoWindowCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    infoWindow: PropTypes.object.isRequired,
    anchorHolderRef: PropTypes.object,
  }

  static _createInfoWindow (mapHolderRef, infoWindowProps, anchorHolderRef) {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    const infoWindow = new google.maps.InfoWindow(composeOptions(infoWindowProps, [
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindowOptions
      "content", /* TODO: children */
      "position",
      "zIndex",
    ]));

    if (anchorHolderRef) {
      infoWindow.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
    } else {
      infoWindow.setMap(mapHolderRef.getMap());
    }

    return infoWindow;
  }

  getInfoWindow () {
    return this.props.infoWindow;
  }

  render () {
    return (<noscript />);
  }
}

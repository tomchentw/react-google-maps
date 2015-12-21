import {
  default as React,
  PropTypes,
  Component,
} from "react";

import { default as PolylineEventList } from "../eventLists/PolylineEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const polylineControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  path: PropTypes.any,
  visible: PropTypes.bool,
};

export const polylineDefaultPropTypes = defaultPropsCreator(polylineControlledPropTypes);

const polylineUpdaters = {
  draggable(draggable, component) { component.getPolyline().setDraggable(draggable); },
  editable(editable, component) { component.getPolyline().setEditable(editable); },
  options(options, component) { component.getPolyline().setOptions(options); },
  path(path, component) { component.getPolyline().setPath(path); },
  visible(visible, component) { component.getPolyline().setVisible(visible); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(PolylineEventList);

export const polylineEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getPolyline`,
  updaters: polylineUpdaters,
})
export default class PolylineCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    polyline: PropTypes.object.isRequired,
  }

  static _createPolyline(polylineProps) {
    const { mapHolderRef } = polylineProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
    const polyline = new google.maps.Polyline(composeOptions(polylineProps, polylineControlledPropTypes));

    polyline.setMap(mapHolderRef.getMap());

    return polyline;
  }

  getPolyline() {
    return this.props.polyline;
  }

  render() {
    return (<noscript />);
  }
}

import {
  default as React,
  PropTypes,
  Component,
} from "react";

import { default as PolygonEventList } from "../eventLists/PolygonEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const polygonControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  path: PropTypes.any,
  paths: PropTypes.any,
  visible: PropTypes.bool,
};

export const polygonDefaultPropTypes = defaultPropsCreator(polygonControlledPropTypes);

const polygonUpdaters = {
  draggable(draggable, component) { component.getPolygon().setDraggable(draggable); },
  editable(editable, component) { component.getPolygon().setEditable(editable); },
  options(options, component) { component.getPolygon().setOptions(options); },
  path(path, component) { component.getPolygon().setPath(path); },
  paths(paths, component) { component.getPolygon().setPaths(paths); },
  visible(visible, component) { component.getPolygon().setVisible(visible); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(PolygonEventList);

export const polygonEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getPolygon`,
  updaters: polygonUpdaters,
})
export default class PolygonCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    polygon: PropTypes.object.isRequired,
  }

  static _createPolygon(polygonProps) {
    const { mapHolderRef } = polygonProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
    const polygon = new google.maps.Polygon(composeOptions(polygonProps, polygonControlledPropTypes));

    polygon.setMap(mapHolderRef.getMap());

    return polygon;
  }

  getPolygon() {
    return this.props.polygon;
  }

  render() {
    return (<noscript />);
  }
}

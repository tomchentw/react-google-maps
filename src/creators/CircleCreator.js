import {
  default as React,
  PropTypes,
  Component,
} from "react";

import { default as CircleEventList } from "../eventLists/CircleEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const circleControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  center: PropTypes.any,
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  radius: PropTypes.number,
  visible: PropTypes.bool,
};

export const circleDefaultPropTypes = defaultPropsCreator(circleControlledPropTypes);

const circleUpdaters = {
  center(center, component) { component.getCircle().setCenter(center); },
  draggable(draggable, component) { component.getCircle().setDraggable(draggable); },
  editable(editable, component) { component.getCircle().setEditable(editable); },
  options(options, component) { component.getCircle().setOptions(options); },
  radius(radius, component) { component.getCircle().setRadius(radius); },
  visible(visible, component) { component.getCircle().setVisible(visible); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(CircleEventList);

export const circleEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getCircle`,
  updaters: circleUpdaters,
})
export default class CircleCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    circle: PropTypes.object.isRequired,
  }

  static _createCircle(circleProps) {
    const { mapHolderRef } = circleProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
    const circle = new google.maps.Circle(composeOptions(circleProps, circleControlledPropTypes));

    circle.setMap(mapHolderRef.getMap());

    return circle;
  }

  getCircle() {
    return this.props.circle;
  }

  render() {
    return (<noscript />);
  }
}

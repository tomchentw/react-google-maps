import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import {default as RectangleEventList} from "../eventLists/RectangleEventList";
import {default as eventHandlerCreator} from "../utils/eventHandlerCreator";
import {default as defaultPropsCreator} from "../utils/defaultPropsCreator";
import {default as composeOptions} from "../utils/composeOptions";
import {default as componentLifecycleDecorator} from "../utils/componentLifecycleDecorator";

import {default as GoogleMapHolder} from "./GoogleMapHolder";

export const rectangleControlledPropTypes = {
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  bounds: PropTypes.any,
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  visible: PropTypes.bool,
};

export const rectangleDefaultPropTypes = defaultPropsCreator(rectangleControlledPropTypes);

const rectangleUpdaters = {
  bounds    (bounds, component) { component.getRectangle().setBounds(bounds); },
  draggable (draggable, component) { component.getRectangle().setDraggable(draggable); },
  editable  (editable, component) { component.getRectangle().setEditable(editable); },
  options   (options, component) { component.getRectangle().setOptions(options); },
  visible   (visible, component) { component.getRectangle().setVisible(visible); },
};

const {eventPropTypes, registerEvents} = eventHandlerCreator(RectangleEventList);

export const rectangleEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: "getRectangle",
  updaters: rectangleUpdaters,
})
export default class RectangleCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    rectangle: PropTypes.object.isRequired,
  }

  static _createRectangle (mapHolderRef, rectangleProps) {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
    const rectangle = new google.maps.Rectangle(composeOptions(rectangleProps, [
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#RectangleOptions
      "bounds",
      "draggable",
      "editable",
      "visible",
      "fillColor",
      "fillOpacity",
      "strokeColor",
      "strokeOpacity",
      "strokePosition",
      "strokeWeight",
    ]));

    rectangle.setMap(mapHolderRef.getMap());

    return rectangle;
  }

  getRectangle () {
    return this.props.rectangle;
  }

  render () {
    return (<noscript />);
  }
}

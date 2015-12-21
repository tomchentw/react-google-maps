import {
  default as React,
  PropTypes,
  Component,
} from "react";

import { default as DrawingManagerEventList } from "../eventLists/DrawingManagerEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const drawingManagerControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  drawingMode: PropTypes.any,
  options: PropTypes.object,
};

export const drawingManagerDefaultPropTypes = defaultPropsCreator(drawingManagerControlledPropTypes);

const drawingManagerUpdaters = {
  drawingMode(drawingMode, component) { component.getDrawingManager().setDrawingMode(drawingMode); },
  options(options, component) { component.getDrawingManager().setOptions(options); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(DrawingManagerEventList);

export const drawingManagerEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getDrawingManager`,
  updaters: drawingManagerUpdaters,
})
export default class DrawingManagerCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    drawingManager: PropTypes.object.isRequired,
  }

  static _createDrawingManager(drawingManagerProps) {
    const { mapHolderRef } = drawingManagerProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
    const drawingManager = new google.maps.drawing.DrawingManager(composeOptions(drawingManagerProps, drawingManagerControlledPropTypes));

    drawingManager.setMap(mapHolderRef.getMap());

    return drawingManager;
  }

  getDrawingManager() {
    return this.props.drawingManager;
  }

  render() {
    return (<noscript />);
  }
}

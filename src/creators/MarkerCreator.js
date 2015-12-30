import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import { default as MarkerEventList } from "../eventLists/MarkerEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const markerControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  animation: PropTypes.any,
  attribution: PropTypes.any,
  clickable: PropTypes.bool,
  cursor: PropTypes.string,
  draggable: PropTypes.bool,
  icon: PropTypes.any,
  label: PropTypes.any,
  opacity: PropTypes.number,
  options: PropTypes.object,
  place: PropTypes.any,
  position: PropTypes.any,
  shape: PropTypes.any,
  title: PropTypes.string,
  visible: PropTypes.bool,
  zIndex: PropTypes.number,
};

export const markerDefaultPropTypes = defaultPropsCreator(markerControlledPropTypes);

const markerUpdaters = {
  animation(animation, component) { component.getMarker().setAnimation(animation); },
  attribution(attribution, component) { component.getMarker().setAttribution(attribution); },
  clickable(clickable, component) { component.getMarker().setClickable(clickable); },
  cursor(cursor, component) { component.getMarker().setCursor(cursor); },
  draggable(draggable, component) { component.getMarker().setDraggable(draggable); },
  icon(icon, component) { component.getMarker().setIcon(icon); },
  label(label, component) { component.getMarker().setLabel(label); },
  opacity(opacity, component) { component.getMarker().setOpacity(opacity); },
  options(options, component) { component.getMarker().setOptions(options); },
  place(place, component) { component.getMarker().setPlace(place); },
  position(position, component) { component.getMarker().setPosition(position); },
  shape(shape, component) { component.getMarker().setShape(shape); },
  title(title, component) { component.getMarker().setTitle(title); },
  visible(visible, component) { component.getMarker().setVisible(visible); },
  zIndex(zIndex, component) { component.getMarker().setZIndex(zIndex); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(MarkerEventList);

export const markerEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getMarker`,
  updaters: markerUpdaters,
})
export default class MarkerCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    marker: PropTypes.object.isRequired,
  }

  static _createMarker(markerProps) {
    const { mapHolderRef, anchorHolderRef } = markerProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
    const marker = new google.maps.Marker(composeOptions(markerProps, markerControlledPropTypes));

    if (anchorHolderRef) {
      if (`MarkerClusterer` === anchorHolderRef.getAnchorType()) {
        anchorHolderRef.getAnchor().addMarker(marker);
      }
    } else {
      marker.setMap(mapHolderRef.getMap());
    }

    return marker;
  }

  getMarker() {
    return this.props.marker;
  }

  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindowOptions
  // In the core API, the only anchor is the Marker class.
  getAnchor() {
    return this.props.marker;
  }

  render() {
    const { mapHolderRef, children } = this.props;

    if (Children.count(children) > 0) {
      return (
        <div>{Children.map(children, childElement =>
          childElement && React.cloneElement(childElement, {
            mapHolderRef,
            anchorHolderRef: this,
          })
        )}</div>
      );
    } else {
      return (<noscript />);
    }
  }
}

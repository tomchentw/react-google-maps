import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import {default as DirectionsRendererEventList} from "../eventLists/DirectionsRendererEventList";
import {default as eventHandlerCreator} from "../utils/eventHandlerCreator";
import {default as defaultPropsCreator} from "../utils/defaultPropsCreator";
import {default as composeOptions} from "../utils/composeOptions";
import {default as componentLifecycleDecorator} from "../utils/componentLifecycleDecorator";

import {default as GoogleMapHolder} from "./GoogleMapHolder";

export const directionsRendererControlledPropTypes = {
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  directions: PropTypes.any,
  options: PropTypes.object,
  panel: PropTypes.object,
  routeIndex: PropTypes.number,
};

export const directionsRendererDefaultPropTypes = defaultPropsCreator(directionsRendererControlledPropTypes);

const directionsRendererUpdaters = {
  directions  (directions, component) { component.getDirectionsRenderer().setDirections(directions); },
  options     (options, component) { component.getDirectionsRenderer().setOptions(options); },
  panel       (panel, component) { component.getDirectionsRenderer().setPanel(panel); },
  routeIndex  (routeIndex, component) { component.getDirectionsRenderer().setRouteIndex(routeIndex); },
};

const {eventPropTypes, registerEvents} = eventHandlerCreator(DirectionsRendererEventList);

export const directionsRendererEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: "getDirectionsRenderer",
  updaters: directionsRendererUpdaters,
})
export default class DirectionsRendererCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    directionsRenderer: PropTypes.object.isRequired,
  }

  static _createDirectionsRenderer (mapHolderRef, directionsRendererProps) {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
    const directionsRenderer = new google.maps.DirectionsRenderer(composeOptions(directionsRendererProps, [
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRendererOptions
      "directions",
      "panel",
      "routeIndex",
    ]));

    directionsRenderer.setMap(mapHolderRef.getMap());

    return directionsRenderer;
  }

  getDirectionsRenderer () {
    return this.props.directionsRenderer;
  }

  render () {
    const {children} = this.props;

    if (0 < Children.count(children)) {
      // TODO: take a look at DirectionsRendererOptions#infoWindow and DirectionsRendererOptions#markerOptions ?
      return (
        <div>{children}</div>
      );
    } else {
      return (<noscript />);
    }
  }
}

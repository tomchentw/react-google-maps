import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import {default as GoogleMapEventList} from "../eventLists/GoogleMapEventList";
import {default as eventHandlerCreator} from "../utils/eventHandlerCreator";
import {default as defaultPropsCreator} from "../utils/defaultPropsCreator";
import {default as composeOptions} from "../utils/composeOptions";
import {default as componentLifecycleDecorator} from "../utils/componentLifecycleDecorator";

export const mapControlledPropTypes = {
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  center: PropTypes.object,
  heading: PropTypes.number,
  mapTypeId: PropTypes.any,
  options: PropTypes.object,
  streetView: PropTypes.any,
  tilt: PropTypes.number,
  zoom: PropTypes.number,
};

export const mapDefaultPropTypes = defaultPropsCreator(mapControlledPropTypes);

const mapUpdaters = {
  center      (center, component) { component.getMap().setCenter(center); },
  heading     (heading, component) { component.getMap().setHeading(heading); },
  mapTypeId   (mapTypeId, component) { component.getMap().setMapTypeId(mapTypeId); },
  options     (options, component) { component.getMap().setOptions(options); },
  streetView  (streetView, component) { component.getMap().setStreetView(streetView); },
  tilt        (tilt, component) { component.getMap().setTilt(tilt); },
  zoom        (zoom, component) { component.getMap().setZoom(zoom); },
};

const {eventPropTypes, registerEvents} = eventHandlerCreator(GoogleMapEventList);

export const mapEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: "getMap",
  updaters: mapUpdaters,
})
export default class GoogleMapHolder extends Component {

  static propTypes = {
    map: PropTypes.object.isRequired,
  }

  static _createMap (domEl, mapProps) {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    return new google.maps.Map(domEl, composeOptions(mapProps, [
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
      "center",
      "heading",
      "mapTypeId",
      "streetView",
      "tilt",
      "zoom",
    ]));
  }

  getMap () {
    return this.props.map;
  }

  render () {
    return (
      <div>
        {Children.map(this.props.children, (childElement) => {
          if (React.isValidElement(childElement)) {
            return React.cloneElement(childElement, {
              mapHolderRef: this,
            });
          } else {
            return childElement;
          }
        })}
      </div>
    );
  }
}

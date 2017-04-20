/* global google */
import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import {
  MAP,
  DIRECTIONS_RENDERER,
} from "./constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "./enhanceElement";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  directions: PropTypes.any,
  options: PropTypes.object,
  panel: PropTypes.object,
  routeIndex: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onDirectionsChanged: `directions_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDirections(directionsRenderer) { return directionsRenderer.getDirections(); },

  getPanel(directionsRenderer) { return directionsRenderer.getPanel(); },

  getRouteIndex(directionsRenderer) { return directionsRenderer.getRouteIndex(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  directions(directionsRenderer, directions) { directionsRenderer.setDirections(directions); },
  options(directionsRenderer, options) { directionsRenderer.setOptions(options); },
  panel(directionsRenderer, panel) { directionsRenderer.setPanel(panel); },
  routeIndex(directionsRenderer, routeIndex) { directionsRenderer.setRouteIndex(routeIndex); },
};

function getInstanceFromComponent(component) {
  return component.state[DIRECTIONS_RENDERER];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `DirectionsRenderer`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [DIRECTIONS_RENDERER]: directionsRenderer,
    };
  },

  componentWillUnmount() {
    const directionsRenderer = getInstanceFromComponent(this);
    if (directionsRenderer) {
      directionsRenderer.setMap(null);
    }
  },

  render() {
    return false;
  },
});

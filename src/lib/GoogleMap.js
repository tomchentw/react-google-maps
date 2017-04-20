/* global google */
import _ from "lodash";

import invariant from "invariant";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import React from "react";

import {
  MAP,
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
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  center: PropTypes.object,

  heading: PropTypes.number,

  mapTypeId: PropTypes.any,

  options: PropTypes.object,

  streetView: PropTypes.any,

  tilt: PropTypes.number,

  zoom: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onBoundsChanged: `bounds_changed`,

  onCenterChanged: `center_changed`,

  onClick: `click`,

  onDblClick: `dblclick`,

  onDrag: `drag`,

  onDragEnd: `dragend`,

  onDragStart: `dragstart`,

  onHeadingChanged: `heading_changed`,

  onIdle: `idle`,

  onMapTypeIdChanged: `maptypeid_changed`,

  onMouseMove: `mousemove`,

  onMouseOut: `mouseout`,

  onMouseOver: `mouseover`,

  onProjectionChanged: `projection_changed`,

  onResize: `resize`,

  onRightClick: `rightclick`,

  onTilesLoaded: `tilesloaded`,

  onTiltChanged: `tilt_changed`,

  onZoomChanged: `zoom_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds(map) { return map.getBounds(); },

  getCenter(map) { return map.getCenter(); },

  getDiv(map) { return map.getDiv(); },

  getHeading(map) { return map.getHeading(); },

  getMapTypeId(map) { return map.getMapTypeId(); },

  getProjection(map) { return map.getProjection(); },

  getStreetView(map) { return map.getStreetView(); },

  getTilt(map) { return map.getTilt(); },

  getZoom(map) { return map.getZoom(); },
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // Public APIs - Use this carefully
  // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })
  fitBounds(map, args) { return map.fitBounds(...args); },

  panBy(map, args) { return map.panBy(...args); },

  panTo(map, args) { return map.panTo(...args); },

  panToBounds(map, args) { return map.panToBounds(...args); },
  // END - Public APIs - Use this carefully
};

const controlledPropUpdaterMap = {
  center(map, center) { map.setCenter(center); },

  heading(map, heading) { map.setHeading(heading); },

  mapTypeId(map, mapTypeId) { map.setMapTypeId(mapTypeId); },

  options(map, options) { map.setOptions(options); },

  streetView(map, streetView) { map.setStreetView(streetView); },

  tilt(map, tilt) { map.setTilt(tilt); },

  zoom(map, zoom) { map.setZoom(zoom); },
};

function getInstanceFromComponent(component) {
  return component.context[MAP];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `GoogleMap`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    const map = getInstanceFromComponent(this);

    invariant(!!map,
`Did you wrap <GoogleMap> component with withGoogleMap() HOC?`
    );

    map.setOptions(
      collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      )
    );
    return null;
  },

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  },
});

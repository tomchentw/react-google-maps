/* global google */
import _ from "lodash";

import {
  default as React,
  PropTypes,
} from "react";

import {
  MAP,
  KML_LAYER,
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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  defaultViewport: PropTypes.any,
  metadata: PropTypes.any,
  status: PropTypes.any,
  url: PropTypes.string,
  zIndex: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onClick: `click`,

  onDefaultViewportChanged: `defaultviewport_changed`,
  
  onStatusChanged: `status_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDefaultViewport(kmlLayer) { return kmlLayer.getDefaultViewport(); },

  getMetadata(kmlLayer) { return kmlLayer.getMetadata(); },

  getStatus(kmlLayer) { return kmlLayer.getStatus(); },

  getUrl(kmlLayer) { return kmlLayer.getUrl(); },

  getZIndex(kmlLayer) { return kmlLayer.getZIndex(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  defaultViewport(kmlLayer, defaultViewport) { kmlLayer.setDefaultViewport(defaultViewport); },
  metadata(kmlLayer, metadata) { kmlLayer.setMetadata(metadata); },
  status(kmlLayer, status) { kmlLayer.setStatus(status); },
  url(kmlLayer, url) { kmlLayer.setUrl(url); },
  zIndex(kmlLayer, zIndex) { kmlLayer.setZIndex(zIndex); },
};

function getInstanceFromComponent(component) {
  return component.state[KML_LAYER];
}

export default _.flowRight(
  React.createClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `KmlLayer`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    const kmlLayer = new google.maps.KmlLayer({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [KML_LAYER]: kmlLayer,
    };
  },

  componentWillUnmount() {
    const kmlLayer = getInstanceFromComponent(this);
    if (kmlLayer) {
      kmlLayer.setMap(null);
    }
  },

  render() {
    return false;
  },
});

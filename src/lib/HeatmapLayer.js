/* global google */
import _ from "lodash";

import {
  default as React,
  PropTypes,
} from "react";

import {
  MAP,
  HEATMAP_LAYER,
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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  data: PropTypes.any,
  options: PropTypes.object,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onZoomChanged: `zoom_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  data(heatmapLayer, data) { heatmapLayer.setData(data); },
  options(heatmapLayer, options) { heatmapLayer.setOptions(options); },
};

function getInstanceFromComponent(component) {
  return component.state[HEATMAP_LAYER];
}

export default _.flowRight(
  React.createClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `HeatmapLayer`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
    const heatmapLayer = new google.maps.HeatmapLayer({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [HEATMAP_LAYER]: heatmapLayer,
    };
  },

  componentWillUnmount() {
    const heatmapLayer = getInstanceFromComponent(this);
    if (heatmapLayer) {
      heatmapLayer.setMap(null);
    }
  },

  render() {
    return false;
  },
});

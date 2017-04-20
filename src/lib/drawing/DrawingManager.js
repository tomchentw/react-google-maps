/* global google */
import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import {
  MAP,
  DRAWING_MANAGER,
} from "../constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "../enhanceElement";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  drawingMode: PropTypes.any,
  options: PropTypes.object,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCircleComplete: `circlecomplete`,

  onMarkerComplete: `markercomplete`,

  onOverlayComplete: `overlaycomplete`,

  onPolygonComplete: `polygoncomplete`,

  onPolylineComplete: `polylinecomplete`,

  onRectangleComplete: `rectanglecomplete`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDrawingMode(drawingManager) { return drawingManager.getDrawingMode(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  drawingMode(drawingManager, drawingMode) { drawingManager.setDrawingMode(drawingMode); },
  options(drawingManager, options) { drawingManager.setOptions(options); },
};

function getInstanceFromComponent(component) {
  return component.state[DRAWING_MANAGER];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `DrawingManager`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
    const drawingManager = new google.maps.drawing.DrawingManager({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [DRAWING_MANAGER]: drawingManager,
    };
  },

  componentWillUnmount() {
    const drawingManager = getInstanceFromComponent(this);
    if (drawingManager) {
      drawingManager.setMap(null);
    }
  },

  render() {
    return false;
  },
});

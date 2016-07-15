/* global google */
import _ from "lodash";

import {
  default as React,
  PropTypes,
} from "react";

import {
  MAP,
  POLYLINE,
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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  path: PropTypes.any,
  visible: PropTypes.bool,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onClick: `click`,

  onDblClick: `dblclick`,

  onDrag: `drag`,

  onDragEnd: `dragend`,

  onDragStart: `dragstart`,

  onMouseDown: `mousedown`,

  onMouseMove: `mousemove`,

  onMouseOut: `mouseout`,

  onMouseOver: `mouseover`,

  onMouseUp: `mouseup`,

  onRightClick: `rightclick`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDraggable(polyline) { return polyline.getDraggable(); },

  getEditable(polyline) { return polyline.getEditable(); },

  getPath(polyline) { return polyline.getPath(); },

  getVisible(polyline) { return polyline.getVisible(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  draggable(polyline, draggable) { polyline.setDraggable(draggable); },
  editable(polyline, editable) { polyline.setEditable(editable); },
  options(polyline, options) { polyline.setOptions(options); },
  path(polyline, path) { polyline.setPath(path); },
  visible(polyline, visible) { polyline.setVisible(visible); },
};

function getInstanceFromComponent(component) {
  return component.state[POLYLINE];
}

export default _.flowRight(
  React.createClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `Polyline`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
    const polyline = new google.maps.Polyline({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [POLYLINE]: polyline,
    };
  },

  componentWillUnmount() {
    const polyline = getInstanceFromComponent(this);
    if (polyline) {
      polyline.setMap(null);
    }
  },

  render() {
    return false;
  },
});

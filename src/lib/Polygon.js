/* global google */
import _ from "lodash";

import {
  default as React,
  PropTypes,
} from "react";

import {
  MAP,
  POLYGON,
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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  path: PropTypes.any,
  paths: PropTypes.any,
  visible: PropTypes.bool,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDraggable(polygon) { return polygon.getDraggable(); },

  getEditable(polygon) { return polygon.getEditable(); },

  getPath(polygon) { return polygon.getPath(); },

  getPaths(polygon) { return polygon.getPaths(); },

  getVisible(polygon) { return polygon.getVisible(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  draggable(polygon, draggable) { polygon.setDraggable(draggable); },
  editable(polygon, editable) { polygon.setEditable(editable); },
  options(polygon, options) { polygon.setOptions(options); },
  path(polygon, path) { polygon.setPath(path); },
  paths(polygon, paths) { polygon.setPaths(paths); },
  visible(polygon, visible) { polygon.setVisible(visible); },
};

function getInstanceFromComponent(component) {
  return component.state[POLYGON];
}

export default _.flowRight(
  React.createClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `Polygon`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
    const polygon = new google.maps.Polygon({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [POLYGON]: polygon,
    };
  },

  componentWillUnmount() {
    const polygon = getInstanceFromComponent(this);
    if (polygon) {
      polygon.setMap(null);
    }
  },

  render() {
    return false;
  },
});

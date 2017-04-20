/* global google */
import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import {
  MAP,
  CIRCLE,
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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  center: PropTypes.any,
  draggable: PropTypes.bool,
  editable: PropTypes.bool,
  options: PropTypes.object,
  radius: PropTypes.number,
  visible: PropTypes.bool,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCenterChanged: `center_changed`,

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

  onRadiusChanged: `radius_changed`,

  onRightClick: `rightclick`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds(circle) { return circle.getBounds(); },

  getCenter(circle) { return circle.getCenter(); },

  getDraggable(circle) { return circle.getDraggable(); },

  getEditable(circle) { return circle.getEditable(); },

  getMap(circle) { return circle.getMap(); },

  getRadius(circle) { return circle.getRadius(); },

  getVisible(circle) { return circle.getVisible(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  center(circle, center) { circle.setCenter(center); },
  draggable(circle, draggable) { circle.setDraggable(draggable); },
  editable(circle, editable) { circle.setEditable(editable); },
  options(circle, options) { circle.setOptions(options); },
  radius(circle, radius) { circle.setRadius(radius); },
  visible(circle, visible) { circle.setVisible(visible); },
};

function getInstanceFromComponent(component) {
  return component.state[CIRCLE];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `Circle`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
    const circle = new google.maps.Circle({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [CIRCLE]: circle,
    };
  },

  componentWillUnmount() {
    const circle = getInstanceFromComponent(this);
    if (circle) {
      circle.setMap(null);
    }
  },

  render() {
    return false;
  },
});

/* global google */
import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import {
  MAP,
  GROUND_OVERLAY,
} from "./constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "./enhanceElement";

const controlledPropTypes = {
  // Only expose those with getters & setters in the table as controlled props.
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  bounds: PropTypes.object,
  clickable: PropTypes.bool,
  opacity: PropTypes.number,
  url: PropTypes.string,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  onClick: `click`,
  onDblClick: `dblclick`,
};

const publicMethodMap = {
  // Public APIs
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  getBounds(groundOverlay) { return groundOverlay.getBounds(); },

  getOpacity(groundOverlay) { return groundOverlay.getOpacity(); },

  getUrl(groundOverlay) { return groundOverlay.getUrl(); },
  // END - Public APIs
};

function getInstanceFromComponent(component) {
  return component.state[GROUND_OVERLAY];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, {}),
)({
  displayName: `GroundOverlay`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
    const groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, {
      ...collectUncontrolledAndControlledProps(defaultUncontrolledPropTypes),
    });

    const map = this.context[MAP];
    groundOverlay.setMap(map);

    if (this.props.opacity) {
      groundOverlay.setOpacity(this.props.opacity);
    }

    if (this.props.clickable) {
      google.maps.event.addListener(groundOverlay, eventMap.onClick, event => {
        google.maps.event.trigger(map, eventMap.onClick, event);
      });
      google.maps.event.addListener(groundOverlay, eventMap.onDblClick, event => {
        google.maps.event.trigger(map, eventMap.onDblClick, event);
      });
    }

    return {
      [GROUND_OVERLAY]: groundOverlay,
    };
  },

  componentWillUnmount() {
    const groundOverlay = getInstanceFromComponent(this);
    if (groundOverlay) {
      groundOverlay.setMap(null);
    }
  },

  render() {
    return false;
  },
});

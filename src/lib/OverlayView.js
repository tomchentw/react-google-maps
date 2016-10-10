/* global google */
import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import {
  MAP,
  OVERLAY_VIEW,
  MARKER_CLUSTERER,
} from "./constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "./enhanceElement";

import * as helpers from "./utils/OverlayViewHelper";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
  mapPaneName: PropTypes.string,
  position: PropTypes.object,
  bounds: PropTypes.object,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getPanes(overlayView) { return overlayView.getPanes(); },

  getProjection(overlayView) { return overlayView.getProjection(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
};

function getInstanceFromComponent(component) {
  return component.state[OVERLAY_VIEW];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `OverlayView`,

  statics: {
    FLOAT_PANE: `floatPane`,
    MAP_PANE: `mapPane`,
    MARKER_LAYER: `markerLayer`,
    OVERLAY_LAYER: `overlayLayer`,
    OVERLAY_MOUSE_TARGET: `overlayMouseTarget`,
  },

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
    children: PropTypes.node.isRequired,
    getPixelPositionOffset: PropTypes.func,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
    [MARKER_CLUSTERER]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    const overlayView = new google.maps.OverlayView();
    // You must implement three methods: onAdd(), draw(), and onRemove().
    overlayView.onAdd = this.onAdd;
    overlayView.draw = this.draw;
    overlayView.onRemove = this.onRemove;
    // getDraggable and getPosition is needed to cluster OverlayView
    overlayView.getDraggable = this.getDraggable;
    overlayView.getPosition = this.getPosition;
    // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.
    const markerClusterer = this.context[MARKER_CLUSTERER];
    if (markerClusterer) {
      markerClusterer.addMarker(overlayView);
    } else {
      overlayView.setMap(this.context[MAP]);
    }
    return {
      [OVERLAY_VIEW]: overlayView,
    };
  },

  onAdd() {
    this._containerElement = helpers.createContainerElement();
  },

  // MarkerClusterer needs getDraggable method,
  // but since OverlayView is not draggable by default
  // we just return false
  getDraggable() {
    return false;
  },

  // MarkerClusterer needs maps LatLng object
  getPosition() {
    return new google.maps.LatLng(this.props.position);
  },

  draw() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    const overlayView = getInstanceFromComponent(this);
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
    const mapPanes = overlayView.getPanes();
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapCanvasProjection
    const mapCanvasProjection = overlayView.getProjection();
    //
    const props = {
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
      children: this.props.children,
      getPixelPositionOffset: this.props.getPixelPositionOffset,
    };
    helpers.mountContainerElementToPane(mapPanes, this._containerElement, props);
    helpers.renderChildToContainerElement(mapCanvasProjection, this._containerElement, props);
  },

  onRemove() {
    helpers.unmountAndDestroyContainerElement(this._containerElement);
    this._containerElement = null;
  },

  componentDidUpdate() {
    _.delay(this.draw)
  },

  componentWillUnmount() {
    const overlayView = getInstanceFromComponent(this);
    if (overlayView) {
      const markerClusterer = this.context[MARKER_CLUSTERER];
      if (markerClusterer) {
        markerClusterer.removeMarker(overlayView);
      }
      overlayView.setMap(null);
      // You must implement three methods: onAdd(), draw(), and onRemove().
      overlayView.onAdd = null;
      overlayView.draw = null;
      overlayView.onRemove = null;
    }
  },

  render() {
    return false;
  },
});

/* global google */
import _ from 'lodash';

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import React from "react";

import {
  MAP,
  STREET_VIEW_PANORAMA,
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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
  links: PropTypes.array,
  motionTracking: PropTypes.bool,
  options: PropTypes.object,
  pano: PropTypes.string,
  panoProvider: PropTypes.func,
  position: PropTypes.object,
  pov: PropTypes.object,
  visible: PropTypes.bool,
  zoom: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCloseClick: `closeclick`,

  onPanoChanged: `pano_changed`,

  onPositionChanged: `position_changed`,

  onLinksChanged: `links_changed`,

  onPovChanged: `pov_changed`,

  onResize: `resize`,

  onStatusChanged: `status_changed`,

  onVisibleChanged: `visible_changed`,

  onZoomChanged: `zoom_changed`,

};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getLinks(streetViewPanorama) { return streetViewPanorama.getLinks(); },

  getLocation(streetViewPanorama) { return streetViewPanorama.getLocation(); },

  getMotionTracking(streetViewPanorama) { return streetViewPanorama.getMotionTracking(); },

  getPano(streetViewPanorama) { return streetViewPanorama.getPano(); },

  getPhotographerPov(streetViewPanorama) { return streetViewPanorama.getPhotographerPov(); },

  getPosition(streetViewPanorama) { return streetViewPanorama.getPosition(); },

  getPov(streetViewPanorama) { return streetViewPanorama.getPov(); },

  getStatus(streetViewPanorama) { return streetViewPanorama.getStatus(); },

  getVisible(streetViewPanorama) { return streetViewPanorama.getVisible(); },

  getZoom(streetViewPanorama) { return streetViewPanorama.getZoom(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  links(streetViewPanorama, links) { streetViewPanorama.setLinks(links); },
  motionTracking(streetViewPanorama, motionTracking) { streetViewPanorama.setMotionTracking(motionTracking); },
  options(streetViewPanorama, options) { streetViewPanorama.setOptions(options); },
  pano(streetViewPanorama, pano) { streetViewPanorama.setPano(pano); },
  panoProvider(streetViewPanorama, panoProvider) { streetViewPanorama.registerPanoProvider(panoProvider); },
  position(streetViewPanorama, position) { streetViewPanorama.setPosition(position); },
  pov(streetViewPanorama, pov) { streetViewPanorama.setPov(pov); },
  visible(streetViewPanorama, visible) { streetViewPanorama.setVisible(visible); },
  zoom(streetViewPanorama, zoom) { streetViewPanorama.setZoom(zoom); },
};

function getInstanceFromComponent(component) {
  return component.state[STREET_VIEW_PANORAMA];
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `StreetViewPanorama`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  childContextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialOptions() {
    return collectUncontrolledAndControlledProps(
      defaultUncontrolledPropTypes,
      controlledPropTypes,
      this.props,
    );
  },

  getChildContext() {
    return {
      [MAP]: this.state[STREET_VIEW_PANORAMA],
    };
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
    let streetViewPanorama;
    if (!this.props.containerElement && this.context[MAP]) {
      streetViewPanorama = this.context[MAP].getStreetView();
      streetViewPanorama.setOptions(this.getInitialOptions());
    }
    if (!this.props.containerElement && !this.context[MAP]) {
      throw new Error(`You need to use the StreetViewPanorama in the context of \`<GoogleMap>\` or pass an \`containerElement\` for it to be rendered in.`);
    }
    return {
      [STREET_VIEW_PANORAMA]: streetViewPanorama,
    };
  },

  handleComponentMount(el) {
    this.el = el;
    if (this.el) {
      const streetViewPanorama = new google.maps.StreetViewPanorama(this.el, {
        map: this.context[MAP],
        ...collectUncontrolledAndControlledProps(
          defaultUncontrolledPropTypes,
          controlledPropTypes,
          this.props,
        ),
      });
      if (this.context[MAP]) {
        this.context[MAP].setStreetView(streetViewPanorama);
      }
      this.setState({ [STREET_VIEW_PANORAMA]: streetViewPanorama });
    }
  },

  componentWillUnmount() {
    const streetViewPanorama = getInstanceFromComponent(this);
    if (streetViewPanorama) {
      streetViewPanorama.setVisible(false);
    }
  },

  render() {
    if (this.props.containerElement) {
      return (
        React.cloneElement(
          this.props.containerElement,
          { ref: this.handleComponentMount },
          this.props.children,
        )
      );
    }
    return <div>{this.props.children}</div>;
  },
});

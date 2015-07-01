import React from "react";

import EventComponent from "./internals/EventComponent";
import VirtualContainer from "./internals/VirtualContainer";
import exposeGetters from "./internals/exposeGetters";
import createRegisterEvents from "./internals/createRegisterEvents";

const {PropTypes} = React;

class GoogleMaps extends EventComponent {
  /*
   * Some public API we'd like to expose
   */
  panBy (x, y) {
    const {instance} = this.state;
    if (instance) {
      instance.panBy(x, y);
    }
  }

  panTo (latLng) {
    const {instance} = this.state;
    if (instance) {
      instance.panTo(latLng);
    }
  }

  panToBounds (latLngBounds) {
    const {instance} = this.state;
    if (instance) {
      instance.panToBounds(latLngBounds);
    }
  }

  fitBounds (latLngBounds) {
    const {instance} = this.state;
    if (instance) {
      instance.fitBounds(latLngBounds);
    }
  }
  /*
   * Internals
   */
  constructor (...args) {
    super(...args);
    this.state = {};
  }

  _createOrUpdateInstance () {
    const {props} = this;
    if (!props.googleMapsApi) {
      return;
    }
    // googleMapsApi can be async loaded
    const {containerProps, googleMapsApi, bounds, ...googleMapsConfig} = props;
    var {instance} = this.state;

    if (bounds) {
      delete googleMapsConfig.zoom;
      delete googleMapsConfig.center;
    }

    if (instance) {
      instance.setOptions(googleMapsConfig);
    } else {
      const GoogleMapsClass = googleMapsApi.Map;
      instance = new GoogleMapsClass(
        React.findDOMNode(this.refs.googleMaps),
        googleMapsConfig
      );
      exposeGetters(this, GoogleMapsClass.prototype, instance);

      this.setState({instance});
    }

    if (bounds) {
      instance.fitBounds(bounds);
    }

    return instance;
  }

  render () {
    const {props} = this;

    return (
      <div {...props.containerProps} ref="googleMaps">
        { this._render_virtual_container_() }
      </div>
    );
  }

  _render_virtual_container_ () {
    const {props} = this,
          {googleMapsApi, children} = props,
          {instance} = this.state;
    if (!googleMapsApi || !instance) {
      return;
    }
    return (
      <VirtualContainer
        googleMapsApi={googleMapsApi}
        map={instance}>
        {children}
      </VirtualContainer>
    );
  }

}

GoogleMaps.propTypes = {
  ...EventComponent.propTypes,
  containerProps: PropTypes.object.isRequired,
  bounds: React.PropTypes.object,
};

GoogleMaps._registerEvents = createRegisterEvents(
  "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed"
);

export default GoogleMaps;

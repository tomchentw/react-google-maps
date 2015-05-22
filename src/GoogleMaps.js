import React from "react";

import EventComponent from "./internals/EventComponent";
/*eslint-disable no-unused-vars */
import VirtualContainer from "./internals/VirtualContainer";
/*eslint-enable no-unused-vars */
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
    /*eslint-disable no-unused-vars */
    const {containerProps, googleMapsApi, ...googleMapsConfig} = props;
    /*eslint-enable no-unused-vars */
    var {instance} = this.state;

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
    return instance;
  }

  componentDidMount () {
    super.componentDidMount();
    this._containerNode = document.createElement("div");
    this._render_virtual_container_();
  }

  componentDidUpdate () {
    super.componentDidUpdate();
    this._render_virtual_container_();
  }

  componentWillUnmount () {
    React.unmountComponentAtNode(this._containerNode);
    this._containerNode = null;
    super.componentWillUnmount();
  }

  render () {
    const {props} = this;

    return (
      <div {...props.containerProps} ref="googleMaps" />
    );
  }

  _render_virtual_container_ () {
    const {props} = this,
          {googleMapsApi, children} = props,
          {instance} = this.state;
    if (!googleMapsApi || !instance) {
      return;
    }
    return React.render(
      <VirtualContainer
        googleMapsApi={googleMapsApi}
        map={instance}>
        {children}
      </VirtualContainer>
    , this._containerNode);
  }

}

GoogleMaps.propTypes = {
  ...EventComponent.propTypes,
  containerProps: PropTypes.object.isRequired,
};

GoogleMaps._registerEvents = createRegisterEvents(
  "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed"
);

export default GoogleMaps;

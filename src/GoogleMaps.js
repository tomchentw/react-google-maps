import React from "react";

import EventComponent from "./internals/EventComponent";
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
  constructor (props) {
    super(props);
    this.state = {};
  }

  _createOrUpdateInstance () {
    const {props} = this;
    if (!props.googleMapsApi) {
      return;
    }
    // googleMapsApi can be async loaded
    const {containerProps, googleMapsApi, key, ref, ...googleMapsConfig} = props;
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

  render () {
    const {props} = this;

    return (
      <div {...props.containerProps}>
        <div {...props.mapProps} ref="googleMaps" />
        {this._render_children_()}
      </div>
    );
  }

  _render_children_ () {
    const extraProps = {
      googleMapsApi: this.props.googleMapsApi,
      map: this.state.instance,
    };

    return React.Children.map(this.props.children, (child) => {
      if (child && child.type) {
        child = React.cloneElement(child, extraProps);
      }
      return child;
    });
  }
}

GoogleMaps.propTypes = {
  ...EventComponent.propTypes,
  containerProps: PropTypes.object.isRequired,
  mapProps: PropTypes.object.isRequired,
};

GoogleMaps._registerEvents = createRegisterEvents(
  "bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed"
);

export default GoogleMaps;

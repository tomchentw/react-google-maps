import React from "react";
import warning from "react/lib/warning";
import objectPath from "object-path";

import EventComponent from "./EventComponent";
import exposeGetters from "./exposeGetters";

const {PropTypes} = React;

class SimpleChildComponent extends EventComponent {
  /* Contract
   *  statics:
   *    _GoogleMapsClassName:
   *  state:
   *    instance
   */
  constructor (...args) {
    super(...args);
    this.state = {};
  }

  _createOrUpdateInstance () {
    const {props} = this;
    if (!props.googleMapsApi || !props.map) {
      return;
    }
    const {googleMapsApi, ...googleMapsConfig} = props;
    var {instance} = this.state;

    if (instance) {
      if (googleMapsConfig.map === instance.getMap()) {
        // Set map and animation props only on the first run:
        delete googleMapsConfig.map;
        delete googleMapsConfig.animation;
      }
      instance.setOptions(googleMapsConfig);
    } else {
      const googleMapsClassName = this.constructor._GoogleMapsClassName;
      if (!objectPath.has(googleMapsApi, googleMapsClassName)) {
        warning(false,
"This react-google-maps component can't find the corresponding " +
"Google Maps API class 'google.maps.%s'. You may have to include " +
"additional Google Maps libraries in your javascript src URL. " +
"See: https://developers.google.com/maps/documentation/javascript/libraries",
        googleMapsClassName);
        return;
      }
      const GoogleMapsClass = objectPath.get(googleMapsApi, googleMapsClassName);
      instance = new GoogleMapsClass(googleMapsConfig);

      exposeGetters(this, GoogleMapsClass.prototype, instance);
      this.setState({instance});
    }
    return instance;
  }

  componentWillUnmount () {
    super.componentWillUnmount();
    const {instance} = this.state;
    if (instance) {
      instance.setMap(null);
    }
  }

  render () {
    return <noscript />;
  }

}

SimpleChildComponent.propTypes = {
  ...EventComponent.propTypes,
  map: PropTypes.object,
};

export default SimpleChildComponent;

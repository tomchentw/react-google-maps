import React from "react";

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
  constructor (props) {
    super(props);
    this.state = {};
  }

  _createOrUpdateInstance () {
    const {props} = this;
    if (!props.googleMapsApi || !props.map) {
      return;
    }
    const {googleMapsApi, key, ref, ...googleMapsConfig} = props;
    var {instance} = this.state;

    if (instance) {
      if (googleMapsConfig.map !== instance.getMap()) {
        instance.setMap(googleMapsConfig.map);
      }
      instance.setOptions(googleMapsConfig);
    } else {
      const GoogleMapsClass = googleMapsApi[this.constructor._GoogleMapsClassName];
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
    const {props} = this;

    return <noscript />;
  }

}

SimpleChildComponent.propTypes = {
  ...EventComponent.propTypes,
  map: PropTypes.object,
};

export default SimpleChildComponent;

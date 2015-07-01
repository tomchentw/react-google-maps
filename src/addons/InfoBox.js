import React from "react";
import SimpleChildComponent from "../internals/SimpleChildComponent";
import createRegisterEvents from "../internals/createRegisterEvents";
import exposeGetters from "../internals/exposeGetters";

const {PropTypes} = React;

class InfoBox extends SimpleChildComponent {
  constructor (...args) {
    super(...args);
    this.state = {};
  }

  _createOrUpdateInstance () {
    const props = this.props;
    const {googleMapsApi, ...googleMapsConfig} = props;
    let {instance} = this.state;

    if (instance) {
      instance = super._createOrUpdateInstance();
    } else {
      // "google-maps-infobox" uses "google" as a global variable. Since we don't
      // have "google" on the server, we can not use it in server-side rendering.
      // As a result, we import "google-maps-infobox" here to prevent an error on
      // a isomorphic server.
      const GoogleMapsInfobox = require("google-maps-infobox");
      instance = new GoogleMapsInfobox(googleMapsConfig);
      exposeGetters(this, GoogleMapsInfobox.prototype, instance);
      this.setState({instance});
      instance.open(
        this.props.map,
        this.props.anchor
      );
    }

    return instance;
  }
}


InfoBox.propTypes = {
  ...SimpleChildComponent.propTypes,
  anchor: PropTypes.object,
};

InfoBox._GoogleMapsClassName = "InfoBox";

InfoBox._registerEvents = createRegisterEvents(
  "closeclick content_changed domready position_changed zindex_changed"
);


export default InfoBox;

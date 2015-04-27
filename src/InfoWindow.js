import React from "react";

import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";

const {PropTypes} = React;

class InfoWindow extends SimpleChildComponent {

  _createOrUpdateInstance () {
    const instance = super._createOrUpdateInstance();
    if (instance) {
      instance.open(
        this.props.map,
        this.props.anchor
      );
    }
    return instance;
  }

}

InfoWindow.propTypes = {
  ...SimpleChildComponent.propTypes,
  anchor: PropTypes.object,
};

InfoWindow._GoogleMapsClassName = "InfoWindow";

InfoWindow._registerEvents = createRegisterEvents(
  "closeclick content_changed domready position_changed zindex_changed"
);

export default InfoWindow;

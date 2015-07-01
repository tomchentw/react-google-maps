import React from "react";

import SimpleChildComponent from "./internals/SimpleChildComponent";
import createOverlayViewProxy from "./internals/createOverlayViewProxy";
import createRegisterEvents from "./internals/createRegisterEvents";
import exposeGetters from "./internals/exposeGetters";

class OverlayView extends SimpleChildComponent {
  _createOrUpdateInstance () {
    const {props} = this;
    if (!props.googleMapsApi || !props.map) {
      return;
    }
    var {instance} = this.state;

    if (instance) {
      instance = super._createOrUpdateInstance();
      instance.draw();
    } else {
      instance = createOverlayViewProxy(this.props);
      exposeGetters(this, instance.constructor.prototype, instance);
      this.setState({instance});
    }
    return instance;
  }
}

OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";

OverlayView.propTypes = {
  ...SimpleChildComponent.propTypes,
  mapPane: React.PropTypes.oneOf([
    OverlayView.FLOAT_PANE,
    OverlayView.MAP_PANE,
    OverlayView.MARKER_LAYER,
    OverlayView.OVERLAY_LAYER,
    OverlayView.OVERLAY_MOUSE_TARGET,
  ]),
  getPixelPositionOffset: React.PropTypes.func,
};

OverlayView.defaultProps = {
  mapPane: OverlayView.OVERLAY_LAYER,
};

OverlayView._registerEvents = createRegisterEvents(
  "projection_changed position_changed"
);

export default OverlayView;

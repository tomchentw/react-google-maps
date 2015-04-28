import React from "react";

import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";

import InfoWindow from "./InfoWindow";

class Marker extends SimpleChildComponent {

  render () {
    const {props} = this;

    return (
      <noscript>
        {this._render_potential_info_windows_()}
      </noscript>
    );
  }

  _render_potential_info_windows_ () {
    const extraProps = {
      googleMapsApi: this.props.googleMapsApi,
      map: this.props.map,
      anchor: this.state.instance,
    };

    return React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child) && child.type === InfoWindow) {
        child = React.cloneElement(child, extraProps);
      }
      return child;
    }, this);
  }

}

Marker._GoogleMapsClassName = "Marker";

Marker._registerEvents = createRegisterEvents(
  "animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shape_changed title_changed visible_changed zindex_changed"
);

export default Marker;

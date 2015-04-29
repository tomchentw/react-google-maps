import React from "react";

import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";

import InfoWindow from "./InfoWindow";

const {Children} = React;

class Marker extends SimpleChildComponent {

  render () {
    if (0 === Children.count(this.props.children)) {
      return <noscript />;
    }

    return (
      <div>
        {this._render_potential_info_windows_()}
      </div>
    );
  }

  _render_potential_info_windows_ () {
    const {props} = this;
    const extraProps = {
      googleMapsApi: props.googleMapsApi,
      map: props.map,
      anchor: this.state.instance,
    };

    return Children.map(props.children, (child) => {
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

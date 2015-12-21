import {
  default as React,
  Component,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as MarkerCreator,
  markerDefaultPropTypes,
  markerControlledPropTypes,
  markerEventPropTypes,
} from "./creators/MarkerCreator";

export default class Marker extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...markerDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...markerControlledPropTypes,
    // Event [onEventName]
    ...markerEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getAnimation() { return this.state.marker.getAnimation(); }

  getAttribution() { return this.state.marker.getAttribution(); }

  getClickable() { return this.state.marker.getClickable(); }

  getCursor() { return this.state.marker.getCursor(); }

  getDraggable() { return this.state.marker.getDraggable(); }

  getIcon() { return this.state.marker.getIcon(); }

  getLabel() { return this.state.marker.getLabel(); }

  getOpacity() { return this.state.marker.getOpacity(); }

  getPlace() { return this.state.marker.getPlace(); }

  getPosition() { return this.state.marker.getPosition(); }

  getShape() { return this.state.marker.getShape(); }

  getTitle() { return this.state.marker.getTitle(); }

  getVisible() { return this.state.marker.getVisible(); }

  getZIndex() { return this.state.marker.getZIndex(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker

  state = {
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    const marker = MarkerCreator._createMarker(this.props);

    this.setState({ marker });
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }

    const { anchorHolderRef } = this.props;
    const { marker } = this.state;


    if (anchorHolderRef) {
      if (`MarkerClusterer` === anchorHolderRef.getAnchorType()) {
        anchorHolderRef.getAnchor().removeMarker(marker);
      }
    }
  }

  render() {
    if (this.state.marker) {
      return (
        <MarkerCreator marker={this.state.marker} {...this.props}>
          {this.props.children}
        </MarkerCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

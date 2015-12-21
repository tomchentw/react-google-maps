import {
  default as React,
  Component,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as PolylineCreator,
  polylineDefaultPropTypes,
  polylineControlledPropTypes,
  polylineEventPropTypes,
} from "./creators/PolylineCreator";

export default class Polyline extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...polylineDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...polylineControlledPropTypes,
    // Event [onEventName]
    ...polylineEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getDraggable() { return this.state.polyline.getDraggable(); }

  getEditable() { return this.state.polyline.getEditable(); }

  getPath() { return this.state.polyline.getPath(); }

  getVisible() { return this.state.polyline.getVisible(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline

  state = {
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    const polyline = PolylineCreator._createPolyline(this.props);

    this.setState({ polyline });
  }

  render() {
    if (this.state.polyline) {
      return (
        <PolylineCreator polyline={this.state.polyline} {...this.props}>
          {this.props.children}
        </PolylineCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

import {
  default as React,
  Component,
  PropTypes,
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

import { default as GoogleMapHolder } from "./creators/GoogleMapHolder";

export default class Polyline extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...polylineDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...polylineControlledPropTypes,
    // Event [onEventName]
    ...polylineEventPropTypes,
  }

  static contextTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder),
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
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
    const { mapHolderRef } = this.context;

    if (!canUseDOM) {
      return;
    }
    const polyline = PolylineCreator._createPolyline({
      ...this.props,
      mapHolderRef,
    });

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

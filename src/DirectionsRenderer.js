import {
  default as React,
  Component,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as DirectionsRendererCreator,
  directionsRendererDefaultPropTypes,
  directionsRendererControlledPropTypes,
  directionsRendererEventPropTypes,
} from "./creators/DirectionsRendererCreator";

/*
 * Original author: @alexishevia
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/22
 */
export default class DirectionsRenderer extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...directionsRendererDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...directionsRendererControlledPropTypes,
    // Event [onEventName]
    ...directionsRendererEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getDirections() { return this.state.directionsRenderer.getDirections(); }

  getPanel() { return this.state.directionsRenderer.getPanel(); }

  getRouteIndex() { return this.state.directionsRenderer.getRouteIndex(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer

  state = {
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    const directionsRenderer = DirectionsRendererCreator._createDirectionsRenderer(this.props);

    this.setState({ directionsRenderer });
  }

  render() {
    if (this.state.directionsRenderer) {
      return (
        <DirectionsRendererCreator directionsRenderer={this.state.directionsRenderer} {...this.props}>
          {this.props.children}
        </DirectionsRendererCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

import {
  default as React,
  Component,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as KmlLayerCreator,
  kmlLayerDefaultPropTypes,
  kmlLayerControlledPropTypes,
  kmlLayerEventPropTypes,
} from "./creators/KmlLayerCreator";

export default class KmlLayer extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...kmlLayerDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...kmlLayerControlledPropTypes,
    // Event [onEventName]
    ...kmlLayerEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getDefaultViewport() { return this.state.kmlLayer.getDefaultViewport(); }

  getMetadata() { return this.state.kmlLayer.getMetadata(); }

  getStatus() { return this.state.kmlLayer.getStatus(); }

  getUrl() { return this.state.kmlLayer.getUrl(); }

  getZIndex() { return this.state.marker.getZIndex(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer

  state = {
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    const kmlLayer = KmlLayerCreator._createKmlLayer(this.props);

    this.setState({ kmlLayer });
  }

  render() {
    if (this.state.kmlLayer) {
      return (
        <KmlLayerCreator kmlLayer={this.state.kmlLayer} {...this.props}>
          {this.props.children}
        </KmlLayerCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

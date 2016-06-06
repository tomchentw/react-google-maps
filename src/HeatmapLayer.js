import {
  default as React,
  Component,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as HeatmapLayerCreator,
  heatmapLayerDefaultPropTypes,
  heatmapLayerControlledPropTypes,
  heatmapLayerEventPropTypes,
} from "./creators/HeatmapLayerCreator";

export default class HeatmapLayer extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...heatmapLayerDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...heatmapLayerControlledPropTypes,
    // Event [onEventName]
    ...heatmapLayerEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
  //
  getData() { return this.state.heatmapLayer.getData(); }

  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer

  state = {
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    const heatmapLayer = HeatmapLayerCreator._createHeatmapLayer(this.props);

    this.setState({ heatmapLayer });
  }

  render() {
    if (this.state.heatmapLayer) {
      return (
        <HeatmapLayerCreator heatmapLayer={this.state.heatmapLayer} {...this.props}>
          {this.props.children}
        </HeatmapLayerCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

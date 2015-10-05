import {
  default as React,
  Component,
} from "react";

import {
  default as MarkerClustererCreator,
  markerClustererDefaultPropTypes,
  markerClustererControlledPropTypes,
  markerClustererEventPropTypes
} from "./creators/MarkerClustererCreator";

export default class MarkerClusterer extends Component {

  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...markerClustererDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...markerClustererControlledPropTypes,
    // Event [onEventName]
    ...markerClustererEventPropTypes,
  }

  // Public APIs
  getCalculator() { return this.state.markClusterer.getCalculator(); }

  getExtendedBounds() { return this.state.markClusterer.getExtendedBounds(); }

  getGridSize() { return this.state.markClusterer.getGridSize(); }

  getMarkers() { return this.state.markClusterer.getMarkers(); }

  getMaxZoom() { return this.state.markClusterer.getMaxZoom(); }

  getStyles() { return this.state.markClusterer.getStyles(); }

  getTotalClusters() { return this.state.markClusterer.getTotalClusters(); }

  getTotalMarkers() { return this.state.markClusterer.getTotalMarkers(); }
  // END - Public APIs

  state = {}

  componentDidMount () {
    const {mapHolderRef, ...markerClustererProps} = this.props;
    const markerClusterer = MarkerClustererCreator._createMarkerClusterer(mapHolderRef, markerClustererProps);

    this.setState({ markerClusterer });
  }

  render () {
    if (this.state.markerClusterer) {
      return (
        <MarkerClustererCreator markerClusterer={this.state.markerClusterer} {...this.props}>
          {this.props.children}
        </MarkerClustererCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}


import {
  default as React,
  Component,
} from 'react';

import {
  default as canUseDOM,
} from 'can-use-dom';

import {
  default as MarkerClustererCreator,
  markerClusterDefaultPropTypes,
  markerClusterControlledPropTypes,
  markerClusterEventPropTypes,
} from './addonsCreators/MarkerClustererCreator';

export default class MarkerClusterer extends Component {
  static propTypes = {
    ...markerClusterDefaultPropTypes,
    ...markerClusterControlledPropTypes,
    ...markerClusterEventPropTypes,
  }

  // Public APIs
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
  getAverageCenter() { return this.state.markerClusterer.getAverageCenter(); }

  getBatchSizeIE() { return this.state.markerClusterer.getBatchSizeIE(); }

  getCalculator() { return this.state.markerClusterer.getCalculator(); }

  getClusterClass() { return this.state.markerClusterer.getClusterClass(); }

  getClusters() { return this.state.markerClusterer.getClusters(); }

  getEnableRetinaIcons() { return this.state.markerClusterer.getEnableRetinaIcons(); }

  getGridSize() { return this.state.markerClusterer.getGridSize(); }

  getIgnoreHidden() { return this.state.markerClusterer.getIgnoreHidden(); }

  getImageExtension() { return this.state.markerClusterer.getImageExtension(); }

  getImagePath() { return this.state.markerClusterer.getImagePath(); }

  getImageSize() { return this.state.markerClusterer.getImageSize(); }

  getMarkers() { return this.state.markerClusterer.getMarkers(); }

  getMaxZoom() { return this.state.markerClusterer.getMaxZoom(); }

  getMinimumClusterSize() { return this.state.markerClusterer.getMinimumClusterSize(); }

  getStyles() { return this.state.markerClusterer.getStyles(); }

  getTitle() { return this.state.markerClusterer.getTitle(); }

  getTotalClusters() { return this.state.markerClusterer.getTotalClusters(); }

  getZoomOnClick() { return this.state.markerClusterer.getZoomOnClick(); }

  // Public APIs - Use this carefully
  addMarker(marker, nodraw = false) { return this.state.markerClusterer.addMarker(marker, nodraw); }

  addMarkers(markers, nodraw = false) { return this.state.markerClusterer.addMarkers(markers, nodraw); }

  removeMarker(marker, nodraw = false) { return this.state.markerClusterer.removeMarker(marker, nodraw); }

  removeMarkers(markers, nodraw = false) { return this.state.markerClusterer.removeMarkers(markers, nodraw); }

  clearMarkers() { return this.state.markerClusterer.clearMarkers(); }

  fitMapToMarkers() { return this.state.markerClusterer.fitMapToMarkers(); }

  repaint() { return this.state.markerClusterer.repaint(); }

  state = {}

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }

    const { mapHolderRef, ...markerClustererProps } = this.props;
    const markerClusterer = MarkerClustererCreator._createMarkerClusterer(mapHolderRef, markerClustererProps);

    this.setState({ markerClusterer });
  }

  render() {
    if (this.state.markerClusterer) {
      return (
        <MarkerClustererCreator markerClusterer={ this.state.markerClusterer } { ...this.props }>
          { this.props.children }
        </MarkerClustererCreator>
      );
    } else {
      return <noscript />;
    }
  }
}

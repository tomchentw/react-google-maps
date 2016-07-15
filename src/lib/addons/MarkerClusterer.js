import _ from "lodash";

import {
  default as React,
  PropTypes,
} from "react";

import MarkerClustererPlus from "marker-clusterer-plus";

import {
  MAP,
  ANCHOR,
  MARKER_CLUSTERER,
} from "../constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "../enhanceElement";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html
  averageCenter: PropTypes.bool,
  batchSizeIE: PropTypes.number,
  calculator: PropTypes.func,
  clusterClass: PropTypes.string,
  enableRetinaIcons: PropTypes.bool,
  gridSize: PropTypes.number,
  ignoreHidden: PropTypes.bool,
  imageExtension: PropTypes.string,
  imagePath: PropTypes.string,
  imageSizes: PropTypes.array,
  maxZoom: PropTypes.number,
  minimumClusterSize: PropTypes.number,
  styles: PropTypes.array,
  title: PropTypes.string,
  zoomOnClick: PropTypes.bool,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html
  onClick: `click`,

  onClusteringBegin: `clusteringbegin`,

  onClusteringEnd: `clusteringend`,

  onMouseOut: `mouseout`,

  onMouseOver: `mouseover`,
};

const publicMethodMap = {
  // Public APIs
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
  getAverageCenter(markerClusterer) { return markerClusterer.getAverageCenter(); },

  getBatchSizeIE(markerClusterer) { return markerClusterer.getBatchSizeIE(); },

  getCalculator(markerClusterer) { return markerClusterer.getCalculator(); },

  getClusterClass(markerClusterer) { return markerClusterer.getClusterClass(); },

  getClusters(markerClusterer) { return markerClusterer.getClusters(); },

  getEnableRetinaIcons(markerClusterer) { return markerClusterer.getEnableRetinaIcons(); },

  getGridSize(markerClusterer) { return markerClusterer.getGridSize(); },

  getIgnoreHidden(markerClusterer) { return markerClusterer.getIgnoreHidden(); },

  getImageExtension(markerClusterer) { return markerClusterer.getImageExtension(); },

  getImagePath(markerClusterer) { return markerClusterer.getImagePath(); },

  getImageSize(markerClusterer) { return markerClusterer.getImageSize(); },

  getMarkers(markerClusterer) { return markerClusterer.getMarkers(); },

  getMaxZoom(markerClusterer) { return markerClusterer.getMaxZoom(); },

  getMinimumClusterSize(markerClusterer) { return markerClusterer.getMinimumClusterSize(); },

  getStyles(markerClusterer) { return markerClusterer.getStyles(); },

  getTitle(markerClusterer) { return markerClusterer.getTitle(); },

  getTotalClusters(markerClusterer) { return markerClusterer.getTotalClusters(); },

  getZoomOnClick(markerClusterer) { return markerClusterer.getZoomOnClick(); },

  // Public APIs - Use this carefully
  addMarker(markerClusterer, marker, nodraw = false) {
    return markerClusterer.addMarker(marker, nodraw);
  },

  addMarkers(markerClusterer, markers, nodraw = false) {
    return markerClusterer.addMarkers(markers, nodraw);
  },

  removeMarker(markerClusterer, marker, nodraw = false) {
    return markerClusterer.removeMarker(marker, nodraw);
  },

  removeMarkers(markerClusterer, markers, nodraw = false) {
    return markerClusterer.removeMarkers(markers, nodraw);
  },

  clearMarkers(markerClusterer) { return markerClusterer.clearMarkers(); },

  fitMapToMarkers(markerClusterer) { return markerClusterer.fitMapToMarkers(); },

  repaint(markerClusterer) { return markerClusterer.repaint(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  averageCenter(markerClusterer, averageCenter) {
    markerClusterer.setAverageCenter(averageCenter);
  },

  batchSizeIE(markerClusterer, batchSizeIE) {
    markerClusterer.setBatchSizeIE(batchSizeIE);
  },

  calculator(markerClusterer, calculator) { markerClusterer.setCalculator(calculator); },

  enableRetinaIcons(markerClusterer, enableRetinaIcons) {
    markerClusterer.setEnableRetinaIcons(enableRetinaIcons);
  },

  gridSize(markerClusterer, gridSize) { markerClusterer.setGridSize(gridSize); },

  ignoreHidden(markerClusterer, ignoreHidden) { markerClusterer.setIgnoreHidden(ignoreHidden); },

  imageExtension(markerClusterer, imageExtension) {
    markerClusterer.setImageExtension(imageExtension);
  },

  imagePath(markerClusterer, imagePath) { markerClusterer.setImagePath(imagePath); },

  imageSizes(markerClusterer, imageSizes) { markerClusterer.setImageSizes(imageSizes); },

  maxZoom(markerClusterer, maxZoom) { markerClusterer.setMaxZoom(maxZoom); },

  minimumClusterSize(markerClusterer, minimumClusterSize) {
    markerClusterer.setMinimumClusterSize(minimumClusterSize);
  },

  styles(markerClusterer, styles) { markerClusterer.setStyles(styles); },

  title(markerClusterer, title) { markerClusterer.setTitle(title); },

  zoomOnClick(markerClusterer, zoomOnClick) { markerClusterer.setZoomOnClick(zoomOnClick); },
};

function getInstanceFromComponent(component) {
  return component.state[MARKER_CLUSTERER];
}

export default _.flowRight(
  React.createClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `MarkerClusterer`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  childContextTypes: {
    [ANCHOR]: PropTypes.object,
    [MARKER_CLUSTERER]: PropTypes.object,
  },

  getInitialState() {
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
    const markerClusterer = new MarkerClustererPlus(
      this.context[MAP],
      [],
      collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      )
    );
    return {
      [MARKER_CLUSTERER]: markerClusterer,
    };
  },

  getChildContext() {
    const markerClusterer = getInstanceFromComponent(this);
    return {
      [ANCHOR]: markerClusterer,
      [MARKER_CLUSTERER]: markerClusterer,
    };
  },

  componentDidUpdate() {
    const markerClusterer = getInstanceFromComponent(this);
    markerClusterer.repaint();
  },

  componentWillUnmount() {
    const markerClusterer = getInstanceFromComponent(this);
    if (markerClusterer) {
      markerClusterer.setMap(null);
    }
  },

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  },
});

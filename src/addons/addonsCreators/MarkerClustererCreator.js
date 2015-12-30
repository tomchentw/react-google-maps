import {
  default as React,
  PropTypes,
  Component,
  Children,
} from 'react';

import { default as MarkerClustererEventList } from '../addonsEventLists/MarkerClustererEventList';
import { default as eventHandlerCreator } from '../../utils/eventHandlerCreator';
import { default as defaultPropsCreator } from '../../utils/defaultPropsCreator';
import { default as composeOptions } from '../../utils/composeOptions';
import { default as componentLifecycleDecorator } from '../../utils/componentLifecycleDecorator';
import { default as GoogleMapHolder } from '../../creators/GoogleMapHolder';

export const markerClustererControlledPropTypes = {
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

export const markerClustererDefaultPropTypes = defaultPropsCreator(markerClustererControlledPropTypes);

const markerClustererUpdaters = {
  averageCenter(averageCenter, component) { component.getMarkerClusterer().setAverageCenter(averageCenter); },

  batchSizeIE(batchSizeIE, component) { component.getMarkerClusterer().setBatchSizeIE(batchSizeIE); },

  calculator(calculator, component) { component.getMarkerClusterer().setCalculator(calculator); },

  enableRetinaIcons(enableRetinaIcons, component) { component.getMarkerClusterer().setEnableRetinaIcons(enableRetinaIcons); },

  gridSize(gridSize, component) { component.getMarkerClusterer().setGridSize(gridSize); },

  ignoreHidden(ignoreHidden, component) { component.getMarkerClusterer().setIgnoreHidden(ignoreHidden); },

  imageExtension(imageExtension, component) { component.getMarkerClusterer().setImageExtension(imageExtension); },

  imagePath(imagePath, component) { component.getMarkerClusterer().setImagePath(imagePath); },

  imageSizes(imageSizes, component) { component.getMarkerClusterer().setImageSizes(imageSizes); },

  maxZoom(maxZoom, component) { component.getMarkerClusterer().setMaxZoom(maxZoom); },

  minimumClusterSize(minimumClusterSize, component) { component.getMarkerClusterer().setMinimumClusterSize(minimumClusterSize); },

  styles(styles, component) { component.getMarkerClusterer().setStyles(styles); },

  title(title, component) { component.getMarkerClusterer().setTitle(title); },

  zoomOnClick(zoomOnClick, component) { component.getMarkerClusterer().setZoomOnClick(zoomOnClick); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(MarkerClustererEventList);

export const markerClustererEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getMarkerClusterer`,
  updaters: markerClustererUpdaters,
})
export default class MarkerClustererCreator extends Component {
  static PropTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    markerClusterer: PropTypes.object.isRequired,
  }

  static _createMarkerClusterer(mapHolderRef, markerClustererProps) {
    const GoogleMarkerClusterer = require(`marker-clusterer-plus`);

    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/docs/reference.html#events
    const markerClusterer = new GoogleMarkerClusterer(mapHolderRef.getMap(), [], composeOptions(markerClustererProps, markerClustererControlledPropTypes));

    return markerClusterer;
  }

  getMarkerClusterer() {
    return this.props.markerClusterer;
  }

  componentDidUpdate(prevProps) {
    this.props.markerClusterer.repaint();
  }

  componentWillUnmount() {
    this.props.markerClusterer.setMap(null);
  }

  getAnchor() {
    return this.props.markerClusterer;
  }

  getAnchorType() {
    return `MarkerClusterer`;
  }

  render() {
    const { mapHolderRef, children } = this.props;

    if (Children.count(children) > 0) {
      return (
        <div>
          {
            Children.map(children, childElement => {
              if (React.isValidElement(childElement)) {
                return React.cloneElement(childElement, {
                  mapHolderRef,
                  anchorHolderRef: this,
                });
              } else {
                return childElement;
              }
            })
          }
        </div>
      );
    } else {
      return <noscript />;
    }
  }
}

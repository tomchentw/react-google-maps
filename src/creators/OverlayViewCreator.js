import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import {
  render,
  unmountComponentAtNode,
} from "react-dom";

import { default as invariant } from "invariant";

import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const overlayViewControlledPropTypes = {
// CustomProps
  mapPaneName: PropTypes.string,
  getPixelPositionOffset: PropTypes.func,
  position: PropTypes.object,
  children: PropTypes.node,
  bounds: PropTypes.object,
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference
};

export const overlayViewDefaultPropTypes = defaultPropsCreator(overlayViewControlledPropTypes);

export default class OverlayViewCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    mapPaneName: PropTypes.string,
    overlayView: PropTypes.object.isRequired,
  }

  static _createOverlayView(overlayViewProps) {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
    const overlayView = new google.maps.OverlayView();
    overlayView.setValues(composeOptions(overlayViewProps, overlayViewControlledPropTypes));

    overlayView.onAdd = function onAdd() {
      this._containerElement = document.createElement(`div`);
      this._containerElement.style.position = `absolute`;
    };

    overlayView.draw = function draw() {
      this._mountContainerToPane();
      this._renderContent();
    };

    overlayView.onRemove = function onRemove() {
      unmountComponentAtNode(this._containerElement);
      this._unmountContainerFromPane();
      this._containerElement = null;
    };

    overlayView._redraw = function _redraw(mapPaneNameChanged) {
      if (mapPaneNameChanged) {
        this._unmountContainerFromPane();
        this._mountContainerToPane();
      }
      this._renderContent();
    };

    overlayView._renderContent = function _renderContent() {
      if (this._containerElement) {
        render(
          Children.only(this.get(`children`)),
          this._containerElement,
          this._positionContainerElement.bind(this)
        );
      }
    };

    overlayView._mountContainerToPane = function _mountContainerToPane() {
      const mapPaneName = this.get(`mapPaneName`);
      invariant(!!mapPaneName, `OverlayView requires a mapPaneName/defaultMapPaneName in your props instead of %s`, mapPaneName);

      this.getPanes()[mapPaneName].appendChild(this._containerElement);
    };

    overlayView._unmountContainerFromPane = function _unmountContainerFromPane() {
      this._containerElement.parentNode.removeChild(this._containerElement);
    };

    overlayView._positionContainerElement = function _positionContainerElement() {
      let left;
      let top;
      const offset = this._getOffset();
      if (this.get(`bounds`)) {
        const bounds = this._getPixelBounds();
        if (bounds) {
          const { sw, ne } = bounds;
          if (offset) {
            sw.x += offset.x;
            ne.y += offset.y;
          }
          left = sw.x + `px`;
          top = ne.y + `px`;
          this._containerElement.style.width = (ne.x - sw.x) + `px`;
          this._containerElement.style.height = (sw.y - ne.y) + `px`;
        }
      } else {
        const position = this._getPixelPosition();
        if (position) {
          let { x, y } = position;
          if (offset) {
            x += offset.x;
            y += offset.y;
          }
          left = x + `px`;
          top = y + `px`;
        }
      }

      this._containerElement.style.left = left;
      this._containerElement.style.top = top;
    };

    overlayView._getPixelPosition = function _getPixelPosition() {
      const projection = this.getProjection();
      let position = this.get(`position`);
      invariant(!!position, `OverlayView requires a position/defaultPosition in your props instead of %s`, position);
      if (projection && position) {
        if (!(position instanceof google.maps.LatLng)) {
          position = new google.maps.LatLng(position.lat, position.lng);
        }
        return projection.fromLatLngToDivPixel(position);
      }
    };

    overlayView._getPixelBounds = function _getPixelBounds() {
      const projection = this.getProjection();
      let bounds = this.get(`bounds`);
      invariant(!!bounds, `OverlayView requires a bounds in your props instead of %s`, bounds);
      if (projection && bounds) {
        if (!(bounds instanceof google.maps.LatLngBounds)) {
          bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(bounds.ne.lat, bounds.ne.lng),
            new google.maps.LatLng(bounds.sw.lat, bounds.sw.lng)
          );
        }
        return {
          sw: projection.fromLatLngToDivPixel(this.bounds.getSouthWest()),
          ne: projection.fromLatLngToDivPixel(this.bounds.getNorthEast()),
        };
      }
    };

    overlayView._getOffset = function _getOffset() {
      // Allows the component to control the visual position of the OverlayView
      // relative to the LatLng pixel position.
      const getPixelPositionOffset = this.get(`getPixelPositionOffset`);
      if (getPixelPositionOffset) {
        return getPixelPositionOffset(
          this._containerElement.offsetWidth,
          this._containerElement.offsetHeight
        );
      }
    };

    // If we're inside a MarkerClusterer, allow ourselves to be clustered
    if (overlayViewProps.anchorHolderRef) {
      if (`MarkerClusterer` === overlayViewProps.anchorHolderRef.getAnchorType()) {
        overlayView.getDraggable = function getDraggable() {
          return !!overlayViewProps.draggable;
        };

        overlayView.getPosition = function getPosition() {
          return new google.maps.LatLng(this.position);
        };

        overlayViewProps.anchorHolderRef.getAnchor().addMarker(overlayView);
      }
    }

    return overlayView;
  }

  getOverlayView() {
    return this.props.overlayView;
  }

  componentDidMount() {
    this.getOverlayView().setMap(this.props.mapHolderRef.getMap());
  }

  componentDidUpdate(prevProps) {
    this.getOverlayView().setValues(this.props);
    this.getOverlayView()._redraw(this.props.mapPaneName !== prevProps.mapPaneName);
  }

  componentWillUnmount() {
    this.getOverlayView().setMap(null);
  }

  render() {
    return (<noscript />);
  }
}

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
      this._renderContent();
      this._mountContainerToPane();
      this._positionContainerElement();
    };

    overlayView.onRemove = function onRemove() {
      unmountComponentAtNode(this._containerElement);
      this._unmountContainerFromPane();
      this._containerElement = null;
    };

    overlayView._redraw = function _redraw(mapPaneNameChanged) {
      this._renderContent();
      if (mapPaneNameChanged) {
        this._unmountContainerFromPane();
        this._mountContainerToPane();
      }
      this._positionContainerElement();
    };

    overlayView._renderContent = function _renderContent() {
      render(
        Children.only(this.get(`children`)),
        this._containerElement
      );
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
      const position = this._getPixelPosition();
      if (position) {
        let { x, y } = position;
        const offset = this._getOffset();
        if (offset) {
          x += offset.x;
          y += offset.y;
        }
        left = x + `px`;
        top = y + `px`;
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

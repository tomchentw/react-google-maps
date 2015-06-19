import React from "react";

var OverlayViewProxy;

// Since the Google Maps API can be asynchronously loaded, we define the
// OverlayView subclass in a factory method that's called when it's available.
export default function createOverlayViewProxy (props) {
  const {googleMapsApi, ...googleMapsConfig} = props;
  if (!googleMapsApi) {
    return;
  }
  if (!OverlayViewProxy) {
    OverlayViewProxy = defineOverlayViewProxyClass(googleMapsApi);
  }
  return new OverlayViewProxy(googleMapsConfig);
}

function defineOverlayViewProxyClass (googleMapsApi) {
  return class OverlayViewProxy extends googleMapsApi.OverlayView {
    onAdd () {
      let mapPane = this.get("mapPane");
      this._containerElement = document.createElement("div");
      this._containerElement.style.position = "absolute";
      this.getPanes()[mapPane].appendChild(this._containerElement);
    }

    draw () {
      if (!this._containerElement) {
        return;
      }
      this._renderContent();
      this._positionContainerElement();
    }

    onRemove () {
      React.unmountComponentAtNode(this._containerElement);
      this._containerElement.parentNode.removeChild(this._containerElement);
      this._containerElement = null;
    }

    _renderContent () {
      React.render(
        <div>{this.get("children")}</div>,
        this._containerElement
      );
    }

    _positionContainerElement () {
      let left, top;
      let position = this._getPixelPosition();
      if (position) {
        let {x, y} = position;
        let offset = this._getOffset();
        if (offset) {
          x += offset.x;
          y += offset.y;
        }
        left = x + "px";
        top = y + "px";
      }
      this._containerElement.style.left = left;
      this._containerElement.style.top = top;
    }

    _getPixelPosition () {
      let projection = this.getProjection();
      let position = this.get("position");
      if (projection && position) {
        if (!(position instanceof googleMapsApi.LatLng)) {
          position = new googleMapsApi.LatLng(position.lat, position.lng);
        }
        return projection.fromLatLngToDivPixel(position);
      }
    }

    _getOffset () {
      // Allows the component to control the visual position of the OverlayView
      // relative to the LatLng pixel position.
      let getPixelPositionOffset = this.get("getPixelPositionOffset");
      if (getPixelPositionOffset) {
        return getPixelPositionOffset(
          this._containerElement.offsetWidth,
          this._containerElement.offsetHeight
        );
      }
    }
  };
}

/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "../../../lib";

const SimpleClickEventExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    zoom={props.zoom}
    center={props.center}
    onCenterChanged={props.onCenterChanged}
  >
    <Marker
      defaultPosition={props.center}
      title="Click to zoom"
      onClick={props.onMarkerClick}
    />
  </GoogleMap>
));

const INITIAL_CENTER = { lat: -25.363882, lng: 131.044922 };

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleClickEventExample extends Component {

  state = {
    zoom: 4,
    center: INITIAL_CENTER,
  };

  handleMapMounted = this.handleMapMounted.bind(this);
  handleCenterChanged = this.handleCenterChanged.bind(this);
  handleMarkerClick = this.handleMarkerClick.bind(this);

  handleMapMounted(map) {
    this._map = map;
  }

  handleMarkerClick() {
    this.setState({
      zoom: 8,
    });
  }

  handleCenterChanged() {
    const nextCenter = this._map.getCenter();
    if (nextCenter.equals(new google.maps.LatLng(INITIAL_CENTER))) {
      // Notice: Check nextCenter equality here,
      // or it will fire center_changed event infinitely
      return;
    }
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
    this._timeoutId = setTimeout(() => {
      this.setState({ center: INITIAL_CENTER });
      this._timeoutId = null;
    }, 3000);

    this.setState({
      // Because center now is a controlled variable, we need to set it to new
      // value when "center_changed". Or in the next render it will use out-dated
      // state.center and reset the center of the map to the old location.
      // We can never drag the map.
      center: nextCenter,
    });
  }

  componentWillUnmount() {
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
  }

  render() {
    return (
      <SimpleClickEventExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        zoom={this.state.zoom}
        center={this.state.center}
        onMapMounted={this.handleMapMounted}
        onCenterChanged={this.handleCenterChanged}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

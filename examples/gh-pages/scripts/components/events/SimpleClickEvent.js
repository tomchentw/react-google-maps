import {default as React, Component} from "react";

import {GoogleMap, Marker} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleClickEvent extends Component {

  static defaultProps = {
    initialCenter: {lat: -25.363882, lng: 131.044922},
  }

  state = {
    zoom: 4,
    center: this.props.initialCenter,
  }

  handleMarkerClick () {
    this.setState({
      zoom: 8,
    });
  }

  handleMapCenterChanged () {
    const newPos = this.refs.map.getCenter();
    if (newPos.equals(new google.maps.LatLng(this.props.initialCenter))) {
      // Notice: Check newPos equality here,
      // or it will fire center_changed event infinitely
      return;
    }
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
    this._timeoutId = setTimeout(() => {
      this.setState({ center: this.props.initialCenter });
    }, 3000);

    this.setState({
      // Because center now is a controlled variable, we need to set it to new
      // value when "center_changed". Or in the next render it will use out-dated
      // state.center and reset the center of the map to the old location.
      // We can never drag the map.
      center: newPos,
    });
  }

  render () {
    const {initialCenter, ...restProps} = this.props;
    const {zoom, center} = this.state;

    return (
      <GoogleMap containerProps={{
          ...restProps,
          style: {
            height: "100%",
          },
        }}
        ref="map"
        zoom={zoom}
        center={center}
        onCenterChanged={::this.handleMapCenterChanged}>
        <Marker
          defaultPosition={center}
          title="Click to zoom"
          onClick={::this.handleMarkerClick} />
      </GoogleMap>
    );
  }
}

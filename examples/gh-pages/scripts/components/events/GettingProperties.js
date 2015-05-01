import React from "react/addons";
import {GoogleMaps, InfoWindow, Marker} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-properties
 */
class GettingProperties extends React.Component {

  constructor (...args) {
    super(...args);
    this.state = {
      zoomLevel: 4,
      content: "Change the zoom level", 
    };
  }

  _handle_zoom_changed () {
    const zoomLevel = this.refs.map.getZoom();
    if (zoomLevel !== this.state.zoomLevel) {
      // Notice: Check zoomLevel equality here,
      // or it will fire zoom_changed event infinitely
      this.setState({
        zoomLevel,
        content: `Zoom: ${ zoomLevel }`,
      });
    }
  }

  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props,
          myLatLng = new google.maps.LatLng(-25.363882, 131.044922);

    return (
      <GoogleMaps containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }}
        ref="map"
        googleMapsApi={google.maps}
        zoom={state.zoomLevel}
        center={myLatLng}
        onZoomChanged={this._handle_zoom_changed.bind(this)}>
        <InfoWindow position={myLatLng} content={state.content} />
      </GoogleMaps>
    );
  }

}

export default GettingProperties;

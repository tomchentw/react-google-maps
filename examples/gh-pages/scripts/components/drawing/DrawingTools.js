import React from "react/addons";
import {GoogleMaps, DrawingManager} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools
 *
 * Note: requires the Google Maps drawing API library in your script src
 *
 * Credits: thanks @idolize for the contribution!
 */
class DrawingTools extends React.Component {

  constructor (...args) {
    super(...args);
    this.state = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
    };
  }

  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props;

    return (
      <GoogleMaps containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }}
        ref="map"
        googleMapsApi={google.maps}
        zoom={state.zoom}
        center={state.center}>

        <DrawingManager
          drawingMode={google.maps.drawing.OverlayType.CIRCLE}
          drawingControl={true}
          drawingControlOptions={{
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              google.maps.drawing.OverlayType.POLYLINE,
              google.maps.drawing.OverlayType.RECTANGLE
            ]
          }}
          circleOptions={{
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
          }}
        />

      </GoogleMaps>
    );
  }

}

export default DrawingTools;

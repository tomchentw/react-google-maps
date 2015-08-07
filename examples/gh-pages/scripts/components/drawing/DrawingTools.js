import {default as React, Component} from "react";

import {default as GoogleMap} from "../../../../../src/GoogleMap";
import {default as DrawingManager} from "../../../../../src/DrawingManager";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools
 *
 * Note: requires the Google Maps drawing API library in your script src
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js?libraries=drawing"></script> to your HTML to provide google.maps reference
 *
 * Credits: thanks @idolize for the contribution!
 */
export default class DrawingTools extends Component {

  render () {
    return (
      <GoogleMap containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        defaultZoom={8}
        defaultCenter={new google.maps.LatLng(-34.397, 150.644)}>

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
      </GoogleMap>
    );
  }
}

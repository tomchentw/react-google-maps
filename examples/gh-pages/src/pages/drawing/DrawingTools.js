import { default as React } from "react";

import { GoogleMap, DrawingManager } from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools
 *
 * Note: requires the Google Maps drawing API library in your script src
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js?libraries=drawing"></script> to your HTML to provide google.maps reference
 *
 * Credits: thanks @idolize for the contribution!
 */
const DrawingTools = props => (
  <GoogleMap
    containerProps={{
      ...this.props,
      style: {
        height: `100%`,
      },
    }}
    defaultZoom={8}
    defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
);

export default DrawingTools;

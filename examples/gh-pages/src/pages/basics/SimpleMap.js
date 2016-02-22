import { default as React } from "react";

import { GoogleMap } from "react-google-maps";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const SimpleMap = props => (
  <GoogleMap
    containerProps={{
      ...props,
      style: {
        height: `100%`,
      },
    }}
    /*
     * 3. config <GoogleMap> instance by properties
     */
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
);

export default SimpleMap;

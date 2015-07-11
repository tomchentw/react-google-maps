import React from "react/addons";
import {GoogleMaps} from "react-google-maps";

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class SimpleMap extends React.Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */
  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props;
    /*
     * 2. Render GoogleMaps component with containerProps
     */
    return (
      <GoogleMaps containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }}
        /*
         * 3. Pass googleMapsApi from global variable as props.
         */
        googleMapsApi={google.maps}
        zoom={8}
        center={{lat: -34.397, lng: 150.644}} />
    );
  }

}

export default SimpleMap;

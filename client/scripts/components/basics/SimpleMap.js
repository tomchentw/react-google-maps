import React from "react/addons";
import {GoogleMaps} from "react-google-maps";

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMap = React.createClass({
  /*
   * 1. Create a component class that wraps all your map components in it.
   */
  displayName: "SimpleMap",
  /*
   * 2. Render GoogleMaps component with containerProps and mapProps
   */
  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props;

    return (
      <GoogleMaps containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }} mapProps={{
          style: {
            height: "100%",
          },
        }}
        googleMapsApi={googleMapsApi}
        zoom={8}
        center={{lat: -34.397, lng: 150.644}} />
    );
  }
});

export default React.createClass({
  /*
   * 3. This is container component that renders SimpleMap.
   */
  render () {
    /*
     * 4. The only thing you need to do is pass googleMapsApi as props.
     */
    return (
      <SimpleMap googleMapsApi={google.maps} {...this.props} />
    );
  }
});

import React from "react/addons";
import {GoogleMaps} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/map-simple-async
 */
class AsynchronousLoading extends React.Component {

  constructor (...args) {
    super(...args);
    this.state = {
      googleMapsApi: null,
    };
  }

  componentDidMount () {
    setTimeout(() => {
      // Just like google maps script is loaded async
      // so that google.maps object will be available later
      this.setState({googleMapsApi: google.maps});
    }, 3000);
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
        googleMapsApi={state.googleMapsApi}
        zoom={8}
        center={{lat: -34.397, lng: 150.644}} />
    );
  }

}

export default AsynchronousLoading;

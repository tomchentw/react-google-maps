import React from "react/addons";
import {GoogleMaps} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/map-simple-async
 */
const AsynchronousLoading = React.createClass({

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

  getInitialState () {
    return {
      googleMapsApi: null,
    };
  },

  componentDidMount () {
    setTimeout(() => {
      // Emulated google.maps script is loaded async.
      this.setState({googleMapsApi: google.maps});
    }, 3000);
  },

  render () {
    return (
      <AsynchronousLoading googleMapsApi={this.state.googleMapsApi} {...this.props} />
    );
  },
});

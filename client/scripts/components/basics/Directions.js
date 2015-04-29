import React from "react/addons";
import {GoogleMaps, DirectionsRenderer} from "react-google-maps";

const Directions = React.createClass({

  getInitialState () {
    return {
      origin: new google.maps.LatLng(41.8507300, -87.6512600),
      destination: new google.maps.LatLng(41.8525800, -87.6514100),
      directions: null,
    };
  },

  componentDidMount () {
    var DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if(status == google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        })
      }
      else {
        console.error('error fetching directions ' + result);
      }
    });
  },

  render () {
    const {props, state} = this,
          {googleMapsApi, ...otherProps} = props,
          {directions} = state;

    return (
      <GoogleMaps containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }}
        googleMapsApi={googleMapsApi}
        zoom={7}
        center={state.origin}>
        {directions ? <DirectionsRenderer directions={directions} /> : null}
      </GoogleMaps>
    );
  },
});

export default React.createClass({
  render () {
    return (
      <Directions googleMapsApi={google.maps} {...this.props} />
    );
  }
});


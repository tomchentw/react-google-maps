"use strict";
var React = require("react/addons"),

    {GoogleMapsMixin, Map, DirectionsRenderer} = require("react-google-maps"),
    Directions;

Directions = React.createClass({
  displayName: "Directions",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

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

  _render (props, state) {
    var {directions} = state;

    return <div style={{height: "100%"}} {...props}>
      <Map style={{height: "100%"}} zoom={6} center={state.origin} />
      {directions ? <DirectionsRenderer directions={directions} /> : null}
    </div>;
  }
});

module.exports = React.createClass({
  mixins: [require("../../ReactFutureMixin")],

  _render (props, state) {
    return <Directions googleMapsApi={google.maps} {...props} />;
  }
});


"use strict";
var React = require("react/addons"),
    {update} = React.addons,

    {GoogleMapsMixin, Map, InfoWindow} = require("react-google-maps"),
    {geolocation} = navigator;

if (!geolocation) {
  geolocation = {
    getCurrentPosition: (success, failure) => { failure("Your browser doesn't support geolocation."); }
  };
}

// https://developers.google.com/maps/documentation/javascript/examples/map-simple
module.exports = React.createClass({
  displayName: "Geolocation",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  getInitialState () {
    return {
      center: null,
      content: null,
    };
  },

  componentDidMount () {
    geolocation.getCurrentPosition((position) => {
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        content: "'Location found using HTML5.",

      });
    }, (reason) => {
      this.setState({
        center: {
          lat: 60,
          lng: 105
        },
        content: `Error: The Geolocation service failed (${ reason }).`
      });
    });
  },

  _render (props, state) {
    var {center} = state;

    return <div style={{height: "100%"}} {...props}>
      <Map style={{height: "100%"}} zoom={6} center={center} />
      {center ? <InfoWindow position={center} content={state.content} /> : null}
    </div>;
  }
});

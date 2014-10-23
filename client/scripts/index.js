/** @jsx React.DOM */
"use strict";
require("../styles/index.scss");
var React = require("react/addons");

var {GoogleMap} = require("../../src");

var Body = React.createClass({

  getInitialState () {
    var googleMapsApi = google.maps;
    return {
      googleMapsApi,
      mapOptions: {
        center: {
          lat: -34.397,
          lng: 150.644
        },
        zoom: 8,
        mapTypeId: googleMapsApi.MapTypeId.ROADMAP
      }
    };
  },

  googleMapsApiLoaded () {
    this.setState({
      googleMapsApi: google.maps
    });
  },

  render () {
    return <div>
      <GoogleMap
        googleMapsApi={this.state.googleMapsApi}
        mapOptions={this.state.mapOptions}>
      </GoogleMap>
    </div>
  }
});

var bodyRef = React.renderComponent(
  <Body />,
  document.getElementById("react-root")
);

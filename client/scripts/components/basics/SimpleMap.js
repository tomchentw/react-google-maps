"use strict";
var React = require("react/addons"),

    {GoogleMapsMixin, Map} = require("react-google-maps");

module.exports = React.createClass({
  /*
   * https://developers.google.com/maps/documentation/javascript/examples/map-simple
   */
  displayName: "SimpleMap",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  _render (props, state) {
    return <div style={{height: "100%"}} {...props}>
      <Map style={{height: "100%"}} zoom={8} center={new google.maps.LatLng(-34.397, 150.644)} />
    </div>;
  }
});

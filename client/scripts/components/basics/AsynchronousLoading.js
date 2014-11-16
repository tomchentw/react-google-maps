"use strict";
var React = require("react/addons"),
    {update} = React.addons,

    {GoogleMapsMixin, Map} = require("react-google-maps");

// https://developers.google.com/maps/documentation/javascript/examples/map-simple-async
module.exports = React.createClass({
  displayName: "SimpleMap",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  _render (props, state) {
    return <div style={{height: "100%"}} {...props}>
      <Map style={{height: "100%"}} zoom={8} center={{lat: -34.397, lng: 150.644}} />
    </div>;
  }
});

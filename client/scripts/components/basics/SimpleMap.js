"use strict";
var React = require("react/addons"),

    {GoogleMapsMixin, Map} = require("react-google-maps"),

    SimpleMap;
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
SimpleMap = React.createClass({
  /*
   * 1. Create a component class that wraps all your map components in it.
   */
  displayName: "SimpleMap",
  /*
   * 2. Include GoogleMapsMixin into in its mixins.
   */
  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  _render (props, state) {
    return <div style={{height: "100%"}} {...props}>
      <Map style={{height: "100%"}} zoom={8} center={new google.maps.LatLng(-34.397, 150.644)} />
    </div>;
  }
});

module.exports = React.createClass({
  /*
   * 3. This is your component class that renders SimpleMap.
   */
  mixins: [require("../../ReactFutureMixin")],

  _render (props, state) {
    /*
     * 4. The only thing you need to do is pass googleMapsApi as props.
     * This will be used with GoogleMapsMixin that mixes into SimpleMap
     */
    return <SimpleMap googleMapsApi={google.maps} {...props} />;
  }
});

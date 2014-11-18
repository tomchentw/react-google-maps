"use strict";
var React = require("react/addons"),

    {GoogleMapsMixin, Map} = require("react-google-maps"),
    AsynchronousLoading;
/*
 * https://developers.google.com/maps/documentation/javascript/examples/map-simple-async
 */
AsynchronousLoading = React.createClass({
  displayName: "AsynchronousLoading",

  mixins: [require("../../ReactFutureMixin"), GoogleMapsMixin],

  _render (props, state) {
    return <div style={{height: "100%"}} {...props}>
      <Map style={{height: "100%"}} zoom={8} center={{lat: -34.397, lng: 150.644}} />
    </div>;
  }
});

module.exports = React.createClass({
  mixins: [require("../../ReactFutureMixin")],

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

  _render (props, state) {
    return <AsynchronousLoading googleMapsApi={state.googleMapsApi} {...props} />;
  }
});

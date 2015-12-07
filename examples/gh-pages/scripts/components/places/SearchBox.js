import {default as React, Component} from "react";

import {GoogleMap, Marker, SearchBox} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SearchBoxExample extends Component {

  static inputStyle = {
    "border": "1px solid transparent",
    "borderRadius": "1px",
    "boxShadow": "0 2px 6px rgba(0, 0, 0, 0.3)",
    "boxSizing": "border-box",
    "MozBoxSizing": "border-box",
    "fontSize": "14px",
    "height": "32px",
    "marginTop": "27px",
    "outline": "none",
    "padding": "0 12px",
    "textOverflow": "ellipses",
    "width": "400px"
  }

  static mapCenter = {
    lat: 47.6205588,
    lng: -122.3212725
  }

  state = {
    bounds: null,
    center: SearchBoxExample.mapCenter,
    markers: []
  }

  handleBoundsChanged () {
    this.setState({
      bounds: this.refs.map.getBounds(),
      center: this.refs.map.getCenter()
    });
  }

  handlePlacesChanged () {
    const places = this.refs.searchBox.getPlaces();
    const markers = [];

    // Add a marker for each place returned from search bar
    places.forEach(function (place) {
      markers.push({
        position: place.geometry.location
      });
    });

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

    this.setState({
      center: mapCenter,
      markers: markers
    });

    return;
  }

  render () {

    return (
      <GoogleMap
        center={this.state.center}
        containerProps={{
          ...this.props,
          style: {
            height: "100%"
          }
        }}
        defaultZoom={15}
        onBoundsChanged={::this.handleBoundsChanged}
        ref="map">

        <SearchBox
          bounds={this.state.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={::this.handlePlacesChanged}
          ref="searchBox"
          placeholder="Customized your placeholder"
          style={SearchBoxExample.inputStyle} />

        {this.state.markers.map((marker, index) => (
          <Marker position={marker.position} key={index} />
        ))}

      </GoogleMap>
    );

  }

}

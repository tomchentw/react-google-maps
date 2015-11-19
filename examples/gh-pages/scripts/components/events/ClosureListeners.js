import {default as React, Component} from "react";

import {GoogleMap, Marker, InfoWindow} from "react-google-maps";

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-closure
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class ClosureListeners extends Component {

  state = {
    markers: [],
  }

  componentWillMount () {
    const southWest = new google.maps.LatLng(-31.203405, 125.244141);
    const northEast = new google.maps.LatLng(-25.363882, 131.044922);

    const lngSpan = northEast.lng() - southWest.lng();
    const latSpan = northEast.lat() - southWest.lat();

    let markers = [];
    for (let i = 0; i < 5; i++) {
      const position = new google.maps.LatLng(
        southWest.lat() + latSpan * Math.random(),
        southWest.lng() + lngSpan * Math.random()
      );
      markers.push({
        position,
        content: "This is the secret message".split(" ")[i],
        showInfo: false,
      });
    }

    this.setState({
      markers, 
    });
  }

  handleMarkerClick (marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }

  handleCloseclick (marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }

  renderInfoWindow (ref, marker) {
    if (Math.random() > 0.5) {
      // Normal version: Pass string as content
      return (
        <InfoWindow key={`${ref}_info_window`}
          content={marker.content}
          onCloseclick={this.handleCloseclick.bind(this, marker)}
        />
      )
    } else {
      // "react-google-maps" extended version: Pass ReactElement as content
      return (
        <InfoWindow key={`${ref}_info_window`}
          onCloseclick={this.handleCloseclick.bind(this, marker)}
        >
          <div>
            <strong>{marker.content}</strong>
            <br />
            <em>The contents of this InfoWindow are actually ReactElements.</em>
          </div>
        </InfoWindow>
      )
    }
  }

  render () {
    const {markers} = this.state;

    return (
      <GoogleMap containerProps={{
        ...this.props,
          style: {
            height: "100%",
          },
        }}
        defaultZoom={4}
        defaultCenter={new google.maps.LatLng(-25.363882, 131.044922)}>
        {markers.map((marker, index) => {
          const ref = `marker_${index}`;

          return (
            <Marker key={ref} ref={ref}
              position={marker.position}
              title={(index+1).toString()}
              onClick={this.handleMarkerClick.bind(this, marker)}>
              {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}
            </Marker>
          );
        })}
      </GoogleMap>
    );
  }
}

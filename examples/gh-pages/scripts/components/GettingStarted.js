import {default as React, addons, Component} from "react/addons";

import {default as GoogleMap} from "../../../../src/GoogleMap";
import {default as Marker} from "../../../../src/Marker";

const {update} = addons;

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class GettingStarted extends Component {

  constructor (...args) {
    super(...args);
    this.state = {
      markers: [{
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001,
        },
        key: "Taiwan",
        defaultAnimation: 2
      }],
    };
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  _handle_map_click = (event) => {
    var {markers} = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });

    if (3 === markers.length) {
      this.props.toast(
        "Right click on the marker to remove it",
        "Also check the code!"
      );
    }
  }

  _handle_marker_rightclick (index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    var {markers} = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1]
      ],
    });
    this.setState({ markers });
  }

  render () {
    return (
      <GoogleMap containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        ref="map"
        defaultZoom={3}
        defaultCenter={{lat: -25.363882, lng: 131.044922}}
        onClick={this._handle_map_click}>
        {this.state.markers.map((marker, index) => {
          return (
            <Marker
              {...marker}
              onRightclick={this._handle_marker_rightclick.bind(this, index)} />
          );
        })}
      </GoogleMap>
    );
  }
}

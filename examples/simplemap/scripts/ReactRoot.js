import {
  default as React,
  Component,
} from "react";

import {default as update} from "react-addons-update";

import {default as SimpleMap} from "./SimpleMap";

require("../styles/index.scss");

export default class ReactRoot extends Component {
  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: "Taiwan",
      defaultAnimation: 2,
    }],
  }

  componentDidMount () {
    setTimeout(() => {
      var {markers} = this.state;
      markers = update(markers, {
        $push: [
          {
            position: {
              lat: 25.99,
              lng: 122.9,
            },
            defaultAnimation: 2,
            key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
          },
        ],
      });
      this.setState({ markers });
    }, 2000);
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  _handle_map_click (event) {
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
      <SimpleMap
        markers={this.state.markers}
        onMapClick={::this._handle_map_click}
        onMarkerRightclick={::this._handle_marker_rightclick}
      />
    )
  }
}


import {
  default as React,
  Component,
} from "react";

import update from "react-addons-update";

import SimpleMap from "./SimpleMap";

export default class App extends Component {
  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  };

  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightclick = this.handleMarkerRightclick.bind(this);

  componentDidMount() {
    setTimeout(() => {
      let { markers } = this.state;
      markers = update(markers, {
        $push: [
          {
            position: {
              lat: 25.99,
              lng: 122.9,
            },
            defaultAnimation: 2,
            key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
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
  handleMapClick(event) {
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }

  render() {
    return (
      <SimpleMap
        markers={this.state.markers}
        onMapClick={this.handleMapClick}
        onMarkerRightclick={this.handleMarkerRightclick}
      />
    );
  }
}

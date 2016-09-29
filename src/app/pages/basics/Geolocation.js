/* global google */
import { default as React, Component } from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import { default as raf } from "raf";

import { GoogleMap, Circle, InfoWindow } from "../../../lib";

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation : 
  ({
    getCurrentPosition: (success, failure) => {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);

/*
 * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class Geolocation extends Component {

  state = {
    center: null,
    content: null,
    radius: 6000,
  }

  componentDidMount() {
    geolocation.getCurrentPosition((position) => {
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: `Location found using HTML5.`,
      });

      const tick = () => {
        this.setState({ radius: Math.max(this.state.radius - 20, 0) });

        if (this.state.radius > 200) {
          raf(tick);
        }
      };
      raf(tick);
    }, (reason) => {
      this.setState({
        center: {
          lat: 60,
          lng: 105,
        },
        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
  }

  render() {
    const { center, content, radius } = this.state;
    let contents = [];

    if (center) {
      contents = contents.concat([
        (<InfoWindow key="info" position={center} content={content} />),
        (<Circle
          key="circle"
          center={center}
          radius={radius}
          options={{
            fillColor: `red`,
            fillOpacity: 0.20,
            strokeColor: `red`,
            strokeOpacity: 1,
            strokeWeight: 1,
          }}
        />),
      ]);
    }

    return (
      <GoogleMap
        containerProps={{
          ...this.props,
          style: {
            height: `100%`,
          },
        }}
        defaultZoom={12}
        center={center}
      >
        {contents}
      </GoogleMap>
    );
  }
}

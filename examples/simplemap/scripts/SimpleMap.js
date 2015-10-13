import {default as React, Component} from "react";

import {default as GoogleMap} from "../../../src/GoogleMap";
import {default as Marker} from "../../../src/Marker";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 *
 * We use React 0.14 stateless function components here.
 * https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
 */
export default function SimpleMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMap containerProps={{
          style: {
            height: "100%",
          },
        }}
        defaultZoom={3}
        defaultCenter={{lat: -25.363882, lng: 131.044922}}
        onClick={props.onMapClick}
      >
        {props.markers.map((marker, index) => {
          return (
            <Marker
              {...marker}
              onRightclick={() => props.onMarkerRightclick(index)} />
          );
        })}
      </GoogleMap>
    </section>
  );
}

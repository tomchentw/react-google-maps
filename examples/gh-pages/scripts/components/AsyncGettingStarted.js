import {default as React, Component} from "react";
import {default as update} from "react-addons-update";
import {default as FaSpinner} from "react-icons/lib/fa/spinner";

import {default as ScriptjsGoogleMap} from "../../../../src/async/ScriptjsGoogleMap";
import {default as Marker} from "../../../../src/Marker";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
export default class AsyncGettingStarted extends Component {

  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: "Taiwan",
      defaultAnimation: 2
    }],
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
    // <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" />
    return (
      <ScriptjsGoogleMap
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{v: `3.${ Math.ceil(Math.random() * 22) }`, libraries: "geometry,drawing,places"}}
        loadingElement={
          <div
            {...this.props}
            style={{
              height: "100%",
            }}
          >
            <FaSpinner
              style={{
                display: "block",
                margin: "150px auto",
                animation: "fa-spin 2s infinite linear"
              }}
            />
          </div>
        }
        // <GoogleMap> props
        containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        ref="map"
        defaultZoom={3}
        defaultCenter={{lat: -25.363882, lng: 131.044922}}
        onClick={::this._handle_map_click}>
        {this.state.markers.map((marker, index) => {
          return (
            <Marker
              {...marker}
              onRightclick={this._handle_marker_rightclick.bind(this, index)} />
          );
        })}
      </ScriptjsGoogleMap>
    );
  }
}

import { default as React, Component } from "react";
import { default as update } from "react-addons-update";
import { default as FaSpinner } from "react-icons/lib/fa/spinner";

import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";
import { GoogleMap, Marker } from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Loaded using async loader.
 */
export default class AsyncGettingStarted extends Component {

  static version = Math.ceil(Math.random() * 22);

  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
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

    if (markers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
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

  renderDeprecatedBehavior() {// Remove when reach 5.0.0
    return (
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ v: `3.${ AsyncGettingStarted.version }`, libraries: `geometry,drawing,places` }}
        loadingElement={
          <div
            {...this.props}
            style={{
              height: `100%`,
            }}
          >
            <FaSpinner
              style={{
                display: `block`,
                margin: `150px auto`,
                animation: `fa-spin 2s infinite linear`,
              }}
            />
          </div>
        }
        googleMapElement={
          <GoogleMap
            containerProps={{
              ...this.props,
              style: {
                height: `100%`,
              },
            }}
            ref={googleMap => {
              // Wait until GoogleMap is fully loaded. Related to #133
              setTimeout(() => {
                if (!googleMap) {
                  return;
                }
                console.log(googleMap);
                console.log(`Zoom: ` + googleMap.getZoom());
                console.log(`Center: ` + googleMap.getCenter());
              }, 50);
            }}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={::this.handleMapClick}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={this.handleMarkerRightclick.bind(this, index)}
                />
              );
            })}
          </GoogleMap>
        }
      />
    );
  }

  renderNewBehavior() {
    return (
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ v: `3.${ AsyncGettingStarted.version }`, libraries: `geometry,drawing,places` }}
        loadingElement={
          <div {...this.props} style={{ height: `100%` }}>
            <FaSpinner
              style={{
                display: `block`,
                width: 200,
                height: 200,
                margin: `100px auto`,
                animation: `fa-spin 2s infinite linear`,
              }}
            />
          </div>
        }
        containerElement={
          <div {...this.props} style={{ height: `100%` }} />
        }
        googleMapElement={
          <GoogleMap
            ref={googleMap => {
              if (!googleMap) {
                return;
              }
              console.log(googleMap);
              console.log(`Zoom: ${ googleMap.getZoom() }`);
              console.log(`Center: ${ googleMap.getCenter() }`);
            }}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={::this.handleMapClick}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={this.handleMarkerRightclick.bind(this, index)}
                />
              );
            })}
          </GoogleMap>
        }
      />
    );
  }

  render() {
    // <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places" />
    // return this.renderDeprecatedBehavior(); // Uncomment for legacy support
    return this.renderNewBehavior();
  }
}

import {default as React, Component} from "react";

import {default as GoogleMap} from "../../../../../src/GoogleMap";
import {default as InfoBox} from "../../../../../src/addons/InfoBox";

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class StyledMap extends Component {

  static defaultProps = {
    // The style is copy from https://snazzymaps.com/style/2/midnight-commander
    mapStyles: [{
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 13
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#144b53"
      }, {
        "lightness": 14
      }, {
        "weight": 1.4
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#08304b"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#0c4152"
      }, {
        "lightness": 5
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#0b434f"
      }, {
        "lightness": 25
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#0b3d51"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "color": "#146474"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#021019"
      }]
    }]
  }

  render () {
    const {props, state} = this,
          {googleMapsApi, mapStyles, ...otherProps} = props;
    const myLatLng = new google.maps.LatLng(25.03, 121.6);

    const InfoBoxContent = `
      <div style="background-color:yellow; opacity:0.75;">
        <div style="font-size: 16px; font-color:#08233B">
          Taipei
        </div>
      </div>
    `;
    return (
      <GoogleMap containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }}
        styles={mapStyles}
        defaultZoom={5}
        defaultCenter={myLatLng}>
        <InfoBox
          closeBoxURL=""
          defaultPosition={myLatLng}
          defaultContent={InfoBoxContent}/>
      </GoogleMap>
    );
  }
}

import {default as React, Component} from "react";

import {GoogleMap} from "react-google-maps";
import {default as InfoBox} from "react-google-maps/lib/addons/InfoBox";

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class StyledMap extends Component {

  static fancyMapStyles = [{
    // The style is copy from https://snazzymaps.com/style/2/midnight-commander
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

  _click_from_children_of_infoBox = (e) => {
    console.log("_click_from_children_of_infoBox!!");
    console.log(e);
  }

  render () {
    const myLatLng = new google.maps.LatLng(25.03, 121.6);

    return (
      <GoogleMap containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        defaultZoom={5}
        defaultCenter={myLatLng}
        defaultOptions={{
          styles: StyledMap.fancyMapStyles,
        }}
      >
        <InfoBox
          defaultPosition={myLatLng}
          options={{closeBoxURL: "", enableEventPropagation: true}}
        >
          <div
            style={{backgroundColor: "yellow", opacity: 0.75}}
            onClick={this._click_from_children_of_infoBox}
          >
            <div style={{fontSize: "16px", fontColor: "#08233B"}}>
              Taipei
            </div>
          </div>
        </InfoBox>
      </GoogleMap>
    );
  }
}

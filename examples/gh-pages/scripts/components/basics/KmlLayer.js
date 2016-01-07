import {default as React, Component} from "react";

import {GoogleMap, KmlLayer} from "react-google-maps";

const STYLES = {
  mapContainer: {
    height: "100%"
  }
};

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class KmlLayerExample extends Component {
  state = {
    count: 0,
  }

  render () {
    const {count} = this.state;

    return (
      <GoogleMap containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        /*
         * 3. config <GoogleMap> instance by properties
         */
        defaultZoom={8}
        defaultCenter={{lat: 41.876, lng: -87.624}}>

        <KmlLayer
          url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"/>

      </GoogleMap>
    );
  }

  onClick () {
    this.setState({count: this.state.count + 1});
  }
}

import { default as React, Component } from "react";

import { GoogleMap } from "react-google-maps";
import { default as InfoBox } from "react-google-maps/lib/addons/InfoBox";

import fancyMapStyles from "../../constants/fancyMapStyles.json";

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class StyledMap extends Component {

  _click_from_children_of_infoBox(e) {
    console.log(`_click_from_children_of_infoBox!!`);
    console.log(e);
  }

  render() {
    const myLatLng = new google.maps.LatLng(25.03, 121.6);

    return (
      <GoogleMap
        containerProps={{
          ...this.props,
          style: {
            height: `100%`,
          },
        }}
        defaultZoom={5}
        defaultCenter={myLatLng}
        defaultOptions={{
          styles: fancyMapStyles,
        }}
      >
        <InfoBox
          defaultPosition={myLatLng}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div
            style={{ backgroundColor: `yellow`, opacity: 0.75 }}
            onClick={::this._click_from_children_of_infoBox}
          >
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              Taipei
            </div>
          </div>
        </InfoBox>
      </GoogleMap>
    );
  }
}

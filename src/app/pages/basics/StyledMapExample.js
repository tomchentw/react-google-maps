/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
} from "../../../lib";

import InfoBox from "../../../lib/addons/InfoBox";

import fancyMapStyles from "../../constants/fancyMapStyles.json";

const StyledMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={props.center}
    defaultOptions={{ styles: fancyMapStyles }}
  >
    <InfoBox
      defaultPosition={props.center}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div
        style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `20px` }}
        onClick={props.onClickFromChildrenOfInfoBox}
      >
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Taipei
        </div>
      </div>
    </InfoBox>
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class StyledMapExample extends Component {

  handleClickFromChildrenOfInfoBox = this.handleClickFromChildrenOfInfoBox.bind(this);

  handleClickFromChildrenOfInfoBox(e) {
    console.log(`handleClickFromChildrenOfInfoBox!!`);
    console.log(e);
  }

  render() {
    return (
      <StyledMapExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        center={new google.maps.LatLng(25.03, 121.6)}
        onClickFromChildrenOfInfoBox={this.handleClickFromChildrenOfInfoBox}
      />
    );
  }
}

/* global google */
import fetch from "isomorphic-fetch";

import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  OverlayView,
} from "../../../lib";

import MarkerClusterer from "../../../lib/addons/MarkerClusterer";

function getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height / 2) };
}

const MarkerClustererOverlayViewExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <OverlayView
          position={{ lat: marker.latitude, lng: marker.longitude }}
          key={marker.photo_id}
          /*
           * An alternative to specifying position is specifying bounds.
           * bounds can either be an instance of google.maps.LatLngBounds
           * or an object in the following format:
           * bounds={{
           *    ne: { lat: 62.400471, lng: -150.005608 },
           *    sw: { lat: 62.281819, lng: -150.287132 }
           * }}
           */
          /*
           * 1. Specify the pane the OverlayView will be rendered to. For
           *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
           *    Defaults to `OverlayView.OVERLAY_LAYER`.
           */
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          /*
           * 2. Tweak the OverlayView's pixel position. In this case, we're
           *    centering the content.
           */
          getPixelPositionOffset={getPixelPositionOffset}
          /*
           * 3. Create OverlayView content using standard React components.
           */
        >
          <div style={{width: `60px`, height: `16px`, background: `#DDD`, border: `1px solid #333`, textAlign: `center`}}>
            {marker.photo_id}
          </div>
        </OverlayView>
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

export default class MarkerClustererExample extends Component {
  state = {
    markers: [],
  }

  componentDidMount() {
    fetch(`https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.photos.slice(0, 1000) });
      });
  }

  render() {
    return (
      <MarkerClustererOverlayViewExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        markers={this.state.markers}
      />
    );
  }
}

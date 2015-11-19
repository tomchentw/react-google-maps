import {default as React, Component} from "react";
import {default as fetch} from "isomorphic-fetch";

import {GoogleMap, Marker} from "react-google-maps";
import {default as MarkerClusterer} from "react-google-maps/lib/addons/MarkerClusterer";

export default class MarkerClustererExample extends Component {
  state = {
    markers: [],
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.photos });
      });
  }

  render() {
    const { markers } = this.state;

    return (
      <GoogleMap
        containerProps={{
          ...this.props,
          style: {
            height: "100%",
          },
        }}
        defaultZoom={ 3 }
        defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>
          <MarkerClusterer
           averageCenter={ true }
           enableRetinaIcons={ true }
           gridSize={ 60 }>
           { markers.map(marker => (
             <Marker
               position={{ lat: marker.latitude, lng: marker.longitude }}
               key={ marker.photo_id }
             />
           )) }
       </MarkerClusterer>
      </GoogleMap>
    );
  }
}

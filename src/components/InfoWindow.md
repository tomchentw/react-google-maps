## Usage

```jsx static
import { compose, withProps, withStateHandlers } from "recompose";
import FaAnchor from "react-icons/lib/fa/ancho";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <FaAnchor />
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

<MapWithAMakredInfoWindow
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `200px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
```

### Click the Marker to show InfoWindow

```jsx
const { compose, withProps, withStateHandlers } = require("recompose");
const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("../index");

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <FaAnchor />
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

<MapWithAMakredInfoWindow
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `200px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
```

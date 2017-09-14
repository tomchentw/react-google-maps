## Usage

```jsx static
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  TrafficLayer,
} from "react-google-maps";

const MapWithATrafficLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.9, lng: -87.624 }}
  >
    <TrafficLayer autoUpdate />
  </GoogleMap>
);

<MapWithATrafficLayer />
```

### Map with a TrafficLayer

```jsx
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  TrafficLayer,
} = require("../index");

const MapWithATrafficLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.9, lng: -87.624 }}
  >
    <TrafficLayer autoUpdate />
  </GoogleMap>
);

<MapWithATrafficLayer />
```

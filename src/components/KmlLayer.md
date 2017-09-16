## Usage

```jsx static
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer,
} from "react-google-maps";

const MapWithAKmlLayer = compose(
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
    defaultZoom={9}
    defaultCenter={{ lat: 41.9, lng: -87.624 }}
  >
    <KmlLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
);

<MapWithAKmlLayer />
```

### Map with a KmlLayer

```jsx
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer,
} = require("../index");

const MapWithAKmlLayer = compose(
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
    defaultZoom={9}
    defaultCenter={{ lat: 41.9, lng: -87.624 }}
  >
    <KmlLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
);

<MapWithAKmlLayer />
```

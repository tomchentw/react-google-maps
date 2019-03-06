### Map with Heatmap Visualization

```jsx
/*global google*/
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const HeatmapLayer = require("react-google-maps/lib/components/visualization/HeatmapLayer");

const key = "AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg";

const heatmapData = [
  {
    "lat": -34.370654371924395,
    "lng": 150.4009374383297
  },
  {
    "lat": -34.9300328182474,
    "lng": 150.34142547959007
  },
  {
    "lat": -34.03178993566636,
    "lng": 150.84172294808653
  },
  {
    "lat": -34.6855788249672,
    "lng": 150.4656795740321
  }
];

const MapWithAHeatmapLayer = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=visualization`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    data: heatmapData
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <HeatmapLayer data={props.data.map(p => new google.maps.LatLng(p.lat, p.lng))} options={{
      radius: 50,
      opacity: 0.5,
    }} />
  </GoogleMap>
));

<MapWithAHeatmapLayer />
```

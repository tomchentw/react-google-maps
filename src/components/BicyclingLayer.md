### Map with a BicyclingLayer

```jsx
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  BicyclingLayer,
} = require("react-google-maps");

const MapWithABicyclingLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDDe44e1ctJvBUEKGeHp9TbuulZ0C6Dh0A&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 34.17223, lng: -118.37897 }}
  >
    <BicyclingLayer autoUpdate />
  </GoogleMap>
);

<MapWithABicyclingLayer />
```

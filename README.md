# react-google-maps
> React.js Google Maps integration component

[![Version][npm-image]][npm-url] [![Travis CI][travis-image]][travis-url] [![Quality][codeclimate-image]][codeclimate-url] [![Coverage][codeclimate-coverage-image]][codeclimate-coverage-url] [![Dependencies][gemnasium-image]][gemnasium-url] [![Gitter][gitter-image]][gitter-url]


## Under development for [v6.0.0](https://github.com/tomchentw/react-google-maps/issues/318)

Try it via:

```sh
npm install --save react-google-maps@beta
```


## Call for maintainers

As the author ([tomchentw][tomchentw]) currently doesn't actively use this module, he's looking for awesome contributors to help and keep the community healthy. Please don't hesitate to [contact him][tomchentw] directly. See [#266][call-for-maintainers] for more information.


## Documentation

Basically just a simple wrapper around [Google Maps Javascript API][Google Maps Javascript API]. Also check out the [demo][demo] app and it's source under [src/app][src_app] folder.

**Note**: this doc is under development for [v6.0.0](https://github.com/tomchentw/react-google-maps/issues/318). Find docs for [v5.x][docs_v5] and [v4.x][docs_v4] with the git tags.

### withGoogleMap

```jsx
import { withGoogleMap } from "react-google-maps";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));
// Then, render it:
render(
  <GettingStartedGoogleMap
    containerElement={
      <div style={{ height: `100%` }} />
    }
    mapElement={
      <div style={{ height: `100%` }} />
    }
    onMapLoad={_.noop}
    onMapClick={_.noop}
    markers={markers}
    onMarkerRightClick={_.noop}
  />,
  document.getElementById('root')
);
```

### GoogleMap

```jsx
<GoogleMap
  onClick={_.noop}
  onRightClick={_.noop}
  onDragStart={_.noop}
/>
```

### Marker

```jsx
<Marker
  onClick={_.noop}
  onRightClick={_.noop}
  onDragStart={_.noop}
/>
```

### Circle

```jsx
<Circle
  onClick={_.noop}
  onRightClick={_.noop}
  onDragStart={_.noop}
/>
```

### Rectangle

```jsx
<Rectangle
  onClick={_.noop}
  onRightClick={_.noop}
  onDragStart={_.noop}
/>
```

### Polyline

```jsx
<Polyline
  onClick={_.noop}
  onRightClick={_.noop}
  onDragStart={_.noop}
/>
```

### Polygon

```jsx
<Polygon
  onClick={_.noop}
  onRightClick={_.noop}
  onDragStart={_.noop}
/>
```

### KmlLayer

```jsx
<KmlLayer
  onClick={_.noop}
  onDefaultViewportChanged={_.noop}
  onStatusChanged={_.noop}
/>
```

### InfoWindow

```jsx
<InfoWindow
  onCloseClick={_.noop}
  onDomReady={_.noop}
  onZIndexChanged={_.noop}
/>
```

### drawing/DrawingManager

```jsx
<DrawingManager
  onCircleComplete={_.noop}
  onOverlayComplete={_.noop}
/>
```

### places/SearchBox

```jsx
<SearchBox
  inputPlaceholder="Customized your placeholder"
  inputStyle={INPUT_STYLE}
/>
```

### addons/MarkerClusterer

```jsx
<MarkerClusterer
  onClusteringBegin={_.noop}
  onMouseOut={_.noop}
/>
```

### addons/InfoBox

```jsx
<InfoBox
  onCloseClick={_.noop}
  onDomReady={_.noop}
  onZIndexChanged={_.noop}
/>
```

### async/withScriptjs

```jsx
import { withGoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// then wraps it into `withScriptjs` HOC
// It loads Google Maps JavaScript API v3 for you asynchronously.
// Name the component AsyncGettingStartedExampleGoogleMap
const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      ))}
    </GoogleMap>
  )
);
// Then, render it:
render(
  <AsyncGettingStartedExampleGoogleMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
    loadingElement={
      <div style={{ height: `100%` }}>
        <FaSpinner
          style={{
            display: `block`,
            width: `80px`,
            height: `80px`,
            margin: `150px auto`,
            animation: `fa-spin 2s infinite linear`,
          }}
        />
      </div>
    }
    containerElement={
      <div style={{ height: `100%` }} />
    }
    mapElement={
      <div style={{ height: `100%` }} />
    }
    onMapLoad={_.noop}
    onMapClick={_.noop}
    markers={markers}
    onMarkerRightClick={_.noop}
  />,
  document.getElementById('root')
);
```

## Changelog

The changelog is automatically generated via [conventional-changelog][conventional-changelog] and [can be found in project root](https://github.com/tomchentw/react-google-maps/blob/master/CHANGELOG.md) as well as npm tarball.



[npm-image]: https://img.shields.io/npm/v/react-google-maps.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-google-maps

[travis-image]: https://img.shields.io/travis/tomchentw/react-google-maps.svg?style=flat-square
[travis-url]: https://travis-ci.org/tomchentw/react-google-maps
[codeclimate-image]: https://img.shields.io/codeclimate/github/tomchentw/react-google-maps.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/tomchentw/react-google-maps
[codeclimate-coverage-image]: https://img.shields.io/codeclimate/coverage/github/tomchentw/react-google-maps.svg?style=flat-square
[codeclimate-coverage-url]: https://codeclimate.com/github/tomchentw/react-google-maps
[gemnasium-image]: https://img.shields.io/gemnasium/tomchentw/react-google-maps.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/tomchentw/react-google-maps
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/tomchentw/react-google-maps?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge


[tomchentw]: https://github.com/tomchentw
[call-for-maintainers]: https://github.com/tomchentw/react-google-maps/issues/266
[demo]: https://tomchentw.github.io/react-google-maps/
[src_app]: https://github.com/tomchentw/react-google-maps/tree/master/src/app
[Google Maps Javascript API]: https://developers.google.com/maps/documentation/javascript/
[conventional-changelog]: https://github.com/ajoslin/conventional-changelog
[docs_v5]: https://github.com/tomchentw/react-google-maps/tree/v5.1.0#documentation
[docs_v4]: https://github.com/tomchentw/react-google-maps/tree/v4.11.0#documentation

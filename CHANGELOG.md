<a name="4.10.1"></a>
## [4.10.1](https://github.com/tomchentw/react-google-maps/compare/v4.10.0...v4.10.1) (2016-04-27)


### Bug Fixes

* **package.json:** update to "react-prop-types-element-of-type@^2.1.0" ([0f27ed3](https://github.com/tomchentw/react-google-maps/commit/0f27ed3))



<a name="4.10.0"></a>
# [4.10.0](https://github.com/tomchentw/react-google-maps/compare/v4.9.1...v4.10.0) (2016-04-26)


### Features

* **package.json:** update to react@^15.0.0 ([4a85cf6](https://github.com/tomchentw/react-google-maps/commit/4a85cf6)), closes [#243](https://github.com/tomchentw/react-google-maps/issues/243)



<a name="4.9.1"></a>
## [4.9.1](https://github.com/tomchentw/react-google-maps/compare/v4.9.0...v4.9.1) (2016-02-21)


### Bug Fixes

* **componentLifecycleDecorator:** revert to componentWillReceiveProps ([105dc6b](https://github.com/tomchentw/react-google-maps/commit/105dc6b))



<a name="4.9.0"></a>
# [4.9.0](https://github.com/tomchentw/react-google-maps/compare/v4.8.2...v4.9.0) (2016-02-21)


### Bug Fixes

* **componentLifecycleDecorator:** change componentDidUpdate to componentWillReceiveProps ([b42b58e](https://github.com/tomchentw/react-google-maps/commit/b42b58e))

### Features

* **OverlayView:** add props.bounds support ([dcdfefa](https://github.com/tomchentw/react-google-maps/commit/dcdfefa)), closes [#205](https://github.com/tomchentw/react-google-maps/issues/205) [#206](https://github.com/tomchentw/react-google-maps/issues/206)



<a name="4.8.2"></a>
## [4.8.2](https://github.com/tomchentw/react-google-maps/compare/v4.8.1...v4.8.2) (2016-02-21)


### Bug Fixes

* **componentLifecycleDecorator:** check _unregisterEvents before calling ([cd2667c](https://github.com/tomchentw/react-google-maps/commit/cd2667c)), closes [#117](https://github.com/tomchentw/react-google-maps/issues/117)



<a name="4.8.1"></a>
## [4.8.1](https://github.com/tomchentw/react-google-maps/compare/v4.8.0...v4.8.1) (2016-02-20)


### Bug Fixes

* **MarkerClusterer:** typo method name of getAverageCenter ([4f2ad76](https://github.com/tomchentw/react-google-maps/commit/4f2ad76)), closes [#203](https://github.com/tomchentw/react-google-maps/issues/203) [#204](https://github.com/tomchentw/react-google-maps/issues/204)



<a name="4.8.0"></a>
# [4.8.0](https://github.com/tomchentw/react-google-maps/compare/v4.7.2...v4.8.0) (2016-02-20)


### Features

* **KmlLayer:** add new KmlLayer component ([746af8d](https://github.com/tomchentw/react-google-maps/commit/746af8d))



<a name="4.7.2"></a>
## [4.7.2](https://github.com/tomchentw/react-google-maps/compare/v4.7.1...v4.7.2) (2016-01-07)


### Bug Fixes

* **OverlayViewCreator:** position container after render ([f5b0a4c](https://github.com/tomchentw/react-google-maps/commit/f5b0a4c)), closes [#167](https://github.com/tomchentw/react-google-maps/issues/167)



<a name="4.7.1"></a>
## [4.7.1](https://github.com/tomchentw/react-google-maps/compare/v4.7.0...v4.7.1) (2015-12-30)


### Bug Fixes

* **utils:** should use contentElement ([76abbfc](https://github.com/tomchentw/react-google-maps/commit/76abbfc))



<a name="4.7.0"></a>
# [4.7.0](https://github.com/tomchentw/react-google-maps/compare/v4.6.2...v4.7.0) (2015-12-07)


### Features

* **utils:** add triggerEvent api ([112a1e6](https://github.com/tomchentw/react-google-maps/commit/112a1e6)), closes [#161](https://github.com/tomchentw/react-google-maps/issues/161)



<a name="4.6.2"></a>
## [4.6.2](https://github.com/tomchentw/react-google-maps/compare/v4.6.1...v4.6.2) (2015-12-07)


### Features

* **SearchBox:** add placeholder props to the underlying input element ([e6a6a02](https://github.com/tomchentw/react-google-maps/commit/e6a6a02)), closes [#115](https://github.com/tomchentw/react-google-maps/issues/115) [#136](https://github.com/tomchentw/react-google-maps/issues/136)



<a name="4.6.1"></a>
## [4.6.1](https://github.com/tomchentw/react-google-maps/compare/v4.6.0...v4.6.1) (2015-12-03)


### Features

* **GoogleMap:** add warning for undefined google object ([2e0c60b](https://github.com/tomchentw/react-google-maps/commit/2e0c60b)), closes [#142](https://github.com/tomchentw/react-google-maps/issues/142)



<a name="4.6.0"></a>
# [4.6.0](https://github.com/tomchentw/react-google-maps/compare/v4.5.1...v4.6.0) (2015-11-22)


### Features

* **GoogleMapLoader:** introduce loader to manage React elements ([532816a](https://github.com/tomchentw/react-google-maps/commit/532816a)), closes [#141](https://github.com/tomchentw/react-google-maps/issues/141) [#133](https://github.com/tomchentw/react-google-maps/issues/133)
* **ScriptjsLoader:** new behavior will render GoogleMapLoader instead ([0f100d8](https://github.com/tomchentw/react-google-maps/commit/0f100d8))


### BREAKING CHANGES

* ScriptjsLoader: ScriptjsLoader will delegate to GoogleMapLoader when the script is loaded

Before:

```js
<ScriptjsLoader
  hostname={"maps.googleapis.com"}
  pathname={"/maps/api/js"}
  query={{v: `3.${ AsyncGettingStarted.version }`, libraries: "geometry,drawing,places"}}
  loadingElement={
    <div {...this.props} style={{ height: "100%" }}>
      <FaSpinner />
    </div>
  }
  googleMapElement={
    <GoogleMap
      containerProps={{
        ...this.props,
        style: {
          height: "100%",
        },
      }}
      ref={googleMap => {
        // Wait until GoogleMap is fully loaded. Related to #133
        setTimeout(() => {
          googleMap && console.log(`Zoom: ${ googleMap.getZoom() }`);
        }, 50);
      }}
      defaultZoom={3}
      defaultCenter={{lat: -25.363882, lng: 131.044922}}
      onClick={::this.handleMapClick}
    >
      <Marker
        {...this.state.marker}
        onRightclick={this.handleMarkerRightclick}
      />
    </GoogleMap>
  }
/>
```

After:

```js
<ScriptjsLoader
  hostname={"maps.googleapis.com"}
  pathname={"/maps/api/js"}
  query={{v: `3.${ AsyncGettingStarted.version }`, libraries: "geometry,drawing,places"}}
  loadingElement={
    <div {...this.props} style={{ height: "100%" }}>
      <FaSpinner />
    </div>
  }
  containerElement={
    <div {...this.props} style={{ height: "100%" }} />
  }
  googleMapElement={
    <GoogleMap
      ref={googleMap => {
        googleMap && console.log(`Zoom: ${ googleMap.getZoom() }`);
      }}
      defaultZoom={3}
      defaultCenter={{lat: -25.363882, lng: 131.044922}}
      onClick={::this.handleMapClick}
    >
      <Marker
        {...this.state.marker}
        onRightclick={this.handleMarkerRightclick}
      />
    </GoogleMap>
  }
/>
```
* GoogleMapLoader: GoogleMap with props.containerProps is now deprecated. Use GoogleMapLoader with props.googleMapElement instead

We also suggest switching to callback based ref so that you'll get the component instance when it is mounted.

Before:

```js
<GoogleMap containerProps={{
    ...this.props,
    style: {
      height: "100%",
    },
  }}
  ref="map"
  defaultZoom={3}
  defaultCenter={{lat: -25.363882, lng: 131.044922}}
  onClick={::this.handleMapClick}>
  {this.state.markers.map((marker, index) => {
    return (
      <Marker
        {...marker}
        onRightclick={this.handleMarkerRightclick.bind(this, index)} />
    );
  })}
</GoogleMap>
```

After:

```js
<GoogleMapLoader
  containerElement={
    <div
      {...this.props}
      style={{
        height: "100%",
      }}
    />
  }
  googleMapElement={
    <GoogleMap
      ref={(map) => console.log(map)}
      defaultZoom={3}
      defaultCenter={{lat: -25.363882, lng: 131.044922}}
      onClick={::this.handleMapClick}>
      {this.state.markers.map((marker, index) => {
        return (
          <Marker
            {...marker}
            onRightclick={this.handleMarkerRightclick.bind(this, index)} />
        );
      })}
    </GoogleMap>
  }
/>
```



<a name="4.5.1"></a>
## [4.5.1](https://github.com/tomchentw/react-google-maps/compare/v4.5.0...v4.5.1) (2015-11-21)


### Features

* **ScriptjsLoader:** check with propTypesElementOfType(GoogleMap) ([e8bb97b](https://github.com/tomchentw/react-google-maps/commit/e8bb97b))



<a name="4.5.0"></a>
# [4.5.0](https://github.com/tomchentw/react-google-maps/compare/v4.4.1...v4.5.0) (2015-11-21)


### Features

* **async/ScriptjsLoader:** replacement of async/ScriptjsGoogleMap ([ccfadd4](https://github.com/tomchentw/react-google-maps/commit/ccfadd4)), closes [#145](https://github.com/tomchentw/react-google-maps/issues/145)


### BREAKING CHANGES

* async/ScriptjsLoader: migrate from async/ScriptjsGoogleMap to async/ScriptjsLoader and changed its behavior from implicit inheritance to simple delegation

To migrate the code follow the example below (extracted from examples/gh-pages migration):

Before:

```js
<ScriptjsLoader
  hostname={"maps.googleapis.com"}
  pathname={"/maps/api/js"}
  query={{v: `3.exp`, libraries: "geometry,drawing,places"}}
  //
  // <GoogleMap> props
  defaultZoom={3}
  defaultCenter={{lat: -25.363882, lng: 131.044922}}
  onClick={::this._handle_map_click}
/>
```

After:

```js
<ScriptjsLoader
  hostname={"maps.googleapis.com"}
  pathname={"/maps/api/js"}
  query={{v: `3.exp`, libraries: "geometry,drawing,places"}}
  //
  googleMapElement={
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{lat: -25.363882, lng: 131.044922}}
      onClick={::this._handle_map_click}
    />
  }
/>
```



<a name="4.4.1"></a>
## [4.4.1](https://github.com/tomchentw/react-google-maps/compare/v4.4.0...v4.4.1) (2015-11-19)


### Bug Fixes

* **Marker:** remove from MarkerClusterer ([f4e0696](https://github.com/tomchentw/react-google-maps/commit/f4e0696)), closes [#154](https://github.com/tomchentw/react-google-maps/issues/154) [#153](https://github.com/tomchentw/react-google-maps/issues/153)



<a name="4.4.0"></a>
# [4.4.0](https://github.com/tomchentw/react-google-maps/compare/v4.3.3...v4.4.0) (2015-11-19)


### Features

* **MarkerClusterer:** Support for MarkerClusterPlus API ([d56551c](https://github.com/tomchentw/react-google-maps/commit/d56551c)), closes [#146](https://github.com/tomchentw/react-google-maps/issues/146)



<a name="4.3.3"></a>
## [4.3.3](https://github.com/tomchentw/react-google-maps/compare/v4.3.2...v4.3.3) (2015-11-18)


### Bug Fixes

* **OverlayView:** redraw only when props.mapPaneName changes ([ff4473d](https://github.com/tomchentw/react-google-maps/commit/ff4473d)), closes [#147](https://github.com/tomchentw/react-google-maps/issues/147) [#148](https://github.com/tomchentw/react-google-maps/issues/148)



<a name="4.3.2"></a>
## [4.3.2](https://github.com/tomchentw/react-google-maps/compare/v4.3.1...v4.3.2) (2015-11-17)


### Bug Fixes

* **async/ScriptjsGoogleMap:** switch to _.isEqual for key comparasion ([0a1df35](https://github.com/tomchentw/react-google-maps/commit/0a1df35)), closes [#143](https://github.com/tomchentw/react-google-maps/issues/143)



<a name="4.3.1"></a>
## [4.3.1](https://github.com/tomchentw/react-google-maps/compare/v4.3.0...v4.3.1) (2015-11-16)


### Bug Fixes

* **package.json:** scriptjs should exist in dependencies ([4f3304c](https://github.com/tomchentw/react-google-maps/commit/4f3304c))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/tomchentw/react-google-maps/compare/v4.2.1...v4.3.0) (2015-11-16)


### Features

* **ScriptjsGoogleMap:** add "scriptjs" support ([b80b731](https://github.com/tomchentw/react-google-maps/commit/b80b731))



<a name="4.2.1"></a>
## [4.2.1](https://github.com/tomchentw/react-google-maps/compare/v4.2.0...v4.2.1) (2015-11-16)


### Bug Fixes

* **OverlayView:** switch to ReactDOM ([51fe680](https://github.com/tomchentw/react-google-maps/commit/51fe680)), closes [#140](https://github.com/tomchentw/react-google-maps/issues/140)
* **OverlayView:** use ReactDOM for unmountComponentAtNode ([735eba0](https://github.com/tomchentw/react-google-maps/commit/735eba0)), closes [#137](https://github.com/tomchentw/react-google-maps/issues/137)



<a name="4.2.0"></a>
# [4.2.0](https://github.com/tomchentw/react-google-maps/compare/v4.1.1...v4.2.0) (2015-10-15)


### Bug Fixes

* **src:** replace fbjs dependencies with can-use-dom ([43250b3](https://github.com/tomchentw/react-google-maps/commit/43250b3)), closes [#134](https://github.com/tomchentw/react-google-maps/issues/134)



<a name="4.1.1"></a>
## [4.1.1](https://github.com/tomchentw/react-google-maps/compare/v4.1.0...v4.1.1) (2015-10-14)


### Bug Fixes

* **src:** switch to findDOMNode from "react-dom" ([593b1c8](https://github.com/tomchentw/react-google-maps/commit/593b1c8)), closes [#132](https://github.com/tomchentw/react-google-maps/issues/132)



<a name="4.1.0"></a>
# [4.1.0](https://github.com/tomchentw/react-google-maps/compare/v4.0.0...v4.1.0) (2015-10-13)


### Features

* **src:** move instance creation in componentWillMount ([91d5790](https://github.com/tomchentw/react-google-maps/commit/91d5790))
* **src:** update composeOptions to accept controlledPropTypes for _2 ([03aee4d](https://github.com/tomchentw/react-google-maps/commit/03aee4d))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/tomchentw/react-google-maps/compare/v3.0.0...v4.0.0) (2015-10-08)


### Features

* **package.json:** upgrade to React@^0.14 ([443a5fd](https://github.com/tomchentw/react-google-maps/commit/443a5fd)), closes [#127](https://github.com/tomchentw/react-google-maps/issues/127) [#102](https://github.com/tomchentw/react-google-maps/issues/102)


### BREAKING CHANGES

* * __React@^0.14__: upgrade React in peerDependencies
	* add __react-dom@^0.14__ to peerDependencies



<a name"3.0.0"></a>
## 3.0.0 (2015-09-30)


#### Bug Fixes

* **package.json:** remove react from dependencies ([bfd37877](https://github.com/tomchentw/react-google-maps/commit/bfd37877), closes [#109](https://github.com/tomchentw/react-google-maps/issues/109))


<a name"2.2.0"></a>
## 2.2.0 (2015-09-30)


#### Bug Fixes

* **Marker:** allow null and undefined as children ([17daa0a2](https://github.com/tomchentw/react-google-maps/commit/17daa0a2), closes [#119](https://github.com/tomchentw/react-google-maps/issues/119))


<a name"2.1.1"></a>
### 2.1.1 (2015-09-30)


#### Bug Fixes

* **InfoBox:** typo when update InfoBox children ([a66852c4](https://github.com/tomchentw/react-google-maps/commit/a66852c4), closes [#120](https://github.com/tomchentw/react-google-maps/issues/120))


<a name"2.1.0"></a>
## 2.1.0 (2015-09-08)


#### Features

* **SearchBox:** Support for Google Places API search box ([b06f5d6c](https://github.com/tomchentw/react-google-maps/commit/b06f5d6c), closes [#110](https://github.com/tomchentw/react-google-maps/issues/110))


<a name"2.0.3"></a>
### 2.0.3 (2015-08-18)


#### Bug Fixes

* **OverlayView:**
  * add invariant for mapPaneName ([f102577c](https://github.com/tomchentw/react-google-maps/commit/f102577c))
  * add invariant checking for position props ([757bda08](https://github.com/tomchentw/react-google-maps/commit/757bda08))
  * add position to propTypes ([1fc968ad](https://github.com/tomchentw/react-google-maps/commit/1fc968ad), closes [#99](https://github.com/tomchentw/react-google-maps/issues/99))
* **package.json:** remove object-path ([ee55b7a5](https://github.com/tomchentw/react-google-maps/commit/ee55b7a5))


<a name"2.0.2"></a>
### 2.0.2 (2015-08-08)


#### Bug Fixes

* **GoogleMap:** remove propTypes validation on children ([0e417015](https://github.com/tomchentw/react-google-maps/commit/0e417015))
* **OverlayView:** props.{default}mapPaneName should not be required ([702a5710](https://github.com/tomchentw/react-google-maps/commit/702a5710))


<a name"2.0.1"></a>
### 2.0.1 (2015-08-08)


#### Bug Fixes

* **Rectangle:** remove unnecessary underscore ([13312273](https://github.com/tomchentw/react-google-maps/commit/13312273), closes [#90](https://github.com/tomchentw/react-google-maps/issues/90))


<a name"2.0.0"></a>
## 2.0.0 (2015-08-07)


#### Features

* **InfoWindow:** add ReactElement child as content support ([2c0dc026](https://github.com/tomchentw/react-google-maps/commit/2c0dc026), closes [#69](https://github.com/tomchentw/react-google-maps/issues/69))
* **Rectangle:** add new componet ([4511d87d](https://github.com/tomchentw/react-google-maps/commit/4511d87d), closes [#80](https://github.com/tomchentw/react-google-maps/issues/80))


#### Breaking Changes

* This commit rewrite this module from scratch.

* GoogleMaps -> GoogleMap
	- (Others Component names are the same)
* OverlayView
      - Now only accepts single child
* Remove asynchronous loading support
* The props are not directly served as options for all google.maps instance.
	- Instead, we convert setters to props and also expose getters on component instance.
* To set an option directly, you can now pass options object
	just the same way as using Google Maps JavaScript APIs.
* Expose props have two representation: controlled & uncontrolled
	- uncontrolled props will have a `default${ PropName }` name
	- controlled props will be `${ propName }` as you expected
* Uncontrolled props will be used only when the instance first mounted
* Controlled props will call its corresponding setters **every** time rendered

MIGRATION GUIDE:

It introduces **controlled property** concept into the module. Most of the case, your application would like to have **uncontrolled** property. So change your component like this:

Before (v1.x.x):

```js
<Marker
      key={this.props.key}
      position={this.props.position}
      animation={this.props.animation}
      onRightclick={this.handleMarkerRightclick} />
```

After (v2.x.x):

```js
<Marker
      key={this.props.key}
      defaultPosition={this.props.position}
      defaultAnimation={this.props.animation}
      onRightclick={this.handleMarkerRightclick} />
```

The properties with *default-* prefix is **uncontrolled** property. It will only be set **ONCE** when the component is first-time mounted. Any further changes to your React props/state will **NOT** affect this marker (So it's **uncontrolled** from the view of React). Who can change the marker, you may ask. The answer is, only the component from google.maps.

But sometimes, we may want the marker's position changed according to current state. In that case, you have to provide **controlled** property to the `<Marker [position={this.state.position}>`. By doing so, the marker's position will change *every* time the React props/state changes. However, it will not intercept the changes made by the component from google.maps. This is because for the `<Marker>` itself, it doesn't know what events from google.maps will change its component. So the consumer who uses "react-google-maps" will have to manually handle this in their codebase.

 ([081d03f1](https://github.com/tomchentw/react-google-maps/commit/081d03f1))


<a name"1.7.1"></a>
### 1.7.1 (2015-07-01)


#### Bug Fixes

* **src:** eslint rules ([012faada](https://github.com/tomchentw/react-google-maps/commit/012faada))


## 1.7.0 (2015-06-19)


#### Features

* **GoogleMaps:** specify map bounds via declarative props.bounds ([b1333c52](https://github.com/tomchentw/react-google-maps/commit/b1333c529fc4b338cef425dba9b4ba7d33937d29), closes [#64](https://github.com/tomchentw/react-google-maps/issues/64))


## 1.6.0 (2015-06-19)


#### Features

* **OverlayView:** add OverlayView component by @petebrowne ([f0c56ecb](https://github.com/tomchentw/react-google-maps/commit/f0c56ecb06a452c3f942f4c1596e9bf6d76f70aa), closes [#63](https://github.com/tomchentw/react-google-maps/issues/63))


### 1.5.1 (2015-06-17)


## 1.5.0 (2015-06-17)


#### Bug Fixes

* **VirtualContainer:** propTypes.children should be renderable ([a3d73af4](https://github.com/tomchentw/react-google-maps/commit/a3d73af4c209765eb7ae0ead70e9d3be8afd2ffa))


#### Features

* **GoogleMaps:** render VirtualContainer as children ([c9e19828](https://github.com/tomchentw/react-google-maps/commit/c9e19828ecf4f35d78f1a0b34bfc6cbe7b1b1780), closes [#61](https://github.com/tomchentw/react-google-maps/issues/61))


## 1.4.0 (2015-06-17)


#### Bug Fixes

* **SimpleChildComponent:** Make sure to only animate markers on the first run. ([65aec078](https://github.com/tomchentw/react-google-maps/commit/65aec0784f833061eeaad7be00d979a0a417330e))
* **src:** eslint issues ([adf3764b](https://github.com/tomchentw/react-google-maps/commit/adf3764b6264e2740c5e3e6e8caf56b3c6732300))


### 1.3.1 (2015-05-21)


## 1.3.0 (2015-05-21)


#### Features

* **InfoBox:** Support for InfoBox ([613e5ef5](https://github.com/tomchentw/react-google-maps/commit/613e5ef5c517f4db601e13524586a5195b9f967b))


## 1.2.0 (2015-05-15)


#### Features

* **DrawingManager:** Support for Drawing API ([9b3cbeba](https://github.com/tomchentw/react-google-maps/commit/9b3cbeba5ac4d1ebb83c4ed61dadd49ca8ef7c33))
* **SimpleChildComponent:**
  * use warning from react/lib/warning ([680c194d](https://github.com/tomchentw/react-google-maps/commit/680c194d70485e49f5498d8777a73e80f3f4f73b))
  * Add warning text ([9652e0c7](https://github.com/tomchentw/react-google-maps/commit/9652e0c7b231f0569c522add87034dad214a9235))


### 1.1.2 (2015-05-06)


#### Bug Fixes

* **GoogleMaps:** constructor should use spread operator ([d8e30af6](https://github.com/tomchentw/react-google-maps/commit/d8e30af69dc411cc5a2d5f8cb0239a4669b1c693))
* **SimpleChildComponent:** prevent removal of child during update ([834d399b](https://github.com/tomchentw/react-google-maps/commit/834d399b3c39045d8406b5db50edf4618aa2b67a))


### 1.1.1 (2015-05-01)


#### Bug Fixes

* **VirtualContainer:** preserve ref for React.cloneElement ([3d3be964](https://github.com/tomchentw/react-google-maps/commit/3d3be964111b969bad9a1f5052f4aae8e3cc3637))


## 1.1.0 (2015-04-30)


#### Features

* **GoogleMaps:**
  * get rid of mapProps ([7e338c2a](https://github.com/tomchentw/react-google-maps/commit/7e338c2add01fdb63441e023e5da25db905b9c4c))
  * render child components inside VirtualContainer ([f07eb4b4](https://github.com/tomchentw/react-google-maps/commit/f07eb4b47605a4bc2752f60306ae4e5f8395bc64))


#### Breaking Changes

* mapProps is no longer needed

  since map children components are now rendered inside a virtual
  container, we don't need funky wrapper div anymore.

  Before:

    <div {...props.containerProps} ref="googleMaps" />
      <div {...props.mapProps} ref="googleMaps" />
    </div>

  After:

    <div {...props.containerProps} ref="googleMaps" />

 ([7e338c2a](https://github.com/tomchentw/react-google-maps/commit/7e338c2add01fdb63441e023e5da25db905b9c4c))


### 1.0.1 (2015-04-30)


#### Bug Fixes

* **Marker:** dont wrap children inside noscript tag ([5d9bbf0a](https://github.com/tomchentw/react-google-maps/commit/5d9bbf0a805d726711d1a97b034bbf813b54ee4c))
* **package.json:** test ([7b54b54e](https://github.com/tomchentw/react-google-maps/commit/7b54b54e0cd432fb6683d1c7558f62104e8c07e2))


## 1.0.0 (2015-04-28)


#### Bug Fixes

* **package.json:** add peerDependencies ([15166996](https://github.com/tomchentw/react-google-maps/commit/1516699617da603dd9dc7e51528a3dd827470617))


#### Features

* **src:** rewrite with new API ([a525d5f2](https://github.com/tomchentw/react-google-maps/commit/a525d5f2a074506ad0a9a50fd58d77ecfc4318f9))


### 0.2.5 (2015-03-11)


#### Features

* **Map:**
  * add support for DirectionsRenderer ([0102184a](https://github.com/tomchentw/react-google-maps/commit/0102184a5dfa58392f70686b810734953e4d008c))
  * add Circle support ([8a8d4d50](https://github.com/tomchentw/react-google-maps/commit/8a8d4d50563b83d98929aacff72a1dcf8708a7e7))


### 0.2.4 (2014-12-16)


#### Features

* **Map:** expose fitBounds as public API ([c64da722](https://github.com/tomchentw/react-google-maps/commit/c64da7225c0ed88a03104d34a7cbd2bdbe46b22a))


### 0.2.3 (2014-11-27)


### 0.2.2 (2014-11-20)


#### Bug Fixes

* **Map:** only pass id, className and style from props ([284ab299](https://github.com/tomchentw/react-google-maps/commit/284ab2991a7be95afa2b612ef7c8ca0b5faa8861))


### 0.2.1 (2014-11-20)


## 0.2.0 (2014-11-20)


#### Bug Fixes

* **ChildMixin:** remove invalid_context and duplicated contextTypes ([80110a23](https://github.com/tomchentw/react-google-maps/commit/80110a23d3fb7e2fd8d4dd0258207a6312912c9c))
* **EventBindingMixin:** pass instance when binding/unbinding ([bb922794](https://github.com/tomchentw/react-google-maps/commit/bb9227940a7b6b6e4394878fe48e49f623f88759))
* **GoogleMapsMixin:** respond to update of googleMapsApi ([3b0a0e07](https://github.com/tomchentw/react-google-maps/commit/3b0a0e07bda3263343d41ed90514e25511940309))
* **InfoWindow:**
  * event names ([abb9ad3f](https://github.com/tomchentw/react-google-maps/commit/abb9ad3f1dc0a367145d0c9397f1ec635badb2fe))
  * check owner props before getting ref ([9022d48f](https://github.com/tomchentw/react-google-maps/commit/9022d48fb45679a19145c85ac601b41fdc5dca4d))
* **Map:**
  * bind event once to component instance ([fe2665ae](https://github.com/tomchentw/react-google-maps/commit/fe2665aebd10d908b6a49b1dacbce3b7650ae804))
  * add api loaded state to _initialized ([0e0192ba](https://github.com/tomchentw/react-google-maps/commit/0e0192ba47cc84f3174435538e7ac4fa7c126ec4))
* **Marker:** event listeners ([f878c002](https://github.com/tomchentw/react-google-maps/commit/f878c0023daeb076e3becc618cdef464997de257))
* **Polygon:** event listeners ([5f98d0e1](https://github.com/tomchentw/react-google-maps/commit/5f98d0e1905d5d5b72c538bef70843519e982541))
* **create_child_component:** event binding for child components ([f4b1b022](https://github.com/tomchentw/react-google-maps/commit/f4b1b022eec885fe7ca9c17cebe24fa33c5b7a8d))
* **expose_getters_from:** should iterate all keys in prototype chain ([5a89ed1c](https://github.com/tomchentw/react-google-maps/commit/5a89ed1c78c7e20dbe6bceb7dcc7a6f2e9118f71))


#### Features

* **ChildMixin:**
  * expose instance getters from prototype ([bad5456f](https://github.com/tomchentw/react-google-maps/commit/bad5456f3139933a7c51eb11b4abcc147489abd0))
  * add invalid_context to check before operations ([5d33c309](https://github.com/tomchentw/react-google-maps/commit/5d33c3093f5040ee9502c85743c3c6457d8ca242))
  * make Map and Marker use context apis ([9514b484](https://github.com/tomchentw/react-google-maps/commit/9514b4843453f00795e4bb685a4c8f341b77d98b))
* **EventBindingMixin:**
  * move event names definition to caller ([4c5ca5d1](https://github.com/tomchentw/react-google-maps/commit/4c5ca5d11f7ce0fea3fce2ff0d286719931520c7))
  * hook to correct lifecycle events ([4ef9fdea](https://github.com/tomchentw/react-google-maps/commit/4ef9fdead0b0dd430e4ae2cd4abb0e9b49927b44))
  * extract event binding part out ([c12ddd4a](https://github.com/tomchentw/react-google-maps/commit/c12ddd4a7420e48004baafc6bb2fbbf38632a9a5))
* **GoogleMap:**
  * hookup event listeners to map instance ([ff1a7a8a](https://github.com/tomchentw/react-google-maps/commit/ff1a7a8acf7534e61036ec6cf2c75b5a79918143))
  * initialize google map component ([80e7fd84](https://github.com/tomchentw/react-google-maps/commit/80e7fd841988c1fc61a0ecf8bc0f46ffd70fcc21))
* **GoogleMapsMixin:**
  * move into mixins subfolder ([0f10be83](https://github.com/tomchentw/react-google-maps/commit/0f10be83d7805f69f1bc5c16c89b49de3ef56c0d))
  * create mixin for context usage ([526ca9d8](https://github.com/tomchentw/react-google-maps/commit/526ca9d8c8cc561f9d9a84a2b4ef10a43d84e862))
* **InfoWindow:** component with example ([e227edf8](https://github.com/tomchentw/react-google-maps/commit/e227edf8af2e440e498544469d306ff1eecbc38b))
* **Map:**
  * expose panBy, panTo and panToBounds as public interfaces ([6ccd1284](https://github.com/tomchentw/react-google-maps/commit/6ccd12849ec89f0ed0c1a6211c21c47ca89107c1))
  * stateless map component ([3d3aa153](https://github.com/tomchentw/react-google-maps/commit/3d3aa1538131b35e0ae5aa702b521899a27ed919))
  * configureable id, className and style ([420e83bb](https://github.com/tomchentw/react-google-maps/commit/420e83bbb19a5f5c951a6f2f73da564ddfc04c6f))
  * setOptions when componentDidUpdate ([8d07bd34](https://github.com/tomchentw/react-google-maps/commit/8d07bd3410da97ec330db9d4a188e7d108218813))
  * extract out Map component ([8c5429c7](https://github.com/tomchentw/react-google-maps/commit/8c5429c7ef913a812929eaa72a74062805895c56))
* **Marker:** update options when componentDidUpdate ([0a7e490f](https://github.com/tomchentw/react-google-maps/commit/0a7e490f13af7c22e0a5b54dd5251527a7987964))
* **Polygon:** add component and client example ([556b9be9](https://github.com/tomchentw/react-google-maps/commit/556b9be93542a796b5ca447b90d717a193f8d618))
* **Polyline:** component with example ([d0b802bb](https://github.com/tomchentw/react-google-maps/commit/d0b802bbf108a73554be67b3f81f1cb0f149f557))
* **index:** create common child components by factory ([43b791d2](https://github.com/tomchentw/react-google-maps/commit/43b791d2610fa86083832b8579f25703a01f0ad7))


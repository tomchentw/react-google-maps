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


# react-google-maps
> React.js Google Maps integration component

[![Version][npm-image]][npm-url] [![Travis CI][travis-image]][travis-url] [![Quality][codeclimate-image]][codeclimate-url] [![Coverage][codeclimate-coverage-image]][codeclimate-coverage-url] [![Dependencies][gemnasium-image]][gemnasium-url] [![Gitter][gitter-image]][gitter-url]


## Quick start: SimpleMap

Declare your Google Maps components using React components.

```js
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function SimpleMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={props.onMapClick}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
```


## Documentation

### Rule 1

Define `<GoogleMap>` component in the top level. Use `containerProps`, `containerTagName` to customize the wrapper DOM for the component.

Other components like `<Marker>` belong to the children of `<GoogleMap>`. You already know this from the example code above.

### Rule 2

Everything in the `Methods` table in the [official documentation](https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker) of the component could be set directly via component's *props* . For example, a `<Marker>` component has the following *props*:

```
animation, attribution, clickable, cursor, draggable, icon, label, opacity, options, place, position, shape, title, visible, zIndex
```

### Rule 3

Every props mentioned in __Rule 2__ could be either [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components) or [uncontrolled](https://facebook.github.io/react/docs/forms.html#uncontrolled-components) property. Free to use either one depends on your use case.

### Rule 4

Anything that is inside components' `options` property can __ONLY__ be accessible via `props.options`. It's your responsibility to manage the `props.options` object during the React lifetime of your component. My suggestion is, always use __Rule 3__ if possible. Only use `options` when it's necessary.

### Rule 5

Event handlers on these components can be bound using React component convention. There's a list of event names that exist in the `eventLists` folder. Find the supported event name and use the form of `on${ camelizedEventName }`. For example, If I want to add `center_changed` callback to a map instance, I'll do the following with `react-google-maps`:

```js
<GoogleMap
  // onCenterChanged: on + camelizedEventName(center_change)
  onCenterChanged={this.handleCenterChanged}
/>
```

The list of event names can be found [here](https://github.com/tomchentw/react-google-maps/blob/master/src/eventLists/GoogleMapEventList.js).

### Check the examples

Static hosted [demo site][demo] on GitHub. The code is located under [examples/gh-pages][examples_gh_pages] folder.


## Usage

`react-google-maps` requires __React >= 0.14__

```sh
npm install --save react-google-maps
```

All components are available on the top-level export.

```js
import { GoogleMap, Marker, SearchBox } from "react-google-maps";
```

### Trigger events

`triggerEvent(component, ...args)`: One common event trigger is to resize map after the size of the container div change.

```js
import {triggerEvent} from "react-google-maps/lib/utils";

function handleWindowResize () {
  triggerEvent(this._googleMapComponent, "resize");
}
// and you'll get `this._googleMapComponent` like this:
<GoogleMap ref={it => this._googleMapComponent = it} />
```

### Optimize bundle size

You could of course import from individual modules to save your [webpack][webpack]'s bundle size.

```js
import GoogleMap from "react-google-maps/lib/GoogleMap"; // Or import {default as GoogleMap} ...
```

### Additional Addons

Some addons component could __ONLY__ be accessible via direct import:

```js
import InfoBox from "react-google-maps/lib/addons/InfoBox";
```


## Changelog

The changelog is automatically generated via [conventional-changelog][conventional-changelog] and [can be found in project root](https://github.com/tomchentw/react-google-maps/blob/master/CHANGELOG.md) as well as npm tarball.


## Development

First, clone the project.

```shell
git clone ...
```

### With Docker

Install `docker@^1.8.2`, `docker-compose@^1.4.0` and optionally `docker-machine@^0.4.1`. Then,

```shell
docker-compose run --service-ports web
```

Then open [http://192.168.59.103:8080](http://192.168.59.103:8080).

**192.168.59.103** is actually your ip from `docker-machine ip`.

If you change code in your local, you'll need to rebuild the image to make changes happen.

If you're previously using `boot2docker`, you may want to migrate to [docker-machine](https://docs.docker.com/machine/migrate-to-machine/) instead.

```shell
docker-compose build
```

### Without Docker

Install `node`. Then,

```shell
npm install
cd examples/gh-pages
npm install
npm start
```

Then open [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/).


## Contributing

[![devDependency Status][david-dm-image]][david-dm-url]

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


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
[david-dm-image]: https://img.shields.io/david/dev/tomchentw/react-google-maps.svg?style=flat-square
[david-dm-url]: https://david-dm.org/tomchentw/react-google-maps#info=devDependencies


[demo]: http://tomchentw.github.io/react-google-maps/
[examples_gh_pages]: https://github.com/tomchentw/react-google-maps/tree/master/examples/gh-pages
[webpack]: http://webpack.github.io/docs/tutorials/getting-started/
[conventional-changelog]: https://github.com/ajoslin/conventional-changelog

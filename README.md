# react-google-maps [![Travis CI][travis-image]][travis-url] [![Quality][codeclimate-image]][codeclimate-url] [![Coverage][codeclimate-coverage-image]][codeclimate-coverage-url] [![Dependencies][gemnasium-image]][gemnasium-url] [![Gitter][gitter-image]][gitter-url]
> React.js Google Maps integration component

[![Version][npm-image]][npm-url]


## Installation

```sh
npm i --save react-google-maps
```


## Demo/Examples

Static hosted [demo site][demo] on GitHub. The code is located under [examples/gh-pages][examples_gh_pages] folder.


## Usage

This module requires to be bundled with [webpack][webpack]/browserify and loads `react/addons` internally.  


## Development

First, clone the project.

```shell
git clone ...
```

### With Docker

Install `docker@^1.6.2`, `docker-compose@^1.3.0` and optionally `boot2docker@^1.6.2`. Then,

```shell
docker-compose run --service-ports web
```

Then open [http://192.168.59.103:8080](http://192.168.59.103:8080).

**192.168.59.103** is actually your ip from `boot2docker ip`.

If you change code in your local, you'll need to rebuild the image to make changes happen.

```shell
docker-compose rebuild
```

### With Mac

Install `node@^0.12.4`. Then,

```shell
npm install
cd examples/gh-pages
npm install
npm start
```

Then open [http://localhost:8080](http://localhost:8080).


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

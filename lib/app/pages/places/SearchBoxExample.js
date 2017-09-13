"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of")

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck")

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require("babel-runtime/helpers/createClass")

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn")

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require("babel-runtime/helpers/inherits")

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _lib = require("../../../lib")

var _SearchBox = require("../../../lib/places/SearchBox")

var _SearchBox2 = _interopRequireDefault(_SearchBox)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var INPUT_STYLE = {
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  border: "1px solid transparent",
  width: "240px",
  height: "32px",
  marginTop: "27px",
  padding: "0 12px",
  borderRadius: "1px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  fontSize: "14px",
  outline: "none",
  textOverflow: "ellipses",
} /* global google */

var SearchBoxExampleGoogleMap = (0, _lib.withGoogleMap)(function(props) {
  return _react2.default.createElement(
    _lib.GoogleMap,
    {
      ref: props.onMapMounted,
      defaultZoom: 15,
      center: props.center,
      onBoundsChanged: props.onBoundsChanged,
    },
    _react2.default.createElement(_SearchBox2.default, {
      ref: props.onSearchBoxMounted,
      bounds: props.bounds,
      controlPosition: google.maps.ControlPosition.TOP_LEFT,
      onPlacesChanged: props.onPlacesChanged,
      inputPlaceholder: "Customized your placeholder",
      inputStyle: INPUT_STYLE,
    }),
    props.markers.map(function(marker, index) {
      return _react2.default.createElement(_lib.Marker, {
        position: marker.position,
        key: index,
      })
    })
  )
})

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var SearchBoxExample = (function(_Component) {
  ;(0, _inherits3.default)(SearchBoxExample, _Component)

  function SearchBoxExample() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, SearchBoxExample)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          SearchBoxExample.__proto__ ||
          (0, _getPrototypeOf2.default)(SearchBoxExample)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        bounds: null,
        center: {
          lat: 47.6205588,
          lng: -122.3212725,
        },
        markers: [],
      }),
      (_this.handleMapMounted = _this.handleMapMounted.bind(_this)),
      (_this.handleBoundsChanged = _this.handleBoundsChanged.bind(_this)),
      (_this.handleSearchBoxMounted = _this.handleSearchBoxMounted.bind(_this)),
      (_this.handlePlacesChanged = _this.handlePlacesChanged.bind(_this)),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(SearchBoxExample, [
    {
      key: "handleMapMounted",
      value: function handleMapMounted(map) {
        this._map = map
      },
    },
    {
      key: "handleBoundsChanged",
      value: function handleBoundsChanged() {
        this.setState({
          bounds: this._map.getBounds(),
          center: this._map.getCenter(),
        })
      },
    },
    {
      key: "handleSearchBoxMounted",
      value: function handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox
      },
    },
    {
      key: "handlePlacesChanged",
      value: function handlePlacesChanged() {
        var places = this._searchBox.getPlaces()

        var bounds = new google.maps.LatLngBounds()

        places.map(function(place) {
          place.geometry.viewport
            ? bounds.union(place.geometry.viewport)
            : bounds.extend(place.geometry.location)
        })

        var markers = places.map(function(place) {
          return {
            position: place.geometry.location,
          }
        })

        var mapCenter =
          markers.length > 0 ? markers[0].position : this.state.center

        this.setState({
          center: mapCenter,
          markers: markers,
        })

        this._map.fitBounds(bounds)
      },
    },
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(SearchBoxExampleGoogleMap, {
          containerElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          mapElement: _react2.default.createElement("div", {
            style: { height: "100%" },
          }),
          center: this.state.center,
          onMapMounted: this.handleMapMounted,
          onBoundsChanged: this.handleBoundsChanged,
          onSearchBoxMounted: this.handleSearchBoxMounted,
          bounds: this.state.bounds,
          onPlacesChanged: this.handlePlacesChanged,
          markers: this.state.markers,
        })
      },
    },
  ])
  return SearchBoxExample
})(_react.Component)

exports.default = SearchBoxExample

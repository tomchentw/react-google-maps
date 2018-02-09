"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Autocomplete = undefined

var _defineProperty2 = require("babel-runtime/helpers/defineProperty")

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

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

var _isNumber2 = require("lodash/isNumber")

var _isNumber3 = _interopRequireDefault(_isNumber2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _reactDom = require("react-dom")

var _reactDom2 = _interopRequireDefault(_reactDom)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _AutocompleteHelper = require("../../utils/AutocompleteHelper")

var helpers = _interopRequireWildcard(_AutocompleteHelper)

var _MapChildHelper = require("../../utils/MapChildHelper")

var _constants = require("../../constants")

var _invariant = require("invariant")

var _invariant2 = _interopRequireDefault(_invariant)

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key]
      }
    }
    newObj.default = obj
    return newObj
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.places.Autocomplete` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
 */
var Autocomplete = (exports.Autocomplete = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Autocomplete, _React$PureComponent)

  function Autocomplete() {
    var _ref

    var _temp, _this, _ret

    ;(0, _classCallCheck3.default)(this, Autocomplete)

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
          Autocomplete.__proto__ ||
          (0, _getPrototypeOf2.default)(Autocomplete)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = (0, _defineProperty3.default)(
        {},
        _constants.AUTO_COMPLETE,
        null
      )),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(Autocomplete, [
    {
      key: "componentWillMount",
      value: function componentWillMount() {
        ;(0, _invariant2.default)(
          google.maps.places,
          'Did you include "libraries=places" in the URL?'
        )

        this.handleInitializeAutoComplete()
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var autoComplete = this.state[_constants.AUTO_COMPLETE]

        ;(0, _MapChildHelper.componentDidMount)(this, autoComplete, eventMap)
        this.handleMountAtControlPosition()
      },
    },
    {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProp) {
        if (this.props.controlPosition !== nextProp.controlPosition) {
          this.handleUnmountAtControlPosition()
        }
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.AUTO_COMPLETE],
          eventMap,
          updaterMap,
          prevProps
        )
        if (this.props.controlPosition !== prevProps.controlPosition) {
          this.handleMountAtControlPosition()
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        this.handleUnmountAtControlPosition()
        if (_react2.default.version.match(/^16/)) {
          return
        }
        if (this.containerElement) {
          _reactDom2.default.unmountComponentAtNode(this.containerElement)
          this.containerElement = null
        }
      },
    },
    {
      key: "handleInitializeAutoComplete",
      value: function handleInitializeAutoComplete() {
        this.containerElement = helpers.createInputElement(this.props)

        /*
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
       */
        var autocomplete = new google.maps.places.Autocomplete(
          this.containerElement,
          this.props.options
        )
        ;(0, _MapChildHelper.construct)(
          Autocomplete.propTypes,
          updaterMap,
          this.props,
          autocomplete
        )

        this.setState(
          (0, _defineProperty3.default)(
            {},
            _constants.AUTO_COMPLETE,
            autocomplete
          )
        )

        return autocomplete
      },
    },
    {
      key: "handleMountAtControlPosition",
      value: function handleMountAtControlPosition() {
        if (isValidControlPosition(this.props.controlPosition)) {
          this.mountControlIndex = helpers.mountInputElementToControlPositionOnMap(
            this.containerElement,
            this.props.controlPosition,
            this.context[_constants.MAP]
          )
        }
      },
    },
    {
      key: "handleUnmountAtControlPosition",
      value: function handleUnmountAtControlPosition() {
        if (isValidControlPosition(this.props.controlPosition)) {
          helpers.unmountInputElementFromControlPositionOnMap(
            this.mountControlIndex,
            this.props.controlPosition,
            this.context[_constants.MAP]
          )
        }
      },
    },
    {
      key: "render",
      value: function render() {
        if (_react2.default.version.match(/^16/)) {
          return _reactDom2.default.createPortal(
            _react2.default.Children.only(this.props.children),
            this.containerElement
          )
        }
        return false
      },

      /**
       * Returns the bounds to which predictions are biased.
       * @type LatLngBounds
       * @public
       */
    },
    {
      key: "getBounds",
      value: function getBounds() {
        return this.state[_constants.AUTO_COMPLETE].getBounds()
      },

      /**
       * Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the `name` property set to the current value of the input field.
       * @type PlaceResultname
       * @public
       */
    },
    {
      key: "getPlace",
      value: function getPlace() {
        return this.state[_constants.AUTO_COMPLETE].getPlace()
      },
    },
  ])
  return Autocomplete
})(
  _react2.default.PureComponent
)) /*
                                   * -----------------------------------------------------------------------------
                                   * This file is auto-generated from the corresponding file at `src/macros/`.
                                   * Please **DO NOT** edit this file directly when creating PRs.
                                   * -----------------------------------------------------------------------------
                                   */
/* global google */

Autocomplete.propTypes = {
  /**
   * Where to put `<Autocomplete>` inside a `<GoogleMap>`
   *
   * @example google.maps.ControlPosition.TOP_LEFT
   * @type number
   */
  controlPosition: _propTypes2.default.number,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: _propTypes2.default.any,

  /**
   * @type ComponentRestrictions
   */
  defaultComponentRestrictions: _propTypes2.default.any,

  /**
   * @type AutocompleteOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type Array<string>
   */
  defaultTypes: _propTypes2.default.any,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: _propTypes2.default.any,

  /**
   * @type ComponentRestrictions
   */
  componentRestrictions: _propTypes2.default.any,

  /**
   * @type AutocompleteOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type Array<string>
   */
  types: _propTypes2.default.any,

  /**
   * function
   */
  onPlaceChanged: _propTypes2.default.func,
}
Autocomplete.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = Autocomplete

var isValidControlPosition = _isNumber3.default

var eventMap = {
  onPlaceChanged: "place_changed",
}

var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds)
  },
  componentRestrictions: function componentRestrictions(
    instance,
    _componentRestrictions
  ) {
    instance.setComponentRestrictions(_componentRestrictions)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  types: function types(instance, _types) {
    instance.setTypes(_types)
  },
}

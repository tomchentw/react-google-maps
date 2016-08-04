"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapEventPropTypes = exports.mapDefaultPropTypes = exports.mapControlledPropTypes = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _GoogleMapEventList = require("../eventLists/GoogleMapEventList");

var _GoogleMapEventList2 = _interopRequireDefault(_GoogleMapEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapControlledPropTypes = exports.mapControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  center: _react.PropTypes.object,
  heading: _react.PropTypes.number,
  mapTypeId: _react.PropTypes.any,
  options: _react.PropTypes.object,
  streetView: _react.PropTypes.any,
  tilt: _react.PropTypes.number,
  zoom: _react.PropTypes.number
};

var mapDefaultPropTypes = exports.mapDefaultPropTypes = (0, _defaultPropsCreator2.default)(mapControlledPropTypes);

var mapUpdaters = {
  center: function center(_center, component) {
    component.getMap().setCenter(_center);
  },
  heading: function heading(_heading, component) {
    component.getMap().setHeading(_heading);
  },
  mapTypeId: function mapTypeId(_mapTypeId, component) {
    component.getMap().setMapTypeId(_mapTypeId);
  },
  options: function options(_options, component) {
    component.getMap().setOptions(_options);
  },
  streetView: function streetView(_streetView, component) {
    component.getMap().setStreetView(_streetView);
  },
  tilt: function tilt(_tilt, component) {
    component.getMap().setTilt(_tilt);
  },
  zoom: function zoom(_zoom, component) {
    component.getMap().setZoom(_zoom);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_GoogleMapEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var mapEventPropTypes = exports.mapEventPropTypes = eventPropTypes;

var GoogleMapHolder = function (_Component) {
  (0, _inherits3.default)(GoogleMapHolder, _Component);

  function GoogleMapHolder() {
    (0, _classCallCheck3.default)(this, GoogleMapHolder);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(GoogleMapHolder).apply(this, arguments));
  }

  (0, _createClass3.default)(GoogleMapHolder, [{
    key: "getChildContext",
    value: function getChildContext() {
      return { mapHolderRef: this };
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this.props.map;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        this.props.children
      );
    }
  }], [{
    key: "_createMap",
    value: function _createMap(domEl, mapProps) {
      (0, _warning2.default)("undefined" !== typeof google, "Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\n If you're looking for built-in support to load it for you, use the \"async/ScriptjsLoader\" instead.\n See https://github.com/tomchentw/react-google-maps/pull/168");
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
      return new google.maps.Map(domEl, (0, _composeOptions2.default)(mapProps, mapControlledPropTypes));
    }
  }]);
  return GoogleMapHolder;
}(_react.Component);

GoogleMapHolder.propTypes = {
  map: _react.PropTypes.object.isRequired
};
GoogleMapHolder.childContextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(GoogleMapHolder)
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getMap",
  updaters: mapUpdaters
})(GoogleMapHolder);
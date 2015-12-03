"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _eventListsGoogleMapEventList = require("../eventLists/GoogleMapEventList");

var _eventListsGoogleMapEventList2 = _interopRequireDefault(_eventListsGoogleMapEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var mapControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
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

exports.mapControlledPropTypes = mapControlledPropTypes;
var mapDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(mapControlledPropTypes);

exports.mapDefaultPropTypes = mapDefaultPropTypes;
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

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsGoogleMapEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var mapEventPropTypes = eventPropTypes;

exports.mapEventPropTypes = mapEventPropTypes;

var GoogleMapHolder = (function (_Component) {
  _inherits(GoogleMapHolder, _Component);

  function GoogleMapHolder() {
    _classCallCheck(this, _GoogleMapHolder);

    _get(Object.getPrototypeOf(_GoogleMapHolder.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GoogleMapHolder, [{
    key: "getMap",
    value: function getMap() {
      return this.props.map;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react2["default"].createElement(
        "div",
        null,
        _react.Children.map(this.props.children, function (childElement) {
          if (_react2["default"].isValidElement(childElement)) {
            return _react2["default"].cloneElement(childElement, {
              mapHolderRef: _this
            });
          } else {
            return childElement;
          }
        })
      );
    }
  }], [{
    key: "_createMap",
    value: function _createMap(domEl, mapProps) {
      (0, _warning2["default"])("undefined" !== typeof google, "Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\n If you're looking for built-in support to load it for you, use the \"async/ScriptjsLoader\" instead.\n See https://github.com/tomchentw/react-google-maps/pull/168");
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
      return new google.maps.Map(domEl, (0, _utilsComposeOptions2["default"])(mapProps, mapControlledPropTypes));
    }
  }, {
    key: "propTypes",
    value: {
      map: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _GoogleMapHolder = GoogleMapHolder;
  GoogleMapHolder = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getMap",
    updaters: mapUpdaters
  })(GoogleMapHolder) || GoogleMapHolder;
  return GoogleMapHolder;
})(_react.Component);

exports["default"] = GoogleMapHolder;
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

var _eventListsInfoWindowEventList = require("../eventLists/InfoWindowEventList");

var _eventListsInfoWindowEventList2 = _interopRequireDefault(_eventListsInfoWindowEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsSetContentForOptionalReactElement = require("../utils/setContentForOptionalReactElement");

var _utilsSetContentForOptionalReactElement2 = _interopRequireDefault(_utilsSetContentForOptionalReactElement);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var infoWindowControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: _react.PropTypes.any,
  options: _react.PropTypes.object,
  position: _react.PropTypes.any,
  zIndex: _react.PropTypes.number
};

exports.infoWindowControlledPropTypes = infoWindowControlledPropTypes;
var infoWindowDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(infoWindowControlledPropTypes);

exports.infoWindowDefaultPropTypes = infoWindowDefaultPropTypes;
var infoWindowUpdaters = {
  children: function children(_children, component) {
    (0, _utilsSetContentForOptionalReactElement2["default"])(_children, component.getInfoWindow());
  },
  content: function content(_content, component) {
    component.getInfoWindow().setContent(_content);
  },
  options: function options(_options, component) {
    component.getInfoWindow().setOptions(_options);
  },
  position: function position(_position, component) {
    component.getInfoWindow().setPosition(_position);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getInfoWindow().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsInfoWindowEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var infoWindowEventPropTypes = eventPropTypes;

exports.infoWindowEventPropTypes = infoWindowEventPropTypes;

var InfoWindowCreator = (function (_Component) {
  _inherits(InfoWindowCreator, _Component);

  function InfoWindowCreator() {
    _classCallCheck(this, _InfoWindowCreator);

    _get(Object.getPrototypeOf(_InfoWindowCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(InfoWindowCreator, [{
    key: "getInfoWindow",
    value: function getInfoWindow() {
      return this.props.infoWindow;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createInfoWindow",
    value: function _createInfoWindow(infoWindowProps) {
      var mapHolderRef = infoWindowProps.mapHolderRef;
      var anchorHolderRef = infoWindowProps.anchorHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
      var infoWindow = new google.maps.InfoWindow((0, _utilsComposeOptions2["default"])(infoWindowProps, infoWindowControlledPropTypes));

      if (infoWindowProps.children) {
        (0, _utilsSetContentForOptionalReactElement2["default"])(infoWindowProps.children, infoWindow);
      }

      if (anchorHolderRef) {
        infoWindow.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
      } else {
        infoWindow.setMap(mapHolderRef.getMap());
      }

      return infoWindow;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      infoWindow: _react.PropTypes.object.isRequired,
      anchorHolderRef: _react.PropTypes.object
    },
    enumerable: true
  }]);

  var _InfoWindowCreator = InfoWindowCreator;
  InfoWindowCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getInfoWindow",
    updaters: infoWindowUpdaters
  })(InfoWindowCreator) || InfoWindowCreator;
  return InfoWindowCreator;
})(_react.Component);

exports["default"] = InfoWindowCreator;
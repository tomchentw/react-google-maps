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

var _eventListsDirectionsRendererEventList = require("../eventLists/DirectionsRendererEventList");

var _eventListsDirectionsRendererEventList2 = _interopRequireDefault(_eventListsDirectionsRendererEventList);

var _utilsEventHandlerCreator = require("../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsComponentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var directionsRendererControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  directions: _react.PropTypes.any,
  options: _react.PropTypes.object,
  panel: _react.PropTypes.object,
  routeIndex: _react.PropTypes.number
};

exports.directionsRendererControlledPropTypes = directionsRendererControlledPropTypes;
var directionsRendererDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(directionsRendererControlledPropTypes);

exports.directionsRendererDefaultPropTypes = directionsRendererDefaultPropTypes;
var directionsRendererUpdaters = {
  directions: function directions(_directions, component) {
    component.getDirectionsRenderer().setDirections(_directions);
  },
  options: function options(_options, component) {
    component.getDirectionsRenderer().setOptions(_options);
  },
  panel: function panel(_panel, component) {
    component.getDirectionsRenderer().setPanel(_panel);
  },
  routeIndex: function routeIndex(_routeIndex, component) {
    component.getDirectionsRenderer().setRouteIndex(_routeIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsDirectionsRendererEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var directionsRendererEventPropTypes = eventPropTypes;

exports.directionsRendererEventPropTypes = directionsRendererEventPropTypes;

var DirectionsRendererCreator = (function (_Component) {
  _inherits(DirectionsRendererCreator, _Component);

  function DirectionsRendererCreator() {
    _classCallCheck(this, _DirectionsRendererCreator);

    _get(Object.getPrototypeOf(_DirectionsRendererCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DirectionsRendererCreator, [{
    key: "getDirectionsRenderer",
    value: function getDirectionsRenderer() {
      return this.props.directionsRenderer;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (_react.Children.count(children) > 0) {
        // TODO: take a look at DirectionsRendererOptions#infoWindow and DirectionsRendererOptions#markerOptions ?
        return _react2["default"].createElement(
          "div",
          null,
          children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createDirectionsRenderer",
    value: function _createDirectionsRenderer(directionsRendererProps) {
      var mapHolderRef = directionsRendererProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
      var directionsRenderer = new google.maps.DirectionsRenderer((0, _utilsComposeOptions2["default"])(directionsRendererProps, directionsRendererControlledPropTypes));

      directionsRenderer.setMap(mapHolderRef.getMap());

      return directionsRenderer;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      directionsRenderer: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _DirectionsRendererCreator = DirectionsRendererCreator;
  DirectionsRendererCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getDirectionsRenderer",
    updaters: directionsRendererUpdaters
  })(DirectionsRendererCreator) || DirectionsRendererCreator;
  return DirectionsRendererCreator;
})(_react.Component);

exports["default"] = DirectionsRendererCreator;
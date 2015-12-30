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

var _eventListsMarkerEventList = require("../eventLists/MarkerEventList");

var _eventListsMarkerEventList2 = _interopRequireDefault(_eventListsMarkerEventList);

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

var markerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
  animation: _react.PropTypes.any,
  attribution: _react.PropTypes.any,
  clickable: _react.PropTypes.bool,
  cursor: _react.PropTypes.string,
  draggable: _react.PropTypes.bool,
  icon: _react.PropTypes.any,
  label: _react.PropTypes.any,
  opacity: _react.PropTypes.number,
  options: _react.PropTypes.object,
  place: _react.PropTypes.any,
  position: _react.PropTypes.any,
  shape: _react.PropTypes.any,
  title: _react.PropTypes.string,
  visible: _react.PropTypes.bool,
  zIndex: _react.PropTypes.number
};

exports.markerControlledPropTypes = markerControlledPropTypes;
var markerDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(markerControlledPropTypes);

exports.markerDefaultPropTypes = markerDefaultPropTypes;
var markerUpdaters = {
  animation: function animation(_animation, component) {
    component.getMarker().setAnimation(_animation);
  },
  attribution: function attribution(_attribution, component) {
    component.getMarker().setAttribution(_attribution);
  },
  clickable: function clickable(_clickable, component) {
    component.getMarker().setClickable(_clickable);
  },
  cursor: function cursor(_cursor, component) {
    component.getMarker().setCursor(_cursor);
  },
  draggable: function draggable(_draggable, component) {
    component.getMarker().setDraggable(_draggable);
  },
  icon: function icon(_icon, component) {
    component.getMarker().setIcon(_icon);
  },
  label: function label(_label, component) {
    component.getMarker().setLabel(_label);
  },
  opacity: function opacity(_opacity, component) {
    component.getMarker().setOpacity(_opacity);
  },
  options: function options(_options, component) {
    component.getMarker().setOptions(_options);
  },
  place: function place(_place, component) {
    component.getMarker().setPlace(_place);
  },
  position: function position(_position, component) {
    component.getMarker().setPosition(_position);
  },
  shape: function shape(_shape, component) {
    component.getMarker().setShape(_shape);
  },
  title: function title(_title, component) {
    component.getMarker().setTitle(_title);
  },
  visible: function visible(_visible, component) {
    component.getMarker().setVisible(_visible);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getMarker().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsMarkerEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var markerEventPropTypes = eventPropTypes;

exports.markerEventPropTypes = markerEventPropTypes;

var MarkerCreator = (function (_Component) {
  _inherits(MarkerCreator, _Component);

  function MarkerCreator() {
    _classCallCheck(this, _MarkerCreator);

    _get(Object.getPrototypeOf(_MarkerCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(MarkerCreator, [{
    key: "getMarker",
    value: function getMarker() {
      return this.props.marker;
    }

    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindowOptions
    // In the core API, the only anchor is the Marker class.
  }, {
    key: "getAnchor",
    value: function getAnchor() {
      return this.props.marker;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;

      if (_react.Children.count(children) > 0) {
        return _react2["default"].createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2["default"].cloneElement(childElement, {
              mapHolderRef: mapHolderRef,
              anchorHolderRef: _this
            });
          })
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createMarker",
    value: function _createMarker(markerProps) {
      var mapHolderRef = markerProps.mapHolderRef;
      var anchorHolderRef = markerProps.anchorHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
      var marker = new google.maps.Marker((0, _utilsComposeOptions2["default"])(markerProps, markerControlledPropTypes));

      if (anchorHolderRef) {
        if ("MarkerClusterer" === anchorHolderRef.getAnchorType()) {
          anchorHolderRef.getAnchor().addMarker(marker);
        }
      } else {
        marker.setMap(mapHolderRef.getMap());
      }

      return marker;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      marker: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _MarkerCreator = MarkerCreator;
  MarkerCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getMarker",
    updaters: markerUpdaters
  })(MarkerCreator) || MarkerCreator;
  return MarkerCreator;
})(_react.Component);

exports["default"] = MarkerCreator;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markerEventPropTypes = exports.markerDefaultPropTypes = exports.markerControlledPropTypes = undefined;

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

var _MarkerEventList = require("../eventLists/MarkerEventList");

var _MarkerEventList2 = _interopRequireDefault(_MarkerEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markerControlledPropTypes = exports.markerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
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

var markerDefaultPropTypes = exports.markerDefaultPropTypes = (0, _defaultPropsCreator2.default)(markerControlledPropTypes);

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

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_MarkerEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var markerEventPropTypes = exports.markerEventPropTypes = eventPropTypes;

var MarkerCreator = function (_Component) {
  (0, _inherits3.default)(MarkerCreator, _Component);

  function MarkerCreator() {
    (0, _classCallCheck3.default)(this, MarkerCreator);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MarkerCreator).apply(this, arguments));
  }

  (0, _createClass3.default)(MarkerCreator, [{
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
      var _this2 = this;

      var _props = this.props;
      var mapHolderRef = _props.mapHolderRef;
      var children = _props.children;


      if (_react.Children.count(children) > 0) {
        return _react2.default.createElement(
          "div",
          null,
          _react.Children.map(children, function (childElement) {
            return childElement && _react2.default.cloneElement(childElement, {
              mapHolderRef: mapHolderRef,
              anchorHolderRef: _this2
            });
          })
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }], [{
    key: "_createMarker",
    value: function _createMarker(markerProps) {
      var mapHolderRef = markerProps.mapHolderRef;
      var anchorHolderRef = markerProps.anchorHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker

      var marker = new google.maps.Marker((0, _composeOptions2.default)(markerProps, markerControlledPropTypes));

      if (anchorHolderRef) {
        if ("MarkerClusterer" === anchorHolderRef.getAnchorType()) {
          anchorHolderRef.getAnchor().addMarker(marker);
        }
      } else {
        marker.setMap(mapHolderRef.getMap());
      }

      return marker;
    }
  }]);
  return MarkerCreator;
}(_react.Component);

MarkerCreator.propTypes = {
  marker: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getMarker",
  updaters: markerUpdaters
})(MarkerCreator);
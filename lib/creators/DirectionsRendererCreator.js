"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directionsRendererEventPropTypes = exports.directionsRendererDefaultPropTypes = exports.directionsRendererControlledPropTypes = undefined;

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

var _DirectionsRendererEventList = require("../eventLists/DirectionsRendererEventList");

var _DirectionsRendererEventList2 = _interopRequireDefault(_DirectionsRendererEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directionsRendererControlledPropTypes = exports.directionsRendererControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
  directions: _react.PropTypes.any,
  options: _react.PropTypes.object,
  panel: _react.PropTypes.object,
  routeIndex: _react.PropTypes.number
};

var directionsRendererDefaultPropTypes = exports.directionsRendererDefaultPropTypes = (0, _defaultPropsCreator2.default)(directionsRendererControlledPropTypes);

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

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_DirectionsRendererEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var directionsRendererEventPropTypes = exports.directionsRendererEventPropTypes = eventPropTypes;

var DirectionsRendererCreator = function (_Component) {
  (0, _inherits3.default)(DirectionsRendererCreator, _Component);

  function DirectionsRendererCreator() {
    (0, _classCallCheck3.default)(this, DirectionsRendererCreator);
    return (0, _possibleConstructorReturn3.default)(this, (DirectionsRendererCreator.__proto__ || (0, _getPrototypeOf2.default)(DirectionsRendererCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(DirectionsRendererCreator, [{
    key: "getDirectionsRenderer",
    value: function getDirectionsRenderer() {
      return this.props.directionsRenderer;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;


      if (_react.Children.count(children) > 0) {
        // TODO: take a look at DirectionsRendererOptions#infoWindow and
        // DirectionsRendererOptions#markerOptions ?
        return _react2.default.createElement(
          "div",
          null,
          children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }], [{
    key: "_createDirectionsRenderer",
    value: function _createDirectionsRenderer(directionsRendererProps) {
      var mapHolderRef = directionsRendererProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer

      var directionsRenderer = new google.maps.DirectionsRenderer((0, _composeOptions2.default)(directionsRendererProps, directionsRendererControlledPropTypes));

      directionsRenderer.setMap(mapHolderRef.getMap());

      return directionsRenderer;
    }
  }]);
  return DirectionsRendererCreator;
}(_react.Component);

DirectionsRendererCreator.propTypes = {
  directionsRenderer: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getDirectionsRenderer",
  updaters: directionsRendererUpdaters
})(DirectionsRendererCreator);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoWindowEventPropTypes = exports.infoWindowDefaultPropTypes = exports.infoWindowControlledPropTypes = undefined;

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

var _InfoWindowEventList = require("../eventLists/InfoWindowEventList");

var _InfoWindowEventList2 = _interopRequireDefault(_InfoWindowEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _setContentForOptionalReactElement = require("../utils/setContentForOptionalReactElement");

var _setContentForOptionalReactElement2 = _interopRequireDefault(_setContentForOptionalReactElement);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infoWindowControlledPropTypes = exports.infoWindowControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: _react.PropTypes.any,
  options: _react.PropTypes.object,
  position: _react.PropTypes.any,
  zIndex: _react.PropTypes.number
};

var infoWindowDefaultPropTypes = exports.infoWindowDefaultPropTypes = (0, _defaultPropsCreator2.default)(infoWindowControlledPropTypes);

var infoWindowUpdaters = {
  children: function children(_children, component) {
    (0, _setContentForOptionalReactElement2.default)(_children, component.getInfoWindow());
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

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_InfoWindowEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var infoWindowEventPropTypes = exports.infoWindowEventPropTypes = eventPropTypes;

var InfoWindowCreator = function (_Component) {
  (0, _inherits3.default)(InfoWindowCreator, _Component);

  function InfoWindowCreator() {
    (0, _classCallCheck3.default)(this, InfoWindowCreator);
    return (0, _possibleConstructorReturn3.default)(this, (InfoWindowCreator.__proto__ || (0, _getPrototypeOf2.default)(InfoWindowCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(InfoWindowCreator, [{
    key: "getInfoWindow",
    value: function getInfoWindow() {
      return this.props.infoWindow;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createInfoWindow",
    value: function _createInfoWindow(infoWindowProps) {
      var mapHolderRef = infoWindowProps.mapHolderRef;
      var anchorHolderRef = infoWindowProps.anchorHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow

      var infoWindow = new google.maps.InfoWindow((0, _composeOptions2.default)(infoWindowProps, infoWindowControlledPropTypes));

      if (infoWindowProps.children) {
        (0, _setContentForOptionalReactElement2.default)(infoWindowProps.children, infoWindow);
      }

      if (anchorHolderRef) {
        infoWindow.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
      } else {
        infoWindow.setMap(mapHolderRef.getMap());
      }

      return infoWindow;
    }
  }]);
  return InfoWindowCreator;
}(_react.Component);

InfoWindowCreator.propTypes = {
  infoWindow: _react.PropTypes.object.isRequired,
  anchorHolderRef: _react.PropTypes.object
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getInfoWindow",
  updaters: infoWindowUpdaters
})(InfoWindowCreator);
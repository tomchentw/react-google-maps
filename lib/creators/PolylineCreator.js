"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polylineEventPropTypes = exports.polylineDefaultPropTypes = exports.polylineControlledPropTypes = undefined;

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

var _PolylineEventList = require("../eventLists/PolylineEventList");

var _PolylineEventList2 = _interopRequireDefault(_PolylineEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var polylineControlledPropTypes = exports.polylineControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  path: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

var polylineDefaultPropTypes = exports.polylineDefaultPropTypes = (0, _defaultPropsCreator2.default)(polylineControlledPropTypes);

var polylineUpdaters = {
  draggable: function draggable(_draggable, component) {
    component.getPolyline().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getPolyline().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getPolyline().setOptions(_options);
  },
  path: function path(_path, component) {
    component.getPolyline().setPath(_path);
  },
  visible: function visible(_visible, component) {
    component.getPolyline().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_PolylineEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var polylineEventPropTypes = exports.polylineEventPropTypes = eventPropTypes;

var PolylineCreator = function (_Component) {
  (0, _inherits3.default)(PolylineCreator, _Component);

  function PolylineCreator() {
    (0, _classCallCheck3.default)(this, PolylineCreator);
    return (0, _possibleConstructorReturn3.default)(this, (PolylineCreator.__proto__ || (0, _getPrototypeOf2.default)(PolylineCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(PolylineCreator, [{
    key: "getPolyline",
    value: function getPolyline() {
      return this.props.polyline;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createPolyline",
    value: function _createPolyline(polylineProps) {
      var mapHolderRef = polylineProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline

      var polyline = new google.maps.Polyline((0, _composeOptions2.default)(polylineProps, polylineControlledPropTypes));

      polyline.setMap(mapHolderRef.getMap());

      return polyline;
    }
  }]);
  return PolylineCreator;
}(_react.Component);

PolylineCreator.propTypes = {
  polyline: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getPolyline",
  updaters: polylineUpdaters
})(PolylineCreator);
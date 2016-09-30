"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polygonEventPropTypes = exports.polygonDefaultPropTypes = exports.polygonControlledPropTypes = undefined;

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

var _PolygonEventList = require("../eventLists/PolygonEventList");

var _PolygonEventList2 = _interopRequireDefault(_PolygonEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var polygonControlledPropTypes = exports.polygonControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  path: _react.PropTypes.any,
  paths: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

var polygonDefaultPropTypes = exports.polygonDefaultPropTypes = (0, _defaultPropsCreator2.default)(polygonControlledPropTypes);

var polygonUpdaters = {
  draggable: function draggable(_draggable, component) {
    component.getPolygon().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getPolygon().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getPolygon().setOptions(_options);
  },
  path: function path(_path, component) {
    component.getPolygon().setPath(_path);
  },
  paths: function paths(_paths, component) {
    component.getPolygon().setPaths(_paths);
  },
  visible: function visible(_visible, component) {
    component.getPolygon().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_PolygonEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var polygonEventPropTypes = exports.polygonEventPropTypes = eventPropTypes;

var PolygonCreator = function (_Component) {
  (0, _inherits3.default)(PolygonCreator, _Component);

  function PolygonCreator() {
    (0, _classCallCheck3.default)(this, PolygonCreator);
    return (0, _possibleConstructorReturn3.default)(this, (PolygonCreator.__proto__ || (0, _getPrototypeOf2.default)(PolygonCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(PolygonCreator, [{
    key: "getPolygon",
    value: function getPolygon() {
      return this.props.polygon;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createPolygon",
    value: function _createPolygon(polygonProps) {
      var mapHolderRef = polygonProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon

      var polygon = new google.maps.Polygon((0, _composeOptions2.default)(polygonProps, polygonControlledPropTypes));

      polygon.setMap(mapHolderRef.getMap());

      return polygon;
    }
  }]);
  return PolygonCreator;
}(_react.Component);

PolygonCreator.propTypes = {
  polygon: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getPolygon",
  updaters: polygonUpdaters
})(PolygonCreator);
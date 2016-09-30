"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawingManagerEventPropTypes = exports.drawingManagerDefaultPropTypes = exports.drawingManagerControlledPropTypes = undefined;

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

var _DrawingManagerEventList = require("../eventLists/DrawingManagerEventList");

var _DrawingManagerEventList2 = _interopRequireDefault(_DrawingManagerEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawingManagerControlledPropTypes = exports.drawingManagerControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  drawingMode: _react.PropTypes.any,
  options: _react.PropTypes.object
};

var drawingManagerDefaultPropTypes = exports.drawingManagerDefaultPropTypes = (0, _defaultPropsCreator2.default)(drawingManagerControlledPropTypes);

var drawingManagerUpdaters = {
  drawingMode: function drawingMode(_drawingMode, component) {
    component.getDrawingManager().setDrawingMode(_drawingMode);
  },
  options: function options(_options, component) {
    component.getDrawingManager().setOptions(_options);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_DrawingManagerEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var drawingManagerEventPropTypes = exports.drawingManagerEventPropTypes = eventPropTypes;

var DrawingManagerCreator = function (_Component) {
  (0, _inherits3.default)(DrawingManagerCreator, _Component);

  function DrawingManagerCreator() {
    (0, _classCallCheck3.default)(this, DrawingManagerCreator);
    return (0, _possibleConstructorReturn3.default)(this, (DrawingManagerCreator.__proto__ || (0, _getPrototypeOf2.default)(DrawingManagerCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(DrawingManagerCreator, [{
    key: "getDrawingManager",
    value: function getDrawingManager() {
      return this.props.drawingManager;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createDrawingManager",
    value: function _createDrawingManager(drawingManagerProps) {
      var mapHolderRef = drawingManagerProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager

      var drawingManager = new google.maps.drawing.DrawingManager((0, _composeOptions2.default)(drawingManagerProps, drawingManagerControlledPropTypes));

      drawingManager.setMap(mapHolderRef.getMap());

      return drawingManager;
    }
  }]);
  return DrawingManagerCreator;
}(_react.Component);

DrawingManagerCreator.propTypes = {
  drawingManager: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getDrawingManager",
  updaters: drawingManagerUpdaters
})(DrawingManagerCreator);
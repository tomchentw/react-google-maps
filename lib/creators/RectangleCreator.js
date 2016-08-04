"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rectangleEventPropTypes = exports.rectangleDefaultPropTypes = exports.rectangleControlledPropTypes = undefined;

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

var _RectangleEventList = require("../eventLists/RectangleEventList");

var _RectangleEventList2 = _interopRequireDefault(_RectangleEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rectangleControlledPropTypes = exports.rectangleControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  bounds: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  visible: _react.PropTypes.bool
};

var rectangleDefaultPropTypes = exports.rectangleDefaultPropTypes = (0, _defaultPropsCreator2.default)(rectangleControlledPropTypes);

var rectangleUpdaters = {
  bounds: function bounds(_bounds, component) {
    component.getRectangle().setBounds(_bounds);
  },
  draggable: function draggable(_draggable, component) {
    component.getRectangle().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getRectangle().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getRectangle().setOptions(_options);
  },
  visible: function visible(_visible, component) {
    component.getRectangle().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_RectangleEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var rectangleEventPropTypes = exports.rectangleEventPropTypes = eventPropTypes;

var RectangleCreator = function (_Component) {
  (0, _inherits3.default)(RectangleCreator, _Component);

  function RectangleCreator() {
    (0, _classCallCheck3.default)(this, RectangleCreator);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RectangleCreator).apply(this, arguments));
  }

  (0, _createClass3.default)(RectangleCreator, [{
    key: "getRectangle",
    value: function getRectangle() {
      return this.props.rectangle;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createRectangle",
    value: function _createRectangle(rectangleProps) {
      var mapHolderRef = rectangleProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle

      var rectangle = new google.maps.Rectangle((0, _composeOptions2.default)(rectangleProps, rectangleControlledPropTypes));

      rectangle.setMap(mapHolderRef.getMap());

      return rectangle;
    }
  }]);
  return RectangleCreator;
}(_react.Component);

RectangleCreator.propTypes = {
  rectangle: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getRectangle",
  updaters: rectangleUpdaters
})(RectangleCreator);
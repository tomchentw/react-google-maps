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

var _eventListsRectangleEventList = require("../eventLists/RectangleEventList");

var _eventListsRectangleEventList2 = _interopRequireDefault(_eventListsRectangleEventList);

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

var rectangleControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  bounds: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  visible: _react.PropTypes.bool
};

exports.rectangleControlledPropTypes = rectangleControlledPropTypes;
var rectangleDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(rectangleControlledPropTypes);

exports.rectangleDefaultPropTypes = rectangleDefaultPropTypes;
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

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsRectangleEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var rectangleEventPropTypes = eventPropTypes;

exports.rectangleEventPropTypes = rectangleEventPropTypes;

var RectangleCreator = (function (_Component) {
  _inherits(RectangleCreator, _Component);

  function RectangleCreator() {
    _classCallCheck(this, _RectangleCreator);

    _get(Object.getPrototypeOf(_RectangleCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(RectangleCreator, [{
    key: "getRectangle",
    value: function getRectangle() {
      return this.props.rectangle;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createRectangle",
    value: function _createRectangle(rectangleProps) {
      var mapHolderRef = rectangleProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
      var rectangle = new google.maps.Rectangle((0, _utilsComposeOptions2["default"])(rectangleProps, rectangleControlledPropTypes));

      rectangle.setMap(mapHolderRef.getMap());

      return rectangle;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      rectangle: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _RectangleCreator = RectangleCreator;
  RectangleCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getRectangle",
    updaters: rectangleUpdaters
  })(RectangleCreator) || RectangleCreator;
  return RectangleCreator;
})(_react.Component);

exports["default"] = RectangleCreator;
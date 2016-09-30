"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleEventPropTypes = exports.circleDefaultPropTypes = exports.circleControlledPropTypes = undefined;

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

var _CircleEventList = require("../eventLists/CircleEventList");

var _CircleEventList2 = _interopRequireDefault(_CircleEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var circleControlledPropTypes = exports.circleControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
  center: _react.PropTypes.any,
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  radius: _react.PropTypes.number,
  visible: _react.PropTypes.bool
};

var circleDefaultPropTypes = exports.circleDefaultPropTypes = (0, _defaultPropsCreator2.default)(circleControlledPropTypes);

var circleUpdaters = {
  center: function center(_center, component) {
    component.getCircle().setCenter(_center);
  },
  draggable: function draggable(_draggable, component) {
    component.getCircle().setDraggable(_draggable);
  },
  editable: function editable(_editable, component) {
    component.getCircle().setEditable(_editable);
  },
  options: function options(_options, component) {
    component.getCircle().setOptions(_options);
  },
  radius: function radius(_radius, component) {
    component.getCircle().setRadius(_radius);
  },
  visible: function visible(_visible, component) {
    component.getCircle().setVisible(_visible);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_CircleEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var circleEventPropTypes = exports.circleEventPropTypes = eventPropTypes;

var CircleCreator = function (_Component) {
  (0, _inherits3.default)(CircleCreator, _Component);

  function CircleCreator() {
    (0, _classCallCheck3.default)(this, CircleCreator);
    return (0, _possibleConstructorReturn3.default)(this, (CircleCreator.__proto__ || (0, _getPrototypeOf2.default)(CircleCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircleCreator, [{
    key: "getCircle",
    value: function getCircle() {
      return this.props.circle;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createCircle",
    value: function _createCircle(circleProps) {
      var mapHolderRef = circleProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle

      var circle = new google.maps.Circle((0, _composeOptions2.default)(circleProps, circleControlledPropTypes));

      circle.setMap(mapHolderRef.getMap());

      return circle;
    }
  }]);
  return CircleCreator;
}(_react.Component);

CircleCreator.propTypes = {
  circle: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getCircle",
  updaters: circleUpdaters
})(CircleCreator);
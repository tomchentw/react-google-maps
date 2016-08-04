"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeletonEventPropTypes = exports.skeletonDefaultPropTypes = exports.skeletonControlledPropTypes = undefined;

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

var _SkeletonEventList = require("../eventLists/_SkeletonEventList");

var _SkeletonEventList2 = _interopRequireDefault(_SkeletonEventList);

var _eventHandlerCreator2 = require("../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _componentLifecycleDecorator = require("../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skeletonControlledPropTypes = exports.skeletonControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference
  animation: _react.PropTypes.any
};

var skeletonDefaultPropTypes = exports.skeletonDefaultPropTypes = (0, _defaultPropsCreator2.default)(skeletonControlledPropTypes);

var skeletonUpdaters = {
  animation: function animation(_animation, component) {
    component.getSkeleton().setAnimation(_animation);
  }
};

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_SkeletonEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var skeletonEventPropTypes = exports.skeletonEventPropTypes = eventPropTypes;

var SkeletonCreator = function (_Component) {
  (0, _inherits3.default)(SkeletonCreator, _Component);

  function SkeletonCreator() {
    (0, _classCallCheck3.default)(this, SkeletonCreator);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SkeletonCreator).apply(this, arguments));
  }

  (0, _createClass3.default)(SkeletonCreator, [{
    key: "getSkeleton",
    value: function getSkeleton() {
      return this.props.skeleton;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;


      if (_react.Children.count(children) > 0) {
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
    key: "_createSkeleton",
    value: function _createSkeleton(skeletonProps) {
      var mapHolderRef = skeletonProps.mapHolderRef;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference

      var skeleton = new google.maps.Skeleton((0, _composeOptions2.default)(skeletonProps, skeletonControlledPropTypes));

      skeleton.setMap(mapHolderRef.getMap());

      return skeleton;
    }
  }]);
  return SkeletonCreator;
}(_react.Component);

SkeletonCreator.propTypes = {
  skeleton: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getSkeleton",
  updaters: skeletonUpdaters
})(SkeletonCreator);
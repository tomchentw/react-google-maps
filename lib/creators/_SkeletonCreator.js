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

var _eventListsSkeletonEventList = require("../eventLists/SkeletonEventList");

var _eventListsSkeletonEventList2 = _interopRequireDefault(_eventListsSkeletonEventList);

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

var skeletonControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference
  animation: _react.PropTypes.any
};

exports.skeletonControlledPropTypes = skeletonControlledPropTypes;
var skeletonDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(skeletonControlledPropTypes);

exports.skeletonDefaultPropTypes = skeletonDefaultPropTypes;
var skeletonUpdaters = {
  animation: function animation(_animation, component) {
    component.getSkeleton().setAnimation(_animation);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_eventListsSkeletonEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var skeletonEventPropTypes = eventPropTypes;

exports.skeletonEventPropTypes = skeletonEventPropTypes;

var SkeletonCreator = (function (_Component) {
  _inherits(SkeletonCreator, _Component);

  function SkeletonCreator() {
    _classCallCheck(this, _SkeletonCreator);

    _get(Object.getPrototypeOf(_SkeletonCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(SkeletonCreator, [{
    key: "getSkeleton",
    value: function getSkeleton() {
      return this.props.skeleton;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (_react.Children.count(children) > 0) {
        return _react2["default"].createElement(
          "div",
          null,
          children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "_createSkeleton",
    value: function _createSkeleton(skeletonProps) {
      var mapHolderRef = skeletonProps.mapHolderRef;

      // https://developers.google.com/maps/documentation/javascript/3.exp/reference
      var skeleton = new google.maps.Skeleton((0, _utilsComposeOptions2["default"])(skeletonProps, skeletonControlledPropTypes));

      skeleton.setMap(mapHolderRef.getMap());

      return skeleton;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      skeleton: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _SkeletonCreator = SkeletonCreator;
  SkeletonCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getSkeleton",
    updaters: skeletonUpdaters
  })(SkeletonCreator) || SkeletonCreator;
  return SkeletonCreator;
})(_react.Component);

exports["default"] = SkeletonCreator;
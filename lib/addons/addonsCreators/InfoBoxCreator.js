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

var _addonsEventListsInfoBoxEventList = require("../addonsEventLists/InfoBoxEventList");

var _addonsEventListsInfoBoxEventList2 = _interopRequireDefault(_addonsEventListsInfoBoxEventList);

var _utilsEventHandlerCreator = require("../../utils/eventHandlerCreator");

var _utilsEventHandlerCreator2 = _interopRequireDefault(_utilsEventHandlerCreator);

var _utilsDefaultPropsCreator = require("../../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _utilsSetContentForOptionalReactElement = require("../../utils/setContentForOptionalReactElement");

var _utilsSetContentForOptionalReactElement2 = _interopRequireDefault(_utilsSetContentForOptionalReactElement);

var _utilsComponentLifecycleDecorator = require("../../utils/componentLifecycleDecorator");

var _utilsComponentLifecycleDecorator2 = _interopRequireDefault(_utilsComponentLifecycleDecorator);

var _creatorsGoogleMapHolder = require("../../creators/GoogleMapHolder");

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var infoBoxControlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  content: _react.PropTypes.any,
  options: _react.PropTypes.object,
  position: _react.PropTypes.any,
  visible: _react.PropTypes.bool,
  zIndex: _react.PropTypes.number
};

exports.infoBoxControlledPropTypes = infoBoxControlledPropTypes;
var infoBoxDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(infoBoxControlledPropTypes);

exports.infoBoxDefaultPropTypes = infoBoxDefaultPropTypes;
var infoBoxUpdaters = {
  children: function children(_children, component) {
    (0, _utilsSetContentForOptionalReactElement2["default"])(_children, component.getInfoBox());
  },
  content: function content(_content, component) {
    component.getInfoBox().setContent(_content);
  },
  options: function options(_options, component) {
    component.getInfoBox().setOptions(_options);
  },
  position: function position(_position, component) {
    component.getInfoBox().setPosition(_position);
  },
  visible: function visible(_visible, component) {
    component.getInfoBox().setVisible(_visible);
  },
  zIndex: function zIndex(_zIndex, component) {
    component.getInfoBox().setZIndex(_zIndex);
  }
};

var _eventHandlerCreator = (0, _utilsEventHandlerCreator2["default"])(_addonsEventListsInfoBoxEventList2["default"]);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var infoBoxEventPropTypes = eventPropTypes;

exports.infoBoxEventPropTypes = infoBoxEventPropTypes;

var InfoBoxCreator = (function (_Component) {
  _inherits(InfoBoxCreator, _Component);

  function InfoBoxCreator() {
    _classCallCheck(this, _InfoBoxCreator);

    _get(Object.getPrototypeOf(_InfoBoxCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(InfoBoxCreator, [{
    key: "getInfoBox",
    value: function getInfoBox() {
      return this.props.infoBox;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createInfoBox",
    value: function _createInfoBox(infoBoxProps) {
      var mapHolderRef = infoBoxProps.mapHolderRef;
      var anchorHolderRef = infoBoxProps.anchorHolderRef;

      // "google-maps-infobox" uses "google" as a global variable. Since we don't
      // have "google" on the server, we can not use it in server-side rendering.
      // As a result, we import "google-maps-infobox" here to prevent an error on
      // a isomorphic server.
      var GoogleMapsInfobox = require("google-maps-infobox");
      // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
      var infoBox = new GoogleMapsInfobox((0, _utilsComposeOptions2["default"])(infoBoxProps, infoBoxControlledPropTypes));

      if (infoBoxProps.children) {
        (0, _utilsSetContentForOptionalReactElement2["default"])(infoBoxProps.children, infoBox);
      }

      if (anchorHolderRef) {
        infoBox.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
      } else {
        infoBox.open(mapHolderRef.getMap());
      }
      return infoBox;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_creatorsGoogleMapHolder2["default"]).isRequired,
      infoBox: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  var _InfoBoxCreator = InfoBoxCreator;
  InfoBoxCreator = (0, _utilsComponentLifecycleDecorator2["default"])({
    registerEvents: registerEvents,
    instanceMethodName: "getInfoBox",
    updaters: infoBoxUpdaters
  })(InfoBoxCreator) || InfoBoxCreator;
  return InfoBoxCreator;
})(_react.Component);

exports["default"] = InfoBoxCreator;
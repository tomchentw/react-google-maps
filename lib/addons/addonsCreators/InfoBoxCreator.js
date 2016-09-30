"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoBoxEventPropTypes = exports.infoBoxDefaultPropTypes = exports.infoBoxControlledPropTypes = undefined;

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

var _InfoBoxEventList = require("../addonsEventLists/InfoBoxEventList");

var _InfoBoxEventList2 = _interopRequireDefault(_InfoBoxEventList);

var _eventHandlerCreator2 = require("../../utils/eventHandlerCreator");

var _eventHandlerCreator3 = _interopRequireDefault(_eventHandlerCreator2);

var _defaultPropsCreator = require("../../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

var _setContentForOptionalReactElement = require("../../utils/setContentForOptionalReactElement");

var _setContentForOptionalReactElement2 = _interopRequireDefault(_setContentForOptionalReactElement);

var _componentLifecycleDecorator = require("../../utils/componentLifecycleDecorator");

var _componentLifecycleDecorator2 = _interopRequireDefault(_componentLifecycleDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infoBoxControlledPropTypes = exports.infoBoxControlledPropTypes = {
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

var infoBoxDefaultPropTypes = exports.infoBoxDefaultPropTypes = (0, _defaultPropsCreator2.default)(infoBoxControlledPropTypes);

var infoBoxUpdaters = {
  children: function children(_children, component) {
    (0, _setContentForOptionalReactElement2.default)(_children, component.getInfoBox());
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

var _eventHandlerCreator = (0, _eventHandlerCreator3.default)(_InfoBoxEventList2.default);

var eventPropTypes = _eventHandlerCreator.eventPropTypes;
var registerEvents = _eventHandlerCreator.registerEvents;
var infoBoxEventPropTypes = exports.infoBoxEventPropTypes = eventPropTypes;

var InfoBoxCreator = function (_Component) {
  (0, _inherits3.default)(InfoBoxCreator, _Component);

  function InfoBoxCreator() {
    (0, _classCallCheck3.default)(this, InfoBoxCreator);
    return (0, _possibleConstructorReturn3.default)(this, (InfoBoxCreator.__proto__ || (0, _getPrototypeOf2.default)(InfoBoxCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(InfoBoxCreator, [{
    key: "getInfoBox",
    value: function getInfoBox() {
      return this.props.infoBox;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("noscript", null);
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

      var GoogleMapsInfobox = require("google-maps-infobox"); // eslint-disable-line global-require
      // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
      var infoBox = new GoogleMapsInfobox((0, _composeOptions2.default)(infoBoxProps, infoBoxControlledPropTypes));

      if (infoBoxProps.children) {
        (0, _setContentForOptionalReactElement2.default)(infoBoxProps.children, infoBox);
      }

      if (anchorHolderRef) {
        infoBox.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
      } else {
        infoBox.open(mapHolderRef.getMap());
      }
      return infoBox;
    }
  }]);
  return InfoBoxCreator;
}(_react.Component);

InfoBoxCreator.propTypes = {
  infoBox: _react.PropTypes.object.isRequired
};
exports.default = (0, _componentLifecycleDecorator2.default)({
  registerEvents: registerEvents,
  instanceMethodName: "getInfoBox",
  updaters: infoBoxUpdaters
})(InfoBoxCreator);
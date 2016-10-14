"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _contextTypes;

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _constants = require("../constants");

var _enhanceElement = require("../enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controlledPropTypes = {
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

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  onCloseClick: "closeclick",

  onContentChanged: "content_changed",

  onDomReady: "domready",

  onPositionChanged: "position_changed",

  onZIndexChanged: "zindex_changed"
};

var publicMethodMap = {
  // Public APIs
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  getPosition: function getPosition(infoBox) {
    return infoBox.getPosition();
  },
  getVisible: function getVisible(infoBox) {
    return infoBox.getVisible();
  },
  getZIndex: function getZIndex(infoBox) {
    return infoBox.getZIndex();
  }
};

var controlledPropUpdaterMap = {
  children: function children(infoWindow, _children, component) {
    (0, _reactDom.unstable_renderSubtreeIntoContainer)(component, _react.Children.only(_children), infoWindow.getContent());
  },
  options: function options(infoBox, _options) {
    infoBox.setOptions(_options);
  },
  position: function position(infoBox, _position) {
    infoBox.setPosition(_position);
  },
  visible: function visible(infoBox, _visible) {
    infoBox.setVisible(_visible);
  },
  zIndex: function zIndex(infoBox, _zIndex) {
    infoBox.setZIndex(_zIndex);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.INFO_BOX];
}

function openInfoBox(context, infoBox) {
  var map = context[_constants.MAP];
  var anchor = context[_constants.ANCHOR];
  if (anchor) {
    infoBox.open(map, anchor);
  } else if (infoBox.getPosition()) {
    infoBox.open(map);
  } else {
    (0, _invariant2.default)(false, "You must provide either an anchor (typically a <Marker>) or a position for <InfoBox>.");
  }
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "InfoBox",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (_contextTypes = {}, (0, _defineProperty3.default)(_contextTypes, _constants.MAP, _react.PropTypes.object), (0, _defineProperty3.default)(_contextTypes, _constants.ANCHOR, _react.PropTypes.object), _contextTypes),

  getInitialState: function getInitialState() {
    var GoogleMapsInfobox = require(
    // "google-maps-infobox" uses "google" as a global variable. Since we don't
    // have "google" on the server, we can not use it in server-side rendering.
    // As a result, we import "google-maps-infobox" here to prevent an error on
    // a isomorphic server.
    "google-maps-infobox");
    var map = this.context[_constants.MAP];
    var infoBoxProps = (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props);
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
    var infoBox = new GoogleMapsInfobox((0, _extends3.default)({
      map: map
    }, infoBoxProps, {
      // Override props of ReactElement type
      content: document.createElement("div"),
      children: undefined
    }));
    // BUG: the `GoogleMapsInfobox` does not take infoBoxProps.options
    // into account in its constructor. Need to manually set
    infoBox.setOptions(infoBoxProps.options || {});

    openInfoBox(this.context, infoBox);
    return (0, _defineProperty3.default)({}, _constants.INFO_BOX, infoBox);
  },
  componentDidMount: function componentDidMount() {
    var infoBox = getInstanceFromComponent(this);
    controlledPropUpdaterMap.children(infoBox, this.props.children, this);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var anchorChanged = this.context[_constants.ANCHOR] !== nextContext[_constants.ANCHOR];
    if (anchorChanged) {
      var infoBox = getInstanceFromComponent(this);
      openInfoBox(nextContext, infoBox);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    var infoBox = getInstanceFromComponent(this);
    if (infoBox) {
      infoBox.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});
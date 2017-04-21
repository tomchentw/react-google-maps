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

var _contextTypes; /* global google */


var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require("react");

var _reactDom = require("react-dom");

var _constants = require("./constants");

var _enhanceElement = require("./enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  children: _propTypes2.default.element,
  options: _propTypes2.default.object,
  position: _propTypes2.default.any,
  zIndex: _propTypes2.default.number
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCloseClick: "closeclick",

  onContentChanged: "content_changed",

  onDomReady: "domready",

  onPositionChanged: "position_changed",

  onZIndexChanged: "zindex_changed"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getPosition: function getPosition(infoWindow) {
    return infoWindow.getPosition();
  },
  getZIndex: function getZIndex(infoWindow) {
    return infoWindow.getZIndex();
  }
};

var controlledPropUpdaterMap = {
  children: function children(infoWindow, _children, component) {
    (0, _reactDom.unstable_renderSubtreeIntoContainer)(component, _react.Children.only(_children), infoWindow.getContent());
  },
  options: function options(infoWindow, _options) {
    infoWindow.setOptions(_options);
  },
  position: function position(infoWindow, _position) {
    infoWindow.setPosition(_position);
  },
  zIndex: function zIndex(infoWindow, _zIndex) {
    infoWindow.setZIndex(_zIndex);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.INFO_WINDOW];
}

function openInfoWindow(context, infoWindow) {
  var map = context[_constants.MAP];
  var anchor = context[_constants.ANCHOR];
  if (anchor) {
    infoWindow.open(map, anchor);
  } else if (infoWindow.getPosition()) {
    infoWindow.open(map);
  } else {
    (0, _invariant2.default)(false, "You must provide either an anchor (typically a <Marker>) or a position for <InfoWindow>.");
  }
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "InfoWindow",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (_contextTypes = {}, (0, _defineProperty3.default)(_contextTypes, _constants.MAP, _propTypes2.default.object), (0, _defineProperty3.default)(_contextTypes, _constants.ANCHOR, _propTypes2.default.object), _contextTypes),

  getInitialState: function getInitialState() {
    var map = this.context[_constants.MAP];
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    var infoWindow = new google.maps.InfoWindow((0, _extends3.default)({
      map: map
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props), {
      // Override props of ReactElement type
      content: undefined,
      children: undefined
    }));

    openInfoWindow(this.context, infoWindow);
    return (0, _defineProperty3.default)({}, _constants.INFO_WINDOW, infoWindow);
  },
  componentDidMount: function componentDidMount() {
    var infoWindow = getInstanceFromComponent(this);
    var content = document.createElement("div");

    controlledPropUpdaterMap.children({
      getContent: function getContent() {
        return content;
      }
    }, this.props.children, this);
    infoWindow.setContent(content);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var anchorChanged = this.context[_constants.ANCHOR] !== nextContext[_constants.ANCHOR];
    if (anchorChanged) {
      var infoWindow = getInstanceFromComponent(this);
      openInfoWindow(nextContext, infoWindow);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    var infoWindow = getInstanceFromComponent(this);
    if (infoWindow) {
      (0, _reactDom.unmountComponentAtNode)(infoWindow.getContent());
      infoWindow.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});
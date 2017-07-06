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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
  links: _propTypes2.default.array,
  motionTracking: _propTypes2.default.bool,
  options: _propTypes2.default.object,
  pano: _propTypes2.default.string,
  panoProvider: _propTypes2.default.func,
  position: _propTypes2.default.object,
  pov: _propTypes2.default.object,
  visible: _propTypes2.default.bool,
  zoom: _propTypes2.default.number
}; /* global google */


var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCloseClick: "closeclick",

  onPanoChanged: "pano_changed",

  onPositionChanged: "position_changed",

  onLinksChanged: "links_changed",

  onPovChanged: "pov_changed",

  onResize: "resize",

  onStatusChanged: "status_changed",

  onVisibleChanged: "visible_changed",

  onZoomChanged: "zoom_changed"

};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getLinks: function getLinks(streetViewPanorama) {
    return streetViewPanorama.getLinks();
  },
  getLocation: function getLocation(streetViewPanorama) {
    return streetViewPanorama.getLocation();
  },
  getMotionTracking: function getMotionTracking(streetViewPanorama) {
    return streetViewPanorama.getMotionTracking();
  },
  getPano: function getPano(streetViewPanorama) {
    return streetViewPanorama.getPano();
  },
  getPhotographerPov: function getPhotographerPov(streetViewPanorama) {
    return streetViewPanorama.getPhotographerPov();
  },
  getPosition: function getPosition(streetViewPanorama) {
    return streetViewPanorama.getPosition();
  },
  getPov: function getPov(streetViewPanorama) {
    return streetViewPanorama.getPov();
  },
  getStatus: function getStatus(streetViewPanorama) {
    return streetViewPanorama.getStatus();
  },
  getVisible: function getVisible(streetViewPanorama) {
    return streetViewPanorama.getVisible();
  },
  getZoom: function getZoom(streetViewPanorama) {
    return streetViewPanorama.getZoom();
  }
};

var controlledPropUpdaterMap = {
  links: function links(streetViewPanorama, _links) {
    streetViewPanorama.setLinks(_links);
  },
  motionTracking: function motionTracking(streetViewPanorama, _motionTracking) {
    streetViewPanorama.setMotionTracking(_motionTracking);
  },
  options: function options(streetViewPanorama, _options) {
    streetViewPanorama.setOptions(_options);
  },
  pano: function pano(streetViewPanorama, _pano) {
    streetViewPanorama.setPano(_pano);
  },
  panoProvider: function panoProvider(streetViewPanorama, _panoProvider) {
    streetViewPanorama.registerPanoProvider(_panoProvider);
  },
  position: function position(streetViewPanorama, _position) {
    streetViewPanorama.setPosition(_position);
  },
  pov: function pov(streetViewPanorama, _pov) {
    streetViewPanorama.setPov(_pov);
  },
  visible: function visible(streetViewPanorama, _visible) {
    streetViewPanorama.setVisible(_visible);
  },
  zoom: function zoom(streetViewPanorama, _zoom) {
    streetViewPanorama.setZoom(_zoom);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.STREET_VIEW_PANORAMA];
}

exports.default = (0, _flowRight3.default)(_createReactClass2.default, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "StreetViewPanorama",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

  childContextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object),

  getInitialOptions: function getInitialOptions() {
    return (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props);
  },
  getChildContext: function getChildContext() {
    return (0, _defineProperty3.default)({}, _constants.MAP, this.state[_constants.STREET_VIEW_PANORAMA]);
  },
  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
    var streetViewPanorama = void 0;
    if (!this.props.containerElement && this.context[_constants.MAP]) {
      streetViewPanorama = this.context[_constants.MAP].getStreetView();
      streetViewPanorama.setOptions(this.getInitialOptions());
    }
    if (!this.props.containerElement && !this.context[_constants.MAP]) {
      throw new Error("You need to use the StreetViewPanorama in the context of `<GoogleMap>` or pass an `containerElement` for it to be rendered in.");
    }
    return (0, _defineProperty3.default)({}, _constants.STREET_VIEW_PANORAMA, streetViewPanorama);
  },
  handleComponentMount: function handleComponentMount(el) {
    this.el = el;
    if (this.el) {
      var streetViewPanorama = new google.maps.StreetViewPanorama(this.el, (0, _extends3.default)({
        map: this.context[_constants.MAP]
      }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
      if (this.context[_constants.MAP]) {
        this.context[_constants.MAP].setStreetView(streetViewPanorama);
      }
      this.setState((0, _defineProperty3.default)({}, _constants.STREET_VIEW_PANORAMA, streetViewPanorama));
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    var streetViewPanorama = getInstanceFromComponent(this);
    if (streetViewPanorama) {
      streetViewPanorama.setVisible(false);
    }
  },
  render: function render() {
    if (this.props.containerElement) {
      return _react2.default.cloneElement(this.props.containerElement, { ref: this.handleComponentMount }, this.props.children);
    }
    return _react2.default.createElement(
      "div",
      null,
      this.props.children
    );
  }
});
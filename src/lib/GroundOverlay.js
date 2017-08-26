"use strict";

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _delay2 = require("lodash/delay");

var _delay3 = _interopRequireDefault(_delay2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("../../../node_modules/react-google-maps/lib/constants");

var _enhanceElement = require("../../../node_modules/react-google-maps/lib/enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global google */
var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  clickable: _react.PropTypes.bool,
  opacity: _react.PropTypes.number,
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onClick: `click`,
  onDblClick: `dblclick`,
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })

  getBounds: function getBounds(groundOverlay) {
    return groundOverlay.getBounds();
  },

  getMap: function getMap(groundOverlay) {
    return groundOverlay.getMap();
  },

  getOpacity: function getOpacity(groundOverlay) {
    return groundOverlay.getOpacity();
  },

  getUrl: function getUrl(groundOverlay) {
    return groundOverlay.getUrl();
  },
};

var controlledPropUpdaterMap = {};

function getInstanceFromComponent(component) {
  return component.state[_constants.GROUND_OVERLAY];
}

module.exports = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "GroundOverlay",

  statics: {
    CLICKABLE: "clickable",
    MAP: "map",
    OPACITY: "opacity"
  },

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes, {
    //None
  }),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
    var groundOverlay = new google.maps.GroundOverlay(
      this.props.image,
      this.props.imageBounds
    );
    var map = this.context[_constants.MAP];

    // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.
    groundOverlay.setMap(map);

    if (this.props.opacity) {
      groundOverlay.setOpacity(this.props.opacity);
    }
    if (this.props.clickable) {
      google.maps.event.addListener(groundOverlay, 'click', function(event) {
        google.maps.event.trigger(map, 'click', event);
      });
    }

    return (0, _defineProperty3.default)({}, _constants.OVERLAY_VIEW, groundOverlay);
  },
  componentWillUnmount: function componentWillUnmount() {
    var groundOverlay = getInstanceFromComponent(this);
    if (groundOverlay) {
      groundOverlay.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});

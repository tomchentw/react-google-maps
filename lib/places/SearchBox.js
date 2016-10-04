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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("../constants");

var _enhanceElement = require("../enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

var _SearchBoxHelper = require("../utils/SearchBoxHelper");

var helpers = _interopRequireWildcard(_SearchBoxHelper);

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
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
  bounds: _react.PropTypes.any,
  inputProps: _react.PropTypes.object,
  inputStyle: _react.PropTypes.object,
  inputClassName: _react.PropTypes.string
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onPlacesChanged: "places_changed"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds: function getBounds(searchBox) {
    return searchBox.getBounds();
  },
  getPlaces: function getPlaces(searchBox) {
    return searchBox.getPlaces();
  }
};

var controlledPropUpdaterMap = {
  bounds: function bounds(searchBox, _bounds) {
    searchBox.setBounds(_bounds);
  }
};

function getInstanceFromComponent(component) {
  return component.state[_constants.SEARCH_BOX];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "SearchBox",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes, {
    controlPosition: _react.PropTypes.any.isRequired,
    inputProps: _react.PropTypes.object,
    inputStyle: _react.PropTypes.object,
    inputClassName: _react.PropTypes.string,
    inputPlaceholder: _react.PropTypes.string
  }),

  contextTypes: (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object),

  componentWillMount: function componentWillMount() {
    this._inputElement = helpers.createInputElement(this.props);
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
    var searchBox = new google.maps.places.SearchBox(this._inputElement, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props));
    this.setState((0, _defineProperty3.default)({}, _constants.SEARCH_BOX, searchBox));
  },
  componentDidMount: function componentDidMount() {
    this._mountIndex = helpers.mountInputElementToControlPositionOnMap(this._inputElement, this.props.controlPosition, this.context[_constants.MAP]);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (this.props.controlPosition !== prevProps.controlPosition) {
      helpers.unmountInputElementFromControlPositionOnMap(this._mountIndex, prevProps.controlPosition, this.context[_constants.MAP]);
      this._mountIndex = helpers.mountInputElementToControlPositionOnMap(this._inputElement, this.props.controlPosition, this.context[_constants.MAP]);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._mountIndex) {
      helpers.unmountInputElementFromControlPositionOnMap(this._mountIndex, this.props.controlPosition, this.context[_constants.MAP]);
      this._inputElement = null;
    }
  },
  render: function render() {
    return false;
  }
});
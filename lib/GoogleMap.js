"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _creatorsGoogleMapHolder = require("./creators/GoogleMapHolder");

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var GoogleMap = (function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    _get(Object.getPrototypeOf(GoogleMap.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(GoogleMap, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return this.state.map.getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.state.map.getCenter();
    }
  }, {
    key: "getDiv",
    value: function getDiv() {
      return this.state.map.getDiv();
    }
  }, {
    key: "getHeading",
    value: function getHeading() {
      return this.state.map.getHeading();
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      return this.state.map.getMapTypeId();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.state.map.getProjection();
    }
  }, {
    key: "getStreetView",
    value: function getStreetView() {
      return this.state.map.getStreetView();
    }
  }, {
    key: "getTilt",
    value: function getTilt() {
      return this.state.map.getTilt();
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return this.state.map.getZoom();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // Public APIs - Use this carefully
    // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })
  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      return this.state.map.fitBounds(bounds);
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      return this.state.map.panBy(x, y);
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      return this.state.map.panTo(latLng);
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds) {
      return this.state.map.panToBounds(latLngBounds);
    }

    // END - Public APIs - Use this carefully
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var domEl = (0, _react.findDOMNode)(this);
      var _props = this.props;

      // TODO: support asynchronous load of google.maps API at this level.
      //
      // Create google.maps.Map instance so that dom is initialized before
      // React's children creators.
      //
      var containerTagName = _props.containerTagName;
      var containerProps = _props.containerProps;
      var children = _props.children;

      var mapProps = _objectWithoutProperties(_props, ["containerTagName", "containerProps", "children"]);

      var map = _creatorsGoogleMapHolder2["default"]._createMap(domEl, mapProps);
      this.setState({ map: map });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var containerTagName = _props2.containerTagName;
      var containerProps = _props2.containerProps;
      var children = _props2.children;

      var mapProps = _objectWithoutProperties(_props2, ["containerTagName", "containerProps", "children"]);

      var child = this.state.map ?
      // Notice: implementation details
      //
      // In this state, the DOM of google.maps.Map is already initialized in
      // my innerHTML. Adding extra React components will not clean it
      // in current (0.13.3) version. It will use prepend to add DOM of
      // GoogleMapHolder and become a sibling of the DOM of google.maps.Map
      // Not sure this is subject to change
      //
      _react2["default"].createElement(
        _creatorsGoogleMapHolder2["default"],
        _extends({ map: this.state.map }, mapProps),
        children
      ) : undefined;

      return _react2["default"].createElement(containerTagName, containerProps, child);
    }
  }], [{
    key: "propTypes",
    value: _extends({
      containerTagName: _react.PropTypes.string.isRequired,
      containerProps: _react.PropTypes.object.isRequired
    }, _creatorsGoogleMapHolder.mapDefaultPropTypes, _creatorsGoogleMapHolder.mapControlledPropTypes, _creatorsGoogleMapHolder.mapEventPropTypes),
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      containerTagName: "div",
      containerProps: {}
    },
    enumerable: true
  }]);

  return GoogleMap;
})(_react.Component);

exports["default"] = GoogleMap;
module.exports = exports["default"];
// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
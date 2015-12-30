"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _warning = require("warning");

var _warning2 = _interopRequireDefault(_warning);

var _creatorsGoogleMapHolder = require("./creators/GoogleMapHolder");

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var _GoogleMapLoader = require("./GoogleMapLoader");

var _GoogleMapLoader2 = _interopRequireDefault(_GoogleMapLoader);

var USE_NEW_BEHAVIOR_TAG_NAME = "__new_behavior__";

var GoogleMap = (function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap() {
    _classCallCheck(this, GoogleMap);

    _get(Object.getPrototypeOf(GoogleMap.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GoogleMap, [{
    key: "getBounds",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return (this.props.map || this.refs.delegate).getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return (this.props.map || this.refs.delegate).getCenter();
    }
  }, {
    key: "getDiv",
    value: function getDiv() {
      return (this.props.map || this.refs.delegate).getDiv();
    }
  }, {
    key: "getHeading",
    value: function getHeading() {
      return (this.props.map || this.refs.delegate).getHeading();
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      return (this.props.map || this.refs.delegate).getMapTypeId();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return (this.props.map || this.refs.delegate).getProjection();
    }
  }, {
    key: "getStreetView",
    value: function getStreetView() {
      return (this.props.map || this.refs.delegate).getStreetView();
    }
  }, {
    key: "getTilt",
    value: function getTilt() {
      return (this.props.map || this.refs.delegate).getTilt();
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return (this.props.map || this.refs.delegate).getZoom();
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
      return (this.props.map || this.refs.delegate).fitBounds(bounds);
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      return (this.props.map || this.refs.delegate).panBy(x, y);
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      return (this.props.map || this.refs.delegate).panTo(latLng);
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds) {
      return (this.props.map || this.refs.delegate).panToBounds(latLngBounds);
    }

    // END - Public APIs - Use this carefully
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var containerTagName = this.props.containerTagName;

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      (0, _warning2["default"])(isUsingNewBehavior, "\"GoogleMap\" with containerTagName is deprecated now and will be removed in next major release (5.0.0).\nUse \"GoogleMapLoader\" instead. See https://github.com/tomchentw/react-google-maps/pull/157 for more details.");
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var containerTagName = _props.containerTagName;
      var _props$containerProps = _props.containerProps;
      var containerProps = _props$containerProps === undefined ? {} : _props$containerProps;
      var children = _props.children;

      var mapProps = _objectWithoutProperties(_props, ["containerTagName", "containerProps", "children"]);

      var isUsingNewBehavior = USE_NEW_BEHAVIOR_TAG_NAME === containerTagName;

      if (isUsingNewBehavior) {
        return _react2["default"].createElement(
          _creatorsGoogleMapHolder2["default"],
          mapProps,
          children
        );
      } else {
        // ------------ Deprecated ------------
        var realContainerTagName = containerTagName === undefined || containerTagName === null ? "div" : containerTagName;

        return _react2["default"].createElement(_GoogleMapLoader2["default"], {
          ref: "loader",
          containerElement: _react2["default"].createElement(realContainerTagName, containerProps),
          googleMapElement: _react2["default"].createElement(
            GoogleMap,
            _extends({ ref: "delegate", containerTagName: USE_NEW_BEHAVIOR_TAG_NAME }, mapProps),
            children
          )
        });
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({
      containerTagName: _react.PropTypes.string,
      containerProps: _react.PropTypes.object,
      map: _react.PropTypes.object
    }, _creatorsGoogleMapHolder.mapDefaultPropTypes, _creatorsGoogleMapHolder.mapControlledPropTypes, _creatorsGoogleMapHolder.mapEventPropTypes),
    enumerable: true
  }]);

  return GoogleMap;
})(_react.Component);

exports["default"] = GoogleMap;
module.exports = exports["default"];
// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
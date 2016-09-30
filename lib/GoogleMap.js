"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleMap = function (_Component) {
  (0, _inherits3.default)(GoogleMap, _Component);

  function GoogleMap() {
    (0, _classCallCheck3.default)(this, GoogleMap);
    return (0, _possibleConstructorReturn3.default)(this, (GoogleMap.__proto__ || (0, _getPrototypeOf2.default)(GoogleMap)).apply(this, arguments));
  }

  (0, _createClass3.default)(GoogleMap, [{
    key: "getBounds",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getBounds() {
      return this.props.map.getBounds();
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.props.map.getCenter();
    }
  }, {
    key: "getDiv",
    value: function getDiv() {
      return this.props.map.getDiv();
    }
  }, {
    key: "getHeading",
    value: function getHeading() {
      return this.props.map.getHeading();
    }
  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      return this.props.map.getMapTypeId();
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.props.map.getProjection();
    }
  }, {
    key: "getStreetView",
    value: function getStreetView() {
      return this.props.map.getStreetView();
    }
  }, {
    key: "getTilt",
    value: function getTilt() {
      return this.props.map.getTilt();
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return this.props.map.getZoom();
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
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })

  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      return this.props.map.fitBounds(bounds);
    }
  }, {
    key: "panBy",
    value: function panBy(x, y) {
      return this.props.map.panBy(x, y);
    }
  }, {
    key: "panTo",
    value: function panTo(latLng) {
      return this.props.map.panTo(latLng);
    }
  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds) {
      return this.props.map.panToBounds(latLngBounds);
    }
    // END - Public APIs - Use this carefully
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props;
      var containerTagName = _props.containerTagName;
      var containerProps = _props.containerProps;

      (0, _invariant2.default)(!containerTagName && !containerProps, "\"GoogleMap\" with containerTagName or containerProps is removed in release (5.0.0).\nUse \"GoogleMapLoader\" instead.\nSee https://github.com/tomchentw/react-google-maps/pull/317 for more details.");
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _GoogleMapHolder2.default,
        this.props,
        this.props.children
      );
    }
  }]);
  return GoogleMap;
}(_react.Component);

GoogleMap.propTypes = (0, _extends3.default)({
  map: _react.PropTypes.object
}, _GoogleMapHolder.mapDefaultPropTypes, _GoogleMapHolder.mapControlledPropTypes, _GoogleMapHolder.mapEventPropTypes);
exports.default = GoogleMap;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _omit2 = require("lodash/omit");

var _omit3 = _interopRequireDefault(_omit2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesElementOfType = require("react-prop-types-element-of-type");

var _reactPropTypesElementOfType2 = _interopRequireDefault(_reactPropTypesElementOfType);

var _GoogleMap = require("./GoogleMap");

var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleMapLoader = function (_Component) {
  (0, _inherits3.default)(GoogleMapLoader, _Component);

  function GoogleMapLoader() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GoogleMapLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(GoogleMapLoader)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      map: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GoogleMapLoader, [{
    key: "mountGoogleMap",
    value: function mountGoogleMap(domEl) {
      if (this.state.map || domEl === null) {
        return;
      }
      var restProps = (0, _omit3.default)(this.props.googleMapElement.props, ["children"]);
      //
      // Create google.maps.Map instance so that dom is initialized before
      // React's children creators.
      //
      var map = _GoogleMapHolder2.default._createMap(domEl, restProps);
      this.setState({ map: map });
    }
  }, {
    key: "renderChild",
    value: function renderChild() {
      if (this.state.map) {
        // Notice: implementation details
        //
        // In this state, the DOM of google.maps.Map is already initialized in
        // my innerHTML. Adding extra React components will not clean it
        // in current version*. It will use prepend to add DOM of
        // GoogleMapHolder and become a sibling of the DOM of google.maps.Map
        // Not sure this is subject to change
        //
        // *current version: 0.13.3, 0.14.2
        //
        return _react2.default.cloneElement(this.props.googleMapElement, {
          map: this.state.map
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.cloneElement(this.props.containerElement, {
        ref: this.mountGoogleMap.bind(this)
      }, this.renderChild());
    }
  }]);
  return GoogleMapLoader;
}(_react.Component);

GoogleMapLoader.propTypes = {
  containerElement: _react.PropTypes.node.isRequired,
  googleMapElement: (0, _reactPropTypesElementOfType2.default)(_GoogleMap2.default).isRequired
};
GoogleMapLoader.defaultProps = {
  containerElement: _react2.default.createElement("div", null)
};
exports.default = GoogleMapLoader;
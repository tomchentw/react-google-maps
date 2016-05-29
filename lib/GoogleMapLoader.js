"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _creatorsGoogleMapHolder = require("./creators/GoogleMapHolder");

var _creatorsGoogleMapHolder2 = _interopRequireDefault(_creatorsGoogleMapHolder);

var USE_NEW_BEHAVIOR_TAG_NAME = "__new_behavior__"; /* CIRCULAR_DEPENDENCY */

var GoogleMapLoader = (function (_Component) {
  _inherits(GoogleMapLoader, _Component);

  function GoogleMapLoader() {
    _classCallCheck(this, GoogleMapLoader);

    _get(Object.getPrototypeOf(GoogleMapLoader.prototype), "constructor", this).apply(this, arguments);

    this.state = {
      map: null
    };
  }

  _createClass(GoogleMapLoader, [{
    key: "mountGoogleMap",
    value: function mountGoogleMap(domEl) {
      if (this.state.map || domEl === null) {
        return;
      }
      var _props$googleMapElement$props = this.props.googleMapElement.props;
      var children = _props$googleMapElement$props.children;

      var mapProps = _objectWithoutProperties(_props$googleMapElement$props, ["children"]);

      //
      // Create google.maps.Map instance so that dom is initialized before
      // React's children creators.
      //
      var map = _creatorsGoogleMapHolder2["default"]._createMap(domEl, mapProps);
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
        return _react2["default"].cloneElement(this.props.googleMapElement, {
          map: this.state.map,
          // ------------ Deprecated ------------
          containerTagName: USE_NEW_BEHAVIOR_TAG_NAME
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].cloneElement(this.props.containerElement, {
        ref: this.mountGoogleMap.bind(this)
      }, this.renderChild());
    }
  }], [{
    key: "propTypes",
    value: {
      containerElement: _react.PropTypes.node.isRequired,
      googleMapElement: _react.PropTypes.element.isRequired },
    enumerable: true
  }, {
    key: "defaultProps",
    /* CIRCULAR_DEPENDENCY. Uncomment when 5.0.0 comes: propTypesElementOfType(GoogleMap).isRequired, */
    value: {
      containerElement: _react2["default"].createElement("div", null)
    },
    enumerable: true
  }]);

  return GoogleMapLoader;
})(_react.Component);

exports["default"] = GoogleMapLoader;
module.exports = exports["default"];
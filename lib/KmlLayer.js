"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _creatorsKmlLayerCreator = require("./creators/KmlLayerCreator");

var _creatorsKmlLayerCreator2 = _interopRequireDefault(_creatorsKmlLayerCreator);

var KmlLayer = (function (_Component) {
  _inherits(KmlLayer, _Component);

  function KmlLayer() {
    _classCallCheck(this, KmlLayer);

    _get(Object.getPrototypeOf(KmlLayer.prototype), "constructor", this).apply(this, arguments);

    this.state = {};
  }

  _createClass(KmlLayer, [{
    key: "getDefaultViewport",

    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getDefaultViewport() {
      return this.state.kmlLayer.getDefaultViewport();
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this.state.kmlLayer.getMetadata();
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.state.kmlLayer.getStatus();
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.state.kmlLayer.getUrl();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.marker.getZIndex();
    }

    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom2["default"]) {
        return;
      }
      var kmlLayer = _creatorsKmlLayerCreator2["default"]._createKmlLayer(this.props);

      this.setState({ kmlLayer: kmlLayer });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.kmlLayer) {
        return _react2["default"].createElement(
          _creatorsKmlLayerCreator2["default"],
          _extends({ kmlLayer: this.state.kmlLayer }, this.props),
          this.props.children
        );
      } else {
        return _react2["default"].createElement("noscript", null);
      }
    }
  }], [{
    key: "propTypes",
    value: _extends({}, _creatorsKmlLayerCreator.kmlLayerDefaultPropTypes, _creatorsKmlLayerCreator.kmlLayerControlledPropTypes, _creatorsKmlLayerCreator.kmlLayerEventPropTypes),
    enumerable: true
  }]);

  return KmlLayer;
})(_react.Component);

exports["default"] = KmlLayer;
module.exports = exports["default"];

// Uncontrolled default[props] - used only in componentDidMount

// Controlled [props] - used in componentDidMount/componentDidUpdate

// Event [onEventName]
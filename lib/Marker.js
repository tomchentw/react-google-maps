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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _canUseDom = require("can-use-dom");

var _canUseDom2 = _interopRequireDefault(_canUseDom);

var _MarkerCreator = require("./creators/MarkerCreator");

var _MarkerCreator2 = _interopRequireDefault(_MarkerCreator);

var _GoogleMapHolder = require("./creators/GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Marker = function (_Component) {
  (0, _inherits3.default)(Marker, _Component);

  function Marker() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Marker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Marker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Marker, [{
    key: "getAnimation",


    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    value: function getAnimation() {
      return this.state.marker.getAnimation();
    }
  }, {
    key: "getAttribution",
    value: function getAttribution() {
      return this.state.marker.getAttribution();
    }
  }, {
    key: "getClickable",
    value: function getClickable() {
      return this.state.marker.getClickable();
    }
  }, {
    key: "getCursor",
    value: function getCursor() {
      return this.state.marker.getCursor();
    }
  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state.marker.getDraggable();
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      return this.state.marker.getIcon();
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.state.marker.getLabel();
    }
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.state.marker.getOpacity();
    }
  }, {
    key: "getPlace",
    value: function getPlace() {
      return this.state.marker.getPlace();
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state.marker.getPosition();
    }
  }, {
    key: "getShape",
    value: function getShape() {
      return this.state.marker.getShape();
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.state.marker.getTitle();
    }
  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state.marker.getVisible();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state.marker.getZIndex();
    }
    // END - Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var mapHolderRef = this.context.mapHolderRef;

      if (!_canUseDom2.default) {
        return;
      }
      var marker = _MarkerCreator2.default._createMarker((0, _extends3.default)({}, this.props, {
        mapHolderRef: mapHolderRef
      }));

      this.setState({ marker: marker });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_canUseDom2.default) {
        return;
      }

      var anchorHolderRef = this.props.anchorHolderRef;
      var marker = this.state.marker;


      if (anchorHolderRef) {
        if ("MarkerClusterer" === anchorHolderRef.getAnchorType()) {
          anchorHolderRef.getAnchor().removeMarker(marker);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.marker) {
        return _react2.default.createElement(
          _MarkerCreator2.default,
          (0, _extends3.default)({ marker: this.state.marker }, this.props),
          this.props.children
        );
      } else {
        return _react2.default.createElement("noscript", null);
      }
    }
  }]);
  return Marker;
}(_react.Component);

Marker.propTypes = (0, _extends3.default)({}, _MarkerCreator.markerDefaultPropTypes, _MarkerCreator.markerControlledPropTypes, _MarkerCreator.markerEventPropTypes);
Marker.contextTypes = {
  mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2.default)
};
exports.default = Marker;
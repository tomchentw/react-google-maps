"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _utilsDefaultPropsCreator = require("../utils/defaultPropsCreator");

var _utilsDefaultPropsCreator2 = _interopRequireDefault(_utilsDefaultPropsCreator);

var _utilsComposeOptions = require("../utils/composeOptions");

var _utilsComposeOptions2 = _interopRequireDefault(_utilsComposeOptions);

var _GoogleMapHolder = require("./GoogleMapHolder");

var _GoogleMapHolder2 = _interopRequireDefault(_GoogleMapHolder);

var overlayViewControlledPropTypes = {
  // CustomProps
  mapPaneName: _react.PropTypes.string,
  getPixelPositionOffset: _react.PropTypes.func,
  position: _react.PropTypes.object,
  children: _react.PropTypes.node,
  bounds: _react.PropTypes.object
};

exports.overlayViewControlledPropTypes = overlayViewControlledPropTypes;
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference
var overlayViewDefaultPropTypes = (0, _utilsDefaultPropsCreator2["default"])(overlayViewControlledPropTypes);

exports.overlayViewDefaultPropTypes = overlayViewDefaultPropTypes;

var OverlayViewCreator = (function (_Component) {
  _inherits(OverlayViewCreator, _Component);

  function OverlayViewCreator() {
    _classCallCheck(this, OverlayViewCreator);

    _get(Object.getPrototypeOf(OverlayViewCreator.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(OverlayViewCreator, [{
    key: "getOverlayView",
    value: function getOverlayView() {
      return this.props.overlayView;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getOverlayView().setMap(this.props.mapHolderRef.getMap());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.getOverlayView().setValues(this.props);
      this.getOverlayView()._redraw(this.props.mapPaneName !== prevProps.mapPaneName);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.getOverlayView().setMap(null);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("noscript", null);
    }
  }], [{
    key: "_createOverlayView",
    value: function _createOverlayView(overlayViewProps) {
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
      var overlayView = new google.maps.OverlayView();
      overlayView.setValues((0, _utilsComposeOptions2["default"])(overlayViewProps, overlayViewControlledPropTypes));

      overlayView.onAdd = function onAdd() {
        this._containerElement = document.createElement("div");
        this._containerElement.style.position = "absolute";
      };

      overlayView.draw = function draw() {
        this._mountContainerToPane();
        this._renderContent();
      };

      overlayView.onRemove = function onRemove() {
        (0, _reactDom.unmountComponentAtNode)(this._containerElement);
        this._unmountContainerFromPane();
        this._containerElement = null;
      };

      overlayView._redraw = function _redraw(mapPaneNameChanged) {
        if (mapPaneNameChanged) {
          this._unmountContainerFromPane();
          this._mountContainerToPane();
        }
        this._renderContent();
      };

      overlayView._renderContent = function _renderContent() {
        if (this._containerElement) {
          (0, _reactDom.render)(_react.Children.only(this.get("children")), this._containerElement, this._positionContainerElement.bind(this));
        }
      };

      overlayView._mountContainerToPane = function _mountContainerToPane() {
        var mapPaneName = this.get("mapPaneName");
        (0, _invariant2["default"])(!!mapPaneName, "OverlayView requires a mapPaneName/defaultMapPaneName in your props instead of %s", mapPaneName);

        this.getPanes()[mapPaneName].appendChild(this._containerElement);
      };

      overlayView._unmountContainerFromPane = function _unmountContainerFromPane() {
        this._containerElement.parentNode.removeChild(this._containerElement);
      };

      overlayView._positionContainerElement = function _positionContainerElement() {
        var left = undefined;
        var top = undefined;
        var offset = this._getOffset();
        if (this.get("bounds")) {
          var bounds = this._getPixelBounds();
          if (bounds) {
            var sw = bounds.sw;
            var ne = bounds.ne;

            if (offset) {
              sw.x += offset.x;
              ne.y += offset.y;
            }
            left = sw.x + "px";
            top = ne.y + "px";
            this._containerElement.style.width = ne.x - sw.x + "px";
            this._containerElement.style.height = sw.y - ne.y + "px";
          }
        } else {
          var position = this._getPixelPosition();
          if (position) {
            var x = position.x;
            var y = position.y;

            if (offset) {
              x += offset.x;
              y += offset.y;
            }
            left = x + "px";
            top = y + "px";
          }
        }

        this._containerElement.style.left = left;
        this._containerElement.style.top = top;
      };

      overlayView._getPixelPosition = function _getPixelPosition() {
        var projection = this.getProjection();
        var position = this.get("position");
        (0, _invariant2["default"])(!!position, "OverlayView requires a position/defaultPosition in your props instead of %s", position);
        if (projection && position) {
          if (!(position instanceof google.maps.LatLng)) {
            position = new google.maps.LatLng(position.lat, position.lng);
          }
          return projection.fromLatLngToDivPixel(position);
        }
      };

      overlayView._getPixelBounds = function _getPixelBounds() {
        var projection = this.getProjection();
        var bounds = this.get("bounds");
        (0, _invariant2["default"])(!!bounds, "OverlayView requires a bounds in your props instead of %s", bounds);
        if (projection && bounds) {
          if (!(bounds instanceof google.maps.LatLngBounds)) {
            bounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.ne.lat, bounds.ne.lng), new google.maps.LatLng(bounds.sw.lat, bounds.sw.lng));
          }
          return {
            sw: projection.fromLatLngToDivPixel(this.bounds.getSouthWest()),
            ne: projection.fromLatLngToDivPixel(this.bounds.getNorthEast())
          };
        }
      };

      overlayView._getOffset = function _getOffset() {
        // Allows the component to control the visual position of the OverlayView
        // relative to the LatLng pixel position.
        var getPixelPositionOffset = this.get("getPixelPositionOffset");
        if (getPixelPositionOffset) {
          return getPixelPositionOffset(this._containerElement.offsetWidth, this._containerElement.offsetHeight);
        }
      };

      // If we're inside a MarkerClusterer, allow ourselves to be clustered
      if (overlayViewProps.anchorHolderRef) {
        if ("MarkerClusterer" === overlayViewProps.anchorHolderRef.getAnchorType()) {
          overlayView.getDraggable = function getDraggable() {
            return !!overlayViewProps.draggable;
          };

          overlayView.getPosition = function getPosition() {
            return new google.maps.LatLng(this.position);
          };

          overlayViewProps.anchorHolderRef.getAnchor().addMarker(overlayView);
        }
      }

      return overlayView;
    }
  }, {
    key: "propTypes",
    value: {
      mapHolderRef: _react.PropTypes.instanceOf(_GoogleMapHolder2["default"]).isRequired,
      mapPaneName: _react.PropTypes.string,
      overlayView: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  return OverlayViewCreator;
})(_react.Component);

exports["default"] = OverlayViewCreator;
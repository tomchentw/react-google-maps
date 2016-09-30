"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overlayViewDefaultPropTypes = exports.overlayViewControlledPropTypes = undefined;

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

var _reactDom = require("react-dom");

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _defaultPropsCreator = require("../utils/defaultPropsCreator");

var _defaultPropsCreator2 = _interopRequireDefault(_defaultPropsCreator);

var _composeOptions = require("../utils/composeOptions");

var _composeOptions2 = _interopRequireDefault(_composeOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var overlayViewControlledPropTypes = exports.overlayViewControlledPropTypes = {
  // CustomProps
  mapPaneName: _react.PropTypes.string,
  getPixelPositionOffset: _react.PropTypes.func,
  position: _react.PropTypes.object,
  children: _react.PropTypes.node,
  bounds: _react.PropTypes.object
};

var overlayViewDefaultPropTypes = exports.overlayViewDefaultPropTypes = (0, _defaultPropsCreator2.default)(overlayViewControlledPropTypes);

var OverlayViewCreator = function (_Component) {
  (0, _inherits3.default)(OverlayViewCreator, _Component);

  function OverlayViewCreator() {
    (0, _classCallCheck3.default)(this, OverlayViewCreator);
    return (0, _possibleConstructorReturn3.default)(this, (OverlayViewCreator.__proto__ || (0, _getPrototypeOf2.default)(OverlayViewCreator)).apply(this, arguments));
  }

  (0, _createClass3.default)(OverlayViewCreator, [{
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
      return _react2.default.createElement("noscript", null);
    }
  }], [{
    key: "_createOverlayView",
    value: function _createOverlayView(overlayViewProps) {
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
      var overlayView = new google.maps.OverlayView();
      overlayView.setValues((0, _composeOptions2.default)(overlayViewProps, overlayViewControlledPropTypes));

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
        (0, _invariant2.default)(!!mapPaneName, "OverlayView requires a mapPaneName/defaultMapPaneName in your props instead of %s", mapPaneName);

        this.getPanes()[mapPaneName].appendChild(this._containerElement);
      };

      overlayView._unmountContainerFromPane = function _unmountContainerFromPane() {
        this._containerElement.parentNode.removeChild(this._containerElement);
      };

      overlayView._positionContainerElement = function _positionContainerElement() {
        var left = void 0;
        var top = void 0;
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
        (0, _invariant2.default)(!!position, "OverlayView requires a position/defaultPosition in your props instead of %s", position);
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
        (0, _invariant2.default)(!!bounds, "OverlayView requires a bounds in your props instead of %s", bounds);
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
  }]);
  return OverlayViewCreator;
}(_react.Component);

OverlayViewCreator.propTypes = {
  mapPaneName: _react.PropTypes.string,
  overlayView: _react.PropTypes.object.isRequired
};
exports.default = OverlayViewCreator;
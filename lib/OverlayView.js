"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _internalsSimpleChildComponent = require("./internals/SimpleChildComponent");

var _internalsSimpleChildComponent2 = _interopRequireDefault(_internalsSimpleChildComponent);

var _internalsCreateOverlayViewProxy = require("./internals/createOverlayViewProxy");

var _internalsCreateOverlayViewProxy2 = _interopRequireDefault(_internalsCreateOverlayViewProxy);

var _internalsCreateRegisterEvents = require("./internals/createRegisterEvents");

var _internalsCreateRegisterEvents2 = _interopRequireDefault(_internalsCreateRegisterEvents);

var _internalsExposeGetters = require("./internals/exposeGetters");

var _internalsExposeGetters2 = _interopRequireDefault(_internalsExposeGetters);

var OverlayView = (function (_SimpleChildComponent) {
  function OverlayView() {
    _classCallCheck(this, OverlayView);

    _get(Object.getPrototypeOf(OverlayView.prototype), "constructor", this).apply(this, arguments);
  }

  _inherits(OverlayView, _SimpleChildComponent);

  _createClass(OverlayView, [{
    key: "_createOrUpdateInstance",
    value: function _createOrUpdateInstance() {
      var props = this.props;

      if (!props.googleMapsApi || !props.map) {
        return;
      }
      var instance = this.state.instance;

      if (instance) {
        instance = _get(Object.getPrototypeOf(OverlayView.prototype), "_createOrUpdateInstance", this).call(this);
        instance.draw();
      } else {
        instance = (0, _internalsCreateOverlayViewProxy2["default"])(this.props);
        (0, _internalsExposeGetters2["default"])(this, instance.constructor.prototype, instance);
        this.setState({ instance: instance });
      }
      return instance;
    }
  }]);

  return OverlayView;
})(_internalsSimpleChildComponent2["default"]);

OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";

OverlayView.propTypes = _extends({}, _internalsSimpleChildComponent2["default"].propTypes, {
  mapPane: _react2["default"].PropTypes.oneOf([OverlayView.FLOAT_PANE, OverlayView.MAP_PANE, OverlayView.MARKER_LAYER, OverlayView.OVERLAY_LAYER, OverlayView.OVERLAY_MOUSE_TARGET]),
  getPixelPositionOffset: _react2["default"].PropTypes.func
});

OverlayView.defaultProps = {
  mapPane: OverlayView.OVERLAY_LAYER
};

OverlayView._registerEvents = (0, _internalsCreateRegisterEvents2["default"])("projection_changed position_changed");

exports["default"] = OverlayView;
module.exports = exports["default"];
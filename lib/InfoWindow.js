"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _React = require("react");

var _React2 = _interopRequireDefault(_React);

var _SimpleChildComponent2 = require("./internals/SimpleChildComponent");

var _SimpleChildComponent3 = _interopRequireDefault(_SimpleChildComponent2);

var _createRegisterEvents = require("./internals/createRegisterEvents");

var _createRegisterEvents2 = _interopRequireDefault(_createRegisterEvents);

var PropTypes = _React2["default"].PropTypes;

var InfoWindow = (function (_SimpleChildComponent) {
  function InfoWindow() {
    _classCallCheck(this, InfoWindow);

    if (_SimpleChildComponent != null) {
      _SimpleChildComponent.apply(this, arguments);
    }
  }

  _inherits(InfoWindow, _SimpleChildComponent);

  _createClass(InfoWindow, [{
    key: "_createOrUpdateInstance",
    value: function _createOrUpdateInstance() {
      var instance = _get(Object.getPrototypeOf(InfoWindow.prototype), "_createOrUpdateInstance", this).call(this);
      if (instance) {
        instance.open(this.props.map, this.props.anchor);
      }
      return instance;
    }
  }]);

  return InfoWindow;
})(_SimpleChildComponent3["default"]);

InfoWindow.propTypes = _extends({}, _SimpleChildComponent3["default"].propTypes, {
  anchor: PropTypes.object });

InfoWindow._GoogleMapsClassName = "InfoWindow";

InfoWindow._registerEvents = _createRegisterEvents2["default"]("closeclick content_changed domready position_changed zindex_changed");

exports["default"] = InfoWindow;
module.exports = exports["default"];
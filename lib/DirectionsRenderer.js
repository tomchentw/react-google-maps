"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _SimpleChildComponent2 = require("./internals/SimpleChildComponent");

var _SimpleChildComponent3 = _interopRequireDefault(_SimpleChildComponent2);

var _createRegisterEvents = require("./internals/createRegisterEvents");

var _createRegisterEvents2 = _interopRequireDefault(_createRegisterEvents);

var _BASIC_EVENT_NAMES = require("./internals/BASIC_EVENT_NAMES");

var _BASIC_EVENT_NAMES2 = _interopRequireDefault(_BASIC_EVENT_NAMES);

var DirectionsRenderer = (function (_SimpleChildComponent) {
  function DirectionsRenderer() {
    _classCallCheck(this, DirectionsRenderer);

    if (_SimpleChildComponent != null) {
      _SimpleChildComponent.apply(this, arguments);
    }
  }

  _inherits(DirectionsRenderer, _SimpleChildComponent);

  return DirectionsRenderer;
})(_SimpleChildComponent3["default"]);

DirectionsRenderer._GoogleMapsClassName = "DirectionsRenderer";

DirectionsRenderer._registerEvents = _createRegisterEvents2["default"](_BASIC_EVENT_NAMES2["default"]);

exports["default"] = DirectionsRenderer;
module.exports = exports["default"];
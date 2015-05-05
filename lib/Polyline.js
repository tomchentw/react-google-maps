"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _internalsSimpleChildComponent = require("./internals/SimpleChildComponent");

var _internalsSimpleChildComponent2 = _interopRequireDefault(_internalsSimpleChildComponent);

var _internalsCreateRegisterEvents = require("./internals/createRegisterEvents");

var _internalsCreateRegisterEvents2 = _interopRequireDefault(_internalsCreateRegisterEvents);

var _internalsBASIC_EVENT_NAMES = require("./internals/BASIC_EVENT_NAMES");

var _internalsBASIC_EVENT_NAMES2 = _interopRequireDefault(_internalsBASIC_EVENT_NAMES);

var Polyline = (function (_SimpleChildComponent) {
  function Polyline() {
    _classCallCheck(this, Polyline);

    if (_SimpleChildComponent != null) {
      _SimpleChildComponent.apply(this, arguments);
    }
  }

  _inherits(Polyline, _SimpleChildComponent);

  return Polyline;
})(_internalsSimpleChildComponent2["default"]);

Polyline._GoogleMapsClassName = "Polyline";

Polyline._registerEvents = _internalsCreateRegisterEvents2["default"](_internalsBASIC_EVENT_NAMES2["default"]);

exports["default"] = Polyline;
module.exports = exports["default"];
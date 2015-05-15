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

var DrawingManager = (function (_SimpleChildComponent) {
  function DrawingManager() {
    _classCallCheck(this, DrawingManager);

    if (_SimpleChildComponent != null) {
      _SimpleChildComponent.apply(this, arguments);
    }
  }

  _inherits(DrawingManager, _SimpleChildComponent);

  return DrawingManager;
})(_internalsSimpleChildComponent2["default"]);

DrawingManager._GoogleMapsClassName = "drawing.DrawingManager";

DrawingManager._registerEvents = _internalsCreateRegisterEvents2["default"]("drawingmode_changed overlaycomplete markercomplete circlecomplete polygoncomplete polylinecomplete rectanglecomplete");

exports["default"] = DrawingManager;
module.exports = exports["default"];
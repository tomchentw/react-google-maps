"use strict";

var _this = this;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _thenify = require("thenify");

var _thenify2 = _interopRequireDefault(_thenify);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _mocks__GoogleMapsMock = require("../__mocks__/google.maps.mock");

var maps = _interopRequireWildcard(_mocks__GoogleMapsMock);

var _GoogleMap = require("../GoogleMap");

var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

var render = (0, _thenify2["default"])(_reactDom.render);

describe("GoogleMap", function () {
  before(function () {
    global.google = { maps: maps };
  });

  after(function () {
    delete global.google;
  });

  describe("rendering", function () {
    var domEl = undefined;

    beforeEach(function () {
      domEl = document.createElement("div");
    });

    afterEach(function () {
      (0, _reactDom.unmountComponentAtNode)(domEl);
      domEl = null;
    });

    it("should call constructor during initial render", function callee$2$0(done) {
      var constructorSpy;
      return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            constructorSpy = _expect2["default"].spyOn(maps, "Map");

            (0, _expect2["default"])(constructorSpy).toNotHaveBeenCalled();

            context$3$0.next = 4;
            return regeneratorRuntime.awrap(render(_react2["default"].createElement(_GoogleMap2["default"], null), domEl));

          case 4:

            (0, _expect2["default"])(constructorSpy).toHaveBeenCalled();

            constructorSpy.restore();
            done();

          case 7:
          case "end":
            return context$3$0.stop();
        }
      }, null, _this);
    });

    it("should call setZoom when props.zoom changes", function callee$2$0(done) {
      var setZoomSpy;
      return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            setZoomSpy = _expect2["default"].spyOn(maps.Map.prototype, "setZoom");

            (0, _expect2["default"])(setZoomSpy).toNotHaveBeenCalled();

            context$3$0.next = 4;
            return regeneratorRuntime.awrap(render(_react2["default"].createElement(_GoogleMap2["default"], null), domEl));

          case 4:
            (0, _expect2["default"])(setZoomSpy).toNotHaveBeenCalled();

            context$3$0.next = 7;
            return regeneratorRuntime.awrap(render(_react2["default"].createElement(_GoogleMap2["default"], { zoom: 10 }), domEl));

          case 7:
            (0, _expect2["default"])(setZoomSpy).toHaveBeenCalled();

            setZoomSpy.restore();
            done();

          case 10:
          case "end":
            return context$3$0.stop();
        }
      }, null, _this);
    });
  });
});
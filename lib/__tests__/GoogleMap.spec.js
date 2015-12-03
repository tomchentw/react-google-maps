"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _mocks__GoogleMapsMock = require("../__mocks__/google.maps.mock");

var maps = _interopRequireWildcard(_mocks__GoogleMapsMock);

var _GoogleMap = require("../GoogleMap");

var _GoogleMap2 = _interopRequireDefault(_GoogleMap);

describe("GoogleMap", function () {
  before(function () {
    global.google = { maps: maps };
  });

  after(function () {
    delete global.google;
  });

  describe("creation", function () {
    context("global.google is undefined", function () {
      var prevGoogle = undefined;

      before(function () {
        prevGoogle = global.google;
        delete global.google;
      });

      after(function () {
        global.google = prevGoogle;
      });

      it("should warn and throw error", function () {
        var warningSpy = _expect2["default"].spyOn(console, "error");
        (0, _expect2["default"])(warningSpy).toNotHaveBeenCalled();

        var error = undefined;
        try {
          (0, _reactDom.render)(_react2["default"].createElement(_GoogleMap2["default"], null), document.createElement("div"));
        } catch (__e__) {
          error = __e__;
        }
        (0, _expect2["default"])(error).toExist();
        (0, _expect2["default"])(warningSpy).toHaveBeenCalled();

        warningSpy.restore();
      });
    });
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

    it("should call constructor during initial render", function () {
      var constructorSpy = _expect2["default"].spyOn(maps, "Map");
      (0, _expect2["default"])(constructorSpy).toNotHaveBeenCalled();

      (0, _reactDom.render)(_react2["default"].createElement(_GoogleMap2["default"], null), domEl);

      (0, _expect2["default"])(constructorSpy).toHaveBeenCalled();

      constructorSpy.restore();
    });

    it("should call setZoom when props.zoom changes", function () {
      var setZoomSpy = _expect2["default"].spyOn(maps.Map.prototype, "setZoom");
      (0, _expect2["default"])(setZoomSpy).toNotHaveBeenCalled();

      (0, _reactDom.render)(_react2["default"].createElement(_GoogleMap2["default"], null), domEl);
      (0, _expect2["default"])(setZoomSpy).toNotHaveBeenCalled();

      (0, _reactDom.render)(_react2["default"].createElement(_GoogleMap2["default"], { zoom: 10 }), domEl);
      (0, _expect2["default"])(setZoomSpy).toHaveBeenCalled();

      setZoomSpy.restore();
    });
  });
});
"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _mocks__GoogleMapsMock = require("../../__mocks__/google.maps.mock");

var maps = _interopRequireWildcard(_mocks__GoogleMapsMock);

var _index = require("../../index");

var _index2 = require("../index");

describe("utils", function () {
  describe("triggerEvent", function () {
    before(function () {
      global.google = { maps: maps };
    });

    after(function () {
      delete global.google;
    });

    context("when instance is mounted", function () {
      it("should call google.maps.event.trigger", function (done) {
        var triggerSpy = _expect2["default"].spyOn(maps.event, "trigger");
        (0, _expect2["default"])(triggerSpy).toNotHaveBeenCalled();

        function ref(component) {
          (0, _index2.triggerEvent)(component, "resize");
          (0, _expect2["default"])(triggerSpy).toHaveBeenCalled();

          triggerSpy.restore();
          done();
        }

        (0, _reactDom.render)(_react2["default"].createElement(_index.GoogleMapLoader, {
          containerElement: _react2["default"].createElement("div", null),
          googleMapElement: _react2["default"].createElement(_index.GoogleMap, { ref: ref })
        }), document.createElement("div"));
      });
    });
  });
});
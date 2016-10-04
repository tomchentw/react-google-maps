"use strict";

var _InfoBox = require("../InfoBox");

var _InfoBox2 = _interopRequireDefault(_InfoBox);

var _MarkerClusterer = require("../MarkerClusterer");

var _MarkerClusterer2 = _interopRequireDefault(_MarkerClusterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("addons", function () {
  describe("InfoBox", function () {
    it("should be exported", function () {
      expect(_InfoBox2.default).toBeDefined();
    });
  });

  describe("MarkerClusterer", function () {
    it("should be exported", function () {
      expect(_MarkerClusterer2.default).toBeDefined();
    });
  });
});
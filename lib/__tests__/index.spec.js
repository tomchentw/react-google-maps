"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

var _index = require("../index");

describe("index", function () {
  it("should be exported", function () {
    (0, _expect2["default"])(_index.GoogleMapLoader).toExist();
    (0, _expect2["default"])(_index.GoogleMap).toExist();

    (0, _expect2["default"])(_index.Circle).toExist();
    (0, _expect2["default"])(_index.DirectionsRenderer).toExist();
    (0, _expect2["default"])(_index.DrawingManager).toExist();
    (0, _expect2["default"])(_index.InfoWindow).toExist();
    (0, _expect2["default"])(_index.Marker).toExist();
    (0, _expect2["default"])(_index.OverlayView).toExist();
    (0, _expect2["default"])(_index.Polygon).toExist();
    (0, _expect2["default"])(_index.Polyline).toExist();
    (0, _expect2["default"])(_index.Rectangle).toExist();
    (0, _expect2["default"])(_index.SearchBox).toExist();
  });
});
"use strict";

var _index = require("../index");

describe("index", function () {
  it("should be exported", function () {
    expect(_index.withGoogleMap).toBeDefined();

    expect(_index.GoogleMap).toBeDefined();
    expect(_index.Circle).toBeDefined();
    expect(_index.DirectionsRenderer).toBeDefined();
    expect(_index.InfoWindow).toBeDefined();
    expect(_index.KmlLayer).toBeDefined();
    expect(_index.FusionTablesLayer).toBeDefined();
    expect(_index.Marker).toBeDefined();
    expect(_index.OverlayView).toBeDefined();
    expect(_index.Polygon).toBeDefined();
    expect(_index.Polyline).toBeDefined();
    expect(_index.Rectangle).toBeDefined();
    expect(_index.StreetViewPanorama).toBeDefined();
  });
});
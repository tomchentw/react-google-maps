"use strict";

jest.dontMock("../index.js");
jest.dontMock("../helpers/create_child_component");
describe("index", function() {
  it("should export components", function() {
    var index = require("../index.js");

    expect(index.GoogleMapsMixin).toBeDefined();
    expect(index.Map).toBeDefined();
    expect(index.Marker).toBeDefined();
    expect(index.Circle).toBeDefined();
  });
});

/** @jsx React.DOM */
"use strict";

jest.dontMock("../index.js");
describe("index", function() {
  it("should export components", function() {
    var index = require("../index.js");

    expect(index.GoogleMap).toBeDefined();
  });
});

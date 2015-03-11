"use strict";

jest.dontMock("../Map.js");
jest.dontMock("../mixins/GoogleMapsMixin.js");
jest.dontMock("../mixins/EventBindingMixin.js");

describe("Map", function() {
  it("should render a canvas", function() {
    var React = require("react/addons"),
        Map = require("../Map.js"),
        $__0=  React.addons,TestUtils=$__0.TestUtils,
        MockContext,
        map,
        divCanvas;

    MockContext = React.createClass({displayName: "MockContext",
      mixins: [require("../mixins/GoogleMapsMixin")],

      render:function () {
        return React.createElement(Map, null);
      }
    });

    map = TestUtils.findRenderedComponentWithType(
      TestUtils.renderIntoDocument(React.createElement(MockContext, null)),
      Map
    );

    divCanvas = TestUtils.findRenderedDOMComponentWithTag(
      map, "div"
    );

    expect(divCanvas.getDOMNode().getAttribute("style")).toEqual(null);
  });
});

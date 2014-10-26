/** @jsx React.DOM */
"use strict";

jest.dontMock("../Map.js");
jest.dontMock("../GoogleMapsMixin.js");
jest.dontMock("../mixins/ChildMixin.js");
jest.dontMock("../mixins/EventBindingMixin.js");

describe("Map", function() {
  it("should render a canvas", function() {
    var React = require("react/addons"),
        Map = require("../Map.js"),
        {TestUtils} = React.addons,
        MockContext,
        map,
        divCanvas;

    MockContext = React.createClass({
      mixins: [require("../GoogleMapsMixin")],

      render () {
        return <div><Map /></div>;
      }
    });

    map = TestUtils.findRenderedComponentWithType(
      TestUtils.renderIntoDocument(<MockContext />),
      Map
    );

    divCanvas = TestUtils.findRenderedDOMComponentWithTag(
      map, "div"
    );

    expect(divCanvas.getDOMNode().getAttribute("style")).toEqual("width:100%;height:400px;");
  });
});

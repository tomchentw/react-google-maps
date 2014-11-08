"use strict";

jest.dontMock("../Map.js");
jest.dontMock("../mixins/GoogleMapsMixin.js");
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
      mixins: [require("../mixins/GoogleMapsMixin")],

      render () {
        return <Map />;
      }
    });

    map = TestUtils.findRenderedComponentWithType(
      TestUtils.renderIntoDocument(<MockContext />),
      Map
    );

    divCanvas = TestUtils.findRenderedDOMComponentWithTag(
      map, "div"
    );

    expect(divCanvas.getDOMNode().getAttribute("style")).toEqual(null);
  });
});

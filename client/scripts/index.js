"use strict";
require("../styles/index.scss");
var React = require("react/addons"),
    {update} = React.addons,

    Components = require("./Components"),
    Body,
    bodyComponent;

Body = React.createClass({
  displayName: "Body",

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {
    return <div className="row row--full-height">
      <Components className="col-xs-6" initialGeoJson={require("./geojson")} />
      <div className="col-xs-6">
        {require("raw-loader!./Components")}
      </div>
    </div>;
  }
});

bodyComponent = React.render(<Body />, document.getElementById("react-root"));

"use strict";
require("../styles/index.scss");
require("prism/themes/prism.css");

var React = require("react/addons"),
    {update} = React.addons,
    {PrismCode} = require("react-prism"),

    Components = require("./Components"),
    Body,
    bodyComponent;

Body = React.createClass({
  displayName: "Body",

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {
    return <div className="container-fluid container--full-height">
      <div className="row row--full-height">
        <Components className="col-xs-6" initialGeoJson={require("./geojson")} />
        <div className="col-xs-6">
          <pre><PrismCode className="language-javascript">
            {require("raw-loader!./Components")}
          </PrismCode></pre>
        </div>
      </div>
    </div>;
  }
});

bodyComponent = React.render(<Body />, document.getElementById("react-root"));

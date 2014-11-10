"use strict";
require("../styles/index.scss");
require("prism/themes/prism.css");

var React = require("react/addons"),
    {update} = React.addons,
    {PrismCode} = require("react-prism"),

    NavHeaderBar = require("./NavHeaderBar"),
    Components = require("./components/GeojsonToComponents"),
    Body,
    bodyComponent;

Body = React.createClass({
  displayName: "Body",

  mixins: [require("./ReactFutureMixin")],

  _render (props, state) {
    return <div id="react-root">
      <NavHeaderBar />

      <div className="container-fluid container--full-height">
        <div className="row row--full-height">
          <Components className="col-xs-6" initialGeoJson={require("./geojson")} />
          <div className="col-xs-6">
            <pre><PrismCode className="language-javascript">
              {require("!raw-loader!./components/GeojsonToComponents")}
            </PrismCode></pre>
          </div>
        </div>
      </div>
    </div>;
  }
});

bodyComponent = React.render(<Body />, document.body);

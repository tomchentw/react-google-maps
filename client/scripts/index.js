"use strict";
require("../styles/index.scss");
require("prism/themes/prism.css");

var React = require("react/addons"),
    {update} = React.addons,

    NavHeaderBar = require("./NavHeaderBar"),
    ComponentPlayground = require("./ComponentPlayground"),
    Body,
    bodyComponent,

    ACTIONS;

ACTIONS = [
  {
    key: "gs",
    displayName: "Getting started",
    path: "",
  }
];

Body = React.createClass({
  displayName: "Body",

  mixins: [require("./ReactFutureMixin")],

  _render (props, state) {
    return <div id="react-root">
      <NavHeaderBar activeActionKey="gs" actions={ACTIONS} />

      <div className="container-fluid container--full-height">
        <ComponentPlayground
          className="row row--full-height"
          componentClass={require("./components/GeojsonToComponents")}
          componentProps={{initialGeoJson: require("./geojson")}}
          componentRaw={{__raw: require("!raw-loader!./components/GeojsonToComponents")}}/>
      </div>
    </div>;
  }
});

bodyComponent = React.render(<Body />, document.body);

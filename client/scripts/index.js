"use strict";
require("../styles/index.scss");
require("prism/themes/prism.css");

var React = require("react/addons"),
    {update} = React.addons,

    NavHeaderBar = require("./NavHeaderBar"),
    ComponentPlayground = require("./ComponentPlayground"),
    Body,
    bodyComponent,

    ACTIONS,
    DROPDOWN_ACTIONS;

ACTIONS = [
  {
    key: "gs",
    displayName: "Getting started",
    path: "",
    component: {
      componentClass: require("./components/GeojsonToComponents"),
      componentProps: {
        initialGeoJson: require("./geojson"),
      },
      componentRaw: {
        __raw: require("!raw-loader!./components/GeojsonToComponents"),
      },
    },
  },
];

DROPDOWN_ACTIONS = [
  {
    key: "geojson",
    displayName: "Geojson to Components",
    path: "geojson-to-components",
  },
  false,
  {
    key: "geojson2",
    displayName: "Geojson 2 to Components",
    path: "geojson2-to-components",
  },
];


Body = React.createClass({
  displayName: "Body",

  mixins: [require("./ReactFutureMixin")],

  getInitialState () {
    return {
      action: ACTIONS[0],
    };
  },

  _handle_navigate (action) {
    this.setState({ action });
  },

  _render (props, state) {
    var {action} = state;

    return <div id="react-root">
      <NavHeaderBar activeActionKey={action.key} onNavigateTo={this._handle_navigate} actions={ACTIONS} dropdownActions={DROPDOWN_ACTIONS} />

      <div className="container-fluid container--full-height">
        <ComponentPlayground className="row row--full-height" {...action.component} />
      </div>
    </div>;
  }
});

bodyComponent = React.render(<Body />, document.body);

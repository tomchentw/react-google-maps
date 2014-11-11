"use strict";
require("../styles/index.scss");
require("prism/themes/prism.css");
require("github-fork-ribbon-css/gh-fork-ribbon.css");

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
    path: "#gs",
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
    key: "basics__simple-map",
    displayName: "Simple Map",
    path: "#basics/simple-map",
    component: {
      componentClass: require("./components/basics/SimpleMap"),
      componentRaw: {
        __raw: require("!raw-loader!./components/basics/SimpleMap"),
      },
    },
  },
  false,
  {
    key: "basics__asynchronous-loading",
    displayName: "Asynchronous Loading",
    path: "#basics/asynchronous-loading",
    component: {
      componentClass: require("./components/basics/AsynchronousLoading"),
      componentAsync: true,
      componentRaw: {
        __raw: require("!raw-loader!./components/basics/AsynchronousLoading"),
      },
    },
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
        <div className="github-fork-ribbon-wrapper right">
          <div className="github-fork-ribbon" style={{backgroundColor: "#333"}}>
            <a href="https://github.com/tomchentw/react-google-maps">Fork me on GitHub</a>
          </div>
        </div>
        <ComponentPlayground className="row row--full-height" {...action.component} />
      </div>
    </div>;
  }
});

bodyComponent = React.render(<Body />, document.body);

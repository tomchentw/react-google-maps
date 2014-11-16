"use strict";
require("../styles/index.scss");
require("github-fork-ribbon-css/gh-fork-ribbon.css");
require("prism/themes/prism.css");

var React = require("react/addons"),
    {update} = React.addons,

    NavHeaderBar = require("./NavHeaderBar"),
    ComponentPlayground = require("./ComponentPlayground"),
    Body,
    bodyComponent,

    ACTIONS,
    DROPDOWN_ACTIONS,
    ALL_ACTIONS;

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
  {
    key: "basics__geolocation",
    displayName: "Geolocation",
    path: "#basics/geolocation",
    component: {
      componentClass: require("./components/basics/Geolocation"),
      componentRaw: {
        __raw: require("!raw-loader!./components/basics/Geolocation"),
      },
    },
  },
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
  false,
];

ALL_ACTIONS = ACTIONS.concat(DROPDOWN_ACTIONS.filter((x) => { return !!x; }));

Body = React.createClass({
  displayName: "Body",

  mixins: [require("./ReactFutureMixin")],

  getInitialState () {
    var hash = location.hash || ACTIONS[0].path,
        action = ALL_ACTIONS.filter((action) => { return action.path === hash; })[0];

    return {
      action: action,
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

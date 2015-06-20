import React from "react";
import {default as GitHubForkRibbon} from "react-github-fork-ribbon";
import {ToastContainer, ToastMessage} from "react-toastr";

import NavHeaderBar from "./NavHeaderBar";
import ComponentPlayground from "./ComponentPlayground";

const ACTIONS = [
  {
    key: "gs",
    displayName: "Getting started",
    path: "#gs",
    component: {
      componentClass: require("./components/GettingStarted"),
      componentRaw: {
        __raw: require("!raw-loader!./components/GettingStarted"),
      },
    },
  },
];

const DROPDOWN_ACTIONS = [
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
    key: "basics__styled-map",
    displayName: "Styled Map",
    path: "#basics/styled-map",
    component: {
      componentClass: require("./components/basics/StyledMap"),
      componentRaw: {
        __raw: require("!raw-loader!./components/basics/StyledMap"),
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
      componentRaw: {
        __raw: require("!raw-loader!./components/basics/AsynchronousLoading"),
      },
    },
  },
  {
    key: "basics__directions",
    displayName: "Directions",
    path: "#basics/directions",
    component: {
      componentClass: require("./components/basics/Directions"),
      componentRaw: {
        __raw: require("!raw-loader!./components/basics/Directions"),
      },
    },
  },
  {
    key: "basics__overlay-view",
    displayName: "OverlayView",
    path: "#basics/overlay-view",
    component: {
      componentClass: require("./components/basics/OverlayView"),
      componentRaw: {
        __raw: require("!raw-loader!./components/basics/OverlayView"),
      },
    },
  },
  false,
  {
    key: "events__simple-click-event",
    displayName: "Simple click event",
    path: "#events/simple-click-event",
    component: {
      componentClass: require("./components/events/SimpleClickEvent"),
      componentRaw: {
        __raw: require("!raw-loader!./components/events/SimpleClickEvent"),
      },
    },
  },
  {
    key: "events__event-closure",
    displayName: "Using closures in event listeners",
    path: "#events/event-closure",
    component: {
      componentClass: require("./components/events/ClosureListeners"),
      componentRaw: {
        __raw: require("!raw-loader!./components/events/ClosureListeners"),
      },
    },
  },
  {
    key: "events__event-arguments",
    displayName: "Accessing arguments in UI events",
    path: "#events/event-arguments",
    component: {
      componentClass: require("./components/events/AccessingArguments"),
      componentRaw: {
        __raw: require("!raw-loader!./components/events/AccessingArguments"),
      },
    },
  },
  {
    key: "events__event-properties",
    displayName: "Getting properties with event handlers",
    path: "#events/event-properties",
    component: {
      componentClass: require("./components/events/GettingProperties"),
      componentRaw: {
        __raw: require("!raw-loader!./components/events/GettingProperties"),
      },
    },
  },
  false,
  {
    key: "drawing__drawing-tools",
    displayName: "Drawing Tools",
    path: "#drawing/drawing-tools",
    component: {
      componentClass: require("./components/drawing/DrawingTools"),
      componentRaw: {
        __raw: require("!raw-loader!./components/drawing/DrawingTools"),
      },
    },
  },
];

const RIGHT_ACTIONS = [
  {
    key: "geojson",
    displayName: "Geojson",
    path: "#geojson",
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

const ALL_ACTIONS = ACTIONS.concat(DROPDOWN_ACTIONS.filter((x) => { return !!x; })).concat(RIGHT_ACTIONS);

class ReactRoot extends React.Component {

  constructor (...args) {
    super(args);
    this.state = {
      action: ACTIONS[0],
    };
  }

  componentWillMount () {
    var {action} = this.state;
    const hash = (
      "undefined" !== typeof window && location.hash || (
        // Server rendering polyfill
        action.path
      )
    );
    if (hash === action.path) {
      return;
    }
    action = ALL_ACTIONS.filter((action) => { return action.path === hash; })[0];
    this.setState({ action });
  }

  _handle_navigate (action) {
    this.setState({ action });
  }

  _handle_toast (title, message) {
    this.refs.toast.success(title, message);
  }

  render () {
    const {props, state} = this,
          {action} = state;

    return (
      <div id="react-root">
        <NavHeaderBar
          activeActionKey={action.key}
          onNavigateTo={this._handle_navigate.bind(this)}
          actions={ACTIONS}
          dropdownActions={DROPDOWN_ACTIONS}
          rightActions={RIGHT_ACTIONS} />

        <div className="container-fluid container--full-height">
          <GitHubForkRibbon
            position="right"
            color="black"
            href="https://github.com/tomchentw/react-google-maps">
            Fork me on GitHub
          </GitHubForkRibbon>
          <ToastContainer
            ref="toast"
            toastMessageFactory={React.createFactory(ToastMessage.animation)}/>

          <ComponentPlayground
            className="row row--full-height"
            toast={this._handle_toast.bind(this)} {...action.component} />
        </div>
      </div>
    );
  }
}

export default ReactRoot;

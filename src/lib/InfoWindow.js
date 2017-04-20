/* global google */
import _ from "lodash";

import invariant from "invariant";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import { Children } from "react";

import {
  unstable_renderSubtreeIntoContainer,
  unmountComponentAtNode,
} from "react-dom";

import {
  MAP,
  ANCHOR,
  INFO_WINDOW,
} from "./constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "./enhanceElement";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  children: PropTypes.element,
  options: PropTypes.object,
  position: PropTypes.any,
  zIndex: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCloseClick: `closeclick`,
  
  onContentChanged: `content_changed`,

  onDomReady: `domready`,

  onPositionChanged: `position_changed`,

  onZIndexChanged: `zindex_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getPosition(infoWindow) { return infoWindow.getPosition(); },

  getZIndex(infoWindow) { return infoWindow.getZIndex(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  children(infoWindow, children, component) {
    unstable_renderSubtreeIntoContainer(component, Children.only(children), infoWindow.getContent());
  },
  options(infoWindow, options) { infoWindow.setOptions(options); },
  position(infoWindow, position) { infoWindow.setPosition(position); },
  zIndex(infoWindow, zIndex) { infoWindow.setZIndex(zIndex); },
};

function getInstanceFromComponent(component) {
  return component.state[INFO_WINDOW];
}

function openInfoWindow(context, infoWindow) {
  const map = context[MAP];
  const anchor = context[ANCHOR];
  if (anchor) {
    infoWindow.open(map, anchor);
  } else if (infoWindow.getPosition()) {
    infoWindow.open(map);
  } else {
    invariant(false,
`You must provide either an anchor (typically a <Marker>) or a position for <InfoWindow>.`
    );
  }
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `InfoWindow`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
    [ANCHOR]: PropTypes.object,
  },

  getInitialState() {
    const map = this.context[MAP];
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    const infoWindow = new google.maps.InfoWindow({
      map,
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
      // Override props of ReactElement type
      content: undefined,
      children: undefined,
    });

    openInfoWindow(this.context, infoWindow);
    return {
      [INFO_WINDOW]: infoWindow,
    };
  },

  componentDidMount() {
    const infoWindow = getInstanceFromComponent(this);
    const content = document.createElement(`div`)

    controlledPropUpdaterMap.children({
      getContent() { return content },
    }, this.props.children, this);
    infoWindow.setContent(content)
  },

  componentWillReceiveProps(nextProps, nextContext) {
    const anchorChanged = this.context[ANCHOR] !== nextContext[ANCHOR];
    if (anchorChanged) {
      const infoWindow = getInstanceFromComponent(this);
      openInfoWindow(nextContext, infoWindow);
    }
  },

  componentWillUnmount() {
    const infoWindow = getInstanceFromComponent(this);
    if (infoWindow) {
      unmountComponentAtNode(infoWindow.getContent());
      infoWindow.setMap(null);
    }
  },

  render() {
    return false;
  },
});

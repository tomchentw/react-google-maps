import _ from "lodash";

import invariant from "invariant";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import { Children } from "react";

import {
  unstable_renderSubtreeIntoContainer,
} from "react-dom";

import {
  MAP,
  ANCHOR,
  INFO_BOX,
} from "../constants";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "../enhanceElement";

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html
  content: PropTypes.any,
  options: PropTypes.object,
  position: PropTypes.any,
  visible: PropTypes.bool,
  zIndex: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html
  onCloseClick: `closeclick`,

  onContentChanged: `content_changed`,

  onDomReady: `domready`,

  onPositionChanged: `position_changed`,

  onZIndexChanged: `zindex_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html
  getPosition(infoBox) { return infoBox.getPosition(); },

  getVisible(infoBox) { return infoBox.getVisible(); },

  getZIndex(infoBox) { return infoBox.getZIndex(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  children(infoWindow, children, component) {
    unstable_renderSubtreeIntoContainer(component, Children.only(children), infoWindow.getContent());
  },
  options(infoBox, options) { infoBox.setOptions(options); },
  position(infoBox, position) { infoBox.setPosition(position); },
  visible(infoBox, visible) { infoBox.setVisible(visible); },
  zIndex(infoBox, zIndex) { infoBox.setZIndex(zIndex); },
};

function getInstanceFromComponent(component) {
  return component.state[INFO_BOX];
}

function openInfoBox(context, infoBox) {
  const map = context[MAP];
  const anchor = context[ANCHOR];
  if (anchor) {
    infoBox.open(map, anchor);
  } else if (infoBox.getPosition()) {
    infoBox.open(map);
  } else {
    invariant(false,
`You must provide either an anchor (typically a <Marker>) or a position for <InfoBox>.`
    );
  }
}

export default _.flowRight(
  createReactClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `InfoBox`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
    [ANCHOR]: PropTypes.object,
  },

  getInitialState() {
    const GoogleMapsInfobox = require(
      // "google-maps-infobox" uses "google" as a global variable. Since we don't
      // have "google" on the server, we can not use it in server-side rendering.
      // As a result, we import "google-maps-infobox" here to prevent an error on
      // a isomorphic server.
      `google-maps-infobox`
    );
    const map = this.context[MAP];
    const infoBoxProps = collectUncontrolledAndControlledProps(
      defaultUncontrolledPropTypes,
      controlledPropTypes,
      this.props
    );
    // http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html
    const infoBox = new GoogleMapsInfobox({
      map,
      ...infoBoxProps,
      // Override props of ReactElement type
      content: document.createElement(`div`),
      children: undefined,
    });
    // BUG: the `GoogleMapsInfobox` does not take infoBoxProps.options
    // into account in its constructor. Need to manually set
    infoBox.setOptions(infoBoxProps.options || {});

    openInfoBox(this.context, infoBox);
    return {
      [INFO_BOX]: infoBox,
    };
  },

  componentDidMount() {
    const infoBox = getInstanceFromComponent(this);
    controlledPropUpdaterMap.children(infoBox, this.props.children, this);
  },

  componentWillReceiveProps(nextProps, nextContext) {
    const anchorChanged = this.context[ANCHOR] !== nextContext[ANCHOR];
    if (anchorChanged) {
      const infoBox = getInstanceFromComponent(this);
      openInfoBox(nextContext, infoBox);
    }
  },

  componentWillUnmount() {
    const infoBox = getInstanceFromComponent(this);
    if (infoBox) {
      infoBox.close();
    }
  },

  render() {
    return false;
  },
});

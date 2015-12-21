import {
  default as React,
  PropTypes,
  Component,
} from "react";

import { default as InfoBoxEventList } from "../addonsEventLists/InfoBoxEventList";
import { default as eventHandlerCreator } from "../../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../../utils/defaultPropsCreator";
import { default as composeOptions } from "../../utils/composeOptions";
import { default as setContentForOptionalReactElement } from "../../utils/setContentForOptionalReactElement";
import { default as componentLifecycleDecorator } from "../../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "../../creators/GoogleMapHolder";

export const infoBoxControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  content: PropTypes.any,
  options: PropTypes.object,
  position: PropTypes.any,
  visible: PropTypes.bool,
  zIndex: PropTypes.number,
};

export const infoBoxDefaultPropTypes = defaultPropsCreator(infoBoxControlledPropTypes);

const infoBoxUpdaters = {
  children(children, component) { setContentForOptionalReactElement(children, component.getInfoBox()); },
  content(content, component) { component.getInfoBox().setContent(content); },
  options(options, component) { component.getInfoBox().setOptions(options); },
  position(position, component) { component.getInfoBox().setPosition(position); },
  visible(visible, component) { component.getInfoBox().setVisible(visible); },
  zIndex(zIndex, component) { component.getInfoBox().setZIndex(zIndex); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(InfoBoxEventList);

export const infoBoxEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getInfoBox`,
  updaters: infoBoxUpdaters,
})
export default class InfoBoxCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    infoBox: PropTypes.object.isRequired,
  }

  static _createInfoBox(infoBoxProps) {
    const { mapHolderRef, anchorHolderRef } = infoBoxProps;
    // "google-maps-infobox" uses "google" as a global variable. Since we don't
    // have "google" on the server, we can not use it in server-side rendering.
    // As a result, we import "google-maps-infobox" here to prevent an error on
    // a isomorphic server.
    const GoogleMapsInfobox = require(`google-maps-infobox`);
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
    const infoBox = new GoogleMapsInfobox(composeOptions(infoBoxProps, infoBoxControlledPropTypes));

    if (infoBoxProps.children) {
      setContentForOptionalReactElement(infoBoxProps.children, infoBox);
    }

    if (anchorHolderRef) {
      infoBox.open(mapHolderRef.getMap(), anchorHolderRef.getAnchor());
    } else {
      infoBox.open(mapHolderRef.getMap());
    }
    return infoBox;
  }

  getInfoBox() {
    return this.props.infoBox;
  }

  render() {
    return (<noscript />);
  }
}

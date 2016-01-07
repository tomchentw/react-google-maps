import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import { default as KmlLayerEventList } from "../eventLists/KmlLayerEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const kmlLayerControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
// [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
//
// https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
  defaultViewport: PropTypes.any,
  metadata: PropTypes.any,
  status: PropTypes.any,
  url: PropTypes.string,
  zIndex: PropTypes.number,
};

export const kmlLayerDefaultPropTypes = defaultPropsCreator(kmlLayerControlledPropTypes);

const kmlLayerUpdaters = {
  defaultViewport(defaultViewport, component) { component.getKmlLayer().setDefaultViewport(defaultViewport); },
  metadata(metadata, component) { component.getKmlLayer().setMetadata(metadata); },
  status(status, component) { component.getKmlLayer().setStatus(status); },
  url(url, component) { component.getKmlLayer().setUrl(url); },
  zIndex(zIndex, component) { component.getKmlLayer().setZIndex(zIndex); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(KmlLayerEventList);

export const kmlLayerEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getKmlLayer`,
  updaters: kmlLayerUpdaters,
})
export default class KmlLayerCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    kmlLayer: PropTypes.object.isRequired,
  }

  static _createKmlLayer(kmlLayerProps) {
    const { mapHolderRef } = kmlLayerProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
    const kmlLayer = new google.maps.KmlLayer(composeOptions(kmlLayerProps, kmlLayerControlledPropTypes));

    kmlLayer.setMap(mapHolderRef.getMap());

    return kmlLayer;
  }

  getKmlLayer() {
    return this.props.kmlLayer;
  }

  render() {
    const { mapHolderRef, children } = this.props;

    if (Children.count(children) > 0) {
      return (
        <div>{Children.map(children, childElement =>
          childElement && React.cloneElement(childElement, {
            mapHolderRef,
          })
        )}</div>
      );
    } else {
      return (<noscript />);
    }
  }
}

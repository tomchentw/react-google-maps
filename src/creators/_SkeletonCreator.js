import {
  default as React,
  PropTypes,
  Component,
  Children,
} from "react";

import {default as SkeletonEventList} from "../eventLists/SkeletonEventList";
import {default as eventHandlerCreator} from "../utils/eventHandlerCreator";
import {default as defaultPropsCreator} from "../utils/defaultPropsCreator";
import {default as composeOptions} from "../utils/composeOptions";
import {default as componentLifecycleDecorator} from "../utils/componentLifecycleDecorator";

import {default as GoogleMapHolder} from "./GoogleMapHolder";

export const skeletonControlledPropTypes = {
// [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
// https://developers.google.com/maps/documentation/javascript/3.exp/reference
  animation: PropTypes.any,
};

export const skeletonDefaultPropTypes = defaultPropsCreator(skeletonControlledPropTypes);

const skeletonUpdaters = {
  animation   (animation, component) { component.getSkeleton().setAnimation(animation); },
};

const {eventPropTypes, registerEvents} = eventHandlerCreator(SkeletonEventList);

export const skeletonEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: "getSkeleton",
  updaters: skeletonUpdaters,
})
export default class SkeletonCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    skeleton: PropTypes.object.isRequired,
  }

  static _createSkeleton (skeletonProps) {
    const {mapHolderRef} = skeletonProps;
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference
    const skeleton = new google.maps.Skeleton(composeOptions(skeletonProps, [
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference
      "animation",
    ]));

    skeleton.setMap(mapHolderRef.getMap());

    return skeleton;
  }

  getSkeleton () {
    return this.props.skeleton;
  }

  render () {
    const {children} = this.props;

    if (0 < Children.count(children)) {
      return (
        <div>{children}</div>
      );
    } else {
      return (<noscript />);
    }
  }
}

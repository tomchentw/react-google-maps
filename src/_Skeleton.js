import {
  default as React,
  Component,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as SkeletonCreator,
  skeletonDefaultPropTypes,
  skeletonControlledPropTypes,
  skeletonEventPropTypes,
} from "./creators/SkeletonCreator";

export default class Skeleton extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...skeletonDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...skeletonControlledPropTypes,
    // Event [onEventName]
    ...skeletonEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getAnimation() { return this.state.skeleton.getAnimation(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference

  state = {
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    const skeleton = SkeletonCreator._createSkeleton(this.props);

    this.setState({ skeleton });
  }

  render() {
    if (this.state.skeleton) {
      return (
        <SkeletonCreator skeleton={this.state.skeleton} {...this.props}>
          {this.props.children}
        </SkeletonCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

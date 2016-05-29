import {
  default as React,
  PropTypes,
  Component,
} from "react";

import {
  default as GoogleMapHolder,
} from "./creators/GoogleMapHolder";

const USE_NEW_BEHAVIOR_TAG_NAME = `__new_behavior__`;/* CIRCULAR_DEPENDENCY */

export default class GoogleMapLoader extends Component {
  static propTypes = {
    containerElement: PropTypes.node.isRequired,
    googleMapElement: PropTypes.element.isRequired, /* CIRCULAR_DEPENDENCY. Uncomment when 5.0.0 comes: propTypesElementOfType(GoogleMap).isRequired, */
  };

  static defaultProps = {
    containerElement: (<div />),
  };

  state = {
    map: null,
  };

  mountGoogleMap(domEl) {
    if (this.state.map || domEl === null) {
      return;
    }
    const { children, ...mapProps } = this.props.googleMapElement.props;
    //
    // Create google.maps.Map instance so that dom is initialized before
    // React's children creators.
    //
    const map = GoogleMapHolder._createMap(domEl, mapProps);
    this.setState({ map });
  }

  renderChild() {
    if (this.state.map) {
      // Notice: implementation details
      //
      // In this state, the DOM of google.maps.Map is already initialized in
      // my innerHTML. Adding extra React components will not clean it
      // in current version*. It will use prepend to add DOM of
      // GoogleMapHolder and become a sibling of the DOM of google.maps.Map
      // Not sure this is subject to change
      //
      // *current version: 0.13.3, 0.14.2
      //
      return React.cloneElement(this.props.googleMapElement, {
        map: this.state.map,
        // ------------ Deprecated ------------
        containerTagName: USE_NEW_BEHAVIOR_TAG_NAME,
      });
    }
  }

  render() {
    return React.cloneElement(this.props.containerElement, {
      ref: ::this.mountGoogleMap,
    }, this.renderChild());
  }
}

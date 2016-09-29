import _ from "lodash";

import {
  default as React,
  PropTypes,
  Component,
} from "react";

import {
  default as propTypesElementOfType,
} from "react-prop-types-element-of-type";

import {
  default as GoogleMap,
} from "./GoogleMap";

import {
  default as GoogleMapHolder,
} from "./creators/GoogleMapHolder";

export default class GoogleMapLoader extends Component {
  static propTypes = {
    containerElement: PropTypes.node.isRequired,
    googleMapElement: propTypesElementOfType(GoogleMap).isRequired,
  };

  static defaultProps = {
    containerElement: (<div />),
  };

  state = {
    map: null,
  };

  mountGoogleMap = this.mountGoogleMap.bind(this);

  mountGoogleMap(domEl) {
    if (this.state.map || domEl === null) {
      return;
    }
    const restProps = _.omit(this.props.googleMapElement.props, [`children`]);
    //
    // Create google.maps.Map instance so that dom is initialized before
    // React's children creators.
    //
    const map = GoogleMapHolder._createMap(domEl, restProps);
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
      });
    }
  }

  render() {
    return React.cloneElement(this.props.containerElement, {
      ref: this.mountGoogleMap,
    }, this.renderChild());
  }
}

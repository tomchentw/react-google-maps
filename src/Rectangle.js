import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as RectangleCreator,
  rectangleDefaultPropTypes,
  rectangleControlledPropTypes,
  rectangleEventPropTypes,
} from "./creators/RectangleCreator";

import { default as GoogleMapHolder } from "./creators/GoogleMapHolder";

/*
 * Original author: @alistairjcbrown
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/80
 */
export default class Rectangle extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...rectangleDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...rectangleControlledPropTypes,
    // Event [onEventName]
    ...rectangleEventPropTypes,
  }

  static contextTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder),
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getBounds() { return this.state.rectangle.getBounds(); }

  getDraggable() { return this.state.rectangle.getDraggable(); }

  getEditable() { return this.state.rectangle.getEditable(); }

  getVisible() { return this.state.rectangle.getVisible(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle

  state = {
  }

  componentWillMount() {
    const { mapHolderRef } = this.context;

    if (!canUseDOM) {
      return;
    }
    const rectangle = RectangleCreator._createRectangle({
      ...this.props,
      mapHolderRef,
    });

    this.setState({ rectangle });
  }

  render() {
    if (this.state.rectangle) {
      return (
        <RectangleCreator rectangle={this.state.rectangle} {...this.props}>
          {this.props.children}
        </RectangleCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

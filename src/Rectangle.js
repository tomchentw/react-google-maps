import {
  default as React,
  Component,
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

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
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
    if (!canUseDOM) {
      return;
    }
    const rectangle = RectangleCreator._createRectangle(this.props);

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

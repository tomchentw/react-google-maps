import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as DrawingManagerCreator,
  drawingManagerDefaultPropTypes,
  drawingManagerControlledPropTypes,
  drawingManagerEventPropTypes,
} from "./creators/DrawingManagerCreator";

import { default as GoogleMapHolder } from "./creators/GoogleMapHolder";

/*
 * Original author: @idolize
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/46
 */
export default class DrawingManager extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...drawingManagerDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...drawingManagerControlledPropTypes,
    // Event [onEventName]
    ...drawingManagerEventPropTypes,
  }

  static contextTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder),
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getDrawingMode() { return this.state.drawingManager.getDrawingMode(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager

  state = {
  }

  componentWillMount() {
    const { mapHolderRef } = this.context;

    if (!canUseDOM) {
      return;
    }
    const drawingManager = DrawingManagerCreator._createDrawingManager({
      ...this.props,
      mapHolderRef,
    });

    this.setState({ drawingManager });
  }

  render() {
    if (this.state.drawingManager) {
      return (
        <DrawingManagerCreator drawingManager={this.state.drawingManager} {...this.props}>
          {this.props.children}
        </DrawingManagerCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

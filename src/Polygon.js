import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as PolygonCreator,
  polygonDefaultPropTypes,
  polygonControlledPropTypes,
  polygonEventPropTypes,
} from "./creators/PolygonCreator";

import { default as GoogleMapHolder } from "./creators/GoogleMapHolder";

export default class Polygon extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...polygonDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...polygonControlledPropTypes,
    // Event [onEventName]
    ...polygonEventPropTypes,
  }
  static contextTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder),
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getDraggable() { return this.state.polygon.getDraggable(); }

  getEditable() { return this.state.polygon.getEditable(); }

  getPath() { return this.state.polygon.getPath(); }

  getPaths() { return this.state.polygon.getPaths(); }

  getVisible() { return this.state.polygon.getVisible(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon

  state = {
  }

  componentWillMount() {
    const { mapHolderRef } = this.context;

    if (!canUseDOM) {
      return;
    }
    const polygon = PolygonCreator._createPolygon({
      ...this.props,
      mapHolderRef,
    });

    this.setState({ polygon });
  }

  render() {
    if (this.state.polygon) {
      return (
        <PolygonCreator polygon={this.state.polygon} {...this.props}>
          {this.props.children}
        </PolygonCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

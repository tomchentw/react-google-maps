import {
  default as React,
  Component,
} from "react";

import {
  default as InfoWindowCreator,
  infoWindowDefaultPropTypes,
  infoWindowControlledPropTypes,
  infoWindowEventPropTypes
} from "./creators/InfoWindowCreator";

export default class InfoWindow extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...infoWindowDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...infoWindowControlledPropTypes,
    // Event [onEventName]
    ...infoWindowEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getContent () { /* TODO: children */ }

  getPosition () { return this.state.infoWindow.getPosition(); }

  getZIndex () { return this.state.infoWindow.getZIndex(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow

  state = {
  }

  componentDidMount () {
    const {mapHolderRef, anchorHolderRef, ...infoWindowProps} = this.props;
    const infoWindow = InfoWindowCreator._createInfoWindow(mapHolderRef, infoWindowProps, anchorHolderRef);

    this.setState({ infoWindow });
  }

  render () {
    if (this.state.infoWindow) {
      return (
        <InfoWindowCreator infoWindow={this.state.infoWindow} {...this.props}>
          {this.props.children}
        </InfoWindowCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

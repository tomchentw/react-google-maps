import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as OverlayViewCreator,
  overlayViewDefaultPropTypes,
  overlayViewControlledPropTypes,
} from "./creators/OverlayViewCreator";

import { default as GoogleMapHolder } from "./creators/GoogleMapHolder";

/*
 * Original author: @petebrowne
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/63
 */
export default class OverlayView extends Component {

  static FLOAT_PANE = `floatPane`
  static MAP_PANE = `mapPane`
  static MARKER_LAYER = `markerLayer`
  static OVERLAY_LAYER = `overlayLayer`
  static OVERLAY_MOUSE_TARGET = `overlayMouseTarget`

  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...overlayViewDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...overlayViewControlledPropTypes,
  }

  static contextTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder),
  }

  static defaultProps = {
    mapPaneName: OverlayView.OVERLAY_LAYER,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/^getMap/); })
  getPanes() { return this.state.overlayView.getPanes(); }

  getProjection() { return this.state.overlayView.getProjection(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView

  state = {
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    const overlayView = OverlayViewCreator._createOverlayView(this.props);

    this.setState({ overlayView });
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }

    const { anchorHolderRef } = this.props;
    const { overlayView } = this.state;

    if (anchorHolderRef) {
      if (`MarkerClusterer` === anchorHolderRef.getAnchorType()) {
        anchorHolderRef.getAnchor().removeMarker(overlayView);
      }
    }
  }

  render() {
    const { mapHolderRef } = this.context;
    if (this.state.overlayView) {
      return (
        <OverlayViewCreator
          mapHolderRef={mapHolderRef}
          overlayView={this.state.overlayView} {...this.props}
        >
          {this.props.children}
        </OverlayViewCreator>
      );
    } else {
      return (<noscript />);
    }
  }
}

import {
  default as invariant,
} from "invariant";

import {
  default as React,
  PropTypes,
  Component,
} from "react";

import {
  default as GoogleMapHolder,
  mapDefaultPropTypes,
  mapControlledPropTypes,
  mapEventPropTypes,
} from "./creators/GoogleMapHolder";

export default class GoogleMap extends Component {
  static propTypes = {
    map: PropTypes.object,
    // Uncontrolled default[props] - used only in componentDidMount
    ...mapDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...mapControlledPropTypes,
    // Event [onEventName]
    ...mapEventPropTypes,
  };

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds() { return this.props.map.getBounds(); }

  getCenter() { return this.props.map.getCenter(); }

  getDiv() { return this.props.map.getDiv(); }

  getHeading() { return this.props.map.getHeading(); }

  getMapTypeId() { return this.props.map.getMapTypeId(); }

  getProjection() { return this.props.map.getProjection(); }

  getStreetView() { return this.props.map.getStreetView(); }

  getTilt() { return this.props.map.getTilt(); }

  getZoom() { return this.props.map.getZoom(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // Public APIs - Use this carefully
  // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })
  fitBounds(bounds) { return this.props.map.fitBounds(bounds); }

  panBy(x, y) { return this.props.map.panBy(x, y); }

  panTo(latLng) { return this.props.map.panTo(latLng); }

  panToBounds(latLngBounds) {
    return this.props.map.panToBounds(latLngBounds);
  }
  // END - Public APIs - Use this carefully
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  componentWillMount() {
    const { containerTagName, containerProps } = this.props;
    invariant(!containerTagName && !containerProps,
`"GoogleMap" with containerTagName or containerProps is removed in release (5.0.0).
Use "GoogleMapLoader" instead.
See https://github.com/tomchentw/react-google-maps/pull/317 for more details.`);
  }

  render() {
    return (
      <GoogleMapHolder {...this.props}>
        {this.props.children}
      </GoogleMapHolder>
    );
  }
}

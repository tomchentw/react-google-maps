import {
  default as React,
  PropTypes,
  Component,
  findDOMNode,
} from "react";

import {
  default as GoogleMapHolder,
  mapDefaultPropTypes,
  mapControlledPropTypes,
  mapEventPropTypes,
} from "./creators/GoogleMapHolder";

export default class GoogleMap extends Component {
  static propTypes = {
    containerTagName: PropTypes.string.isRequired,
    containerProps: PropTypes.object.isRequired,
    // Uncontrolled default[props] - used only in componentDidMount
    ...mapDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...mapControlledPropTypes,
    // Event [onEventName]
    ...mapEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds () { return this.state.map.getBounds(); }

  getCenter () { return this.state.map.getCenter(); }

  getDiv () { return this.state.map.getDiv(); }

  getHeading () { return this.state.map.getHeading(); }

  getMapTypeId () { return this.state.map.getMapTypeId(); }

  getProjection () { return this.state.map.getProjection(); }

  getStreetView () { return this.state.map.getStreetView(); }

  getTilt () { return this.state.map.getTilt(); }

  getZoom () { return this.state.map.getZoom(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // Public APIs - Use this carefully
  // See discussion in https://github.com/tomchentw/react-google-maps/issues/62
  // 
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return !it.match(/^get/) && !it.match(/^set/) && !it.match(/Map$/); })
  fitBounds (bounds) { return this.state.map.fitBounds(bounds); }

  panBy (x, y) { return this.state.map.panBy(x, y); }

  panTo (latLng) { return this.state.map.panTo(latLng); }

  panToBounds (latLngBounds) { return this.state.map.panToBounds(latLngBounds); }
  // END - Public APIs - Use this carefully
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  static defaultProps = {
    containerTagName: "div",
    containerProps: {},
  }

  state = {
  }

  componentDidMount () {
    const domEl = findDOMNode(this);
    const {containerTagName, containerProps, children, ...mapProps} = this.props;
    // TODO: support asynchronous load of google.maps API at this level.
    //
    // Create google.maps.Map instance so that dom is initialized before
    // React's children creators.
    //
    const map = GoogleMapHolder._createMap(domEl, mapProps);
    this.setState({ map });
  }

  render () {
    const {containerTagName, containerProps, children, ...mapProps} = this.props;
    const child = this.state.map ? (
      // Notice: implementation details
      //
      // In this state, the DOM of google.maps.Map is already initialized in
      // my innerHTML. Adding extra React components will not clean it
      // in current (0.13.3) version. It will use prepend to add DOM of
      // GoogleMapHolder and become a sibling of the DOM of google.maps.Map
      // Not sure this is subject to change
      //
      <GoogleMapHolder map={this.state.map} {...mapProps}>
        {children}
      </GoogleMapHolder>
    ) : undefined;

    return React.createElement(containerTagName, containerProps, child);
  }
}

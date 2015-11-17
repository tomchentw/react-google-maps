import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as warning,
} from "warning";

import {
  GoogleMap,
} from "../index";

import {
  default as makeUrl,
} from "../utils/makeUrl";

export default class ScriptjsGoogleMap extends Component {
  static propTypes = {
    // PropTypes for URL generation
    // https://nodejs.org/api/url.html#url_url_format_urlobj
    protocol: PropTypes.string,
    hostname: PropTypes.string.isRequired,
    port: PropTypes.number,
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
    // PropTypes for ScriptjsGoogleMap
    loadingElement: PropTypes.node,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds () { return this.refs.map.getBounds(); }

  getCenter () { return this.refs.map.getCenter(); }

  getDiv () { return this.refs.map.getDiv(); }

  getHeading () { return this.refs.map.getHeading(); }

  getMapTypeId () { return this.refs.map.getMapTypeId(); }

  getProjection () { return this.refs.map.getProjection(); }

  getStreetView () { return this.refs.map.getStreetView(); }

  getTilt () { return this.refs.map.getTilt(); }

  getZoom () { return this.refs.map.getZoom(); }
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
  fitBounds (bounds) { return this.refs.map.fitBounds(bounds); }

  panBy (x, y) { return this.refs.map.panBy(x, y); }

  panTo (latLng) { return this.refs.map.panTo(latLng); }

  panToBounds (latLngBounds) { return this.refs.map.panToBounds(latLngBounds); }
  // END - Public APIs - Use this carefully
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

  state = {
    isLoaded: false,
  }

  componentWillMount () {
    if (!canUseDOM) {
      return;
    }
    const scriptjs = require("scriptjs");
    const {protocol, hostname, port, pathname, query, ...restProps} = this.props;
    const urlObj = {protocol, hostname, port, pathname, query};
    const url =  makeUrl(urlObj);
    scriptjs(url, () => this.setState({ isLoaded: true }));
  }

  componentWillReceiveProps (nextProps) {
    const changedKeys = Object.keys(ScriptjsGoogleMap.propTypes)
      .filter(key => this.props[key] !== nextProps[key]);

    // I'm disabling the warning because what if I pass an empty object into the query prop?
    // This doesn't support object equality
    //
    // warning(0 === changedKeys.length, `ScriptjsGoogleMap doesn't support mutating props after initial render. Changed props: %s`, `[${ changedKeys.join(", ") }]`);
  }

  render () {
    if (this.state.isLoaded) {
      const {protocol, hostname, port, pathname, query, ...restProps} = this.props;
      return (
        <GoogleMap {...restProps} ref="map" />
      );
    } else {
      return this.props.loadingElement;
    }
  }
}

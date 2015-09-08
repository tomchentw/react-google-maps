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

    warning(0 === changedKeys.length, `ScriptjsGoogleMap doesn't support mutating props after initial render. Changed props: %s`, `[${ changedKeys.join(", ") }]`);
  }

  render () {
    if (this.state.isLoaded) {
      const {protocol, hostname, port, pathname, query, ...restProps} = this.props;
      return (
        <GoogleMap {...restProps} />
      );
    } else {
      return this.props.loadingElement;
    }
  }
}

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
  urlObjDefinition,
  getUrlObjChangedKeys,
} from "../utils/makeUrl";

export default class ScriptjsGoogleMap extends Component {
  static propTypes = {
    ...urlObjDefinition,
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
    if ("production" !== process.env.NODE_ENV) {
      const changedKeys = getUrlObjChangedKeys(this.props, nextProps);

      warning(0 === changedKeys.length, `ScriptjsGoogleMap doesn't support mutating url related props after initial render. Changed props: %s`, `[${ changedKeys.join(", ") }]`);
    }
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

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

export default class ScriptjsLoader extends Component {
  static propTypes = {
    ...urlObjDefinition,
    // PropTypes for ScriptjsLoader
    loadingElement: PropTypes.node,
    googleMapElement: PropTypes.element.isRequired,
  }

  state = {
    isLoaded: false,
  }

  componentWillMount () {
    if (!canUseDOM) {
      return;
    }
    /*
     * External commonjs require dependency -- begin
     */
    const scriptjs = require("scriptjs");
    /*
     * External commonjs require dependency -- end
     */
    const {protocol, hostname, port, pathname, query} = this.props;
    const urlObj = {protocol, hostname, port, pathname, query};
    const url = makeUrl(urlObj);
    scriptjs(url, () => this.setState({ isLoaded: true }));
  }

  componentWillReceiveProps (nextProps) {
    if ("production" !== process.env.NODE_ENV) {
      const changedKeys = getUrlObjChangedKeys(this.props, nextProps);

      warning(0 === changedKeys.length, `ScriptjsLoader doesn't support mutating url related props after initial render. Changed props: %s`, `[${ changedKeys.join(", ") }]`);
    }
  }

  render () {
    if (this.state.isLoaded) {
      return this.props.googleMapElement;
    } else {
      return this.props.loadingElement;
    }
  }
}

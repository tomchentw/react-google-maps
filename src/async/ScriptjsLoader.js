import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {
  default as propTypesElementOfType,
} from "react-prop-types-element-of-type";

import {
  default as canUseDOM,
} from "can-use-dom";

import {
  default as warning,
} from "warning";

import {
  GoogleMapLoader,
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
    // ...GoogleMapLoader.propTypes,// Uncomment for 5.0.0
    googleMapElement: propTypesElementOfType(GoogleMap).isRequired,
  };

  static defaultProps = {
  };

  state = {
    isLoaded: false,
  }

  shouldUseNewBehavior() {
    const { containerTagName, containerProps } = this.props.googleMapElement.props;
    return (
      this.props.containerElement !== undefined &&
      this.props.containerElement !== null &&
      containerTagName === undefined &&
      containerProps === undefined
    );
  }

  componentWillMount() {
    warning(this.shouldUseNewBehavior(),
`"async/ScriptjsLoader" is now rendering "GoogleMapLoader". Migrate to use "GoogleMapLoader" instead.
The old behavior will be removed in next major release (5.0.0).
See https://github.com/tomchentw/react-google-maps/pull/157 for more details.`
    );
    if (!canUseDOM) {
      return;
    }
    /*
     * External commonjs require dependency -- begin
     */
    const scriptjs = require(`scriptjs`);
    /*
     * External commonjs require dependency -- end
     */
    const { protocol, hostname, port, pathname, query } = this.props;
    const urlObj = { protocol, hostname, port, pathname, query };
    const url = makeUrl(urlObj);
    scriptjs(url, () => this.setState({ isLoaded: true }));
  }

  componentWillReceiveProps(nextProps) {
    if (`production` !== process.env.NODE_ENV) {
      const changedKeys = getUrlObjChangedKeys(this.props, nextProps);

      warning(changedKeys.length === 0, `ScriptjsLoader doesn't support mutating url related props after initial render. Changed props: %s`, `[${ changedKeys.join(`, `) }]`);
    }
  }

  render() {
    if (this.state.isLoaded) {
      const { protocol, hostname, port, pathname, query, loadingElement, ...restProps } = this.props;

      if (this.shouldUseNewBehavior()) {
        return (
          <GoogleMapLoader {...restProps} />
        );
      } else {// ------------ Deprecated ------------
        return this.props.googleMapElement;
      }
    } else {
      return this.props.loadingElement;
    }
  }
}

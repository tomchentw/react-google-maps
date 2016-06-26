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
  default as makeUrl,
  urlObjDefinition,
  getUrlObjChangedKeys,
} from "../utils/makeUrl";


/**
 * Usage:
 *
 *     <LoadGoogleMaps query="places" loadingElement={<Spinner />} />
 *        { () => <GoogleMap {...props}> }
 *     </LoadGoogleMaps>
 *
 * By default, will only render the child once the GMaps JavaScript
 * has been loaded.
 *
 *     <LoadGoogleMaps query="places" passIsLoadingProp={true} />
 *        { () => <MyGoogleMapWrapper {...props}> }
 *     </LoadGoogleMaps>
 *
 * This will render the children immediately, and pass a isMapsLoaded
 * property. This allows your child component to decide how it wants
 * to render a loading indicator.
 */
export class LoadGoogleMaps extends Component {
  static propTypes = {
    ...urlObjDefinition,
    children: PropTypes.func.isRequired,
    loadingElement: PropTypes.node,
    passIsLoadingProp: PropTypes.bool
  };

  static defaultProps = {
    passIsLoadingProp: false
  };

  state = {
    isLoaded: false,
  }

  componentWillMount() {
    if (!canUseDOM) {
      return;
    }
    /*
     * External commonjs require dependency -- begin
     */
    const scriptjs = require(`scriptjs`); // eslint-disable-line global-require
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

      warning(
        changedKeys.length === 0,
`LoadGoogleMaps doesn't support mutating url related props after initial render.
Changed props: %s`,
`[${changedKeys.join(`, `)}]`
      );
    }
  }

  render() {
    const funcChild = this.props.children;

    if (this.props.passIsLoadingProp)
      return funcChild(this.state.isLoaded);

    if (this.state.isLoaded)
      return funcChild();

    return this.props.loadingElement || null;
  }
}


export default function loadGoogleMaps(urlOpts) {
  return function decorator(Component) {
    return (props) => {
      return <LoadGoogleMaps {...urlOpts}>
        {
          (isLoaded) => {
            return <Component {...props} isMapsLoaded={isLoaded} />
          }
        }
      </LoadGoogleMaps>
    }
  }
}
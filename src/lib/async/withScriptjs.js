import _ from "lodash";

import invariant from "invariant";

import canUseDOM from "can-use-dom";

import getDisplayName from "react-display-name";

import {
  default as React,
  PropTypes,
  Component,
} from "react";

const LOAIDNG_STATE_NONE = `NONE`;
const LOAIDNG_STATE_BEGIN = `BEGIN`;
const LOAIDNG_STATE_LOADED = `LOADED`;

export default function withScriptjs(WrappedComponent) {
  return class Container extends Component {
    static displayName = `withScriptjs(${getDisplayName(WrappedComponent)})`;

    static propTypes = {
      loadingElement: PropTypes.node.isRequired,
      googleMapURL: PropTypes.string.isRequired,
    };

    state = {
      loadingState: LOAIDNG_STATE_NONE,
    };

    isUnmounted = false;

    handleLoaded = this.handleLoaded.bind(this);

    handleLoaded() {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        loadingState: LOAIDNG_STATE_LOADED,
      });
    }

    componentWillMount() {
      const {
        loadingElement,
        googleMapURL,
      } = this.props;
      invariant(!!loadingElement && !!googleMapURL,
`Required props loadingElement or googleMapURL is missing. You need to provide both of them.`
      );
    }

    componentDidMount() {
      const {
        loadingState,
      } = this.state;
      if (loadingState !== LOAIDNG_STATE_NONE || !canUseDOM) {
        return;
      }
      this.setState({
        loadingState: LOAIDNG_STATE_BEGIN,
      });
      // Don't load scriptjs as dependency since we want this module be used on server side.
      // eslint-disable-next-line global-require
      const scriptjs = require(`scriptjs`);
      const {
        googleMapURL,
      } = this.props;
      scriptjs(googleMapURL, this.handleLoaded);
    }

    componentWillUnmount() {
      this.isUnmounted = true;
    }

    render() {
      const {
        loadingElement,
        googleMapURL, // eslint-disable-line no-unused-vars
        ...restProps,
      } = this.props;

      const {
        loadingState,
      } = this.state;

      if (loadingState === LOAIDNG_STATE_LOADED) {
        return (
          <WrappedComponent {...restProps} />
        );
      } else {
        return loadingElement;
      }
    }
  };
}

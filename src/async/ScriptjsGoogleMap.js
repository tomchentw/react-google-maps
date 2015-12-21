import {
  default as React,
  Component,
} from "react";

import {
  default as warning,
} from "warning";

import {
  GoogleMap,
} from "../index";

import {
  default as ScriptjsLoader,
} from "./ScriptjsLoader";

export default class ScriptjsGoogleMap extends Component {

  componentWillMount() {
    warning(false,
`"async/ScriptjsGoogleMap" is deprecated now and will be removed in next major release (5.0.0). Use "async/ScriptjsLoader" instead.
See https://github.com/tomchentw/react-google-maps/pull/150 for more details.`
    );
  }

  render() {
    const { protocol, hostname, port, pathname, query, loadingElement, children, ...restProps } = this.props;

    return (
      <ScriptjsLoader
        protocol={protocol}
        hostname={hostname}
        port={port}
        pathname={pathname}
        query={query}
        loadingElement={loadingElement}
        googleMapElement={
          <GoogleMap {...restProps}>
            {children}
          </GoogleMap>
        }
      />
    );
  }
}

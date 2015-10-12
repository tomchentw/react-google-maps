import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {default as ReactRoot} from "./ReactRoot";
import {
  ASYNC_ACTIONS,
} from "../constants/Actions";

export default class AsyncReactRoot extends Component {

  render () {
    return (
      <ReactRoot
        ACTIONS={ASYNC_ACTIONS}
        ALL_ACTIONS={ASYNC_ACTIONS}
        DROPDOWN_ACTIONS={[]}
        RIGHT_ACTIONS={[]}
      />
    );
  }
}

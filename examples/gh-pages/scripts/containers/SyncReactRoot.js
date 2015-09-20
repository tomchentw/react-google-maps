import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {default as ReactRoot} from "./ReactRoot";
import {
  ACTIONS,
  ALL_ACTIONS,
  DROPDOWN_ACTIONS,
  RIGHT_ACTIONS,
} from "../constants/Actions";

export default class SyncReactRoot extends Component {

  render () {
    return (
      <ReactRoot
        ACTIONS={ACTIONS}
        ALL_ACTIONS={ALL_ACTIONS}
        DROPDOWN_ACTIONS={DROPDOWN_ACTIONS}
        RIGHT_ACTIONS={RIGHT_ACTIONS}
      />
    );
  }
}

import {
  default as React,
  Component,
} from "react";

import {default as SimpleMap} from "./SimpleMap";

require("../styles/index.scss");

export default class ReactRoot extends Component {
  render () {
    return (
      <SimpleMap />
    );
  }
}

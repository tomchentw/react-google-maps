import {
  default as React,
  Component,
} from "react";

import {
  AsyncGettingStartedExample,
} from "./pages/async";

export default class AsyncApp extends Component {

  handleToast = this.handleToast.bind(this);

  handleToast(...args) {
    window.parent.ReactGoogleMapsToast(...args); // See Application
  }

  render() {
    return (
      <AsyncGettingStartedExample
        toast={this.handleToast}
      />
    );
  }
}

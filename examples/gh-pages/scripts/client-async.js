import {default as React} from "react";
import {default as ReactDOM} from "react-dom";

import {default as AsyncReactRoot} from "./containers/AsyncReactRoot";

/*
 *
 * Loaded using async loader.
 */
ReactDOM.render(<AsyncReactRoot />, document.getElementById("react-container"));

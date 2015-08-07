import {default as React} from "react";

import {default as ReactRoot} from "./ReactRoot";

require("../styles/index.scss");

/*
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
React.render(<ReactRoot />, document.getElementById("react-container"));

import {default as React} from "react";

import {default as SyncReactRoot} from "./containers/SyncReactRoot";

/*
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
React.render(<SyncReactRoot />, document.getElementById("react-container"));

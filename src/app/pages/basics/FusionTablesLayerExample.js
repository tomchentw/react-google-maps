import _ from "lodash";

import {
    default as React,
    Component,
} from "react";

import {
    withGoogleMap,
    GoogleMap,
    FusionTablesLayer,
} from "../../../lib";

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const FusionTablesExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
    >
        <FusionTablesLayer
            options={{
                query: {
                    select: `Geocodable address`,
                    from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`,
                },
            }}
            onClick={_.noop}
        />
    </GoogleMap>
));

export default class FusionTablesExample extends Component {
    render() {
        return (
            <FusionTablesExampleGoogleMap
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
            />
        );
    }
}
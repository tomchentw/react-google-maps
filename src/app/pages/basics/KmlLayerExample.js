/* global google */
import { default as React } from "react";

import { GoogleMap, KmlLayer } from "../../../lib";

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const KmlLayerExample = props => (
  <GoogleMap
    containerProps={{
      ...props,
      style: {
        height: `100%`,
      },
    }}
    /*
     * 3. config <GoogleMap> instance by properties
     */
    defaultZoom={8}
    defaultCenter={{ lat: 41.876, lng: -87.624 }}
  >
    <KmlLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
    />
  </GoogleMap>
);

export default KmlLayerExample;

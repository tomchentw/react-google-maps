import {default as React, Component} from "react";
import {default as update} from "react-addons-update";

import {GoogleMap, Marker, Polyline, Polygon, InfoWindow} from "react-google-maps";

function geometryToComponentWithLatLng (geometry) {
  var typeFromThis = Array.isArray(geometry),
      type = typeFromThis ? this.type : geometry.type,
      coordinates = typeFromThis ? geometry : geometry.coordinates;

  switch (type) {
    case "Polygon":
      return {
        ElementClass: Polygon,
        paths: coordinates.map(geometryToComponentWithLatLng, {type: "LineString"})[0]
      };
    case "LineString":
      coordinates = coordinates.map(geometryToComponentWithLatLng, {type: "Point"});
      return typeFromThis ? coordinates : {
        ElementClass: Polyline,
        path: coordinates,
      };
    case "Point":
      coordinates = new google.maps.LatLng(coordinates[1], coordinates[0]);
      return typeFromThis ? coordinates : {
        ElementClass: Marker,
        ChildElementClass: InfoWindow,
        position: coordinates,
      };
    default:
      throw new TypeError(`Unknown geometry type: ${ type }`);
  }
}

/*
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class GeojsonToComponents extends Component {

  state = {
    geoJson: this.props.initialGeoJson,
    geoStateBy: {
      0: {
        ref: "map",
        style: {height: "100%"},
        onClick: ::this.handleMapClick,
        onZoomChanged: ::this.handleMapZoomChanged,
      },
      1: {
        ref: "centerMarker",
        visible: true,
        draggable: true,
        onDragend: ::this.handleMarkerDragend,
        onClick: ::this.handleMarkerClick,
        child: {
          content: "Bermuda Triangle",
          owner: "centerMarker",
        },
      },
      3: {
        onRightclick: ::this.handlePolygonRightclick,
      },
    },
  }

  handleMapClick () {
  }

  handleMapZoomChanged () {
    this.setState(update(this.state, {
      geoStateBy: {
        0: {
          $merge: {
            zoom: this.refs.map.getZoom(),
          },
        },
        1: {
          $merge: {
            opacity: 0.2+(this.refs.map.getZoom()/14),
          },
        },
      },
    }));
  }

  handleMarkerClick () {
    this.setState(update(this.state, {
      geoStateBy: {
        0: {
          $merge: {
            zoom: 1+this.refs.map.getZoom(),
          },
        },
      },
    }));
  }

  handlePolygonRightclick () {
    this.setState(update(this.state, {
      geoStateBy: {
        1: {
          $merge: {
            visible: !this.state.geoStateBy[1].visible,
          },
        },
      },
    }));
  }

  handleMarkerDragend ({latLng}) {
    const marker = this.state.geoJson.features[1],
          originalCoordinates = marker.properties.originalCoordinates || marker.geometry.coordinates,
          newCoordinates = [latLng.lng(), latLng.lat()];

    this.setState(update(this.state, {
      geoJson: {
        features: {
          1: {
            geometry: {
              coordinates: {
                $set: newCoordinates,
              },
            },
            properties: {
              originalCoordinates: {
                $set: originalCoordinates,
              },
            },
          },
          4: {
            $set: {
              "type": "Feature",
              "id": 4,
              "geometry": {
                "type": "LineString",
                "coordinates": [originalCoordinates, newCoordinates],
              },
              "properties": {
              },
            },
          },
        },
      },
    }));
  }

  render () {
    const {props, state} = this,
          {initialGeoJson, googleMapsApi, ...otherProps} = props,
          {geoStateBy} = state,
          {features} = state.geoJson,
          mapFeature = features[0],
          mapGeometry = geometryToComponentWithLatLng(mapFeature.geometry),
          mapState = geoStateBy[0];

    return (
      <GoogleMap containerProps={{
          ...otherProps,
          style: {
            height: "100%",
          },
        }}
        {...mapFeature.properties}
        {...mapState}
        center={mapGeometry.position}>

        {features.reduce((array, feature, index) => {
          if (0 === index) {
            return array;
          }
          const {properties} = feature,
                {ElementClass, ChildElementClass, ...geometry} = geometryToComponentWithLatLng(feature.geometry),
                {visible, child, ...featureState} = geoStateBy[feature.id] || {};
          if (false !== visible) {
            array.push(
              <ElementClass key={`json-${feature.id}`} {...properties} {...geometry} {...featureState}>
                {child ? <ChildElementClass {...child} /> : null}
              </ElementClass>
            );
          }
          return array;
        }, [], this)}

      </GoogleMap>
    );
  }
}

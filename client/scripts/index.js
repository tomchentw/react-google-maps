"use strict";
require("../styles/index.scss");
var React = require("react/addons");
var {update} = React.addons;

var {GoogleMapsMixin, Map, Marker, Polygon, Polyline, InfoWindow} = require("../../src");

function geometryToComponentWithLatLng (geometry) {
  var typeFromThis = Array.isArray(geometry);
  var type = typeFromThis ? this.type : geometry.type;
  var coordinates = typeFromThis ? geometry : geometry.coordinates;

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
        path: coordinates
      };
    case "Point":
      coordinates = new google.maps.LatLng(coordinates[1], coordinates[0]);
      return typeFromThis ? coordinates : {
        ElementClass: Marker,
        ChildElementClass: InfoWindow,
        position: coordinates
      };
    default:
      throw new TypeError(`Unknown geometry type: ${ type }`);
  }
}

var Body = React.createClass({

  mixins: [GoogleMapsMixin],

  getInitialState () {
    return  {
      googleMapsApi: google.maps,
      geoJson: this.props.initialGeoJson,
      geoStateBy: {
        0: {
          ref: "map",
          style: {height: "100%"},
          onClick: this._handle_map_click,
          onZoomChanged: this._handle_map_zoom_changed
        },
        1: {
          ref: "centerMarker",
          visible: true,
          draggable: true,
          onDragend: this._handle_marker_dragend,
          onClick: this._handle_marker_click,
          child: {
            content: "Bermuda Triangle",
            owner: "centerMarker"
          }
        },
        3: {
          onRightclick: this._handle_polygon_rightclick
        }
      }
    };
  },

  render () {
    return this._render(this.props, this.state);
  },

  _handle_map_click () {
  },

  _handle_map_zoom_changed () {
    this.setState(update(this.state, {
      geoStateBy: {
        1: {
          $merge: {
            opacity: 0.3+(this.refs.map.getZoom()/14)
          }
        }
      }
    }));
  },

  _handle_marker_click () {
    this.setState(update(this.state, {
      geoStateBy: {
        0: {
          $merge: {
            zoom: 1+this.refs.map.getZoom()
          }
        }
      }
    }));
  },

  _handle_polygon_rightclick () {
    this.setState(update(this.state, {
      geoStateBy: {
        1: {
          $merge: {
            visible: !this.state.geoStateBy[1].visible
          }
        }
      }
    }));
  },

  _handle_marker_dragend ({latLng}) {
    var marker = this.state.geoJson.features[1];
    var originalCoordinates = marker.properties.originalCoordinates || marker.geometry.coordinates;
    var newCoordinates = [latLng.lng(), latLng.lat()];
    this.setState(update(this.state, {
      geoJson: {
        features: {
          1: {
            geometry: {
              coordinates: {
                $set: newCoordinates
              }
            },
            properties: {
              originalCoordinates: {
                $set: originalCoordinates
              }
            }
          },
          4: {
            $set: {
              "type": "Feature",
              "id": 4,
              "geometry": {
                "type": "LineString",
                "coordinates": [originalCoordinates, newCoordinates]
              },
              "properties": {
              }
            }
          }
        }
      }
    }));
  },

  _render (props, state) {
    var {geoStateBy} = state;
    var elements = state.geoJson.features.map((feature) => {
      var {properties} = feature;
      var result = geometryToComponentWithLatLng(feature.geometry);
      var ElementClass = result.ElementClass;
      delete result.ElementClass;
      if (properties.isCenter) {
        ElementClass = Map;
        result.center = result.position;
        delete result.position;
      }

      var {visible, child, ...geoStatesOfFeature} = geoStateBy[feature.id] || {};
      if (false === visible) {
        return null;
      }

      return <ElementClass {...properties.style} {...result} {...geoStatesOfFeature}>
        {child ? <result.ChildElementClass {...child} /> : null}
      </ElementClass>;
    });

    return React.DOM.div({
      style: {
        height: "100%"
      }
    }, elements);
  }
});


var bodyComponent = React.render(
  <Body initialGeoJson={require("./geojson")} />,
  document.getElementById("react-root")
);

"use strict";
var create_child_component = require("./helpers/create_child_component"),

    BASIC_EVENT_NAMES = "click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick";

exports.GoogleMapsMixin = require("./GoogleMapsMixin");
exports.Map = require("./Map");

[
  [
    "Marker",
    "animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shape_changed title_changed visible_changed zindex_changed",
  ],
  [
    "Polyline",
    BASIC_EVENT_NAMES,
  ],
  [
    "Polygon",
    BASIC_EVENT_NAMES,
  ],
  [
    "InfoWindow",
    BASIC_EVENT_NAMES,
    (component, infoWindow) => {
      var {context} = component;
      infoWindow.open(context.getMap(), context.getInstanceByRef(component.props.owner));
    }
  ],
].forEach((args) => {
  exports[args[0]] = create_child_component.apply(null, args);
});

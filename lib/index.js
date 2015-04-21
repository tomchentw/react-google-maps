"use strict";
var create_child_component = require("./helpers/create_child_component"),

    objectPath = require("object-path"),
    BASIC_EVENT_NAMES = "click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick";

exports.GoogleMapsMixin = require("./mixins/GoogleMapsMixin");
exports.Map = require("./Map");

[
  [ 
    "Circle",
    "center_changed click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup radius_changed rightclick"
  ],
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
    "closeclick content_changed domready position_changed zindex_changed",
    function(component, infoWindow)  {
      var $__0=  component,context=$__0.context,
          $__1=  component.props,owner=$__1.owner;
      infoWindow.open(
        context.getMap(),
        owner ? context.getInstanceByRef(owner) : undefined
      );
    }
  ],
  [
    "DirectionsRenderer",
    BASIC_EVENT_NAMES,
  ],
  [
    "drawing.DrawingManager",
    "drawingmode_changed overlaycomplete markercomplete circlecomplete polygoncomplete polylinecomplete rectanglecomplete"
  ],
].forEach(function(args)  {
  objectPath.set(exports, args[0], create_child_component.apply(null, args));
});

import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";

class DrawingManager extends SimpleChildComponent {
}

DrawingManager._GoogleMapsClassName = "drawing.DrawingManager";

DrawingManager._registerEvents = createRegisterEvents(
  "drawingmode_changed overlaycomplete markercomplete circlecomplete polygoncomplete polylinecomplete rectanglecomplete"
);

export default DrawingManager;

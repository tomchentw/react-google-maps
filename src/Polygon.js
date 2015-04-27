import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";
import BASIC_EVENT_NAMES from "./internals/BASIC_EVENT_NAMES";

class Polygon extends SimpleChildComponent {
}

Polygon._GoogleMapsClassName = "Polygon";

Polygon._registerEvents = createRegisterEvents(
  BASIC_EVENT_NAMES
);

export default Polygon;

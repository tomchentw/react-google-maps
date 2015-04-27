import SimpleChildComponent from "./internals/SimpleChildComponent";
import createRegisterEvents from "./internals/createRegisterEvents";
import BASIC_EVENT_NAMES from "./internals/BASIC_EVENT_NAMES";

class Polyline extends SimpleChildComponent {
}

Polyline._GoogleMapsClassName = "Polyline";

Polyline._registerEvents = createRegisterEvents(
  BASIC_EVENT_NAMES
);

export default Polyline;

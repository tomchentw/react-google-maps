import {
  default as SimpleMap,
} from "./SimpleMap";

import {
  default as StyledMap,
} from "./StyledMap";

import {
  default as Geolocation,
} from "./Geolocation";

import {
  default as Directions,
} from "./Directions";

import {
  default as OverlayView,
} from "./OverlayView";

import {
  default as KmlLayerExample,
} from "./KmlLayerExample";

import {
  default as PopUpInfoWindow,
} from "./PopUpInfoWindow";

SimpleMap.__raw = require(`!raw!./SimpleMap`);
StyledMap.__raw = require(`!raw!./StyledMap`);
Geolocation.__raw = require(`!raw!./Geolocation`);
Directions.__raw = require(`!raw!./Directions`);
OverlayView.__raw = require(`!raw!./OverlayView`);
KmlLayerExample.__raw = require(`!raw!./KmlLayerExample`);
PopUpInfoWindow.__raw = require(`!raw!./PopUpInfoWindow`);

export {
  SimpleMap,
  StyledMap,
  Geolocation,
  Directions,
  OverlayView,
  KmlLayerExample,
  PopUpInfoWindow,
};

import {
  withGoogleMap,

  GoogleMap,
  Circle,
  DirectionsRenderer,
  InfoWindow,
  KmlLayer,
  FusionTablesLayer,
  Marker,
  OverlayView,
  Polygon,
  Polyline,
  Rectangle,
  StreetViewPanorama,
} from "../index";

describe(`index`, () => {
  it(`should be exported`, () => {
    expect(withGoogleMap).toBeDefined();

    expect(GoogleMap).toBeDefined();
    expect(Circle).toBeDefined();
    expect(DirectionsRenderer).toBeDefined();
    expect(InfoWindow).toBeDefined();
    expect(KmlLayer).toBeDefined();
    expect(FusionTablesLayer).toBeDefined();
    expect(Marker).toBeDefined();
    expect(OverlayView).toBeDefined();
    expect(Polygon).toBeDefined();
    expect(Polyline).toBeDefined();
    expect(Rectangle).toBeDefined();
    expect(StreetViewPanorama).toBeDefined();
  });
});

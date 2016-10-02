import {
  withGoogleMap,

  GoogleMap,
  Circle,
  DirectionsRenderer,
  HeatmapLayer,
  InfoWindow,
  KmlLayer,
  Marker,
  OverlayView,
  Polygon,
  Polyline,
  Rectangle,
} from "../index";

describe(`index`, () => {
  it(`should be exported`, () => {
    expect(withGoogleMap).toBeDefined();

    expect(GoogleMap).toBeDefined();
    expect(Circle).toBeDefined();
    expect(DirectionsRenderer).toBeDefined();
    expect(HeatmapLayer).toBeDefined();
    expect(InfoWindow).toBeDefined();
    expect(KmlLayer).toBeDefined();
    expect(Marker).toBeDefined();
    expect(OverlayView).toBeDefined();
    expect(Polygon).toBeDefined();
    expect(Polyline).toBeDefined();
    expect(Rectangle).toBeDefined();
  });
});

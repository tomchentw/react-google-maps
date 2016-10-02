import {
  GoogleMapLoader,
  GoogleMap,

  Circle,
  DirectionsRenderer,
  DrawingManager,
  InfoWindow,
  Marker,
  OverlayView,
  Polygon,
  Polyline,
  Rectangle,
  SearchBox,
} from "../index";

describe(`index`, () => {
  it(`should be exported`, () => {
    expect(GoogleMapLoader).toBeDefined();
    expect(GoogleMap).toBeDefined();

    expect(Circle).toBeDefined();
    expect(DirectionsRenderer).toBeDefined();
    expect(DrawingManager).toBeDefined();
    expect(InfoWindow).toBeDefined();
    expect(Marker).toBeDefined();
    expect(OverlayView).toBeDefined();
    expect(Polygon).toBeDefined();
    expect(Polyline).toBeDefined();
    expect(Rectangle).toBeDefined();
    expect(SearchBox).toBeDefined();
  });
});

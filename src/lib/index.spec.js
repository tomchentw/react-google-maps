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
} from "./index";

describe(`index`, () => {

  it(`should export withGoogleMap`, () => {
    expect(withGoogleMap).toBeDefined();
  });

  it(`should export GoogleMap`, () => {
    expect(GoogleMap).toBeDefined();
  });

  it(`should export Circle`, () => {
    expect(Circle).toBeDefined();
  });

  it(`should export DirectionsRenderer`, () => {
    expect(DirectionsRenderer).toBeDefined();
  });

  it(`should export InfoWindow`, () => {
    expect(InfoWindow).toBeDefined();
  });
  
  it(`should export KmlLayer`, () => {
    expect(KmlLayer).toBeDefined();
  });

  it(`should export FusionTablesLayer`, () => {
    expect(FusionTablesLayer).toBeDefined();
  });

  it(`should export Marker`, () => {
    expect(Marker).toBeDefined();
  });

  it(`should export OverlayView`, () => {
    expect(OverlayView).toBeDefined();
  });

  it(`should export Polygon`, () => {
    expect(Polygon).toBeDefined();
  });

  it(`should export Polyline`, () => {
    expect(Polyline).toBeDefined();
  });

  it(`should export Rectangle`, () => {
    expect(Rectangle).toBeDefined();
  });

  it(`should export StreetViewPanorama`, () => {
    expect(StreetViewPanorama).toBeDefined();
  });

});

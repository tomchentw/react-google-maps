import InfoBox from "../InfoBox";
import MarkerClusterer from "../MarkerClusterer";

describe(`addons`, () => {
  describe(`InfoBox`, () => {
    it(`should be exported`, () => {
      expect(InfoBox).toBeDefined();
    });
  });

  describe(`MarkerClusterer`, () => {
    it(`should be exported`, () => {
      expect(MarkerClusterer).toBeDefined();
    });
  });
});

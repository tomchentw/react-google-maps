import {
  default as expect,
} from "expect";

import {
  default as React,
} from "react";

import {
  unmountComponentAtNode,
  render,
} from "react-dom";

import * as maps from "../__mocks__/google.maps.mock";

import {
  default as GoogleMap,
} from "../GoogleMap";

describe(`GoogleMap`, () => {
  before(() => {
    global.google = { maps };
  });

  after(() => {
    delete global.google;
  });

  describe(`creation`, () => {
    context(`global.google is undefined`, () => {
      let prevGoogle;

      before(() => {
        prevGoogle = global.google;
        delete global.google;
      });

      after(() => {
        global.google = prevGoogle;
      });

      it(`should warn and throw error`, () => {
        const warningSpy = expect.spyOn(console, `error`);
        expect(warningSpy).toNotHaveBeenCalled();

        let error;
        try {
          render((
            <GoogleMap />
          ), document.createElement(`div`));
        } catch (__e__) {
          error = __e__;
        }
        expect(error).toExist();
        expect(warningSpy).toHaveBeenCalled();

        warningSpy.restore();
      });
    });
  });

  describe(`rendering`, () => {
    let domEl;

    beforeEach(() => {
      domEl = document.createElement(`div`);
    });

    afterEach(() => {
      unmountComponentAtNode(domEl);
      domEl = null;
    });

    it(`should call constructor during initial render`, () => {
      const constructorSpy = expect.spyOn(maps, `Map`);
      expect(constructorSpy).toNotHaveBeenCalled();

      render((
        <GoogleMap />
      ), domEl);

      expect(constructorSpy).toHaveBeenCalled();

      constructorSpy.restore();
    });

    it(`should call setZoom when props.zoom changes`, () => {
      const setZoomSpy = expect.spyOn(maps.Map.prototype, `setZoom`);
      expect(setZoomSpy).toNotHaveBeenCalled();

      render((
        <GoogleMap />
      ), domEl);
      expect(setZoomSpy).toNotHaveBeenCalled();

      render((
        <GoogleMap zoom={10} />
      ), domEl);
      expect(setZoomSpy).toHaveBeenCalled();

      setZoomSpy.restore();
    });
  });
});

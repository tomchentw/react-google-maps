import {
  default as expect,
} from "expect";

import {
  default as thenify,
} from "thenify";

import {
  default as React,
  Children,
  PropTypes,
  Component,
} from "react";

import {
  unmountComponentAtNode,
  render as renderWithCallback,
} from "react-dom";

import * as maps from "../__mocks__/google.maps.mock";

import {
  default as GoogleMap,
} from "../GoogleMap";

const render = thenify(renderWithCallback);

describe(`GoogleMap`, () => {
  before(() => {
    global.google = {maps};
  });

  after(() => {
    delete global.google;
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

    it(`should call constructor during initial render`, async (done) => {
      const constructorSpy = expect.spyOn(maps, `Map`);
      expect(constructorSpy).toNotHaveBeenCalled();

      await render((
        <GoogleMap />
      ), domEl);

      expect(constructorSpy).toHaveBeenCalled();

      constructorSpy.restore();
      done();
    });

    it(`should call setZoom when props.zoom changes`, async (done) => {
      const setZoomSpy = expect.spyOn(maps.Map.prototype, `setZoom`);
      expect(setZoomSpy).toNotHaveBeenCalled();

      await render((
        <GoogleMap />
      ), domEl);
      expect(setZoomSpy).toNotHaveBeenCalled();

      await render((
        <GoogleMap zoom={10} />
      ), domEl);
      expect(setZoomSpy).toHaveBeenCalled();

      setZoomSpy.restore();
      done();
    });
  });
});

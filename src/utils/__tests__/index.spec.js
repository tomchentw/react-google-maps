import {
  default as expect,
} from "expect";

import {
  default as React,
  Children,
  PropTypes,
  Component,
} from "react";

import {
  unmountComponentAtNode,
  render,
} from "react-dom";

import * as maps from "../../__mocks__/google.maps.mock";

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
} from "../../index";

import {
  triggerEvent,
} from "../index";

describe(`utils`, () => {
  describe(`triggerEvent`, () => {
    before(() => {
      global.google = {maps};
    });

    after(() => {
      delete global.google;
    });

    context(`when instance is mounted`, () => {
      it(`should call google.maps.event.trigger`, (done) => {
        const triggerSpy = expect.spyOn(maps.event, `trigger`);
        expect(triggerSpy).toNotHaveBeenCalled();

        function ref (component) {
          triggerEvent(component, `resize`);
          expect(triggerSpy).toHaveBeenCalled();

          triggerSpy.restore();
          done();
        }
      
        render((
          <GoogleMapLoader
            containerElement={<div/>}
            googleMapElement={<GoogleMap ref={ref} />}
          />
        ), document.createElement(`div`));
      });
    });
  });
});

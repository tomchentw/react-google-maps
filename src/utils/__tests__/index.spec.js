import {
  default as expect,
} from "expect";

import {
  default as React,
} from "react";

import {
  render,
} from "react-dom";

import * as maps from "../../__mocks__/google.maps.mock";

import {
  GoogleMapLoader,
  GoogleMap,
} from "../../index";

import {
  triggerEvent,
} from "../index";

describe(`utils`, () => {
  describe(`triggerEvent`, () => {
    before(() => {
      global.google = { maps };
    });

    after(() => {
      delete global.google;
    });

    context(`when instance is mounted`, () => {
      it(`should call google.maps.event.trigger`, (done) => {
        const triggerSpy = expect.spyOn(maps.event, `trigger`);
        expect(triggerSpy).toNotHaveBeenCalled();

        function ref(component) {
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

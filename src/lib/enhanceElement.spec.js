import PropTypes from 'prop-types';
import _ from 'lodash';

import {
    removeDefaultPrefix,
    addDefaultPrefixToPropTypes,
    collectProps,
    collectUncontrolledAndControlledProps,
} from './enhanceElement';

describe(`enhanceElement`, () => {

  it(`should remove the default prefix from the defaultCenter key and lowercase the key`, () => {

    const expected = `center`;
    const defaultKey = `defaultCenter`;

    const actual = removeDefaultPrefix(defaultKey)
    expect(actual).toEqual(expected)
  });

  it(`should remove the default prefix from the defaultZoom key and lowercase the key`, () => {

    const expected = `zoom`;
    const defaultKey = `defaultZoom`;

    const actual = removeDefaultPrefix(defaultKey)
    expect(actual).toEqual(expected)
  });

  it(`should add the default prefix to the center propType`, () => {

    const expected = true;

    const propTypes = {
      center: PropTypes.object,
    };

    const propTypesWithDefaultPrefix = addDefaultPrefixToPropTypes(propTypes)

    const actual = _.has(propTypesWithDefaultPrefix, `defaultCenter`);
    expect(actual).toEqual(expected)
  });

  it(`should add the default prefix to all propTypes`, () => {

    const expected = true
    const propTypes = {
      center: PropTypes.object,
      heading: PropTypes.number,
      mapTypeId: PropTypes.any,
      options: PropTypes.object,
      streetView: PropTypes.any,
      tilt: PropTypes.number,
      zoom: PropTypes.number,
    };

    const propTypesWithDefaultPrefix = addDefaultPrefixToPropTypes(propTypes)

    Object.keys(propTypesWithDefaultPrefix).forEach(key => {
      const actual = key.startsWith(`default`);
      expect(actual).toEqual(expected)
    })

  });

  it(`should persist ONLY the props that matched`, () => {

    const expected = {
      defaultCenter: {
        lat: -25.363882,
        lng: 131.044922,
      },
    }

    const propTypes = {
      defaultCenter: PropTypes.object,
      heading: PropTypes.number,
      mapTypeId: PropTypes.any,
      options: PropTypes.object,
      streetView: PropTypes.any,
      tilt: PropTypes.number,
    };

    const keyTransform = _.identity;
    const props = {
      defaultCenter: {
        lat: -25.363882,
        lng: 131.044922,
      },
      defaultZoom: 3,
      onClick() { },
      children: [{}],
    }

    const actual = collectProps(propTypes, props, keyTransform);
    expect(actual).toEqual(expected);
  });

  it(`should collect both uncontrolled and controlled props when calling collectUncontrolledAndControlledProps`, () => {

    const expected = {
      center: {
        lat: -25.363882,
        lng: 131.044922,
      },
      zoom: 3,
    }

    const defaultUncontrolledPropTypes = {
      defaultCenter: PropTypes.object,
      defaultHeading: PropTypes.number,
      defaultMapTypeId: PropTypes.any,
      defaultOptions: PropTypes.object,
      defaultStreetView: PropTypes.any,
      defaultTilt: PropTypes.number,
      defaultZoom: PropTypes.number,
    };

    const controlledPropTypes = {
      center: PropTypes.object,
      heading: PropTypes.number,
      mapTypeId: PropTypes.any,
      options: PropTypes.object,
      streetView: PropTypes.any,
      tilt: PropTypes.number,
      zoom: PropTypes.number,
    };

    const props = {
      defaultCenter: {
        lat: -25.363882,
        lng: 131.044922,
      },
      defaultZoom: 3,
      onClick() { },
      children: [{}],
    }

    const actual = collectUncontrolledAndControlledProps(defaultUncontrolledPropTypes, controlledPropTypes, props);
    expect(actual).toEqual(expected);
  });

});

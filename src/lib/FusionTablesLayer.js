/* global google */
import _ from "lodash";

import PropTypes from "prop-types";

import createReactClass from "create-react-class";

import {
    MAP,
    FUSION_TABLES_LAYER,
} from "./constants";

import {
    addDefaultPrefixToPropTypes,
    collectUncontrolledAndControlledProps,
    default as enhanceElement,
} from "./enhanceElement";

const controlledPropTypes = {
    // NOTICE!!!!!!
    //
    // Only expose those with getters & setters in the table as controlled props.
    //
    // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
    options: PropTypes.object,
}

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    onClick: `click`,
};

const publicMethodMap = {
    // Public APIs
    //
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
    //
    // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
    //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
    // END - Public APIs
}

const controlledPropUpdaterMap = {
    options(fusionTablesLayer, options) { fusionTablesLayer.setOptions(options); },
};

function getInstanceFromComponent(component) {
    return component.state[FUSION_TABLES_LAYER];
}

export default _.flowRight(
    createReactClass,
    enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
    displayName: `FusionTablesLayer`,

    propTypes: {
        ...controlledPropTypes,
        ...defaultUncontrolledPropTypes,
    },

    contextTypes: {
        [MAP]: PropTypes.object,
    },

    getInitialState() {
        const fusionTablesLayer = new google.maps.FusionTablesLayer({
            map: this.context[MAP],
            ...collectUncontrolledAndControlledProps(
                defaultUncontrolledPropTypes,
                controlledPropTypes,
                this.props
            ),
        });

        return {
            [FUSION_TABLES_LAYER]: fusionTablesLayer,
        };
    },

    componentWillUnmount() {
        const fusionTablesLayer = getInstanceFromComponent(this);
        if (fusionTablesLayer) {
            fusionTablesLayer.setMap(null);
        }
    },

    render() {
        return false;
    },
});
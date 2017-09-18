/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, GROUND_LAYER } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
    "onDblClick": "dblclick"
  },
  "getInstanceFromComponent": "this.state[GROUND_LAYER]"
}`

/**
 * @url https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
 */
export class GroundOverlay extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
    /**
     * @type string
     */
    url: PropTypes.string.isRequired,

    /**
     * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
     */
    bounds: PropTypes.object.isRequired,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
   */
  constructor(props, context) {
    super(props, context)
    const groundOverlay = new google.maps.GroundOverlay(props.url, props.bounds)
    construct(GroundOverlay.propTypes, updaterMap, this.props, groundOverlay)
    groundOverlay.setMap(this.context[MAP])
    this.state = {
      [GROUND_LAYER]: groundOverlay,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[GROUND_LAYER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[GROUND_LAYER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const GroundOverlay = this.state[GROUND_LAYER]
    if (GroundOverlay) {
      GroundOverlay.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default GroundOverlay

const eventMap = {}

const updaterMap = {}

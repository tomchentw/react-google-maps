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

/**
 * @url https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
 */
export class GroundOverlay extends React.PureComponent {
  static propTypes = {
    /**
     * @type string
     */
    url: PropTypes.string.isRequired,

    /**
     * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
     */
    bounds: PropTypes.object.isRequired,

    /**
     * @type number
     */
    defaultOpacity: PropTypes.number,

    /**
     * @type number
     */
    opacity: PropTypes.number,

    /**
     * function
     */
    onDblClick: PropTypes.func,

    /**
     * function
     */
    onClick: PropTypes.func,
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

  /**
   * Gets the LatLngBounds of this overlay.
   * @type LatLngBoundsLatLngBounds
   * @public 
   */
  getBounds() {
    return this.state[GROUND_LAYER].getBounds()
  }

  /**
   * Returns the opacity of this ground overlay.
   * @type number
   * @public 
   */
  getOpacity() {
    return this.state[GROUND_LAYER].getOpacity()
  }

  /**
   * Gets the url of the projected image.
   * @type string
   * @public 
   */
  getUrl() {
    return this.state[GROUND_LAYER].getUrl()
  }
}

export default GroundOverlay

const eventMap = {
  onDblClick: "dblclick",
  onClick: "click",
}

const updaterMap = {
  opacity(instance, opacity) {
    instance.setOpacity(opacity)
  },
}

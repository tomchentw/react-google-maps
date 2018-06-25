/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, TRANSIT_LAYER } from "../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[TRANSIT_LAYER]"
}`

/**
 * A wrapper around `google.maps.TransitLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TransitLayer
 */
export class TransitLayer extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TransitLayer
   */
  constructor(props, context) {
    super(props, context)
    const transitLayer = new google.maps.TransitLayer()
    construct(TransitLayer.propTypes, updaterMap, this.props, transitLayer)
    transitLayer.setMap(this.context[MAP])
    this.state = {
      [TRANSIT_LAYER]: transitLayer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[TRANSIT_LAYER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[TRANSIT_LAYER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const transitLayer = this.state[TRANSIT_LAYER]
    if (transitLayer) {
      transitLayer.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default TransitLayer

const eventMap = {}

const updaterMap = {}

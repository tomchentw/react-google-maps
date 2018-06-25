/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, TRAFFIC_LAYER } from "../constants"

/**
 * A wrapper around `google.maps.TransitLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TransitLayer
 */
export class TransitLayer extends React.PureComponent {
  static propTypes = {
    /**
     * @type TransitLayerOptions
     */
    defaultOptions: PropTypes.any,

    /**
     * @type TransitLayerOptions
     */
    options: PropTypes.any,
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
      [TRAFFIC_LAYER]: transitLayer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[TRAFFIC_LAYER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[TRAFFIC_LAYER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const transitLayer = this.state[TRAFFIC_LAYER]
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

const updaterMap = {
  options(instance, options) {
    instance.setOptions(options)
  },
}

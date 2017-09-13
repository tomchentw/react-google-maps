/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, HEATMAP_LAYER } from "../../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[HEATMAP_LAYER]"
}`

/**
 * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
 */
export class HeatmapLayer extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  /*
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
   */
  constructor(props, context) {
    super(props, context)
    const heatmapLayer = new google.maps.visualization.HeatmapLayer()
    construct(HeatmapLayer.propTypes, updaterMap, this.props, heatmapLayer)
    heatmapLayer.setMap(this.context[MAP])
    this.state = {
      [HEATMAP_LAYER]: heatmapLayer,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[HEATMAP_LAYER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[HEATMAP_LAYER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const heatmapLayer = this.state[HEATMAP_LAYER]
    if (heatmapLayer) {
      heatmapLayer.setMap(null)
    }
  }

  render() {
    return false
  }
}

export default HeatmapLayer

const eventMap = {}

const updaterMap = {}

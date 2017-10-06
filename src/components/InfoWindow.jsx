/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
import invariant from "invariant"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, ANCHOR, INFO_WINDOW } from "../constants"

/**
 * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
 */
export class InfoWindow extends React.PureComponent {
  static propTypes = {
    /**
     * @type InfoWindowOptions
     */
    defaultOptions: PropTypes.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    defaultPosition: PropTypes.any,

    /**
     * @type number
     */
    defaultZIndex: PropTypes.number,

    /**
     * @type InfoWindowOptions
     */
    options: PropTypes.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    position: PropTypes.any,

    /**
     * @type number
     */
    zIndex: PropTypes.number,

    /**
     * function
     */
    onCloseClick: PropTypes.func,

    /**
     * function
     */
    onDomReady: PropTypes.func,

    /**
     * function
     */
    onContentChanged: PropTypes.func,

    /**
     * function
     */
    onPositionChanged: PropTypes.func,

    /**
     * function
     */
    onZindexChanged: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
    [ANCHOR]: PropTypes.object,
  }

  /*
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
   */
  constructor(props, context) {
    super(props, context)
    const infoWindow = new google.maps.InfoWindow()
    construct(InfoWindow.propTypes, updaterMap, this.props, infoWindow)
    infoWindow.setMap(this.context[MAP])
    this.state = {
      [INFO_WINDOW]: infoWindow,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[INFO_WINDOW], eventMap)
    const content = document.createElement(`div`)
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      React.Children.only(this.props.children),
      content
    )
    this.state[INFO_WINDOW].setContent(content)
    open(this.state[INFO_WINDOW], this.context[ANCHOR])
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[INFO_WINDOW],
      eventMap,
      updaterMap,
      prevProps
    )
    if (this.props.children !== prevProps.children) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        React.Children.only(this.props.children),
        this.state[INFO_WINDOW].getContent()
      )
    }
    open(this.state[INFO_WINDOW], this.context[ANCHOR])
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const infoWindow = this.state[INFO_WINDOW]
    if (infoWindow) {
      if (infoWindow.getContent()) {
        ReactDOM.unmountComponentAtNode(infoWindow.getContent())
      }
      infoWindow.setMap(null)
    }
  }

  render() {
    return false
  }

  /**
   * 
   * @type LatLng
   * @public 
   */
  getPosition() {
    return this.state[INFO_WINDOW].getPosition()
  }

  /**
   * 
   * @type number
   * @public 
   */
  getZIndex() {
    return this.state[INFO_WINDOW].getZIndex()
  }
}

export default InfoWindow

const open = (infoWindow, anchor) => {
  if (anchor) {
    infoWindow.open(infoWindow.getMap(), anchor)
  } else if (infoWindow.getPosition()) {
    infoWindow.open(infoWindow.getMap())
  } else {
    invariant(
      false,
      `You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.`
    )
  }
}

const eventMap = {
  onCloseClick: "closeclick",
  onDomReady: "domready",
  onContentChanged: "content_changed",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed",
}

const updaterMap = {
  options(instance, options) {
    instance.setOptions(options)
  },

  position(instance, position) {
    instance.setPosition(position)
  },

  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex)
  },
}

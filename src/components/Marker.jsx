/* global google */
import React from "react"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../utils/MapChildHelper"

import { MAP, MARKER, ANCHOR, MARKER_CLUSTERER } from "../constants"

/**
 * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
export class Marker extends React.PureComponent {
  static propTypes = {
    /**
     * For the 2nd argument of `MarkerCluster#addMarker`
     * @see https://github.com/mikesaidani/marker-clusterer-plus
     */
    noRedraw: PropTypes.bool,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    markerWithLabel: PropTypes.func,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelClass: PropTypes.string,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelAnchor: PropTypes.object,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelContent: PropTypes.string,

    /**
     * For `MarkerWithLabel`
     * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
     */
    labelStyle: PropTypes.object,

    /**
     * @type Animation
     */
    defaultAnimation: PropTypes.any,

    /**
     * @type boolean
     */
    defaultClickable: PropTypes.bool,

    /**
     * @type string
     */
    defaultCursor: PropTypes.string,

    /**
     * @type boolean
     */
    defaultDraggable: PropTypes.bool,

    /**
     * @type string|Icon|Symbol
     */
    defaultIcon: PropTypes.any,

    /**
     * @type string|MarkerLabel
     */
    defaultLabel: PropTypes.any,

    /**
     * @type number
     */
    defaultOpacity: PropTypes.number,

    /**
     * @type MarkerOptions
     */
    defaultOptions: PropTypes.any,

    /**
     * @type MarkerPlace
     */
    defaultPlace: PropTypes.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    defaultPosition: PropTypes.any,

    /**
     * @type MarkerShape
     */
    defaultShape: PropTypes.any,

    /**
     * @type string
     */
    defaultTitle: PropTypes.string,

    /**
     * @type boolean
     */
    defaultVisible: PropTypes.bool,

    /**
     * @type number
     */
    defaultZIndex: PropTypes.number,

    /**
     * @type Animation
     */
    animation: PropTypes.any,

    /**
     * @type boolean
     */
    clickable: PropTypes.bool,

    /**
     * @type string
     */
    cursor: PropTypes.string,

    /**
     * @type boolean
     */
    draggable: PropTypes.bool,

    /**
     * @type string|Icon|Symbol
     */
    icon: PropTypes.any,

    /**
     * @type string|MarkerLabel
     */
    label: PropTypes.any,

    /**
     * @type number
     */
    opacity: PropTypes.number,

    /**
     * @type MarkerOptions
     */
    options: PropTypes.any,

    /**
     * @type MarkerPlace
     */
    place: PropTypes.any,

    /**
     * @type LatLng|LatLngLiteral
     */
    position: PropTypes.any,

    /**
     * @type MarkerShape
     */
    shape: PropTypes.any,

    /**
     * @type string
     */
    title: PropTypes.string,

    /**
     * @type boolean
     */
    visible: PropTypes.bool,

    /**
     * @type number
     */
    zIndex: PropTypes.number,

    /**
     * function
     */
    onDblClick: PropTypes.func,

    /**
     * function
     */
    onDragEnd: PropTypes.func,

    /**
     * function
     */
    onDragStart: PropTypes.func,

    /**
     * function
     */
    onMouseDown: PropTypes.func,

    /**
     * function
     */
    onMouseOut: PropTypes.func,

    /**
     * function
     */
    onMouseOver: PropTypes.func,

    /**
     * function
     */
    onMouseUp: PropTypes.func,

    /**
     * function
     */
    onRightClick: PropTypes.func,

    /**
     * function
     */
    onAnimationChanged: PropTypes.func,

    /**
     * function
     */
    onClick: PropTypes.func,

    /**
     * function
     */
    onClickableChanged: PropTypes.func,

    /**
     * function
     */
    onCursorChanged: PropTypes.func,

    /**
     * function
     */
    onDrag: PropTypes.func,

    /**
     * function
     */
    onDraggableChanged: PropTypes.func,

    /**
     * function
     */
    onFlatChanged: PropTypes.func,

    /**
     * function
     */
    onIconChanged: PropTypes.func,

    /**
     * function
     */
    onPositionChanged: PropTypes.func,

    /**
     * function
     */
    onShapeChanged: PropTypes.func,

    /**
     * function
     */
    onTitleChanged: PropTypes.func,

    /**
     * function
     */
    onVisibleChanged: PropTypes.func,

    /**
     * function
     */
    onZindexChanged: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
    [MARKER_CLUSTERER]: PropTypes.object,
  }

  static childContextTypes = {
    [ANCHOR]: PropTypes.object,
  }

  /*
   * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  constructor(props, context) {
    super(props, context)
    const GMKlass = this.props.markerWithLabel || google.maps.Marker
    const marker = new GMKlass()
    construct(Marker.propTypes, updaterMap, this.props, marker)
    const markerClusterer = this.context[MARKER_CLUSTERER]
    if (markerClusterer) {
      markerClusterer.addMarker(marker, !!this.props.noRedraw)
    } else {
      marker.setMap(this.context[MAP])
    }
    this.state = {
      [MARKER]: marker,
    }
  }

  getChildContext() {
    return {
      [ANCHOR]: this.context[ANCHOR] || this.state[MARKER],
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[MARKER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[MARKER],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const marker = this.state[MARKER]
    if (marker) {
      const markerClusterer = this.context[MARKER_CLUSTERER]
      if (markerClusterer) {
        markerClusterer.removeMarker(marker, !!this.props.noRedraw)
      }
      marker.setMap(null)
    }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }

  /**
   * 
   * @type Animation
   */
  getAnimation() {
    return this.state[MARKER].getAnimation()
  }

  /**
   * 
   * @type boolean
   */
  getClickable() {
    return this.state[MARKER].getClickable()
  }

  /**
   * 
   * @type string
   */
  getCursor() {
    return this.state[MARKER].getCursor()
  }

  /**
   * 
   * @type boolean
   */
  getDraggable() {
    return this.state[MARKER].getDraggable()
  }

  /**
   * 
   * @type string|Icon|Symbol
   */
  getIcon() {
    return this.state[MARKER].getIcon()
  }

  /**
   * 
   * @type MarkerLabel
   */
  getLabel() {
    return this.state[MARKER].getLabel()
  }

  /**
   * 
   * @type number
   */
  getOpacity() {
    return this.state[MARKER].getOpacity()
  }

  /**
   * 
   * @type MarkerPlace
   */
  getPlace() {
    return this.state[MARKER].getPlace()
  }

  /**
   * 
   * @type LatLng
   */
  getPosition() {
    return this.state[MARKER].getPosition()
  }

  /**
   * 
   * @type MarkerShape
   */
  getShape() {
    return this.state[MARKER].getShape()
  }

  /**
   * 
   * @type string
   */
  getTitle() {
    return this.state[MARKER].getTitle()
  }

  /**
   * 
   * @type boolean
   */
  getVisible() {
    return this.state[MARKER].getVisible()
  }

  /**
   * 
   * @type number
   */
  getZIndex() {
    return this.state[MARKER].getZIndex()
  }
}

export default Marker

const eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed",
}

const updaterMap = {
  /*
   * @see https://github.com/printercu/google-maps-utility-library-v3-read-only/blob/master/markerwithlabel/src/markerwithlabel.js
   */
  labelContent(instance, labelContent) {
    instance.set(`labelContent`, labelContent)
  },

  animation(instance, animation) {
    instance.setAnimation(animation)
  },

  clickable(instance, clickable) {
    instance.setClickable(clickable)
  },

  cursor(instance, cursor) {
    instance.setCursor(cursor)
  },

  draggable(instance, draggable) {
    instance.setDraggable(draggable)
  },

  icon(instance, icon) {
    instance.setIcon(icon)
  },

  label(instance, label) {
    instance.setLabel(label)
  },

  opacity(instance, opacity) {
    instance.setOpacity(opacity)
  },

  options(instance, options) {
    instance.setOptions(options)
  },

  place(instance, place) {
    instance.setPlace(place)
  },

  position(instance, position) {
    instance.setPosition(position)
  },

  shape(instance, shape) {
    instance.setShape(shape)
  },

  title(instance, title) {
    instance.setTitle(title)
  },

  visible(instance, visible) {
    instance.setVisible(visible)
  },

  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex)
  },
}

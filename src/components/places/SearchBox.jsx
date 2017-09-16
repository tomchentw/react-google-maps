/* global google */
import _ from "lodash"
import canUseDOM from "can-use-dom"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, SEARCH_BOX } from "../../constants"

/**
 * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
export class SearchBox extends React.PureComponent {
  static propTypes = {
    /**
     * Where to put `<SearchBox>` inside a `<GoogleMap>`
     *
     * @example google.maps.ControlPosition.TOP_LEFT
     * @type number
     */
    controlPosition: PropTypes.number,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    defaultBounds: PropTypes.any,

    /**
     * @type LatLngBounds|LatLngBoundsLiteral
     */
    bounds: PropTypes.any,

    /**
     * function
     */
    onPlacesChanged: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  state = {
    [SEARCH_BOX]: null,
  }

  componentWillMount() {
    if (!canUseDOM || this.containerElement) {
      return
    }
    this.containerElement = document.createElement(`div`)
    this.handleRenderChildToContainerElement()
    /*
     * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
     */
    const searchBox = new google.maps.places.SearchBox(
      this.containerElement.firstChild
    )
    construct(SearchBox.propTypes, updaterMap, this.props, searchBox)
    this.setState({
      [SEARCH_BOX]: searchBox,
    })
  }

  componentDidMount() {
    componentDidMount(this, this.state[SEARCH_BOX], eventMap)
    this.handleMountAtControlPosition()
  }

  componentWillUpdate(nextProp) {
    if (this.props.controlPosition !== nextProp.controlPosition) {
      this.handleUnmountAtControlPosition()
    }
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[SEARCH_BOX],
      eventMap,
      updaterMap,
      prevProps
    )
    if (this.props.children !== prevProps.children) {
      this.handleRenderChildToContainerElement()
    }
    if (this.props.controlPosition !== prevProps.controlPosition) {
      this.handleMountAtControlPosition()
    }
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    this.handleUnmountAtControlPosition()
    if (this.containerElement) {
      ReactDOM.unmountComponentAtNode(this.containerElement)
      this.containerElement = null
    }
  }

  handleRenderChildToContainerElement() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      React.Children.only(this.props.children),
      this.containerElement
    )
  }

  handleMountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      this.mountControlIndex =
        -1 +
        this.context[MAP].controls[this.props.controlPosition].push(
          this.containerElement.firstChild
        )
    }
  }

  handleUnmountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      const child = this.context[MAP].controls[
        this.props.controlPosition
      ].removeAt(this.mountControlIndex)
      this.containerElement.appendChild(child)
    }
  }

  render() {
    return false
  }

  /**
   * Returns the bounds to which query predictions are biased.
   * @type LatLngBounds
   */
  getBounds() {
    return this.state[SEARCH_BOX].getBounds()
  }

  /**
   * Returns the query selected by the user, or null if no places have been found yet, to be used with places_changed event.
   * @type Array<PlaceResult>nullplaces_changed
   */
  getPlaces() {
    return this.state[SEARCH_BOX].getPlaces()
  }
}

export default SearchBox

const isValidControlPosition = _.isNumber

const eventMap = {
  onPlacesChanged: "places_changed",
}

const updaterMap = {
  bounds(instance, bounds) {
    instance.setBounds(bounds)
  },
}

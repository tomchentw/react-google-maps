/* global google */
import _ from "lodash"
import canUseDOM from "can-use-dom"
import invariant from "invariant"
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

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[SEARCH_BOX]"
}`

/**
 * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
export class SearchBox extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
    controlPosition: PropTypes.number,
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
      invariant(
        this.context[MAP],
        `If you're using <SearchBox> with controlPosition, please put it as a child of a <GoogleMap> component.`
      )
      this.mountControlIndex =
        this.context[MAP].controls[this.props.controlPosition].push(
          this.containerElement.firstChild
        ) - 1
    }
  }

  handleUnmountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      invariant(
        this.context[MAP],
        `If you're using <SearchBox> with controlPosition, please put it as a child of a <GoogleMap> component.`
      )
      const child = this.context[MAP].controls[
        this.props.controlPosition
      ].removeAt(this.mountControlIndex)
      this.containerElement.appendChild(child)
    }
  }

  render() {
    return false
  }
}

export default SearchBox

const isValidControlPosition = _.isNumber

const eventMap = {}

const updaterMap = {}

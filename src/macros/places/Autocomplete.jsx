/* global google */
import _ from "lodash"
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import * as helpers from "../../utils/AutocompleteHelper"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, AUTO_COMPLETE } from "../../constants"
import invariant from "invariant"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[AUTO_COMPLETE]"
}`

/**
 * A wrapper around `google.maps.places.Autocomplete` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#Autocomplete
 */
export class Autocomplete extends React.PureComponent {
  static propTypes = {
    __jscodeshiftPlaceholder__: null,
    /**
     * Where to put `<Autocomplete>` inside a `<GoogleMap>`
     *
     * @example google.maps.ControlPosition.TOP_LEFT
     * @type number
     */
    controlPosition: PropTypes.number,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  state = {
    [AUTO_COMPLETE]: null,
  }

  componentWillMount() {
    invariant(
      google.maps.places,
      `Did you include "libraries=places" in the URL?`
    )

    this.handleInitializeAutoComplete()
  }

  componentDidMount() {
    let autoComplete = this.state[AUTO_COMPLETE]

    componentDidMount(this, autoComplete, eventMap)
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
      this.state[AUTO_COMPLETE],
      eventMap,
      updaterMap,
      prevProps
    )
    if (this.props.controlPosition !== prevProps.controlPosition) {
      this.handleMountAtControlPosition()
    }
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    this.handleUnmountAtControlPosition()
    if (React.version.match(/^16/)) {
      return
    }
    if (this.containerElement) {
      ReactDOM.unmountComponentAtNode(this.containerElement)
      this.containerElement = null
    }
  }

  handleInitializeAutoComplete() {
    this.containerElement = helpers.createInputElement(this.props)

    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Autocomplete
     */
    const autocomplete = new google.maps.places.Autocomplete(
      this.containerElement,
      this.props.options
    )
    construct(Autocomplete.propTypes, updaterMap, this.props, autocomplete)

    this.setState({
      [AUTO_COMPLETE]: autocomplete,
    })

    return autocomplete
  }

  handleMountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      this.mountControlIndex = helpers.mountInputElementToControlPositionOnMap(
        this.containerElement,
        this.props.controlPosition,
        this.context[MAP]
      )
    }
  }

  handleUnmountAtControlPosition() {
    if (isValidControlPosition(this.props.controlPosition)) {
      helpers.unmountInputElementFromControlPositionOnMap(
        this.mountControlIndex,
        this.props.controlPosition,
        this.context[MAP]
      )
    }
  }

  render() {
    if (React.version.match(/^16/)) {
      return ReactDOM.createPortal(
        React.Children.only(this.props.children),
        this.containerElement
      )
    }
    return false
  }
}

export default Autocomplete

const isValidControlPosition = _.isNumber

const eventMap = {}

const updaterMap = {}

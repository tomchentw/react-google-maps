/* global google */
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { SEARCH_BOX } from "../../constants"

export const __jscodeshiftPlaceholder__ = `{
  "eventMapOverrides": {
  },
  "getInstanceFromComponent": "this.state[SEARCH_BOX]"
}`

/**
 * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
class SearchBox extends React.PureComponent {
  static displayName = "StandaloneSearchBox"

  static propTypes = {
    __jscodeshiftPlaceholder__: null,
  }

  state = {
    [SEARCH_BOX]: null,
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this)
    /*
     * @url https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
     */
    const searchBox = new google.maps.places.SearchBox(element)
    construct(SearchBox.propTypes, updaterMap, this.props, searchBox)

    componentDidMount(this, searchBox, eventMap)
    this.setState({
      [SEARCH_BOX]: searchBox,
    })
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[SEARCH_BOX],
      eventMap,
      updaterMap,
      prevProps
    )
  }

  componentWillUnmount() {
    componentWillUnmount(this)
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export const StandaloneSearchBox = SearchBox

export default StandaloneSearchBox

const eventMap = {}

const updaterMap = {}

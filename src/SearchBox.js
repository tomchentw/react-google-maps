import {
  default as React,
  Component,
  findDOMNode
} from "react";

import {
  default as SearchBoxCreator,
  searchBoxDefaultPropTypes,
  searchBoxControlledPropTypes,
  searchBoxEventPropTypes
} from "./creators/SearchBoxCreator";

/*
 * Original author: @eyebraus
 * Original PR: https://github.com/tomchentw/react-google-maps/pull/110 
 */
export default class SearchBox extends Component {
  static propTypes = {
    // Uncontrolled default[props] - used only in componentDidMount
    ...searchBoxDefaultPropTypes,
    // Controlled [props] - used in componentDidMount/componentDidUpdate
    ...searchBoxControlledPropTypes,
    // Event [onEventName]
    ...searchBoxEventPropTypes,
  }

  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; }).filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getBounds () { return this.state.searchBox.getBounds(); }

  getPlaces () { return this.state.searchBox.getPlaces(); }
  // END - Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox

  state = {}

  componentDidMount () {
    const {mapHolderRef, classes, style, ...searchBoxProps} = this.props;

    // Cannot create input via component - Google Maps will mess with React's internal state by detaching/attaching.
    // Allow developers to style the "hidden element" via inputClasses.
    let domEl = document.createElement("input");
    domEl.className = classes;
    domEl.type = "text";

    for (var propKey in style) {
      if (style.hasOwnProperty(propKey)) {
        domEl.style[propKey] = style[propKey];
      }
    }

    const searchBox = SearchBoxCreator._createSearchBox(domEl, searchBoxProps);

    this.setState({
      inputElement: domEl,
      searchBox: searchBox,
    });
  }

  render () {
    const {mapHolderRef, controlPosition} = this.props;

    return this.state.searchBox ? (
      <SearchBoxCreator controlPosition={controlPosition} inputElement={this.state.inputElement} mapHolderRef={mapHolderRef} searchBox={this.state.searchBox} {...this.props}>
        {this.props.children}
      </SearchBoxCreator>
    ) : (<noscript />);
  }
}

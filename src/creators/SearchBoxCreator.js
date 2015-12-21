import {
  default as React,
  PropTypes,
  Component,
} from "react";

import { default as SearchBoxEventList } from "../eventLists/SearchBoxEventList";
import { default as eventHandlerCreator } from "../utils/eventHandlerCreator";
import { default as defaultPropsCreator } from "../utils/defaultPropsCreator";
import { default as composeOptions } from "../utils/composeOptions";
import { default as componentLifecycleDecorator } from "../utils/componentLifecycleDecorator";

import { default as GoogleMapHolder } from "./GoogleMapHolder";

export const searchBoxControlledPropTypes = {
// NOTICE!!!!!!
//
// Only expose those with getters & setters in the table as controlled props.
//
  bounds: PropTypes.any,
};

export const searchBoxDefaultPropTypes = defaultPropsCreator(searchBoxControlledPropTypes);

const searchBoxUpdaters = {
  bounds(bounds, component) { component.getSearchBox().setBounds(bounds); },
};

const { eventPropTypes, registerEvents } = eventHandlerCreator(SearchBoxEventList);

export const searchBoxEventPropTypes = eventPropTypes;

@componentLifecycleDecorator({
  registerEvents,
  instanceMethodName: `getSearchBox`,
  updaters: searchBoxUpdaters,
})
export default class SearchBoxCreator extends Component {

  static propTypes = {
    mapHolderRef: PropTypes.instanceOf(GoogleMapHolder).isRequired,
    searchBox: PropTypes.object.isRequired,
  }

  static _createSearchBox(inputElement, searchBoxProps) {
    const searchBox = new google.maps.places.SearchBox(inputElement, composeOptions(searchBoxProps, searchBoxControlledPropTypes));

    return searchBox;
  }

  componentDidMount() {
    this._mountComponentToMap(this.props.controlPosition);
  }

  componentDidUpdate(prevProps) {
    if (this.props.controlPosition !== prevProps.controlPosition) {
      this._unmountComponentFromMap(prevProps.controlPosition);
      this._mountComponentToMap(this.props.controlPosition);
    }
  }

  componentWillUnmount() {
    this._unmountComponentFromMap(this.props.controlPosition);
  }

  _mountComponentToMap(controlPosition) {
    const { mapHolderRef, inputElement } = this.props;

    mapHolderRef.getMap().controls[controlPosition].push(inputElement);
  }

  _unmountComponentFromMap(controlPosition) {
    const { mapHolderRef, inputElement } = this.props;

    const index = mapHolderRef.getMap().controls[controlPosition].getArray().indexOf(inputElement);
    mapHolderRef.getMap().controls[controlPosition].removeAt(index);
  }

  getSearchBox() {
    return this.props.searchBox;
  }

  render() {
    return (<noscript />);
  }
}

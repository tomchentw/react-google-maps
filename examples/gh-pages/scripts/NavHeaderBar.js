import React from "react";
import {GoogleMaps, Marker, Polyline, Polygon, InfoWindow} from "react-google-maps";
import cx from "classnames";

const {PropTypes} = React;

const actionPropType = PropTypes.shape({
        key: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      });
const actionsArrayType = PropTypes.arrayOf(actionPropType).isRequired;

function noop () {}

class NavHeaderBar extends React.Component {

  constructor (props, ...restArgs) {
    super({
      onNavigateTo: noop,
      actions: [],
      dropdownActions: [],
      rightActions: [],
      ...props,
    }, ...restArgs);
    this.state = {
      dropdownOpen: false,
    };
  }

  _handle_click () {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }

  _handle_navigate (action, event) {
    event.stopPropagation();
    this.props.onNavigateTo(action);
    this.setState({dropdownOpen: false});
  }

  render () {
    const {props, state} = this,
          {activeActionKey} = props,
          dropdownClassSet = {dropdown: true};
    dropdownClassSet.open = state.dropdownOpen;

    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React Google Maps</a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="https://github.com/tomchentw" target="_blank">by @tomchentw</a></li>
              {props.actions.map(actionToMenuItem, this)}
              <li className={cx(dropdownClassSet)}>
                <a href="javascript:void(0);" className="dropdown-toggle" onClick={this._handle_click.bind(this)}>Samples <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  {props.dropdownActions.map(actionToMenuItem, this)}
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right" style={{marginRight:100}}>
              {props.rightActions.map(actionToMenuItem, this)}
            </ul>
          </div>
        </div>
      </nav>
    );

    function actionToMenuItem (action, index) {
      var classSet = {};
      if (false === action) {
        return (
          <li key={`divider_${index}`} className="divider"/>
        );
      } else {
        classSet.active = activeActionKey === action.key;

        return (
          <li key={action.key} className={cx(classSet)} onClick={this._handle_navigate.bind(this, action)}>
            <a href={action.path}>{action.displayName}</a>
          </li>
        );
      }
    }
  }

}

NavHeaderBar.propTypes = {
  activeActionKey: PropTypes.string.isRequired,
  onNavigateTo: PropTypes.func,
  actions: actionsArrayType,
  dropdownActions: PropTypes.arrayOf(
      PropTypes.oneOfType([actionPropType, PropTypes.bool])
    ),
  rightActions: actionsArrayType,
};

export default NavHeaderBar;

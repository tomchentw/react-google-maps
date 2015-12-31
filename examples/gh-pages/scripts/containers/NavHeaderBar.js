import {
  default as React,
  Component,
  PropTypes,
} from "react";

import { default as cx } from "classnames";

const actionPropType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
});
const actionsArrayType = PropTypes.arrayOf(actionPropType).isRequired;

function noop() {}

export default class NavHeaderBar extends Component {

  static propTypes = {
    activeActionKey: PropTypes.string.isRequired,
    onNavigateTo: PropTypes.func,
    actions: actionsArrayType,
    dropdownActions: PropTypes.arrayOf(
        PropTypes.oneOfType([actionPropType, PropTypes.bool])
      ),
    rightActions: actionsArrayType,
  };

  static defaultProps = {
    onNavigateTo: noop,
    actions: [],
    dropdownActions: [],
    rightActions: [],
  };

  state = {
    dropdownOpen: false,
  }

  _handle_click() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  _handle_navigate(action, event) {
    event.stopPropagation();
    this.props.onNavigateTo(action);
    this.setState({ dropdownOpen: false });
  }

  render() {
    const { props, state } = this;
    const { activeActionKey } = props;

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
              {renderDropdown.call(this)}
            </ul>
            <ul className="nav navbar-nav navbar-right" style={{ marginRight: 100 }}>
              {renderSyncAsyncLink()}
              {props.rightActions.map(actionToMenuItem, this)}
            </ul>
          </div>
        </div>
      </nav>
    );

    function renderDropdown() {
      const dropdownClassSet = { dropdown: true };
      dropdownClassSet.open = state.dropdownOpen;

      if (props.dropdownActions.length) {
        return (
          <li className={cx(dropdownClassSet)}>
            <a href="#" className="dropdown-toggle" onClick={::this._handle_click}>Samples <span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
              {props.dropdownActions.map(actionToMenuItem, this)}
            </ul>
          </li>
        );
      } else {
        return null;
      }
    }

    function renderSyncAsyncLink() {
      const isAsync = typeof window !== `undefined` && window.location.pathname.match(/async\//);

      return (
        <li>
          {
            isAsync ? (
              <a href="./">Back to Sync</a>
            ) : (
              <a href="async/">Async Example</a>
            )
          }
        </li>
      );
    }

    function actionToMenuItem(action, index) {
      const classSet = {};
      if (action === false) {
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

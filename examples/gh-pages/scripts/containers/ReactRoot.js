import {
  default as React,
  Component,
  PropTypes,
} from "react";

import {default as GitHubForkRibbon} from "react-github-fork-ribbon";
import {ToastContainer, ToastMessage} from "react-toastr";

import {default as NavHeaderBar} from "./NavHeaderBar";
import {default as ComponentPlayground} from "./ComponentPlayground";

require("../../styles/index.scss");

export default class ReactRoot extends Component {

  static propTypes = {
    ACTIONS: PropTypes.array.isRequired,
    ALL_ACTIONS: PropTypes.array.isRequired,
    DROPDOWN_ACTIONS: PropTypes.array.isRequired,
    RIGHT_ACTIONS: PropTypes.array.isRequired,
  }

  state = {
    action: this.props.ACTIONS[0],
  }

  componentWillMount () {
    var {action} = this.state;
    const hash = (
      "undefined" !== typeof window && location.hash || (
        // Server rendering polyfill
        action.path
      )
    );
    if (hash === action.path) {
      return;
    }
    action = this.props.ALL_ACTIONS.filter((action) => { return action.path === hash; })[0];
    this.setState({ action });
  }

  _handle_navigate (action) {
    this.setState({ action });
  }

  _handle_toast (title, message) {
    this.refs.toast.success(title, message);
  }

  render () {
    return (
      <div id="react-root">
        <NavHeaderBar
          activeActionKey={this.state.action.key}
          onNavigateTo={::this._handle_navigate}
          actions={this.props.ACTIONS}
          dropdownActions={this.props.DROPDOWN_ACTIONS}
          rightActions={this.props.RIGHT_ACTIONS}
        />
        <div className="container-fluid container--full-height">
          <GitHubForkRibbon
            position="right"
            color="black"
            href="https://github.com/tomchentw/react-google-maps">
            Fork me on GitHub
          </GitHubForkRibbon>
          <ToastContainer
            ref="toast"
            toastMessageFactory={React.createFactory(ToastMessage.animation)}
          />
          <ComponentPlayground
            className="row row--full-height"
            toast={::this._handle_toast}
            {...this.state.action.component}
          />
        </div>
      </div>
    );
  }
}

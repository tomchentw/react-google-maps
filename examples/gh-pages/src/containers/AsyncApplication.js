import {
  default as classNames,
} from "classnames";

import {
  default as React,
  Component,
  PropTypes,
  Children,
} from "react";

import {
  Navbar,
  Nav,
  NavItem,
} from "react-bootstrap";

import {
  default as GitHubForkRibbon,
} from "react-github-fork-ribbon";

import {
  ToastContainer,
  ToastMessage,
} from "react-toastr";

import {
  PrismCode,
} from "react-prism";

import {
  default as Helmet,
} from "react-helmet";

import {
  default as theme,
} from "./Application.css";

export default class AsyncApplication extends Component {

  static propTypes = {
    theme: PropTypes.shape({
      Application: PropTypes.string.isRequired,
      container: PropTypes.string.isRequired,
      row: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    theme: `locals` in theme ? theme.locals : theme, // Temp hack for injecting css-modules object in server side
  };

  _handle_toast(title, message) {
    this.refs.toast.success(title, message);
  }

  render() {
    const { theme } = this.props;

    return (
      <div className={theme.Application}>
        <Helmet
          title="Getting Started"
          titleTemplate="%s | Async | React Google Maps | tomchentw"
          // base={{
          //   "href": `/`,
          // }}
          meta={[
            { "name": `viewport`, "content": `width=device-width, initial-scale=1` },
            { "name": `description`, "content": `react-google-maps example application` },
            { "property": `og:type`, "content": `article` },
          ]}
        />
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Async | React Google Maps</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="https://github.com/tomchentw" target="_blank">by @tomchentw</NavItem>
            <NavItem href="../">Back to sync examples</NavItem>
          </Nav>
          <Navbar.Collapse style={{ marginRight: 100 }}>
            <Nav pullRight>
              <NavItem href="../">Back to sync examples</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={classNames(`container-fluid`, theme.container)}>
          <GitHubForkRibbon
            position="right"
            color="black"
            href="https://github.com/tomchentw/react-google-maps"
          >
            Fork me on GitHub
          </GitHubForkRibbon>
          <ToastContainer
            ref="toast"
            toastMessageFactory={React.createFactory(ToastMessage.animation)}
          />
          <div className={classNames(`row`, theme.row)}>
            <div className="col-xs-6" style={{ height: `100%` }}>
              {React.cloneElement(Children.only(this.props.children), {
                toast: ::this._handle_toast,
              })}
            </div>
            <div className="col-xs-6">
              <pre>
                <PrismCode className="language-jsx">
                  {Children.only(this.props.children).type.__raw}
                </PrismCode>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

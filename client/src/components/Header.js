import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    if (this.props.auth === null) {
      return;
    } else if (this.props.auth === false) {
      return (
        <li>
          <a href="/auth/google">Login with google</a>
        </li>
      );
    } else {
      return [
        <li key="1">
          <Payments />
        </li>,
        <li key="3" style={{ margin: "0 10px" }}>
          Credits:{this.props.auth.credits}
        </li>,
        <li key="2">
          <a href="/api/logout">Logout</a>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <BrowserRouter>
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
            >
              Survey
            </Link>
          </BrowserRouter>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);

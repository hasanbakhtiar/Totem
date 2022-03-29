import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <a
            href={this.props.url}
            target="_blank"
            className="ms-5 navbar-brand"
          >
            <i style={{"marginRight":"5px"}} className={this.props.icon} ></i>
            {this.props.title}
          </a>
        </nav>
      </div>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row">
          {this.props.usersvalue.map(user=>(
            <User user={user} />

          ))}
        </div>
      </div>
    );
  }
}

export default Users;

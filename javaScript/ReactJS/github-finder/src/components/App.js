import React, { Component } from 'react'
import Nav from './Nav';
import Search from './Search';
import Users from './Users';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state={
      users : []
    }
  }

  searchUsers(keyword){
      axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res=>this.setState({users:res.data.items}))
  }
  render() {
    return (
      <>
      <Nav title="Github" url="https://github.com" icon="fab fa-github" />
      <Search searchValue={this.searchUsers} />
      <Users usersvalue={this.state.users} />
      </>
    )
  }
}

export default App
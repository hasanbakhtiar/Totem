import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props);
    this.mySubmit = this.mySubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state={
      keyword: ""
    }
  }

  inputChange(e){
      this.setState({
        keyword: e.target.value
      })
  }

  mySubmit(e){
    e.preventDefault();
    this.props.searchValue(this.state.keyword);
    // console.log(this.state.keyword);

  }
  render() {
    return (
      <div>
        <form onSubmit={this.mySubmit}>
          <div className="container my-3">
            <div className="input-group">
              <input type="text" className="form-control" onChange={this.inputChange} />
              <div className="input-group-append">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </form>
   {/* <p>{this.state.keyword}</p> */}

      </div>
    )
  }
}

export default Search
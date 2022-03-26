import React, { Component } from 'react';

export class Counter extends Component {


    constructor(props){
        super(props);
        this.minusButton = this.minusButton.bind(this);
        this.plusButton = this.plusButton.bind(this);
        this.state={
            count:0
        }
    }

    minusButton(){
     if (this.state.count > 0) {
        this.setState({
            count: this.state.count - 1
        })
     }
    }

    plusButton(){
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div className='container mt-5'>
            <button className='btn btn-danger' onClick={this.minusButton}>-</button>
            <span className='me-3 ms-3'> {this.state.count}</span>
            <button className='btn btn-success' onClick={this.plusButton}>+</button>
      </div>
    )
  }
}

export default Counter
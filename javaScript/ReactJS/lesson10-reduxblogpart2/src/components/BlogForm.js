import React, { Component } from "react";

export default class BlogForm extends Component {
    constructor(props){
        super(props);
        this.onTesdiq=this.onTesdiq.bind(this);
        this.state={
            title:"",
            description:"",
            error:''
        }
    }
    onTesdiq=(e)=>{
        e.preventDefault();
        if (!this.state.title || !this.state.description) {
            this.setState({error:"xanalari doldurun"})
        }
    }
  render(){
    return (
        <div>
            {this.state.error && <p className="alert alert-danger">{this.state.error}</p>}
          <form onSubmit={this.onTesdiq}>
            <div className="mb-3">
              <label className="form-label">
                Title
              </label>
              <input
                className="form-control"
                placeholder="Title"

              />
            
            </div>
            <label className="form-label">
            Description
              </label>
            <div className="form-floating">
           
              <textarea
                className="form-control"
                placeholder="Description"
               
             
              />
              <label htmlFor="floatingTextarea2">Description</label>
            </div>
        
            <button type="submit" className=" mt-5 btn btn-primary">
             Save
            </button>
          </form>
        </div>
      );
  }
};


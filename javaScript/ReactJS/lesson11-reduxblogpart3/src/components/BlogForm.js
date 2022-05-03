import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.onTesdiq = this.onTesdiq.bind(this);
    this.state = {
      title: props.blog? props.blog.title:"",
      description:  props.blog? props.blog.description:"",
      error: "",
    };
  }
  onTitleChange=(e)=>{
      const title = e.target.value;
      this.setState(()=>({title}))
  }

  onDescriptionChange=(e)=>{
    const description = e.target.value;
    this.setState(()=>({description}))
}

  onTesdiq = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      this.setState({ error: "xanalari doldurun" });
    }else{
      this.setState({error:''});
      this.props.onSubmit({
        title:this.state.title,
        description:this.state.description,
      })
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="alert alert-danger">{this.state.error}</p>
        )}
        <form onSubmit={this.onTesdiq}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" value={this.state.title} onChange={this.onTitleChange} placeholder="Title" />
          </div>
          <label className="form-label">Description</label>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
            <label htmlFor="floatingTextarea2">Description</label>
          </div>

          <button type="submit" className=" mt-5 btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

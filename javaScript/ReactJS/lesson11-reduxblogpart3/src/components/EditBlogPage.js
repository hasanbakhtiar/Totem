import React from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import {removeBlog } from "../action/blog";

const EditBlogPage = (props) => {
  return (
    <div>
      <h1>Edit Blog</h1>
      <BlogForm blog = {props.blog} 
   
      />
      <button onClick={()=>{
          props.dispatch(removeBlog(props.blog.id))
          props.history.push('/blog')
      }}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.itema.find((b) => {
      return b.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);

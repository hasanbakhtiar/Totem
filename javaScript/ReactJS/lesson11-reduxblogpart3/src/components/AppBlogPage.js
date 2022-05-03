import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import { addBlog } from '../action/blog'

const AppBlogPage = (props) => {
  return (

    <div>
      <h1>Add Blog </h1>
      <BlogForm onSubmit={(blog)=>{
        props.dispatch(addBlog(blog));
        props.history.push('/blog');
      }}/>
      
      </div>
  )
}

export default connect()(AppBlogPage)
import React from "react";
import { createStore,combineReducers } from "redux";


// Action Start
const addBlog = ()=>({
    type: "ADD_BLOG",
    blog:{
        id:1,
        title:"basliq",
        description:"desc"
    }
})
// Action END

// Reducers Start
const blogState = [];

const BlogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
        return [
            ...state,
            action.blog
        ]
    case "EDIT_BLOG":
    case "REMOVE_BLOG":

    default:
      return state;
  }
};
// Reducers END



// Store Start
const store = createStore(
    combineReducers({
        item: BlogReducer
       
    })
);


store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(addBlog())
// Store END








const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;

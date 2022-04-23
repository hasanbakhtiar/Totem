import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { addBlog, blogEdit, removeBlog } from './action/blog';



const store = configureStore();
store.subscribe(()=>{
  console.log(store.getState());
})

const meqale1 = store.dispatch(addBlog({title:"blog1",description:"live begins after coffee1"}));
const meqale2 = store.dispatch(addBlog({title:"blog2",description:"live begins after coffee2"}));
console.log(meqale1.blog.id);
store.dispatch(removeBlog({id:meqale1.blog.id}))
store.dispatch(blogEdit(meqale2.blog.id,{title:"update"}))
// Store END




const App=()=>{
  return(
    <h1>Start</h1>
  )
}


ReactDOM.render(<App />,document.querySelector('#root'));





















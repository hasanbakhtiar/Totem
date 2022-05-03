import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addBlog, blogEdit, removeBlog } from "./action/blog";
import AppRouter from "./routers/AppRouter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

const meqale1 = store.dispatch(
  addBlog({ title: "blog1", description: "live begins after coffee1" })
);
const meqale2 = store.dispatch(
  addBlog({ title: "blog2", description: "live begins after coffee2" })
);
console.log(meqale1.blog.id);
store.dispatch(removeBlog({ id: meqale1.blog.id }));
store.dispatch(blogEdit(meqale2.blog.id, { title: "update" }));
store.dispatch(addBlog({ title: "mehebbet", description: "student" }));
// Store END

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <AppRouter />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

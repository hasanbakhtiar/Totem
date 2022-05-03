import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "../components/Home";
import BlogListPage from "../components/BlogListPage";
import Header from "../components/Header";
import BlogDetailsPage from "../components/BlogDetailsPage";
import AppBlogPage from "../components/AppBlogPage";
import EditBlogPage from "../components/EditBlogPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/blog" component={BlogListPage}></Route>
        <Route path="/blog/:id" component={BlogDetailsPage}></Route>
        <Route path="/edit/:id" component={EditBlogPage}></Route>
        <Route path="/create" component={AppBlogPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;

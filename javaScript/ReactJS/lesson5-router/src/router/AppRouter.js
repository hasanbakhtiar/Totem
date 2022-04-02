import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Product from "../components/pages/Product";
import Contact from "../components/pages/Contact";
import NotfoundPage from "../components/pages/NotfoundPage";
import ProductDetails from "../components/pages/ProductDetails";
import Footer from "../components/Footer";

export class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route  path="/product/:id" component={ProductDetails}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={NotfoundPage}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default AppRouter;

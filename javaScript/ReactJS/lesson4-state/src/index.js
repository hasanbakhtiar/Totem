import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Counter from "./components/Counter";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import BookApp from './components/BookApp'




class App extends Component{
  render(){
    return(
      <div>
        {/* <BookApp /> */}
        <Nav />
        <Counter/>
        <Footer text="my site footer" title="Footer"/>
      </div>
    )
  }
}


// let a = "HeLLo"
// console.log(a.search(/l/i));
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

ReactDOM.render(<App />, document.getElementById("root"));

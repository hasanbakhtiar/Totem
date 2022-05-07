import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";





class App extends Component{
  render(){
    return(
      <div className="container">
      <MovieProvider>
       <Nav />
       <MovieList />
      </MovieProvider>
      </div>
    )
  }
}




ReactDOM.render(<App />, document.getElementById("root"));

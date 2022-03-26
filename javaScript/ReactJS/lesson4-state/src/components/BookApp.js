import React, { Component } from "react";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Nav from "./Nav";
import bookImgOne from "../assets/img/book1.jpg";
import bookImgTwo from "../assets/img/book2.jpg";

class BookApp extends Component {
  constructor(props) {
    super(props);
    this.nextBook = this.nextBook.bind(this);
    this.state = {
      img: bookImgOne,
      bookName: "1984",
      author: "Gerge Orwell",
      description:
        "1984 (ing. Nineteen Eighty-Four) — Corc Oruell tərəfindən 1949-cu ildə yazılmış roman. 2009-cu ildə The Times qəzeti onu son 60 il ərzində yaradılmış 60 ən ...",
      bookLenght: 400,
    };
  }

  nextBook(){
    this.setState({
      img: bookImgTwo,
      bookName: "Sefiller",
      author: "Viktor Hugo",
      description:
        "Edebiyatının en önemli romanlarından biri olan Sefiller, romantik akımın etkilerini taşıyan bir eserdir. Bir suçlunun yaşam öyküsünü konu edinen bu eser ...",
      bookLenght: 1000,
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container mt-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={this.state.img}
              height="200"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.bookName}</h5>
              <p className="card-text">
              {this.state.description}
              </p>
              <p>{this.state.bookLenght}</p>
            </div>
          </div>

          <button onClick={this.nextBook} className="btn btn-primary mt-3">
            Next Book
          </button>
        </div>
      </div>
    );
  }
}
 export default BookApp;
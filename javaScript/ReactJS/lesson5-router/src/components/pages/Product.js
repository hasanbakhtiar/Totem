import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Product1</h5>
              <p className="card-text">
                Some quick example text to build on the Product and make up
                the bulk of the card's content.
              </p>
              <Link to="/product/1" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Product2</h5>
              <p className="card-text">
                Some quick example text to build on the Product and make up
                the bulk of the card's content.
              </p>
              <Link to="/product/2" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Product3</h5>
              <p className="card-text">
                Some quick example text to build on the Product and make up
                the bulk of the card's content.
              </p>
              <Link to="/product/3" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

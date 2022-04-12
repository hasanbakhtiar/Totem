import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useCart } from "react-use-cart";



const Nav = () => {
  const {
     totalItems
 
    
  } = useCart();
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Vans</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/products">Products</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">Contact</NavLink>
              </li>
           
              
            </ul>
            <div className="d-flex">
              <Link className="btn btn-outline-success" to="/cart" type="button">Card({totalItems})</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
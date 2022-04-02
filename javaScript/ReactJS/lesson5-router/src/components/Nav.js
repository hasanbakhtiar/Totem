import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="ms-5" aria-current="page"  to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="ms-5" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="ms-5" to="/product">Product</NavLink>
              </li>
             

              <li className="nav-item">
                <NavLink className="ms-5" to="/contact">Contact</NavLink>
              </li>
             
             
            
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Nav
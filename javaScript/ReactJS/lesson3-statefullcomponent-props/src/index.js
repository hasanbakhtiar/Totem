import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


class Dropdown extends Component{
  render(){
    return(
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {this.props.dname}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">{this.props.title1}</a></li>
          <li><a className="dropdown-item" href="#">{this.props.title2}</a></li>

        </ul>
      </li>
    )
  }
}


class App extends Component{
  render(){
    return(
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Car Salon</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
    
    <Dropdown  dname="BMW" title1="X5" title2="X6"/>
    <Dropdown  dname="Mercedes" title1="S500" title2="S350"/>

    </ul>
    
  </div>
</div>
</nav>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));



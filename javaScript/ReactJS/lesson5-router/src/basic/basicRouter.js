import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Link } from 'react-router-dom';


// class Home extends Component{
//     render(){
//         return()
//     }
// }

class Home extends Component{
    render(){
        return(
            <h1>Home</h1>
        )
    }
}

class About extends Component{
    render(){
        return(
            <h1>About</h1>
        )
    }
}




class Contact extends Component{
    render(){
        return(
            <h1>Contact</h1>
        )
    }
}


class Nav extends Component{
    render(){
        return(
            <>
            <ul className='d-flex'>
                <li className='ms-5'><Link to="/">Home</Link></li>
                <li className='ms-5'><Link to="/about">About</Link></li>
                <li className='ms-5'><Link to="/contact">Contact</Link></li>
            </ul>
            </>
        )
    }
} 

class App extends Component{
    render(){
        return(
           <BrowserRouter>
           <Nav />
           <Route exact path="/" component={Home}></Route>
           <Route path="/about" component={About}></Route>
           <Route path="/contact" component={Contact}></Route>
           </BrowserRouter>
        )
    }
}



ReactDOM.render(<App />,document.querySelector('#root'));
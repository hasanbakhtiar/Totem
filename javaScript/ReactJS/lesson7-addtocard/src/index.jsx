import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Product from './components/Product';
import Basket from './components/Basket';
import { CartProvider } from 'react-use-cart';



const App =()=>{
    return(
        <CartProvider>
        <Product />
        <Basket />
        </CartProvider>
    )
}


ReactDOM.render(<App />,document.querySelector("#root"));
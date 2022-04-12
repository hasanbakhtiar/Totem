import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './routers/AppRouter';
import { CartProvider } from 'react-use-cart';



const App =()=>{
    return(
        <CartProvider>
        <AppRouter />
        </CartProvider>
    )
}


ReactDOM.render(<App />,document.querySelector("#root"));
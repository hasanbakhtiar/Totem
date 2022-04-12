import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter,Switch } from 'react-router-dom'
import Home from '../components/pages/Home'
import Contact from '../components/pages/Contact'
import Product from '../components/pages/Product'
import Basket from '../components/pages/Basket'
import Nav from '../components/static/Nav';
import Footer from '../components/static/Footer';
import NotFoundPage from '../components/pages/NotFoundPage'


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Nav /> 
    <Switch>
      <Route component={Home} exact path="/"></Route>
      <Route component={Product} path="/products"></Route>
      <Route component={Basket} path="/cart"></Route>
      <Route component={Contact} path="/contact"></Route>
      <Route component={NotFoundPage}></Route>
      
      </Switch>
<Footer />
    </BrowserRouter>
  )
}

export default AppRouter
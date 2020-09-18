import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from "./components/app-navigation";
import './App.css';
import './assets/css/custom.css'

import Home from '../src/views/Home/index'
import Products from '../src/views/Products/index'
import Shop from '../src/views/Shop'
import CheckoutCart from '../src/components/shoppingcart/checkout-cart'
import AppFooter from '../src/components/app-footer'
import Account from '../src/views/Account'


function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckoutCart} />
        
      </Switch>

      <AppFooter />
    </BrowserRouter>
  );
}

export default App;

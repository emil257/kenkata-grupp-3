import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from "./components/app-navigation";
import './App.css';
import './assets/css/custom.css'

import Home from '../src/views/Home/index'
import Products from '../src/views/Products/index'
import Shop from '../src/views/Shop'
import CheckoutCart from '../src/components/shoppingcart/shopping-cart-step-2'
// import AppFooter from '../src/components/app-footer'
import AppFooterNew from '../src/components/app-footer-new/index'
import Account from '../src/views/Account'
import ShoppingCartView from '../src/components/shoppingcart/shopping-cart-step-1'


function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shoppingcart" component={ShoppingCartView} />
        <Route exact path="/checkout" component={CheckoutCart} />
        
      </Switch>

      <AppFooterNew />
    </BrowserRouter>
  );
}

export default App;

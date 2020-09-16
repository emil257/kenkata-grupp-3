import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from "./components/app-navigation";
import './App.css';
import './assets/css/custom.css'

import Home from '../src/views/Home/index'
<<<<<<< HEAD
import Products from '../src/views/Products/index'
=======
import Shop from '../src/views/Shop'
>>>>>>> 63985232c7e17a0e5ab55c5734d31559f1f4e9ef
import AppFooter from '../src/components/app-footer'


function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
      <Switch>
        <Route exact path="/shop" component={Shop} />
      </Switch>

      <AppFooter />
    </BrowserRouter>
  );
}

export default App;

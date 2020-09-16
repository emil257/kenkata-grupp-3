import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from "./components/app-navigation";
import './App.css';
import './assets/css/custom.css'

import Home from '../src/views/Home/index'
import AppFooter from '../src/components/app-footer'
import AppCarousel from '../src/components/app-carousel'

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <AppCarousel/>

      <AppFooter />
    </BrowserRouter>
  );
}

export default App;

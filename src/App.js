import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import './assets/css/custom.css'

import Home from '../src/views/Home/index'
import AppFooter from '../src/components/app-footer'

function App() {
  return (

    <BrowserRouter>
   
     
      <Switch>
        <Route exact path='/' component={Home} />

      </Switch>

      <AppFooter></AppFooter>

    </BrowserRouter>

  );
}

export default App;

import React from 'react';
import './App.css';
import './assets/css/custom.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AppFooter from '../src/components/app-footer'
import Home from '../src/views/Home'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <div>
              Put view here
            </div>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;

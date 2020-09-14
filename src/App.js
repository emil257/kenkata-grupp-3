import React from 'react';
import './App.css';
import './assets/css/custom.css'
import logo from '../src/assets/img/404.png'

import AppFooter from '../src/components/app-footer'

function App() {
  return (
    <div>
      <img src={logo} alt=""/>
      <p className="text-theme-color">hej</p>
      <AppFooter/>
    </div>
  );
}

export default App;

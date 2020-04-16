import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Switch>
      <Route path='/'>
        <Main />
      </Route>
      <Route path='/portfolio'>
        <Portfolio />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Switch>
  </div>
</Router>

  )}

export default App;

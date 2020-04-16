import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
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
        <MainPage />
      </Route>
      <Route path='/portfolio'>
        <PortfolioPage />
      </Route>
      <Route path='/contact'>
        <ContactPage />
      </Route>
    </Switch>
    <Footer />
  </div>
</Router>

  )}

export default App;

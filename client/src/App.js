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
      <Route exact path='/'>
        <MainPage />
      </Route>
      <Route exact path='/portfolio'>
        <PortfolioPage />
      </Route>
      <Route exact path='/contact'>
        <ContactPage />
      </Route>
      <Route>
        <MainPage />
      </Route>
    </Switch>
    <Footer />
  </div>
</Router>
)}

export default App;

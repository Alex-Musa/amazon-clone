import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from './Home';


function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
            <Header />
              <h1>checkout</h1>
            </Route>
            <Router path="/login">
              <h1>login page</h1>
            </Router>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;

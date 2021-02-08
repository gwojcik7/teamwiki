import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'normalize.css';
import './App.scss';

import Header from "components/header/Header.jsx";
import Footer from 'components/footer/Footer.jsx';

import Home from 'views/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {Router, Route} from 'react-router-dom';

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import {history} from './_helpers/historyHelper';

import './App.css';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route path="/" exact component={LoginPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/home" exact component={HomePage}/>
      </div>
    </Router>
  );
}

export default App;

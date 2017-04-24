import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route } from 'react-router-dom'

const appRoot = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
  ,appRoot);

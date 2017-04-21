import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './App';
import {BrowserRouter as Router, Route } from 'react-router-dom'

const appRoot = document.getElementById('root')

ReactDOM.render(
<<<<<<< HEAD
  <Router>
    <Route path="/" component={App}>
      
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
=======
  <App />,
appRoot);
>>>>>>> 1d9d3955d236a4a1bf17e3868be2935bfc2f086f

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import * as base from '../pages/base';
// import app from '../App.js';
import home from '../pages/home';
import login from '../pages/login';

// console.log(BrowserRouter)

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={home}>
        {/* <IndexRoute></IndexRoute> */}
        {/* <Route path="/home"></Route> */}
      </Route>
      <Route path="/login" component={login}></Route>
    </Switch>
    
  </Router>
)
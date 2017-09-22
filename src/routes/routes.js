import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import App from './../App.js';
import Login from './../components/Login';
import Home from './../components/Home';
import Signup from './../components/Signup';

const Routes =  () => (
  <routes>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/login' component={ Login }/>
      <Route path='/dashboard' component={ App }/>
      <Route path='/signup' component={ Signup }/>
    </Switch>
  </routes>
);

export default Routes;

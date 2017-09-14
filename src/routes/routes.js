import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import App from './../App.js';
import Login from './../components/Login'

const Routes =  () => (
  <routes>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </routes>
);

export default Routes;

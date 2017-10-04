import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import App from './../App.js';
import Login from './../components/Login';
import Home from './../components/Home';
import Signup from './../components/Signup';
import Center from './../components/Center';
import Verify from './../components/Verify';

const Routes =  () => (
  <routes>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/login' component={ Login }/>
      <Route path='/dashboard' component={ App }/>
      <Route path='/signup' component={ Signup }/>
      <Route path='/verify/:email' component={Verify}/>
      <Route render={ () => {
        return (<p>Not found</p>)} }
      />
    </Switch>
  </routes>
);

export default Routes;

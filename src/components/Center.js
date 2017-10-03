
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Handicapper from './dashboard/handicapper/home';
import AddPost from './dashboard/handicapper/addPost';
import Bettor from './dashboard/bettor/home'

const Center =  () => (
  <routes>
    <Switch>
      <Route path='/dashboard/bettor' component={ Bettor }/>
      <Route exact path='/dashboard/handicapper' component={ Handicapper }/>
      <Route exact path='/dashboard/handicapper/newpost' component={ AddPost }/>
    </Switch>
  </routes>
);

export default Center;

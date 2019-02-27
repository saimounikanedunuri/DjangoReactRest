import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Placements from './Placements';
import Academics from './Academics';
import Login from './Login';


const Main = () => (
  <Switch>
  <Route exact path="/Login" component={Login} />
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/Placements" component={Placements} />
    <Route path="/Academics" component={Academics} />
  </Switch>
)

export default Main;

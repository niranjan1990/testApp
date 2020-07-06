import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Details from './components/details'
import Cards from './components/cards'
import Tform from "./components/tform";

export default function Navigator() {
    return (
          <Switch>
          <Route exact={true} path="/details" component={Details} />
          <Route exact={true} path="/" component={Cards} />
          <Route exact={true} path="/form" component={Tform} />
          </Switch>
  
    );
  }
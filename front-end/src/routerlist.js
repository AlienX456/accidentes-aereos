import React from 'react';
import Home from './Componentes/Home/Home';
import './cssTransitionRouter.css'
import Flightselect from './Componentes/flight-select/flightselect';
import Info from './Componentes/info/info';

import { 
  Switch, 
  Route, 
  withRouter 
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

function Routerlist({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="alert"
        timeout={300}
        transitionEnterTimeout={1000}
      >
        <Switch location={location}>
          <Route path="/info" component={Info} />
          <Route path="/flight" component={Flightselect} />
          <Route path="/" component={Home} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default withRouter(Routerlist);

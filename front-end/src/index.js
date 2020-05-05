import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import './index.css'
import * as serviceWorker from './serviceWorker';
import Particles from 'react-particles-js';
import Routerlist from './routerlist';



//router
import {
  BrowserRouter as Router,
} from "react-router-dom";

class Maincomponent extends React.Component {

  particlesOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color:{
        value:"#8692AD"
      }
    }
  };

  render() {
    return (
      <div>
        <Particles params={this.particlesOptions} />
            <Router>
              <Routerlist />
            </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <Maincomponent />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

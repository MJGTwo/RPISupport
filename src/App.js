import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import TitleIX from './components/titleIX';
import PubSafe from './components/pubSafe';
import SafeRide from './components/safeRide';
import CounselingCenter from './components/counselingCenter';
import HealthCenter from './components/healthCenter';
import Handbook from './components/handbook';
import Policies from './components/resLifePolicies';

const RED = '#97040c';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav style={{ background: RED }}>
          <div className="nav-wrapper">
            <a
              href="https://rpi.edu"
              className="brand-logo"
              style={{ height: '90%', left: '40%' }}
            >
              <img src={logo} alt="Rensselaer" style={{ height: '90%' }} />
            </a>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li style={{ paddingRight: '10px' }}>Need Help? </li>
              <li style={{ paddingRight: '20px' }}> Call 911</li>
            </ul>
          </div>
        </nav>
        <div>
          <div className="row">
            <div className="col s12 m6">
              <TitleIX />
            </div>
            <div className="col s12 m6">
              <PubSafe />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <SafeRide />
            </div>
            <div className="col s12 m6">
              <CounselingCenter />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <HealthCenter />
            </div>
            <div className="col s12 m6">
              <Handbook />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <Policies />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

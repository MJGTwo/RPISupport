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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            alt="Rensselaer"
            style={{ height: '90%', paddingRight: '80%' }}
          />
        </header>
        <div>
          <p>Need Help? Here's some quick links to important information.</p>
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Page404 from './component/page404/index';
import About from './component/about/index';
import Home from './component/home/index';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Router Example</h1>
        </header>
        <BrowserRouter>
          <div>
            <p className="App-intro">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Page404">Error 404</Link></li>                
              </ul>
            </p>

            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route component={Page404} />

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
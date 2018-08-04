import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PizzaBaseForm from './components/PizzaBaseForm'
import SauceForm from './components/SauceForm';
import ToppingsForm from './components/ToppingsForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to New Age Pizza!</h1>
        </header>
        <Router>
        <div>
          <Route exact path='/base' component={PizzaBaseForm} />
          <Route exact path='/sauce' component={SauceForm} />
          <Route exact path='/toppings' component={ToppingsForm} />
          <Route exact path="/" render={ () => <Redirect to="/base" /> } />
        </div>
        </Router>

      </div>
    );
  }
}

export default App;

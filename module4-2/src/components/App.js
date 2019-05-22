import React, { Component } from 'react';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Reader from './Reader/Reader';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/reader" component={Reader} />
          <Redirect to="/reader" />
        </Switch>
      </Router>
    );
  }
}

export default App;

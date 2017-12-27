import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:post_id" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;

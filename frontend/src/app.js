import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from  './components/home';
import Post from './components/post';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
          {/* <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:post_id" component={Post} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;

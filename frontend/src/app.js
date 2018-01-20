import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from  './components/home';
import Post from './components/post';
import PostForm from './components/post-form';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/post-edit/:id/:title/:body" component={PostForm} />
          <Route exact path="/post-add" component={PostForm} />
        </Switch>
      </div>
    );
  }
}

export default App;

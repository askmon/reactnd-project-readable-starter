import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from  './components/home';
import Post from './components/post';
import PostForm from './components/post-form';
import Category from './components/category';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post-add/:category" component={PostForm} />
          <Route exact path="/post-edit/:id/:author/:title/:body" component={PostForm} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:id" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;

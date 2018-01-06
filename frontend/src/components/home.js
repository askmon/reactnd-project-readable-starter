import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { fetchCategories, fetchPosts } from '../actions';
import { connect } from 'react-redux';
import PostList from './post-list';

class Home extends Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <div styles={{float: "right"}}>
          <Drawer open={true} width="10%">
            {this.props.categories.map((category) =>
              <MenuItem>{category.name}</MenuItem>
            )}
          </Drawer>
        </div>
        <div>
          { this.props.posts &&
          <PostList posts={this.props.posts} />
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ categoryReducer, postReducer }) {
  return {
    categories: categoryReducer.categories,
    posts: postReducer.posts
  }
}

export default connect(mapStateToProps, { fetchCategories, fetchPosts })(Home);
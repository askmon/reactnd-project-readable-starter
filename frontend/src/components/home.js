import React, { Component } from 'react';
import { fetchCategories, fetchPosts } from '../actions';
import { connect } from 'react-redux';
import PostList from './post-list';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Home extends Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <div styles={{float: "right"}}>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            {this.props.categories.map((category) =>
              <MenuItem>{category.name}</MenuItem>
            )}
          </IconMenu>
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
import React, { Component } from 'react';
import { fetchCategories, fetchPosts } from '../actions';
import { connect } from 'react-redux';
import PostList from './post-list';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom'
import Home from './home'

class Category extends Component {

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
    console.log(this.props.posts);
  }

  render() {
    return (
      <div>
        <div styles={{float: "left"}}>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            {this.props.categories.map((category) =>
              <Link to={`/${category.name}`}>
                <MenuItem>{category.name}</MenuItem>
              </Link>
            )}
          </IconMenu>
          <Link to={`/`}>
            <FlatButton label="Home" />
          </Link>
          <Link to={`/post-add/${this.props.match.params.category}`}>
            <FlatButton label="Add Post" />
          </Link>
        </div>
        <div>
          { this.props.posts &&
          <PostList posts={this.props.posts.filter((post) => {
            return post.category === this.props.match.params.category
          })} />
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

export default connect(mapStateToProps, { fetchCategories, fetchPosts })(Category);
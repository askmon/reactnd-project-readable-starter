import React, { Component } from 'react';
import Post from './post'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class PostList extends Component {
  constructor() {
    super()
    this.state = {sortType: 'date'}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({sortType: value})
  }

  render() {
    switch (this.state.sortType) {
      case 'vote':
        this.props.posts.sort((a, b) => b.voteScore - a.voteScore)
        break;
      default :
        this.props.posts.sort((a, b) => b.timestamp - a.timestamp)
    }
    const posts = this.props.posts.map(post => {
      const date = new Date(post.timestamp)
      return (
        <Post
          id={post.id}
          title={post.title}
          author={post.author}
          category={post.category}
          commentCount={post.commentCount}
          date={date.toString()}
          body={post.body}
          voteScore={post.voteScore}
          fromList={true}
          key={post.id}
        />
      )
    })

    return (
      <div className="post-list-container" style={{display: 'block', margin: 'auto', maxWidth: '800px'}}>
        <DropDownMenu
          label='sort'
          value={this.state.sortType}
          onChange={this.handleChange}
        >
          <MenuItem value="date" primaryText="Date" />
          <MenuItem value="vote" primaryText="Vote" />
        </DropDownMenu>
        {posts}
      </div>
    )
  }
}

export default PostList;
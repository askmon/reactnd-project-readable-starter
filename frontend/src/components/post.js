import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { fetchPost, deletePostAsync, fetchCommentsByPostId } from '../actions'
import FlatButton from 'material-ui/FlatButton';
import Vote from './vote';
import CommentList from './comment-list'

class Post extends Component {
  constructor() {
    super()
    this.state = { redirect: false }
  }

  componentDidMount() {
    if(this.props.match && this.props.match.params.id) {
      this.props.fetchPost(this.props.match.params.id)
      this.props.fetchCommentsByPostId(this.props.match.params.id)
    }
    else {
      this.props.fetchPost(this.props.id)
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidUpdate() {
    Object.keys(this.props.postReducer.post).length === 0 && (this.setState({ redirect: true }))
  }

  handleDelete() {
    this.props.deletePostAsync(this.props.id)
  }

  handleVote(e, vote) {
    this.props.updateNewPostScore(this.props.id, vote)
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }
    
    let id = null;
    let title, body, author, voteScore, fromList = null

    if(this.props.match && this.props.match.params.id) {
      id = this.props.match.params.id
      this.props.id = id
      title = this.props.postReducer.post.title;
      body = this.props.postReducer.post.body;
      author = this.props.postReducer.post.author;
      voteScore = this.props.postReducer.post.voteScore;
    } else {
      id = this.props.id;
      title = this.props.title;
      body = this.props.body;
      author = this.props.author;
      voteScore = this.props.voteScore;
      fromList = this.props.fromList;
    }
    const { comments } = this.props.commentReducer

    return (
      <div className="post" style={{ marginTop: '30px' }}>
        <Card className="post-item" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <CardHeader
            title={title}
            subtitle={`by: ${author}`}
          />

          <CardText>
            {body}
          </CardText>

          <CardText>
            score: {voteScore} <br />
          </CardText>

          <CardActions>
            <Vote type="post" id={id}/>
          </CardActions>

          {
            fromList &&
              <CardActions>
                <FlatButton onClick={this.handleDelete} label="Delete" />
                <Link to={`/post/${id}`}>
                  <FlatButton label="Details" />
                </Link>
                <Link to={`/post-edit/${id}/${title}/${body}`}>
                  <FlatButton label="Edit" />
                </Link>
              </CardActions>
          }
        </Card>
        {
          !fromList &&
          <CommentList comments={comments}/>
        }
      </div>
    );
  }
}

function mapStateToProps({ postReducer, commentReducer }) {
  return { postReducer, commentReducer }
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePostAsync, fetchCommentsByPostId }
)(Post);

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardText, Button } from 'material-ui/Card';
import { fetchPost, deletePost, updateNewPostScore } from '../actions'
import FlatButton from 'material-ui/FlatButton';

class Post extends Component {
  constructor() {
    super()
    this.state = { redirect: false }
  }

  componentDidMount() {
    this.props.fetchPost(this.props.id)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidUpdate() {
    Object.keys(this.props.postReducer.post).length === 0 && (this.setState({ redirect: true }))
  }

  handleDelete() {
    this.props.deletePostById(this.props.id)
  }

  handleVote(e, vote) {
    this.props.updateNewPostScore(this.props.id, vote)
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to='/' />
    }

    let { title, body, author, voteScore } = this.props

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
            <FlatButton onClick={e => this.handleVote(e, 'upVote')} label="+" />
            <FlatButton onClick={e => this.handleVote(e, 'downVote')} label="-" />
            <FlatButton onClick={this.handleDelete} label="Delete" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ postReducer, commentReducer }) {
  return { postReducer, commentReducer }
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost, updateNewPostScore }
)(Post);

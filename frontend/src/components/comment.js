import React from 'react';
import { connect } from 'react-redux'
import Vote from './vote'
import { deleteCommentById } from '../actions'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function Comment (props) {
  function handleClick(e, commentId, parentId) {
    e.preventDefault();
    props.deleteCommentById(commentId, parentId)
  }

  const date = props.commentDate.substring(0, props.commentDate.indexOf('GMT'))

  return (
    <Card className="comment-item" style={{maxWidth: '800px', margin: '0 auto'}}>
      <CardHeader
       title={props.body}
       subtitle={`by: ${props.author}`}
      />

      <CardText>
        date: {date} <br/>
        score: {props.score}
      </CardText>

      <CardActions>
        <Vote type="comment" id={props.id}/>
      </CardActions>

      <CardActions>
        <Link to={`/comments/${props.id}/${props.author}/${props.body}`}>
          <FlatButton label="Edit" />
        </Link>
        <FlatButton onClick={e => handleClick(e, props.id, props.parentId)} label="Delete" />
      </CardActions>
    </Card>
  )
}

export default connect(null, { deleteCommentById })(Comment);

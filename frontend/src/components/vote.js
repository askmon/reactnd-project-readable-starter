import React from 'react';
import { connect } from 'react-redux'
import { CardActions } from 'material-ui/Card';
import { updateNewPostScore, updateNewCommentScore } from '../actions'
import RaisedButton from 'material-ui/RaisedButton';

function Vote(props) {

  function handleClick(e, score) {
    e.preventDefault();
    if (props.type === 'post') {
      props.updateNewPostScore(props.id, score)
    } else {
      props.updateNewCommentScore(props.id, score)
    }
  }

  return (
    <CardActions className="vote">
      <RaisedButton
        label="+"
        onClick={e => handleClick(e, 'upVote')}
        primary={true}
        buttonStyle={{width: '40px'}}
        style={{width: '40px', minWidth: '0px'}}
      />
      <RaisedButton
        label="-"
        onClick={e => handleClick(e, 'downVote')}
        secondary={true}
        buttonStyle={{width: '40px'}}
        style={{width: '40px', minWidth: '0px'}}
      />
    </CardActions>
  );
}

export default connect(null, {updateNewPostScore, updateNewCommentScore})(Vote);

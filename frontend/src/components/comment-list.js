import React from 'react';
import Comment from './comment'

export default function CommentList ({comments}) {
  const commentItems = comments
  .sort((a, b) => b.voteScore - a.voteScore)
  .map(comment => {
    const date = new Date(comment.timestamp)
    return (
      <div key={comment.id}>
        <p>Comment:</p> 
        <li key={comment.id} style={{marginTop: '20px', marginBottom: '20px'}}>
          <Comment
            id={comment.id}
            body={comment.body}
            author={comment.author}
            score={comment.voteScore}
            commentDate={date.toString()}
            parentId={comment.parentId}
            key={comment.id}
          />
        </li>
      </div>
    )
  })

  return (
    <ul className="comment-list" style={{listStyle: 'none', margin: '0px', padding: '0px'}}>
      {commentItems}
    </ul>
  )
}

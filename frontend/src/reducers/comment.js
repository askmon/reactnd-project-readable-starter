import {
  GET_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT_SCORE
} from '../actions'

const initialState = {
  comments: [],
  commentsByPost: []
}

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      const { comments, postId } = action
      const newCommentState = state.commentsByPost
        .filter(comment => comment.postId === postId).length === 0
          ? state.commentsByPost.concat({
              postId: postId,
              comments: comments
            })
          : state.commentsByPost
              .map(comment => {
                comment.comments = comment.postId === postId ? comments : comment.comments
                return comment;
              })
      return {
        ...state,
        comments: comments,
        commentsByPost: newCommentState
      }
    case ADD_COMMENT :
      const { newComment } = action
      return {
        ...state,
        comments: state.comments.concat(newComment)
      }
    case EDIT_COMMENT:
      const { editedComment } = action
      return {
        ...state,
        comments: state.comments
          .filter(comment => comment.id !== editedComment.id)
          .concat(editedComment),
        commentsByPost: state.commentsByPost.map(obj => {
          obj.comments = obj.parentId === editedComment.parentId
            ? obj.comments.filter(comment => comment.id !== editedComment.id).push(editedComment)
            : obj.comments
          return obj
        })
      }
    case DELETE_COMMENT:
      const { deletedId, parentId } = action
      return {
        ...state,
        comments: state.comments.filter(p => p.id !== deletedId),
        commentsByPost: state.commentsByPost.map(obj => {
          obj.comments = obj.parentId === parentId
            ? obj.comments.filter(comment => comment.id !== deletedId)
            : obj.comments
          return obj
        })
      }
    case UPDATE_COMMENT_SCORE:
      const { commentWithNewScore } = action
      const updatedComments = state.comments.map(p => {
        return p = p.id === commentWithNewScore.id ? commentWithNewScore : p
      })
      return {
        ...state,
        comments: updatedComments
      }
    default :
      return state
  }
}

export default commentReducer;

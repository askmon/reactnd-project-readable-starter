import * as api from '../data/api'
import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT_SCORE,
  EDIT_COMMENT,
  DELETE_COMMENT
} from './types'

export function getComments (comments, postId) {
  return {
    type: GET_COMMENTS,
    comments,
    postId
  }
}

export const fetchCommentsByPostId = (id) => dispatch => (
  api.getCommentsByPost(id)
    .then(data => dispatch(getComments(data, id)))
);

export function createComment (newComment) {
  return {
    type: ADD_COMMENT,
    newComment
  }
}

export const createNewComment = (comment) => dispatch => (
  api.addComment(comment)
    .then(data => {
      dispatch(createComment(data))})
);

export function updateCommentScore (commentWithNewScore) {
  return {
    type: UPDATE_COMMENT_SCORE,
    commentWithNewScore
  }
}

export const updateNewCommentScore = (id, score) => dispatch => (
  api.voteComment(id, score)
    .then(data => dispatch(updateCommentScore(data)))
);

export function editComment (editedComment) {
  return {
    type: EDIT_COMMENT,
    editedComment
  }
}

export const editCommentById = (editId, timeStamp, body) => dispatch => (
  api.updateComment(editId, timeStamp, body)
    .then(data => dispatch(editComment(data)))
);

export function deleteComment (deletedId, parentId) {
  return {
    type: DELETE_COMMENT,
    deletedId,
    parentId
  }
}

export const deleteCommentById = (id, parentId) => dispatch => (
  api.deleteComment(id)
    .then(data => dispatch(deleteComment(data.id, parentId)))
);

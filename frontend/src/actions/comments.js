import * as api from '../data/api'
import {
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT_SCORE,
  EDIT_COMMENT,
  DELETE_COMMENT
} from './types'

// GET COMMENTS
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

// POST
export function createComment (newComment) {
  return {
    type: ADD_COMMENT,
    newComment
  }
}

export const createNewComment = (comment) => dispatch => (
  api.newComment(comment)
    .then(data => data.json())
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
  api.updateCommentScore(id, score)
    .then(data => dispatch(updateCommentScore(data)))
);

// EDIT COMMENT
export function editComment (editedComment) {
  return {
    type: EDIT_COMMENT,
    editedComment
  }
}

export const editCommentById = (editId, timeStamp, body) => dispatch => (
  api.editComment(editId, timeStamp, body)
    .then(data => dispatch(editComment(data)))
);

// DELETE COMMENT
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

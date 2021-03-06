import * as api from '../data/api'
import {
  GET_POST,
  GET_POSTS,
  GET_POSTS_CATEGORY,
  CREATE_POST,
  UPDATE_VOTE,
  EDIT_POST,
  DELETE_POST
} from './types'

export function getPost (post) {
  return {
    type: GET_POST,
    post
  }
}

export const fetchPost = (postId) => dispatch => (
  api.getPost(postId)
    .then(data => dispatch(getPost(data)))
);

export function getPosts (initialPosts) {
  return {
    type: GET_POSTS,
    initialPosts
  }
}

export function getPostsCategory (postsCategory) {
  return {
    type: GET_POSTS_CATEGORY,
    postsCategory
  }
}

export const fetchPosts = (category) => dispatch => (
  api.getAllPosts(category)
    .then(data => {
      if (!category || category === '') {
        dispatch(getPosts(data))
      } else {
        dispatch(getPostsCategory(data))
      }
    })
);

export function createPost (newPost) {
  return {
    type: CREATE_POST,
    newPost
  }
}

export const createNewPost = (post) => dispatch => (
  api.addPost(post)
    .then(data => dispatch(createPost(data)))
);

export function vote (postWithNewScore) {
  return {
    type: UPDATE_VOTE,
    postWithNewScore
  }
}

export const updateNewPostScore = (id, voteValue) => dispatch => (
  api.vote(id, voteValue)
    .then(data => dispatch(vote(data)))
);

export function editPost (editedPost) {
  return {
    type: EDIT_POST,
    editedPost
  }
}

export const editPostAsync = (postId, title, body) => dispatch => (
  api.updatePost({
    id: postId, 
    title,
    body
  })
    .then(data => dispatch(editPost(data)))
);

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

export const deletePostAsync = (postId) => dispatch => (
  api.deletePost(postId)
    .then(data => dispatch(deletePost(data.id)))
);

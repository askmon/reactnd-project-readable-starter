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
    .then(data => dispatch(getSinglePost(data)))
);

export function getPosts (posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function getPostsCategory (postsCategory) {
  return {
    type: GET_POSTS_CATEGORY,
    postsCategory
  }
}

export const fetchPosts = () => dispatch => (
  api.getAllPosts(category)
    .then(data => {
      if (!category || category === '') {
        dispatch(getPostsData(data))
      } else {
        dispatch(getCategoryPostsData(data))
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

export function vote (post) {
  return {
    type: UPDATE_POST,
    post
  }
}

export const updateNewPostScore = (id, vote) => dispatch => (
  api.vote(id, vote)
    .then(data => dispatch(vote(data)))
);

export function editPost (post) {
  return {
    type: EDIT_POST,
    post
  }
}

export const editPostAsync = (postId, title, body) => dispatch => (
  api.editPost(editId, title, body)
    .then(data => dispatch(editPost(data)))
);

export function deletePost (postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

export const deletePostAsync = (postId) => dispatch => (
  API.deletePost(postId)
    .then(data => dispatch(deletePost(data.id)))
);

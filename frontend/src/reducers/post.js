import {
  GET_POST,
  GET_POSTS,
  GET_POSTS_CATEGORY,
  CREATE_POST,
  UPDATE_VOTE,
  EDIT_POST,
  DELETE_POST
} from '../actions'

const initialState = {
  posts: [],
  categoryPosts: [],
  post: {}
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
    const { post } = action
    return {
      ...state,
      post: post
    }
    case GET_POSTS:
      const { initialPosts } = action
      console.log(initialPosts)
      return {
        ...state,
        posts: initialPosts
      }
    case GET_POSTS_CATEGORY:
      const { categoryPosts } = action
      return {
        ...state,
        categoryPosts: categoryPosts
      }
    case CREATE_POST:
      const { newPost } = action
      return {
        ...state,
        categoryPosts: state.categoryPosts.concat(newPost)
      }
    case EDIT_POST:
      const { editedPost } = action
      return {
        ...state,
        posts: state.posts
          .filter(p => p.id !== editedPost.id)
          .push(editedPost),
        categoryPosts: state.categoryPosts
          .filter(p => p.id !== editedPost.id)
          .push(editedPost),
        post: editedPost
      }
    case DELETE_POST:
      const { deletedId } = action
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== deletedId),
        categoryPosts: state.categoryPosts.filter(p => p.id !== deletedId),
        post: state.post.id === deletedId ? {} : state.post
      }
    case UPDATE_VOTE:
      const { postWithNewScore } = action
      const updatedPosts = state.posts.map(p => {
        return p =  p.id === postWithNewScore.id ? postWithNewScore : p
      })
      const updatedCategoryPosts = state.categoryPosts.map(p => {
        return p =  p.id === postWithNewScore.id ? postWithNewScore : p
      })
      return {
        ...state,
        posts: updatedPosts,
        post: postWithNewScore,
        categoryPosts: updatedCategoryPosts
      }
    default :
      return state
  }
}

export default postReducer;

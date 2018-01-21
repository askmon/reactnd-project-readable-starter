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
      const index = state.posts.findIndex(p => p.id !== editedPost.id);
      if(index > -1) {
        state.posts[index].title = editedPost.title;
        state.posts[index].body = editedPost.body;
      }
      if(state.categoryPosts) {
        const indexCategory = state.categoryPosts.findIndex(p => p.id !== editedPost.i);
        if(index > -1) {
          state.categoryPosts[indexCategory].title = editedPost.title;
          state.categoryPosts[indexCategory].body = editedPost.body;
        }
      }
      return {
        ...state,
        post: editedPost
      }
    case DELETE_POST:
      const { postId } = action
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== postId),
        categoryPosts: state.categoryPosts.filter(p => p.id !== postId),
        post: state.post.id === postId ? {} : state.post
      }
    case UPDATE_VOTE:
      const { postWithNewScore } = action
      const updatedPosts = state.posts.map(p => {
        return p = p.id === postWithNewScore.id ? postWithNewScore : p
      })
      const updatedCategoryPosts = state.categoryPosts.map(p => {
        return p = p.id === postWithNewScore.id ? postWithNewScore : p
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

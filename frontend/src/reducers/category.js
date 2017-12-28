import { GET_CATEGORIES } from '../actions'

const initialState = {
  categories: []
}

function categoryReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_CATEGORIES:
      const { categories } = action
      return {
        ...state,
        categories: categories.categories
      }
    default :
      return state
  }
}

export default categoryReducer
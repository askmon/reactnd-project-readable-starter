import { combineReducers } from 'redux'
import categoryReducer from './category'
import postReducer from './post'

export default combineReducers({
  categoryReducer,
  postReducer
});
import { getAllCategories } from '../data/api.js'
import { GET_CATEGORIES } from './types'

export function fetchAllCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => dispatch => (
  getAllCategories().then(categories => dispatch(fetchAllCategories(categories)))
);
import { getCategories } from '../data.api.js'
import { GET_CATEGORIES } from './types'

export const fetchCategories = async () => {
  const categories =  await getCategories();
  return {
    type: GET_CATEGORIES,
    categories
  }
};
import { updateReducer } from 'src/configs/helper'
import {
  GET_POSTER_OF_THE_DAY,
  SET_POSTER_OF_THE_DAY,
  SEARCH_POSTER_OF_THE_DAY,
  SET_FAVORITE,
  UPDATE_FAVORITE_COUNT
} from '../constant'

export const getPosterOfTheDay = data => {
  return updateReducer(GET_POSTER_OF_THE_DAY, data)
}
export const setPosterOfTheDay = data => {
  return updateReducer(SET_POSTER_OF_THE_DAY, data)
}
export const searchPoster = query => {
  return updateReducer(SEARCH_POSTER_OF_THE_DAY, query)
}

export const setFavorite = id => {
  return updateReducer(SET_FAVORITE, id)
}
export const updateFavoriteCount = count => {
  return updateReducer(UPDATE_FAVORITE_COUNT, count)
}

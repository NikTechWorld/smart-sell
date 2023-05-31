import { updateReducer } from 'src/configs/helper'
import { GET_POSTER_OF_THE_DAY, SET_POSTER_OF_THE_DAY, SEARCH_POSTER_OF_THE_DAY } from '../constant'

export const getPosterOfTheDay = data => {
  return updateReducer(GET_POSTER_OF_THE_DAY, data)
}
export const setPosterOfTheDay = data => {
  return updateReducer(SET_POSTER_OF_THE_DAY, data)
}
export const searchPoster = query => {
  console.log(query)
  return updateReducer(SEARCH_POSTER_OF_THE_DAY, query)
}

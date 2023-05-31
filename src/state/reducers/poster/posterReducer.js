import { GET_POSTER_OF_THE_DAY, SET_POSTER_OF_THE_DAY, UPDATE_FAVORITE_COUNT } from '../constant'

const initialState = { posters: [], favoriteCount: 0, isLoading: false, error: null }
const posterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTER_OF_THE_DAY:
      return state
    case SET_POSTER_OF_THE_DAY:
      return { ...state, posters: action.payload }
    case UPDATE_FAVORITE_COUNT:
      return { ...state, favoriteCount: action.payload }
    default:
      return state
  }
}
export default posterReducer

import { GET_POSTER_OF_THE_DAY, SET_POSTER_OF_THE_DAY, SEARCH_POSTER_OF_THE_DAY } from '../constant'

const initialState = { posters: [], isLoading: false, error: null }
const posterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTER_OF_THE_DAY:
      return state
    case SET_POSTER_OF_THE_DAY:
      return { ...state, posters: action.payload }
    default:
      return state
  }
}
export default posterReducer

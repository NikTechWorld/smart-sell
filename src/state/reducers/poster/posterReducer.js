import { GET_POSTER_OF_THE_DAY, SAVE_AS_DRAFT, SET_POSTER_OF_THE_DAY, UPDATE_FAVORITE_COUNT } from '../constant'

const initialState = { posters: [], draft: [], favoriteCount: 0, isLoading: false, error: null }

const posterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTER_OF_THE_DAY:
      return state
    case SET_POSTER_OF_THE_DAY:
      return { ...state, posters: action.payload }
    case UPDATE_FAVORITE_COUNT:
      return { ...state, favoriteCount: action.payload }
    case SAVE_AS_DRAFT:
      const { draft } = state
      const index = draft.findIndex(x => x.id === action.payload.id)
      if (index >= 0) {
        draft[index] = action.payload
      } else draft.push(action.payload)

      return { ...state, draft: draft }
    default:
      return state
  }
}

export default posterReducer

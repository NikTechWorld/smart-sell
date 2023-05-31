import { GET_USER_PROFILE } from '../constant'

const initialState = { userProfile: { name: '', email: '' } }
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return state

    default:
      return state
  }
}
export default userReducer

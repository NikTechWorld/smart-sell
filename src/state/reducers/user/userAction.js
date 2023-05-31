import { updateReducer } from 'src/configs/helper'
import { GET_USER_PROFILE } from '../../constant'

export const getUserProfile = data => {
  console.warn('action is called', data)
  return dispatch => dispatch(updateReducer(GET_USER_PROFILE, data))
}

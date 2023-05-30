import * as helper from './../configs/helper'
export const getUserProfile = () => {
  return dispatch => {
    dispatch(helper.updateReducer('GET_USER_PROFILE', {}))
  }
}

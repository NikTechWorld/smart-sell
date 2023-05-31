import { takeEvery, put } from 'redux-saga/effects'
import { GET_USER_PROFILE, SET_USER_PROFILE } from '../constant'
// function* setUserProfile() {
//   let data = yield fetch('http://localhost:3000/images.json')
//   data = yield data.json()
//   console.warn('action is called', data)
//   yield put({ type: SET_USER_PROFILE, data })
// }
function* getUserProfile() {
  let data = yield fetch('http://localhost:3000/images.json')
  data = yield data.json()
  console.warn('action is called', data)
  debugger
  yield put({ type: SET_USER_PROFILE, data })
}

function* userSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfile)
}

export default userSaga

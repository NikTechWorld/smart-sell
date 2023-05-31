import { fork } from 'redux-saga/effects'
import userSaga from './user/userSaga'
import posterSaga from './poster/posterSaga'
export default function* rootSaga() {
  yield all([fork(userSaga), fork(posterSaga)])
}

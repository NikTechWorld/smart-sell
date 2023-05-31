import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_POSTER_OF_THE_DAY, SEARCH_POSTER_OF_THE_DAY } from '../constant'
import { setPosterOfTheDay, searchPoster as searchInPosterOfTheDay } from './posterAction'
function* getPosterOfTheDay() {
  let data = yield fetch('http://localhost:3000/images.json')
  data = yield data.json()
  yield put(setPosterOfTheDay(data))
}
function* searchPoster({ payload }) {
  // let data = yield searchInPosterOfTheDay()
  const query = payload.toLowerCase()
  if (query === null) getPosterOfTheDay()
  let data = yield fetch('http://localhost:3000/images.json')
  data = yield data.json()
  data = data.filter(obj => obj.title.toLowerCase().includes(query) || obj.tag.toLowerCase().includes(query))
  yield put(setPosterOfTheDay(data))
}

function* posterSaga() {
  yield takeEvery(GET_POSTER_OF_THE_DAY, getPosterOfTheDay)
  yield takeEvery(SEARCH_POSTER_OF_THE_DAY, searchPoster)
}

export default posterSaga

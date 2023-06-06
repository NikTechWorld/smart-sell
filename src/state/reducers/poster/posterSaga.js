import { takeEvery, put, call, select } from 'redux-saga/effects'
import { GET_POSTER_OF_THE_DAY, SEARCH_POSTER_OF_THE_DAY, SET_FAVORITE } from '../constant'
import { setPosterOfTheDay, searchPoster as searchInPosterOfTheDay, updateFavoriteCount } from './posterAction'
import { Toaster } from 'mdi-material-ui'

const getPosters = state => state.posterReducer
function* getPosterOfTheDay() {
  let { posters } = yield select(getPosters)
  if (posters.length === 0) {
    posters = yield fetch('http://localhost:3000/images.json')
    posters = yield posters.json()
  }
  const count = posters.reduce((total, poster) => (poster.isFavorite ? total + 1 : total), 0)
  const sortedPosters = posters.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
  yield put(updateFavoriteCount(count))
  yield put(setPosterOfTheDay(sortedPosters))
}
function* searchPoster({ payload }) {
  // let data = yield searchInPosterOfTheDay()
  const query = payload.toLowerCase()
  if (query === null) getPosterOfTheDay()
  let data = yield fetch('http://localhost:3000/images.json')
  data = yield data.json()
  data = data.filter(obj => obj.title.toLowerCase().includes(query) || obj.tag.toLowerCase().includes(query))
  yield put(setPosterOfTheDay(data.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))))
}
function* setFavoriteSaga({ payload }) {
  const { posters } = yield select(getPosters)
  if (posters.length) {
    let poster = posters[posters.findIndex(x => x.id === payload)]
    poster.isFavorite = !poster.isFavorite
    let count = posters.reduce((total, poster) => (poster.isFavorite ? total + 1 : total), 0)
    yield put(setPosterOfTheDay(posters))
    yield put(updateFavoriteCount(count))
  }
}
function* posterSaga() {
  yield takeEvery(GET_POSTER_OF_THE_DAY, getPosterOfTheDay)
  yield takeEvery(SEARCH_POSTER_OF_THE_DAY, searchPoster)
  yield takeEvery(SET_FAVORITE, setFavoriteSaga)
}

export default posterSaga

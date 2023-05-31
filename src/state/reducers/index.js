import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './rootReducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import posterSaga from './poster/posterSaga'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: combineReducers,
  middleware: () => [sagaMiddleware]
})
sagaMiddleware.run(posterSaga)
export default store

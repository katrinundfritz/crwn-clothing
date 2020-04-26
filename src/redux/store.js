import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import { getDefaultNormalizer } from '@testing-library/react'

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store

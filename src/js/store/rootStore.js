import { createStore, applyMiddleware } from 'redux'

import {
  rootReducer
} from '../reducers/rootReducer'

import {
  websocketMiddleware
} from '../middleware/websocket'


const initialState = {}

const rootStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(websocketMiddleware)
)

export {
  rootStore
}
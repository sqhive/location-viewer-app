import { combineReducers } from 'redux'

import {
  connectionReducer,
  markersReducer
} from './'


const rootReducer = combineReducers({
  markers: markersReducer,
  connection: connectionReducer
})

export {
  rootReducer
}
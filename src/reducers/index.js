import { combineReducers } from 'redux'
import baseReducer from './baseReducer'
import sauceReducer from './sauceReducer'
import toppingReducer from './toppingReducer'
import drone from './drone'



export default combineReducers({
    baseReducer,
    sauceReducer,
    toppingReducer,
    drone
  })
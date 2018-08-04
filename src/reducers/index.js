import { combineReducers } from 'redux'
import baseReducer from './baseReducer'
import sauceReducer from './sauceReducer'


export default combineReducers({
    baseReducer,
    sauceReducer
  })
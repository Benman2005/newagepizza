import { DRONE } from '../actions/drone'

const initialState = []

export default function (state = false, action = {}) {
    switch (action.type) {
      case  DRONE :
      return  !state

    default:
      return state
    }
  }
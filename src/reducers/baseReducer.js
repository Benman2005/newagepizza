import {SELECT_BASE} from '../actions/base'

export const bases = ["small (25cm)", "medium(30cm)", "large(35 cm)"]

const initialState = []

export default function (state =initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case SELECT_BASE:
            return {
                ...state,
            base: action.payload
        }
        default: 
        return state
        }

    
}


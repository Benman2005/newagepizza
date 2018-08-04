import {SELECT_SAUCE} from '../actions/sauce'


export default function (state ={}, action) {

    
    switch (action.type) {
        
        case SELECT_SAUCE:
            switch (action.payload) {
                case "red":
                return{
                    price: 0,
                    sauce: action.payload
                }
                case "white":
                return {
                    price: 1,
                    sauce: action.payload
                }
                case "mix":
                return {
                    price: 1.49,
                    sauce: action.payload
                }
                default:
                return state
            }
        default: 
        return state
        }
   
}


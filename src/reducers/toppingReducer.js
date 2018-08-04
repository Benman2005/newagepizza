import {SELECT_TOPPING1, SELECT_TOPPING2, SELECT_TOPPING3} from '../actions/topping'

// let price1= 0
// let price2= 0
// let price3= 0
export default function (state =0, action) {

    
    switch (action.type) {
        
        case SELECT_TOPPING1:
            return {...state,
                topping1: action.payload,
                price1: 0.49
            }
        case SELECT_TOPPING2:
            return {...state,
                topping2: action.payload,
                price2:  0.49
            }
        case SELECT_TOPPING3:
            return {...state,
                topping3: action.payload,
                price3: 0.49
            }
           
            // switch (action.payload) {
            //     case "":
            //     return{
            //         price: 0,
            //         topping: action.payload
            //     }
            //     case "white":
            //     return {
            //         price: 1,
            //         sauce: action.payload
            //     }
            //     case "mix":
            //     return {
            //         price: 1.49,
            //         sauce: action.payload
            //     }
            //     default:
            //     return state
            // }
        default: 
        return state
        }
   
}


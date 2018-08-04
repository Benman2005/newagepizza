import {SELECT_TOPPING1, SELECT_TOPPING2, SELECT_TOPPING3} from '../actions/topping'


export default function (state =0, action) {

    
    switch (action.type) {
        
        case SELECT_TOPPING1:
            switch (action.payload){
                case "Choose":
                return {...state,
                    topping1: "none",
                    price1: 0
                }
                default:
                return {...state,
                    topping1: action.payload,
                    price1: 0.49
                }
            }
        case SELECT_TOPPING2:
        switch (action.payload){
            case "Choose":
            return {...state,
                topping2: "none",
                price2: 0
            }
            default:
            return {...state,
                topping2: action.payload,
                price2: 0.49
            }
        }
        case SELECT_TOPPING3:
        switch (action.payload){
            case "Choose":
            return {...state,
                topping3: "none",
                price3: 0
            }
            default:
            return {...state,
                topping3: action.payload,
                price3: 0.49
            }
        }

        default: 
        return state
        }
   
}


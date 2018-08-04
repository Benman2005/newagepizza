import {SELECT_BASE} from '../actions/base'

export const bases = ["small (25cm)", "medium(30cm)", "large(35 cm)"]

export default function (state ={}, action) {
    // console.log(action.payload)
    
    switch (action.type) {
        
        case SELECT_BASE:
            switch (action.payload) {
                case "small":
                return{
                    price:8.99,
                    base: action.payload
                }
                case "medium":
                return {
                    price:10.49,
                    base: action.payload
                }
                case "large":
                return {
                    price: 13.49,
                    base: action.payload
                }
            }
        default: 
        return state
        }
   
}


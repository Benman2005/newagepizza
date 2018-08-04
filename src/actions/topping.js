export const SELECT_TOPPING1 = 'SELECT_TOPPING1'
export const SELECT_TOPPING2 = 'SELECT_TOPPING2'
export const SELECT_TOPPING3 = 'SELECT_TOPPING3'

export function selectTopping1(topping) {
    return {
      type: SELECT_TOPPING1,
      payload: topping

    }
} 
export function selectTopping2(topping) {
    return {
      type: SELECT_TOPPING2,
      payload: topping

    }
} 

export function selectTopping3(topping) {
    return {
      type: SELECT_TOPPING3,
      payload: topping

    }
} 
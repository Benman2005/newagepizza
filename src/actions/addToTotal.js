export const ADD_TO_TOTAL = 'ADD_TO_TOTAL'

export function addToTotal(price) {
    return {
      type: ADD_TO_TOTAL,
      payload: price

    }
  } 
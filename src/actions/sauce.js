export const SELECT_SAUCE = 'SELECT_SAUCE'

export function selectSauce(sauce) {
    return {
      type: SELECT_SAUCE,
      payload: sauce

    }
  } 
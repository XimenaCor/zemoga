import * as type from '../types';

const initialState = {
  data: [],
}

export default function votes(state = initialState, action) {
  switch (action.type) {
    case type.SET_DATA:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}
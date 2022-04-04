import * as type from '../types';

const initialState = {
  votes: 0,
}

export default function votes(state = initialState, action) {
  switch (action.type) {
    case type.SET_VOTES:
      return {
        ...state,
        votes: action.payload
      }
    default:
      return state
  }
}
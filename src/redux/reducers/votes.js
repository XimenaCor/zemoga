import * as type from '../types';

const initialState = {
  votes: 0,
  data: [],
  dataElement: null,
}

export default function votes(state = initialState, action) {
  switch (action.type) {
    case type.SET_VOTES:
      return {
        ...state,
        votes: action.payload
      }
    case type.SET_DATA:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}
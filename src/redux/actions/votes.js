import * as type from '../types'

export function setVotes(votes) {
  return {
    type: type.SET_VOTES,
    payload: votes,
  }
}

export function setData(data) {
  return {
    type: type.SET_DATA,
    payload: data,
  }
}

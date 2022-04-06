import * as type from '../types'

export function setData(data) {
  return {
    type: type.SET_DATA,
    payload: data,
  }
}

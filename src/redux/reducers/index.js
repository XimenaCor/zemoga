import { combineReducers } from 'redux';
import votes from './votes';

const rootReducer = combineReducers({
  votes: votes,
});

export default rootReducer;
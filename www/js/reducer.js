import {INCREMENT} from './ActionTypes';

const initialState = {
  count: 0
}

function count(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {count: state.count + 1});
    default:
      return state;
  }
}

export default function rootReducer(state = {}, action) {
  return {count: count(state.count, action)};
}

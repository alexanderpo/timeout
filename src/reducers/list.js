import { ALL_LIST } from '../actions/list';

export default function (state = [], action) {
  switch (action.type) {
    case ALL_LIST:
      return action.payload;
    default:
      return state;
  }
}

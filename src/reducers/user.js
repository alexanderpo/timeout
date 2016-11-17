import { SIGN_IN, LOGOUT } from '../actions/user';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_IN}_SUCCESS`:
      return {
        ...action.payload.user,
        success: action.payload.success,
        id: action.payload.id,
        name: action.payload.name,
        message: action.payload.message,
        token: action.payload.token,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

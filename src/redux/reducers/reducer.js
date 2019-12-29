import { ACTION_LOGIN_USER, ACTION_LOGOUT_USER } from "../actions/actions";

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ACTION_LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case ACTION_LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
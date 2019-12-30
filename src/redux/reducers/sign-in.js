import {ACTION_LOGIN_USER,
        ACTION_LOGOUT_USER,
        ACTION_SET_LOADING_USER,} from "../actions/sign-in";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
};

export const signIn = (state=initialState, action) => {
  switch (action.type) {
    case ACTION_LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case ACTION_SET_LOADING_USER:
      return {
        ...state,
        isLoading: action.payload,
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
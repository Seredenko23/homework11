export const ACTION_LOGIN_USER = 'LOGIN_USER';
export const ACTION_LOGOUT_USER = 'LOGOUT_USER';
export const ACTION_SET_LOADING_USER = 'LOADING_USER';

export const loginUser = (user) => {
  return {
    type: ACTION_LOGIN_USER,
    payload: {
      isLoggedIn: true,
      user: user,
    },
  };
};

export const loading = (isLoading) => {
  return {
    type: ACTION_SET_LOADING_USER,
    payload: isLoading,
  };
};

export const logoutUser = () => {
  return {
    type: ACTION_LOGOUT_USER,
    payload: {},
  };
};


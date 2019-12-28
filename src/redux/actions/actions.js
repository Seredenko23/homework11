export const ACTION_LOGIN_USER = 'LOGIN_USER';
export const ACTION_LOGOUT_USER = 'ACTION_LOGOUT_USER';

export const loginUser = (user) => {
  return {
    type: ACTION_LOGIN_USER,
    payload: user,
  };
};

export const logoutUser = (user) => {
  return {
    type: ACTION_LOGOUT_USER,
    payload: user,
  };
};



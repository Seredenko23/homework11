export const ACTION_LOGIN_USER = 'LOGIN_USER';
export const ACTION_LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = () => {
  return {
    type: ACTION_LOGIN_USER,
    payload: true,
  };
};

export const logoutUser = () => {
  return {
    type: ACTION_LOGIN_USER,
    payload: false,
  };
};


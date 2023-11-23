import { SET_AUTH, SET_AUTH_TOKEN, SET_AUTH_USER } from '../constants/auth.constant';

const AuthReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_AUTH:
    case SET_AUTH_TOKEN:
      return { ...state, ...payload };
    case SET_AUTH_USER:
      return { ...state, user: { ...state?.user, ...payload?.user } };
    default:
      return state;
  }
};

export default AuthReducer;

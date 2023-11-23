import * as AuthConstant from '../constants/auth.constant';
import { request } from '../../../shared/store/actions/request.action';
import * as storageLocal from '../../../utils/storageLocal';

export const changePassword = data =>
  request(AuthConstant.CHANGE_PASSWORD, {
    data,
    form: true,
    method: 'put',
    url: '/change-password',
  });

export const forgotPassword = data =>
  request(AuthConstant.FORGOT_PASSWORD, {
    data,
    form: true,
    method: 'post',
    url: '/forgot-password',
  });

export const login = data =>
  request(AuthConstant.LOGIN, {
    data: { ...data, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone },
    form: true,
    method: 'post',
    url: '/login',
  });

export const logout = () => {
  return request(AuthConstant.LOGOUT, {
    method: 'delete',
    url: '/logout',
  });
};

export const me = () =>
  request(AuthConstant.ME, {
    method: 'post',
    url: '/me',
  });

export const register = data =>
  request(AuthConstant.REGISTER, {
    data,
    form: true,
    method: 'post',
    url: '/register',
  });

export const resetPassword = data =>
  request(AuthConstant.RESET_PASSWORD, {
    data,
    form: true,
    method: 'put',
    url: '/reset-password',
  });

export const getAuthData = key => ({ ...storageLocal.get(key) });

export const removeAuthData = key => storageLocal.remove(key);

export const setAuthData = (key, payload) => {
  if (payload.user) payload.user = { ...payload.user, is_logged_in: !!payload.user.id };
  storageLocal.set(key, { ...getAuthData(key), ...payload });
  return { payload, type: AuthConstant.SET_AUTH };
};

export const setAuthTokenData = (key, token) => {
  storageLocal.set(key, { ...getAuthData(key), token });
  return { payload: { token }, type: AuthConstant.SET_AUTH_TOKEN };
};

export const setAuthUserData = (key, user) => {
  if (user) user = { ...user, is_logged_in: !!user.id };
  storageLocal.set(key, { ...getAuthData(key), user });
  return { payload: { user }, type: AuthConstant.SET_AUTH_USER };
};

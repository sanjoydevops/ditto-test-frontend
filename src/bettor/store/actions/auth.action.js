import { AuthConstant } from '../constants';
import {
  getAuthData,
  removeAuthData,
  setAuthData,
  setAuthTokenData,
  setAuthUserData,
} from '../../../shared/store/actions/auth.action';
import { request } from '../../../shared/store/actions/request.action';
export * from '../../../shared/store/actions/auth.action';

export const getAuth = () => getAuthData(AuthConstant.KEY);

export const removeAuth = () => removeAuthData(AuthConstant.KEY);

export const setAuth = data => setAuthData(AuthConstant.KEY, data);

export const setAuthToken = token => setAuthTokenData(AuthConstant.KEY, token);

export const setAuthUser = user => setAuthUserData(AuthConstant.KEY, user);

export const sendOtp = data =>
  request(AuthConstant.SEND_OTP, {
    data,
    method: 'post',
    url: '/send-otp',
  });

export const verifyOtp = data =>
  request(AuthConstant.VERIFY_OTP, {
    data,
    method: 'put',
    url: '/verify-otp',
  });

import { call, put, takeEvery } from 'redux-saga/effects';

import { AppAction, AuthAction } from '../actions';
import { AuthConstant, WebSocketConstant } from '../constants';

function* AuthSaga() {
  yield takeEvery(AuthConstant.CHANGE_PASSWORD_SUCCESS, changePasswordSuccess);
  yield takeEvery(AuthConstant.LOGIN_SUCCESS, loginSuccess);
  yield takeEvery([AuthConstant.LOGOUT_ERROR, AuthConstant.LOGOUT_SUCCESS], logoutErrorOrSuccess);
  yield takeEvery(AuthConstant.ME_SUCCESS, meSuccess);
  yield takeEvery(AuthConstant.SEND_OTP_SUCCESS, sendOtpSuccess);
  yield takeEvery(AuthConstant.VERIFY_OTP_ERROR, verifyOtpError);
  yield takeEvery(AuthConstant.VERIFY_OTP_SUCCESS, verifyOtpSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* changePasswordSuccess(action) {
  yield put(AuthAction.setAuthUser(action?.payload?.user));
}

function* loginSuccess(action) {
  yield put(AuthAction.setAuth(action?.payload));
}

function* logoutErrorOrSuccess() {
  yield call(AuthAction.removeAuth);
  yield put(AppAction.resetStore());
}

function* meSuccess(action) {
  yield put(AuthAction.setAuthToken(action?.payload?.token));
  yield put(AuthAction.setAuthUser(action?.payload?.user));
}

function* sendOtpSuccess(action) {
  yield put(AppAction.toggle({ key: 'otpVerificationModal', value: { phone: action?.payload?.verification?.phone } }));
}

function* verifyOtpError(action) {
  if ('otp_invalid' === action?.payload?.error?.type) {
    yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.payload?.error?.description } }));
  }
}

function* verifyOtpSuccess(action) {
  yield put(AppAction.toggle({ key: 'otpVerificationModal', value: false }));
  yield put(AppAction.toggle({ key: 'phoneVerified', value: !!action?.payload?.verification?.sid }));
  yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.message } }));
}

function* webSocketMessage(action) {
  // const state = yield select();
  switch (action?.payload?.event) {
    case 'logged-out':
      yield call(AuthAction.removeAuth);
      yield put(AppAction.resetStore());
      break;
    case 'toggled-access-user':
      if (action?.payload?.user?.access === 0) {
        yield call(AuthAction.removeAuth);
        yield put(AppAction.resetStore());
      }
      break;
    case 'updated-coin-balance':
      yield put(AuthAction.setAuthUser(action?.payload?.user));
      break;
    default:
      break;
  }
}

export default AuthSaga;

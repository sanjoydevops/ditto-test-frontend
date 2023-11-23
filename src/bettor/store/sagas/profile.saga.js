import { put, takeEvery } from 'redux-saga/effects';

import { AppAction, AuthAction, DetailAction } from '../actions';
import { ProfileConstant } from '../constants';

function* ProfileSaga() {
  yield takeEvery(ProfileConstant.TOGGLE_PROFILE_NOTIFICATION_SUCCESS, toggleProfileNotificationSuccess);
  yield takeEvery(ProfileConstant.UPDATE_PROFILE_SUCCESS, updateProfileSuccess);
  yield takeEvery([
    ProfileConstant.UPLOAD_PROFILE_COVER_ERROR,
    ProfileConstant.UPLOAD_PROFILE_PHOTO_ERROR,
  ], uploadProfileCoverOrPhotoError);
  yield takeEvery([
    ProfileConstant.UPLOAD_PROFILE_COVER_SUCCESS,
    ProfileConstant.UPLOAD_PROFILE_PHOTO_SUCCESS,
  ], uploadProfileCoverOrPhotoSuccess);
  yield takeEvery(ProfileConstant.VIEW_PROFILE_SUCCESS, viewProfileSuccess);
}

function* toggleProfileNotificationSuccess(action) {
  yield put(AuthAction.setAuthUser(action?.payload?.user));
}

function* updateProfileSuccess(action) {
  yield put(AuthAction.setAuthUser(action?.payload?.user));
}

function* uploadProfileCoverOrPhotoError(action) {
  yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.message } }));
}

function* uploadProfileCoverOrPhotoSuccess(action) {
  yield put(AuthAction.setAuthUser(action?.payload?.user));
  yield put(AppAction.toggle({ key: 'alertModal', value: { message: action?.message } }));
}

function* viewProfileSuccess(action) {
  yield put(DetailAction.setDetail('user', action?.payload?.user));
}

export default ProfileSaga;

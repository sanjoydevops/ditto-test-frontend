import { put, select, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { RestrictedLocationConstant } from '../constants';

function* listAllRestrictedLocationsSuccess(action) {
  yield put(ListAction.setList('restrictedLocation', 'all', action?.payload?.restrictedLocations));
}

function* removeRestrictedLocationSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('restrictedLocation', 'all', [], 'remove', action, state));
}

function* RestrictedLocationSaga() {
  yield takeEvery(RestrictedLocationConstant.LIST_ALL_RESTRICTED_LOCATIONS_SUCCESS, listAllRestrictedLocationsSuccess);
  yield takeEvery(RestrictedLocationConstant.REMOVE_RESTRICTED_LOCATION_SUCCESS, removeRestrictedLocationSuccess);
}

export default RestrictedLocationSaga;

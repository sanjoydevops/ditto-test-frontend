import { put, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { ContactUsConstant } from '../constants';

function* listAllContactUsSuccess(action) {
  yield put(ListAction.setList('contactUs', 'all', action?.payload?.contactUs));
}

function* viewContactUsSuccess(action) {
  yield put(DetailAction.setDetail('contactUs', action?.payload?.contactUs));
}

function* ContactUsSaga() {
  yield takeEvery(ContactUsConstant.LIST_ALL_CONTACT_US_SUCCESS, listAllContactUsSuccess);
  yield takeEvery(ContactUsConstant.VIEW_CONTACT_US_SUCCESS, viewContactUsSuccess);
}

export default ContactUsSaga;

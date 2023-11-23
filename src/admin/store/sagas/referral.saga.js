import { put, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { ReferralConstant } from '../constants';

function* listAllReferralsSuccess(action) {
  yield put(ListAction.setList('referral', 'all', action?.payload?.referrals));
}

function* ReferralSaga() {
  yield takeEvery(ReferralConstant.LIST_ALL_REFERRALS_SUCCESS, listAllReferralsSuccess);
}

export default ReferralSaga;

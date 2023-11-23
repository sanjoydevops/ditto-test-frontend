import { put, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { ReportConstant } from '../constants';

function* fetchJoinedUserReportSuccess(action) {
  yield put(ListAction.setList('report', 'joinedUser', action?.payload?.data));
}

function* fetchReferralReportSuccess(action) {
  yield put(ListAction.setList('report', 'referral', action?.payload?.data));
}

function* fetchTopWinnerReportSuccess(action) {
  yield put(ListAction.setList('report', 'topWinner', action?.payload?.data));
}

function* ReportSaga() {
  yield takeEvery(ReportConstant.FETCH_JOINED_USER_REPORT_SUCCESS, fetchJoinedUserReportSuccess);
  yield takeEvery(ReportConstant.FETCH_REFERRAL_REPORT_SUCCESS, fetchReferralReportSuccess);
  yield takeEvery(ReportConstant.FETCH_TOP_WINNER_REPORT_SUCCESS, fetchTopWinnerReportSuccess);
}

export default ReportSaga;

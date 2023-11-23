import { put, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { ChartConstant } from '../constants';

function* fetchDisputeChartDataSuccess(action) {
  yield put(ListAction.setList('chart', 'dispute', action?.payload?.data));
}

function* fetchJoinedUserChartDataSuccess(action) {
  yield put(ListAction.setList('chart', 'joinedUser', action?.payload?.data));
}

function* fetchPlacedBetByDateChartDataSuccess(action) {
  yield put(ListAction.setList('chart', 'placedBetByDate', action?.payload?.data));
}

function* fetchPlacedBetByTypeChartDataSuccess(action) {
  yield put(ListAction.setList('chart', 'placedBetByType', action?.payload?.data));
}

function* ChartSaga() {
  yield takeEvery(ChartConstant.FETCH_DISPUTE_CHART_DATA_SUCCESS, fetchDisputeChartDataSuccess);
  yield takeEvery(ChartConstant.FETCH_JOINED_USER_CHART_DATA_SUCCESS, fetchJoinedUserChartDataSuccess);
  yield takeEvery(ChartConstant.FETCH_PLACED_BET_BY_DATE_CHART_DATA_SUCCESS, fetchPlacedBetByDateChartDataSuccess);
  yield takeEvery(ChartConstant.FETCH_PLACED_BET_BY_TYPE_CHART_DATA_SUCCESS, fetchPlacedBetByTypeChartDataSuccess);
}

export default ChartSaga;

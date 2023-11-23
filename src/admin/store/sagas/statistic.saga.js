import { put, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { StatisticConstant } from '../constants';

function* fetchLoggedInUserStatisticDataSuccess(action) {
  yield put(ListAction.setList('statistic', 'loggedInUser', action?.payload?.data));
}

function* StatisticSaga() {
  yield takeEvery(StatisticConstant.FETCH_LOGGED_IN_USER_STATISTIC_DATA_SUCCESS, fetchLoggedInUserStatisticDataSuccess);
}

export default StatisticSaga;

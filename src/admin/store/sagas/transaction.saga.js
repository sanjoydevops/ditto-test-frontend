import { put, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { TransactionConstant } from '../constants';

function* listAllTransactionsSuccess(action) {
  yield put(ListAction.setList('transaction', 'all', action?.payload?.transactions));
}

function* TransactionSaga() {
  yield takeEvery(TransactionConstant.LIST_ALL_TRANSACTIONS_SUCCESS, listAllTransactionsSuccess);
}

export default TransactionSaga;

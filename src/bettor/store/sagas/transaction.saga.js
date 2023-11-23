import { put, select, takeEvery } from 'redux-saga/effects';

import { AuthAction, ListAction } from '../actions';
import { TransactionConstant } from '../constants';

function* addTransactionSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('transaction', 'all', { ...action?.payload?.transaction }, 'add', action, state));
  yield put(AuthAction.me());
}

function* listAllTransactionsSuccess(action) {
  yield put(ListAction.setList('transaction', 'all', [...action?.payload?.transactions]));
}

function* TransactionSaga() {
  yield takeEvery(TransactionConstant.ADD_TRANSACTION_SUCCESS, addTransactionSuccess);
  yield takeEvery(TransactionConstant.LIST_ALL_TRANSACTIONS_SUCCESS, listAllTransactionsSuccess);
}

export default TransactionSaga;

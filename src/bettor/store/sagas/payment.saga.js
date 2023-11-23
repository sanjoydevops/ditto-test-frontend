import { put, select, takeEvery } from 'redux-saga/effects';

import { ListAction } from '../actions';
import { PaymentConstant } from '../constants';

function* addPaymentCardSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('paymentCard', 'all', { ...action?.payload?.paymentCard }, 'add', action, state));
}

function* listAllPaymentCardsSuccess(action) {
  yield put(ListAction.setList('paymentCard', 'all', [...action?.payload?.paymentCards]));
}

function* removePaymentCardSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('paymentCard', 'all', { ...action?.payload?.paymentCard }, 'remove', action, state));
}

function* PaymentSaga() {
  yield takeEvery(PaymentConstant.ADD_PAYMENT_CARD_SUCCESS, addPaymentCardSuccess);
  yield takeEvery(PaymentConstant.LIST_ALL_PAYMENT_CARDS_SUCCESS, listAllPaymentCardsSuccess);
  yield takeEvery(PaymentConstant.REMOVE_PAYMENT_CARD_SUCCESS, removePaymentCardSuccess);
}

export default PaymentSaga;

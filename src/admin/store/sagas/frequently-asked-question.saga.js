import { put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { FrequentlyAskedQuestionConstant, WebSocketConstant } from '../constants';

function* FrequentlyAskedQuestionSaga() {
  yield takeEvery(FrequentlyAskedQuestionConstant.CREATE_FREQUENTLY_ASKED_QUESTION_SUCCESS, createFrequentlyAskedQuestionSuccess);
  yield takeEvery(FrequentlyAskedQuestionConstant.LIST_ALL_FREQUENTLY_ASKED_QUESTIONS_SUCCESS, listAllFrequentlyAskedQuestionsSuccess);
  yield takeEvery(FrequentlyAskedQuestionConstant.REMOVE_FREQUENTLY_ASKED_QUESTION_SUCCESS, removeFrequentlyAskedQuestionSuccess);
  yield takeEvery(FrequentlyAskedQuestionConstant.TOGGLE_VISIBILITY_FREQUENTLY_ASKED_QUESTION_SUCCESS, toggleVisibilityFrequentlyAskedQuestionSuccess);
  yield takeEvery(FrequentlyAskedQuestionConstant.UPDATE_FREQUENTLY_ASKED_QUESTION_SUCCESS, updateFrequentlyAskedQuestionSuccess);
  yield takeEvery(FrequentlyAskedQuestionConstant.VIEW_FREQUENTLY_ASKED_QUESTION_SUCCESS, viewFrequentlyAskedQuestionSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* createFrequentlyAskedQuestionSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('frequentlyAskedQuestion', 'all', [], 'add', action, state));
}

function* listAllFrequentlyAskedQuestionsSuccess(action) {
  yield put(ListAction.setList('frequentlyAskedQuestion', 'all', action?.payload?.frequentlyAskedQuestions));
}

function* removeFrequentlyAskedQuestionSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('frequentlyAskedQuestion', 'all', [], 'remove', action, state));
}

function* toggleVisibilityFrequentlyAskedQuestionSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('frequentlyAskedQuestion', 'all', [], 'update', action, state));
}

function* updateFrequentlyAskedQuestionSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('frequentlyAskedQuestion', 'all', [], 'update', action, state));
}

function* viewFrequentlyAskedQuestionSuccess(action) {
  yield put(DetailAction.setDetail('frequentlyAskedQuestion', action?.payload?.frequentlyAskedQuestion));
}

function* webSocketMessage(action) {
  const state = yield select();
  console.log('WebSocketMessage', action, state);
  switch (action?.payload?.event) {
    case 'created-frequently-asked-question':
      break;
    case 'removed-frequently-asked-question':
      break;
    case 'toggled-visibility-frequently-asked-question':
      break;
    case 'updated-frequently-asked-question':
      break;
    default:
      break;
  }
}

export default FrequentlyAskedQuestionSaga;

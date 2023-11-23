import { put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { AboutUsConstant, WebSocketConstant } from '../constants';

function* AboutUsSaga() {
  yield takeEvery(AboutUsConstant.CREATE_ABOUT_US_SUCCESS, createAboutUsSuccess);
  yield takeEvery(AboutUsConstant.LIST_ALL_ABOUT_US_SUCCESS, listAllAboutUsSuccess);
  yield takeEvery(AboutUsConstant.REMOVE_ABOUT_US_SUCCESS, removeAboutUsSuccess);
  yield takeEvery(AboutUsConstant.TOGGLE_VISIBILITY_ABOUT_US_SUCCESS, toggleVisibilityAboutUsSuccess);
  yield takeEvery(AboutUsConstant.UPDATE_ABOUT_US_SUCCESS, updateAboutUsSuccess);
  yield takeEvery(AboutUsConstant.VIEW_ABOUT_US_SUCCESS, viewAboutUsSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* createAboutUsSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('aboutUs', 'all', [], 'add', action, state));
}

function* listAllAboutUsSuccess(action) {
  yield put(ListAction.setList('aboutUs', 'all', action?.payload?.aboutUs));
}

function* removeAboutUsSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('aboutUs', 'all', [], 'remove', action, state));
}

function* toggleVisibilityAboutUsSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('aboutUs', 'all', [], 'update', action, state));
}

function* updateAboutUsSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('aboutUs', 'all', [], 'update', action, state));
}

function* viewAboutUsSuccess(action) {
  yield put(DetailAction.setDetail('aboutUs', action?.payload?.aboutUs));
}

function* webSocketMessage(action) {
  const state = yield select();
  console.log('WebSocketMessage', action, state);
  switch (action?.payload?.event) {
    case 'created-about-us':
      break;
    case 'removed-about-us':
      break;
    case 'toggled-visibility-about-us':
      break;
    case 'updated-about-us':
      break;
    default:
      break;
  }
}

export default AboutUsSaga;

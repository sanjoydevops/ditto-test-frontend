import { put, select, takeEvery } from 'redux-saga/effects';

import { DetailAction, ListAction } from '../actions';
import { VideoTutorialConstant, WebSocketConstant } from '../constants';

function* VideoTutorialSaga() {
  yield takeEvery(VideoTutorialConstant.CREATE_VIDEO_TUTORIAL_SUCCESS, createVideoTutorialSuccess);
  yield takeEvery(VideoTutorialConstant.LIST_ALL_VIDEO_TUTORIALS_SUCCESS, listAllVideoTutorialsSuccess);
  yield takeEvery(VideoTutorialConstant.REMOVE_VIDEO_TUTORIAL_SUCCESS, removeVideoTutorialSuccess);
  yield takeEvery(VideoTutorialConstant.TOGGLE_VISIBILITY_VIDEO_TUTORIAL_SUCCESS, toggleVisibilityVideoTutorialSuccess);
  yield takeEvery(VideoTutorialConstant.UPDATE_VIDEO_TUTORIAL_SUCCESS, updateVideoTutorialSuccess);
  yield takeEvery(VideoTutorialConstant.VIEW_VIDEO_TUTORIAL_SUCCESS, viewVideoTutorialSuccess);
  yield takeEvery(WebSocketConstant.WEBSOCKET_MESSAGE, webSocketMessage);
}

function* createVideoTutorialSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('videoTutorial', 'all', [], 'add', action, state));
}

function* listAllVideoTutorialsSuccess(action) {
  yield put(ListAction.setList('videoTutorial', 'all', action?.payload?.videoTutorials));
}

function* removeVideoTutorialSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('videoTutorial', 'all', [], 'remove', action, state));
}

function* toggleVisibilityVideoTutorialSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('videoTutorial', 'all', [], 'update', action, state));
}

function* updateVideoTutorialSuccess(action) {
  const state = yield select();
  yield put(ListAction.setList('videoTutorial', 'all', [], 'update', action, state));
}

function* viewVideoTutorialSuccess(action) {
  yield put(DetailAction.setDetail('videoTutorial', action?.payload?.videoTutorial));
}

function* webSocketMessage(action) {
  const state = yield select();
  console.log('WebSocketMessage', action, state);
  switch (action?.payload?.event) {
    case 'created-video-tutorial':
      break;
    case 'removed-video-tutorial':
      break;
    case 'toggled-visibility-video-tutorial':
      break;
    case 'updated-video-tutorial':
      break;
    default:
      break;
  }
}

export default VideoTutorialSaga;

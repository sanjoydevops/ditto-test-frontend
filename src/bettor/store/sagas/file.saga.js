import { put, takeEvery } from 'redux-saga/effects';

import { ChatAction } from '../actions';
import { AppConstant } from '../constants';

function* FileSaga() {
  yield takeEvery(AppConstant.UPLOAD_FILE_SUCCESS, uploadFileSuccess);
}

function* uploadFileSuccess(action) {
  const { payload } = action;
  const { file, key, value } = payload;
  switch (key) {
    case 'chatDocument':
      yield put(ChatAction.sendChatMessage(value.messageableType, value.messageableId, { message: file }));
      break;
    default:
      break;
  }
}

export default FileSaga;

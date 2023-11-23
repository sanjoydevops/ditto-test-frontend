import { put, takeEvery } from 'redux-saga/effects';

import { AppAction } from '../actions';
import { AppConstant } from '../constants';

function* FileSaga() {
  yield takeEvery(AppConstant.UPLOAD_FILE_SUCCESS, uploadFileSuccess);
}

function* uploadFileSuccess(action) {
  const { payload } = action;
  const { file, key } = payload;
  switch (key) {
    case 'aboutUsPhoto':
    case 'videoTutorialImage':
      yield put(AppAction.toggle({ key, value: file.url }));
      break;
    default:
      break;
  }
}

export default FileSaga;

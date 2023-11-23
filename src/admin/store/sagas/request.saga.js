import { takeEvery } from 'redux-saga/effects';

import { REQUEST } from '../../../shared/store/constants/app.constant';
import requestSaga from '../../../shared/store/sagas/request.saga';

function* RequestSaga() {
  yield takeEvery(REQUEST, requestSaga, '/admin');
}

export default RequestSaga;
